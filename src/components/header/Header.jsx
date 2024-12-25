import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = ({ imgheader2, womenhug }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-r from-indigo-200 via-blue-100 to-white py-16 px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-16">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
            {t('empoweringChange')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
            {t('championingFuture')}
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center md:justify-start">
            <Link to="/support">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-semibold shadow-lg transform hover:scale-105">
                {t('getSupportNow')}
              </button>
            </Link>
            <Link to="/info">
              <button className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all font-semibold shadow-lg transform hover:scale-105">
                {t('getStarted')}
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img src={womenhug} alt="Women Hugging" className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </div>
  );
};

export default Header;
