import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import About from './pages/about/About.jsx';
import Home from './pages/home/Home.jsx';
import Info from './pages/info/Info.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="info" element={<Info />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default App