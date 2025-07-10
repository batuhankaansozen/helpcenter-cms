// src/routes/DynamicDetailPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allDynamicContent } from '../data/contentData.jsx'; // contentData'yı import ediyoruz

const DynamicDetailPage = () => {
  const { slug } = useParams(); // URL'den gelen ID'yi 'slug' olarak alıyoruz
  const navigate = useNavigate();

  // allDynamicContent dizisinden ilgili içeriği bul
  const contentItem = allDynamicContent.find((item) => item.id === slug);

  // İçerik bulunamazsa hata mesajı ve geri dön butonu
  if (!contentItem) {
    return (
      // Bu kısım artık MainLayout içinde render edileceği için kendi başına bir layout elemanı içermez.
      <div className="flex flex-col items-center justify-center h-full bg-gray-50 p-8">
        <h2 className="text-2xl font-bold text-[#121517] mb-4">İçerik Bulunamadı</h2>
        <p className="text-gray-600 text-lg mb-6">Aradığınız içerik mevcut değil veya silinmiş olabilir.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-[#007bff] text-white py-2 px-4 rounded-md hover:bg-[#0056b3] transition duration-200"
        >
          Ana Sayfaya Dön
        </button>
      </div>
    );
  }

  // İçerik bloklarını tipine göre render eden yardımcı fonksiyon
  const renderContentBlock = (block, index) => {
    switch (block.type) {
      case 'text':
        return <p key={index} className="text-gray-700 leading-relaxed mb-4">{block.value}</p>;
      case 'heading': {
        const HeadingTag = `h${block.level || 2}`; // H etiketi seviyesini dinamik yap (h1, h2, h3...)
        return (
          <HeadingTag key={index} className={`text-${block.level === 2 ? '2xl' : 'xl'} font-semibold text-[#121517] mt-6 mb-4`}>
            {block.value}
          </HeadingTag>
        );
      }
      case 'video':
        return (
          <div key={index} className="mt-6 mb-6">
            {block.title && <h4 className="text-lg font-medium text-[#121517] mb-3">{block.title}</h4>}
            {block.description && <p className="text-gray-600 text-sm mb-4">{block.description}</p>}
            <div className="relative w-full overflow-hidden rounded-lg shadow-md" style={{ paddingTop: '56.25%', maxWidth: '800px', margin: '0 auto' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={block.url} // Doğrudan embed URL'si bekleniyor
                title={block.title || "Dinamik Video"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>
        );
      case 'image':
        return (
          <div key={index} className="mt-6 mb-6 flex flex-col items-center">
            <img src={block.url} alt={block.alt || "Görsel"} className="max-w-full h-auto rounded-lg shadow-md" />
            {block.caption && <p className="text-center text-gray-600 text-sm mt-2">{block.caption}</p>}
          </div>
        );
      // Gelecekte eklenebilecek diğer içerik tipleri (liste, kod bloğu vb.) buraya eklenebilir.
      default:
        return null; // Tanımlanmayan tipleri görmezden gel
    }
  };

  return (
    // Bu div, MainLayout'un ana içerik alanına yerleştirilecektir.
    <div className="w-full max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-[#121517] text-4xl md:text-5xl font-extrabold leading-tight mb-4">
        {contentItem.title}
      </h1>
      <p className="text-gray-600 text-xl leading-relaxed mb-8">{contentItem.description}</p>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        {contentItem.content.map((block, index) => renderContentBlock(block, index))}
      </div>
    </div>
  );
};

export default DynamicDetailPage;