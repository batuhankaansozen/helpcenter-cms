// src/components/Sidebar.jsx
import React, { useState } from "react";

// Heroicons'tan import etmek yerine doğrudan SVG'leri kullanacağız.
// Ancak daha düzenli olması için ikonları ayrı bir yerden tanımlayabiliriz.
// Örnek bazı Heroicons SVG'leri (Outline versiyonlar):
const HomeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.954-8.955c.44-.439 1.154-.439 1.594 0L21.75 12m-18.75 6.75v-2.25c0-1.036.84-1.875 1.875-1.875h1.875M4.5 18.75V10.5m11.25 7.5v-6m-9 6H3.375c-.621 0-1.125-.504-1.125-1.125V11.25c0-2.584 1.807-4.724 4.294-5.176 2.863-.464 5.667-.626 8.452-.626h.085c2.986 0 5.847.157 8.709.626 2.487.452 4.294 2.592 4.294 5.176v5.625c0 .621-.504 1.125-1.125 1.125H16.5m-11.25 0h11.25"
    />
  </svg>
);

const UserCircleIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

const KeyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.25L4.5 19.5l-.621-.621a15.64 15.64 0 0 1 4.166-2.442V17.25a2.25 2.25 0 0 0 2.25 2.25h2.25m-10.5-6H2.25V7.5L9 2.25 12.75 5.25m-8.25 6v7.5h7.5"
    />
  </svg>
);

const PlusCircleIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const UserPlusIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 12 21.75c-2.305 0-4.47-.612-6.47-1.687Z"
    />
  </svg>
);

const RectangleStackIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15.75M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15.75"
    />
  </svg>
);

const Squares2X2Icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const NewspaperIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 7.5v10.5m-7.5-6h15M12 7.5L8.25 3.75M12 7.5l3.75-3.75M12 7.5V1.5"
    />
  </svg>
);

const MagnifyingGlassIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

const TagIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .59.237 1.156.659 1.575l6.802 6.802c.708.708 1.849.708 2.557 0l6.802-6.802c.423-.423.66-1.033.66-1.655V5.25A2.25 2.25 0 0 0 18.75 3H14.432M10.5 8.25h.008v.008H10.5V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    />
  </svg>
);

const UsersIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.75c-.276 0-.543-.055-.798-.164A2.175 2.175 0 0 0 15 17.25c0-1.03.71-1.92 1.732-2.316 1.022-.396 2.165-.333 3.114.124.95.457 1.458 1.099 1.458 1.742 0 1.656-5.462 2.1-7.5 2.1-.375 0-.75-.027-1.125-.08L12 18.75c-3.35 0-6-.782-6-2.1 0-1.656 5.462-2.1 7.5-2.1.375 0 .75.027 1.125.08A2.175 2.175 0 0 0 18 17.25c0 1.03-.71 1.92-1.732 2.316C15.246 19.98 14.103 20.043 13.153 19.586a1.125 1.125 0 0 1-.603.042Zm-2.75-8.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM7.75 10.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
    />
  </svg>
);

const ExclamationCircleIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    />
  </svg>
);

const BellAlertIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.143 17.143A6.002 6.002 0 0 1 12 15.75c2.109 0 4.062.969 5.097 2.533.16.255.333.50.521.736m-9.143-1.077a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM12 18.75c-7.242 0-12 5.143-12 7.17 0 .684.276 1.34.764 1.828l1.542 1.543a.6.6 0 0 0 .971-.246C3.795 24.545 7.07 22.5 12 22.5c4.93 0 8.205 2.046 8.723 2.76.07.1.14.195.205.286a.6.6 0 0 0 .97-.246l1.543-1.543c.488-.488.764-1.144.764-1.828 0-2.027-4.758-7.17-12-7.17Z"
    />
  </svg>
);

const LanguageIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m10.5 21 5.25-11.25L21 21m-9-6h5.25M7.5 7.5V4.5m0 3A.75.75 0 0 1 8.25 6h.75m-2.25 3H5.25c-.621 0-1.125-.504-1.125-1.125V4.875c0-.621.504-1.125 1.125-1.125h3.879m-2.25 3h.008v.008H7.5Z"
    />
  </svg>
);

const RadioIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.114 5.669a8.902 8.902 0 0 1 1.705 3.334m-1.705-3.334c.125-.09.25-.177.375-.264m-1.33 3.603C17.653 1.39 12.983.5 8.25 3.526m7.453 10.334c-.16.32-.34.628-.54.922m-7.652-1.928a8.902 8.902 0 0 0 1.705 3.334M9.176 16.177c-.16.32-.34.628-.54.922m12.38-6.143c-.636 1.838-2.158 3.36-3.996 4.004m-10.127-6.07a4.486 4.486 0 0 1-1.872.632M6 12.553c-1.18-.707-2.112-1.81-2.732-3.14M4 10.74V8.75c0-.621.504-1.125 1.125-1.125h.209c.316 0 .623.075.897.214M4.75 19.125h.008v.008H4.75V19.125ZM6 12.553a11.2 11.2 0 0 0-1.077 1.618C3.557 15.36 3 17.001 3 18.75c0 1.154.223 2.247.622 3.25M19.125 4.75h.008v.008H19.125V4.75ZM12 12.75a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
    />
  </svg>
);

const TvIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 20.25h12m-7.5-3v3m-3-3v3m-1.5-13.5H20.25c.414 0 .75.336.75.75v11.25c0 .414-.336.75-.75.75H3.75a.75.75 0 0 1-.75-.75V6.75c0-.414.336-.75.75-.75Z"
    />
  </svg>
);

const PlayCircleIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.97 12.97a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0L8.22 14.03a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0l3.75 3.75Z"
    />
  </svg>
);

const ChevronLeftIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
)

const ChevronRightIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
)

