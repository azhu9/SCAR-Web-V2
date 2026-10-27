import { useEffect, useState } from 'react';
import { JoinButton, LogoLink, MobileMenu, NavLinks } from './Nav';

// Fixed black bar at the top of the page. On the homepage the hero's corner
// panels act as the navbar, so pass `revealAfter` (a ref to the hero) and the
// bar only slides in once the hero has scrolled out from under it.
const Navbar = ({ revealAfter }) => {
  const [shown, setShown] = useState(!revealAfter);

  useEffect(() => {
    const target = revealAfter?.current;
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setShown(!entry.isIntersecting), {
      rootMargin: '-76px 0px 0px 0px',
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, [revealAfter]);

  return (
    <header
      inert={!shown}
      className={`site-nav fixed inset-x-0 top-0 z-40 border-b border-line bg-black/[.78] backdrop-blur-[14px] transition-transform duration-300 ${
        shown ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Full width, matching the hero's corner panels, so nothing shifts when the bar takes over. */}
      <div className="flex h-[76px] items-center justify-between gap-6 pl-6 pr-5">
        <LogoLink className="h-[30px] min-[821px]:h-9" />
        <div className="flex items-center gap-3 min-[821px]:gap-[26px]">
          <NavLinks label="Site" />
          <JoinButton />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
