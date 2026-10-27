import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import logo from '../assets/logo.webp';
import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import { JoinButton, LogoLink, MobileMenu, NavLinks } from './Nav';

const INTRO_KEY = 'scar-intro-played';

const SLIDES = [
  { src: hero1, alt: "SCAR's 2025–26 robots on display at a competition" },
  { src: hero2, alt: 'A SCAR robot scoring on the field during a match' },
  { src: hero3, alt: "SCAR's red and blue robots side by side" },
];

// To swap the slideshow for a looping video, import the file and set it here,
// e.g. `import heroVideo from '../assets/hero.mp4'`.
const HERO_VIDEO = null;

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// The intro plays once per browser session; repeat visits (and reduced motion)
// start at the end state.
function initialMode() {
  if (prefersReducedMotion()) return 'is-static';
  try {
    if (sessionStorage.getItem(INTRO_KEY)) return 'is-static';
  } catch {
    // Storage blocked (private mode, sandboxed iframe): just play the intro.
  }
  return 'run-a';
}

// A static poster (the first photo) sits under the slideshow or video. It is the
// page's LCP image, fills the gaps between cross-fades, and is all that shows
// when motion is reduced.
function HeroMedia({ reducedMotion }) {
  let motion = null;
  if (reducedMotion) {
    // Poster only.
  } else if (HERO_VIDEO) {
    motion = (
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO}
        poster={hero1}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
    );
  } else {
    motion = SLIDES.map((slide, i) => (
      <img
        key={slide.src}
        className="hero-slide"
        src={slide.src}
        // The first slide repeats the poster, which already carries its alt text.
        alt={i === 0 ? '' : slide.alt}
        width="2400"
        height="1600"
        fetchPriority="low"
        decoding="async"
        // Each slide takes a 6s turn in the 18s loop.
        style={{ animationDelay: `${i * 6}s` }}
      />
    ));
  }
  return (
    <>
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={hero1}
        alt={SLIDES[0].alt}
        width="2400"
        height="1600"
        fetchPriority="high"
      />
      {motion}
    </>
  );
}

// Sizes a corner panel to its content: sets `--fit` on the panel (read by its CSS
// width/height) from the content's measured size, re-measuring on resize and font load.
function useFitToContent(panelRef, contentRef, dimension) {
  useLayoutEffect(() => {
    const panel = panelRef.current;
    const content = contentRef.current;
    const update = () => {
      const size = dimension === 'width' ? content.offsetWidth : content.offsetHeight;
      panel.style.setProperty('--fit', `${Math.ceil(size)}px`);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(content);
    return () => observer.disconnect();
  }, [panelRef, contentRef, dimension]);
}

const Hero = ({ ref }) => {
  const [mode, setMode] = useState(initialMode);
  const [reducedMotion] = useState(prefersReducedMotion);
  const trPanel = useRef(null);
  const trContent = useRef(null);
  const blPanel = useRef(null);
  const blContent = useRef(null);
  useFitToContent(trPanel, trContent, 'width');
  useFitToContent(blPanel, blContent, 'height');

  useEffect(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, '1');
    } catch {
      // Ignore: the intro will simply play again next time.
    }
  }, []);

  // Swapping between the identical -a/-b keyframe sets restarts every animation.
  const replay = () => setMode((m) => (m === 'run-a' ? 'run-b' : 'run-a'));

  return (
    <section
      ref={ref}
      aria-label="SCAR Robotics"
      className={`hero ${mode} relative h-screen min-h-[660px] w-full overflow-hidden bg-black supports-[height:100svh]:h-[100svh]`}
    >
      <div className="absolute inset-0 z-[1] bg-[#0B0B0C]">
        <HeroMedia reducedMotion={reducedMotion} />
        <div aria-hidden="true" className="absolute inset-0 bg-black/[.18]" />
      </div>

      {/* Intro: logo, filling scarlet bar and caption, centered on black. */}
      <div aria-hidden="true" className="hero-intro pointer-events-none absolute inset-0 z-[5] flex items-center justify-center px-6">
        <div className="flex w-[min(460px,80vw)] flex-col items-stretch gap-[18px]">
          <img src={logo} alt="" width="1065" height="371" className="block h-auto w-full" />
          <div className="h-[3px] bg-[#1E1F22]">
            <div className="hero-intro-bar h-[3px] bg-scarlet" />
          </div>
          <div className="text-center text-[13px] font-semibold tracking-[0.32em] text-muted">RUTGERS IEEE · VEX U</div>
        </div>
      </div>

      <div className="hero-panel hero-tl">
        <div className="hero-reveal flex h-[76px] items-center px-6">
          <LogoLink className="h-[30px] min-[821px]:h-9" />
        </div>
      </div>

      <div ref={trPanel} className="hero-panel hero-tr">
        <div
          ref={trContent}
          className="hero-reveal hero-reveal-2 ml-auto flex h-[76px] w-max items-center gap-3 pl-7 pr-5 min-[821px]:gap-6 min-[821px]:pl-10"
        >
          <NavLinks label="Primary" />
          <JoinButton />
          <MobileMenu />
        </div>
      </div>

      <div ref={blPanel} className="hero-panel hero-bl">
        {/* Sized to the panel's final width (not its animating one) so the measured height is stable. */}
        <div ref={blContent} className="absolute bottom-0 left-0 flex w-[var(--blw)] flex-col gap-3.5 px-6 pb-7 pt-9 min-[821px]:px-8">
          <p className="hero-reveal hero-reveal-2 text-[13px] font-semibold tracking-eyebrow text-scarlet-light">
            RUTGERS IEEE VEXU DIVISION
          </p>
          <h1 className="hero-reveal hero-reveal-3 text-[clamp(38px,4.8vw,68px)] font-extrabold leading-none tracking-[-0.03em]">
            Putting Rutgers
            <br />
            on the map.
          </h1>
          <div className="hero-reveal hero-reveal-4 flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="max-w-[360px] text-base leading-normal text-dim">
              Students of every major designing, building and programming robots for international competition.
            </p>
            <a href="#who-we-are" className="link-ul">
              Who we are
            </a>
          </div>
        </div>
      </div>

      <div className="hero-panel hero-br">
        <div className="hero-reveal hero-reveal-4 flex h-[124px] flex-col justify-between pb-[18px] pl-11 pr-6 pt-[22px]">
          <p className="text-sm leading-normal text-dim">
            Tournament Champions ×2
            <br />
            <span className="font-semibold text-white">100% Worlds qualifications</span>
          </p>
          {!reducedMotion && (
            <button
              type="button"
              onClick={replay}
              className="min-h-[44px] self-start text-[13px] text-muted transition-colors hover:text-white"
            >
              <span aria-hidden="true">↺ </span>Replay intro
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
