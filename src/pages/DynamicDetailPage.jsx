// src/pages/DynamicDetailPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allDynamicContent } from '../data/contentData.jsx';

const DynamicDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const contentItem = allDynamicContent.find((item) => item.id === slug);

  if (!contentItem) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-gray-50 p-8">
        {/* Layout içinde olduğu için min-h-screen değil, h-full */}
        <h2 className="text-2xl font-bold text-[#121517] mb-4">İçerik Bulunamadı</h2>
        <p className="text-gray-600 text-lg mb-6">Aradığınız içerik mevcut değil veya silinmiş olabilir.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-[#007bff] text-white py-2 px-4 rounded-md hover:bg-[#0056b3]"
        >
          Ana Sayfaya Dön
        </button>
      </div>
    );
  }

  return (
    // Bu kısım, sayfanın ana içeriğini saracak.
    // Artık layout tarafından sarıldığı için kendi içinde min-h-screen veya Header olmayacak.
    <div className="w-full max-w-3xl mx-auto py-8">
      {' '}
      {/* İçeriği ortalamak ve boşluk vermek için */}
      <h1 className="text-[#121517] text-4xl md:text-5xl font-extrabold leading-tight mb-4">
        {contentItem.title}
      </h1>
      <p className="text-gray-600 text-xl leading-relaxed mb-8">{contentItem.description}</p>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        {' '}
        {/* İç içerik kutusunun arka planını beyaz yaptık */}
        {/* contentItem.content direkt render edilecek */}
        {contentItem.content}
      </div>
    </div>
  );
};

export default DynamicDetailPage;