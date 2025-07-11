// src/pages/Home.jsx
import React from 'react';
import { allDynamicContent } from '../data/contentData'; // contentData'yı import ediyoruz
import { Link } from 'react-router-dom'; // Link'i import ediyoruz

const Home = () => {
  // Popüler Konular'ı filtrele
  const popularTopics = allDynamicContent.filter(item => item.category === 'popular-topics');
  // Aşağıdaki filtrelemeler artık kullanılmayacak, bu yüzden onları da kaldırabiliriz.
  // const accountSetupContent = allDynamicContent.filter(item => item.category === 'account-setup').slice(0, 2);
  // const exploringPlatformContent = allDynamicContent.filter(item => item.category === 'exploring-platform').slice(0, 2);
  // const basicAssistanceContent = allDynamicContent.filter(item => item.category === 'basic-assistance').slice(0, 2);


  return (
    <div className="flex-1 p-8"> {/* Bu div artık sadece Home içeriğini kapsıyor, layoutu değil */}
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#121517] mb-8">
        How can we help you?
      </h1>

      {/* Arama Çubuğu (Placeholder) */}
      <div className="relative mb-12">
        <input
          type="text"
          placeholder="Search help articles..."
          className="w-full p-4 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#007bff] text-lg"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        >
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
        </svg>
      </div>

      {/* Popüler Konular */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#121517] mb-6">Popüler Konular</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTopics.map((item) => (
            <Link key={item.id} to={`/${item.id}`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-start gap-4">
              <div className="size-12 flex items-center justify-center text-blue-600">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#121517] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Ek Kategoriler kısmı tamamen kaldırıldı */}
      {/*
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-bold text-[#121517] mb-6">Hesap Kurulumu</h2>
          <div className="flex flex-col gap-4">
            {accountSetupContent.map((item) => (
              <Link key={item.id} to={`/${item.id}`} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-4">
                <div className="text-blue-600">{item.icon}</div>
                <h3 className="text-base font-medium text-[#121517]">{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#121517] mb-6">Platformu Keşfetme</h2>
          <div className="flex flex-col gap-4">
            {exploringPlatformContent.map((item) => (
              <Link key={item.id} to={`/${item.id}`} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-4">
                <div className="text-blue-600">{item.icon}</div>
                <h3 className="text-base font-medium text-[#121517]">{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#121517] mb-6">Temel Yardım</h2>
          <div className="flex flex-col gap-4">
            {basicAssistanceContent.map((item) => (
              <Link key={item.id} to={`/${item.id}`} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center gap-4">
                <div className="text-blue-600">{item.icon}</div>
                <h3 className="text-base font-medium text-[#121517]">{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
      */}
    </div>
  );
};

export default Home;