import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTelegram, FaPhoneAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Layout = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      {/* Header Section */}
      <header className="w-full bg-black p-4 text-white flex flex-wrap items-center justify-between">
        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-2 sm:mb-0">
          <FaInstagram className="w-6 h-6 cursor-pointer hover:text-gray-400" />
          <FaFacebook className="w-6 h-6 cursor-pointer hover:text-gray-400" />
          <FaTelegram className="w-6 h-6 cursor-pointer hover:text-gray-400" />
        </div>
        {/* Search Bar */}
        <div className="flex-grow max-w-md hidden md:block">
          <input
            type="search"
            placeholder={t('searchPlaceholder')}
            className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>
        {/* Contact Us and Language Selector */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 bg-gray-700 text-white font-bold rounded-md hover:bg-gray-600 focus:ring-2 focus:ring-gray-400 focus:outline-none shadow-md transition-all">
            <FaPhoneAlt className="mr-2" />
            {t('Contact Us')}
          </button>
          <select
            className="bg-gray-700 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            onChange={handleLanguageChange}
          >
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="tjk">TJK</option>
          </select>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-center text-white py-8">
  <h1 className="text-4xl font-bold mb-4">{t('Together Against Violence')}</h1>
  <p className="text-lg">{t('Empowering change, fostering equality, and building a safer future for all.')}</p>
</div>


      {/* Navigation Bar */}
      <nav className="w-full bg-gray-900 p-4 shadow-md">
        <div className="flex flex-wrap space-x-6 justify-center text-white text-lg">
          <Link to="/" className="hover:underline hover:text-gray-400">
            {t('home')}
          </Link>
          <Link to="/about" className="hover:underline hover:text-gray-400">
            {t('about')}
          </Link>
          <Link to="/support" className="hover:underline hover:text-gray-400">
            {t('support')}
          </Link>
          <Link to="/info" className="hover:underline hover:text-gray-400">
            {t('info')}
          </Link>
          <Link to="/anonymsms" className="hover:underline hover:text-gray-400">
            {t('Anonimnii istorii')}
          </Link>
          <Link to="/specialprojects" className="hover:underline hover:text-gray-400">
            {t('spesproekti')}
          </Link>
          <Link to="/stories" className="hover:underline hover:text-gray-400">
            {t('istorii')}
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-4 text-center">
        <p className="text-sm">
          © 2024 Together Against Violence. All rights reserved. <br />
          <span className="text-gray-400">Empower. Educate. End Violence.</span>
        </p>
      </footer>

      {/* Media Queries */}
      <style>
        {`
          @media (max-width: 768px) {
            header .hidden.md\\:block {
              display: none; /* Hide search bar on small screens */
            }
            header {
              flex-direction: column;
              text-align: center;
            }
            header > div {
              margin-bottom: 1rem;
            }
          }
          @media (max-width: 480px) {
            header button {
              padding: 0.5rem 1rem; /* Smaller button on very small screens */
              font-size: 0.875rem;
            }
            nav div {
              flex-direction: column;
              gap: 0.5rem; /* Adjust nav links */
            }
          }
        `}
      </style>
    </>
  );
};

export default Layout;
