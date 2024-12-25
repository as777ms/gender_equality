import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Support = () => {
  const { t } = useTranslation(); // Using i18next for translations
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission and save to localStorage
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      localStorage.setItem('contactFormData', JSON.stringify(formData));
      alert(t('messageSaved')); // Use translated string for alert
      setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    } else {
      alert(t('fillOutFields')); // Use translated string for alert
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-200 via-blue-100 to-white p-2">
      <div className="">
        {/* Left side: Support Information */}
        <div className="">
          <h1 className="text-3xl font-semibold text-gray-900">{t('reachOut')}</h1>
          <p className="text-lg text-gray-700">{t('contactMessage')}</p>
          <p className="text-sm text-gray-600 italic">{t('resilientVoices')}</p>
        </div>

        {/* Right side: Form Section */}
        <div className="">
          <h2 className="text-2xl font-semibold text-gray-900">{t('getInTouch')}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('yourName')}
              className="w-full p-4 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('yourEmail')}
              className="w-full p-4 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('yourMessage')}
              rows="4"
              className="w-full p-4 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 focus:ring-2 focus:ring-blue-500"
            >
              {t('submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
