// src/pages/DynamicDetailPage.jsx
import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { allDynamicContent } from '../data/allDynamicContent';

// Slugify function - Must be consistent across all files!
const slugify = (text) => {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-*|-*$/g, '');
};

const DynamicDetailPage = () => {
  // Get both the main slug and the optional questionSlug from the URL parameters
  const { slug, questionSlug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Find the content item corresponding to the main slug (e.g., 'frequently-asked-questions')
  const contentItem = allDynamicContent.find(item => item.id === slug);

  // State to manage the open/closed status of FAQs (primarily for the general FAQ list page)
  // This state is not directly used for dropdowns on the FAQ list page anymore,
  // but kept for potential future use or consistency if hash-based opening is desired.
  // (Removed unused openFaq state)

  useEffect(() => {
    // Scroll to the top when a new questionSlug is present (for single FAQ view)
    if (questionSlug) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.hash) {
      // If there's a hash but no questionSlug (for general FAQ page with hash links)
      const idToScroll = location.hash.substring(1);
      const element = document.getElementById(idToScroll);

      if (element) {
        // If it's the FAQ page, open the specific FAQ item (if using accordion)
        // For this design, we don't open accordion, just scroll if hash exists
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // If no questionSlug and no hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash, slug, questionSlug]); // Depend on slug and questionSlug for re-evaluation

  // If content item is not found, display a message
  if (!contentItem) {
    return (
      <div className="p-8 text-center text-gray-700">
        İçerik bulunamadı.
      </div>
    );
  }

  // Special rendering for 'frequently-asked-questions' page
  if (slug === 'frequently-asked-questions') {
    const faqContentBlocks = [];
    // Pair headings with their immediate text content to form Q&A pairs
    for (let i = 0; i < contentItem.content.length; i++) {
      if (contentItem.content[i].type === 'heading') {
        const questionBlock = contentItem.content[i];
        let answerBlock = null;
        // Check if the next block exists and is of type 'text' to be its answer
        if (i + 1 < contentItem.content.length && contentItem.content[i + 1].type === 'text') {
          answerBlock = contentItem.content[i + 1];
        }
        faqContentBlocks.push({ question: questionBlock, answer: answerBlock });
      }
    }

    // If a questionSlug is present in the URL, render only that specific FAQ
    if (questionSlug) {
      const selectedFaq = faqContentBlocks.find(faqPair => slugify(faqPair.question.value) === questionSlug);

      // If the specific FAQ is not found, display an error and a back button
      if (!selectedFaq) {
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

      // Render the single FAQ question and its answer
      return (
        <div className="p-8 max-w-3xl mx-auto"> {/* Center content and limit width */}
          <button
            onClick={() => navigate('/frequently-asked-questions')}
            className="mb-6 flex items-center text-[#1877F2] hover:underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Tüm Sorulara Geri Dön
          </button>
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{selectedFaq.question.value}</h1>
          {selectedFaq.answer && (
            <p className="text-gray-700 leading-relaxed text-lg">
              {selectedFaq.answer.value}
            </p>
          )}
        </div>
      );
    }

    // If no questionSlug, render the list of all FAQs (as per your latest screenshot)
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">{contentItem.title}</h1>
        <p className="text-gray-600 mb-8">{contentItem.description}</p>

        <div className="space-y-4 max-w-full"> {/* Genişlik ayarı: max-w-full */}
          {faqContentBlocks.map((faqPair) => {
            const questionText = faqPair.question.value;
            const descriptionText = faqPair.answer ? faqPair.answer.value : ''; // Kısa açıklama için cevap metni
            const questionId = slugify(questionText);

            const navigateToQuestion = () => {
              navigate(`/frequently-asked-questions/${questionId}`); // Navigate to the new detail page
            };

            return (
              <div
                key={questionId}
                onClick={navigateToQuestion}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-200" // Beyaz arka plan
              >
                <div className="flex justify-between items-center w-full text-left p-4 text-[#121517] font-semibold text-lg"> {/* Soru başlığı */}
                  <span className="flex-1">{questionText}</span>
                  {/* + ikonunu kaldırıyoruz */}
                </div>
                {/* Küçük detay yazısı */}
                {descriptionText && (
                  <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed line-clamp-2"> {/* İlk 2 satırı göster */}
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

  // Default rendering for all other dynamic pages (unchanged)
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
