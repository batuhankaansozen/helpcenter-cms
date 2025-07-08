// src/components/MainContent.jsx
import React, { useEffect } from 'react'; // useNavigate kaldırıldı
import { Link } from 'react-router-dom'; // useNavigate kaldırıldı
import TopicCard from './TopicCard';
import { allDynamicContent } from '../data/contentData'; // Verileri buradan import ediyoruz

const MainContent = () => {
  // useNavigate kaldırıldığı için bu satır da kaldırıldı.
  // const navigate = useNavigate();

  // Verileri kategoriye göre filtreleyelim
  const popularTopics = allDynamicContent.filter(item => item.category === 'popular-topics');
  const accountSetupItems = allDynamicContent.filter(item => item.category === 'account-setup');
  const exploringPlatformItems = allDynamicContent.filter(item => item.category === 'exploring-platform');
  const basicAssistanceItems = allDynamicContent.filter(item => item.category === 'basic-assistance');

  // Bu useEffect bloğu ve ilgili buton bu dosyadan kaldırıldı.
  // Çünkü buton artık MainLayout'ta yer alıyor ve işlevselliği orada tanımlanacak.
  // Eğer bu MainContent'e özgü başka bir useEffect yoksa komple kaldırılabilir.
  // Şu anlık sadece boş bırakıyorum, içeriğini temizleyin:
  useEffect(() => {
    // Burada daha önce bulunan buton event listener kodu kaldırıldı
  }, []);

  return (
    <div className="layout-content-container flex flex-col flex-1 p-8 bg-gray-50">

      {/* 1. Getting Started Bölümü */}
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#121517] tracking-light text-[32px] font-bold leading-tight min-w-72">Getting Started</p>
      </div>
      <h3 className="text-[#121517] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Welcome to Tech Solutions</h3>
      <p className="text-[#121517] text-base font-normal leading-normal pb-3 pt-1 px-4">
        Welcome to Tech Solutions! We're thrilled to have you join our community. This section will guide you through the initial steps to get started with our platform.
        Whether you're setting up your account, exploring our features, or need assistance with basic navigation, you'll find the resources you need here. Let's begin your
        journey with Tech Solutions!
      </p>
      <br/>

      {/* 2. Popüler Konular Bölümü */}
      <h2 className="text-xl font-bold text-[#121517] mb-6 px-4">Popüler Konular</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 px-4">
        {popularTopics.map((topic) => (
          <Link to={`/${topic.id}`} key={topic.id}>
            <TopicCard
              icon={topic.icon}
              title={topic.title}
              description={topic.description}
            />
          </Link>
        ))}
      </div>

      {/* "Daha fazla yardıma mı ihtiyacınız var?" Bölümü BURADAN KALDIRILDI. */}
      {/* Bu kısım artık MainLayout.jsx içerisinde yer almaktadır. */}

      <br/> {/* Bu bölümden sonra biraz boşluk bırakmak için */}


      {/* 3. Account Setup Bölümü */}
      <h3 className="text-[#121517] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Account Setup</h3>
      {accountSetupItems.map((item) => (
        <Link to={`/${item.id}`} key={item.id} className="block">
          <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 mb-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-200">
            <div className="text-[#121517] flex items-center justify-center rounded-lg bg-[#f1f3f4] shrink-0 size-12">
              {item.icon}
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#121517] text-base font-medium leading-normal line-clamp-1">{item.title}</p>
              <p className="text-[#677883] text-sm font-normal leading-normal line-clamp-2">{item.description}</p>
            </div>
          </div>
        </Link>
      ))}
      <br/>

      {/* Exploring the Platform Bölümü */}
      <h3 className="text-[#121517] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Exploring the Platform</h3>
      {exploringPlatformItems.map((item) => (
        <Link to={`/${item.id}`} key={item.id} className="block">
          <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 mb-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-200">
            <div className="text-[#121517] flex items-center justify-center rounded-lg bg-[#f1f3f4] shrink-0 size-12">
              {item.icon}
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#121517] text-base font-medium leading-normal line-clamp-1">{item.title}</p>
              <p className="text-[#677883] text-sm font-normal leading-normal line-clamp-2">{item.description}</p>
            </div>
          </div>
        </Link>
      ))}
      <br/>

      {/* Basic Assistance Bölümü */}
      <h3 className="text-[#121517] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Basic Assistance</h3>
      {basicAssistanceItems.map((item) => (
        <Link to={`/${item.id}`} key={item.id} className="block">
          <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 mb-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-200">
            <div className="text-[#121517] flex items-center justify-center rounded-lg bg-[#f1f3f4] shrink-0 size-12">
              {item.icon}
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#121517] text-base font-medium leading-normal line-clamp-1">{item.title}</p>
              <p className="text-[#677883] text-sm font-normal leading-normal line-clamp-2">{item.description}</p>
            </div>
          </div>
        </Link>
      ))}
      <br/>

    </div>
  );
};

export default MainContent;