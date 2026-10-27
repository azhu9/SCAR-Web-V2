import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Shell for every page except Home: fixed navbar, a simple page header, footer.
// `name` is the short page name used in the browser tab title.
const PageLayout = ({ name, title, eyebrow, intro, children }) => {
  useEffect(() => {
    document.title = `${name} | SCAR Robotics`;
  }, [name]);

  return (
    <>
      <Navbar />
      <main className="pt-[76px]">
        <header className="container-content pb-16 pt-24 sm:pt-28">
          {eyebrow && <p className="eyebrow text-scarlet-light">{eyebrow}</p>}
          <h1 className="mt-4 text-[clamp(40px,6vw,76px)] font-extrabold leading-none tracking-[-0.03em]">{title}</h1>
          {intro && <p className="mt-6 max-w-[640px] text-lg leading-[1.6] text-soft">{intro}</p>}
        </header>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
