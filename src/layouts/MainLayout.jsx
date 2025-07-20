// src/layouts/MainLayout.jsx

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // useLocation ve useNavigate import edildi
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer'; // Footer bileşenini import ediyoruz
import FAQSectionForLayout from '../components/FaqSection'; // YENİ: FAQSectionForLayout bileşenini import ediyoruz
import { allDynamicContent } from '../data/allDynamicContent'; // allDynamicContent'i import ediyoruz

const MainLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation(); // Mevcut URL konumunu almak için
    const navigate = useNavigate(); // Yönlendirme için

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // "Daha fazla yardıma mı ihtiyacınız var?" bölümü için ilgili içeriği bul
    const contactSupportItem = allDynamicContent.find(item => item.id === 'contact-support');
    const contactSupportTitle = contactSupportItem ? contactSupportItem.title : 'Contact Us'; // Başlık varsayılanı

    // Sadece ana sayfada (path: '/') FAQ ve Contact Us bölümlerini göstermek için kontrol
    const isHomePage = location.pathname === '/';

    // Slack butonu için useEffect'i kaldırıyoruz ve doğrudan onClick kullanacağız
    // useEffect(() => {
    //     const contactUsButton = document.getElementById('contactUsButton');
    //     if (contactUsButton) {
    //         contactUsButton.addEventListener('click', function () {
    //             const slackChannelUrl = 'https://your-slack-workspace.slack.com/your-channel';
    //             window.open(slackChannelUrl, '_blank');
    //         });
    //     }
    //     return () => {
    //         if (contactUsButton) {
    //             contactUsButton.removeEventListener('click', () => {});
    //         }
    //     };
    // }, []);

    const mainContentClasses = `
        flex-1 p-8 bg-gray-50 overflow-auto
        transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'ml-0' : 'ml-[-20rem]'}
    `;

    return (
        <div className="flex flex-col min-h-screen bg-white"> {/* Ana kapsayıcıyı flex column yaptık */}
            {/* Header */}
            <Header />

            <div className="flex flex-1 relative"> {/* Bu div, sidebar ve ana içeriği yatayda yan yana tutar ve esnekliğini sağlar */}
                {/* Sidebar */}
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                {/* Main Content */}
                <main className={mainContentClasses}>
                    {children} {/* Bu kısım Home.jsx veya DynamicDetailPage.jsx içeriğini render eder */}

                    {/* SADECE ANA SAYFADA GÖSTERİLECEK BÖLÜMLER */}
                    {isHomePage && (
                        <>
                            {/* Sıkça Sorulan Sorular Bölümü - YENİ EKLENEN BİLEŞEN */}
                            {/* max-w-3xl ve mx-auto sınıfları, içeriği ortalamak ve genişliğini kısıtlamak için eklendi */}
                            <FAQSectionForLayout />

                            {/* "Daha fazla yardıma mı ihtiyacınız var?" bölümü */}
                            <section className="mt-12 flex justify-center">
                                <div className="
                                    w-full max-w-md
                                    bg-white
                                    p-6
                                    rounded-lg
                                    shadow-lg
                                    text-center
                                    flex flex-col items-center justify-center
                                ">
                                    <h2 className="text-xl font-semibold text-[#121517] mb-4 leading-tight">
                                        Daha fazla yardıma mı ihtiyacınız var?
                                    </h2>
                                    <button
                                        // id="contactUsButton" kaldırıldı, onClick doğrudan navigate kullanacak
                                        onClick={() => navigate(`/${contactSupportItem.id}`)} // Destek sayfasına yönlendirme
                                        className="
                                            bg-[#121517] text-white
                                            py-3 px-6
                                            rounded-lg
                                            text-base font-medium
                                            cursor-pointer
                                            border-none
                                            transition-colors duration-300
                                            hover:bg-gray-700
                                            w-full
                                        "
                                    >
                                        {contactSupportTitle}
                                    </button>
                                </div>
                            </section>
                        </>
                    )}
                </main>
            </div>

            {/* Footer'ı ana flex container'ın dışına (ama yine de flex column'ın içine) ekliyoruz */}
            <Footer />
        </div>
    );
};

export default MainLayout;
