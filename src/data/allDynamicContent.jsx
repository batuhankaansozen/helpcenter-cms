// src/data/allDynamicContent.jsx

// TÜM DİNAMİK İÇERİKLERİ BURADA TEK BİR DİZİDE TOPLUYORUZ
const allDynamicContent = [
  // POPÜLER KONULAR
  {
    id: 'account-settings',
    category: 'popular-topics',
    title: 'Hesap ve Roller', // Bu başlık, sidebar'da ve sayfanın genel başlığında kullanılacak
    description: 'Kullanıcı hesaplarını yönetme, rol atama, izinleri yetkilendirme ve erişim haklarını düzenleme hakkında bilgi edinin.',
    content: [
      // Ana bilgilendirme metni
      { type: 'text', value: 'Bu sayfa, Tech Solutions platformundaki hesap ayarlarınız, kullanıcı rolleri ve kapsamlı kullanıcı yönetimi süreçleri hakkında derinlemesine bilgiler sunmaktadır. Profilinizi nasıl kişiselleştireceğinizi, bildirim tercihlerinizi nasıl yöneteceğinizi, hesap güvenliğinizi en üst düzeye çıkarmak için hangi adımları atmanız gerektiğini, yeni kullanıcıları sisteme nasıl ekleyeceğinizi ve mevcut kullanıcıların yetkilerini nasıl düzenleyeceğinizi bu bölümde detaylıca bulabilirsiniz. Amacımız, size platform üzerinde tam kontrol sağlayarak, iş akışlarınızı daha verimli hale getirmenize yardımcı olmaktır. Her bir bölüm, adım adım rehberlik ve sıkça sorulan sorularla zenginleştirilmiştir.' },

      // Profil Ayarları başlığı ve içeriği
      { type: 'heading', level: 2, value: 'Profil Ayarları' },
      { type: 'text', value: 'Kişisel profil bilgilerinizi güncellemek, platformdaki deneyiminizi kişiselleştirmek ve iletişim tercihlerinizi düzenlemek için bu bölümü kullanabilirsiniz. Profilinize erişmek için ana menüden "Ayarlar" sekmesine gidin ve ardından "Profil Bilgileri" seçeneğine tıklayın. Burada adınız, soyadınız, e-posta adresiniz, telefon numaranız gibi temel bilgileri güncelleyebilir, profil fotoğrafınızı değiştirebilir ve biyografinizi ekleyebilirsiniz. Biyografi alanı, kendinizi kısaca tanıtmak veya profesyonel geçmişinizden bahsetmek için harika bir yerdir. Ayrıca, bildirim ayarlarınızı kişiselleştirerek hangi tür bildirimleri (e-posta, uygulama içi bildirimler, SMS) almak istediğinizi ve bunların sıklığını belirleyebilirsiniz. Kullanıcı adınızı değiştirme veya gizlilik tercihlerinizi detaylı olarak ayarlama gibi gelişmiş seçenekler de mevcuttur. Tüm değişiklikleri yaptıktan sonra sayfanın altındaki "Kaydet" butonuna tıklamayı unutmayın, aksi takdirde yaptığınız düzenlemeler kaydedilmeyecektir.' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Hesap Ayarları Video Rehberi', description: 'Bu video, hesap ayarlarınızı adım adım nasıl yöneteceğinizi gösterir ve sıkça sorulan sorulara yanıt verir. Videoyu izleyerek profilinizi anında güncelleyebilirsiniz.' },
      { type: 'text', value: 'Yukarıdaki video rehberi, profil ayarlarınızı kolayca yapmanız için size görsel bir yol haritası sunacaktır. Her adımı dikkatlice takip ederek profilinizi eksiksiz hale getirebilir ve platformdaki varlığınızı en iyi şekilde temsil edebilirsiniz. Unutmayın, güncel bir profil, diğer kullanıcılar ve yöneticilerle etkileşimde bulunurken size avantaj sağlayacaktır.' },

      // Şifre Değiştirme ve Giriş Bilgileri başlığı ve içeriği
      { type: 'heading', level: 2, value: 'Şifre Değiştirme ve Giriş Bilgileri' },
      { type: 'text', value: 'Hesap güvenliğiniz bizim için en önemli önceliklerden biridir. Bu bölümde, şifrenizi nasıl güvenli bir şekilde değiştirebileceğinizi, iki faktörlü kimlik doğrulama (2FA) ayarlarını nasıl etkinleştireceğinizi ve sık karşılaşılan giriş sorunlarına yönelik çözümleri bulabilirsiniz. Şifrenizi değiştirmek için "Ayarlar" menüsünden "Şifre Değiştir" seçeneğine gidin. Mevcut şifrenizi girdikten sonra yeni şifrenizi belirleyebilir ve tekrar onaylayabilirsiniz. Şifrenizin güçlü olduğundan emin olmak için en az 12 karakterden oluşan, büyük harf, küçük harf, rakam ve özel karakter kombinasyonları (#, $, % vb.) kullanmanız şiddetle önerilir. Ayrıca, hesabınızın güvenliğini artırmak için iki faktörlü kimlik doğrulamayı mutlaka aktif hale getirin; bu, yetkisiz erişimi büyük ölçüde engeller. Giriş yaparken sorun yaşıyorsanız, "Şifremi Unuttum" linkini kullanarak kayıtlı e-posta adresinize gönderilecek yönergeleri takip edebilirsiniz. Güvenli giriş uygulamaları ve hesap güvenliği ipuçları hakkında daha fazla bilgi edinmek için güvenlik kılavuzumuzu inceleyebilirsiniz.' },
      { type: 'image', url: 'https://via.placeholder.com/800x400?text=Guvenli+Sifre+Yenileme', alt: 'Şifre Yenileme Görseli', caption: 'Şifre yenileme ekranı ve güvenli şifre oluşturma ipuçları.' },

      // Yeni Kullanıcı Oluşturma başlığı ve içeriği
      { type: 'heading', level: 2, value: 'Yeni Kullanıcı Oluşturma' },
      { type: 'text', value: 'Ekibinize yeni bir üye katmak veya platforma yeni bir kullanıcı eklemek oldukça basittir ve yalnızca yetkili yöneticiler tarafından yapılabilir. Yönetim panelindeki "Kullanıcılar" veya "Roller ve İzinler" bölümüne giderek bu işlemi gerçekleştirebilirsiniz. "Yeni Kullanıcı Ekle" butonuna tıkladıktan sonra, kullanıcının adını, soyadını, e-posta adresini ve atanacak rolünü (örneğin, Yönetici, Editör, Okuyucu, Katkıda Bulunan vb.) dikkatlice doldurun. Her rolün belirli yetkilere sahip olduğunu ve kullanıcının platformdaki erişimini ve yapabileceği eylemleri doğrudan etkilediğini unutmayın. Gerekli tüm bilgileri girdikten sonra "Kaydet" butonuna tıklayarak işlemi tamamlayın. Yeni kullanıcıya otomatik olarak bir hoş geldiniz e-postası ve geçici giriş bilgileri gönderilecektir. Bu e-posta, kullanıcının hesabını etkinleştirmesi ve ilk kez giriş yapması için gerekli tüm talimatları ve şifre sıfırlama linkini içerecektir. Kullanıcı oluşturma sırasında bir hata oluşursa, sistem size geri bildirimde bulunacaktır.' },

      // Kullanıcıları Yönetme başlığı ve içeriği
      { type: 'heading', level: 2, value: 'Kullanıcıları Yönetme' },
      { type: 'text', value: 'Mevcut kullanıcı hesaplarını düzenlemek, rollerini değiştirmek, yetkilerini ayarlamak veya gerektiğinde hesaplarını askıya almak/silmek için bu bölümü kullanabilirsiniz. "Kullanıcılar" listesine erişerek tüm aktif ve pasif kullanıcıları, son giriş tarihlerini ve mevcut rollerini görüntüleyebilirsiniz. İlgili kullanıcının yanındaki "Düzenle" veya "Ayarlar" simgesine tıklayarak profil bilgilerini güncelleyebilir, farklı bir rol atayabilir veya belirli özelliklere erişim izinlerini değiştirebilirsiniz. Örneğin, bir kullanıcının sadece belirli modüllere erişimi olmasını sağlayabilirsiniz. Kullanıcıların yetkilerini düzenlerken, sistem güvenliğini ve veri bütünlüğünü sağlamak adına dikkatli olmanız ve "en az yetki prensibi"ni uygulamanız önemlidir. Bir kullanıcının hesabını askıya almak veya silmek isterseniz, bu işlemlerin geri döndürülemez olabileceğini göz önünde bulundurarak gerekli onayları almanız ve yedekleme politikalarınızı incelemeniz tavsiye edilir. Kullanıcı etkinliğini izleme ve denetleme kayıtlarına erişim de bu bölümden sağlanabilir, bu sayede kimin ne zaman hangi işlemi yaptığını takip edebilirsiniz.' },

      // Sıkça Sorulan Sorular (Mevcut başlık)
      { type: 'heading', level: 3, value: 'Sıkça Sorulan Sorular' },
      { type: 'text', value: 'Hesap güvenliği, parola sıfırlama, bildirim tercihleri ve kullanıcı yönetimi hakkında sıkça sorulan sorulara buradan ulaşabilirsiniz. Daha fazla bilgi için destek ekibimizle iletişime geçmekten çekinmeyin. Ek olarak, sıkça sorulan sorular bölümümüzde, hesap silme, e-posta değişikliği ve rol izinleriyle ilgili detaylı açıklamalar da bulunmaktadır.' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
        <path d="M168,160a40,40,0,1,0-40,40A40,40,0,0,0,168,160ZM128,192a32,32,0,1,1,32-32A32,32,0,0,1,128,192ZM240,128c0-34.78-21.71-67.43-57.54-82.75a8,8,0,0,0-5.83-.55L145.42,50.7c-2.36,1.43-3.67,4-3.41,6.67a144.25,144.25,0,0,1,0,32c.11,1.13.25,2.26.4,3.39l-4.57,11.43a8,8,0,0,0-.74,7.39l18.59,48.33a8,8,0,0,0,7.39,4.86,7.9,7.9,0,0,0,2.5-.47c2.61-.92,3.95-3.66,3.06-6.39L184.28,128h23.72A80.51,80.51,0,0,0,240,128ZM110.58,11.55a8,8,0,0,0-10.76,3.77L80.46,55.25C44.64,70.57,24,103.22,24,128a80.51,80.51,0,0,0,16,48H52.28L33.41,192.83c-.89,2.73.45,5.47,3.06,6.39a7.9,7.9,0,0,0,2.5.47,8,8,0,0,0,7.39-4.86l18.59-48.33a8,8,0,0,0-.74-7.39l-4.57-11.43c.15-1.13.29-2.26.4-3.39a144.25,144.25,0,0,1,0-32c.26-2.67-1.05-5.24-3.41-6.67l-20.25-12.4a8,8,0,0,0-5.83.55C32,60.57,24,93.22,24,128c0,5.65-.17,11.23-.5,16.79l-12.44,4.42a8,8,0,0,0-4.5,14.67l34.82,12.39a160,160,0,0,1,161.24,0l34.82-12.39a8,8,0,0,0-4.5-14.67L231.5,144.79C231.83,139.23,232,133.65,232,128c0-5.65-.17-11.23-.5-16.79l12.44-4.42a8,8,0,0,0,4.5-14.67l-34.82-12.39A160,160,0,0,1,110.58,11.55Z"></path>
      </svg>
    ),
  },
  // Kalan allDynamicContent öğeleri aynı kalacak
  {
    id: 'login-password',
    category: 'popular-topics',
    title: 'Giriş ve Şifre',
    description: 'Şifre sıfırlama, kullanıcı adı sorunları, güvenli giriş adımları ve şifre değiştirme işlemleri hakkında bilgi alın.',
    content: [], // İçerik artık yukarıdaki account-settings içinde olduğu için burayı boş bıraktık.
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
        <path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
      </svg>
    ),
  },
  {
    id: 'privacy-security-settings',
    category: 'popular-topics',
    title: 'Gizlilik ve Güvenlik Ayarları',
    description: 'Hesabınızın ve içeriğinizin gizliliğini, veri korumasını ve ek güvenlik önlemlerini nasıl yöneteceğinizi öğrenin.',
    content: [
      { type: 'text', value: 'Hesabınızın gizlilik ayarlarını yapılandırma, istenmeyen kişileri engelleme ve şüpheli etkinliklere karşı korunma yolları hakkında bilgi edinin. Veri gizliliği ve güvenlik politikalarımız hakkında detaylı bilgiye bu bölümden ulaşabilirsiniz. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında şeffaf bilgiler sunuyoruz. Ayrıca, siber güvenlik tehditlerine karşı alabileceğiniz ek önlemler ve güvenli internet kullanımı ipuçları da bu bölümde yer almaktadır.' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
        <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
      </svg>
    ),
  },
  {
    id: 'newshq-usage',
    category: 'popular-topics',
    title: 'NewsHQ Kullanımı',
    description: 'Canlı haber kaynaklarından içerik çekme, haber düzenleme, yayınlama ve içerik yönetimi süreçleri hakkında bilgi alın.',
    content: [
      { type: 'heading', level: 2, value: 'NewsHQ\'ya Hoş Geldiniz!' },
      { type: 'text', value: 'NewsHQ, sizin için en güncel haberleri toplamanızı, düzenlemenizi ve yayınlamanızı sağlayan güçlü bir platformdur. Başlamak için aşağıdaki videoyu izleyebilirsiniz.' },
      { type: 'video', url: 'https://www.youtube.com/embed/your_newshq_intro_video_id', title: 'NewsHQ Genel Tanıtım' }, // Placeholder YouTube video ID'sini kendi videonuzla değiştirin
      { type: 'heading', level: 3, value: 'Haber İçeriği Oluşturma İpuçları' },
      { type: 'text', value: 'Haber içeriklerinizi daha etkili ve çekici hale getirmek için bazı önemli ipuçları. Detaylı bilgi için bu kısa rehber videoyu kaçırmayın!' },
      { type: 'video', url: 'https://www.youtube.com/embed/your_content_creation_tips_video_id', title: 'Profesyonel İçerik Oluşturma İpuçları' }, // Placeholder YouTube video ID'sini kendi videonuzla değiştirin
      { type: 'text', value: 'Herhangi bir sorunuz olursa destek ekibimizle iletişime geçmekten çekinmeyin. Haber toplama ve yayınlama süreçlerinde size yardımcı olmaktan memnuniyet duyarız.' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
        <path d="M224,192H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V184A8,8,0,0,1,224,192ZM40,88V176H216V88ZM148,80a12,12,0,1,0-12-12A12,12,0,0,0,148,80Zm-40,0a12,12,0,1,0-12-12A12,12,0,0,0,108,80Z"></path>
      </svg>
    ),
  },
  {
    id: 'assethq-media-management',
    category: 'popular-topics',
    title: 'AssetHQ ile Medya Yönetimi',
    description: 'Fotoğraf ve video yükleme, düzenleme, etiketleme ve yönetme hakkında bilgi edinin. Dosya formatları ve boyutlandırma ipuçları da dahildir.',
    content: [
      { type: 'text', value: 'AssetHQ, tüm medya varlıklarınızı merkezi bir konumdan yönetmenizi sağlayan kapsamlı bir araçtır. Bu bölümde, fotoğraf ve videolarınızı nasıl yükleyeceğinizi, bunları nasıl düzenleyeceğinizi, kolayca bulunabilir hale getirmek için etiketlemeyi ve AssetHQ kütüphanenizde nasıl organize edeceğinizi öğreneceksiniz. Desteklenen dosya formatları (JPEG, PNG, GIF, MP4, MOV vb.) ve optimum performans için önerilen boyutlandırma ipuçları hakkında detaylı bilgiler bulabilirsiniz. Medya varlıklarınızın güvenli bir şekilde saklandığından ve kolayca erişilebilir olduğundan emin olabilirsiniz.' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
        <path d="M256,192a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V200H200a8,8,0,0,1,0-16h16V168a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,192Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,221.19,138.09,208,108,208s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,204.44,183.18,217.07,198.13,234.85ZM108,192a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,192Z"></path>
      </svg>
    ),
  },
  {
    id: 'vpn-connection-access',
    category: 'popular-topics',
    title: 'VPN Bağlantısı ve Erişimi',
    description: 'Şirket ağına güvenli bir VPN bağlantısı kurma, erişim sorunları ve uzaktan çalışma ayarlarıyla ilgili destek alın.',
    content: [
      { type: 'text', value: 'Şirket ağına güvenli bir VPN (Sanal Özel Ağ) bağlantısı kurmak, uzaktan çalışırken veri güvenliğinizi sağlamanın anahtarıdır. Bu bölüm, VPN istemcinizi nasıl kuracağınızı, bağlantı sorunlarını nasıl gidereceğinizi ve optimum performans için uzaktan çalışma ayarlarınızı nasıl yapılandıracağınızı detaylı olarak açıklamaktadır. Sıkça karşılaşılan bağlantı hataları için çözüm önerileri ve VPN üzerinden erişebileceğiniz kaynaklar hakkında bilgiler de burada mevcuttur. VPN bağlantınızın kesintisiz ve güvenli olduğundan emin olmak için bu rehberi takip edin.' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
        <path d="M208,40H48A16,16,0,0,0,32,56V200a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40ZM48,56H208V200H48ZM140,96H76a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0,32H76a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0,32H76a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm52.49-53.51a8,8,0,0,1-11.31,0L160,96l21.17,21.17a8,8,0,0,1,0,11.31,8,8,0,0,1-11.31,0L148.69,107.31,128,128l21.17,21.17a8,8,0,0,1,0,11.31,8,8,0,0,1-11.31,0L136,152l-21.17,21.17a8,8,0,0,1-11.31-11.31L124.69,140,104,120l21.17-21.17a8,8,0,0,1,11.31,0Z"></path>
      </svg>
    ),
  },

  {
    id: 'cms-user-guide',
    category: 'popular-topics',
    title: 'CMS Kullanım Kılavuzu',
    description: 'CMS sisteminin genel özelliklerini, temel kullanımını ve ana modüllerini adım adım öğrenmek için kapsamlı bir rehberdir.',
    content: [
      { type: 'text', value: 'İçerik Yönetim Sistemi (CMS) kullanım kılavuzumuza hoş geldiniz! Bu rehber, CMS sistemimizin temel özelliklerini, nasıl navigasyon yapacağınızı ve ana modüllerini adım adım anlamanıza yardımcı olacaktır. İçerik oluşturma, düzenleme, yayınlama, menü yönetimi, kullanıcı rolleri ve izinleri gibi kritik konulara değineceğiz. Bu kılavuz, hem yeni başlayanlar hem de deneyimli kullanıcılar için CMS\'in tüm potansiyelini keşfetmeleri amacıyla tasarlanmıştır. Sistemden en iyi şekilde yararlanmak için her bölümü dikkatlice incelemeniz önerilir.' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,181.19,138.09,168,108,168s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM108,152a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,152Z"></path>
      </svg>
    ),
  },

  {
    id: 'mobile-app-support',
    category: 'popular-topics',
    title: 'Mobil Uygulama Desteği',
    description: 'Mobil cihazlarınızdan CMS\'e erişim, mobil uygulama kullanımı ve karşılaşılan sorunlar için yardım alın.',
    content: [
      { type: 'text', value: 'Tech Solutions mobil uygulaması, hareket halindeyken bile işlerinizi kolayca yönetmenizi sağlar. Bu bölüm, mobil cihazlarınızdan CMS\'e nasıl erişeceğinizi, uygulamanın temel özelliklerini nasıl kullanacağınızı ve sıkça karşılaşılan sorunları nasıl gidereceğinizi açıklar. Uygulama indirme, kurulum, bildirim ayarları, offline mod kullanımı ve senkronizasyon sorunları gibi konularda detaylı bilgi edinebilirsiniz. Herhangi bir teknik sorun yaşamanız durumunda hızlı çözümler için mobil uygulama sorun giderme rehberimizi inceleyebilirsiniz.' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
      </svg>
    ),
  },

  {
    id: 'system-requirements-compatibility',
    category: 'popular-topics',
    title: 'Sistem Gereksinimleri ve Uyumluluk',
    description: 'CMS sistemini kullanmak için gereken sistem gereksinimleri ve farklı cihazlar ve tarayıcılarla uyumluluğu hakkında bilgi edinin.',
    content: [
      { type: 'text', value: 'CMS sistemimizden en iyi verimi alabilmeniz için belirli sistem gereksinimleri ve uyumluluk standartları bulunmaktadır. Bu bölüm, platformumuzu sorunsuz bir şekilde çalıştırmak için gereken minimum donanım (işlemci, RAM, depolama) ve yazılım (işletim sistemi, tarayıcı sürümü) özelliklerini detaylandırmaktadır. Ayrıca, farklı cihazlar (masaüstü, dizüstü, tablet, mobil) ve tarayıcılarla (Chrome, Firefox, Safari, Edge) uyumluluk bilgileri de burada yer almaktadır. Sistem performansınızı optimize etmek ve olası uyumluluk sorunlarını önlemek için bu gereksinimleri gözden geçirmeniz önemlidir. Herhangi bir uyumsuzluk durumunda ne yapmanız gerektiği de açıklanmıştır.' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
      </svg>
    ),
  },

  // EXPLORING THE PLATFORM
  {
    id: 'navigating-the-platform',
    category: 'exploring-platform',
    title: 'Platformda Gezinme',
    description: 'Tech Solutions\'ın ana özelliklerini ve işlevlerini öğrenin.',
    content: [
      { type: 'text', value: 'Tech Solutions platformunda kolayca gezinmek ve tüm özelliklerinden faydalanmak için bu rehberi kullanın. Ana menü, panolar (dashboardlar) ve farklı modüllerin nasıl kullanıldığı hakkında detaylı bilgi edinin. Kullanıcı arayüzünün (UI) genel yapısını anlayarak istediğiniz özelliklere hızlıca ulaşabileceksiniz. Kısayollar, favori işaretleme seçenekleri ve kişiselleştirilebilir panolar hakkında da ipuçları bulacaksınız. Platformu keşfederken en verimli yolu bulmanıza yardımcı olacağız.' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z"></path>
      </svg>
    ),
  },
  {
    id: 'using-the-search-feature',
    category: 'exploring-platform',
    title: 'Arama Özelliğini Kullanma',
    description: 'Arama özelliğimizi kullanarak belirli bilgileri veya kaynakları nasıl bulacağınızı keşfedin.',
    content: [
      { type: 'text', value: 'Platformumuzdaki güçlü arama özelliğini kullanarak aradığınız bilgiye veya kaynağa anında ulaşın. Bu bölümde, etkili anahtar kelime kullanımı, gelişmiş arama filtreleri (tarihe göre, kategoriye göre, yazara göre vb.) ve arama sonuçlarını nasıl daraltabileceğiniz hakkında ipuçları bulacaksınız. Aradığınız içeriği hızlıca bulmak için arama kutucuğunu nasıl kullanacağınızı ve genel arama performansınızı nasıl artıracağınızı öğrenin. Arama geçmişinizi yönetme ve sık kullanılan aramaları kaydetme seçenekleri de mevcuttur.' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
      </svg>
    ),
  },

  // BASIC ASSISTANCE
  {
    id: 'frequently-asked-questions',
    category: 'basic-assistance',
    title: 'Sıkça Sorulan Sorular',
    description: 'Tech Solutions kullanımı hakkında sıkça sorulan soruların yanıtlarını bulun.',
    content: [
      { type: 'text', value: 'Bu bölüm, Tech Solutions platformunu kullanırken aklınıza takılabilecek en yaygın sorulara hızlı ve net yanıtlar sunmaktadır. Hesap yönetimi, teknik sorunlar, faturalandırma, gizlilik, özellik kullanımı ve daha fazlası hakkında sıkça sorulan soruları burada bulabilirsiniz. Cevabını bulamadığınız bir soru olursa, destek ekibimizle iletişime geçmekten çekinmeyin. Amacımız, size sorunsuz bir deneyim sunmaktır.' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
      </svg>
    ),
  },
  {
    id: 'contact-support',
    category: 'basic-assistance',
    title: 'Destekle İletişime Geçin',
    description: 'Kişiselleştirilmiş yardım için destek ekibimizle iletişime geçin.',
    content: [
      { type: 'text', value: 'Tech Solutions ile ilgili herhangi bir konuda kişiselleştirilmiş yardıma ihtiyacınız olursa, destek ekibimizle kolayca iletişime geçebilirsiniz. Bu bölüm, destek kanallarımızı (canlı sohbet, e-posta, telefon), çalışma saatlerimizi ve beklenen yanıt sürelerini detaylandırmaktadır. Ayrıca, sorununuzu en hızlı şekilde çözebilmemiz için bir destek talebi oluştururken hangi bilgileri sağlamanız gerektiği hakkında ipuçları da bulacaksınız. İster teknik bir sorunla karşılaşın, ister bir özellik hakkında sorunuz olsun, ekibimiz size yardımcı olmaktan memnuniyet duyacaktır.' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"></path>
      </svg>
    ),
  },

  // Yeni Eklenen Sayfalar (HEADER linkleri için)
  {
    id: 'about',
    category: 'header-links',
    title: 'Hakkımızda',
    description: 'Tech Solutions hakkında daha fazla bilgi edinin.',
    content: [
      { type: 'text', value: 'Tech Solutions, yenilikçi teknoloji çözümleri sunan lider bir platformdur. Amacımız, kullanıcılarımıza en iyi deneyimi sunmak ve dijital dünyada başarılı olmalarına yardımcı olmaktır. Ekibimiz, alanında uzman ve tutkulu profesyonellerden oluşmaktadır. Misyonumuz, teknolojiye erişimi kolaylaştırmak ve herkes için faydalı araçlar geliştirmektir.' },
    ],
    icon: null,
  },
  {
    id: 'products',
    category: 'header-links',
    title: 'Ürünlerimiz',
    description: 'Sunduğumuz çeşitli ürün ve hizmetleri keşfedin.',
    content: [
      { type: 'text', value: 'Tech Solutions olarak geniş bir ürün yelpazesi sunmaktayız. Yazılım çözümlerimiz, donanım entegrasyonlarımız ve danışmanlık hizmetlerimizle işletmelerin ve bireylerin ihtiyaçlarına yönelik kapsamlı çözümler sunuyoruz. Her bir ürünümüz, kullanıcı dostu arayüzleri ve güçlü performanslarıyla öne çıkmaktadır.' },
    ],
    icon: null,
  },
  {
    id: 'community',
    category: 'header-links',
    title: 'Topluluğumuz',
    description: 'Tech Solutions topluluğuna katılın ve diğer kullanıcılarla etkileşim kurun.',
    content: [
      { type: 'text', value: 'Tech Solutions topluluğu, teknoloji meraklılarını bir araya getiren canlı ve dinamik bir platformdur. Forumlarımızda sorular sorabilir, deneyimlerinizi paylaşabilir ve en son teknoloji trendleri hakkında bilgi edinebilirsiniz. Etkinliklerimize katılarak ağınızı genişletebilir ve sektör liderleriyle tanışabilirsiniz.' },
    ],
    icon: null,
  },
  {
    id: 'support',
    category: 'header-links',
    title: 'Destek',
    description: 'Yardıma mı ihtiyacınız var? Destek ekibimize ulaşın.',
    content: [
      { type: 'text', value: 'Destek sayfamızda sıkça sorulan sorulara yanıt bulabilir, teknik sorunlar için çözüm önerilerine ulaşabilir veya doğrudan destek ekibimizle iletişime geçebilirsiniz. Uzman ekibimiz, her türlü sorunuzda size yardımcı olmaktan memnuniyet duyacaktır. Canlı sohbet, e-posta ve telefon gibi çeşitli destek kanallarımız mevcuttur.' },
    ],
    icon: null,
  },
];

export { allDynamicContent };