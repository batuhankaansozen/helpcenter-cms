import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const contactUsButton = document.getElementById('contactUsButton');
    if (contactUsButton) {
      contactUsButton.addEventListener('click', function () {
        const slackChannelUrl = 'https://your-slack-workspace.slack.com/your-channel';
        window.open(slackChannelUrl, '_blank');
      });
    }

    return () => {
      if (contactUsButton) {
        contactUsButton.removeEventListener('click', () => {});
      }
    };
  }, []);

  const mainContentClasses = `
    flex-1 p-8 bg-gray-50 overflow-auto
    transition-all duration-300 ease-in-out
    ${isSidebarOpen ? 'ml-0' : 'ml-[-20rem]'}
  `;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header />

      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <main className={mainContentClasses}>
          {children}

          {/* "Daha fazla yardıma mı ihtiyacınız var?" bölümü */}
          <div className="mt-12 flex justify-center">
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
                id="contactUsButton"
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
                Bize Ulaşın
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
