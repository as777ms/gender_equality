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

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
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