// src/data/contentData.jsx

// TÜM DİNAMİK İÇERİKLERİ BURADA TEK BİR DİZİDE TOPLUYORUZ
const allDynamicContent = [
  // POPÜLER KONULAR
  {
    id: 'account-settings',
    category: 'popular-topics',
    title: 'Account Settings & Role Management',
    description: 'Learn about managing user accounts, assigning roles, authorizing permissions, and adjusting access rights.',
    // content artık bir dizi obje, her obje bir içerik bloğunu temsil ediyor
    content: [
      { type: 'text', value: 'Bu sayfa Hesap Ayarları ile ilgili detaylı bilgiler içerir. Profilinizi nasıl güncelleyeceğinizi, bildirimleri nasıl yöneteceğinizi ve güvenlik ayarlarınızı nasıl yapacağınızı buradan öğrenebilirsiniz. Kullanıcı adınızı değiştirme, parola sıfırlama ve gizlilik tercihlerinizi düzenleme gibi konulara derinlemesine değineceğiz.' },
      { type: 'heading', level: 2, value: 'Profil Bilgilerini Güncelleme Rehberi' },
      { type: 'text', value: 'Profil bilgilerinizi güncellemek için aşağıdaki adımları takip edin: Önce Ayarlar menüsüne gidin, sonra Profil Bilgileri sekmesine tıklayın. Gerekli değişiklikleri yapıp kaydet butonuna basın.' },
      { type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Hesap Ayarları Video Rehberi', description: 'Bu video, hesap ayarlarınızı adım adım nasıl yöneteceğinizi gösterir.' }, // YouTube embed linki
      { type: 'text', value: 'Yukarıdaki video size adım adım nasıl ilerleyeceğinizi gösterecektir.' },
      { type: 'heading', level: 3, value: 'Sıkça Sorulan Sorular' },
      { type: 'text', value: 'Hesap güvenliği, parola sıfırlama ve bildirim tercihleri hakkında sıkça sorulan sorulara buradan ulaşabilirsiniz.' },
    ],
    // SVG ikonları hala burada kalabilir çünkü bunlar aslında küçük veri parçacıklarıdır ve doğrudan bir bileşen içinde yorumlanmaz.
    // Ancak dilerseniz bu ikonları da ayrı bir ikon objesi olarak tutabilirsiniz. Şimdilik bu haliyle bırakıyorum.
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
        <path d="M168,160a40,40,0,1,0-40,40A40,40,0,0,0,168,160ZM128,192a32,32,0,1,1,32-32A32,32,0,0,1,128,192ZM240,128c0-34.78-21.71-67.43-57.54-82.75a8,8,0,0,0-5.83-.55L145.42,50.7c-2.36,1.43-3.67,4-3.41,6.67a144.25,144.25,0,0,1,0,32c.11,1.13.25,2.26.4,3.39l-4.57,11.43a8,8,0,0,0-.74,7.39l18.59,48.33a8,8,0,0,0,7.39,4.86,7.9,7.9,0,0,0,2.5-.47c2.61-.92,3.95-3.66,3.06-6.39L184.28,128h23.72A80.51,80.51,0,0,0,240,128ZM110.58,11.55a8,8,0,0,0-10.76,3.77L80.46,55.25C44.64,70.57,24,103.22,24,128a80.51,80.51,0,0,0,16,48H52.28L33.41,192.83c-.89,2.73.45,5.47,3.06,6.39a7.9,7.9,0,0,0,2.5.47,8,8,0,0,0,7.39-4.86l18.59-48.33a8,8,0,0,0-.74-7.39l-4.57-11.43c.15-1.13.29-2.26.4-3.39a144.25,144.25,0,0,1,0-32c.26-2.67-1.05-5.24-3.41-6.67l-20.25-12.4a8,8,0,0,0-5.83.55C32,60.57,24,93.22,24,128c0,5.65-.17,11.23-.5,16.79l-12.44,4.42a8,8,0,0,0-4.5,14.67l34.82,12.39a160,160,0,0,1,161.24,0l34.82-12.39a8,8,0,0,0-4.5-14.67L231.5,144.79C231.83,139.23,232,133.65,232,128c0-5.65-.17-11.23-.5-16.79l12.44-4.42a8,8,0,0,0,4.5-14.67l-34.82-12.39A160,160,0,0,1,110.58,11.55Z"></path>
      </svg>
    ),
  },
  {
    id: 'login-password',
    category: 'popular-topics',
    title: 'Login & Password Management',
    description: 'Get information about password reset, username issues, secure login steps, and password change operations.',
    content: [
      { type: 'text', value: 'Şifrenizi sıfırlama, iki faktörlü kimlik doğrulama ayarları ve sık karşılaşılan giriş sorunlarına çözümler bu bölümde yer alıyor. Güvenli giriş uygulamaları ve hesap güvenliği ipuçları.' },
      { type: 'heading', level: 2, value: 'Şifre Yenileme Adımları' },
      { type: 'text', value: 'Şifrenizi unuttuysanız veya değiştirmek istiyorsanız, "Şifremi Unuttum" linkine tıklayarak e-posta adresinize gönderilecek yönergeleri takip edebilirsiniz.' },
      { type: 'image', url: 'https://via.placeholder.com/600x300?text=Sifre+Yenileme+Gorseli', alt: 'Şifre Yenileme Görseli', caption: 'Şifre yenileme ekranı örneği.' } // Örnek resim
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
        <path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
      </svg>
    ),
  },
  {
    id: 'privacy-security-settings',
    category: 'popular-topics',
    title: 'Privacy & Security Settings',
    description: 'Learn how to manage the privacy of your account and content, data protection, and additional security measures.',
    content: [
      { type: 'text', value: 'Hesabınızın gizlilik ayarlarını yapılandırma, istenmeyen kişileri engelleme ve şüpheli etkinliklere karşı korunma yolları hakkında bilgi edinin. Veri gizliliği ve güvenlik politikalarımız hakkında detaylı bilgi.' },
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
    title: 'Using NewsHQ',
    description: 'Get information about pulling content from live news sources, editing news, publishing, and content management processes.',
    content: [
      { type: 'heading', level: 2, value: 'Marketplace\'e Hoş Geldiniz!' },
      { type: 'text', value: 'Marketplace, istediğiniz ürünleri bulabileceğiniz veya kendi eşyalarınızı kolayca satabileceğiniz bir platformdur. Başlamak için aşağıdaki videoyu izleyebilirsiniz.' },
      { type: 'video', url: 'https://drive.google.com/file/d/13K4IWW9pBaOl5V6LKhJLgQxn5hNWa-qy/preview', title: 'Marketplace Genel Tanıtım' }, // Google Drive video URL'si
      { type: 'heading', level: 3, value: 'Ürün Satışı İçin İpuçları' },
      { type: 'text', value: 'Ürünlerinizi daha hızlı satmak ve daha fazla müşteriye ulaşmak için bazı önemli ipuçları. Detaylı bilgi için bu kısa rehber videoyu kaçırmayın!' },
      { type: 'video', url: 'https://www.youtube.com/embed/another-youtube-video-id', title: 'Profesyonel Satış İpuçları' }, // İkinci bir YouTube video URL'si
      { type: 'text', value: 'Herhangi bir sorunuz olursa destek ekibimizle iletişime geçmekten çekinmeyin.' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256">
        <path d="M224,192H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V184A8,8,0,0,1,224,192ZM40,88V176H216V88ZM120,224H80a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm72,0H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16ZM148,80a12,12,0,1,0-12-12A12,12,0,0,0,148,80Zm-40,0a12,12,0,1,0-12-12A12,12,0,0,0,108,80Z"></path>
      </svg>
    ),
  },
  {
    id: 'assethq-media-management',
    category: 'popular-topics',
    title: 'AssetHQ for Media Management',
    description: 'Learn about uploading photos and videos, editing, tagging, and managing. Tips on file formats and sizing are also included.',
    content: [
      { type: 'text', value: 'İlgi alanlarınıza göre gruplara katılma, yeni gruplar oluşturma ve grup ayarlarını yönetme rehberi. Grup içindeki gönderiler, etkinlikler ve bildirimler.' },
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
    title: 'VPN Connection & Access',
    description: 'Get support regarding establishing a secure VPN connection to the company network, access issues, and remote work settings.',
    content: [
      { type: 'text', value: 'Markalar, topluluklar veya kişisel kullanımlar için Sayfa oluşturma ve Sayfa yönetimi adımları. Sayfa istatistiklerini takip etme ve gönderi planlama.' },
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
    title: 'CMS User Guide',
    description: 'This is a comprehensive guide to learn the general features of the CMS system, its basic usage, and main modules step-by-step.',
    content: [
      { type: 'text', value: 'Tech Solutions hesabınızı oluşturmak için adım adım rehber. Kayıt süreci, e-posta doğrulama ve ilk giriş adımları.' },
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
    title: 'Mobile App Support',
    description: 'Get help for accessing CMS from your mobile devices, mobile app usage, and encountered issues.',
    content: [
      { type: 'text', value: 'Profilinizi kişiselleştirme, profil resmi ekleme, biyografi yazma ve diğer kişisel bilgilerinizi düzenleme yönergeleri. Profil görünürlüğü ayarları.' },
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
    title: 'System Requirements & Compatibility',
    description: 'Learn about the system requirements for using the CMS and its compatibility with different devices and browsers.',
    content: [
      { type: 'text', value: 'Profilinizi kişiselleştirme, profil resmi ekleme, biyografi yazma ve diğer kişisel bilgilerinizi düzenleme yönergeleri. Profil görünürlüğü ayarları.' },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
      </svg>
    ),
  },

  // ACCOUNT SETUP

  // EXPLORING THE PLATFORM
  {
    id: 'navigating-the-platform',
    category: 'exploring-platform',
    title: 'Navigating the Platform',
    description: 'Get familiar with the main features and functionalities of Tech Solutions.',
    content: [
      { type: 'text', value: 'Platformun temel özelliklerini ve işlevlerini öğrenin. Ana menü, panolar ve araç çubuklarının kullanımı hakkında rehber.' },
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
    title: 'Using the Search Feature',
    description: 'Discover how to use our search feature to find specific information or resources.',
    content: [
      { type: 'text', value: 'Arama özelliğimizi kullanarak belirli bilgileri veya kaynakları nasıl bulacağınızı öğrenin. Gelişmiş arama filtreleri ve anahtar kelime ipuçları.' },
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
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about using Tech Solutions.',
    content: [
      { type: 'text', value: 'Tech Solutions kullanımıyla ilgili sıkça sorulan soruların yanıtlarını bulun. En popüler sorular ve hızlı çözümler.' },
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
    title: 'Contact Support',
    description: 'Contact our support team for personalized assistance.',
    content: [
      { type: 'text', value: 'Kişiselleştirilmiş yardım için destek ekibimizle iletişime geçin. Destek kanalları, çalışma saatleri ve beklenen yanıt süreleri.' },
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