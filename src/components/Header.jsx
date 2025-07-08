// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f3f4] px-10 py-3 bg-white">
      <div className="flex items-center gap-8">
        {/* SVG ve "Yardım Merkezi" yazısını Link bileşeni içine aldık */}
        <Link to="/" className="flex items-center gap-4 text-[#121517]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"></path>
          </svg>
          <span className="text-xl font-bold">Yardım Merkezi</span>
        </Link>

        <div className="flex items-center gap-9">
          {/* SADECE "Support" Link'i bırakıldı */}
          <Link to="/support" className="text-[#121517] text-sm font-medium leading-normal">
            Support
          </Link>
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-8"></div>
    </header>
  );
};

export default Header;