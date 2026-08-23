
const DB_NAME="aile-sesli-kitap-db", DB_VERSION=1, BOOKS="books", FILES="files", SETTINGS="settings";
const CATALOG=[{"id": "ask-i-memnu", "title": "Aşk-ı Memnu", "author": "Halit Ziya Uşaklıgil", "category": "Roman", "wiki": "Aşk-ı Memnu", "desc": "Servet-i Fünun döneminin en tanınmış romanlarından biri. Yasak bir aşkın aile içindeki sonuçlarını anlatır.", "cover": "c1"}, {"id": "mai-ve-siyah", "title": "Mai ve Siyah", "author": "Halit Ziya Uşaklıgil", "category": "Roman", "wiki": "Mai ve Siyah", "desc": "Hayallerle gerçekler arasında sıkışan Ahmet Cemil'in edebiyat ve hayat mücadelesi.", "cover": "c7"}, {"id": "nemide", "title": "Nemide", "author": "Halit Ziya Uşaklıgil", "category": "Roman", "wiki": "Nemide", "desc": "Aşk, kıskançlık ve kırılganlık etrafında şekillenen erken dönem Halit Ziya romanı.", "cover": "c4"}, {"id": "kirik-hayatlar", "title": "Kırık Hayatlar", "author": "Halit Ziya Uşaklıgil", "category": "Roman", "wiki": "Kırık Hayatlar", "desc": "Aile, sadakat ve toplumsal baskılar üzerine klasik bir roman.", "cover": "c2"}, {"id": "pembe-incili-kaftan", "title": "Pembe İncili Kaftan", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Pembe İncili Kaftan", "desc": "Onur, devlet ve kişisel gurur üzerine unutulmaz bir Ömer Seyfettin hikâyesi.", "cover": "c6"}, {"id": "kasagi", "title": "Kaşağı", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Kaşağı", "desc": "Çocukluk, suçluluk ve vicdan üzerine Türk edebiyatının en bilinen hikâyelerinden.", "cover": "c5"}, {"id": "falaka", "title": "Falaka", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Falaka", "desc": "Eski okul hayatını mizah ve eleştiriyle anlatan klasik hikâye.", "cover": "c3"}, {"id": "perili-kosk", "title": "Perili Köşk", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Perili Köşk", "desc": "Batıl inanç, çıkar ve mizahın iç içe geçtiği kısa hikâye.", "cover": "c8"}, {"id": "yuksek-okceler", "title": "Yüksek Ökçeler", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Yüksek Ökçeler", "desc": "Görünüş ile gerçek arasındaki farkı mizahi biçimde anlatır.", "cover": "c1"}, {"id": "yalniz-efe", "title": "Yalnız Efe", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Yalnız Efe", "desc": "Adalet arayışı ve cesaret üzerine güçlü bir Anadolu hikâyesi.", "cover": "c2"}, {"id": "diyet", "title": "Diyet", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Diyet", "desc": "Onur ve borç duygusunu merkezine alan çarpıcı bir kısa hikâye.", "cover": "c7"}, {"id": "forsa", "title": "Forsa", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Forsa", "desc": "Esaret, umut ve vatan sevgisi üzerine klasik hikâye.", "cover": "c5"}, {"id": "basini-vermeyen-sehit", "title": "Başını Vermeyen Şehit", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Başını Vermeyen Şehit", "desc": "Tarihî motiflerle örülmüş destansı bir hikâye.", "cover": "c6"}, {"id": "and", "title": "And", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "And", "desc": "Çocukluk arkadaşlığı, sadakat ve fedakârlık üzerine.", "cover": "c4"}, {"id": "bomba", "title": "Bomba", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Bomba", "desc": "Balkan coğrafyasındaki siyasi şiddet ve insan trajedisi üzerine sert bir hikâye.", "cover": "c8"}, {"id": "bahar-ve-kelebekler", "title": "Bahar ve Kelebekler", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Bahar ve Kelebekler", "desc": "Kuşaklar ve değişen hayat anlayışları üzerine hüzünlü bir hikâye.", "cover": "c3"}, {"id": "ilk-cinayet", "title": "İlk Cinayet", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "İlk Cinayet", "desc": "Çocukluk hafızası ve vicdan üzerine kısa, yoğun bir anlatı.", "cover": "c1"}, {"id": "topuz", "title": "Topuz", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Topuz", "desc": "Tarih, güç ve diplomasi ekseninde ilerleyen bir hikâye.", "cover": "c6"}, {"id": "pembe-menekse", "title": "Pembe Menekşe", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Pembe Menekşe", "desc": "Duygusal tonu güçlü kısa bir Ömer Seyfettin hikâyesi.", "cover": "c4"}, {"id": "kir-sinegi", "title": "Kır Sineği", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Kır Sineği", "desc": "Hatıra ve kayıp duygusunu küçük bir nesne üzerinden anlatır.", "cover": "c5"}, {"id": "buse-i-mader", "title": "Buse-i Mader", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Buse-i Mader", "desc": "Şefkat ve anne sevgisi üzerine kısa bir hikâye.", "cover": "c7"}, {"id": "araba-sevdasi", "title": "Araba Sevdası", "author": "Recaizade Mahmut Ekrem", "category": "Roman", "wiki": "Araba Sevdası", "desc": "Yanlış Batılılaşmayı hicveden Türk romanının temel klasiklerinden.", "cover": "c3"}, {"id": "serguzest", "title": "Sergüzeşt", "author": "Samipaşazade Sezai", "category": "Roman", "wiki": "Sergüzeşt", "desc": "Esaret ve insan onuru üzerine Tanzimat döneminin önemli romanı.", "cover": "c2"}, {"id": "karabibik", "title": "Karabibik", "author": "Nabizade Nâzım", "category": "Roman", "wiki": "Karabibik", "desc": "Anadolu köylüsünü gerçekçi bir bakışla anlatan öncü eser.", "cover": "c5"}, {"id": "zehra", "title": "Zehra", "author": "Nabizade Nâzım", "category": "Roman", "wiki": "Zehra", "desc": "Kıskançlık ve psikolojik çözümlemeleriyle öne çıkan erken dönem roman.", "cover": "c8"}, {"id": "intibah", "title": "İntibah", "author": "Namık Kemal", "category": "Roman", "wiki": "İntibah", "desc": "Tutku, aldanış ve sonuçları üzerine Tanzimat dönemi romanı.", "cover": "c1"}, {"id": "cezmi", "title": "Cezmi", "author": "Namık Kemal", "category": "Roman", "wiki": "Cezmi", "desc": "Tarihî olayları ve kahramanlık temasını işleyen klasik roman.", "cover": "c6"}, {"id": "vatan-yahut-silistre", "title": "Vatan Yahut Silistre", "author": "Namık Kemal", "category": "Tiyatro", "wiki": "Vatan Yahut Silistre", "desc": "Vatan sevgisi ve fedakârlık temasını merkeze alan ünlü tiyatro eseri.", "cover": "c3"}, {"id": "felatun-rakim", "title": "Felatun Bey ile Rakım Efendi", "author": "Ahmet Mithat Efendi", "category": "Roman", "wiki": "Felâtun Bey ile Râkım Efendi", "desc": "Yanlış ve doğru Batılılaşma tiplerini karşı karşıya getiren klasik roman.", "cover": "c7"}, {"id": "esrar-i-cinayat", "title": "Esrar-ı Cinayat", "author": "Ahmet Mithat Efendi", "category": "Polisiye", "wiki": "Esrar-ı Cinayat", "desc": "Türk edebiyatının ilk polisiye örneklerinden biri.", "cover": "c8"}, {"id": "henuz-on-yedi-yasinda", "title": "Henüz On Yedi Yaşında", "author": "Ahmet Mithat Efendi", "category": "Roman", "wiki": "Henüz On Yedi Yaşında", "desc": "Toplumsal hayat ve ahlak tartışmaları etrafında gelişen roman.", "cover": "c4"}, {"id": "murebbiye", "title": "Mürebbiye", "author": "Hüseyin Rahmi Gürpınar", "category": "Roman", "wiki": "Mürebbiye", "desc": "Toplumsal ikiyüzlülük ve aile yaşamını mizahla ele alan roman.", "cover": "c2"}, {"id": "sipsevdi", "title": "Şıpsevdi", "author": "Hüseyin Rahmi Gürpınar", "category": "Roman", "wiki": "Şıpsevdi", "desc": "Taklitçi Batılılaşmayı hicveden güçlü bir toplumsal roman.", "cover": "c6"}, {"id": "gulyabani", "title": "Gulyabani", "author": "Hüseyin Rahmi Gürpınar", "category": "Mizah", "wiki": "Gulyabani", "desc": "Batıl inançları mizah ve gerilimle ele alan sevilen klasik.", "cover": "c5"}, {"id": "kuyruklu-yildiz", "title": "Kuyruklu Yıldız Altında Bir İzdivaç", "author": "Hüseyin Rahmi Gürpınar", "category": "Roman", "wiki": "Kuyruklu Yıldız Altında Bir İzdivaç", "desc": "Halley kuyruklu yıldızı paniği üzerinden toplumu hicveden roman.", "cover": "c1"}, {"id": "sik", "title": "Şık", "author": "Hüseyin Rahmi Gürpınar", "category": "Roman", "wiki": "Şık", "desc": "Gösteriş merakı ve yanlış Batılılaşma üzerine mizahi roman.", "cover": "c7"}, {"id": "safahat", "title": "Safahat", "author": "Mehmet Âkif Ersoy", "category": "Şiir", "wiki": "Safahat", "desc": "Mehmet Âkif'in şiir külliyatının ana eseri.", "cover": "c3"}, {"id": "sermin", "title": "Şermin", "author": "Tevfik Fikret", "category": "Şiir", "wiki": "Şermin", "desc": "Çocuklar için yazılmış şiirlerden oluşan klasik eser.", "cover": "c4"}, {"id": "rubab-i-sikeste", "title": "Rübab-ı Şikeste", "author": "Tevfik Fikret", "category": "Şiir", "wiki": "Rübab-ı Şikeste", "desc": "Servet-i Fünun şiirinin temel kitaplarından.", "cover": "c8"}, {"id": "turkculugun-esaslari", "title": "Türkçülüğün Esasları", "author": "Ziya Gökalp", "category": "Düşünce", "wiki": "Türkçülüğün Esasları", "desc": "Ziya Gökalp'in kültür ve toplum görüşlerini sistemleştirdiği eser.", "cover": "c2"}, {"id": "altin-isik", "title": "Altın Işık", "author": "Ziya Gökalp", "category": "Masal", "wiki": "Altın Işık", "desc": "Masal, destan ve şiir unsurlarını bir araya getiren eser.", "cover": "c6"}, {"id": "hac-yolunda", "title": "Hac Yolunda", "author": "Cenap Şahabettin", "category": "Gezi", "wiki": "Hac Yolunda", "desc": "Gezi izlenimleri ve gözlemlerden oluşan klasik eser.", "cover": "c5"}];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const audio=$("#audio");
let db,books=[],selectedCatalogCategory="Tümü",currentBook=null,currentChapter=0,currentObjectUrl=null,deferredPrompt=null;
let tts={playing:false,paused:false,segments:[],segmentIndex:0,utterance:null};
let voices=[],sleepTimer=null,saveTimer=null;

function uid(){return crypto.randomUUID?crypto.randomUUID():Date.now()+"-"+Math.random().toString(16).slice(2)}
function esc(s=""){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.remove("hidden");setTimeout(()=>t.classList.add("hidden"),2300)}
function loading(show,text="Hazırlanıyor…"){$("#loading").classList.toggle("hidden",!show);$("#loadingText").textContent=text}
function fmt(sec){if(!Number.isFinite(sec))return"00:00";sec=Math.max(0,Math.floor(sec));const h=Math.floor(sec/3600),m=Math.floor((sec%3600)/60),s=sec%60;return h?`${h}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`:`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`}
function bytes(n){if(!Number.isFinite(n))return"Bilinmiyor";const u=["B","KB","MB","GB"];let i=0;while(n>=1024&&i<u.length-1){n/=1024;i++}return`${n.toFixed(i?1:0)} ${u[i]}`}
function openDB(){return new Promise((r,j)=>{const q=indexedDB.open(DB_NAME,DB_VERSION);q.onupgradeneeded=e=>{const d=e.target.result;if(!d.objectStoreNames.contains(BOOKS))d.createObjectStore(BOOKS,{keyPath:"id"});if(!d.objectStoreNames.contains(FILES))d.createObjectStore(FILES,{keyPath:"id"});if(!d.objectStoreNames.contains(SETTINGS))d.createObjectStore(SETTINGS,{keyPath:"key"})};q.onsuccess=()=>r(q.result);q.onerror=()=>j(q.error)})}
function store(s,m="readonly"){return db.transaction(s,m).objectStore(s)}
function getAll(s){return new Promise((r,j)=>{const q=store(s).getAll();q.onsuccess=()=>r(q.result);q.onerror=()=>j(q.error)})}
function getOne(s,k){return new Promise((r,j)=>{const q=store(s).get(k);q.onsuccess=()=>r(q.result);q.onerror=()=>j(q.error)})}
function put(s,v){return new Promise((r,j)=>{const q=store(s,"readwrite").put(v);q.onsuccess=()=>r(v);q.onerror=()=>j(q.error)})}
function del(s,k){return new Promise((r,j)=>{const q=store(s,"readwrite").delete(k);q.onsuccess=()=>r();q.onerror=()=>j(q.error)})}
function clearStore(s){return new Promise((r,j)=>{const q=store(s,"readwrite").clear();q.onsuccess=()=>r();q.onerror=()=>j(q.error)})}

async function init(){
  db=await openDB(); books=await getAll(BOOKS);
  books.forEach(b=>{b.bookmarks||=[];b.history||=[]});
  const theme=await getOne(SETTINGS,"theme"), rate=await getOne(SETTINGS,"ttsRate"), pitch=await getOne(SETTINGS,"ttsPitch");
  if(rate)$("#rateRange").value=rate.value;if(pitch)$("#pitchRange").value=pitch.value;
  document.body.classList.toggle("light",theme?.value==="light");$("#darkToggle").checked=theme?.value!=="light";
  bind();renderCatalog();renderAll();initVoices();updateRateLabels();
  if("serviceWorker"in navigator)navigator.serviceWorker.register("./sw.js").catch(()=>{});
}
function bind(){
  $("#heroExplore").onclick=()=>$("#catalogSection").scrollIntoView({behavior:"smooth"});
  $("#heroContinue").onclick=()=>{const b=latestBook();if(b)openBook(b.id)};
  $("#catalogSearchBtn").onclick=renderCatalog;$("#catalogSearch").oninput=()=>{if(!$("#catalogSearch").value)renderCatalog()};
  $("#librarySearch").oninput=renderLibrary;$("#libraryGenre").onchange=renderLibrary;
  $("#addBookBtn").onclick=()=>openModal("#addModal");$("#saveAudioBook").onclick=saveAudioBook;
  $$("[data-close]").forEach(x=>x.onclick=closeOverlays);$("[data-close-player]").onclick=closePlayer;$("#backdrop").onclick=closeOverlays;
  $$("[data-nav]").forEach(b=>b.onclick=()=>navTo(b.dataset.nav,b));
  $("#miniOpen").onclick=()=>{if(currentBook)showPlayer()};$("#miniPlay").onclick=togglePlay;
  $("#playBtn").onclick=togglePlay;$("#prevBtn").onclick=prevChapter;$("#nextBtn").onclick=nextChapter;$("#backBtn").onclick=backAction;$("#forwardBtn").onclick=forwardAction;
  $("#speedBtn").onclick=cycleSpeed;$("#bookmarkBtn").onclick=addBookmark;$("#bookmarksBtn").onclick=showBookmarks;$("#favBtn").onclick=toggleFavorite;$("#sleepBtn").onclick=setSleep;
  $("#progressRange").oninput=e=>seekProgress(+e.target.value);
  $("#rateRange").oninput=async e=>{$("#rateValue").textContent=(+e.target.value).toFixed(2)+"×";await put(SETTINGS,{key:"ttsRate",value:+e.target.value})};
  $("#pitchRange").oninput=async e=>{$("#pitchValue").textContent=(+e.target.value).toFixed(2);await put(SETTINGS,{key:"ttsPitch",value:+e.target.value})};
  $("#voiceSelect").onchange=async e=>put(SETTINGS,{key:"ttsVoice",value:e.target.value});
  $("#testVoiceBtn").onclick=testVoice;$("#darkToggle").onchange=async e=>{document.body.classList.toggle("light",!e.target.checked);await put(SETTINGS,{key:"theme",value:e.target.checked?"dark":"light"})};
  $("#historyBtn").onclick=showHistory;$("#storageBtn").onclick=showStorage;$("#clearBtn").onclick=clearData;
  audio.addEventListener("timeupdate",onAudioTime);audio.addEventListener("play",()=>syncPlayIcons());audio.addEventListener("pause",()=>syncPlayIcons());
  audio.addEventListener("ended",()=>{if(currentBook&&currentChapter<currentBook.chapters.length-1)loadChapter(currentChapter+1,true)});
  window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("#installBtn").classList.remove("hidden")});
  $("#installBtn").onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$("#installBtn").classList.add("hidden")}};
}
function navTo(name,btn){$$(".bottom-nav button").forEach(x=>x.classList.remove("active"));btn.classList.add("active");if(name==="home")window.scrollTo({top:0,behavior:"smooth"});if(name==="discover")$("#catalogSection").scrollIntoView({behavior:"smooth"});if(name==="library")$("#myLibrarySection").scrollIntoView({behavior:"smooth"});if(name==="settings")openModal("#settingsModal")}
function openModal(id){$("#backdrop").classList.remove("hidden");$(id).classList.remove("hidden")}
function closeOverlays(){$("#backdrop").classList.add("hidden");$$(".modal,#detailSheet").forEach(x=>x.classList.add("hidden"))}
function showPlayer(){$("#playerSheet").classList.remove("hidden")}
function closePlayer(){$("#playerSheet").classList.add("hidden")}
function coverHtml(item,detail=false){return `<div class="${detail?"detail-cover":"book-cover"} ${item.cover||"c1"}"><span class="cover-mark">${item.source==="tts"||item.wiki?"TTS":"SES"}</span><div class="cover-title">${esc(item.title)}</div></div>`}
function catalogCard(x){return `<article class="catalog-card"><button class="cover-card" data-cat="${x.id}">${coverHtml(x)}<div class="card-title">${esc(x.title)}</div><div class="card-author">${esc(x.author)}</div></button></article>`}
function renderCatalog(){
  const cats=["Tümü",...new Set(CATALOG.map(x=>x.category))];
  $("#categoryChips").innerHTML=cats.map(c=>`<button class="chip ${c===selectedCatalogCategory?"active":""}" data-catfilter="${esc(c)}">${esc(c)}</button>`).join("");
  $$("[data-catfilter]").forEach(b=>b.onclick=()=>{selectedCatalogCategory=b.dataset.catfilter;renderCatalog()});
  const q=$("#catalogSearch").value.trim().toLocaleLowerCase("tr");
  let list=CATALOG.filter(x=>(selectedCatalogCategory==="Tümü"||x.category===selectedCatalogCategory)&&(!q||`${x.title} ${x.author}`.toLocaleLowerCase("tr").includes(q)));
  const groups=q?[[`Arama sonuçları (${list.length})`,list]]:[
    ["Başlangıç için seçtiklerimiz",list.filter(x=>["ask-i-memnu","pembe-incili-kaftan","araba-sevdasi","gulyabani","serguzest","mai-ve-siyah"].includes(x.id))],
    ["Roman Klasikleri",list.filter(x=>x.category==="Roman").slice(0,14)],
    ["Ömer Seyfettin Hikâyeleri",list.filter(x=>x.author==="Ömer Seyfettin").slice(0,16)],
    ["Kısa Dinlemelikler",list.filter(x=>x.category==="Hikâye").slice(0,14)],
    ["Şiir, Düşünce ve Diğer",list.filter(x=>["Şiir","Düşünce","Masal","Gezi","Tiyatro","Polisiye","Mizah"].includes(x.category)).slice(0,16)]
  ];
  $("#featuredShelves").innerHTML=groups.filter(g=>g[1].length).map(g=>`<div class="shelf"><div class="shelf-head"><h3>${g[0]}</h3></div><div class="rail">${g[1].map(catalogCard).join("")}</div></div>`).join("")||`<p class="muted">Sonuç bulunamadı.</p>`;
  $$("[data-cat]").forEach(b=>b.onclick=()=>showCatalogDetail(b.dataset.cat));
}
function showCatalogDetail(id){
  const x=CATALOG.find(v=>v.id===id);if(!x)return;
  $("#detailCover").className=`detail-cover ${x.cover}`;$("#detailCover").innerHTML=`<div class="cover-title">${esc(x.title)}</div>`;
  $("#detailCategory").textContent=x.category;$("#detailTitle").textContent=x.title;$("#detailAuthor").textContent=x.author;$("#detailDesc").textContent=x.desc;
  const exists=books.find(b=>b.catalogId===x.id);
  $("#detailAddBtn").textContent=exists?"▶ Kitaplığımda — Dinle":"Kitaplığıma Ekle ve Dinle";
  $("#detailAddBtn").onclick=()=>exists?openBook(exists.id):addTtsCatalogBook(x);
  $("#backdrop").classList.remove("hidden");$("#detailSheet").classList.remove("hidden");
}
async function wikiFetch(title){
  const api="https://tr.wikisource.org/w/api.php?"+new URLSearchParams({origin:"*",action:"parse",page:title,prop:"text",format:"json",formatversion:"2"});
  let r=await fetch(api);let j=await r.json();
  if(j.error){
    const s="https://tr.wikisource.org/w/api.php?"+new URLSearchParams({origin:"*",action:"query",list:"search",srsearch:title,srlimit:"5",format:"json",formatversion:"2"});
    const sj=await (await fetch(s)).json();const hit=sj?.query?.search?.find(v=>!/^Kişi:|^Dosya:|^Dizin:|^Sayfa:/.test(v.title))||sj?.query?.search?.[0];
    if(!hit)throw new Error("Metin bulunamadı");
    r=await fetch("https://tr.wikisource.org/w/api.php?"+new URLSearchParams({origin:"*",action:"parse",page:hit.title,prop:"text",format:"json",formatversion:"2"}));j=await r.json();
  }
  if(!j.parse?.text)throw new Error("Metin alınamadı");
  return {title:j.parse.title||title,html:j.parse.text};
}
function extractText(html){
  const doc=new DOMParser().parseFromString(html,"text/html");
  doc.querySelectorAll("script,style,table,.mw-editsection,.navbox,.infobox,.metadata,.references,.printfooter,.sistersitebox,sup.reference").forEach(x=>x.remove());
  const root=doc.querySelector(".mw-parser-output")||doc.body;
  let text=root.innerText.replace(/\[düzenle\]/gi,"").replace(/\n{3,}/g,"\n\n").replace(/[ \t]+/g," ").trim();
  text=text.replace(/^(İçindekiler|Dil ekle|Konu ekle)[\s\S]{0,500}?(?=\n\n)/i,"").trim();
  return text;
}
function splitBookText(text){
  const paras=text.split(/\n{2,}/).map(x=>x.trim()).filter(x=>x.length>25);
  const chapters=[];let cur=[],len=0;
  for(const p of paras){if(len+p.length>7500&&cur.length){chapters.push(cur.join("\n\n"));cur=[];len=0}cur.push(p);len+=p.length}
  if(cur.length)chapters.push(cur.join("\n\n"));
  return chapters.length?chapters:[text];
}
async function addTtsCatalogBook(x){
  loading(true,`“${x.title}” hazırlanıyor…`);
  try{
    const data=await wikiFetch(x.wiki),text=extractText(data.html);
    if(text.length<400)throw new Error("Metin çok kısa");
    const parts=splitBookText(text),chs=[];
    for(let i=0;i<parts.length;i++){const fid=uid();await put(FILES,{id:fid,type:"text",text:parts[i],size:new Blob([parts[i]]).size});chs.push({id:uid(),fileId:fid,title:`Bölüm ${i+1}`,order:i,segmentIndex:0,progress:0})}
    const b={id:uid(),catalogId:x.id,title:x.title,author:x.author,genre:x.category,coverClass:x.cover,source:"tts",wikiTitle:data.title,chapters:chs,favorite:false,lastPlayedAt:0,currentChapter:0,bookmarks:[],history:[],createdAt:Date.now()};
    await put(BOOKS,b);books.push(b);closeOverlays();renderAll();toast("Kitap hazır. Türkçe TTS ile okunacak.");await openBook(b.id,true);
  }catch(e){console.error(e);toast("Bu eserin metni şu anda alınamadı. Başka bir eser deneyebilirsin.")}
  finally{loading(false)}
}
function latestBook(){return books.filter(b=>b.lastPlayedAt).sort((a,b)=>b.lastPlayedAt-a.lastPlayedAt)[0]}
function renderAll(){renderLibrary();renderFavorites();renderContinue();populateGenres()}
function libraryCard(b){const p=bookProgress(b);return `<article class="library-card"><button class="cover-card" data-openbook="${b.id}">${coverHtml({...b,cover:b.coverClass||"c1"})}<div class="card-title">${esc(b.title)}</div><div class="card-author">${esc(b.author)} · %${p}</div></button><button class="card-menu" data-menu="${b.id}">⋮</button></article>`}
function populateGenres(){const gs=[...new Set(books.map(b=>b.genre))].sort((a,b)=>a.localeCompare(b,"tr"));$("#libraryGenre").innerHTML=`<option value="">Tüm türler</option>`+gs.map(g=>`<option>${esc(g)}</option>`).join("");$("#addGenre").innerHTML=["Roman","Hikâye","Çocuk","Tarih","Felsefe","Din","Kişisel Gelişim","Diğer"].map(g=>`<option>${g}</option>`).join("")}
function renderLibrary(){
  const q=$("#librarySearch").value.trim().toLocaleLowerCase("tr"),g=$("#libraryGenre").value;
  const list=books.filter(b=>(!g||b.genre===g)&&(!q||`${b.title} ${b.author}`.toLocaleLowerCase("tr").includes(q)));
  $("#libraryGrid").innerHTML=list.map(libraryCard).join("");$("#libraryEmpty").classList.toggle("hidden",books.length>0);
  wireLibrary($("#libraryGrid"));
}
function wireLibrary(scope){
  scope.querySelectorAll("[data-openbook]").forEach(b=>b.onclick=()=>openBook(b.dataset.openbook));
  scope.querySelectorAll("[data-menu]").forEach(b=>b.onclick=()=>bookMenu(b.dataset.menu));
}
function renderFavorites(){const list=books.filter(b=>b.favorite);$("#favoritesRail").innerHTML=list.length?list.map(libraryCard).join(""):`<p class="muted">Henüz favori yok.</p>`;wireLibrary($("#favoritesRail"))}
function renderContinue(){const b=latestBook();$("#continueSection").classList.toggle("hidden",!b);$("#heroContinue").classList.toggle("hidden",!b);if(b){$("#continueRail").innerHTML=libraryCard(b);wireLibrary($("#continueRail"))}}
function bookProgress(b){if(!b.chapters?.length)return 0;let completed=b.currentChapter||0;const ch=b.chapters[b.currentChapter||0];let part=0;if(b.source==="tts")part=ch?.progress||0;else if(ch?.duration)part=Math.min(1,(ch.progress||0)/ch.duration);return Math.round((completed+part)/b.chapters.length*100)}
async function bookMenu(id){const b=books.find(x=>x.id===id);if(!b)return;$("#listModalTitle").textContent=b.title;$("#listModalBody").innerHTML=`<div class="list-item"><div><strong>${esc(b.author)}</strong><div class="meta">${esc(b.genre)} · %${bookProgress(b)}</div></div></div><button class="btn secondary full" id="menuFav">${b.favorite?"♥ Favoriden Çıkar":"♡ Favoriye Ekle"}</button><button class="btn danger full" id="menuDelete">Kitabı Sil</button>`;openModal("#listModal");$("#menuFav").onclick=async()=>{b.favorite=!b.favorite;await put(BOOKS,b);closeOverlays();renderAll()};$("#menuDelete").onclick=async()=>{if(confirm(`“${b.title}” silinsin mi?`)){for(const c of b.chapters)if(c.fileId)await del(FILES,c.fileId);await del(BOOKS,b.id);books=books.filter(x=>x.id!==b.id);if(currentBook?.id===b.id)stopPlayback();closeOverlays();renderAll()}}}
async function saveAudioBook(){
  const title=$("#addTitle").value.trim(),files=[...$("#addAudio").files];if(!title||!files.length){toast("Kitap adı ve en az bir ses dosyası gerekli.");return}
  loading(true,"Ses dosyaları kaydediliyor…");
  try{let coverData=null;if($("#addCover").files[0])coverData=await blobToDataURL($("#addCover").files[0]);const chs=[];for(let i=0;i<files.length;i++){const f=files[i],fid=uid();await put(FILES,{id:fid,type:"audio",blob:f,name:f.name,size:f.size});chs.push({id:uid(),fileId:fid,title:f.name.replace(/\.[^.]+$/,""),order:i,progress:0,duration:0})}const b={id:uid(),title,author:$("#addAuthor").value.trim()||"Bilinmeyen yazar",genre:$("#addGenre").value,coverData,coverClass:"c8",source:"audio",chapters:chs,favorite:false,lastPlayedAt:0,currentChapter:0,bookmarks:[],history:[],createdAt:Date.now()};await put(BOOKS,b);books.push(b);closeOverlays();renderAll();toast("Sesli kitap eklendi.")}finally{loading(false)}}
