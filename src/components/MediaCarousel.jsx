import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks';

const INTERVAL = 5000;

const files = import.meta.glob('../assets/history/*.webp', { eager: true, import: 'default' });
const imageSrc = (name) => files[`../assets/history/${name}.webp`];

// Click-to-play YouTube slide: a thumbnail until played, so nothing loads from
// YouTube until the visitor asks for it.
function VideoSlide({ id, title, playing, onPlay }) {
  if (playing) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
  return (
    <button type="button" onClick={onPlay} className="group relative block h-full w-full" aria-label={`Play video: ${title}`}>
      {/* hqdefault is 4:3 with letterboxing; scaling crops the bars off a 16:9 video. */}
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full scale-[1.34] object-cover"
      />
      <span className="btn absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-2 px-5 py-3 text-sm group-hover:bg-[#B8152E]">
        <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden="true" fill="currentColor">
          <path d="M0 0l12 7-12 7z" />
        </svg>
        Play video
      </span>
    </button>
  );
}

function Arrow({ direction, onClick }) {
  return (
    <button type="button" onClick={onClick} className="icon-btn" aria-label={direction === 'prev' ? 'Previous photo' : 'Next photo'}>
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
        <path d={direction === 'prev' ? 'M10 3L5 8l5 5' : 'M6 3l5 5-5 5'} />
      </svg>
    </button>
  );
}

// Photo/video carousel for one season. `active` pauses autoplay when the carousel
// isn't the one on screen.
const MediaCarousel = ({ media, label, active = true }) => {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [playing, setPlaying] = useState(false);
  const reducedMotion = useReducedMotion();
  const swipeStart = useRef(null);
  const count = media.length;

  const go = useCallback(
    (to) => {
      setIndex((to + count) % count);
      setPlaying(false);
    },
    [count],
  );

  const autoplay = active && count > 1 && !hovered && !focused && !playing && !reducedMotion;
  useEffect(() => {
    if (!autoplay) return;
    const timer = setTimeout(() => go(index + 1), INTERVAL);
    return () => clearTimeout(timer);
  }, [autoplay, index, go]);

  const onPointerUp = (e) => {
    if (swipeStart.current === null) return;
    const dx = e.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setFocused(false)}
    >
      <div
        className="cut cut-lg relative aspect-[4/3] touch-pan-y overflow-hidden bg-surface"
        onPointerDown={(e) => e.pointerType !== 'mouse' && (swipeStart.current = e.clientX)}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (swipeStart.current = null)}
      >
        {media.map((item, i) => (
          <div
            key={item.image ?? item.youtube}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            inert={i !== index}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ background: item.bg }}
          >
            {item.youtube ? (
              <VideoSlide id={item.youtube} title={item.title} playing={playing && i === index} onPlay={() => setPlaying(true)} />
            ) : (
              <img
                src={imageSrc(item.image)}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className={`h-full w-full ${item.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
              />
            )}
          </div>
        ))}
      </div>

      {count > 1 && (
        <div className="mt-4 flex items-center gap-4">
          <span className="w-14 shrink-0 text-sm tabular-nums text-muted" aria-hidden="true">
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
          <div className="flex flex-1 gap-1.5">
            {media.map((item, i) => (
              <button
                key={item.image ?? item.youtube}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show ${i + 1} of ${count}`}
                aria-current={i === index ? 'true' : undefined}
                className="group flex-1 py-3"
              >
                <span className="relative block h-0.5 overflow-hidden bg-field group-hover:bg-muted">
                  {i === index && (
                    <span
                      // Restart the fill whenever the slide changes or autoplay resumes.
                      key={`${index}-${autoplay}`}
                      className={`absolute inset-y-0 left-0 bg-scarlet ${autoplay ? 'carousel-progress' : 'w-full'}`}
                      style={autoplay ? { animationDuration: `${INTERVAL}ms` } : undefined}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <Arrow direction="prev" onClick={() => go(index - 1)} />
            <Arrow direction="next" onClick={() => go(index + 1)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaCarousel;
