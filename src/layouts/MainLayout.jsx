// src/layouts/MainLayout.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const mainContentClasses = `
    flex-1 p-8 bg-gray-50 overflow-auto
    transition-all duration-300 ease-in-out
    ${isSidebarOpen ? 'ml-0' : 'ml-[-20rem]'}
  `;

  // Buton işlevselliği için useEffect kullanıyoruz (bu buton MainLayout'taki butondur)
  useEffect(() => {
    const contactUsButton = document.getElementById('contactUsButton');
    if (contactUsButton) {
      contactUsButton.addEventListener('click', function() {
        // Bu butonun /support linkine gitmesi isteniyordu
        window.location.href = '/support'; // useNavigate yerine doğrudan window.location.href kullanıldı
      });
    }

    // Component unmount edildiğinde veya effect tekrar çalıştığında event listener'ı temizle
    return () => {
      if (contactUsButton) {
        contactUsButton.removeEventListener('click', () => {});
      }
    };
  }, []); // Boş dependency array sayesinde bu effect sadece component mount edildiğinde bir kez çalışır

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header />

      <div className="flex flex-1 relative"> {/* Bu div ana içerik ve sidebar'ı sarmalar */}
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <main className={mainContentClasses}>
          {children}
        </main>

        {/* "Daha fazla yardıma mı ihtiyacınız var?" Bölümü - Ekranın sağında sabit duracak şekilde konumlandırıldı */}
        <div className="
            fixed top-24 right-4 z-50  /* Ekranın sağ üstünde sabit kalır, z-index ile öne gelir */
            w-64                       /* Genişlik ayarı */
            bg-white                   /* Arka plan beyaz */
            p-6                        /* İç boşluk */
            rounded-lg                 /* Köşeler yuvarlak */
            shadow-lg                  /* Gölge efekti */
            text-center                /* İçerik ortalanır */
            flex flex-col items-center justify-center /* İçerik dikeyde ortalanır */
        ">
            <h2 className="text-xl font-semibold text-[#121517] mb-4 leading-tight">Daha fazla yardıma mı ihtiyacınız var?</h2>
            <button
                id="contactUsButton"
                className="
                    bg-[#121517] text-white
                    py-3 px-6
                    rounded-lg
                    text-base font-medium
                    cursor-pointer
                    border-none
                    transition-colors duration-300
                    hover:bg-gray-700
                    w-full                   /* Butonun div'ini doldurmasını sağlar */
                "
            >
                Bize Ulaşın
            </button>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;