// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
    const trtLogoUrl = "https://trt.global/_next/static/media/header-logo.80e7e742.svg";

    return (
        <footer className="w-full bg-white py-5 shadow-md mt-auto">
            {/* Bu div, footer içeriğini belirli bir maksimum genişlikle sınırlar ve ortalar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
                <div className="flex justify-start items-center"> {/* Logoyu bu ortalanmış konteyner içinde sola hizala */}
                    <img 
                        src={trtLogoUrl} 
                        alt="TRT Global Logo" 
                        className="max-w-[150px] h-auto" 
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;