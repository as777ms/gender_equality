import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTelegram, FaPhoneAlt, FaBars } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Support from '../../pages/support/Support';

const Layout = () => {
  const { t, i18n } = useTranslation();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSocialMediaModalOpen, setSocialMediaModalOpen] = useState(false);

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const toggleSocialMediaModal = () => {
    setSocialMediaModalOpen(!isSocialMediaModalOpen);
  };

  return (
    <>
      {/* Header Section */}
      <header className="w-full bg-white p-4 text-gray-700 flex flex-wrap items-center justify-between shadow-md">
        {/* Social Media Icons (only visible on larger screens) */}
        <div className="flex space-x-4 mb-2 sm:mb-0 hidden md:flex">
          <FaInstagram className="w-6 h-6 cursor-pointer text-blue-400 hover:text-blue-600" />
          <FaFacebook className="w-6 h-6 cursor-pointer text-blue-400 hover:text-blue-600" />
          <FaTelegram className="w-6 h-6 cursor-pointer text-blue-400 hover:text-blue-600" />
        </div>
        {/* Search Bar */}
        <div className="flex-grow max-w-md hidden md:block">
          <input
            type="search"
            placeholder={t('searchPlaceholder')}
            className="w-full p-2 rounded-md bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Contact Us, Language Selector, and Drawer Toggle */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 bg-blue-400 text-white font-bold rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none shadow-md transition-all">
            <FaPhoneAlt className="mr-2" />
            {t('Contact Us')}
          </button>
          <select
            className="bg-blue-100 text-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleLanguageChange}
          >
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="tjk">TJK</option>
          </select>
          {/* Drawer Toggle Button */}
          <button
            className="block md:hidden p-2 bg-blue-100 rounded-md hover:bg-blue-200 focus:outline-none"
            onClick={toggleDrawer}
          >
            <FaBars className="w-6 h-6 text-gray-700" />
          </button>
          {/* Social Media Modal Toggle Button (Only for Mobile View) */}
          <button
            className="md:hidden p-2 bg-blue-100 rounded-md hover:bg-blue-200 focus:outline-none"
            onClick={toggleSocialMediaModal}
          >
            <FaInstagram className="w-6 h-6 text-blue-400" />
          </button>
        </div>
      </header>

      {/* Drawer for Mobile Navigation */}
      {isDrawerOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-gray-100/50 z-50 flex flex-col items-center justify-center text-gray-700">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 bg-blue-100 rounded-md hover:bg-blue-200 focus:outline-none"
            onClick={toggleDrawer}
          >
            ✕
          </button>

          {/* Navigation Links */}
          <nav className="text-center text-lg w-full max-w-xs rounded-lg p-4 bg-white shadow-lg">
            {[
              { to: '/', label: t('home') },
              { to: '/about', label: t('about') },
              { to: '/support', label: t('support') },
              { to: '/info', label: t('info') },
              { to: '/anonymsms', label: t('Anonimnii istorii') },
              { to: '/specialprojects', label: t('Special Projects') },
              { to: '/stories', label: t('istorii') },
            ].map((link, index) => (
              <Link
                key={index}
                to={link.to}
                onClick={toggleDrawer}
                className="block py-4 border-b border-gray-200 hover:text-blue-600 last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Social Media Modal (for mobile) */}
      {isSocialMediaModalOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-gray-100/50 z-50 flex flex-col items-center justify-center text-gray-700">
          <button
            className="absolute top-4 right-4 p-2 bg-blue-100 rounded-md hover:bg-blue-200 focus:outline-none"
            onClick={toggleSocialMediaModal}
          >
            ✕
          </button>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex space-x-4 mb-2">
              <FaInstagram className="w-6 h-6 cursor-pointer text-blue-400 hover:text-blue-600" />
              <FaFacebook className="w-6 h-6 cursor-pointer text-blue-400 hover:text-blue-600" />
              <FaTelegram className="w-6 h-6 cursor-pointer text-blue-400 hover:text-blue-600" />
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-white text-center text-gray-800 py-8">
        <h1 className="text-4xl font-bold mb-4">{t('Together Against Violence')}</h1>
        <p className="text-lg">
          {t('Empowering change, fostering equality, and building a safer future for all.')}
        </p>
      </div>

      {/* Navigation Bar */}
      <nav className="w-full bg-white p-4 shadow-md hidden md:flex justify-center">
        <div className="flex space-x-6 text-gray-700 text-lg">
          <Link to="/" className="hover:underline hover:text-blue-600">
            {t('home')}
          </Link>
          <Link to="/about" className="hover:underline hover:text-blue-600">
            {t('about')}
          </Link>
          <Link to="/support" className="hover:underline hover:text-blue-600">
            {t('support')}
          </Link>
          <Link to="/info" className="hover:underline hover:text-blue-600">
            {t('info')}
          </Link>
          <Link to="/anonymsms" className="hover:underline hover:text-blue-600">
            {t('Anonimnii istorii')}
          </Link>
          <Link to="/specialprojects" className="hover:underline hover:text-blue-600">
            {t('spesproekti')}
          </Link>
          <Link to="/stories" className="hover:underline hover:text-blue-600">
            {t('istorii')}
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="bg-gray-50">
        <Outlet />
        <Support />
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-700 py-4 text-center shadow-md">
        <p className="text-sm">
          © 2024 Together Against Violence. All rights reserved. <br />
          <span className="text-gray-500">Empower. Educate. End Violence.</span>
        </p>
      </footer>
    </>
  );
};

export default Layout;