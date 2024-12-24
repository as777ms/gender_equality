import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header style={{ backgroundColor: 'grey', padding: '15px' }}>
        <h1 style={{ color: 'white', fontSize: '20px' }}>Header</h1>
      </header>
      <nav style={{ padding: '15px', borderBottom: '1px solid orange' }}>
        <ul style={{ display: 'flex', listStyle: 'none'}}>
          <li style={{ marginRight: '15px' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ marginRight: '15px' }}>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
        </ul>
      </nav>
      <main style={{ padding: '15px' }}>
        <Outlet />
      </main>
      <footer style={{ backgroundColor: 'grey', padding: '15px', marginTop: '700px', color: 'white' }}>
        <p>gender equality</p>
      </footer>
    </div>
  );
};

export default Layout;
