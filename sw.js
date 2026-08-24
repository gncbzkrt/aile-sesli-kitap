const CACHE="sesli-kitaplik-v6-1-yuzde100-turkce";
const ASSETS=["./","./index.html","./styles.css","./app.js","./manifest.webmanifest","./icons/icon-192.svg","./icons/icon-512.svg"];
self.addEventListener("install",e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});
self.addEventListener("activate",e=>{
  e.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const u=new URL(e.request.url);
  if(u.hostname.endsWith("wikisource.org")||u.hostname.includes("openlibrary.org")||u.hostname.includes("gutendex.com")||u.hostname.includes("archive.org")) return;
  e.respondWith(fetch(e.request).then(resp=>{
    const cp=resp.clone();
    caches.open(CACHE).then(c=>c.put(e.request,cp));
    return resp;
  }).catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html"))));
});