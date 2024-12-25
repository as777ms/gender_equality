import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = ({ imgheader2 }) => {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${imgheader2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        }}
      >
        {t('empoweringChange')}
      </h1>
      <p
        style={{
          color: 'white',
          fontSize: '1.2rem',
          maxWidth: '80%',
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        }}
      >
        {t('championingFuture')}
      </p>
      <div className="flex space-x-4">
        <Link to="/support">
          <button className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-500 transition-all">
            {t('getSupportNow')}
          </button>
        </Link>
        <Link to="/info">
          <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-all">
            {t('getStarted')}
          </button>
        </Link>
      </div>
      <select onChange={handleLanguageChange} style={{ position: 'absolute', top: '20px', right: '20px', padding: '5px' }}>
        <option value="en">EN</option>
        <option value="ru">RU</option>
        <option value="tjk">TJK</option>
      </select>
    </div>
  );
};

export default Header;
