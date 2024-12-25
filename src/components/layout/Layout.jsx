import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Layout = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      {/* Header Section */}
      <header className="w-full bg-gradient-to-r from-red-600 via-red-400 to-pink-600 p-6 text-white flex items-center justify-between">
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <FaInstagram className="w-6 h-6 cursor-pointer hover:text-pink-300" />
          <FaFacebook className="w-6 h-6 cursor-pointer hover:text-blue-300" />
          <FaTelegram className="w-6 h-6 cursor-pointer hover:text-blue-200" />
        </div>
        {/* Search Bar */}
        <div className="w-1/3">
          <input
            type="search"
            placeholder={t('searchPlaceholder')}
            className="w-full p-2 rounded-md bg-gray-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>
        {/* Language Selector */}
        <div>
          <select
            className="bg-gray-800 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
            onChange={handleLanguageChange}
          >
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="tjk">TJK</option>
          </select>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-500 via-red-300 to-pink-500 text-center text-white py-8">
        <h1 className="text-4xl font-bold mb-4">Together Against Violence</h1>
        <p className="text-lg">Empowering change, fostering equality, and building a safer future for all.</p>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full bg-gray-800 p-4 shadow-md">
        <div className="flex space-x-6 justify-center text-white text-lg">
          <Link to="/" className="hover:underline hover:text-pink-300">
            {t('home')}
          </Link>
          <Link to="/about" className="hover:underline hover:text-pink-300">
            {t('about')}
          </Link>
          <Link to="/support" className="hover:underline hover:text-pink-300">
            {t('support')}
          </Link>
          <Link to="/info" className="hover:underline hover:text-pink-300">
            {t('info')}
          </Link>
          <Link to="/anonymsms" className="hover:underline hover:text-pink-300">
            {t('Anonimnii istorii')}
          </Link>
          <Link to="/specialprojects" className="hover:underline hover:text-pink-300">
            {t('spesproekti')}
          </Link>
          <Link to="/stories" className="hover:underline hover:text-pink-300">
            {t('istorii')}
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">
          © 2024 Together Against Violence. All rights reserved. <br />
          <span className="text-pink-300">Empower. Educate. End Violence.</span>
        </p>
      </footer>
    </>
  );
};

export default Layout;
