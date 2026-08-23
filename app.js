
const DB_NAME = "aile-sesli-kitap-db";
const DB_VERSION = 1;
const BOOKS = "books";
const FILES = "files";
const SETTINGS = "settings";

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const audio = $("#audio");
let db;
let books = [];
let currentBook = null;
let currentChapterIndex = 0;
let currentObjectUrl = null;
let deferredPrompt = null;
let sleepTimer = null;
let selectedGenre = "";
const DEFAULT_GENRES=["Roman","Klasik","Tarih","Bilim","Felsefe","Çocuk","Din","Kişisel Gelişim","Diğer"];
let customGenres=[];
const FEATURED_LIBRIVOX_IDS=[47,65,74];
let catalogCache=new Map();

async function fetchJson(url){
  const controller = new AbortController();
  const timer = setTimeout(()=>controller.abort(), 12000);
  try{
    const r = await fetch(url, {signal:controller.signal, mode:"cors", cache:"no-store"});
    if(!r.ok) throw new Error(`HTTP ${r.status}`);
    return await r.json();
  } finally { clearTimeout(timer); }
}

function jsonp(url){
  return new Promise((resolve,reject)=>{
    const cb='lv_cb_'+Date.now()+'_'+Math.random().toString(36).slice(2);
    const s=document.createElement('script');
    const timer=setTimeout(()=>{cleanup();reject(new Error('Katalog zaman aşımı'));},15000);
    function cleanup(){clearTimeout(timer);try{delete window[cb]}catch{};s.remove();}
    window[cb]=(data)=>{cleanup();resolve(data);};
    s.onerror=()=>{cleanup();reject(new Error('JSONP bağlantısı kurulamadı'));};
    const sep=url.includes('?')?'&':'?';
    s.src=url+sep+'format=jsonp&callback='+encodeURIComponent(cb);
    document.head.appendChild(s);
  });
}

async function lvRequest(path, params={}){
  const cleanPath=String(path||'').replace(/^\/+|\/+$/g,'');
  const qs=new URLSearchParams({...params, format:'json'});
  const jsonUrl=`https://librivox.org/api/feed/audiobooks/${cleanPath?cleanPath+'/':''}?${qs.toString()}`;
  try{
    return await fetchJson(jsonUrl);
  }catch(fetchErr){
    const p=new URLSearchParams(params);
    const jsonpUrl=`https://librivox.org/api/feed/audiobooks/${cleanPath?cleanPath+'/':''}?${p.toString()}`;
    try{
      return await jsonp(jsonpUrl);
    }catch(jsonpErr){
      console.error('LibriVox erişim hatası', {fetchErr,jsonpErr,jsonUrl,jsonpUrl});
      throw new Error('LibriVox kataloğuna bağlanılamadı');
    }
  }
}