function blobToDataURL(blob){return new Promise((r,j)=>{const x=new FileReader();x.onload=()=>r(x.result);x.onerror=j;x.readAsDataURL(blob)})}
async function openBook(id,auto=false){
  stopPlayback(false);currentBook=books.find(b=>b.id===id);if(!currentBook)return;currentChapter=currentBook.currentChapter||0;currentBook.lastPlayedAt=Date.now();currentBook.history.unshift({at:Date.now(),chapter:currentChapter});currentBook.history=currentBook.history.slice(0,50);await put(BOOKS,currentBook);
  $("#playerBigCover").className=`player-big-cover ${currentBook.coverClass||"c1"}`;$("#playerBigCover").innerHTML=`<div class="cover-title">${esc(currentBook.title)}</div>`;
  $("#playerTitle").textContent=currentBook.title;$("#playerAuthor").textContent=currentBook.author;$("#playerMode").textContent=currentBook.source==="tts"?"TÜRKÇE TTS":"SES DOSYASI";
  $("#favBtn").textContent=currentBook.favorite?"♥ Favori":"♡ Favori";$("#backLabel").textContent=currentBook.source==="tts"?"¶":"15";$("#forwardLabel").textContent=currentBook.source==="tts"?"¶":"15";
  await loadChapter(currentChapter,auto);renderAll();updateMini();showPlayer();
}
async function loadChapter(i,auto=true){
  if(!currentBook||!currentBook.chapters[i])return;stopPlayback(false);currentChapter=i;currentBook.currentChapter=i;const ch=currentBook.chapters[i];$("#playerChapter").textContent=ch.title||`Bölüm ${i+1}`;renderChapters();
  if(currentBook.source==="tts"){const f=await getOne(FILES,ch.fileId);const text=f?.text||"";tts.segments=segmentText(text);tts.segmentIndex=Math.min(ch.segmentIndex||0,Math.max(0,tts.segments.length-1));tts.playing=false;updateTtsProgress();if(auto)startTts()}
  else{const f=await getOne(FILES,ch.fileId);if(!f?.blob){toast("Ses dosyası bulunamadı.");return}revokeUrl();currentObjectUrl=URL.createObjectURL(f.blob);audio.src=currentObjectUrl;audio.playbackRate=Number($("#speedBtn").dataset.speed||1);audio.onloadedmetadata=async()=>{ch.duration=audio.duration||0;audio.currentTime=Math.min(ch.progress||0,Math.max(0,(audio.duration||0)-1));await put(BOOKS,currentBook);onAudioTime()};if(auto)audio.play().catch(()=>{})}
  currentBook.lastPlayedAt=Date.now();await put(BOOKS,currentBook);updateMini();syncPlayIcons();
}
function segmentText(text){const raw=text.replace(/\n+/g," ").match(/[^.!?…]+[.!?…]+|[^.!?…]+$/g)||[text];const out=[];let buf="";for(const s of raw){const t=s.trim();if(!t)continue;if((buf+" "+t).length<260)buf+=(buf?" ":"")+t;else{if(buf)out.push(buf);buf=t}}if(buf)out.push(buf);return out}
async function initVoices(){
  if(!("speechSynthesis"in window)){$("#voiceSelect").innerHTML="<option>TTS desteklenmiyor</option>";return}
  const fill=async()=>{voices=speechSynthesis.getVoices();const tr=voices.filter(v=>/^tr([-_]|$)/i.test(v.lang));const list=tr.length?tr:voices;const saved=(await getOne(SETTINGS,"ttsVoice"))?.value;$("#voiceSelect").innerHTML=list.map(v=>`<option value="${esc(v.name)}" ${v.name===saved?"selected":""}>${esc(v.name)} (${esc(v.lang)})${v.default?" · varsayılan":""}</option>`).join("")||"<option>Ses bulunamadı</option>"};
  await fill();speechSynthesis.onvoiceschanged=fill;
}
function selectedVoice(){return voices.find(v=>v.name===$("#voiceSelect").value)||voices.find(v=>/^tr([-_]|$)/i.test(v.lang))||voices[0]}
function startTts(){
  if(!currentBook||currentBook.source!=="tts"||!tts.segments.length)return;
  speechSynthesis.cancel();tts.playing=true;tts.paused=false;speakNext();
}
function speakNext(){
  if(!tts.playing||tts.segmentIndex>=tts.segments.length){if(tts.segmentIndex>=tts.segments.length)onTtsChapterEnd();return}
  const u=new SpeechSynthesisUtterance(tts.segments[tts.segmentIndex]);u.lang="tr-TR";u.rate=+$("#rateRange").value;u.pitch=+$("#pitchRange").value;const v=selectedVoice();if(v)u.voice=v;
  u.onend=async()=>{if(!tts.playing)return;tts.segmentIndex++;await saveTtsProgress();updateTtsProgress();speakNext()};
  u.onerror=e=>{if(e.error!=="canceled"&&e.error!=="interrupted")console.warn(e);syncPlayIcons()};
  tts.utterance=u;speechSynthesis.speak(u);syncPlayIcons();
}
async function saveTtsProgress(){if(!currentBook)return;const ch=currentBook.chapters[currentChapter];ch.segmentIndex=tts.segmentIndex;ch.progress=tts.segments.length?Math.min(1,tts.segmentIndex/tts.segments.length):0;scheduleSave()}
function pauseTts(){if(!tts.playing)return;speechSynthesis.cancel();tts.playing=false;saveTtsProgress();syncPlayIcons()}
function onTtsChapterEnd(){tts.playing=false;const ch=currentBook.chapters[currentChapter];ch.progress=1;ch.segmentIndex=tts.segments.length;scheduleSave();if(currentChapter<currentBook.chapters.length-1)loadChapter(currentChapter+1,true);else syncPlayIcons()}
function togglePlay(){if(!currentBook)return;if(currentBook.source==="tts")tts.playing?pauseTts():startTts();else audio.paused?audio.play().catch(()=>{}):audio.pause()}
function prevChapter(){if(currentBook&&currentChapter>0)loadChapter(currentChapter-1,true)}
function nextChapter(){if(currentBook&&currentChapter<currentBook.chapters.length-1)loadChapter(currentChapter+1,true)}
function backAction(){if(currentBook?.source==="tts"){speechSynthesis.cancel();tts.segmentIndex=Math.max(0,tts.segmentIndex-3);saveTtsProgress();updateTtsProgress();if(tts.playing)speakNext()}else audio.currentTime=Math.max(0,audio.currentTime-15)}
function forwardAction(){if(currentBook?.source==="tts"){speechSynthesis.cancel();tts.segmentIndex=Math.min(tts.segments.length-1,tts.segmentIndex+3);saveTtsProgress();updateTtsProgress();if(tts.playing)speakNext()}else audio.currentTime=Math.min(audio.duration||Infinity,audio.currentTime+15)}
function seekProgress(v){if(!currentBook)return;if(currentBook.source==="tts"){speechSynthesis.cancel();tts.segmentIndex=Math.floor((v/100)*Math.max(1,tts.segments.length-1));saveTtsProgress();updateTtsProgress();if(tts.playing)speakNext()}else if(Number.isFinite(audio.duration))audio.currentTime=(v/100)*audio.duration}
function updateTtsProgress(){const p=tts.segments.length?tts.segmentIndex/tts.segments.length*100:0;$("#progressRange").value=p;$("#progressLeft").textContent=`%${Math.round(p)}`;$("#progressRight").textContent=`${tts.segmentIndex+1} / ${tts.segments.length} parça`;updateMini()}
function onAudioTime(){if(!currentBook||currentBook.source==="tts")return;const ch=currentBook.chapters[currentChapter];ch.progress=audio.currentTime||0;if(Number.isFinite(audio.duration))ch.duration=audio.duration;const p=audio.duration?audio.currentTime/audio.duration*100:0;$("#progressRange").value=p;$("#progressLeft").textContent=fmt(audio.currentTime);$("#progressRight").textContent=fmt(audio.duration);scheduleSave();updateMini()}
function scheduleSave(){clearTimeout(saveTimer);saveTimer=setTimeout(async()=>{if(currentBook){await put(BOOKS,currentBook);renderContinue()}},700)}
function renderChapters(){if(!currentBook)return;$("#chaptersList").innerHTML=currentBook.chapters.map((c,i)=>`<div class="chapter-row ${i===currentChapter?"active":""}"><button data-ch="${i}">▶</button><div><strong>${esc(c.title||`Bölüm ${i+1}`)}</strong><div class="muted">${currentBook.source==="tts"?`%${Math.round((c.progress||0)*100)}`:c.duration?`${fmt(c.progress||0)} / ${fmt(c.duration)}`:"Hazır"}</div></div><span>${i+1}</span></div>`).join("");$$("[data-ch]").forEach(b=>b.onclick=()=>loadChapter(+b.dataset.ch,true))}
function syncPlayIcons(){const playing=currentBook?(currentBook.source==="tts"?tts.playing:!audio.paused):false;$("#playBtn").textContent=playing?"❚❚":"▶";$("#miniPlay").textContent=playing?"❚❚":"▶"}
function updateMini(){if(!currentBook){$("#miniPlayer").classList.add("hidden");return}$("#miniPlayer").classList.remove("hidden");$("#miniTitle").textContent=currentBook.title;$("#miniSubtitle").textContent=currentBook.chapters[currentChapter]?.title||"";$("#miniCover").className=`mini-cover ${currentBook.coverClass||"c1"}`;syncPlayIcons()}
function stopPlayback(clear=true){audio.pause();speechSynthesis?.cancel?.();tts.playing=false;if(clear){currentBook=null;$("#miniPlayer").classList.add("hidden")}syncPlayIcons()}
function revokeUrl(){if(currentObjectUrl){URL.revokeObjectURL(currentObjectUrl);currentObjectUrl=null}}
function cycleSpeed(){if(currentBook?.source==="tts"){let v=+$("#rateRange").value+.1;if(v>1.5)v=.7;$("#rateRange").value=v;$("#rateRange").dispatchEvent(new Event("input"));$("#speedBtn").textContent=v.toFixed(1)+"×";if(tts.playing){speechSynthesis.cancel();speakNext()}}else{const s=[.75,1,1.25,1.5,1.75,2],cur=Number($("#speedBtn").dataset.speed||1),n=s[(s.indexOf(cur)+1)%s.length];$("#speedBtn").dataset.speed=n;$("#speedBtn").textContent=n+"×";audio.playbackRate=n}}
async function toggleFavorite(){if(!currentBook)return;currentBook.favorite=!currentBook.favorite;await put(BOOKS,currentBook);$("#favBtn").textContent=currentBook.favorite?"♥ Favori":"♡ Favori";renderAll()}
async function addBookmark(){if(!currentBook)return;const pos=currentBook.source==="tts"?tts.segmentIndex:(audio.currentTime||0);currentBook.bookmarks.push({id:uid(),chapter:currentChapter,pos,at:Date.now(),type:currentBook.source});await put(BOOKS,currentBook);toast("Yer imi eklendi.")}
function showBookmarks(){if(!currentBook)return;$("#listModalTitle").textContent="Yer İmleri";const arr=currentBook.bookmarks||[];$("#listModalBody").innerHTML=arr.length?arr.slice().reverse().map(b=>`<div class="list-item"><div><strong>${esc(currentBook.chapters[b.chapter]?.title||"Bölüm")}</strong><div class="meta">${b.type==="tts"?`Parça ${b.pos+1}`:fmt(b.pos)} · ${new Date(b.at).toLocaleString("tr-TR")}</div></div><div class="list-actions"><button data-bmgo="${b.id}">Git</button><button data-bmdel="${b.id}">Sil</button></div></div>`).join(""):`<p class="muted">Yer imi yok.</p>`;openModal("#listModal");$$("[data-bmgo]").forEach(x=>x.onclick=async()=>{const b=arr.find(v=>v.id===x.dataset.bmgo);closeOverlays();await loadChapter(b.chapter,false);if(currentBook.source==="tts"){tts.segmentIndex=b.pos;updateTtsProgress();startTts()}else{audio.currentTime=b.pos;audio.play()}});$$("[data-bmdel]").forEach(x=>x.onclick=async()=>{currentBook.bookmarks=currentBook.bookmarks.filter(v=>v.id!==x.dataset.bmdel);await put(BOOKS,currentBook);showBookmarks()})}
function setSleep(){const v=prompt('Kaç dakika sonra dursun? 15, 30, 45, 60', '30');if(!v)return;const n=+v;if(!Number.isFinite(n)||n<=0)return toast("Geçerli dakika gir.");clearTimeout(sleepTimer);sleepTimer=setTimeout(()=>{if(currentBook?.source==="tts")pauseTts();else audio.pause();toast("Uyku zamanlayıcısı durdurdu.")},n*60000);toast(`${n} dakikalık zamanlayıcı kuruldu.`)}
function testVoice(){if(!("speechSynthesis"in window))return toast("Bu cihaz TTS desteklemiyor.");speechSynthesis.cancel();const u=new SpeechSynthesisUtterance("Merhaba. Sesli Kitaplık için seçtiğin Türkçe ses bu şekilde duyulacak.");u.lang="tr-TR";u.rate=+$("#rateRange").value;u.pitch=+$("#pitchRange").value;const v=selectedVoice();if(v)u.voice=v;speechSynthesis.speak(u)}
function updateRateLabels(){$("#rateValue").textContent=(+$("#rateRange").value).toFixed(2)+"×";$("#pitchValue").textContent=(+$("#pitchRange").value).toFixed(2)}
function showHistory(){const rows=books.flatMap(b=>(b.history||[]).map(h=>({...h,title:b.title,id:b.id}))).sort((a,b)=>b.at-a.at).slice(0,60);$("#listModalTitle").textContent="Dinleme Geçmişi";$("#listModalBody").innerHTML=rows.length?rows.map(h=>`<div class="list-item"><div><strong>${esc(h.title)}</strong><div class="meta">${new Date(h.at).toLocaleString("tr-TR")}</div></div><div class="list-actions"><button data-h="${h.id}">Aç</button></div></div>`).join(""):`<p class="muted">Henüz geçmiş yok.</p>`;openModal("#listModal");$$("[data-h]").forEach(x=>x.onclick=()=>{closeOverlays();openBook(x.dataset.h)})}
async function showStorage(){const f=await getAll(FILES);const local=f.reduce((s,x)=>s+(x.size||x.blob?.size||0),0);let est={};try{est=await navigator.storage?.estimate?.()||{}}catch{}$("#listModalTitle").textContent="Depolama";$("#listModalBody").innerHTML=`<div class="list-item"><div><strong>${books.length} kitap</strong><div class="meta">${f.length} yerel içerik · yaklaşık ${bytes(local)}</div>${est.usage!=null?`<div class="meta">Tarayıcı kullanımı: ${bytes(est.usage)}</div>`:""}</div></div>`;openModal("#listModal")}
async function clearData(){if(!confirm("Tüm kitaplar, ilerleme ve ayarlar silinsin mi?"))return;stopPlayback();await clearStore(BOOKS);await clearStore(FILES);books=[];closeOverlays();renderAll();toast("Yerel veriler silindi.")}
init().catch(e=>{console.error(e);alert("Uygulama başlatılamadı: "+e.message)})
