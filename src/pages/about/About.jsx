import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-200 via-blue-100 to-white min-h-screen">
      {/* Language Switcher */}

      {/* Top Section */}
      <div className="text-center py-12">
        <h1 className="text-sm font-light uppercase mb-2 tracking-widest">
          {t('Data Empowerment')}
        </h1>
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-4">
          {t('Statistical Overview: Empowerment Through Data')}
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto px-4">
          {t(
            'Unlock insights into the impact of our initiatives; transforming lives through data-driven empowerment and gender violence support.'
          )}
        </p>
      </div>

      {/* Bottom Section */}
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
        {/* Empowerment Workshops */}
        <div className="text-center">
          <h3 className="font-bold uppercase mb-2 tracking-wide">
            {t('Empowerment Workshops')}
          </h3>
          <p className="text-gray-800">
            {t(
              'Join our interactive sessions designed to build confidence, resilience, and self-advocacy skills in a safe, supportive environment.'
            )}
          </p>
        </div>

        {/* Counseling and Support */}
        <div className="text-center">
          <h3 className="font-bold uppercase mb-2 tracking-wide">
            {t('Counseling and Support')}
          </h3>
          <p className="text-gray-800">
            {t(
              'Access professional counseling services available to individuals affected by gender-based violence, providing emotional support and guidance.'
            )}
          </p>
        </div>

        {/* Legal Assistance Services */}
        <div className="text-center">
          <h3 className="font-bold uppercase mb-2 tracking-wide">
            {t('Legal Assistance Services')}
          </h3>
          <p className="text-gray-800">
            {t(
              'Receive expert legal advice and assistance to help navigate the complexities of the legal system in cases of gender violence.'
            )}
          </p>
        </div>

        {/* Community Awareness Programs */}
        <div className="text-center">
          <h3 className="font-bold uppercase mb-2 tracking-wide">
            {t('Community Awareness Programs')}
          </h3>
          <p className="text-gray-800">
            {t(
              'Participate in initiatives aimed at increasing public awareness and understanding of gender violence issues within the community.'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 