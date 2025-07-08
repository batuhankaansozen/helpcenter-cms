// src/components/TopicCard.jsx
import React from 'react';

// TopicCard bileşeni, dışarıdan 'icon', 'title' ve 'description' prop'larını alır.
const TopicCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col items-center text-center h-full"> {/* h-full ekledik */}
      {/* İkon için div */}
      <div className="mb-4 text-gray-800" style={{ width: '48px', height: '48px' }}>
        {icon} {/* İkon prop'u doğrudan buraya render edilir */}
      </div>

      {/* Başlık */}
      <h3 className="text-[#121517] text-lg font-bold mb-2 leading-tight">
        {title} {/* Başlık prop'u */}
      </h3>

      {/* Açıklama */}
      <p className="text-gray-600 text-sm leading-normal">
        {description} {/* Açıklama prop'u */}
      </p>
    </div>
  );
};

export default TopicCard;