// src/pages/DynamicDetailPage.jsx
import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { allDynamicContent } from '../data/allDynamicContent';
import { faqData } from '../data/faqData';

// Slugify function - Still needed for other dynamic content and general slug generation if needed
const slugify = (text) => {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-*|-*$/g, '');
};

const DynamicDetailPage = () => {
  const { slug, questionSlug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Buradaki kritik değişiklik:
  const contentItem = (slug === 'frequently-asked-questions' || (questionSlug && !slug)) 
    ? faqData 
    : allDynamicContent.find(item => item.id === slug);

  useEffect(() => {
    if (questionSlug) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.hash) {
      const idToScroll = location.hash.substring(1);
      const element = document.getElementById(idToScroll);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash, slug, questionSlug]);

  if (!contentItem) {
    return (
      <div className="p-8 text-center text-gray-700">
        İçerik bulunamadı.
      </div>
    );
  }

  const renderContentBlock = (block, index) => {
    switch (block.type) {
      case 'text':
        return <p key={index} className="text-base text-gray-700 leading-relaxed mb-4">{block.value}</p>;
      case 'heading': {
        const HeadingTag = `h${block.level || 2}`;
        const anchorId = slugify(block.value || `heading-${index}`);

        let headingClasses = "font-bold text-[#121517] mt-8 mb-3 pt-2 pb-2";

        if (block.level === 2) {
          headingClasses += " text-2xl border-b border-gray-200";
        } else if (block.level === 3) {
          headingClasses += " text-xl";
        } else {
          headingClasses += " text-lg";
        }

        return (
          <HeadingTag key={index} id={anchorId} className={headingClasses}>
            {block.value}
          </HeadingTag>
        );
      }
      case 'video':
        return (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{block.title}</h3>
            {block.description && <p className="text-gray-600 text-sm mb-2">{block.description}</p>}
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                src={`https://www.youtube.com/embed/${block.url.split('/').pop()}`}
                title={block.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        );
      case 'image':
        return (
          <div key={index} className="mb-6 text-center">
            <img src={block.url} alt={block.alt} className="max-w-full h-auto mx-auto rounded-lg shadow-md" />
            {block.caption && <p className="text-gray-500 text-sm mt-2">{block.caption}</p>}
          </div>
        );
      case 'list':
        return (
          <ul key={index} className="list-disc list-inside text-gray-700 mb-4">
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  if (slug === 'frequently-asked-questions' || (questionSlug && !slug)) {
    if (questionSlug) {
      console.log("DEBUG-DynamicDetailPage: URL'den gelen questionSlug:", questionSlug, `(Uzunluk: ${questionSlug.length})`);
      const selectedFaqEntry = faqData.content.find(faqEntry => {
        if (!faqEntry.slug) {
          console.warn(`DEBUG-DynamicDetailPage: faqEntry.slug tanımlı değil veya boş:`, faqEntry);
          return false;
        }
        console.log(`DEBUG-DynamicDetailPage: Karşılaştırılıyor: Data'dan gelen slug: "${faqEntry.slug}" (Uzunluk: ${faqEntry.slug.length}) vs URL'den gelen slug: "${questionSlug}" (Uzunluk: ${questionSlug.length})`);
        
        // Karakter karakter karşılaştırma
        if (faqEntry.slug.length !== questionSlug.length) {
          console.log(`DEBUG-DynamicDetailPage: Uzunluklar farklı! Data: ${faqEntry.slug.length}, URL: ${questionSlug.length}`);
        } else {
          for (let i = 0; i < faqEntry.slug.length; i++) {
            if (faqEntry.slug[i] !== questionSlug[i]) {
              console.log(`DEBUG-DynamicDetailPage: Farklı karakter bulundu! Index: ${i}, Data: '${faqEntry.slug[i]}' (${faqEntry.slug.charCodeAt(i)}) vs URL: '${questionSlug[i]}' (${questionSlug.charCodeAt(i)})`);
            }
          }
        }
        return faqEntry.slug === questionSlug;
      });

      if (!selectedFaqEntry) {
        console.error("DEBUG-DynamicDetailPage: Hata: Eşleşen FAQ girişi bulunamadı.");
        return (
          <div className="p-8 text-center text-gray-700">
            Aradığınız sıkça sorulan soru bulunamadı.
            <button
              onClick={() => navigate('/frequently-asked-questions')}
              className="mt-4 bg-[#1877F2] hover:bg-[#1566D9] text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Tüm Sorulara Geri Dön
            </button>
          </div>
        );
      }

      return (
        <div className="p-8 max-w-3xl mx-auto">
          <button
            onClick={() => navigate('/frequently-asked-questions')}
            className="mb-6 flex items-center text-[#1877F2] hover:underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Tüm Sorulara Geri Dön
          </button>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{selectedFaqEntry.question}</h1>
          <div className="prose max-w-none">
            {selectedFaqEntry.details.map((block, index) => renderContentBlock(block, index))}
          </div>
        </div>
      );
    }

    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">{contentItem.title}</h1>
        <p className="text-gray-600 mb-8">{contentItem.description}</p>

        <div className="space-y-4 max-w-full">
          {contentItem.content.map((faqEntry) => {
            const questionText = faqEntry.question;
            const descriptionText = faqEntry.details.find(detail => detail.type === 'text')?.value || '';
            const questionId = faqEntry.slug; // Doğrudan slug'ı kullanıyoruz

            const navigateToQuestion = () => {
              navigate(`/frequently-asked-questions/${questionId}`);
            };

            return (
              <div
                key={questionId}
                onClick={navigateToQuestion}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex justify-between items-center w-full text-left p-4 text-[#121517] font-semibold text-lg">
                  <span className="flex-1">{questionText}</span>
                </div>
                {descriptionText && (
                  <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {descriptionText}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">{contentItem.title}</h1>
      <p className="text-gray-600 mb-8">{contentItem.description}</p>

      <div className="prose max-w-none">
        {contentItem.content.map((block, index) => renderContentBlock(block, index))}
      </div>
    </div>
  );
};

export default DynamicDetailPage;
