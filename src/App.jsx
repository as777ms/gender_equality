import React, {  } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load the components
const Layout = React.lazy(() => import('./components/layout/Layout.jsx'));
const About = React.lazy(() => import('./pages/about/About.jsx'));
const Home = React.lazy(() => import('./pages/home/Home.jsx'));
const Info = React.lazy(() => import('./pages/info/Info.jsx'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound.jsx'));
const Anonymsms = React.lazy(() => import('./pages/anonymsms/Anonymsms.jsx'));
const Specialprojects = React.lazy(() => import('./pages/specialprojects/Specialprojects.jsx'));
const Stories = React.lazy(() => import('./pages/stories/Stories.jsx'));
const Support = React.lazy(() => import('./pages/support/Support.jsx'));

// Static image imports
import headerimg from './assets/img/headerimg.jpg'
import imgheader2 from './assets/img/imgheader2.jpg'
import womenhug from './assets/img/womenhug.jpg'
import huggingpeople from './assets/img/huggingpeople.jpg'
import location from './assets/img/location.png'
import womenlaptop from './assets/img/womenlaptop.jpg'
import handsshake from './assets/img/handsshake.jpg'
import manshakehand from './assets/img/manshakehand.jpg'
import womenblond from './assets/img/womenblond.jpg'
import emily from './assets/img/emily.jpg'
import together from './assets/img/together.jpg'
import togetherhug from './assets/img/togetherhug.jpeg'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home 
              headerimg={headerimg} 
              imgheader2={imgheader2} 
              womenhug={womenhug} 
              huggingpeople={huggingpeople} 
              location={location} 
              womenlaptop={womenlaptop} 
              handsshake={handsshake} 
              manshakehand={manshakehand} 
              womenblond={womenblond} 
              emily={emily} 
              together={together} 
              togetherhug={togetherhug} />} 
            />
            <Route path="about" element={<About />} />
            <Route path="info" element={<Info />} />
            <Route path="*" element={<NotFound />} />
            <Route path='/anonymsms' element={<Anonymsms />} />
            <Route path='/specialprojects' element={<Specialprojects />} />
            <Route path='/stories' element={<Stories />} />
            <Route path='/support' element={<Support />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
