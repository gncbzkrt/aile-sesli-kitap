# Sesli Kitaplık v4.2 — Dinamik Kamu Malı Arşiv + Gerçek Özet Modu

## Değişiklikler
- 15 dakika modu artık ilk 15 dakika değildir; **özet modu** olarak çalışır.
- İlk seçkide insan tarafından hazırlanmış KitUP tarzı Türkçe özetler bulunur.
- Türkçe Vikikaynak'ın **Türkiye'de yayımlanan kamu malı eserler** ve **Türkiye'de yayımı serbest eserler** kategorileri uygulamadan dinamik çekilir.
- Kategori sayfalaması desteklenir; yüzlerce eser tek arşivde aranabilir.
- Arşiv 24 saat yerel önbellekte tutulur.
- Seçilen eser metin olarak cihaza indirilir ve TTS ile okunur.
- Sabit 42 eserlik düzenlenmiş katalog korunur.

## Önemli
Dinamik arşivde yalnız kitap değil; şiir, belge, mektup ve kısa metinler de bulunabilir. Uygulama, kaynağın lisans kategorisini temel alır.
"Özet" yalnız özet içeriği hazırlanmış seçili eserlerde görünür. Tam metin TTS ise arşivdeki uygun metinlerde çalışır.

# Sesli Kitaplık v4.1 — Storytel + KitUP dokunuşu

Bu sürüm v4 Türkçe TTS altyapısının üzerine keşif ve alışkanlık katmanı ekler.

## Yeni
- Senin İçin rafı
- Günlük değişen öneriler
- 15 Dakikalık Hızlı Dinleme
- Ruh haline/temaya göre koleksiyonlar
- Tamamlandı rozeti
- Dinleme istatistikleri
- Kitap detayında 15 dakikalık başlangıç
- Mevcut Türkçe kamu malı katalog + TTS + MP3 altyapısı korunur

# Sesli Kitaplık v4 — Türkçe TTS Klasikleri

## Ana fikir
Storytel benzeri keşif/kütüphane deneyimi; ancak abonelik, reklam veya hesap yoktur.
Uygulama yalnız Türkçe içerik gösterir.

## İçerik
- Başlangıç kataloğunda 40+ Türkçe kamu malı klasik eser
- Metin kaynağı: Türkçe Vikikaynak
- İlk "Kitaplığıma Ekle" işleminde metin MediaWiki API üzerinden alınır
- Metin IndexedDB'de cihazda saklanır
- Sonraki okumalar çevrimdışı yapılabilir (seçilen TTS sesi cihazda mevcutsa)
- Kendi MP3/M4A kitaplarını ekleme özelliği korunur

## TTS
- Cihazdaki Türkçe SpeechSynthesis seslerini listeler
- Ses seçimi
- Hız
- Perde
- Ses testi
- Bölüm ve ilerleme kaydı
- Yer imi
- Uyku zamanlayıcısı

## Önemli sınırlama
Web Speech / cihaz TTS davranışı tarayıcıya bağlıdır. Özellikle iOS'ta ekran kilitlendiğinde veya PWA uzun süre arka planda kaldığında TTS durabilir. Normal ses dosyaları arka planda daha tutarlı çalışır.

## Telif
Katalog, kamu malı olduğu bilinen klasik yazarlara ve Vikikaynak metinlerine odaklanır.
TRT Dinle vb. servislerin ses kayıtları, açık yeniden kullanım/embedding izni doğrulanmadan uygulamaya çekilmez.

## GitHub Pages güncelleme
Bu klasörün içeriğini mevcut repo köküne yükleyip aynı isimli dosyaları değiştirin.
