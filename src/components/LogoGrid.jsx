import { logoHeight } from '../logos';

// Logos in a hairline grid (gap-px over a line-colored background draws the dividers),
// sized with logoHeight (`area`, `maxH`). Logos with a `url` link to it; entries
// without a `src` show their name as text until a logo file is added.
const LogoGrid = ({ logos, area = 5200, maxH = 56, className = '' }) => (
  <ul className={`grid gap-px border-y border-line bg-line ${className}`}>
    {logos.map((logo) => {
      const { name, src, w, h, url } = logo;
      const image = !src ? (
        <span className="text-center text-2xl font-extrabold tracking-[-0.02em] text-white/80 transition-colors group-hover:text-white">
          {name}
        </span>
      ) : (
        <img
          src={src}
          alt={name}
          width={w}
          height={h}
          loading="lazy"
          decoding="async"
          style={{ height: `${logoHeight(logo, area, maxH)}px` }}
          className="w-auto max-w-full object-contain opacity-80 transition-opacity group-hover:opacity-100"
        />
      );
      return (
        <li key={name} className="flex h-28 bg-black sm:h-32">
          {url ? (
            <a href={url} target="_blank" rel="noreferrer" className="group flex w-full items-center justify-center px-5">
              {image}
            </a>
          ) : (
            <div className="flex w-full items-center justify-center px-5">{image}</div>
          )}
        </li>
      );
    })}
  </ul>
);

export default LogoGrid;
