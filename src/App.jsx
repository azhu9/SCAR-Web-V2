import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Volunteering from './pages/Volunteering';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Start each new page at the top, unless the URL points at an anchor on it.
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/about" element={<About />} />
      <Route path="/volunteering" element={<Volunteering />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
