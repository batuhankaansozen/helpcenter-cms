// src/components/FAQSectionForLayout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { allDynamicContent } from '../data/allDynamicContent'; // allDynamicContent'i import ediyoruz

// Slug oluşturma fonksiyonu (DynamicDetailPage ve Sidebar ile aynı olmalı)
const slugify = (text) => {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-*|-*$/g, '');
};

const FAQSectionForLayout = () => {
  const navigate = useNavigate();

  // "Sıkça Sorulan Sorular" bölümü için ilgili içeriği bul
  const faqItem = allDynamicContent.find(item => item.id === 'frequently-asked-questions');
  const faqTitle = faqItem ? faqItem.title : 'Sıkça Sorulan Sorular';

  // Sadece heading tipindeki ve ardından gelen text tipindeki blokları alıyoruz
  const questionsAndDescriptions = [];
  if (faqItem && faqItem.content) {
    for (let i = 0; i < faqItem.content.length; i++) {
      if (faqItem.content[i].type === 'heading') {
        const question = faqItem.content[i].value;
        let description = '';
        if (i + 1 < faqItem.content.length && faqItem.content[i + 1].type === 'text') {
          description = faqItem.content[i + 1].value;
        }
        questionsAndDescriptions.push({ question, description });
      }
    }
  }

  // Eğer FAQ içeriği veya soru başlıkları bulunamazsa, bu bileşeni render etmeyebiliriz.
  if (!faqItem || questionsAndDescriptions.length === 0) {
    console.warn("FAQ içeriği 'frequently-asked-questions' ID'si ile bulunamadı veya soru başlıkları/açıklamaları eksik.");
    return null;
  }

  return (
    <section className="mt-12 mb-12 bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-[#121517] mb-6">{faqTitle}</h2>
      <div className="space-y-4 mb-6"> {/* Alt alta sıralama için space-y-4 */}
        {questionsAndDescriptions.slice(0, 4).map((item, index) => { // İlk 4 soruyu al
          const questionText = item.question;
          const descriptionText = item.description;
          const questionSlug = slugify(questionText);
          const targetUrl = `/${faqItem.id}#${questionSlug}`; // Hedef URL: /frequently-asked-questions#soru-slug

          return (
            <div
              key={index}
              onClick={() => navigate(targetUrl)}
              className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer border border-gray-200 w-full"
            >
              <h3 className="text-gray-800 font-semibold text-lg mb-1">
                {questionText}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {descriptionText}
              </p>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <button
          onClick={() => navigate(`/${faqItem.id}`)} // Tüm FAQ sayfasına yönlendirme
          className="bg-[#1877F2] hover:bg-[#1566D9] text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md"
        >
          Tümünü Gör
        </button>
      </div>
    </section>
  );
};

export default FAQSectionForLayout;