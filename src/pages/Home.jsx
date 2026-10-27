import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Awards from '../components/Awards';
import Worlds from '../components/Worlds';
import Gallery from '../components/Gallery';
import Sponsor from '../components/Sponsor';
import Alumni from '../components/Alumni';
import Footer from '../components/Footer';

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    document.title = 'SCAR Robotics | Rutgers IEEE VEX U';
  }, []);

  return (
    <>
      <Navbar revealAfter={heroRef} />
      <main>
        <Hero ref={heroRef} />
        <Info />
        <Awards />
        <Worlds />
        <Gallery />
        <Sponsor />
        <Alumni />
      </main>
      <Footer />
    </>
  );
};

export default Home;
