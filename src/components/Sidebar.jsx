// src/components/Sidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // NavLink'i ekledim, rota tabanlı aktif durum için

// contentData'dan allDynamicContent ve sidebarMenuConfig'i import edin
import { allDynamicContent, sidebarMenuConfig } from "../data/contentData";

// Heroicons'tan import etmek yerine doğrudan SVG'leri kullanacağız.
// NOT: Tüm ikonları contentData.jsx'e taşımak daha mantıklıdır.
// Ancak buradaki genel ikonları (Chevron gibi) burada tutabiliriz.

const ChevronLeftIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

// SidebarDropdownItem bileşeni
const SidebarDropdownItem = ({
  icon,
  title,
  children,
  isActive,
  onItemClick,
  isSidebarOpen,
}) => {
  const [isOpen, setIsOpen] = useState(isActive || false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (onItemClick) {
      onItemClick(title);
    }
  };

  const itemClasses = `
    flex items-center justify-between
    py-2 px-3 my-1
    rounded-xl
    transition-colors duration-200
    cursor-pointer
    ${isActive ? "bg-[#f1f3f4]" : "hover:bg-gray-200"}
  `;

  return (
    <div className="flex flex-col">
      <div className={itemClasses} onClick={toggleDropdown}>
        <div className="flex items-center gap-3">
          <div className="text-[#121517] flex items-center justify-center w-6 h-6">
            {icon}
          </div>
          {isSidebarOpen && (
            <p className="text-[#121517] text-sm font-medium leading-normal whitespace-nowrap">
              {title}
            </p>
          )}
        </div>
        {isSidebarOpen && (
          <div
            className={`text-gray-500 transition-transform duration-200 ${
              isOpen ? "rotate-180" : "" // Sağ ok için, açıldığında aşağı dönmesi daha mantıklı olabilir
            }`}
          >
            {isOpen ? ChevronLeftIcon : ChevronRightIcon} {/* Açıkken sol, kapalıyken sağ ok */}
          </div>
        )}
      </div>
      {isOpen && isSidebarOpen && <div className="pl-8 py-1">{children}</div>}
    </div>
  );
};

// SidebarSubItem bileşeni (NavLink ile routing için)
const SidebarSubItem = ({ icon, title, to, isSidebarOpen, onClick }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 py-2 px-4 rounded-md transition-colors duration-200
         ${isActive ? "bg-blue-100 text-blue-800" : "hover:bg-gray-200 text-[#121517]"}`
      }
      onClick={onClick} // Mobil görünümde sidebar'ı kapatmak için kullanılabilir
    >
      <div className="flex items-center justify-center w-6 h-6">
        {icon}
      </div>
      {isSidebarOpen && (
        <span className="text-sm font-medium leading-normal whitespace-nowrap">
          {title}
        </span>
      )}
    </NavLink>
  );
};

// Ana Sidebar bileşeni
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Sayfa yüklendiğinde veya rota değiştiğinde aktif öğeyi belirlemek için
  // useEffect veya useParams kullanabilirsiniz. Şimdilik basitleştirilmiş bir örnek.
  // Gerçek bir uygulamada, mevcut URL'ye göre `activeItem`'ı ayarlamanız gerekir.

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`
        flex flex-col h-full bg-white shadow-sm
        transition-all duration-300 ease-in-out
        ${isSidebarOpen ? "w-80 p-4" : "w-20 items-center p-2"}
      `}
      style={{ overflowX: "hidden" }}
    >
      <div className="flex h-full flex-col gap-1 pb-4">
        {sidebarMenuConfig.map((category) => (
          <SidebarDropdownItem
            key={category.title} // Benzersiz bir key olması önemli
            icon={category.icon}
            title={category.title}
            // isActive durumunu, alt öğelerden herhangi biri aktifse true yapmak gerekebilir
            // Bunu NavLink'in `isActive` prop'u ile otomatik yöneteceğiz.
            // Bu yüzden `isActive` prop'unu şimdilik kaldırabiliriz veya daha karmaşık bir mantık ekleyebiliriz.
            // Örneğin: isActive={category.items.some(item => window.location.pathname.includes(item.id))}
            isSidebarOpen={isSidebarOpen}
          >
            {category.items.map((item) => {
              // contentData'dan ilgili öğeyi bul
              const contentDataItem = allDynamicContent.find(
                (c) => c.id === item.id
              );

              // Eğer contentDataItem bulunamazsa ve ikon sidebarMenuConfig'de doğrudan tanımlanmışsa onu kullan
              const itemIcon = contentDataItem?.icon || item.icon; // Eğer contentData'da ikon varsa onu, yoksa sidebarMenuConfig'deki ikonu kullan

              return (
                <SidebarSubItem
                  key={item.id}
                  icon={itemIcon}
                  title={item.title}
                  to={`/help/${item.id}`} // URL yapınıza göre ayarlayın
                  isSidebarOpen={isSidebarOpen}
                  // onClick={() => { /* isteğe bağlı olarak sidebar'ı kapat */ }}
                />
              );
            })}
          </SidebarDropdownItem>
        ))}

        {/* Menüyü Kapat butonu */}
        <div className="mt-auto py-2">
          <button
            onClick={toggleSidebar}
            className={`
              flex items-center gap-3
              py-2 px-3
              rounded-xl
              transition-colors duration-200
              cursor-pointer
              ${isSidebarOpen ? "hover:bg-gray-200" : ""}
              w-full ${isSidebarOpen ? "justify-start" : "justify-center"}
              bg-white
            `}
            aria-label="Toggle Sidebar"
          >
            <div className="text-[#121517]">
              {isSidebarOpen ? ChevronLeftIcon : ChevronRightIcon}
            </div>
            {isSidebarOpen && (
              <span className="text-[#121517] text-sm font-medium leading-normal whitespace-nowrap">
                Menüyü Kapat
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;