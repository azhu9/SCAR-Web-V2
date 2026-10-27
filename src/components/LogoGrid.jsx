// Logos in a hairline grid (gap-px over a line-colored background draws the dividers).
// Each logo is sized to the same visual area, so wide wordmarks and square marks
// look equally weighted; `area` is that target in px², `maxH` caps tall marks and a
// logo's own `scale` adjusts it from there.
const LogoGrid = ({ logos, area = 5200, maxH = 56, className = '' }) => (
  <ul className={`grid gap-px border-y border-line bg-line ${className}`}>
    {logos.map(({ name, src, w, h, scale }) => {
      const height = Math.min(maxH, Math.sqrt(area / (w / h)) * scale);
      return (
        <li key={name} className="flex h-28 items-center justify-center bg-black px-5 sm:h-32">
          <img
            src={src}
            alt={name}
            width={w}
            height={h}
            loading="lazy"
            decoding="async"
            style={{ height: `${Math.round(height)}px` }}
            className="w-auto max-w-full object-contain opacity-80"
          />
        </li>
      );
    })}
  </ul>
);

export default LogoGrid;
