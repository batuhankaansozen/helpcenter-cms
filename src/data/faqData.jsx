// src/data/faqData.jsx

// Sıkça Sorulan Sorulara ait tüm içerik bu dosyada tutulacak.
const faqData = {
  id: 'frequently-asked-questions',
  category: 'basic-assistance',
  title: 'Sıkça Sorulan Sorular',
  description: 'Tech Solutions kullanımı hakkında sıkça sorulan soruların yanıtlarını bulun.',
  content: [
    {
      question: 'Hesap güvenliği ve parola sıfırlama nasıl yapılır?',
      slug: 'hesap-guvenligi-ve-parola-sifirlama-nasil-yapilir', // Bu slug'ın URL ile aynı olması KRİTİK
      details: [
        { type: 'text', value: 'Hesap güvenliğiniz bizim için en önemli önceliklerden biridir. Parolanızı düzenli olarak değiştirmeniz ve iki faktörlü kimlik doğrulamayı (2FA) etkinleştirmeniz, hesabınızı yetkisiz erişimlere karşı korumanın en etkili yollarıdır.' },
        { type: 'heading', level: 3, value: 'Parola Sıfırlama Adımları' },
        { type: 'text', value: 'Parolanızı unuttuysanız veya değiştirmek istiyorsanız, giriş ekranındaki "Şifremi Unuttum" bağlantısını kullanabilirsiniz. Size e-posta ile bir sıfırlama linki gönderilecektir. Bu linke tıklayarak yeni parolanızı belirleyebilirsiniz.' },
        { type: 'image', url: 'https://via.placeholder.com/800x400/F0F0F0/333333?text=Parola+Sifirlama+Ekrani', alt: 'Parola Sıfırlama Ekranı', caption: 'Parola sıfırlama işlemi için e-posta adresinizi girmeniz yeterlidir.' },
        { type: 'text', value: 'Yeni parolanızı oluştururken, en az 12 karakterden oluşan, büyük harf, küçük harf, rakam ve sembol kombinasyonları içeren güçlü bir parola seçtiğinizden emin olun. Daha önce kullandığınız parolaları tekrar kullanmaktan kaçının.' },
        { type: 'heading', level: 3, value: 'İki Faktörlü Kimlik Doğrulama (2FA)' },
        { type: 'text', value: '2FA, hesabınıza ek bir güvenlik katmanı sağlar. Etkinleştirmek için hesap ayarlarınızdaki "Güvenlik" bölümüne gidin. Burada SMS, kimlik doğrulayıcı uygulama (Google Authenticator gibi) veya güvenlik anahtarı gibi seçeneklerden birini seçerek 2FA\'yı kurabilirsiniz. Her giriş yaptığınızda, parolanızın yanı sıra bu ikinci doğrulama adımını da tamamlamanız gerekecektir.' },
        { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Hesap Güvenliği ve 2FA Rehberi', description: 'Hesap güvenliğinizi artırmak ve 2FA\'yı kurmak için adım adım video rehberi.' },
        { type: 'text', value: 'Hesabınızın güvenliğini düzenli olarak kontrol etmeyi ve şüpheli etkinliklere karşı dikkatli olmayı unutmayın. Herhangi bir şüpheli durumda hemen destek ekibimizle iletişime geçin.' }
      ]
    },
    {
      question: 'Bildirim tercihlerinizi nasıl yönetebilirsiniz?',
      id: 'notification-preferences-management', // Bu id'nin sidebarMenuConfig'deki ile eşleşmesi KRİTİK
      slug: 'bildirim-tercihlerinizi-nasil-yonetebilirsiniz', // Bu slug'ın URL ile aynı olması KRİTİK
      details: [
        { type: 'text', value: 'Platformdaki bildirim tercihlerinizi hesap ayarlarınızdan kolayca yönetebilirsiniz. Hangi tür bildirimleri (e-posta, uygulama içi bildirimler, SMS) almak istediğinizi ve bunların sıklığını belirleyebilirsiniz.' },
        { type: 'heading', level: 3, value: 'Bildirim Ayarlarına Erişim' },
        { type: 'text', value: 'Profil menüsünden "Ayarlar" sekmesine gidin. Ardından "Bildirimler" seçeneğine tıklayarak bildirim ayarları sayfasına ulaşabilirsiniz.' },
        { type: 'image', url: 'https://via.placeholder.com/800x400/F0F0F0/333333?text=Bildirim+Tercihleri+Ekrani', alt: 'Bildirim Tercihleri Ekranı', caption: 'Bildirim tercihlerinizi bu ekrandan kişiselleştirebilirsiniz.' },
        { type: 'text', value: 'Bu sayfada, farklı kategorilerdeki bildirimleri (örneğin, yeni mesajlar, sistem güncellemeleri, etkinlik hatırlatıcıları) açıp kapatabilirsiniz. Ayrıca, bildirimlerin size anında mı yoksa belirli aralıklarla mı gönderileceğini de ayarlayabilirsiniz.' },
        { type: 'text', value: 'Tercihlerinizi kaydettikten sonra, sadece sizin için önemli olan bildirimleri alacak ve gereksiz bildirim kirliliğinden kurtulacaksınız.' }
      ]
    },
    {
      question: 'Yeni kullanıcı oluşturma adımları nelerdir?',
      id: 'new-user-creation-steps', // Bu id'nin sidebarMenuConfig'deki ile eşleşmesi KRİTİK
      slug: 'yeni-kullanici-olusturma-adimlari-nelerdir', // Bu slug'ın URL ile aynı olması KRİTİK
      details: [
        { type: 'text', value: 'Ekibinize yeni bir üye katmak veya platforma yeni bir kullanıcı eklemek oldukça basittir ve yalnızca yetkili yöneticiler tarafından yapılabilir. Aşağıdaki adımları takip ederek yeni bir kullanıcı oluşturabilirsiniz:' },
        { type: 'list', items: [
          'Yönetici panelinize giriş yapın.',
          'Sol menüden "Kullanıcı Yönetimi" veya "Ayarlar" altında "Kullanıcılar" seçeneğini seçin.',
          'Sayfanın sağ üst köşesinde veya alt kısmında bulunan "Yeni Kullanıcı Ekle" butonuna tıklayın.',
          'Açılan formda kullanıcının adını, soyadını, e-posta adresini ve atanacak rolünü (örneğin, Yönetici, Editör, Okuyucu) dikkatlice doldurun.',
          'Her rolün belirli yetkilere sahip olduğunu ve kullanıcının platformdaki erişimini doğrudan etkilediğini unutmayın.',
          'Gerekli tüm bilgileri girdikten sonra "Kaydet" veya "Oluştur" butonuna tıklayarak işlemi tamamlayın.'
        ]},
        { type: 'text', value: 'Yeni kullanıcıya otomatik olarak bir hoş geldiniz e-postası ve geçici giriş bilgileri gönderilecektir. Bu e-posta, kullanıcının hesabını etkinleştirmesi ve ilk kez giriş yapması için gerekli tüm talimatları ve şifre sıfırlama linkini içerecektir. Kullanıcı oluşturma sırasında bir hata oluşursa, sistem size geri bildirimde bulunacaktır.' },
        { type: 'image', url: 'https://via.placeholder.com/800x400/F0F0F0/333333?text=Yeni+Kullanici+Ekleme', alt: 'Yeni Kullanıcı Ekleme Ekranı', caption: 'Yeni kullanıcı ekleme formu ve rol atama seçenekleri.' }
      ]
    },
    {
      question: 'Mobil uygulama sorunları için nereden destek alabilirim?',
      id: 'mobile-app-support', // Bu id'nin sidebarMenuConfig'deki ile eşleşmesi KRİTİK
      slug: 'mobil-uygulama-sorunlari-icin-nereden-destek-alabilirim', // Bu slug'ın URL ile aynı olması KRİTİK
      details: [
        { type: 'text', value: 'Mobil uygulamamızla ilgili herhangi bir sorun yaşıyorsanız, doğru yerdesiniz! Size hızlı ve etkili destek sağlamak için çeşitli kanallarımız mevcuttur.' },
        { type: 'heading', level: 3, value: 'Yaygın Sorunlar ve Çözümleri' },
        { type: 'text', value: 'Uygulama çökmesi, bildirim sorunları, senkronizasyon hataları veya performans düşüşleri gibi yaygın sorunlar için öncelikle mobil destek rehberimize başvurabilirsiniz. Genellikle aşağıdaki adımlar sorunları çözebilir:' },
        { type: 'list', items: [
          'Uygulamayı kapatıp tekrar açın.',
          'Cihazınızı yeniden başlatın.',
          'Uygulama önbelleğini (cache) temizleyin (Cihazınızın Ayarlar > Uygulamalar bölümünden).',
          'Uygulamanın en güncel sürümünü kullandığınızdan emin olun (App Store/Google Play Store üzerinden kontrol edin).',
          'İnternet bağlantınızı kontrol edin.'
        ]},
        { type: 'heading', level: 3, value: 'Destek Ekibi ile İletişim' },
        { type: 'text', value: 'Yukarıdaki adımlar sorununuzu çözmezse, lütfen destek ekibimizle iletişime geçmekten çekinmeyin. Sorununuzu en hızlı şekilde çözebilmemiz için şu bilgileri sağlamanız önemlidir:' },
        { type: 'list', items: [
          'Kullandığınız mobil cihazın modeli ve işletim sistemi sürümü (örn. iPhone 13, iOS 17.5; Samsung Galaxy S24, Android 14).',
          'Uygulamanın sürüm numarası.',
          'Karşılaştığınız sorunun tam açıklaması ve ne zaman başladığı.',
          'Hata mesajının ekran görüntüsü veya videosu (varsa).'
        ]},
        { type: 'text', value: 'Destek talebi oluşturmak için "Bize Ulaşın" sayfamızı ziyaret edebilir veya doğrudan uygulama içindeki "Yardım" bölümünden destek talebi gönderebilirsiniz.' },
        { type: 'image', url: 'https://via.placeholder.com/800x400/F0F0F0/333333?text=Mobil+Uygulama+Destek', alt: 'Mobil Uygulama Destek Ekranı', caption: 'Mobil uygulama sorunları için destek talebi oluşturma.' }
      ]
    },
    {
      question: 'Genel Destek ve İletişim Kanalları',
      id: 'general-support-and-contact-channels', // Bu id'nin sidebarMenuConfig'deki ile eşleşmesi KRİTİK
      slug: 'genel-destek-ve-iletisim-kanallari', // Bu slug'ın URL ile aynı olması KRİTİK
      details: [
        { type: 'text', value: 'Tech Solutions ile ilgili herhangi bir konuda kişiselleştirilmiş yardıma ihtiyacınız olursa, destek ekibimiz size yardımcı olmaktan memnuniyet duyacaktır. Çeşitli iletişim kanallarımız mevcuttur:' },
        { type: 'heading', level: 3, value: 'Canlı Sohbet' },
        { type: 'text', value: 'Web sitemizdeki canlı sohbet butonunu kullanarak anında destek alabilirsiniz. Canlı sohbet ekibimiz hafta içi 09:00 - 18:00 saatleri arasında hizmet vermektedir.' },
        { type: 'heading', level: 3, value: 'E-posta Desteği' },
        { type: 'text', value: 'Sorularınızı veya sorunlarınızı destek@techsolutions.com adresine e-posta ile gönderebilirsiniz. E-postalarınıza genellikle 24 saat içinde yanıt verilmektedir.' },
        { type: 'heading', level: 3, value: 'Telefon Desteği' },
        { type: 'text', value: 'Acil durumlarda veya doğrudan konuşmak isterseniz, +90 (212) 123 45 67 numaralı telefonumuzdan bize ulaşabilirsiniz. Telefon hattımız hafta içi 09:00 - 17:00 saatleri arasında açıktır.' },
        { type: 'heading', level: 3, value: 'Sıkça Sorulan Sorular (FAQ)' },
        { type: 'text', value: 'Çoğu yaygın sorunun yanıtını bu "Sıkça Sorulan Sorular" bölümünde bulabilirsiniz. Destek ekibimizle iletişime geçmeden önce bu bölümü kontrol etmeniz size zaman kazandırabilir.' },
        { type: 'text', value: 'Ek olarak, hesap silme, e-posta değişikliği ve rol izinleriyle ilgili detaylı açıklamalar da ilgili bölümlerde bulunmaktadır. Her türlü geri bildiriminiz için bize ulaşmaktan çekinmeyin.' },
        { type: 'image', url: 'https://via.placeholder.com/800x400/F0F0F0/333333?text=Destek+Kanallari', alt: 'Destek Kanalları Görseli', caption: 'Farklı destek kanallarımız aracılığıyla bize ulaşabilirsiniz.' }
      ]
    }
  ],
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
    </svg>
  ),
};

export { faqData };
