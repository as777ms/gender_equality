import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import About from './pages/about/About.jsx';
import Home from './pages/home/Home.jsx';
import Info from './pages/info/Info.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import './i18n';
import Anonymsms from './pages/anonymsms/Anonymsms.jsx';
import Specialprojects from './pages/specialprojects/Specialprojects.jsx';
import Stories from './pages/stories/Stories.jsx';
import Support from './pages/support/Support.jsx';
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
        <Route index element={<Home headerimg={headerimg} imgheader2={imgheader2} womenhug={womenhug} huggingpeople={huggingpeople} location={location} womenlaptop={womenlaptop} handsshake={handsshake} manshakehand={manshakehand} womenblond={womenblond} emily={emily} together={together} togetherhug={togetherhug}/>} />
        <Route path="about" element={<About />} />
        <Route path="info" element={<Info />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/anonymsms' element={<Anonymsms />}/>
        <Route path='/specialprojects' element={<Specialprojects />}/>
        <Route path='/stories' element={<Stories />}/>
        <Route path='/support' element={<Support />}/>
      </Route>
    </Routes>
  </Router>
  )
}

export default App