// SidebarDropdownItem bileşeni (Drop-down menü başlıkları için)
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
          {/* ICON DÜZELTME: İkonu bir div içine alıp boyutlandırma sınıfları ekliyoruz */}
          <div className="text-[#121517] flex items-center justify-center w-6 h-6">
            {" "}
            {/* w-6 ve h-6 = 24px */}
            {icon}
          </div>
          {isSidebarOpen && (
            <p className="text-[#121517] text-sm font-medium leading-normal whitespace-nowrap">
              {title}
            </p>
          )}
        </div>
        {isSidebarOpen && (
          // Heroicons'tan ChevronDownIcon veya ChevronRightIcon kullanabiliriz
          <div
            className={`text-gray-500 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
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

// SidebarItem bileşeni (tekil menü öğeleri için - dropdown olmayanlar)
const SidebarItem = ({ icon, title, isActive, onItemClick, isSidebarOpen }) => {
  const itemClasses = `
    flex items-center
    py-2 px-3 my-1
    rounded-xl
    transition-colors duration-200
    cursor-pointer
    ${isActive ? "bg-[#f1f3f4]" : "hover:bg-gray-200"}
  `;

  return (
    <a href="#" className={itemClasses} onClick={() => onItemClick(title)}>
      {/* ICON DÜZELTME: inline style yerine Tailwind sınıfları kullanıyoruz */}
      <div className="text-[#121517] flex items-center justify-center w-6 h-6">
        {" "}
        {/* w-6 ve h-6 = 24px */}
        {icon}
      </div>
      {isSidebarOpen && (
        <span className="text-[#121517] text-sm font-medium leading-normal whitespace-nowrap ml-3">
          {title}
        </span>
      )}
    </a>
  );
};

// SidebarSubItem bileşeni (Dropdown alt öğeleri için)
const SidebarSubItem = ({ icon, title, isSidebarOpen }) => {
  return (
    <a
      href="#"
      className="flex items-center gap-3 py-2 px-4 rounded-md transition-colors duration-200 hover:bg-gray-200"
    >
      {/* ICON DÜZELTME: inline style yerine Tailwind sınıfları kullanıyoruz */}
      <div className="text-[#121517] flex items-center justify-center w-6 h-6">
        {" "}
        {/* w-6 ve h-6 = 24px */}
        {icon}
      </div>
      {isSidebarOpen && (
        <span className="text-[#121517] text-sm font-medium leading-normal whitespace-nowrap">
          {title}
        </span>
      )}
    </a>
  );
};

// Ana Sidebar bileşeni
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Giriş İşlemleri");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleItemClick = (title) => {
    setActiveItem(title);
  };

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
        {/* Giriş İşlemleri */}
        <SidebarDropdownItem
          icon={UserCircleIcon} // Heroicon kullanıldı
          title="Giriş İşlemleri"
          isActive={activeItem === "Giriş İşlemleri"}
          onItemClick={handleItemClick}
          isSidebarOpen={isSidebarOpen}
        >
          <SidebarSubItem
            icon={UserCircleIcon} // Heroicon kullanıldı
            title="Profil Ayarları"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={KeyIcon} // Heroicon kullanıldı
            title="Şifre Değiştir"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={PlusCircleIcon} // Heroicon kullanıldı
            title="Yeni Kullanıcı"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={UsersIcon} // Heroicon kullanıldı
            title="Kullanıcıları Yönet"
            isSidebarOpen={isSidebarOpen}
          />
        </SidebarDropdownItem>

        {/* Hesap Yönetilmesi (Yeni dropdown sekmesi) */}
        <SidebarDropdownItem
          icon={UserPlusIcon} // Heroicon kullanıldı
          title="Hesap Yönetilmesi"
          isActive={activeItem === "Hesap Yönetilmesi"}
          onItemClick={handleItemClick}
          isSidebarOpen={isSidebarOpen}
        >
          <SidebarSubItem
            icon={UserCircleIcon} // Heroicon kullanıldı
            title="Müşteri Hesapları"
            isSidebarOpen={isSidebarOpen}
          />
          {/* Diğer alt öğeler buraya eklenebilir */}
        </SidebarDropdownItem>

        {/* AssetHQ */}
        <SidebarDropdownItem
          icon={RectangleStackIcon} // Heroicon kullanıldı
          title="AssetHQ"
          isActive={activeItem === "AssetHQ"}
          onItemClick={handleItemClick}
          isSidebarOpen={isSidebarOpen}
        >
          <SidebarSubItem
            icon={HomeIcon} // Heroicon kullanıldı
            title="Overview"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={MagnifyingGlassIcon} // Heroicon kullanıldı
            title="Upload Assets"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={TagIcon} // Heroicon kullanıldı
            title="Manage Assets"
            isSidebarOpen={isSidebarOpen}
          />
        </SidebarDropdownItem>

        {/* NewsHQ */}
        <SidebarDropdownItem
          icon={NewspaperIcon} // Heroicon kullanıldı
          title="NewsHQ"
          isActive={activeItem === "NewsHQ"}
          onItemClick={handleItemClick}
          isSidebarOpen={isSidebarOpen}
        >
          <SidebarSubItem
            icon={Squares2X2Icon} // Heroicon kullanıldı
            title="Latest News"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={TagIcon} // Heroicon kullanıldı
            title="News Categories"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={UsersIcon} // Heroicon kullanıldı
            title="Authors"
            isSidebarOpen={isSidebarOpen}
          />
        </SidebarDropdownItem>

        {/* Breaking News */}
        <SidebarDropdownItem
          icon={ExclamationCircleIcon} // Heroicon kullanıldı
          title="Breaking News"
          isActive={activeItem === "Breaking News"}
          onItemClick={handleItemClick}
          isSidebarOpen={isSidebarOpen}
        >
          <SidebarSubItem
            icon={BellAlertIcon} // Heroicon kullanıldı
            title="Create Alert"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={MagnifyingGlassIcon} // Heroicon kullanıldı
            title="Manage Alerts"
            isSidebarOpen={isSidebarOpen}
          />
        </SidebarDropdownItem>

        {/* Translated Content */}
        <SidebarDropdownItem
          icon={LanguageIcon} // Heroicon kullanıldı
          title="Translated Content"
          isActive={activeItem === "Translated Content"}
          onItemClick={handleItemClick}
          isSidebarOpen={isSidebarOpen}
        >
          <SidebarSubItem
            icon={HomeIcon} // Heroicon kullanıldı (Örnek)
            title="Translation Requests"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={LanguageIcon} // Heroicon kullanıldı
            title="Language Management"
            isSidebarOpen={isSidebarOpen}
          />
        </SidebarDropdownItem>

        {/* Radio Playlists */}
        <SidebarDropdownItem
          icon={RadioIcon} // Heroicon kullanıldı
          title="Radio Playlists"
          isActive={activeItem === "Radio Playlists"}
          onItemClick={handleItemClick}
          isSidebarOpen={isSidebarOpen}
        >
          <SidebarSubItem
            icon={PlusCircleIcon} // Heroicon kullanıldı
            title="Create Playlist"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={RectangleStackIcon} // Heroicon kullanıldı (Örnek)
            title="Edit Playlists"
            isSidebarOpen={isSidebarOpen}
          />
        </SidebarDropdownItem>

        {/* TV Shows */}
        <SidebarDropdownItem
          icon={TvIcon} // Heroicon kullanıldı
          title="TV Shows"
          isActive={activeItem === "TV Shows"}
          onItemClick={handleItemClick}
          isSidebarOpen={isSidebarOpen}
        >
          <SidebarSubItem
            icon={PlayCircleIcon} // Heroicon kullanıldı
            title="New Episodes"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={RectangleStackIcon} // Heroicon kullanıldı (Örnek)
            title="Series Management"
            isSidebarOpen={isSidebarOpen}
          />
        </SidebarDropdownItem>

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
              {isSidebarOpen ? ChevronLeftIcon : ChevronRightIcon}{" "}
              {/* Sidebar açıkken sol ok, kapalıyken sağ ok */}
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