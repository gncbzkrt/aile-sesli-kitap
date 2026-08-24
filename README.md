# Sesli Kitaplık v6.1 — %100 Türkçe

- Yabancı dilde kitap, özet, açıklama veya ses kullanıcıya gösterilmez.
- Dış kaynak metni kitaplığa eklenmeden önce Türkçe kontrolünden geçer.
- TTS menüsünde yalnız Türkçe sesler kullanılır; yabancı ses yedeği yoktur.
- EPUB/PDF/TXT içe aktarmada da yalnız Türkçe içerik kabul edilir.
- Yetişkin özetlerinin görünen başlıkları Türkçedir.

# Sesli Kitaplık v6.0 — Güncel Özetler + 18+ Yetişkinler

- Ayrı 18+ yetişkin kategorisi
- 12 ilişki/yakınlık/cinsellik kitabı
- Özgün Türkçe özet + cihaz TTS
- Yerel 18+ onayı
- Tam telifli kitap metni içermez

# v5.0.2 LTS FILTERED STRICT

Son filtre yaması:
- Türkçe karakterler normalize edilerek düz metin blacklist uygulanır.
- `iddianame`, `soruşturma`, `şüpheli`, `sanık`, `evrak` vb. artık kelime sınırına bağlı değildir.
- `Ergenekon + bölüm/terör örgütü/eylemler` kombinasyonları doğrudan elenir.
- Eski arşiv cache anahtarı geçersiz kılındı.
- Service Worker `skipWaiting()` + `clients.claim()` ile yeni sürümü daha hızlı devralır.
- Statik dosyalarda network-first davranış kullanılarak eski uygulama dosyasının takılı kalması azaltıldı.

# v5.0.1 LTS FILTERED — Edebî Eser Filtresi

Bu yama v5.0 kaynak mimarisini değiştirmez; yalnız kullanıcıya gösterilen sonuçları temizler.

## Artık otomatik elenenler
- İddianame / soruşturma / kovuşturma kayıtları
- Mahkeme kararları ve dava dosyaları
- Kanun / yönetmelik / tebliğ / genelge
- Resmî Gazete ve resmî yazılar
- Tutanak / komisyon / rapor / protokol
- Dilekçe / başvuru / beyan / evrak
- Aşırı uzun, numaralı, slash ağırlıklı belge başlıkları
- Belge biçiminde tamamı büyük harfli uzun kayıtlar

Filtre hem Canlı Arşiv hem "Tüm Türkçe Kaynaklarda Ara" üzerinde çalışır.

# Sesli Kitaplık v5.0 LTS FROZEN

Bu sürüm kaynak mimarisi tamamlanmış ve dondurulmuş sürümdür.

## Kaynak katmanları
1. **Türkçe Vikikaynak – kamu malı**: dinamik kategori, tam metin TTS.
2. **Türkçe Vikikaynak – yayımı serbest**: dinamik kategori, tam metin TTS.
3. **Open Library**: yalnız Türkçe + `ebook_access:public` + tam metin sonucu; arama bazında, düşük hacimli API kullanımı.
4. **Project Gutenberg / Gutendex**: yalnız Türkçe dil filtresi; bulunan açık metinler cihaz içi TTS kitabına dönüşür.
5. **Kendi dosyaların**: EPUB / PDF / TXT ve MP3/M4A/AAC/WAV, tamamen cihaz içi.

## LTS kuralları
- Yabancı dil katalog ana yüzeye alınmaz.
- Telifli kapalı tam metin otomatik çekilmez.
- Kaynaklar bulk olarak kopyalanmaz; dinamik veya kullanıcı seçimiyle alınır.
- Aynı kitap başlık+yazar normalizasyonuyla tekilleştirilir.
- İçe alınan metin IndexedDB'de cihazda saklanır.
- Kaynak mimarisi `FREEZE_MANIFEST.json` ile dondurulmuştur.

## Test
`app.js` Node söz dizimi kontrolünden geçirilmiştir.

# Sesli Kitaplık v4.4 — Hazır Türkçe E‑Kitaplar

## Yeni
- EPUB aramak zorunda kalmadan tek dokunuşla açık kaynak Türkçe kitap ekleme
- 42 düzenlenmiş Türkçe klasik, tür filtreleriyle ayrı "Hazır Türkçe E‑Kitaplar" rafında
- Kitap zaten ekliyse buton doğrudan Dinle olur
- Özet mevcut eserlerde doğrudan Özet butonu
- Arka planda Vikikaynak metni alınır, yerel IndexedDB'ye kaydedilir ve TTS kitabına çevrilir
- EPUB/PDF/TXT manuel içe aktarma özelliği korunur
- 736+ dinamik kamu malı arşiv korunur

Not: Vikikaynak uygun sayfalarda EPUB dışa aktarımı sunar; uygulama kullanıcı deneyimini kolaylaştırmak için dosya aratmak yerine metni doğrudan aynı açık kaynaktan işler.

# Sesli Kitaplık v4.3 — EPUB / PDF / TXT İçe Aktarma

## Yeni
- Kullanıcının kendi EPUB kitabını cihazdan içe aktarma
- PDF metin katmanını okuyup TTS kitabına dönüştürme
- TXT kitap içe aktarma
- İçe aktarılan metinler IndexedDB'de yerel saklanır
- Dosya sunucuya gönderilmez
- Türkçe TTS ses seçimi, hız, perde, yer imi, kaldığın yer ve uyku zamanlayıcısı çalışır
- Kullanıcının dosyaları için ayrı "EPUB · PDF · TXT" rafı
- İsteğe bağlı kapak görseli
- EPUB için JSZip, PDF için PDF.js kullanılır (ücretsiz açık kaynak)

## PDF notu
Metin katmanı olan PDF'ler desteklenir. Sadece taranmış sayfa görüntülerinden oluşan PDF'lerde OCR yapılmaz.

## Telif
Uygulama telifli güncel kitapları kendi sunucusundan dağıtmaz. Kullanıcı kendi yasal dosyasını cihazından içe aktarabilir.

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
