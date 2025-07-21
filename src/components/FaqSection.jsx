// src/components/FAQSectionForLayout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faqData } from '../data/faqData';


const FAQSectionForLayout = () => {
  const navigate = useNavigate();

  const faqTitle = faqData.title;

  // Yeni yapıya göre soruları ve ilk detay metnini alıyoruz
  const questionsAndDescriptions = faqData.content.map(faqEntry => {
    const question = faqEntry.question;
    const description = faqEntry.details.find(detail => detail.type === 'text')?.value || '';
    // BURADA DÜZELTME: faqEntry.slug'ı da döndürüyoruz
    const slug = faqEntry.slug;
    return { question, description, slug };
  });

  if (!faqData || questionsAndDescriptions.length === 0) {
    console.warn("FAQ içeriği 'frequently-asked-questions' ID'si ile bulunamadı veya soru başlıkları/açıklamaları eksik.");
    return null;
  }

  return (
    <section className="mt-12 mb-12 bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-[#121517] mb-6">{faqTitle}</h2>
      <div className="space-y-4 mb-6">
        {questionsAndDescriptions.slice(0, 4).map((item, index) => {
          const questionText = item.question;
          const descriptionText = item.description;
          // BURADA DÜZELTME: item.slug'ı doğrudan kullanıyoruz
          const questionSlug = item.slug; 
          
          const navigateToQuestionDetail = () => {
            console.log("DEBUG: FAQSectionForLayout'tan yönlendirilen URL:", `/frequently-asked-questions/${questionSlug}`);
            navigate(`/frequently-asked-questions/${questionSlug}`);
          };

          return (
            <div
              key={index}
              onClick={navigateToQuestionDetail}
              className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer border border-gray-200 w-full"
            >
              <h3 className="text-gray-800 font-semibold text-lg mb-1">
                {questionText}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                {descriptionText}
              </p>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <button
          onClick={() => navigate(`/${faqData.id}`)}
          className="bg-[#1877F2] hover:bg-[#1566D9] text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md"
        >
          Tümünü Gör
        </button>
      </div>
    </section>
  );
};

export default FAQSectionForLayout;
