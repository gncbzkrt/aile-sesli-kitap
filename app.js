
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let ITEMS=[];
const state={tab:"Öne Çıkanlar",query:"",adultUnlocked:localStorage.getItem("adultUnlocked")==="1",favorites:new Set(JSON.parse(localStorage.getItem("favorites")||"[]")),current:null,segments:[],idx:0,playing:false,rate:Number(localStorage.getItem("rate")||"0.9"),voices:[],catalogVersion:""};
const TABS=["Öne Çıkanlar","Kişisel Gelişim","Psikoloji","Verimlilik","İletişim","Para","Liderlik","Kariyer","Sağlık","Yaşam","İlişkiler","Ebeveynlik","Din & Hayat","18+ Yetişkin","Favoriler"];
const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
function saveFav(){localStorage.setItem("favorites",JSON.stringify([...state.favorites]))}
function splitText(t){return t.split(/\n\n+/).flatMap(p=>p.match(/[^.!?…]+[.!?…]+|[^.!?…]+$/g)||[]).map(x=>x.trim()).filter(Boolean)}
function composeLesson(x){
 if(x.summary)return x.summary;
 const p=x.principles||[],a=x.actions||[];
 const out=[];
 out.push(`Bu dinlemenin amacı ${x.title} konusunda sana yalnız bilgi vermek değil; ${x.focus||"bu alanı"} günlük davranışa çevirmene yardım etmektir. Dinleme bittiğinde aklında çok sayıda cümle tutmak yerine, bir davranışı gerçekten uygulamanı hedefliyoruz.`);
 p.forEach((v,i)=>out.push(`${i+1}. temel ders: ${v} Bu fikri kendi hayatında değerlendirirken son bir haftadan gerçek bir örnek düşün. Ne yaptın, ne hissettin, hangi tetikleyici devreye girdi? Fikri soyut bırakmazsan değişim için kullanabileceğin veri oluşur. Büyük dönüşüm çoğu zaman tek bir karardan değil, benzer küçük anlarda verdiğin yeni cevapların birikmesinden doğar.`));
 out.push(`Şimdi teoriden uygulamaya geçelim. Aynı anda her şeyi değiştirmeye çalışma. Bu içerikten yalnız bir veya iki uygulama seçmen yeterli. Uygulamayı küçük tutmak zayıflık değildir; sürdürülebilir değişimin temelidir.`);
 a.forEach((v,i)=>out.push(`Uygulama ${i+1}: ${v} Bunu mümkün olduğunca bugüne sığacak kadar küçük ve ölçülebilir hale getir. Başarı ölçütün mükemmellik değil, gerçekten uygulamış olmak olsun. Bir hafta boyunca aynı davranışı gözlemlediğinde sistemin nerede bozulduğunu daha net görebilirsin.`));
 out.push(`Yedi günlük deney: Bugün başlangıç günün olsun. Her akşam yalnız üç soruya cevap ver: Yaptım mı? Beni ne zorladı? Yarın neyi kolaylaştırabilirim? Kendini yargılamak yerine sistemini incele. Yedi günün sonunda davranışın en az dört gün gerçekleştiyse sistemi koru; gerçekleşmediyse hedefi küçült veya çevreyi değiştir.`);
 out.push(`Dinleme sonrası muhasebe: Bugün hangi fikri gerçekten benimsedim? Hangi mevcut davranışım bununla çelişiyor? Önümüzdeki yedi gün içinde hangi küçük davranışı tekrarlayacağım? Bu üç soruya cevap vermek, içerik tüketimini kişisel gelişime dönüştüren asıl adımdır.`);
 return out.join("\n\n");
}
function tabMatch(x){
 if(state.tab==="Öne Çıkanlar")return !x.adult;
 if(state.tab==="18+ Yetişkin")return x.adult;
 if(state.tab==="Din & Hayat")return x.religion;
 if(state.tab==="Favoriler")return state.favorites.has(x.id)&&(!x.adult||state.adultUnlocked);
 return !x.adult&&!x.religion&&x.category===state.tab;
}
function visible(){
 const q=state.query.toLocaleLowerCase("tr");
 return ITEMS.filter(x=>tabMatch(x)&&(!q||`${x.title} ${x.author} ${x.category} ${x.focus||""}`.toLocaleLowerCase("tr").includes(q)));
}
function renderTabs(){
 $("#tabs").innerHTML=TABS.map(t=>`<button class="tab ${state.tab===t?"active":""}" data-tab="${esc(t)}">${esc(t)}</button>`).join("");
 $$("[data-tab]").forEach(b=>b.onclick=()=>{const t=b.dataset.tab;if(t==="18+ Yetişkin"&&!state.adultUnlocked){$("#adultModal").classList.remove("hidden");return}state.tab=t;render()});
}
function render(){
 renderTabs();$("#adultStatus").textContent=state.adultUnlocked?"18+ açık":"18+ kilitli";
 const list=visible();$("#count").textContent=`${list.length} içerik`;
 $("#total").textContent=`Toplam ${ITEMS.length} Türkçe gelişim dinlemesi · Katalog ${state.catalogVersion||""}`;
 $("#grid").innerHTML=list.map(x=>`<article class="card ${x.adult?"adult":""} ${x.religion?"religion":""}">
 <button class="cover" data-open="${x.id}"><span class="badge">${x.religion?"DİN & HAYAT":x.adult?"18+":"GELİŞİM"}</span><div class="cover-title">${esc(x.title)}</div></button>
 <div class="meta"><strong>${esc(x.title)}</strong><span>${esc(x.author)}</span><small>${esc(x.category)} · ${x.duration||"≈12–15 dk"}</small></div>
 <div class="actions"><button class="listen" data-open="${x.id}">▶ Dinle</button><button class="fav" data-fav="${x.id}">${state.favorites.has(x.id)?"♥":"♡"}</button></div></article>`).join("")||`<div class="empty">Bu bölümde sonuç yok.</div>`;
 $$("[data-open]").forEach(b=>b.onclick=()=>openItem(b.dataset.open));
 $$("[data-fav]").forEach(b=>b.onclick=()=>{const id=b.dataset.fav;state.favorites.has(id)?state.favorites.delete(id):state.favorites.add(id);saveFav();render()});
}
function openItem(id){
 const x=ITEMS.find(i=>i.id===id);if(!x)return;if(x.adult&&!state.adultUnlocked){$("#adultModal").classList.remove("hidden");return}
 speechSynthesis.cancel();state.current=x;state.segments=splitText(composeLesson(x));state.idx=0;state.playing=false;
 $("#player").classList.remove("hidden");$("#playerTitle").textContent=x.title;$("#playerAuthor").textContent=x.author;$("#playerMeta").textContent=`${x.category} · ${x.duration||"≈12–15 dk"} · Türkçe`;
 $("#source").textContent=x.source?`Kaynak: ${x.source}`:"";$("#source").classList.toggle("hidden",!x.source);
 $("#summary").innerHTML=composeLesson(x).split(/\n\n+/).map(p=>`<p>${esc(p)}</p>`).join("");updateProgress();window.scrollTo({top:$("#player").offsetTop-10,behavior:"smooth"});
}
function voice(){return state.voices.find(v=>v.name===$("#voice").value)||state.voices[0]||null}
function updateProgress(){const p=Math.round((state.idx/Math.max(1,state.segments.length))*100);$("#bar").style.width=p+"%";$("#pct").textContent=`%${p}`}
function speak(){
 if(!state.playing||!state.current)return;if(state.idx>=state.segments.length){state.playing=false;state.idx=0;$("#play").textContent="▶ Tekrar Dinle";updateProgress();return}
 const v=voice();if(!v){state.playing=false;alert("Bu cihazda Türkçe TTS sesi bulunamadı.");return}
 const u=new SpeechSynthesisUtterance(state.segments[state.idx]);u.lang="tr-TR";u.voice=v;u.rate=state.rate;u.onend=()=>{if(state.playing){state.idx++;updateProgress();speak()}};u.onerror=()=>{state.playing=false;$("#play").textContent="▶ Devam"};speechSynthesis.speak(u);
}
function playPause(){if(!state.current)return;if(state.playing){state.playing=false;speechSynthesis.cancel();$("#play").textContent="▶ Devam"}else{state.playing=true;$("#play").textContent="⏸ Duraklat";speak()}}
function skip(n){speechSynthesis.cancel();state.idx=Math.max(0,Math.min(state.segments.length-1,state.idx+n));updateProgress();if(state.playing)speak()}
function initVoices(){const fill=()=>{state.voices=speechSynthesis.getVoices().filter(v=>/^tr([-_]|$)/i.test(v.lang));$("#voice").innerHTML=state.voices.map(v=>`<option value="${esc(v.name)}">${esc(v.name)} · Türkçe</option>`).join("")||`<option>Türkçe ses bulunamadı</option>`};fill();speechSynthesis.onvoiceschanged=fill}
async function setCatalog(data,save=true){
 if(!data||!Array.isArray(data.items)||!data.items.length)throw new Error("Geçerli katalog değil");
 ITEMS=data.items;state.catalogVersion=data.catalogVersion||"özel";
 if(save){try{localStorage.setItem("customCatalog",JSON.stringify(data))}catch(e){console.warn("Yerel katalog saklanamadı",e)}}
 render();
}
async function loadCatalog(force=false){
 $("#catalogMsg").textContent="Katalog yükleniyor…";
 try{
   if(!force){
     const saved=localStorage.getItem("customCatalog");
     if(saved){await setCatalog(JSON.parse(saved),false);$("#catalogMsg").textContent="Yerel güncel katalog kullanılıyor.";return}
   }
   const r=await fetch(`catalog.json${force?`?v=${Date.now()}`:""}`,{cache:force?"no-store":"default"});
   const data=await r.json();await setCatalog(data,false);
   $("#catalogMsg").textContent=`Katalog hazır: ${ITEMS.length} içerik.`;
 }catch(e){$("#catalogMsg").textContent="Katalog yüklenemedi.";console.error(e)}
}
function buildRequestPrompt(){
 const target=Math.max(ITEMS.length+100,Number($("#requestCount").value)||ITEMS.length+500);
 const note=$("#requestNote").value.trim();
 return `15 Dakikada Gelişim PWA projem için mevcut catalog.json dosyasını genişlet. Mevcut içerik sayısı ${ITEMS.length}, hedef toplam ${target}. Kurallar: Tüm görünür ve dinlenen içerik Türkçe olacak. Kitap tanıtımı değil, kişisel gelişime katkı sağlayan uygulanabilir dersler olacak. Mevcut id ve başlıkları tekrar etme. Din & Hayat ve 18+ Yetişkin kategorilerini koru. Uygulama koduna dokunma; yalnız güncellenmiş catalog.json dosyasını üret. ${note?`Ek isteğim: ${note}`:""}`;
}
async function copyRequest(){
 const text=buildRequestPrompt();
 try{await navigator.clipboard.writeText(text);$("#requestStatus").textContent="Talep kopyalandı. ChatGPT'ye yapıştırabilirsin."}
 catch{const ta=$("#requestText");ta.value=text;ta.classList.remove("hidden");ta.select();$("#requestStatus").textContent="Metni seçip kopyala."}
}
function openChatGPT(){
 const text=buildRequestPrompt();window.open("https://chatgpt.com/?q="+encodeURIComponent(text),"_blank","noopener");
}
$("#search").oninput=e=>{state.query=e.target.value;render()};
$("#adultConfirm").onclick=()=>{if(!$("#adultCheck").checked)return alert("18 yaş ve üzeri olduğunu onayla.");state.adultUnlocked=true;localStorage.setItem("adultUnlocked","1");$("#adultModal").classList.add("hidden");state.tab="18+ Yetişkin";render()};
$("#adultClose").onclick=()=>$("#adultModal").classList.add("hidden");
$("#lockAdult").onclick=()=>{state.adultUnlocked=false;localStorage.setItem("adultUnlocked","0");if(state.tab==="18+ Yetişkin")state.tab="Öne Çıkanlar";render()};
$("#play").onclick=playPause;$("#back").onclick=()=>skip(-5);$("#forward").onclick=()=>skip(5);
$("#closePlayer").onclick=()=>{speechSynthesis.cancel();state.playing=false;$("#player").classList.add("hidden")};
$("#rate").value=state.rate;$("#rateText").textContent=state.rate.toFixed(1)+"×";$("#rate").oninput=e=>{state.rate=Number(e.target.value);localStorage.setItem("rate",state.rate);$("#rateText").textContent=state.rate.toFixed(1)+"×";if(state.playing){speechSynthesis.cancel();speak()}};
$("#catalogUpdate").onclick=()=>{localStorage.removeItem("customCatalog");loadCatalog(true)};
$("#catalogImport").onclick=()=>$("#catalogFile").click();
$("#catalogFile").onchange=async e=>{const f=e.target.files[0];if(!f)return;try{await setCatalog(JSON.parse(await f.text()),true);$("#catalogMsg").textContent=`Yeni katalog yüklendi: ${ITEMS.length} içerik.`}catch(err){alert("Katalog dosyası geçerli değil.")}e.target.value=""};
$("#requestBtn").onclick=()=>$("#requestModal").classList.remove("hidden");
$("#requestClose").onclick=()=>$("#requestModal").classList.add("hidden");
$("#copyRequest").onclick=copyRequest;$("#openChatGPT").onclick=openChatGPT;
initVoices();loadCatalog();if("serviceWorker" in navigator)navigator.serviceWorker.register("./sw.js");
