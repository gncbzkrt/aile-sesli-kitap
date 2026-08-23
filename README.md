# Aile Sesli Kitaplığı PWA

Tamamen ücretsiz, sunucusuz ve aile içi kullanım için hazırlanmış sesli kitap PWA başlangıç sürümü.

## Özellikler
- Android ve iOS ana ekrana kurulum
- Kitap/yazar/tür bilgisi
- Tür filtresi ve arama
- Kapak görseli
- Çok bölümlü sesli kitap
- Oynat/duraklat, 15 sn ileri/geri
- Hız: 0.75× – 2×
- Otomatik sonraki bölüm
- Kaldığın yeri otomatik kaydetme
- Dinlemeye devam et
- Favoriler
- Yer imi
- Uyku zamanlayıcısı
- Media Session / kilit ekranı kontrolleri destekleyen tarayıcılarda entegrasyon
- Çevrimdışı uygulama kabuğu
- Ses dosyalarını IndexedDB'de yerel saklama
- Koyu / açık tema

## Kurulum
PWA'nın düzgün çalışması için dosyaları `file://` ile açmak yerine HTTPS üzerinden yayınlayın.

Ücretsiz seçenekler:
- GitHub Pages
- Cloudflare Pages
- Netlify ücretsiz planı

Klasörü olduğu gibi yayınlayın; build adımı yoktur.

## Android
Chrome ile siteyi açın → menü → "Ana ekrana ekle" / "Uygulamayı yükle".

## iPhone / iPad
Safari ile siteyi açın → Paylaş → "Ana Ekrana Ekle".

## Önemli
Bu sürümde ses dosyaları her cihazın kendi tarayıcı depolamasında tutulur. Aynı kitapları aile bireylerinin cihazlarına ayrı ayrı eklemek gerekir.
Tarayıcı/site verileri temizlenirse yerel kitaplar da silinebilir.
