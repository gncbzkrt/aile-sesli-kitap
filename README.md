# 15 Dakikada Gelişim v10 — 1000 İçerik

Toplam: 1000
- Genel: 820
- 18+ Yetişkin: 80
- Din & Hayat: 100

## Kodsuz katalog mimarisi
İçerik artık `app.js` içinde değildir. `catalog.json` ayrı veri dosyasıdır.

Gelecekte artırmak için üç yöntem:
1. `Yeni İçerik Talep Et`: hedef sayıya göre ChatGPT talep metni oluşturur.
2. ChatGPT'den yalnız yeni `catalog.json` dosyasını al.
3. PWA'da `Katalog Dosyası Yükle` ile dosyayı seç. PWA kodunu ve GitHub dosyalarını değiştirmek gerekmez.

İstersen `catalog.json` GitHub'a yüklenirse `Kataloğu Güncelle` butonu da sunucudaki yeni kataloğu çeker.

Not: PWA, kendi başına yeni özgün içerik üretemez; bunun için bir yapay zekâ servisi/backend gerekir. Bu sürüm API anahtarı gerektirmeden talep ve katalog yükleme akışını sağlar.
