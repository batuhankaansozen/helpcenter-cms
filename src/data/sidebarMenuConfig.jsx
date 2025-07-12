// src/data/sidebarMenuConfig.jsx

// YENİ: Sidebar menü yapısını tanımlayan bir obje
const sidebarMenuConfig = [
  {
    title: "Hesap ve Roller",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    items: [
      // Anchor linkleri, ContentDisplay'deki başlık ID'leri ile eşleşmeli
      { id: "account-settings", title: "Profil Ayarları", anchor: "#profil-ayarlari" },
      { id: "account-settings", title: "Şifre Değiştirme", anchor: "#sifre-degistirme-ve-giris-bilgileri" },
      { id: "account-settings", title: "Yeni Kullanıcı Oluşturma", anchor: "#yeni-kullanici-olusturma" },
      { id: "account-settings", title: "Kullanıcıları Yönetme", anchor: "#kullanicilari-yonetme" },
    ],
  },
  {
    title: "Giriş ve Şifre",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 12 21.75c-2.305 0-4.47-.612-6.47-1.687Z" />
      </svg>
    ),
    items: [
      { id: "login-password", title: "Müşteri Hesapları" },
    ],
  },
  {
    title: "Gizlilik ve Güvenlik",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15.75M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15.75" />
      </svg>
    ),
    items: [
      { id: "privacy-security-settings", title: "Genel Bakış" },
      { id: "upload-assets", title: "Varlıkları Yükle" }, // Varsayımsal id
      { id: "manage-assets", title: "Varlıkları Yönet" }, // Varsayımsal id
    ],
  },
  {
    title: "NewsHQ",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5v10.5m-7.5-6h15M12 7.5L8.25 3.75M12 7.5l3.75-3.75M12 7.5V1.5" />
      </svg>
    ),
    items: [
      { id: "newshq-usage", title: "Son Haberler" },
      { id: "news-categories", title: "Haber Kategorileri" }, // Varsayımsal id
      { id: "authors", title: "Yazarlar" },                 // Varsayımsal id
    ],
  },
  {
    title: "AssetHQ",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>
    ),
    items: [
      { id: "assethq-media-management", title: "Medya Yönetimi" },
      { id: "create-alert", title: "Uyarı Oluştur" }, // Varsayımsal id
      { id: "manage-alerts", title: "Uyarıları Yönet" }, // Varsayımsal id
    ],
  },
  {
    title: "VPN",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-6h5.25M7.5 7.5V4.5m0 3A.75.75 0 0 1 8.25 6h.75m-2.25 3H5.25c-.621 0-1.125-.504-1.125-1.125V4.875c0-.621.504-1.125 1.125-1.125h3.879m-2.25 3h.008v.008H7.5Z" />
      </svg>
    ),
    items: [
      { id: "vpn-connection-access", title: "Bağlantı ve Erişim" },
      { id: "translation-requests", title: "Çeviri Talepleri" }, // Varsayımsal id
      { id: "language-management", title: "Dil Yönetimi" }, // Varsayımsal id
    ],
  },
  {
    title: "CMS Kullanım Kılavuzu",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.669a8.902 8.902 0 0 1 1.705 3.334m-1.705-3.334c.125-.09.25-.177.375-.264m-1.33 3.603C17.653 1.39 12.983.5 8.25 3.526m7.453 10.334c-.16.32-.34.628-.54.922m-7.652-1.928a8.902 8.902 0 0 0 1.705 3.334M9.176 16.177c-.16.32-.34.628-.54.922m12.38-6.143c-.636 1.838-2.158 3.36-3.996 4.004m-10.127-6.07a4.486 4.486 0 0 1-1.872.632M6 12.553c-1.18-.707-2.112-1.81-2.732-3.14M4 10.74V8.75c0-.621.504-1.125 1.125-1.125h.209c.316 0 .623.075.897.214M4.75 19.125h.008v.008H4.75V19.125ZM6 12.553a11.2 11.2 0 0 0-1.077 1.618C3.557 15.36 3 17.001 3 18.75c0 1.154.223 2.247.622 3.25M19.125 4.75h.008v.008H19.125V4.75ZM12 12.75a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
      </svg>
    ),
    items: [
      { id: "cms-user-guide", title: "Genel Özellikler" },
      { id: "create-playlist", title: "Oynatma Listesi Oluştur" }, // Varsayımsal id
      { id: "edit-playlists", title: "Oynatma Listelerini Düzenle" },   // Varsayımsal id
    ],
  },

  {
    title: "Mobil Uygulama Desteği",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.669a8.902 8.902 0 0 1 1.705 3.334m-1.705-3.334c.125-.09.25-.177.375-.264m-1.33 3.603C17.653 1.39 12.983.5 8.25 3.526m7.453 10.334c-.16.32-.34.628-.54.922m-7.652-1.928a8.902 8.902 0 0 0 1.705 3.334M9.176 16.177c-.16.32-.34.628-.54.922m12.38-6.143c-.636 1.838-2.158 3.36-3.996 4.004m-10.127-6.07a4.486 4.486 0 0 1-1.872.632M6 12.553c-1.18-.707-2.112-1.81-2.732-3.14M4 10.74V8.75c0-.621.504-1.125 1.125-1.125h.209c.316 0 .623.075.897.214M4.75 19.125h.008v.008H4.75V19.125ZM6 12.553a11.2 11.2 0 0 0-1.077 1.618C3.557 15.36 3 17.001 3 18.75c0 1.154.223 2.247.622 3.25M19.125 4.75h.008v.008H19.125V4.75ZM12 12.75a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
      </svg>
    ),
    items: [
      { id: "mobile-app-support", title: "Mobil Kullanım" },
      { id: "create-playlist", title: "Oynatma Listesi Oluştur" }, // Varsayımsal id
      { id: "edit-playlists", title: "Oynatma Listelerini Düzenle" },   // Varsayımsal id
    ],
  },
  {
    title: "Sistem Gereksinimleri",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m-3-3v3m-1.5-13.5H20.25c.414 0 .75.336.75.75v11.25c0 .414-.336.75-.75.75H3.75a.75.75 0 0 1-.75-.75V6.75c0-.414.336-.75.75-.75Z" />
      </svg>
    ),
    items: [
      { id: "system-requirements-compatibility", title: "Uyumluluk" },
      { id: "new-episodes", title: "Yeni Bölümler" },      // Varsayımsal id
      { id: "series-management", title: "Seri Yönetimi" }, // Varsayımsal id
    ],
  },
];

export { sidebarMenuConfig };