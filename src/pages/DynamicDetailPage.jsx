import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { allDynamicContent } from '../data/contentData.jsx';

function createIdFromText(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[ç]/g, 'c')
    .replace(/[ğ]/g, 'g')
    .replace(/[ı]/g, 'i')
    .replace(/[ö]/g, 'o')
    .replace(/[ş]/g, 's')
    .replace(/[ü]/g, 'u')
    .replace(/[^a-z0-9 -]/g, '')  // harf, rakam, boşluk ve - dışındakileri çıkar
    .replace(/\s+/g, '-')         // boşlukları tire yap
    .replace(/-+/g, '-');         // birden fazla tireyi tek yap
}

const DynamicDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const contentItem = allDynamicContent.find((item) => item.id === slug);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // # işaretini kaldır
      const element = document.getElementById(id);
      if (element) {
        // Smooth scroll yap
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Eğer hash yoksa sayfa başına scroll edebiliriz
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  if (!contentItem) {
    return (
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

  const renderContentBlock = (block, index) => {
    switch (block.type) {
      case 'text':
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {block.value}
          </p>
        );
      case 'heading': {
        const HeadingTag = `h${block.level || 2}`;
        const id = createIdFromText(block.value);
        return (
          <HeadingTag
            key={index}
            id={id} // Başlık için otomatik oluşturulan id
            className={`text-${block.level === 2 ? '2xl' : 'xl'} font-semibold text-[#121517] mt-6 mb-4`}
          >
            {block.value}
          </HeadingTag>
        );
      }
      case 'video':
        return (
          <div key={index} className="mb-6">
            <iframe
              width="100%"
              height="315"
              src={block.url}
              title={block.title || 'Video'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {block.description && (
              <p className="mt-2 text-gray-600">{block.description}</p>
            )}
          </div>
        );
      case 'image':
        return (
          <figure key={index} className="mb-6">
            <img src={block.url} alt={block.alt || ''} className="w-full rounded-md" />
            {block.caption && (
              <figcaption className="mt-2 text-gray-500 text-sm">{block.caption}</figcaption>
            )}
          </figure>
        );
      default:
        return null;
    }
  };

  return (
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
