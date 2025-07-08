import React, { useState } from 'react';

// SidebarDropdownItem bileşeni (Drop-down menü başlıkları için)
const SidebarDropdownItem = ({ icon, title, children, isActive, onItemClick, isSidebarOpen }) => {
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
    ${isActive ? 'bg-[#f1f3f4]' : 'hover:bg-gray-200'}
  `;

  return (
    <div className="flex flex-col">
      <div className={itemClasses} onClick={toggleDropdown}>
        <div className="flex items-center gap-3">
          <div className="text-[#121517]">{icon}</div>
          {isSidebarOpen && (
            <p className="text-[#121517] text-sm font-medium leading-normal whitespace-nowrap">
              {title}
            </p>
          )}
        </div>
        {isSidebarOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
            className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,45.66,90.34L128,172.68l82.34-82.34A8,8,0,0,1,213.66,101.66Z"></path>
          </svg>
        )}
      </div>
      {isOpen && isSidebarOpen && (
        <div className="pl-8 py-1">
          {children}
        </div>
      )}
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
    ${isActive ? 'bg-[#f1f3f4]' : 'hover:bg-gray-200'}
  `;

  return (
    <a href="#" className={itemClasses} onClick={() => onItemClick(title)}>
      <div className="text-[#121517] flex items-center justify-center" style={{ width: '24px', height: '24px' }}>
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
      <div className="text-[#121517] flex items-center justify-center" style={{ width: '24px', height: '24px' }}>
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
  const [activeItem, setActiveItem] = useState('Giriş İşlemleri'); // Varsayılan aktif öğe güncellendi
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
        ${isSidebarOpen ? 'w-80 p-4' : 'w-20 items-center p-2'}
      `}
      style={{ overflowX: 'hidden' }}
    >
      <div className="flex h-full flex-col gap-1 pb-4">
        {/* Giriş İşlemleri */}
        <SidebarDropdownItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm0,144a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A64,64,0,1,1,160,160Zm32-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
            </svg>
          }
          title="Giriş İşlemleri"
          isActive={activeItem === 'Giriş İşlemleri'}
          onItemClick={handleItemClick}
          isSidebarOpen={isSidebarOpen}
        >
          <SidebarSubItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,128a48,48,0,1,1,48-48A48,48,0,0,1,128,128Zm0-80a32,32,0,1,0,32,32A32,32,0,0,0,128,48Zm0,144c-6.84,0-64,13.75-64,40v8a8,8,0,0,0,16,0v-8c0-15.16,40.16-24,48-24s48,8.84,48,24v8a8,8,0,0,0,16,0v-8C192,185.75,134.84,192,128,192Z"></path>
              </svg>
            }
            title="Profil Ayarları"
            isSidebarOpen={isSidebarOpen}
          />

          <SidebarSubItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,128a48,48,0,1,1,48-48A48,48,0,0,1,128,128Zm0-80a32,32,0,1,0,32,32A32,32,0,0,0,128,48Zm0,144c-6.84,0-64,13.75-64,40v8a8,8,0,0,0,16,0v-8c0-15.16,40.16-24,48-24s48,8.84,48,24v8a8,8,0,0,0,16,0v-8C192,185.75,134.84,192,128,192Z"></path>
              </svg>
            }
            title="Profil Ayarları"
            isSidebarOpen={isSidebarOpen}
          />
          
          {/* Giriş İşlemleri altında artık alt öğe yok */}
        </SidebarDropdownItem>

        {/* Hesap Yönetilmesi (Yeni dropdown sekmesi) */}
        <SidebarDropdownItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,181.19,138.09,168,108,168s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM108,152a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,152Z"></path>
            </svg>
          }
          title="Hesap Yönetilmesi"
          isActive={activeItem === 'Hesap Yönetilmesi'}
          onItemClick={handleItemClick}
          isSidebarOpen={isSidebarOpen}
        >
          <SidebarSubItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,128a48,48,0,1,1,48-48A48,48,0,0,1,128,128Zm0-80a32,32,0,1,0,32,32A32,32,0,0,0,128,48Zm0,144c-6.84,0-64,13.75-64,40v8a8,8,0,0,0,16,0v-8c0-15.16,40.16-24,48-24s48,8.84,48,24v8a8,8,0,0,0,16,0v-8C192,185.75,134.84,192,128,192Z"></path>
              </svg>
            }
            title="Profil Ayarları"
            isSidebarOpen={isSidebarOpen}
          />
        </SidebarDropdownItem>

        {/* AssetHQ */}
        <SidebarDropdownItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-8,144H40V64H216ZM96,96a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16H88A8,8,0,0,1,96,96Zm48,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h24A8,8,0,0,1,144,96Zm48,0a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h24A8,8,0,0,1,192,96Zm-96,40a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16H88A8,8,0,0,1,96,136Zm48,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h24A8,8,0,0,1,144,136Zm48,0a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h24A8,8,0,0,1,192,136Z"></path>
            </svg>
          }
          title="AssetHQ"
          isActive={activeItem === 'AssetHQ'}
          onItemClick={handleItemClick}
          isSidebarOpen={isSidebarOpen}
        >
          <SidebarSubItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm10.34-118.34a8,8,0,0,0-11.32,0L96,140.68l-15.66-15.66a8,8,0,0,0-11.32,11.32l21.33,21.34a8,8,0,0,0,11.32,0L148.34,106.34A8,8,0,0,0,138.34,97.66Z"></path>
              </svg>
            }
            title="Overview"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            }
            title="Upload Assets"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z"></path>
              </svg>
            }
            title="Manage Assets"
            isSidebarOpen={isSidebarOpen}
          />
        </SidebarDropdownItem>

        {/* NewsHQ */}
        <SidebarDropdownItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,48H32A16,16,0,0,0,16,64V200a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-8,144H40V64H216ZM96,96a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16H88A8,8,0,0,1,96,96Zm48,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h24A8,8,0,0,1,144,96Zm48,0a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h24A8,8,0,0,1,192,96Zm-96,40a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16H88A8,8,0,0,1,96,136Zm48,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h24A8,8,0,0,1,144,136Zm48,0a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h24A8,8,0,0,1,192,136Z"></path>
            </svg>
          }
          title="NewsHQ"
          isActive={activeItem === 'NewsHQ'}
          onItemClick={handleItemClick}
          isSidebarOpen={isSidebarOpen}
        >
          <SidebarSubItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a96,96,0,0,1-192,0c0-1.89.08-3.75.19-5.61l43.7-21.85a8,8,0,0,1,8.08,1.83,80.12,80.12,0,0,0,80.08,0,8,8,0,0,1,8.08-1.83l43.7,21.85C223.92,124.25,224,126.11,224,128ZM128,24a8,8,0,0,0-8,8V64a8,8,0,0,0,16,0V32A8,8,0,0,0,128,24ZM208,80a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V88A8,8,0,0,0,208,80ZM48,80a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V88A8,8,0,0,0,48,80ZM128,200a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V208A8,8,0,0,0,128,200Z"></path>
              </svg>
            }
            title="Latest News"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4.7,175.3a8,8,0,0,1-1.6-11l16.14-35.88a8,8,0,0,1,11-1.6l35.88,16.14a8,8,0,0,1-1.6,11l-16.14,35.88A8,8,0,0,1,123.3,199.3ZM189.47,159.25l-22.19-9.94L183,115.15l22.19,9.94Zm-46.7-10.23L153.27,139a8,8,0,0,1-1.6-11l16.14-35.88a8,8,0,0,1,11-1.6l35.88,16.14a8,8,0,0,1-1.6,11l-16.14,35.88A8,8,0,0,1,179.3,149.02ZM59.28,136.73,81.47,146.67,72.53,168.86,50.34,158.92Zm9.94-22.19,22.19,9.94L73,153.27a8,8,0,0,1-11,1.6L26.13,138.73a8,8,0,0,1,1.6-11l16.14-35.88a8,8,0,0,1,11,1.6Z"></path>
              </svg>
            }
            title="News Categories"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,181.19,138.09,168,108,168s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM108,152a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,152Z"></path>
              </svg>
            }
            title="Authors"
            isSidebarOpen={isSidebarOpen}
          />
        </SidebarDropdownItem>

        {/* Breaking News */}
        <SidebarDropdownItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,48H32A16,16,0,0,0,16,64V200a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-8,144H40V64H216ZM184,80a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16H176A8,8,0,0,1,184,80ZM184,120a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16H176A8,8,0,0,1,184,120Zm-40,40a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h64A8,8,0,0,1,144,160Z"></path>
            </svg>
          }
          title="Breaking News"
          isActive={activeItem === 'Breaking News'}
          onItemClick={handleItemClick}
          isSidebarOpen={isSidebarOpen}
        >
          <SidebarSubItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm10.34-118.34a8,8,0,0,0-11.32,0L96,140.68l-15.66-15.66a8,8,0,0,0-11.32,11.32l21.33,21.34a8,8,0,0,0,11.32,0L148.34,106.34A8,8,0,0,0,138.34,97.66Z"></path>
              </svg>
            }
            title="Create Alert"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            }
            title="Manage Alerts"
            isSidebarOpen={isSidebarOpen}
          />
        </SidebarDropdownItem>

        {/* Translated Content */}
        <SidebarDropdownItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4.7,175.3a8,8,0,0,1-1.6-11l16.14-35.88a8,8,0,0,1,11-1.6l35.88,16.14a8,8,0,0,1-1.6,11l-16.14,35.88A8,8,0,0,1,123.3,199.3ZM189.47,159.25l-22.19-9.94L183,115.15l22.19,9.94Zm-46.7-10.23L153.27,139a8,8,0,0,1-1.6-11l16.14-35.88a8,8,0,0,1,11-1.6l35.88,16.14a8,8,0,0,1-1.6,11l-16.14,35.88A8,8,0,0,1,179.3,149.02ZM59.28,136.73,81.47,146.67,72.53,168.86,50.34,158.92Zm9.94-22.19,22.19,9.94L73,153.27a8,8,0,0,1-11,1.6L26.13,138.73a8,8,0,0,1,1.6-11l16.14-35.88a8,8,0,0,1,11,1.6Z"></path>
            </svg>
          }
          title="Translated Content"
          isActive={activeItem === 'Translated Content'}
          onItemClick={handleItemClick}
          isSidebarOpen={isSidebarOpen}
        >
          <SidebarSubItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm10.34-118.34a8,8,0,0,0-11.32,0L96,140.68l-15.66-15.66a8,8,0,0,0-11.32,11.32l21.33,21.34a8,8,0,0,0,11.32,0L148.34,106.34A8,8,0,0,0,138.34,97.66Z"></path>
              </svg>
            }
            title="Translation Requests"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            }
            title="Language Management"
            isSidebarOpen={isSidebarOpen}
          />
        </SidebarDropdownItem>

        {/* Radio Playlists */}
        <SidebarDropdownItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-8,144H40V64H216ZM80,96a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H72A8,8,0,0,1,80,96Zm96,0a8,8,0,0,1-8,8H144a8,8,0,0,1,0-16h24A8,8,0,0,1,176,96Zm-96,48a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H72A8,8,0,0,1,80,144Zm96,0a8,8,0,0,1-8,8H144a8,8,0,0,1,0-16h24A8,8,0,0,1,176,144Z"></path>
            </svg>
          }
          title="Radio Playlists"
          isActive={activeItem === 'Radio Playlists'}
          onItemClick={handleItemClick}
          isSidebarOpen={isSidebarOpen}
        >
          <SidebarSubItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm10.34-118.34a8,8,0,0,0-11.32,0L96,140.68l-15.66-15.66a8,8,0,0,0-11.32,11.32l21.33,21.34a8,8,0,0,0,11.32,0L148.34,106.34A8,8,0,0,0,138.34,97.66Z"></path>
              </svg>
            }
            title="Create Playlist"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            }
            title="Edit Playlists"
            isSidebarOpen={isSidebarOpen}
          />
        </SidebarDropdownItem>

        {/* TV Shows */}
        <SidebarDropdownItem
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-8,144H40V64H216ZM96,80v64a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm64,0v64a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Z"></path>
            </svg>
          }
          title="TV Shows"
          isActive={activeItem === 'TV Shows'}
          onItemClick={handleItemClick}
          isSidebarOpen={isSidebarOpen}
        >
          <SidebarSubItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm10.34-118.34a8,8,0,0,0-11.32,0L96,140.68l-15.66-15.66a8,8,0,0,0-11.32,11.32l21.33,21.34a8,8,0,0,0,11.32,0L148.34,106.34A8,8,0,0,0,138.34,97.66Z"></path>
              </svg>
            }
            title="New Episodes"
            isSidebarOpen={isSidebarOpen}
          />
          <SidebarSubItem
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            }
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
              ${isSidebarOpen ? 'hover:bg-gray-200' : ''}
              w-full ${isSidebarOpen ? 'justify-start' : 'justify-center'}
              bg-white
            `}
            aria-label="Toggle Sidebar"
          >
            <div className="text-[#121517]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM32,64H216a8,8,0,0,0,0-16H32a8,8,0,0,0,0,16Zm184,80H32a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
              </svg>
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