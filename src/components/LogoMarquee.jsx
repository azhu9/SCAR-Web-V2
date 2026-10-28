import { logoHeight } from '../logos';

function LogoRow({ logos, duplicate = false }) {
  return (
    // The second copy only exists to make the loop seamless, so it's hidden from
    // assistive tech and keyboard focus.
    <ul className="marquee-row flex shrink-0" aria-hidden={duplicate || undefined} inert={duplicate}>
      {logos.map((logo) => {
        const image = (
          <img
            src={logo.src}
            alt={logo.name}
            width={logo.w}
            height={logo.h}
            // Not lazy: logos waiting off to the right would otherwise load late and pop in.
            decoding="async"
            style={{ height: `${logoHeight(logo, 5000, 56)}px` }}
            className="w-auto max-w-full object-contain opacity-80 transition-opacity group-hover/logo:opacity-100"
          />
        );
        return (
          <li key={logo.name} className="flex h-28 w-[220px] shrink-0 border-r border-line sm:h-32">
            {logo.url ? (
              <a href={logo.url} target="_blank" rel="noreferrer" className="group/logo flex w-full items-center justify-center px-8">
                {image}
              </a>
            ) : (
              <div className="flex w-full items-center justify-center px-8">{image}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

// Full-width strip of logos that scrolls slowly in a loop. Pauses on hover or
// keyboard focus; with reduced motion it's a static, centered row instead.
const LogoMarquee = ({ logos, label }) => (
  <div role="region" aria-label={label} className="overflow-hidden border-y border-line">
    <div className="marquee flex w-max">
      <LogoRow logos={logos} />
      <LogoRow logos={logos} duplicate />
    </div>
  </div>
);

export default LogoMarquee;