function lvAuthor(b){
  const a=(b.authors||[])[0]; return a?[a.first_name,a.last_name].filter(Boolean).join(' '):'Bilinmeyen yazar';
}
function lvGenre(b){
  const n=(b.genres||[])[0]?.name||'Klasik';
  if(/children/i.test(n)) return 'Çocuk';
  if(/history/i.test(n)) return 'Tarih';
  if(/philos/i.test(n)) return 'Felsefe';
  if(/fiction|novel/i.test(n)) return 'Roman';
  return 'Klasik';
}
function lvCard(b){
  const cover=b.coverart_jpg||b.coverart_thumbnail||'';
  const lang=b.language||'Bilinmiyor';
  return `<article class="catalog-card">${cover?`<img class="catalog-cover" src="${cover}" alt="">`:`<div class="catalog-cover cover-placeholder">🎧</div>`}<div class="catalog-body"><div class="book-title">${escapeHtml(b.title||'Adsız kitap')}</div><div class="book-author">${escapeHtml(lvAuthor(b))}</div><div class="book-genre">${escapeHtml(lang)} · ${escapeHtml(b.totaltime||'')}</div><span class="source-badge">LibriVox · çevrimiçi</span><div class="catalog-actions"><button class="primary" data-lvadd="${b.id}">Kitaplığıma ekle</button></div></div></article>`;
}
async function fetchLvBook(id){
  if(catalogCache.has(String(id)) && catalogCache.get(String(id)).sections) return catalogCache.get(String(id));
  const d=await lvRequest(`id/${encodeURIComponent(id)}`, {extended:'1',coverart:'1'});
  const b=d?.books?.[0];
  if(!b) throw new Error('Kitap bulunamadı');
  catalogCache.set(String(b.id),b);
  return b;
}
async function loadFeaturedCatalog(){
  const box=$('#catalogFeatured'),status=$('#catalogStatus');
  if(!box) return;
  status.textContent='Ücretsiz kitaplar yükleniyor…';
  try{
    const d=await lvRequest('', {limit:'6',extended:'1',coverart:'1'});
    const arr=(d?.books||[]).slice(0,6);
    arr.forEach(b=>catalogCache.set(String(b.id),b));
    box.innerHTML=arr.length?arr.map(lvCard).join(''):'';
    wireCatalog();
    status.textContent=arr.length?'':'Şu anda öne çıkan kitap alınamadı.';
  }catch(e){
    console.error(e);
    status.textContent='Katalog bağlantısı kurulamadı. Arama kutusundan tekrar deneyebilirsin.';
  }
}
async function searchCatalog(){
  const q=$('#catalogSearch').value.trim(),out=$('#catalogResults'),status=$('#catalogStatus');
  if(!q){out.innerHTML='';status.textContent='Aramak için kitap adı veya yazar yaz.';return;}
  status.textContent='Aranıyor…';out.innerHTML='';
  try{
    let d=await lvRequest(`title/${encodeURIComponent(q)}`, {limit:'12',extended:'1',coverart:'1'});
    let arr=d?.books||[];
    if(!arr.length){
      d=await lvRequest(`author/${encodeURIComponent(q)}`, {limit:'12',extended:'1',coverart:'1'});
      arr=d?.books||[];
    }
    arr.forEach(b=>catalogCache.set(String(b.id),b));
    out.innerHTML=arr.length?arr.map(lvCard).join(''):'<p class="muted">Sonuç bulunamadı. İngilizce kitap adı veya yazar soyadı deneyebilirsin.</p>';
    wireCatalog(); status.textContent='';
  }catch(e){
    console.error(e);
    status.textContent='Katalog servisine ulaşılamadı. Birkaç saniye sonra tekrar dene.';
  }
}
function wireCatalog(){document.querySelectorAll('[data-lvadd]').forEach(btn=>btn.onclick=()=>addLibriVoxBook(btn.dataset.lvadd,btn));}
async function addLibriVoxBook(id,btn){
  if(books.some(b=>String(b.sourceId)===String(id)&&b.source==='librivox')){toast('Bu kitap zaten kütüphanende.');return;}
  const old=btn.textContent;btn.disabled=true;btn.textContent='Ekleniyor…';
  try{
    const b=await fetchLvBook(id);
    const sections=b.sections||[];
    if(!sections.length) throw new Error('Bölüm yok');
    const book={
      id:uid(),title:b.title,author:lvAuthor(b),genre:lvGenre(b),
      cover:b.coverart_jpg||b.coverart_thumbnail||null,
      chapters:sections.map((s,i)=>({
        id:uid(),remoteUrl:s.listen_url,title:s.title||`Bölüm ${i+1}`,
        order:i,progress:0,duration:Number(s.playtime)||0
      })),
      favorite:false,lastPlayedAt:0,currentChapter:0,bookmarks:[],history:[],
      createdAt:Date.now(),source:'librivox',sourceId:String(b.id),
      sourceUrl:b.url_librivox||'',language:b.language||''
    };
    await put(BOOKS,book);books.push(book);render();toast('Ücretsiz kitap kütüphanene eklendi.');
  }catch(e){console.error(e);toast('Kitap eklenemedi.');}
  finally{btn.disabled=false;btn.textContent=old;}
}

