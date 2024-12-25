import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = ({ imgheader2, womenhug }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-white py-12 md:py-20 px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around space-y-10 md:space-y-0 md:space-x-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            {t('empoweringChange')}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
            {t('championingFuture')}
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
            <Link to="/support">
              <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all font-semibold shadow-lg transform hover:scale-105">
                {t('getSupportNow')}
              </button>
            </Link>
            <Link to="/info">
              <button className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all font-semibold shadow-lg transform hover:scale-105">
                {t('getStarted')}
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img src={womenhug} alt="Women Hugging" className="w-full max-w-lg mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </div>
  );
};

export default Header;
