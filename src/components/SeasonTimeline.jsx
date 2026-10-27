import { useEffect, useRef, useState } from 'react';
import { useMediaQuery, useReducedMotion } from '../hooks';
import MediaCarousel from './MediaCarousel';

const slug = (season) => `season-${season.years.replace(/\D+/g, '-')}`;
const pad = (n) => String(n).padStart(2, '0');

function SeasonDetails({ season, index, total }) {
  const people = [
    ['Team', season.teams],
    ['Captains', season.captains],
    ['Leads', season.leads],
  ].filter(([, value]) => value);

  return (
    <>
      <p className="eyebrow text-scarlet-light">
        {pad(index + 1)} / {pad(total)} · {season.years}
      </p>
      <h3 className="mt-3 text-[clamp(36px,4vw,56px)] font-extrabold leading-none tracking-[-0.03em] transition-opacity duration-500 group-[:not(.is-active)]:opacity-[.55]">{season.game}</h3>
      <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {people.map(([label, value]) => (
          <div key={label}>
            <dt className="text-sm text-muted">{label}</dt>
            <dd className="mt-1 text-[17px] text-dim">{value}</dd>
          </div>
        ))}
      </dl>
      {season.awards?.length > 0 && (
        <>
          <h4 className="mt-6 text-sm text-muted">Awards</h4>
          <ul className="mt-2 flex flex-wrap gap-2">
            {season.awards.map((award) => (
              <li key={award} className="cut bg-[#1E1F22] px-3 py-1.5 text-sm font-medium text-white" style={{ '--cut': '6px' }}>
                {award}
              </li>
            ))}
          </ul>
        </>
      )}
      {season.note && <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-muted">{season.note}</p>}
    </>
  );
}

// Scroll-driven team history. Desktop: a sticky year list on the left, season
// details scrolling through the middle, and a sticky photo carousel on the right
// that swaps to whichever season is in the middle of the screen. Mobile: a sticky
// strip of years above the seasons, each with its own carousel.
const SeasonTimeline = ({ seasons }) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const blocks = useRef([]);
  const strip = useRef(null);

  // The active season is the one crossing the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(Number(entry.target.dataset.index));
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );
    blocks.current.forEach((block) => block && observer.observe(block));
    return () => observer.disconnect();
  }, [seasons, isDesktop]);

  // Mobile: keep the active year visible in the horizontal strip.
  useEffect(() => {
    const button = strip.current?.children[active];
    if (button) strip.current.scrollTo({ left: button.offsetLeft - 24, behavior: reducedMotion ? 'auto' : 'smooth' });
  }, [active, reducedMotion]);

  const jumpTo = (i) =>
    blocks.current[i]?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: isDesktop ? 'center' : 'start' });

  const yearButton = (season, i, className) => (
    <button
      type="button"
      onClick={() => jumpTo(i)}
      aria-current={i === active ? 'true' : undefined}
      className={`cut flex items-baseline gap-3 px-3 py-2 text-left transition-colors ${
        i === active ? 'bg-[#1E1F22] text-white' : 'text-muted hover:text-white'
      } ${className}`}
    >
      <span className="text-xs tabular-nums">{pad(i + 1)}</span>
      <span className="font-semibold">{season.years}</span>
    </button>
  );

  if (!isDesktop) {
    return (
      <div>
        <nav aria-label="Seasons" className="sticky top-[76px] z-30 -mx-6 border-b border-line bg-black/[.78] backdrop-blur-[14px]">
          <div ref={strip} className="flex gap-1 overflow-x-auto px-6 py-3 [scrollbar-width:none]">
            {seasons.map((season, i) => (
              <div key={season.years} className="shrink-0">
                {yearButton(season, i, 'whitespace-nowrap')}
              </div>
            ))}
          </div>
        </nav>
        {seasons.map((season, i) => (
          <article
            key={season.years}
            id={slug(season)}
            ref={(el) => (blocks.current[i] = el)}
            data-index={i}
            className="scroll-mt-[150px] border-b border-line py-12"
          >
            <MediaCarousel media={season.media} label={`${season.years} ${season.game} photos`} active={i === active} />
            <div className="mt-8">
              <SeasonDetails season={season} index={i} total={seasons.length} />
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[180px_minmax(0,1fr)_minmax(0,1.15fr)] gap-x-12 xl:gap-x-16">
      <nav aria-label="Seasons" className="sticky top-0 flex h-screen items-center self-start pt-[76px]">
        <ol className="w-full space-y-1">
          {seasons.map((season, i) => (
            <li key={season.years}>{yearButton(season, i, 'w-full')}</li>
          ))}
        </ol>
      </nav>

      <div>
        {seasons.map((season, i) => (
          <article
            key={season.years}
            id={slug(season)}
            ref={(el) => (blocks.current[i] = el)}
            data-index={i}
            // Seasons out of focus dim: the big title strongly, the smaller text only as
            // far as it can while keeping readable contrast.
            className={`group flex min-h-[80vh] flex-col justify-center py-16 transition-opacity duration-500 ${
              i === active ? 'is-active' : 'opacity-80'
            }`}
          >
            <SeasonDetails season={season} index={i} total={seasons.length} />
          </article>
        ))}
      </div>

      <div className="sticky top-0 flex h-screen items-center self-start pt-[76px]">
        {/* Every season's carousel shares one grid cell; only the active one shows. */}
        <div className="grid w-full">
          {seasons.map((season, i) => (
            <div
              key={season.years}
              inert={i !== active}
              className={`[grid-area:1/1] transition-[opacity,transform] duration-700 ease-out ${
                i === active ? 'translate-y-0 opacity-100' : `pointer-events-none opacity-0 ${i < active ? '-translate-y-8' : 'translate-y-8'}`
              }`}
            >
              <MediaCarousel media={season.media} label={`${season.years} ${season.game} photos`} active={i === active} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeasonTimeline;