function uid(){ return crypto.randomUUID ? crypto.randomUUID() : Date.now()+"-"+Math.random().toString(16).slice(2); }
function fmt(sec){
  if(!Number.isFinite(sec)) return "00:00";
  sec=Math.max(0,Math.floor(sec)); const h=Math.floor(sec/3600), m=Math.floor((sec%3600)/60), s=sec%60;
  return h ? `${h}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}` : `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}
function toast(msg){ const t=$("#toast"); t.textContent=msg; t.classList.remove("hidden"); setTimeout(()=>t.classList.add("hidden"),2200); }

function openDB(){
  return new Promise((resolve,reject)=>{
    const req=indexedDB.open(DB_NAME,DB_VERSION);
    req.onupgradeneeded=e=>{
      const d=e.target.result;
      if(!d.objectStoreNames.contains(BOOKS)) d.createObjectStore(BOOKS,{keyPath:"id"});
      if(!d.objectStoreNames.contains(FILES)) d.createObjectStore(FILES,{keyPath:"id"});
      if(!d.objectStoreNames.contains(SETTINGS)) d.createObjectStore(SETTINGS,{keyPath:"key"});
    };
    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>reject(req.error);
  });
}
function tx(store,mode="readonly"){ return db.transaction(store,mode).objectStore(store); }
function getAll(store){ return new Promise((r,j)=>{ const q=tx(store).getAll(); q.onsuccess=()=>r(q.result); q.onerror=()=>j(q.error); }); }
function getOne(store,key){ return new Promise((r,j)=>{ const q=tx(store).get(key); q.onsuccess=()=>r(q.result); q.onerror=()=>j(q.error); }); }
function put(store,val){ return new Promise((r,j)=>{ const q=tx(store,"readwrite").put(val); q.onsuccess=()=>r(val); q.onerror=()=>j(q.error); }); }
function del(store,key){ return new Promise((r,j)=>{ const q=tx(store,"readwrite").delete(key); q.onsuccess=()=>r(); q.onerror=()=>j(q.error); }); }
function clearStore(store){ return new Promise((r,j)=>{ const q=tx(store,"readwrite").clear(); q.onsuccess=()=>r(); q.onerror=()=>j(q.error); }); }

async function init(){
  db=await openDB();
  books=await getAll(BOOKS);
  const theme=await getOne(SETTINGS,"theme");
  const savedGenres=await getOne(SETTINGS,"genres");
  customGenres=savedGenres?.value||[];
  books.forEach(b=>{b.bookmarks ||= []; b.history ||= [];});
  const dark = !theme || theme.value!=="light";
  document.body.classList.toggle("light",!dark);
  $("#darkModeToggle").checked=dark;
  bind();
  populateGenreSelects();
  render();
  loadFeaturedCatalog();
  if("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js").catch(()=>{});
}

function bind(){
  $("#addBookBtn").onclick=()=>openModal("#addBookModal");
  if($("#catalogSearchBtn")) $("#catalogSearchBtn").onclick=searchCatalog;
  if($("#catalogSearch")) $("#catalogSearch").addEventListener("keydown",e=>{if(e.key==="Enter")searchCatalog();});
  $("#navSettings").onclick=()=>openModal("#settingsModal");
  $("#navLibrary").onclick=()=>window.scrollTo({top:$("#library").offsetTop-130,behavior:"smooth"});
  $("#navFavorites").onclick=()=>window.scrollTo({top:$("#favorites").offsetTop-130,behavior:"smooth"});
  $$("[data-close-modal]").forEach(b=>b.onclick=closeModals);
  $("#modalBackdrop").onclick=closeModals;
  $("#saveBookBtn").onclick=saveBook;
  $("#saveEditBookBtn").onclick=saveEditedBook;
  $("#searchInput").oninput=renderLibrary;
  $("#genreFilter").onchange=e=>{selectedGenre=e.target.value;renderLibrary();};
  $("#closePlayer").onclick=closePlayer;
  $("#playPause").onclick=togglePlay;
  $("#rewind").onclick=()=>audio.currentTime=Math.max(0,audio.currentTime-15);
  $("#forward").onclick=()=>audio.currentTime=Math.min(audio.duration||Infinity,audio.currentTime+15);
  $("#prevChapter").onclick=()=>playChapter(Math.max(0,currentChapterIndex-1));
  $("#nextChapter").onclick=()=>playChapter(Math.min((currentBook?.chapters.length||1)-1,currentChapterIndex+1));
  $("#seek").oninput=e=>{ if(Number.isFinite(audio.duration)) audio.currentTime=(+e.target.value/100)*audio.duration; };
  $("#speedBtn").onclick=changeSpeed;
  $("#favoriteBtn").onclick=toggleFavorite;
  $("#bookmarkBtn").onclick=addBookmark;
  $("#showBookmarksBtn").onclick=showBookmarks;
  $("#sleepBtn").onclick=setSleepTimer;
  $("#manageGenresBtn").onclick=()=>{renderGenreManager();openModal("#genresModal");};
  $("#addGenreBtn").onclick=addGenre;
  $("#showHistoryBtn").onclick=showHistory;
  $("#showStorageBtn").onclick=showStorage;
  $("#darkModeToggle").onchange=async e=>{
    const dark=e.target.checked; document.body.classList.toggle("light",!dark);
    await put(SETTINGS,{key:"theme",value:dark?"dark":"light"});
  };
  $("#clearBtn").onclick=async()=>{
    if(confirm("Tüm kitaplar, ses dosyaları ve ilerleme bilgileri silinsin mi?")){
      audio.pause(); revokeUrl(); await clearStore(BOOKS); await clearStore(FILES); books=[]; currentBook=null; closeModals(); render(); toast("Yerel veriler silindi.");
    }
  };
  $("#exportBtn").onclick=()=>alert("Bu sürümde veriler tamamen cihaz içindedir. Bulut veya ortak aile kitaplığı kullanılmaz.");
  audio.addEventListener("timeupdate",onTime);
  audio.addEventListener("loadedmetadata",onTime);
  audio.addEventListener("play",()=>$("#playPause").textContent="❚❚");
  audio.addEventListener("pause",()=>$("#playPause").textContent="▶");
  audio.addEventListener("ended",()=>{ if(currentBook && currentChapterIndex<currentBook.chapters.length-1) playChapter(currentChapterIndex+1); });
  window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("#installBtn").classList.remove("hidden");});
  $("#installBtn").onclick=async()=>{ if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$("#installBtn").classList.add("hidden");}};
}

function openModal(id){ $("#modalBackdrop").classList.remove("hidden"); $(id).classList.remove("hidden"); }
function allGenres(){return [...new Set([...DEFAULT_GENRES,...customGenres,...books.map(b=>b.genre).filter(Boolean)])].sort((a,b)=>a.localeCompare(b,"tr"));}
function populateGenreSelects(){const opts=allGenres().map(g=>`<option>${escapeHtml(g)}</option>`).join(""); $("#bookGenreInput").innerHTML=opts; $("#editGenreInput").innerHTML=opts;}
async function addGenre(){const name=$("#newGenreInput").value.trim();if(!name)return;if(!allGenres().some(g=>g.toLowerCase()===name.toLowerCase()))customGenres.push(name);await put(SETTINGS,{key:"genres",value:customGenres});$("#newGenreInput").value="";populateGenreSelects();renderGenreManager();toast("Tür eklendi.");}
function renderGenreManager(){const used=new Set(books.map(b=>b.genre));$("#genreManageList").innerHTML=allGenres().map(g=>`<div class="manage-item"><div><strong>${escapeHtml(g)}</strong><div class="meta">${used.has(g)?"Kitaplarda kullanılıyor":"Kullanılmıyor"}</div></div><div class="manage-actions">${customGenres.includes(g)?`<button data-rmgenre="${escapeHtml(g)}">Sil</button>`:""}</div></div>`).join("");$$(`[data-rmgenre]`).forEach(b=>b.onclick=async()=>{const g=b.dataset.rmgenre;if(books.some(x=>x.genre===g)){toast("Bu tür kullanımda olduğu için silinemez.");return;}customGenres=customGenres.filter(x=>x!==g);await put(SETTINGS,{key:"genres",value:customGenres});populateGenreSelects();renderGenreManager();});}
function closeModals(){ $("#modalBackdrop").classList.add("hidden"); $$(".modal").forEach(m=>m.classList.add("hidden")); }

async function blobToDataURL(blob){
  return new Promise((resolve,reject)=>{ const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(blob); });
}

async function saveBook(){
  const title=$("#bookTitleInput").value.trim();
  const author=$("#bookAuthorInput").value.trim();
  const genre=$("#bookGenreInput").value;
  const audios=[...$("#audioInput").files];
  if(!title || !audios.length){ toast("Kitap adı ve en az bir ses bölümü gerekli."); return; }
  $("#saveBookBtn").disabled=true; $("#saveBookBtn").textContent="Kaydediliyor…";
  try{
    let cover=null;
    const coverFile=$("#coverInput").files[0];
    if(coverFile) cover=await blobToDataURL(coverFile);

    const id=uid(), chapters=[];
    for(let i=0;i<audios.length;i++){
      const f=audios[i], fileId=uid();
      await put(FILES,{id:fileId,blob:f,name:f.name,type:f.type});
      chapters.push({id:uid(),fileId,title:f.name.replace(/\.[^.]+$/,""),order:i,progress:0,duration:0});
    }
    const book={id,title,author:author||"Bilinmeyen yazar",genre,cover,chapters,favorite:false,lastPlayedAt:0,currentChapter:0,bookmarks:[],history:[],createdAt:Date.now()};
    await put(BOOKS,book); books.push(book);
    resetAddForm(); closeModals(); render(); toast("Kitap kütüphaneye eklendi.");
  }catch(e){ console.error(e); toast("Kitap kaydedilemedi. Cihaz depolama iznini kontrol edin."); }
  finally{ $("#saveBookBtn").disabled=false; $("#saveBookBtn").textContent="Kitabı kaydet"; }
}
function resetAddForm(){ ["#bookTitleInput","#bookAuthorInput","#coverInput","#audioInput"].forEach(s=>$(s).value=""); }
function editBook(id){const b=books.find(x=>x.id===id);if(!b)return;$("#editBookId").value=b.id;$("#editTitleInput").value=b.title;$("#editAuthorInput").value=b.author;populateGenreSelects();$("#editGenreInput").value=b.genre;$("#editCoverInput").value="";openModal("#editBookModal");}
async function saveEditedBook(){const b=books.find(x=>x.id===$("#editBookId").value);if(!b)return;const t=$("#editTitleInput").value.trim();if(!t){toast("Kitap adı boş olamaz.");return;}b.title=t;b.author=$("#editAuthorInput").value.trim()||"Bilinmeyen yazar";b.genre=$("#editGenreInput").value;const cf=$("#editCoverInput").files[0];if(cf)b.cover=await blobToDataURL(cf);await put(BOOKS,b);closeModals();render();toast("Kitap güncellendi.");}

function bookProgress(book){
  if(!book.chapters.length) return 0;
  const done=book.chapters.reduce((sum,c,i)=>{
    if(i<book.currentChapter) return sum+1;
    if(i===book.currentChapter && c.duration>0) return sum+Math.min(1,(c.progress||0)/c.duration);
    return sum;
  },0);
  return Math.round(done/book.chapters.length*100);
}
function coverMarkup(book,cls="cover"){
  return book.cover ? `<img class="${cls}" src="${book.cover}" alt="${escapeHtml(book.title)} kapağı">`
    : `<div class="${cls} cover-placeholder">🎧</div>`;
}
function escapeHtml(s=""){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}

function render(){
  renderGenres(); renderLibrary(); renderFavorites(); renderContinue();
}
function renderGenres(){
  const genres=[...new Set(books.map(b=>b.genre))].sort();
  $("#genreFilter").innerHTML=`<option value="">Tüm türler</option>`+genres.map(g=>`<option ${g===selectedGenre?"selected":""}>${escapeHtml(g)}</option>`).join("");
  $("#genreChips").innerHTML=[`<button class="chip ${!selectedGenre?"active":""}" data-genre="">Tümü</button>`,...genres.map(g=>`<button class="chip ${selectedGenre===g?"active":""}" data-genre="${escapeHtml(g)}">${escapeHtml(g)}</button>`)].join("");
  $$("#genreChips .chip").forEach(b=>b.onclick=()=>{selectedGenre=b.dataset.genre;$("#genreFilter").value=selectedGenre;renderGenres();renderLibrary();});
}
function filteredBooks(){
  const q=$("#searchInput").value.trim().toLowerCase();
  return books.filter(b=>(!selectedGenre||b.genre===selectedGenre)&&(!q||`${b.title} ${b.author}`.toLowerCase().includes(q)));
}
function card(book){
  const p=bookProgress(book);
  return `<article class="book-card">
    <button class="card-main" data-open="${book.id}">
      ${coverMarkup(book)}
      <div class="book-info">
        <div class="book-title">${escapeHtml(book.title)}</div>
        <div class="book-author">${escapeHtml(book.author)}</div>
        <div class="book-genre">${escapeHtml(book.genre)} · ${book.chapters.length} bölüm ${book.source==='librivox'?'<span class="remote-badge">· ÇEVRİMİÇİ</span>':''}</div>
        <div class="progress"><span style="width:${p}%"></span></div>
      </div>
    </button>
    <div class="card-actions">
      <button class="icon-btn edit-btn" data-edit="${book.id}">✎</button><button class="icon-btn" data-fav="${book.id}">${book.favorite?"♥":"♡"}</button>
      <button class="icon-btn" data-del="${book.id}">⋮</button>
    </div>
  </article>`;
}
function wireCards(scope=document){
  scope.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>openBook(b.dataset.open));
  scope.querySelectorAll("[data-edit]").forEach(b=>b.onclick=e=>{e.stopPropagation();editBook(b.dataset.edit);});
  scope.querySelectorAll("[data-fav]").forEach(b=>b.onclick=async e=>{e.stopPropagation();const bk=books.find(x=>x.id===b.dataset.fav);bk.favorite=!bk.favorite;await put(BOOKS,bk);render();});
  scope.querySelectorAll("[data-del]").forEach(b=>b.onclick=async e=>{e.stopPropagation();const bk=books.find(x=>x.id===b.dataset.del);if(confirm(`"${bk.title}" silinsin mi?`)){for(const c of bk.chapters){ if(c.fileId) await del(FILES,c.fileId); }await del(BOOKS,bk.id);books=books.filter(x=>x.id!==bk.id);render();}});
}
function renderLibrary(){
  const list=filteredBooks(); $("#library").innerHTML=list.map(card).join(""); $("#emptyState").classList.toggle("hidden",books.length>0); wireCards($("#library"));
}
function renderFavorites(){
  const list=books.filter(b=>b.favorite); $("#favorites").innerHTML=list.length?list.map(card).join(""):`<p class="muted">Henüz favori kitap yok.</p>`; wireCards($("#favorites"));
}
function renderContinue(){
  const list=books.filter(b=>b.lastPlayedAt).sort((a,b)=>b.lastPlayedAt-a.lastPlayedAt);
  const sec=$("#continueSection"); if(!list.length){sec.classList.add("hidden");return;}
  const b=list[0], p=bookProgress(b);sec.classList.remove("hidden");
  $("#continueCard").innerHTML=`<div class="continue-card">${coverMarkup(b)}<div><div class="eyebrow">${escapeHtml(b.genre)}</div><h3>${escapeHtml(b.title)}</h3><p class="muted">${escapeHtml(b.author)} · %${p}</p><button class="primary" data-continue="${b.id}">▶ Devam et</button></div></div>`;
  $("[data-continue]").onclick=()=>openBook(b.id);
}

async function openBook(id){
  currentBook=books.find(b=>b.id===id); if(!currentBook) return; currentBook.bookmarks ||= []; currentBook.history ||= [];
  currentChapterIndex=currentBook.currentChapter||0;
  $("#playerTitle").textContent=currentBook.title; $("#playerAuthor").textContent=currentBook.author; $("#playerGenre").textContent=currentBook.genre;
  $("#playerCover").src=currentBook.cover||makePlaceholderData(currentBook.title);
  $("#favoriteBtn").textContent=currentBook.favorite?"♥ Favori":"♡ Favori";
  renderChapters();
  $("#playerSheet").classList.remove("hidden"); $("#playerSheet").setAttribute("aria-hidden","false");
  await loadChapter(currentChapterIndex,false);
}
function closePlayer(){ $("#playerSheet").classList.add("hidden"); $("#playerSheet").setAttribute("aria-hidden","true"); }
function makePlaceholderData(title){
  const t=(title||"Sesli Kitap").slice(0,24).replace(/[<>&'"]/g,"");
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="100%" height="100%" fill="#172033"/><text x="50%" y="45%" text-anchor="middle" font-size="84">🎧</text><text x="50%" y="62%" text-anchor="middle" font-family="sans-serif" font-size="32" fill="#f8fafc">${t}</text></svg>`)}`;
}
function revokeUrl(){ if(currentObjectUrl){URL.revokeObjectURL(currentObjectUrl);currentObjectUrl=null;} }
async function loadChapter(index,autoplay=true){
  if(!currentBook || !currentBook.chapters[index]) return;
  currentChapterIndex=index; currentBook.currentChapter=index; currentBook.lastPlayedAt=Date.now(); currentBook.history.unshift({chapter:index,chapterTitle:currentBook.chapters[index].title,at:Date.now()}); currentBook.history=currentBook.history.slice(0,40);
  const ch=currentBook.chapters[index]; $("#playerChapter").textContent=ch.title||`Bölüm ${index+1}`;
  revokeUrl();
  if(ch.remoteUrl){ audio.src=ch.remoteUrl; currentObjectUrl=null; }
  else { const file=await getOne(FILES,ch.fileId); if(!file){toast("Ses dosyası bulunamadı.");return;} currentObjectUrl=URL.createObjectURL(file.blob); audio.src=currentObjectUrl; }
  audio.playbackRate=Number($("#speedBtn").dataset.speed||1);
  audio.onloadedmetadata=async()=>{ch.duration=audio.duration||ch.duration||0;audio.currentTime=Math.min(ch.progress||0,Math.max(0,(audio.duration||0)-1));await put(BOOKS,currentBook);onTime();};
  await put(BOOKS,currentBook); renderChapters(); renderContinue();
  if(autoplay) audio.play().catch(()=>{});
  updateMediaSession();
}
function playChapter(i){ if(currentBook && i>=0 && i<currentBook.chapters.length) loadChapter(i,true); }
function togglePlay(){ if(!audio.src) return; audio.paused?audio.play().catch(()=>{}):audio.pause(); }
function onTime(){
  if(!currentBook) return;
  const ch=currentBook.chapters[currentChapterIndex];
  if(ch){ ch.progress=audio.currentTime||0; if(Number.isFinite(audio.duration)) ch.duration=audio.duration; }
  $("#currentTime").textContent=fmt(audio.currentTime); $("#duration").textContent=fmt(audio.duration);
  $("#seek").value=Number.isFinite(audio.duration)&&audio.duration>0?(audio.currentTime/audio.duration*100):0;
  scheduleProgressSave();
}
let saveTimer=null;
function scheduleProgressSave(){ clearTimeout(saveTimer);saveTimer=setTimeout(async()=>{if(currentBook){await put(BOOKS,currentBook);renderContinue();}},900); }
function renderChapters(){
  if(!currentBook) return;
  $("#chaptersList").innerHTML=currentBook.chapters.map((c,i)=>`<div class="chapter-item ${i===currentChapterIndex?"active":""}"><button data-ch="${i}">${i===currentChapterIndex&&!audio.paused?"❚❚":"▶"}</button><div><strong>${escapeHtml(c.title||`Bölüm ${i+1}`)}</strong><div class="muted small">${c.duration?`${fmt(c.progress||0)} / ${fmt(c.duration)}`:"Hazır"}</div></div><span>${i+1}</span></div>`).join("");
  $$("#chaptersList [data-ch]").forEach(b=>b.onclick=()=>playChapter(+b.dataset.ch));
}
function changeSpeed(){
  const speeds=[0.75,1,1.25,1.5,1.75,2]; const cur=Number($("#speedBtn").dataset.speed||1); const next=speeds[(speeds.indexOf(cur)+1)%speeds.length];
  $("#speedBtn").dataset.speed=next;$("#speedBtn").textContent=`${next}× Hız`;audio.playbackRate=next;
}
async function toggleFavorite(){ if(!currentBook)return;currentBook.favorite=!currentBook.favorite;await put(BOOKS,currentBook);$("#favoriteBtn").textContent=currentBook.favorite?"♥ Favori":"♡ Favori";renderFavorites();renderLibrary(); }
async function addBookmark(){
  if(!currentBook)return;
  currentBook.bookmarks ||= [];
  currentBook.bookmarks.push({id:uid(),chapter:currentChapterIndex,time:audio.currentTime||0,createdAt:Date.now()});
  await put(BOOKS,currentBook); toast(`Yer imi eklendi: ${fmt(audio.currentTime)}`);
}
function setSleepTimer(){
  const mins=prompt('Uyku zamanlayıcısı: 15 / 30 / 45 / 60 dakika veya "bölüm" yazın.', "30"); if(!mins)return;
  clearTimeout(sleepTimer);
  if(String(mins).toLowerCase().startsWith("böl")){const once=()=>{audio.pause();audio.removeEventListener("ended",once);toast("Bölüm sonunda durduruldu.");};audio.addEventListener("ended",once);toast("Bölüm sonunda duracak.");return;}
  const n=Number(mins); if(!Number.isFinite(n)||n<=0){toast("Geçerli bir dakika girin.");return;}
  sleepTimer=setTimeout(()=>{audio.pause();toast("Uyku zamanlayıcısı sesi durdurdu.");},n*60000);toast(`${n} dakikalık uyku zamanlayıcısı kuruldu.`);
}

function showBookmarks(){if(!currentBook){toast("Önce bir kitap açın.");return;}const list=currentBook.bookmarks||[];$("#bookmarksList").innerHTML=list.length?list.slice().reverse().map(b=>{const ch=currentBook.chapters[b.chapter];return `<div class="manage-item"><div><strong>${escapeHtml(ch?.title||`Bölüm ${b.chapter+1}`)}</strong><div class="meta">${fmt(b.time)} · ${new Date(b.createdAt).toLocaleString("tr-TR")}</div></div><div class="manage-actions"><button data-jumpbm="${b.id}">Git</button><button data-delbm="${b.id}">Sil</button></div></div>`;}).join(""):`<p class="muted">Bu kitapta yer imi yok.</p>`;$$(`[data-jumpbm]`).forEach(x=>x.onclick=async()=>{const b=list.find(v=>v.id===x.dataset.jumpbm);closeModals();await loadChapter(b.chapter,false);audio.currentTime=b.time;audio.play().catch(()=>{});});$$(`[data-delbm]`).forEach(x=>x.onclick=async()=>{currentBook.bookmarks=currentBook.bookmarks.filter(v=>v.id!==x.dataset.delbm);await put(BOOKS,currentBook);showBookmarks();});openModal("#bookmarksModal");}
function showHistory(){const rows=books.flatMap(b=>(b.history||[]).map(h=>({...h,bookTitle:b.title,bookId:b.id}))).sort((a,b)=>b.at-a.at).slice(0,60);$("#historyList").innerHTML=rows.length?rows.map(h=>`<div class="manage-item"><div><strong>${escapeHtml(h.bookTitle)}</strong><div class="meta">${escapeHtml(h.chapterTitle||`Bölüm ${h.chapter+1}`)} · ${new Date(h.at).toLocaleString("tr-TR")}</div></div><div class="manage-actions"><button data-hopen="${h.bookId}">Aç</button></div></div>`).join(""):`<p class="muted">Henüz dinleme geçmişi yok.</p>`;$$(`[data-hopen]`).forEach(b=>b.onclick=()=>{closeModals();openBook(b.dataset.hopen);});openModal("#historyModal");}
function humanBytes(n){if(!Number.isFinite(n))return "Bilinmiyor";const u=["B","KB","MB","GB"];let i=0;while(n>=1024&&i<u.length-1){n/=1024;i++;}return `${n.toFixed(i?1:0)} ${u[i]}`;}
async function showStorage(){const rows=await getAll(FILES);const local=rows.reduce((s,f)=>s+(f.blob?.size||0),0);let est=null;try{est=await navigator.storage?.estimate?.();}catch{}$("#storageInfo").innerHTML=`<strong>${books.length}</strong> kitap<br><strong>${rows.length}</strong> ses dosyası/bölüm<br>Ses dosyaları: <strong>${humanBytes(local)}</strong>${est?.usage!=null?`<br>Tarayıcı kullanımı: <strong>${humanBytes(est.usage)}</strong>`:""}${est?.quota?`<br>Ayrılabilir alan tahmini: <strong>${humanBytes(est.quota)}</strong>`:""}`;openModal("#storageModal");}

function updateMediaSession(){
  if(!("mediaSession" in navigator)||!currentBook) return;
  const ch=currentBook.chapters[currentChapterIndex];
  navigator.mediaSession.metadata=new MediaMetadata({
    title:ch?.title||currentBook.title, artist:currentBook.author, album:currentBook.title,
    artwork: currentBook.cover?[{src:currentBook.cover,sizes:"512x512"}]:[]
  });
  navigator.mediaSession.setActionHandler("play",()=>audio.play());
  navigator.mediaSession.setActionHandler("pause",()=>audio.pause());
  navigator.mediaSession.setActionHandler("seekbackward",d=>audio.currentTime=Math.max(0,audio.currentTime-(d.seekOffset||15)));
  navigator.mediaSession.setActionHandler("seekforward",d=>audio.currentTime=Math.min(audio.duration||Infinity,audio.currentTime+(d.seekOffset||15)));
  navigator.mediaSession.setActionHandler("previoustrack",()=>playChapter(Math.max(0,currentChapterIndex-1)));
  navigator.mediaSession.setActionHandler("nexttrack",()=>playChapter(Math.min(currentBook.chapters.length-1,currentChapterIndex+1)));
}

init().catch(e=>{console.error(e);alert("Uygulama başlatılamadı: "+e.message);});
