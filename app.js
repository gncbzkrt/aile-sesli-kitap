const APP_VERSION="5.0.0-LTS-FROZEN";

const DB_NAME="aile-sesli-kitap-db", DB_VERSION=1, BOOKS="books", FILES="files", SETTINGS="settings";
const CATALOG=[{"id": "ask-i-memnu", "title": "Aşk-ı Memnu", "author": "Halit Ziya Uşaklıgil", "category": "Roman", "wiki": "Aşk-ı Memnu", "desc": "Servet-i Fünun döneminin en tanınmış romanlarından biri. Yasak bir aşkın aile içindeki sonuçlarını anlatır.", "cover": "c1"}, {"id": "mai-ve-siyah", "title": "Mai ve Siyah", "author": "Halit Ziya Uşaklıgil", "category": "Roman", "wiki": "Mai ve Siyah", "desc": "Hayallerle gerçekler arasında sıkışan Ahmet Cemil'in edebiyat ve hayat mücadelesi.", "cover": "c7"}, {"id": "nemide", "title": "Nemide", "author": "Halit Ziya Uşaklıgil", "category": "Roman", "wiki": "Nemide", "desc": "Aşk, kıskançlık ve kırılganlık etrafında şekillenen erken dönem Halit Ziya romanı.", "cover": "c4"}, {"id": "kirik-hayatlar", "title": "Kırık Hayatlar", "author": "Halit Ziya Uşaklıgil", "category": "Roman", "wiki": "Kırık Hayatlar", "desc": "Aile, sadakat ve toplumsal baskılar üzerine klasik bir roman.", "cover": "c2"}, {"id": "pembe-incili-kaftan", "title": "Pembe İncili Kaftan", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Pembe İncili Kaftan", "desc": "Onur, devlet ve kişisel gurur üzerine unutulmaz bir Ömer Seyfettin hikâyesi.", "cover": "c6"}, {"id": "kasagi", "title": "Kaşağı", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Kaşağı", "desc": "Çocukluk, suçluluk ve vicdan üzerine Türk edebiyatının en bilinen hikâyelerinden.", "cover": "c5"}, {"id": "falaka", "title": "Falaka", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Falaka", "desc": "Eski okul hayatını mizah ve eleştiriyle anlatan klasik hikâye.", "cover": "c3"}, {"id": "perili-kosk", "title": "Perili Köşk", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Perili Köşk", "desc": "Batıl inanç, çıkar ve mizahın iç içe geçtiği kısa hikâye.", "cover": "c8"}, {"id": "yuksek-okceler", "title": "Yüksek Ökçeler", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Yüksek Ökçeler", "desc": "Görünüş ile gerçek arasındaki farkı mizahi biçimde anlatır.", "cover": "c1"}, {"id": "yalniz-efe", "title": "Yalnız Efe", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Yalnız Efe", "desc": "Adalet arayışı ve cesaret üzerine güçlü bir Anadolu hikâyesi.", "cover": "c2"}, {"id": "diyet", "title": "Diyet", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Diyet", "desc": "Onur ve borç duygusunu merkezine alan çarpıcı bir kısa hikâye.", "cover": "c7"}, {"id": "forsa", "title": "Forsa", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Forsa", "desc": "Esaret, umut ve vatan sevgisi üzerine klasik hikâye.", "cover": "c5"}, {"id": "basini-vermeyen-sehit", "title": "Başını Vermeyen Şehit", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Başını Vermeyen Şehit", "desc": "Tarihî motiflerle örülmüş destansı bir hikâye.", "cover": "c6"}, {"id": "and", "title": "And", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "And", "desc": "Çocukluk arkadaşlığı, sadakat ve fedakârlık üzerine.", "cover": "c4"}, {"id": "bomba", "title": "Bomba", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Bomba", "desc": "Balkan coğrafyasındaki siyasi şiddet ve insan trajedisi üzerine sert bir hikâye.", "cover": "c8"}, {"id": "bahar-ve-kelebekler", "title": "Bahar ve Kelebekler", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Bahar ve Kelebekler", "desc": "Kuşaklar ve değişen hayat anlayışları üzerine hüzünlü bir hikâye.", "cover": "c3"}, {"id": "ilk-cinayet", "title": "İlk Cinayet", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "İlk Cinayet", "desc": "Çocukluk hafızası ve vicdan üzerine kısa, yoğun bir anlatı.", "cover": "c1"}, {"id": "topuz", "title": "Topuz", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Topuz", "desc": "Tarih, güç ve diplomasi ekseninde ilerleyen bir hikâye.", "cover": "c6"}, {"id": "pembe-menekse", "title": "Pembe Menekşe", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Pembe Menekşe", "desc": "Duygusal tonu güçlü kısa bir Ömer Seyfettin hikâyesi.", "cover": "c4"}, {"id": "kir-sinegi", "title": "Kır Sineği", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Kır Sineği", "desc": "Hatıra ve kayıp duygusunu küçük bir nesne üzerinden anlatır.", "cover": "c5"}, {"id": "buse-i-mader", "title": "Buse-i Mader", "author": "Ömer Seyfettin", "category": "Hikâye", "wiki": "Buse-i Mader", "desc": "Şefkat ve anne sevgisi üzerine kısa bir hikâye.", "cover": "c7"}, {"id": "araba-sevdasi", "title": "Araba Sevdası", "author": "Recaizade Mahmut Ekrem", "category": "Roman", "wiki": "Araba Sevdası", "desc": "Yanlış Batılılaşmayı hicveden Türk romanının temel klasiklerinden.", "cover": "c3"}, {"id": "serguzest", "title": "Sergüzeşt", "author": "Samipaşazade Sezai", "category": "Roman", "wiki": "Sergüzeşt", "desc": "Esaret ve insan onuru üzerine Tanzimat döneminin önemli romanı.", "cover": "c2"}, {"id": "karabibik", "title": "Karabibik", "author": "Nabizade Nâzım", "category": "Roman", "wiki": "Karabibik", "desc": "Anadolu köylüsünü gerçekçi bir bakışla anlatan öncü eser.", "cover": "c5"}, {"id": "zehra", "title": "Zehra", "author": "Nabizade Nâzım", "category": "Roman", "wiki": "Zehra", "desc": "Kıskançlık ve psikolojik çözümlemeleriyle öne çıkan erken dönem roman.", "cover": "c8"}, {"id": "intibah", "title": "İntibah", "author": "Namık Kemal", "category": "Roman", "wiki": "İntibah", "desc": "Tutku, aldanış ve sonuçları üzerine Tanzimat dönemi romanı.", "cover": "c1"}, {"id": "cezmi", "title": "Cezmi", "author": "Namık Kemal", "category": "Roman", "wiki": "Cezmi", "desc": "Tarihî olayları ve kahramanlık temasını işleyen klasik roman.", "cover": "c6"}, {"id": "vatan-yahut-silistre", "title": "Vatan Yahut Silistre", "author": "Namık Kemal", "category": "Tiyatro", "wiki": "Vatan Yahut Silistre", "desc": "Vatan sevgisi ve fedakârlık temasını merkeze alan ünlü tiyatro eseri.", "cover": "c3"}, {"id": "felatun-rakim", "title": "Felatun Bey ile Rakım Efendi", "author": "Ahmet Mithat Efendi", "category": "Roman", "wiki": "Felâtun Bey ile Râkım Efendi", "desc": "Yanlış ve doğru Batılılaşma tiplerini karşı karşıya getiren klasik roman.", "cover": "c7"}, {"id": "esrar-i-cinayat", "title": "Esrar-ı Cinayat", "author": "Ahmet Mithat Efendi", "category": "Polisiye", "wiki": "Esrar-ı Cinayat", "desc": "Türk edebiyatının ilk polisiye örneklerinden biri.", "cover": "c8"}, {"id": "henuz-on-yedi-yasinda", "title": "Henüz On Yedi Yaşında", "author": "Ahmet Mithat Efendi", "category": "Roman", "wiki": "Henüz On Yedi Yaşında", "desc": "Toplumsal hayat ve ahlak tartışmaları etrafında gelişen roman.", "cover": "c4"}, {"id": "murebbiye", "title": "Mürebbiye", "author": "Hüseyin Rahmi Gürpınar", "category": "Roman", "wiki": "Mürebbiye", "desc": "Toplumsal ikiyüzlülük ve aile yaşamını mizahla ele alan roman.", "cover": "c2"}, {"id": "sipsevdi", "title": "Şıpsevdi", "author": "Hüseyin Rahmi Gürpınar", "category": "Roman", "wiki": "Şıpsevdi", "desc": "Taklitçi Batılılaşmayı hicveden güçlü bir toplumsal roman.", "cover": "c6"}, {"id": "gulyabani", "title": "Gulyabani", "author": "Hüseyin Rahmi Gürpınar", "category": "Mizah", "wiki": "Gulyabani", "desc": "Batıl inançları mizah ve gerilimle ele alan sevilen klasik.", "cover": "c5"}, {"id": "kuyruklu-yildiz", "title": "Kuyruklu Yıldız Altında Bir İzdivaç", "author": "Hüseyin Rahmi Gürpınar", "category": "Roman", "wiki": "Kuyruklu Yıldız Altında Bir İzdivaç", "desc": "Halley kuyruklu yıldızı paniği üzerinden toplumu hicveden roman.", "cover": "c1"}, {"id": "sik", "title": "Şık", "author": "Hüseyin Rahmi Gürpınar", "category": "Roman", "wiki": "Şık", "desc": "Gösteriş merakı ve yanlış Batılılaşma üzerine mizahi roman.", "cover": "c7"}, {"id": "safahat", "title": "Safahat", "author": "Mehmet Âkif Ersoy", "category": "Şiir", "wiki": "Safahat", "desc": "Mehmet Âkif'in şiir külliyatının ana eseri.", "cover": "c3"}, {"id": "sermin", "title": "Şermin", "author": "Tevfik Fikret", "category": "Şiir", "wiki": "Şermin", "desc": "Çocuklar için yazılmış şiirlerden oluşan klasik eser.", "cover": "c4"}, {"id": "rubab-i-sikeste", "title": "Rübab-ı Şikeste", "author": "Tevfik Fikret", "category": "Şiir", "wiki": "Rübab-ı Şikeste", "desc": "Servet-i Fünun şiirinin temel kitaplarından.", "cover": "c8"}, {"id": "turkculugun-esaslari", "title": "Türkçülüğün Esasları", "author": "Ziya Gökalp", "category": "Düşünce", "wiki": "Türkçülüğün Esasları", "desc": "Ziya Gökalp'in kültür ve toplum görüşlerini sistemleştirdiği eser.", "cover": "c2"}, {"id": "altin-isik", "title": "Altın Işık", "author": "Ziya Gökalp", "category": "Masal", "wiki": "Altın Işık", "desc": "Masal, destan ve şiir unsurlarını bir araya getiren eser.", "cover": "c6"}, {"id": "hac-yolunda", "title": "Hac Yolunda", "author": "Cenap Şahabettin", "category": "Gezi", "wiki": "Hac Yolunda", "desc": "Gezi izlenimleri ve gözlemlerden oluşan klasik eser.", "cover": "c5"}];
const CURATED_SUMMARIES={"Aşk-ı Memnu": "Halit Ziya Uşaklıgil'in Aşk-ı Memnu'su, yalnız yasak bir aşkın hikâyesi değildir; aile, sınıf, arzu, yalnızlık ve modernleşme sancıları üzerine kurulmuş psikolojik bir romandır. Adnan Bey, Boğaziçi'ndeki yalısında çocukları Nihal ve Bülent'le yaşayan varlıklı bir duldur. Genç ve güzel Bihter'le evlenmesi, evin bütün dengesini değiştirir. Bihter'in annesi Firdevs Hanım, toplum içinde güzelliği ve ilişkileriyle öne çıkan, kızının üzerinde hem etkili hem de rahatsız edici bir figürdür. Bihter, annesine benzememek isterken onun gölgesinden kurtulamaz.\n\nYalıdaki en önemli kişilerden biri Behlül'dür. Adnan Bey'in yeğeni olan Behlül, rahat, çekici, sorumluluklardan kaçan bir gençtir. Bihter'in evliliğinde bulamadığı heyecan ve yakınlık zamanla Behlül'e yönelir. Aralarındaki ilişki, romanın yasak aşk eksenini oluşturur; fakat Halit Ziya asıl gerilimi iki kişinin gizli buluşmalarından çok onların iç dünyasında kurar. Bihter bir yandan arzusuna teslim olurken bir yandan suçluluk, kıskançlık ve yakalanma korkusuyla yaşar. Behlül ise ilişkinin ağırlığını taşımak yerine kaçmaya eğilimlidir.\n\nNihal, romanın duygusal merkezlerinden biridir. Hassas, kırılgan ve babasına bağlıdır. Behlül'e karşı hisleri, evdeki gizli çatışmayı daha da büyütür. Behlül'ün Nihal'le evlenme ihtimali belirince Bihter için ilişki yalnız yasak değil, dayanılmaz bir ihanet haline gelir. Böylece aşk, kıskançlık ve gurur birbirine karışır.\n\nRomanın gücü, karakterleri tek boyutlu iyi-kötü ayrımına sıkıştırmamasındadır. Bihter yalnızca aldatan bir kadın değildir; sevgi, kabul görme ve özgürlük arayan ama seçimlerinin sonuçlarıyla yüzleşen karmaşık bir kişidir. Adnan Bey iyi niyetlidir fakat evindeki duygusal hareketleri okuyamaz. Behlül özgür görünür fakat sorumluluk almaktan kaçtığı ölçüde başkalarının hayatını yaralar. Firdevs Hanım ise toplumsal bakışın, rekabetin ve yaşlanma korkusunun sembolüne dönüşür.\n\nAşk-ı Memnu'nun ana temalarından biri görünüş ile gerçek arasındaki uçurumdur. Yalı dışarıdan düzenli, zengin ve saygın görünür; içerideyse yalnızlıklar, saklanan arzular ve konuşulmayan çatışmalar vardır. Halit Ziya, Batılılaşan Osmanlı seçkinlerinin yaşam biçimini de bu ev üzerinden gösterir. Eşyalar, kıyafetler, davetler ve gündelik alışkanlıklar yalnız dekor değildir; karakterlerin dünyaya nasıl baktığını anlatır.\n\nFinale yaklaşırken gizli ilişki açığa çıkma noktasına gelir. Bihter için kaçış alanı daralır. Behlül'ün Nihal'e yönelmesi, onun hem aşkını hem gururunu parçalar. Bihter'in trajedisi, kendi hayatı üzerinde söz sahibi olmak isterken giderek kendi seçimlerinin tutsağı haline gelmesidir. Romanın unutulmaz finali, yasak aşkın bedelini yalnız Bihter'e değil, yalıdaki herkese ödetir.\n\nKitabın bugün hâlâ güçlü olmasının nedeni, meseleyi yalnız ahlak dersi olarak anlatmamasıdır. Aşk-ı Memnu, insanların ihtiyaçlarıyla toplumun beklentileri çatıştığında neler olabileceğini sorar. Sevgi ile sahip olma, özgürlük ile sorumluluk, görünüş ile hakikat arasındaki gerilim romanın merkezindedir. Halit Ziya'nın psikolojik anlatımı, Türk romanında karakter derinliği açısından önemli bir dönüm noktasıdır.", "Araba Sevdası": "Recaizade Mahmut Ekrem'in Araba Sevdası, yanlış Batılılaşmayı ve gösteriş merakını hicveden Türk edebiyatının temel romanlarından biridir. Romanın merkezindeki Bihruz Bey, zengin bir ailenin oğludur. Fransızca kelimeler kullanmayı, pahalı kıyafetler giymeyi, şık arabalara binmeyi ve modern görünmeyi gerçek bir kültür sahibi olmakla karıştırır. Onun için hayat çoğu zaman başkalarının gözünde nasıl göründüğüyle ilgilidir.\n\nBihruz Bey bir gün Çamlıca'da gördüğü Periveş Hanım'a âşık olduğunu düşünür. Fakat bu aşk, tanıdığı gerçek bir kişiye duyulan sevgiden çok Bihruz'un kendi zihninde kurduğu romantik hayale dayanır. Periveş hakkında çok az şey bilir; buna rağmen onu idealize eder, konuşmalarını, davranışlarını ve ilişkilerini kendi kafasında büyütür. Böylece roman, insanın gerçeği görmek yerine kendi hayaline inanmasının komik ve acı sonuçlarını gösterir.\n\nBihruz'un çevresindeki kişiler onun zayıflıklarından yararlanır. Özellikle Keşfi Bey'in yalanları ve alayları, Bihruz'un hayal dünyasını daha da karmaşık hale getirir. Bihruz bir noktada Periveş'in öldüğüne bile inanır ve hiç yaşanmamış bir aşkın yasını tutmaya başlar. Bu durum romanın hiciv gücünü artırır: Kahraman, gerçek hayattan kopmuş olduğu için kendi ürettiği duyguların esiri olur.\n\nAraba Sevdası'ndaki 'araba', yalnızca bir ulaşım aracı değildir. Statünün, tüketimin ve başkalarına kendini gösterme arzusunun sembolüdür. Bihruz Bey'in arabasına, kıyafetine ve Fransızca konuşmasına verdiği önem, içeriğin yerine biçimi koyduğunu gösterir. Recaizade Mahmut Ekrem'in eleştirisi Batı kültürüne değil, onu anlamadan taklit etmeye yöneliktir.\n\nRomanın en dikkat çekici taraflarından biri mizahıdır. Bihruz'un yanlış Fransızcası, yanlış anlamaları, aşırı duygusal davranışları ve kendi kendini kandırması okuru güldürür. Fakat bu mizahın altında ciddi bir toplumsal eleştiri vardır. Eğitim, kültür ve kişilik gelişimi yerine tüketim ve görüntüye dayalı bir modernleşme anlayışı eleştirilir.\n\nBugün Araba Sevdası'nı güncel yapan nokta da budur. Sosyal medyada imaj yaratma, markalar üzerinden kimlik kurma ve başkalarının gözündeki görüntüyü gerçek hayatın önüne koyma gibi davranışlar düşünüldüğünde Bihruz Bey şaşırtıcı biçimde modern bir karakterdir. Roman bize şu soruyu bırakır: Gerçekten istediğimiz şeyi mi yaşıyoruz, yoksa başkalarının görmesini istediğimiz bir hayatı mı oynuyoruz?", "Pembe İncili Kaftan": "Ömer Seyfettin'in Pembe İncili Kaftan'ı, onur, devlet görevi ve kişisel fedakârlık üzerine kurulmuş kısa ama çok etkili bir hikâyedir. Osmanlı yönetimi, İran şahına gönderilecek bir elçi aramaktadır. Görev zordur; çünkü karşı tarafın elçiyi küçümsemesi ve Osmanlı'nın itibarını zedelemesi ihtimali vardır. Bu görevi üstlenecek kişinin cesur, vakur ve gerektiğinde kendi çıkarını hiçe sayabilecek biri olması gerekir.\n\nMuhsin Çelebi bu görev için öne çıkar. Devletten para istemez; kendi malını satarak gösterişli, pembe incilerle süslü çok pahalı bir kaftan satın alır. Bunun nedeni kişisel gösteriş değildir. Karşı tarafın sarayında Osmanlı elçisinin yoksul veya güçsüz görünmesini istemez. Kendi servetini devletin itibarı uğruna harcar.\n\nİran sarayında kendisine oturacak yer verilmemesiyle küçük düşürülmek istenir. Muhsin Çelebi buna karşılık pembe incili kaftanını yere serer ve onun üzerine oturur. Görüşme bittikten sonra kaftanı yerde bırakıp çıkar. Kendisine kaftanını unuttuğu söylendiğinde ise onu geri almaz; çünkü bir Osmanlı elçisinin yere serip üzerine oturduğu şeyi tekrar sırtına giymesini onuruna uygun görmez.\n\nHikâyenin vurucu tarafı, Muhsin Çelebi'nin bu hareketinin bedelidir. Kaftan onun servetinin büyük bölümüne mal olmuştur. Görevden döndüğünde eski rahat hayatını sürdüremez. Buna rağmen yaptığı fedakârlıktan pişman değildir.\n\nÖmer Seyfettin burada maddi değer ile manevi değer arasındaki çatışmayı işler. Pembe incili kaftan çok pahalıdır; fakat Muhsin Çelebi için şeref daha pahalıdır. Hikâye aynı zamanda gerçek fedakârlığın alkış beklemeden yapılan fedakârlık olduğunu söyler. Muhsin Çelebi yaptığı şeyi bir kariyer fırsatına veya ödüle çevirmeye çalışmaz.\n\nBugünün dünyasında hikâye, görev ahlakı ve kişisel çıkar ilişkisi açısından okunabilir. İnsan gerçekten savunduğu bir değer için ne kadar bedel ödemeye hazırdır? İtibar yalnız pahalı eşyalarla mı kurulur, yoksa davranışlarla mı? Pembe İncili Kaftan'ın kısa olmasına rağmen güçlü kalmasının nedeni bu soruların hâlâ güncel olmasıdır.", "Kaşağı": "Kaşağı, Ömer Seyfettin'in çocukluk, kıskançlık, yalan ve vicdan azabı üzerine yazdığı en etkileyici hikâyelerden biridir. Anlatıcı ve küçük kardeşi Hasan, çiftlikte atlara büyük ilgi duyan iki çocuktur. Ahırdaki kaşağı, atların tüylerini temizlemek için kullanılan değerli bir araçtır. Çocuklar onu kullanmak ister; ancak kendilerine izin verilmez.\n\nAnlatıcı bir gün kaşağıyı gizlice alır. Kullanmakta zorlanınca öfkeyle kaşağıyı kırar. Yakalanmaktan korktuğu için suçu kardeşi Hasan'ın üzerine atar. Hasan işlemediği bir suç yüzünden cezalandırılır. Hikâyenin kırılma noktası burada başlar: Yalan, yalnız anlık bir cezadan kaçış değildir; iki kardeş arasındaki güveni ve anlatıcının kendi iç huzurunu bozan bir zincire dönüşür.\n\nHasan'ın daha sonra hastalanması, anlatıcının suçluluk duygusunu büyütür. Gerçeği söylemek ister fakat bunu zamanında yapamaz. Hasan'ın ölümüyle birlikte itiraf etme fırsatı sonsuza kadar kaybolur. Böylece küçük bir yalan, anlatıcının hayatı boyunca taşıyacağı ağır bir vicdan yüküne dönüşür.\n\nHikâyenin gücü büyük olaylardan değil, çocuk dünyasındaki küçük bir anın ahlaki ağırlığından gelir. Ömer Seyfettin çocukları kusursuz varlıklar olarak göstermez. Kıskançlık, korku, öfke ve kendini koruma içgüdüsü çocuklarda da vardır. Fakat aynı zamanda vicdan ve pişmanlık da son derece güçlüdür.\n\nKaşağı'nın temel mesajı basit bir 'yalan söylemeyin' öğüdünden daha derindir. Bazen bir davranışın sonucunu geri çevirmek mümkün değildir. Doğruyu geciktirmek de yanlışın bir parçası haline gelebilir. Hikâye, sorumluluk almanın ve gerçeği zamanında söylemenin önemini gösterir.\n\nBugün okunduğunda Kaşağı, özellikle aile içi güven açısından etkisini korur. Bir suçlamanın haksız yere başka birine yöneltilmesi, yalnız cezalandırılan kişiyi değil, suçlayan kişiyi de değiştirir. Anlatıcının asıl cezası dışarıdan verilen bir ceza değil, yıllarca taşıdığı vicdan azabıdır.", "Gulyabani": "Hüseyin Rahmi Gürpınar'ın Gulyabani'si, korku ve mizahı birleştirerek batıl inançları eleştiren önemli bir romandır. Hikâyenin merkezinde, gizemli olayların yaşandığı söylenen bir köşk vardır. Köşkte cinler, periler ve gulyabaniler görüldüğüne dair söylentiler dolaşır. Bu söylentiler, evde yaşayanların korkularını besler ve olağan olayların bile doğaüstü açıklamalarla yorumlanmasına yol açar.\n\nRomanın temel hareket noktası şudur: İnsanlar anlamadıkları şeylerden korkar ve korktukları şeylere kolayca inanırlar. Hüseyin Rahmi bu mekanizmayı mizahla gösterir. Okur bir yandan gizem duygusunu yaşarken bir yandan karakterlerin aşırı tepkilerine ve batıl inançlarına güler.\n\nGulyabani figürü, yalnız korkutucu bir yaratık değildir; insanların bilgisizliğini ve kolay yönlendirilebilirliğini kullananların sembolüne dönüşür. Roman ilerledikçe doğaüstü görünen olayların arkasında insan eli, çıkar ilişkileri ve aldatma olduğu anlaşılır. Böylece hikâye, korkunun nasıl bir yönetme aracına dönüşebileceğini gösterir.\n\nHüseyin Rahmi'nin toplumsal eleştirisi burada belirgindir. Eğitim ve sorgulama eksik olduğunda söylenti, gerçeğin yerini alabilir. İnsanlar kanıt aramak yerine birbirlerinin korkularını büyütür. Bu durum yalnız geçmişin batıl inançlarıyla sınırlı değildir; günümüzde yanlış bilgi ve komplo teorilerinin yayılma biçimiyle de benzerlik taşır.\n\nRoman aynı zamanda cesaretin yalnız korkmamak olmadığını, korkuya rağmen gerçeği araştırmak olduğunu söyler. Şüphe etmek, gözlem yapmak ve soru sormak, karanlıkta görülen 'canavarların' gerçek yüzünü ortaya çıkarır.\n\nGulyabani'nin kalıcı değeri tam da burada yatar: Okura eğlenceli ve sürükleyici bir hikâye sunarken, inanmak ile bilmek arasındaki farkı sorgulatır. Korkunun en güçlü olduğu yerde aklın ve merakın önemini hatırlatır.", "Sergüzeşt": "Samipaşazade Sezai'nin Sergüzeşt'i, esaret, özgürlük ve insan onuru üzerine kurulmuş Tanzimat dönemi Türk romanının önemli eserlerinden biridir. Romanın merkezinde Dilber adlı genç bir kız vardır. Kafkasya'dan getirilen Dilber, köle olarak satılır ve farklı evlerde ağır koşullar altında yaşar.\n\nDilber'in hikâyesi üzerinden roman, bir insanın başka bir insanın malı sayılmasının yarattığı ahlaki çelişkiyi gösterir. Dilber yalnız fiziksel olarak değil, geleceği ve seçimleri üzerinde söz hakkı bulunmadığı için duygusal olarak da tutsaktır. Bir evden diğerine geçerken insanların ona davranışı değişse de temel sorun değişmez: Hayatı başkalarının kararlarına bağlıdır.\n\nRomanın önemli bölümlerinden biri Dilber ile Celal Bey arasındaki ilişkidir. Celal Bey sanatla ilgilenen, duyarlı bir gençtir ve Dilber'e âşık olur. Fakat sınıf farkı ve aile baskısı bu ilişkinin önünde büyük bir engeldir. Dilber bir birey olarak sevilebilir; fakat toplum onu eşit bir insan olarak kabul etmeye hazır değildir.\n\nSergüzeşt bu noktada yalnız kölelik kurumunu değil, sınıf düzenini ve toplumsal ikiyüzlülüğü de eleştirir. İnsanlar merhametten söz ederken, yaşam biçimleri başka insanların özgürlüğünü kısıtlamaya dayanabilir. Roman, duygusal anlatımı sayesinde okurun Dilber'le empati kurmasını sağlar.\n\nDilber'in yaşadığı baskılar arttıkça roman trajik bir sona yönelir. Özgürlüğe ulaşma arzusu, onun bütün kararlarını belirleyen temel güçtür. Samipaşazade Sezai, özgürlüğü soyut bir siyasi kavram olmaktan çıkarıp tek bir insanın hayatına indirger. Böylece okur özgürlüğün değerini Dilber'in kaybettikleri üzerinden hisseder.\n\nSergüzeşt'in bugün de önemli olmasının nedeni insan onurunu merkeze almasıdır. Bir kişinin eğitim düzeyi, serveti, kökeni veya toplumsal statüsü onun insan olarak değerini belirleyemez. Romanın en güçlü mesajı, hiçbir insanın başka bir insanın mülkü olamayacağıdır."};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const audio=$("#audio");
let db,books=[],selectedCatalogCategory="Tümü",currentBook=null,currentChapter=0,currentObjectUrl=null,deferredPrompt=null;
let tts={playing:false,paused:false,segments:[],segmentIndex:0,utterance:null};
let voices=[],sleepTimer=null,saveTimer=null,quickSessionTimer=null,quickSessionActive=false;
let archiveMode="public", archiveItems=[], archiveShown=40;
let sourceCounts={curated:CATALOG.length,wikisourcePublic:null,wikisourceFree:null,openLibrary:null,gutenberg:null};

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
  bind();renderCatalog();renderReadyBooks();renderAll();renderKitupHome();initVoices();updateRateLabels();renderSourceStats();loadArchive(false);primeSourceCounts();
  if("serviceWorker"in navigator)navigator.serviceWorker.register("./sw.js").catch(()=>{});
}
function bind(){
  $("#heroExplore").onclick=()=>$("#catalogSection").scrollIntoView({behavior:"smooth"});
  $("#refreshForYou").onclick=()=>renderForYou(true);
  $("#quickPickBtn").onclick=pickQuickBook;
  $("#refreshArchiveBtn").onclick=()=>loadArchive(true);
  $("#archiveSearchBtn").onclick=renderArchive;
  $("#archiveSearch").oninput=()=>{if(!$("#archiveSearch").value)renderArchive()};
  $("#archiveMoreBtn").onclick=()=>{archiveShown+=40;renderArchive()};
  $$("[data-archive-tab]").forEach(b=>b.onclick=()=>{archiveMode=b.dataset.archiveTab;$$("[data-archive-tab]").forEach(x=>x.classList.toggle("active",x===b));archiveShown=40;loadArchive(false)});
  $("#statsBtn").onclick=showStats;
  $("#sourcesBtn").onclick=showSourceStatus;
  $("#globalSourceSearchBtn").onclick=globalSourceSearch;
  $("#globalSourceSearch").addEventListener("keydown",e=>{if(e.key==="Enter")globalSourceSearch()});
  $("#heroContinue").onclick=()=>{const b=latestBook();if(b)openBook(b.id)};
  $("#catalogSearchBtn").onclick=renderCatalog;$("#catalogSearch").oninput=()=>{if(!$("#catalogSearch").value)renderCatalog()};
  $("#librarySearch").oninput=renderLibrary;$("#libraryGenre").onchange=renderLibrary;
  $("#addBookBtn").onclick=()=>openModal("#addModal");$("#saveAudioBook").onclick=saveAudioBook;
  $("#importBookBtn").onclick=()=>openModal("#importModal");
  $("#myFilesImportBtn").onclick=()=>openModal("#importModal");
  $("#startImportBtn").onclick=importTextBook;
  $("#importFile").onchange=autoFillImportMeta;
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
function coverHtml(item,detail=false){
  const cls=detail?"detail-cover":"book-cover";
  const bg=item.coverData?`style="background-image:linear-gradient(180deg,transparent 25%,rgba(0,0,0,.78)),url('${item.coverData}');background-size:cover;background-position:center"`:"";
  return `<div class="${cls} ${item.cover||"c1"}" ${bg}><span class="cover-mark">${item.source==="tts"||item.wiki?"TTS":"SES"}</span><div class="cover-title">${esc(item.title)}</div></div>`;
}
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
  const hasSummary=!!CURATED_SUMMARIES[x.title];
  $("#detailQuickBtn").classList.toggle("hidden",!hasSummary);
  $("#detailQuickBtn").onclick=()=>playCatalogSummary(x);
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
function renderAll(){renderLibrary();renderFavorites();renderContinue();renderMyFiles();populateGenres();renderForYou(false);if($("#readyBooksGrid"))renderReadyBooks()}
function libraryCard(b){const p=bookProgress(b);const ft=b.importFormat?`<span class="filetype-badge">${esc(b.importFormat.toUpperCase())}</span>`:"";return `<article class="library-card"><button class="cover-card" data-openbook="${b.id}">${p>=98?'<span class="completed-badge">✓ Tamamlandı</span>':''}${ft}${coverHtml({...b,cover:b.coverClass||"c1"})}<div class="card-title">${esc(b.title)}</div><div class="card-author">${esc(b.author)} · %${p}</div></button><button class="card-menu" data-menu="${b.id}">⋮</button></article>`}
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

function autoFillImportMeta(){
  const f=$("#importFile").files[0];if(!f)return;
  const base=f.name.replace(/\.[^.]+$/,"").replace(/[_-]+/g," ").trim();
  if(!$("#importTitle").value.trim())$("#importTitle").value=base;
}
function normalizeBookText(text){
  return String(text||"")
    .replace(/\u00ad/g,"")
    .replace(/\r/g,"")
    .replace(/[ \t]+\n/g,"\n")
    .replace(/\n{4,}/g,"\n\n")
    .replace(/[ \t]{2,}/g," ")
    .trim();
}
async function parseTxtFile(file){
  return normalizeBookText(await file.text());
}
async function parsePdfFile(file){
  if(!window.pdfjsLib){
    try{
      const mod=await import("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs");
      window.pdfjsLib=mod;
    }catch(e){throw new Error("PDF motoru yüklenemedi")}
  }
  const buf=await file.arrayBuffer();
  const pdf=await window.pdfjsLib.getDocument({data:buf,disableWorker:true}).promise;
  const pages=[];
  for(let i=1;i<=pdf.numPages;i++){
    $("#loadingText").textContent=`PDF okunuyor · ${i}/${pdf.numPages}`;
    const page=await pdf.getPage(i),content=await page.getTextContent();
    const line=content.items.map(x=>x.str).join(" ");
    if(line.trim())pages.push(line.trim());
  }
  return normalizeBookText(pages.join("\n\n"));
}
function htmlToCleanText(html){
  const d=new DOMParser().parseFromString(html,"text/html");
  d.querySelectorAll("script,style,nav,footer,header,svg").forEach(x=>x.remove());
  return normalizeBookText(d.body?.innerText||"");
}
async function parseEpubFile(file){
  if(!window.JSZip)throw new Error("EPUB motoru yüklenemedi");
  const zip=await JSZip.loadAsync(await file.arrayBuffer());
  let rootPath="OEBPS/content.opf";
  const container=zip.file("META-INF/container.xml");
  if(container){
    const xml=await container.async("text");
    const d=new DOMParser().parseFromString(xml,"application/xml");
    rootPath=d.querySelector("rootfile")?.getAttribute("full-path")||rootPath;
  }
  const opfFile=zip.file(rootPath);
  if(!opfFile)throw new Error("EPUB içerik dosyası bulunamadı");
  const opfText=await opfFile.async("text"),doc=new DOMParser().parseFromString(opfText,"application/xml");
  const base=rootPath.includes("/")?rootPath.slice(0,rootPath.lastIndexOf("/")+1):"";
  const manifest={};
  doc.querySelectorAll("manifest > item").forEach(x=>manifest[x.getAttribute("id")]=x.getAttribute("href"));
  const spine=[...doc.querySelectorAll("spine > itemref")].map(x=>x.getAttribute("idref")).filter(Boolean);
  const parts=[];
  for(let i=0;i<spine.length;i++){
    const href=manifest[spine[i]];if(!href)continue;
    const path=base+decodeURIComponent(href.split("#")[0]);
    const entry=zip.file(path)||zip.file(base+href.split("#")[0]);
    if(!entry)continue;
    $("#loadingText").textContent=`EPUB okunuyor · ${i+1}/${spine.length}`;
    const html=await entry.async("text"),text=htmlToCleanText(html);
    if(text.length>40)parts.push(text);
  }
  if(!parts.length){
    const htmlFiles=Object.keys(zip.files).filter(n=>/\.(xhtml|html|htm)$/i.test(n)&&!zip.files[n].dir);
    for(const n of htmlFiles){const text=htmlToCleanText(await zip.file(n).async("text"));if(text.length>40)parts.push(text)}
  }
  return normalizeBookText(parts.join("\n\n"));
}
async function importTextBook(){
  const file=$("#importFile").files[0];if(!file)return toast("Önce EPUB, PDF veya TXT dosyası seç.");
  const ext=(file.name.split(".").pop()||"").toLowerCase();
  if(!["epub","pdf","txt"].includes(ext))return toast("Şimdilik EPUB, PDF ve TXT destekleniyor.");
  loading(true,`${ext.toUpperCase()} hazırlanıyor…`);
  try{
    let text="";
    if(ext==="txt")text=await parseTxtFile(file);
    if(ext==="pdf")text=await parsePdfFile(file);
    if(ext==="epub")text=await parseEpubFile(file);
    if(text.length<150)throw new Error("Okunabilir metin bulunamadı");
    const parts=splitBookText(text),chs=[];
    for(let i=0;i<parts.length;i++){
      const fid=uid();
      await put(FILES,{id:fid,type:"text",text:parts[i],size:new Blob([parts[i]]).size});
      chs.push({id:uid(),fileId:fid,title:`Bölüm ${i+1}`,order:i,segmentIndex:0,progress:0});
    }
    let coverData=null;if($("#importCover").files[0])coverData=await blobToDataURL($("#importCover").files[0]);
    const title=$("#importTitle").value.trim()||file.name.replace(/\.[^.]+$/,"");
    const b={
      id:uid(),title,author:$("#importAuthor").value.trim()||"Bilinmeyen yazar",
      genre:$("#importGenre").value||"Diğer",coverData,coverClass:["c1","c2","c3","c4","c5","c6","c7","c8"][Math.abs(seedFromString(title))%8],
      source:"tts",importFormat:ext,originalFilename:file.name,chapters:chs,favorite:false,lastPlayedAt:0,currentChapter:0,bookmarks:[],history:[],createdAt:Date.now()
    };
    await put(BOOKS,b);books.push(b);
    ["#importFile","#importTitle","#importAuthor","#importCover"].forEach(s=>$(s).value="");
    closeOverlays();renderAll();toast(`${ext.toUpperCase()} kitabı eklendi.`);await openBook(b.id,false);
  }catch(e){
    console.error(e);
    toast(ext==="pdf"?"PDF metni okunamadı. Taranmış/görüntü PDF olabilir.":"Kitap dosyası içe aktarılamadı.");
  }finally{loading(false)}
}
function renderMyFiles(){
  const list=books.filter(b=>b.importFormat);
  $("#myFilesSection").classList.toggle("hidden",!list.length);
  $("#myFilesRail").innerHTML=list.map(libraryCard).join("");
  wireLibrary($("#myFilesRail"));
}

async function saveAudioBook(){
  const title=$("#addTitle").value.trim(),files=[...$("#addAudio").files];if(!title||!files.length){toast("Kitap adı ve en az bir ses dosyası gerekli.");return}
  loading(true,"Ses dosyaları kaydediliyor…");
  try{let coverData=null;if($("#addCover").files[0])coverData=await blobToDataURL($("#addCover").files[0]);const chs=[];for(let i=0;i<files.length;i++){const f=files[i],fid=uid();await put(FILES,{id:fid,type:"audio",blob:f,name:f.name,size:f.size});chs.push({id:uid(),fileId:fid,title:f.name.replace(/\.[^.]+$/,""),order:i,progress:0,duration:0})}const b={id:uid(),title,author:$("#addAuthor").value.trim()||"Bilinmeyen yazar",genre:$("#addGenre").value,coverData,coverClass:"c8",source:"audio",chapters:chs,favorite:false,lastPlayedAt:0,currentChapter:0,bookmarks:[],history:[],createdAt:Date.now()};await put(BOOKS,b);books.push(b);closeOverlays();renderAll();toast("Sesli kitap eklendi.")}finally{loading(false)}}
function blobToDataURL(blob){return new Promise((r,j)=>{const x=new FileReader();x.onload=()=>r(x.result);x.onerror=j;x.readAsDataURL(blob)})}
async function openBook(id,auto=false){
  stopPlayback(false);currentBook=books.find(b=>b.id===id);if(!currentBook)return;currentChapter=currentBook.currentChapter||0;currentBook.lastPlayedAt=Date.now();currentBook.history.unshift({at:Date.now(),chapter:currentChapter});currentBook.history=currentBook.history.slice(0,50);await put(BOOKS,currentBook);
  $("#playerBigCover").className=`player-big-cover ${currentBook.coverClass||"c1"}`;
  $("#playerBigCover").style.backgroundImage=currentBook.coverData?`linear-gradient(180deg,transparent 25%,rgba(0,0,0,.78)),url('${currentBook.coverData}')`:"";
  $("#playerBigCover").style.backgroundSize=currentBook.coverData?"cover":"";
  $("#playerBigCover").style.backgroundPosition=currentBook.coverData?"center":"";
  $("#playerBigCover").innerHTML=`<div class="cover-title">${esc(currentBook.title)}</div>`;
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
async function saveTtsProgress(){if(!currentBook||currentBook.isSummary)return;const ch=currentBook.chapters[currentChapter];ch.segmentIndex=tts.segmentIndex;ch.progress=tts.segments.length?Math.min(1,tts.segmentIndex/tts.segments.length):0;scheduleSave()}
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
function scheduleSave(){clearTimeout(saveTimer);saveTimer=setTimeout(async()=>{if(currentBook&&!currentBook.isSummary){await put(BOOKS,currentBook);renderContinue()}},700)}
function renderChapters(){if(!currentBook)return;$("#chaptersList").innerHTML=currentBook.chapters.map((c,i)=>`<div class="chapter-row ${i===currentChapter?"active":""}"><button data-ch="${i}">▶</button><div><strong>${esc(c.title||`Bölüm ${i+1}`)}</strong><div class="muted">${currentBook.source==="tts"?`%${Math.round((c.progress||0)*100)}`:c.duration?`${fmt(c.progress||0)} / ${fmt(c.duration)}`:"Hazır"}</div></div><span>${i+1}</span></div>`).join("");$$("[data-ch]").forEach(b=>b.onclick=()=>loadChapter(+b.dataset.ch,true))}
function syncPlayIcons(){const playing=currentBook?(currentBook.source==="tts"?tts.playing:!audio.paused):false;$("#playBtn").textContent=playing?"❚❚":"▶";$("#miniPlay").textContent=playing?"❚❚":"▶"}
function updateMini(){if(!currentBook){$("#miniPlayer").classList.add("hidden");return}$("#miniPlayer").classList.remove("hidden");$("#miniTitle").textContent=currentBook.title;$("#miniSubtitle").textContent=currentBook.chapters[currentChapter]?.title||"";$("#miniCover").className=`mini-cover ${currentBook.coverClass||"c1"}`;syncPlayIcons()}
function stopPlayback(clear=true){audio.pause();speechSynthesis?.cancel?.();clearTimeout(quickSessionTimer);quickSessionActive=false;tts.playing=false;if(clear){currentBook=null;$("#miniPlayer").classList.add("hidden")}syncPlayIcons()}
function revokeUrl(){if(currentObjectUrl){URL.revokeObjectURL(currentObjectUrl);currentObjectUrl=null}}
function cycleSpeed(){if(currentBook?.source==="tts"){let v=+$("#rateRange").value+.1;if(v>1.5)v=.7;$("#rateRange").value=v;$("#rateRange").dispatchEvent(new Event("input"));$("#speedBtn").textContent=v.toFixed(1)+"×";if(tts.playing){speechSynthesis.cancel();speakNext()}}else{const s=[.75,1,1.25,1.5,1.75,2],cur=Number($("#speedBtn").dataset.speed||1),n=s[(s.indexOf(cur)+1)%s.length];$("#speedBtn").dataset.speed=n;$("#speedBtn").textContent=n+"×";audio.playbackRate=n}}
async function toggleFavorite(){if(!currentBook)return;if(currentBook.isSummary)return toast("Özet yerine tam kitabı favoriye ekleyebilirsin.");currentBook.favorite=!currentBook.favorite;await put(BOOKS,currentBook);$("#favBtn").textContent=currentBook.favorite?"♥ Favori":"♡ Favori";renderAll()}
async function addBookmark(){if(!currentBook)return;const pos=currentBook.source==="tts"?tts.segmentIndex:(audio.currentTime||0);currentBook.bookmarks.push({id:uid(),chapter:currentChapter,pos,at:Date.now(),type:currentBook.source});await put(BOOKS,currentBook);toast("Yer imi eklendi.")}
function showBookmarks(){if(!currentBook)return;$("#listModalTitle").textContent="Yer İmleri";const arr=currentBook.bookmarks||[];$("#listModalBody").innerHTML=arr.length?arr.slice().reverse().map(b=>`<div class="list-item"><div><strong>${esc(currentBook.chapters[b.chapter]?.title||"Bölüm")}</strong><div class="meta">${b.type==="tts"?`Parça ${b.pos+1}`:fmt(b.pos)} · ${new Date(b.at).toLocaleString("tr-TR")}</div></div><div class="list-actions"><button data-bmgo="${b.id}">Git</button><button data-bmdel="${b.id}">Sil</button></div></div>`).join(""):`<p class="muted">Yer imi yok.</p>`;openModal("#listModal");$$("[data-bmgo]").forEach(x=>x.onclick=async()=>{const b=arr.find(v=>v.id===x.dataset.bmgo);closeOverlays();await loadChapter(b.chapter,false);if(currentBook.source==="tts"){tts.segmentIndex=b.pos;updateTtsProgress();startTts()}else{audio.currentTime=b.pos;audio.play()}});$$("[data-bmdel]").forEach(x=>x.onclick=async()=>{currentBook.bookmarks=currentBook.bookmarks.filter(v=>v.id!==x.dataset.bmdel);await put(BOOKS,currentBook);showBookmarks()})}
function setSleep(){const v=prompt('Kaç dakika sonra dursun? 15, 30, 45, 60', '30');if(!v)return;const n=+v;if(!Number.isFinite(n)||n<=0)return toast("Geçerli dakika gir.");clearTimeout(sleepTimer);sleepTimer=setTimeout(()=>{if(currentBook?.source==="tts")pauseTts();else audio.pause();toast("Uyku zamanlayıcısı durdurdu.")},n*60000);toast(`${n} dakikalık zamanlayıcı kuruldu.`)}
function testVoice(){if(!("speechSynthesis"in window))return toast("Bu cihaz TTS desteklemiyor.");speechSynthesis.cancel();const u=new SpeechSynthesisUtterance("Merhaba. Sesli Kitaplık için seçtiğin Türkçe ses bu şekilde duyulacak.");u.lang="tr-TR";u.rate=+$("#rateRange").value;u.pitch=+$("#pitchRange").value;const v=selectedVoice();if(v)u.voice=v;speechSynthesis.speak(u)}
function updateRateLabels(){$("#rateValue").textContent=(+$("#rateRange").value).toFixed(2)+"×";$("#pitchValue").textContent=(+$("#pitchRange").value).toFixed(2)}
function showHistory(){const rows=books.flatMap(b=>(b.history||[]).map(h=>({...h,title:b.title,id:b.id}))).sort((a,b)=>b.at-a.at).slice(0,60);$("#listModalTitle").textContent="Dinleme Geçmişi";$("#listModalBody").innerHTML=rows.length?rows.map(h=>`<div class="list-item"><div><strong>${esc(h.title)}</strong><div class="meta">${new Date(h.at).toLocaleString("tr-TR")}</div></div><div class="list-actions"><button data-h="${h.id}">Aç</button></div></div>`).join(""):`<p class="muted">Henüz geçmiş yok.</p>`;openModal("#listModal");$$("[data-h]").forEach(x=>x.onclick=()=>{closeOverlays();openBook(x.dataset.h)})}
async function showStorage(){const f=await getAll(FILES);const local=f.reduce((s,x)=>s+(x.size||x.blob?.size||0),0);let est={};try{est=await navigator.storage?.estimate?.()||{}}catch{}$("#listModalTitle").textContent="Depolama";$("#listModalBody").innerHTML=`<div class="list-item"><div><strong>${books.length} kitap</strong><div class="meta">${f.length} yerel içerik · yaklaşık ${bytes(local)}</div>${est.usage!=null?`<div class="meta">Tarayıcı kullanımı: ${bytes(est.usage)}</div>`:""}</div></div>`;openModal("#listModal")}
async function clearData(){if(!confirm("Tüm kitaplar, ilerleme ve ayarlar silinsin mi?"))return;stopPlayback();await clearStore(BOOKS);await clearStore(FILES);books=[];closeOverlays();renderAll();toast("Yerel veriler silindi.")}



const READY_BOOK_GROUPS=[
  {name:"Hepsi",filter:()=>true},
  {name:"Roman",filter:x=>x.category==="Roman"},
  {name:"Hikâye",filter:x=>x.category==="Hikâye"},
  {name:"Şiir",filter:x=>x.category==="Şiir"},
  {name:"Düşünce",filter:x=>["Düşünce","Gezi","Tiyatro","Polisiye","Mizah","Masal"].includes(x.category)}
];
let readyGroup="Hepsi";
function renderReadyBooks(){
  $("#readyBookChips").innerHTML=READY_BOOK_GROUPS.map(g=>`<button class="chip ${g.name===readyGroup?"active":""}" data-ready-group="${g.name}">${g.name}</button>`).join("");
  $$("[data-ready-group]").forEach(b=>b.onclick=()=>{readyGroup=b.dataset.readyGroup;renderReadyBooks()});
  const grp=READY_BOOK_GROUPS.find(g=>g.name===readyGroup)||READY_BOOK_GROUPS[0];
  const list=CATALOG.filter(grp.filter);
  $("#readyBooksGrid").innerHTML=list.map(x=>{
    const exists=books.find(b=>b.catalogId===x.id);
    const hasSummary=!!CURATED_SUMMARIES[x.title];
    return `<article class="ready-card">
      <div class="ready-cover ${x.cover}"><span>${esc(x.title)}</span></div>
      <div class="ready-meta">
        <strong>${esc(x.title)}</strong>
        <div class="sub">${esc(x.author)} · ${esc(x.category)} · Türkçe TTS</div>
        <div class="ready-actions">
          <button class="ready-add" data-ready-add="${x.id}">${exists?"▶ Dinle":"+ Kitaplığıma Ekle"}</button>
          ${hasSummary?`<button class="ready-summary" data-ready-summary="${x.id}">🎧 Özet</button>`:""}
        </div>
      </div>
    </article>`;
  }).join("");
  $$("[data-ready-add]").forEach(b=>b.onclick=()=>{
    const x=CATALOG.find(v=>v.id===b.dataset.readyAdd);if(!x)return;
    const exists=books.find(v=>v.catalogId===x.id);
    exists?openBook(exists.id,true):addTtsCatalogBook(x);
  });
  $$("[data-ready-summary]").forEach(b=>b.onclick=()=>{
    const x=CATALOG.find(v=>v.id===b.dataset.readySummary);if(x)playCatalogSummary(x);
  });
}


function renderSourceStats(){
  const fmtCount=v=>v==null?"…":String(v);
  $("#sourceStats").innerHTML=`
    <div class="source-stat"><strong>${sourceCounts.curated}</strong><span>Hazır seçilmiş klasik</span></div>
    <div class="source-stat"><strong>${fmtCount(sourceCounts.wikisourcePublic)}</strong><span>Vikikaynak kamu malı</span></div>
    <div class="source-stat"><strong>${fmtCount(sourceCounts.wikisourceFree)}</strong><span>Vikikaynak yayımı serbest</span></div>
    <div class="source-stat"><strong>+ açık ağ</strong><span>Open Library · Gutenberg</span></div>`;
}
async function primeSourceCounts(){
  // Low-impact counts only; no bulk import.
  try{
    const r=await fetch("https://openlibrary.org/search.json?"+new URLSearchParams({
      q:"language:tur ebook_access:public",limit:"1",fields:"key"
    }),{cache:"no-store"});
    const j=await r.json();sourceCounts.openLibrary=j.numFound??j.num_found??null;
  }catch{}
  try{
    const r=await fetch("https://gutendex.com/books?languages=tr",{cache:"no-store"});
    const j=await r.json();sourceCounts.gutenberg=j.count??null;
  }catch{}
  renderSourceStats();
}
function normKey(s){return String(s||"").toLocaleLowerCase("tr").replace(/[^\p{L}\p{N}]+/gu," ").trim()}
function dedupeResults(rows){
  const seen=new Set(),out=[];
  for(const r of rows){
    const k=normKey(r.title)+"|"+normKey(r.author);
    if(!r.title||seen.has(k))continue;seen.add(k);out.push(r);
  }
  return out;
}
async function globalSourceSearch(){
  const q=$("#globalSourceSearch").value.trim();
  if(q.length<2)return toast("En az iki harf yaz.");
  $("#globalSearchStatus").textContent="Tüm kaynaklar taranıyor…";
  $("#globalSearchResults").innerHTML="";
  const rows=[];
  // Curated local catalog
  CATALOG.filter(x=>`${x.title} ${x.author}`.toLocaleLowerCase("tr").includes(q.toLocaleLowerCase("tr")))
    .slice(0,20).forEach(x=>rows.push({source:"Hazır Katalog",kind:"curated",title:x.title,author:x.author,id:x.id,category:x.category}));
  // Wikisource exact/fulltext search, Turkish project
  try{
    const u="https://tr.wikisource.org/w/api.php?"+new URLSearchParams({origin:"*",action:"query",list:"search",srsearch:q,srnamespace:"0",srlimit:"20",format:"json",formatversion:"2"});
    const j=await (await fetch(u,{cache:"no-store"})).json();
    (j.query?.search||[]).forEach(x=>rows.push({source:"Vikikaynak",kind:"wikisource",title:x.title,author:"Türkçe Vikikaynak",wikiTitle:x.title}));
  }catch(e){console.warn("Vikikaynak arama",e)}
  // Open Library: only Turkish + public ebook access. Low-volume search only.
  try{
    const u="https://openlibrary.org/search.json?"+new URLSearchParams({
      q:`${q} language:tur ebook_access:public`,fields:"key,title,author_name,ia,public_scan_b,has_fulltext,first_publish_year",limit:"20"
    });
    const j=await (await fetch(u,{cache:"no-store"})).json();
    (j.docs||[]).filter(x=>x.has_fulltext&&x.ia?.length).forEach(x=>rows.push({
      source:"Open Library",kind:"openlibrary",title:x.title,author:(x.author_name||[]).join(", ")||"Bilinmeyen yazar",
      ia:x.ia[0],year:x.first_publish_year||"",publicScan:!!x.public_scan_b
    }));
  }catch(e){console.warn("Open Library arama",e)}
  // Project Gutenberg via Gutendex: Turkish-language only.
  try{
    const u="https://gutendex.com/books?"+new URLSearchParams({languages:"tr",search:q});
    const j=await (await fetch(u,{cache:"no-store"})).json();
    (j.results||[]).slice(0,20).forEach(x=>rows.push({
      source:"Project Gutenberg",kind:"gutenberg",title:x.title,author:(x.authors||[]).map(a=>a.name).join(", ")||"Bilinmeyen yazar",
      gutenberg:x
    }));
  }catch(e){console.warn("Gutenberg arama",e)}
  renderGlobalResults(dedupeResults(rows));
}
function renderGlobalResults(rows){
  $("#globalSearchStatus").textContent=rows.length?`${rows.length} benzersiz sonuç bulundu.`:"Sonuç bulunamadı.";
  $("#globalSearchResults").innerHTML=rows.map((r,i)=>`
    <article class="source-result">
      <span class="src-label">${esc(r.source)}</span>
      <strong>${esc(r.title)}</strong>
      <div class="meta">${esc(r.author||"")} ${r.year?`· ${r.year}`:""}</div>
      <div class="actions">
        <button class="open-btn" data-global-add="${i}">${r.kind==="curated"?"Kitaplığıma Ekle":"Dinlemeye Hazırla"}</button>
      </div>
    </article>`).join("");
  window.__globalResults=rows;
  $$("[data-global-add]").forEach(b=>b.onclick=()=>addGlobalResult(window.__globalResults[+b.dataset.globalAdd]));
}
async function addGlobalResult(r){
  if(!r)return;
  if(r.kind==="curated"){
    const x=CATALOG.find(v=>v.id===r.id);if(!x)return;
    const e=books.find(b=>b.catalogId===x.id);return e?openBook(e.id,true):addTtsCatalogBook(x);
  }
  if(r.kind==="wikisource")return addArchiveWork(r.wikiTitle);
  if(r.kind==="openlibrary")return importOpenLibraryItem(r);
  if(r.kind==="gutenberg")return importGutenbergItem(r.gutenberg);
}
async function importOpenLibraryItem(r){
  loading(true,`“${r.title}” açık tam metinden hazırlanıyor…`);
  try{
    const meta=await (await fetch(`https://archive.org/metadata/${encodeURIComponent(r.ia)}`,{cache:"no-store"})).json();
    const files=(meta.files||[]).filter(f=>f.name);
    let f=files.find(x=>/_djvu\.txt$/i.test(x.name))||
          files.find(x=>/\.txt$/i.test(x.name)&&!/meta|reviews|scandata/i.test(x.name));
    if(!f)throw new Error("Metin türevi yok");
    const url=`https://archive.org/download/${encodeURIComponent(r.ia)}/${encodeURIComponent(f.name).replace(/%2F/g,"/")}`;
    const resp=await fetch(url);if(!resp.ok)throw new Error("Metin indirilemedi");
    const text=normalizeBookText(await resp.text());if(text.length<300)throw new Error("Metin kısa");
    await createImportedTextBook({title:r.title,author:r.author,genre:"Open Library",text,format:"open",filename:r.ia});
  }catch(e){console.error(e);toast("Bu Open Library kaydının okunabilir metni alınamadı.")}
  finally{loading(false)}
}
async function importGutenbergItem(g){
  loading(true,`“${g.title}” Gutenberg'den hazırlanıyor…`);
  try{
    const fm=g.formats||{};
    const url=Object.entries(fm).find(([k,v])=>k.startsWith("text/plain")&&v)?.[1]||
              Object.entries(fm).find(([k,v])=>k.startsWith("text/html")&&v)?.[1];
    if(!url)throw new Error("Metin formatı yok");
    const resp=await fetch(url);if(!resp.ok)throw new Error("İndirilemedi");
    let raw=await resp.text();
    const text=url.includes(".html")?htmlToCleanText(raw):normalizeBookText(raw);
    if(text.length<300)throw new Error("Metin kısa");
    const author=(g.authors||[]).map(a=>a.name).join(", ")||"Bilinmeyen yazar";
    await createImportedTextBook({title:g.title,author,genre:"Project Gutenberg",text,format:"gutenberg",filename:String(g.id)});
  }catch(e){console.error(e);toast("Bu Gutenberg kitabı hazırlanamadı.")}
  finally{loading(false)}
}
async function createImportedTextBook({title,author,genre,text,format,filename}){
  const existing=books.find(b=>normKey(b.title)===normKey(title)&&normKey(b.author)===normKey(author));
  if(existing){toast("Bu kitap zaten kütüphanende.");return openBook(existing.id,true)}
  const parts=splitBookText(text),chs=[];
  for(let i=0;i<parts.length;i++){
    const fid=uid();await put(FILES,{id:fid,type:"text",text:parts[i],size:new Blob([parts[i]]).size});
    chs.push({id:uid(),fileId:fid,title:`Bölüm ${i+1}`,order:i,segmentIndex:0,progress:0});
  }
  const b={id:uid(),title,author:author||"Bilinmeyen yazar",genre,coverClass:["c1","c2","c3","c4","c5","c6","c7","c8"][Math.abs(seedFromString(title))%8],
    source:"tts",importFormat:format,originalFilename:filename,chapters:chs,favorite:false,lastPlayedAt:0,currentChapter:0,bookmarks:[],history:[],createdAt:Date.now()};
  await put(BOOKS,b);books.push(b);renderAll();toast("Kitap cihazına eklendi.");await openBook(b.id,true);
}
function showSourceStatus(){
  $("#listModalTitle").textContent="Kaynak Durumu · v5.0 LTS";
  const v=x=>x==null?"Bağlantıda ölçülür":String(x);
  $("#listModalBody").innerHTML=`
    <div class="list-item"><div><strong>Hazır Türkçe Klasikler</strong><div class="meta">${CATALOG.length} düzenlenmiş eser · aktif</div></div></div>
    <div class="list-item"><div><strong>Vikikaynak · Kamu Malı</strong><div class="meta">${v(sourceCounts.wikisourcePublic)} kayıt · tam metin TTS</div></div></div>
    <div class="list-item"><div><strong>Vikikaynak · Yayımı Serbest</strong><div class="meta">${v(sourceCounts.wikisourceFree)} kayıt · tam metin TTS</div></div></div>
    <div class="list-item"><div><strong>Open Library</strong><div class="meta">${v(sourceCounts.openLibrary)} Türkçe public/open sonuç · arama bazlı erişim</div></div></div>
    <div class="list-item"><div><strong>Project Gutenberg</strong><div class="meta">${v(sourceCounts.gutenberg)} Türkçe katalog sonucu · varsa doğrudan metin</div></div></div>
    <div class="list-item"><div><strong>Kendi Dosyaların</strong><div class="meta">EPUB · PDF · TXT · MP3/M4A · tamamen cihaz içi</div></div></div>
    <p class="source-note">v5.0 LTS FROZEN: kaynak mimarisi sabitlendi. Dinamik kaynakların sonuç sayıları zamanla değişebilir.</p>`;
  openModal("#listModal");
}

const ARCHIVE_CATEGORIES={
  public:"Kategori:Türkiye'de yayımlanan kamu malı eserler",
  free:"Kategori:Türkiye'de yayımı serbest eserler"
};
async function mwCategoryAll(category){
  let cont=null,out=[],guard=0;
  do{
    const params={origin:"*",action:"query",list:"categorymembers",cmtitle:category,cmnamespace:"0",cmlimit:"500",format:"json",formatversion:"2"};
    if(cont)params.cmcontinue=cont;
    const url="https://tr.wikisource.org/w/api.php?"+new URLSearchParams(params);
    const r=await fetch(url,{cache:"no-store"});if(!r.ok)throw new Error("HTTP "+r.status);
    const j=await r.json();out.push(...(j.query?.categorymembers||[]));cont=j.continue?.cmcontinue||null;guard++;
  }while(cont&&guard<10);
  return out;
}
function archiveNoise(title){
  return /^(Kategori:|Dosya:|Şablon:|Yardım:|Vikikaynak:|Kişi:|Sayfa:|Dizin:)/i.test(title);
}
async function loadArchive(force){
  $("#archiveStatus").textContent="Türkçe arşiv taranıyor…";
  $("#archiveMoreBtn").classList.add("hidden");
  try{
    const key="archive-"+archiveMode;
    const cached=!force?await getOne(SETTINGS,key):null;
    if(cached?.value?.items?.length && Date.now()-cached.value.at<24*60*60*1000){
      archiveItems=cached.value.items;
    }else{
      const rows=await mwCategoryAll(ARCHIVE_CATEGORIES[archiveMode]);
      archiveItems=rows.filter(x=>x.title&&!archiveNoise(x.title)).map(x=>({title:x.title,pageid:x.pageid}));
      await put(SETTINGS,{key,value:{at:Date.now(),items:archiveItems}});
    }
    archiveShown=40;
    if(archiveMode==="public")sourceCounts.wikisourcePublic=archiveItems.length;else sourceCounts.wikisourceFree=archiveItems.length;
    renderSourceStats();renderArchive();
  }catch(e){
    console.error(e);$("#archiveStatus").textContent="Arşive şu anda ulaşılamadı. İnternet bağlantısını kontrol edip yenileyebilirsin.";
  }
}
function renderArchive(){
  const q=$("#archiveSearch").value.trim().toLocaleLowerCase("tr");
  const list=archiveItems.filter(x=>!q||x.title.toLocaleLowerCase("tr").includes(q));
  const shown=list.slice(0,archiveShown);
  $("#archiveStatus").textContent=`${list.length} eser bulundu · ${archiveMode==="public"?"kamu malı":"yayımı serbest"}`;
  $("#archiveGrid").innerHTML=shown.map(x=>`<div class="archive-item"><div><strong>${esc(x.title)}</strong><span>Türkçe Vikikaynak · TTS ile dinlenebilir</span></div><button data-archive-add="${esc(x.title)}">Dinle</button></div>`).join("")||'<p class="muted">Sonuç bulunamadı.</p>';
  $("#archiveMoreBtn").classList.toggle("hidden",shown.length>=list.length);
  $$("[data-archive-add]").forEach(b=>b.onclick=()=>addArchiveWork(b.dataset.archiveAdd));
}
async function addArchiveWork(title){
  const exists=books.find(b=>b.archiveTitle===title);
  if(exists)return openBook(exists.id,true);
  loading(true,`“${title}” hazırlanıyor…`);
  try{
    const data=await wikiFetch(title),text=extractText(data.html);
    if(text.length<120)throw new Error("Metin kısa");
    const parts=splitBookText(text),chs=[];
    for(let i=0;i<parts.length;i++){
      const fid=uid();await put(FILES,{id:fid,type:"text",text:parts[i],size:new Blob([parts[i]]).size});
      chs.push({id:uid(),fileId:fid,title:`Bölüm ${i+1}`,order:i,segmentIndex:0,progress:0});
    }
    const b={id:uid(),archiveTitle:title,title,author:"Vikikaynak",genre:"Kamu Malı Arşiv",coverClass:["c1","c2","c3","c4","c5","c6","c7","c8"][Math.abs(seedFromString(title))%8],source:"tts",wikiTitle:data.title,chapters:chs,favorite:false,lastPlayedAt:0,currentChapter:0,bookmarks:[],history:[],createdAt:Date.now()};
    await put(BOOKS,b);books.push(b);renderAll();await openBook(b.id,true);toast("Eser kütüphanene eklendi.");
  }catch(e){console.error(e);toast("Bu sayfa sesli kitaba dönüştürülemedi.")}
  finally{loading(false)}
}

function renderKitupHome(){
  renderForYou(false);
  renderCollections();
}
function seedFromString(s){
  let h=2166136261;
  for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}
  return Math.abs(h);
}
function personalizedCatalog(){
  const listenedGenres=new Map();
  books.forEach(b=>{
    const weight=(b.lastPlayedAt?3:0)+(b.favorite?4:0)+(bookProgress(b)>25?2:0);
    listenedGenres.set(b.genre,(listenedGenres.get(b.genre)||0)+weight);
  });
  const preferred=[...listenedGenres.entries()].sort((a,b)=>b[1]-a[1]).map(x=>x[0]);
  const owned=new Set(books.map(b=>b.catalogId).filter(Boolean));
  let list=CATALOG.filter(x=>!owned.has(x.id));
  if(preferred.length){
    list=list.sort((a,b)=>{
      const ai=preferred.indexOf(a.category),bi=preferred.indexOf(b.category);
      const av=ai<0?99:ai,bv=bi<0?99:bi;
      return av-bv;
    });
  }
  return list;
}
function renderForYou(forceShuffle=false){
  const pool=personalizedCatalog();
  if(!pool.length){$("#forYouRail").innerHTML='<p class="muted">Katalogdaki tüm eserler kitaplığında.</p>';return;}
  const day=new Date().toISOString().slice(0,10);
  const seed=seedFromString(day+(forceShuffle?Date.now():"")+"seslikitap");
  const arranged=pool.map((x,i)=>({x,k:(seedFromString(x.id)+seed+i*97)%10007})).sort((a,b)=>a.k-b.k).slice(0,8).map(v=>v.x);
  $("#forYouRail").innerHTML=arranged.map(catalogCard).join("");
  $$("#forYouRail [data-cat]").forEach(b=>b.onclick=()=>showCatalogDetail(b.dataset.cat));
}
function renderCollections(){
  const collections=[
    {title:"Bir Oturuşta",sub:"Kısa hikâyeler",cls:"col1",filter:x=>x.category==="Hikâye"},
    {title:"Büyük Romanlar",sub:"Türk roman klasikleri",cls:"col2",filter:x=>x.category==="Roman"},
    {title:"Düşün ve Dinle",sub:"Şiir · düşünce · gezi",cls:"col3",filter:x=>["Şiir","Düşünce","Gezi"].includes(x.category)},
    {title:"Eski İstanbul",sub:"Toplum ve hiciv",cls:"col4",filter:x=>["Hüseyin Rahmi Gürpınar","Ahmet Mithat Efendi","Recaizade Mahmut Ekrem"].includes(x.author)}
  ];
  $("#collectionCards").innerHTML=collections.map((c,i)=>`<button class="collection-card ${c.cls}" data-collection="${i}"><strong>${c.title}</strong><span>${c.sub}</span></button>`).join("");
  $$("[data-collection]").forEach(b=>b.onclick=()=>{
    const c=collections[+b.dataset.collection];
    selectedCatalogCategory="Tümü";
    $("#catalogSearch").value="";
    renderCatalog();
    const list=CATALOG.filter(c.filter);
    $("#featuredShelves").innerHTML=`<div class="shelf"><div class="shelf-head"><h3>${c.title}</h3></div><div class="rail">${list.map(catalogCard).join("")}</div></div>`;
    $$("#featuredShelves [data-cat]").forEach(x=>x.onclick=()=>showCatalogDetail(x.dataset.cat));
    $("#catalogSection").scrollIntoView({behavior:"smooth"});
  });
}
function pickQuickBook(){
  const candidates=CATALOG.filter(x=>CURATED_SUMMARIES[x.title]);
  const x=candidates[Math.floor(Math.random()*candidates.length)];
  $("#quickPickCard").classList.remove("hidden");
  $("#quickPickCard").innerHTML=`<div class="quick-pick-inner"><div class="quick-mini-cover ${x.cover}"><span>${esc(x.title)}</span></div><div class="quick-copy"><strong>${esc(x.title)}</strong><span>${esc(x.author)} · KitUP tarzı özet</span><span class="summary-chip">15 dk'ya kadar özet</span></div><button class="btn primary" id="startQuickPick">▶ Özeti Dinle</button></div>`;
  $("#startQuickPick").onclick=()=>playCatalogSummary(x);
}
async function playCatalogSummary(x){
  const summary=CURATED_SUMMARIES[x.title];
  if(!summary)return toast("Bu eser için özet henüz hazırlanmadı.");
  closeOverlays();
  stopPlayback(false);
  currentBook={
    id:"summary-"+x.id,title:x.title+" — Özet",author:x.author,genre:x.category,
    coverClass:x.cover,source:"tts",isSummary:true,chapters:[{id:"summary",title:"Kitabın 15 Dakikalık Özeti",progress:0,segmentIndex:0}],
    currentChapter:0,bookmarks:[],history:[],favorite:false,lastPlayedAt:Date.now()
  };
  currentChapter=0;
  $("#playerBigCover").className=`player-big-cover ${x.cover}`;
  $("#playerBigCover").innerHTML=`<div class="cover-title">${esc(x.title)}<br><small>ÖZET</small></div>`;
  $("#playerTitle").textContent=x.title+" — 15 dk Özet";
  $("#playerAuthor").textContent=x.author;
  $("#playerMode").textContent="KİTUP TARZI ÖZET · TÜRKÇE TTS";
  $("#playerChapter").textContent="Ana fikirler · olay örgüsü · neden önemli?";
  $("#favBtn").textContent="♡ Favori";
  tts.segments=segmentText(summary);tts.segmentIndex=0;tts.playing=false;
  renderChapters();updateTtsProgress();updateMini();showPlayer();startTts();
}
function activateQuickTimer(){
  clearTimeout(quickSessionTimer);
  quickSessionActive=true;
  toast("15 dakikalık hızlı dinleme başladı.");
  quickSessionTimer=setTimeout(()=>{
    quickSessionActive=false;
    if(currentBook?.source==="tts")pauseTts();else audio.pause();
    toast("15 dakika tamamlandı. İstersen tam kitaba devam edebilirsin.");
  },15*60*1000);
}
function showStats(){
  const completed=books.filter(b=>bookProgress(b)>=98).length;
  const started=books.filter(b=>bookProgress(b)>0).length;
  const favorites=books.filter(b=>b.favorite).length;
  const bookmarks=books.reduce((s,b)=>s+(b.bookmarks?.length||0),0);
  const history=books.flatMap(b=>b.history||[]);
  const days=new Set(history.map(h=>new Date(h.at).toISOString().slice(0,10))).size;
  $("#listModalTitle").textContent="Dinleme İstatistiklerim";
  $("#listModalBody").innerHTML=`<div class="stats-grid">
    <div class="stat-box"><strong>${books.length}</strong><span>Kütüphanedeki kitap</span></div>
    <div class="stat-box"><strong>${started}</strong><span>Başlanan kitap</span></div>
    <div class="stat-box"><strong>${completed}</strong><span>Tamamlanan kitap</span></div>
    <div class="stat-box"><strong>${favorites}</strong><span>Favori</span></div>
    <div class="stat-box"><strong>${bookmarks}</strong><span>Yer imi</span></div>
    <div class="stat-box"><strong>${days}</strong><span>Dinleme yapılan gün</span></div>
  </div>`;
  openModal("#listModal");
}

init().catch(e=>{console.error(e);alert("Uygulama başlatılamadı: "+e.message)})
