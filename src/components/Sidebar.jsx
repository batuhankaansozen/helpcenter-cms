import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { allDynamicContent } from "../data/allDynamicContent";
import { sidebarMenuConfig } from "../data/sidebarMenuConfig";

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

// Slug oluşturma fonksiyonu

// Sidebar'daki dropdown başlıkları
const SidebarDropdownItem = ({ icon, title, children, onItemClick, isSidebarOpen, categoryIsActive }) => {
  const [isOpen, setIsOpen] = useState(categoryIsActive || false);

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
    ${categoryIsActive ? "bg-[#f1f3f4]" : "hover:bg-gray-200"}
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
          <div className={`text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
            {isOpen ? ChevronLeftIcon : ChevronRightIcon}
          </div>
        )}
      </div>
      {isOpen && isSidebarOpen && <div className="pl-8 py-1">{children}</div>}
    </div>
  );
};

// Sidebar içeriğindeki alt başlıklar
const SidebarSubItem = ({ icon, title, to, isSidebarOpen }) => {
  const location = useLocation();
  const isActive = `${location.pathname}${location.hash}` === to;

  return (
    <NavLink
      to={to}
      className={`
        flex items-center gap-3 py-2 px-4 rounded-md transition-colors duration-200
        ${isActive ? "bg-blue-100 text-blue-800" : "hover:bg-gray-200 text-[#121517]"}
      `}
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

// Ana Sidebar component'i
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

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
        {sidebarMenuConfig.map((category) => {
          const categoryIsActive = category.items.some(item => {
            const itemPath = `/${item.id}${item.anchor || ""}`;
            return `${location.pathname}${location.hash}` === itemPath;
          });

          return (
            <SidebarDropdownItem
              key={category.title}
              icon={category.icon}
              title={category.title}
              isSidebarOpen={isSidebarOpen}
              categoryIsActive={categoryIsActive}
            >
              {category.items.map((item) => {
                const contentDataItem = allDynamicContent.find(c => c.id === item.id);
                const itemIcon = contentDataItem?.icon || item.icon;

                const to = `/${item.id}${item.anchor || ""}`;

                return (
                  <SidebarSubItem
                    key={`${item.id}${item.anchor || ""}`}
                    icon={itemIcon}
                    title={item.title}
                    to={to}
                    isSidebarOpen={isSidebarOpen}
                  />
                );
              })}
            </SidebarDropdownItem>
          );
        })}

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
              <span className="text-sm font-medium leading-normal whitespace-nowrap">
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
