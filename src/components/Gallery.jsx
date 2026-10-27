import { Link } from 'react-router';
import build from '../assets/build.webp';
import match from '../assets/match.webp';
import bots2425 from '../assets/bots2425.webp';
import volunteer from '../assets/volunteer.webp';

const PHOTOS = [
  { src: build, alt: 'Hands assembling a robot with a drill', caption: 'Building in the IEEE Lab' },
  { src: match, alt: 'A SCAR robot climbing during a match', caption: 'On the field' },
  { src: bots2425, alt: 'Two SCAR robots facing each other', caption: '2024–25 robots' },
  { src: volunteer, alt: 'SCAR members volunteering at a high school VEX competition', caption: 'Volunteering at local VEX events' },
];

const Gallery = () => (
  <section aria-labelledby="gallery-heading" className="container-content pb-[120px]">
    <div className="mb-7 flex flex-wrap items-baseline justify-between gap-4">
      <h2 id="gallery-heading" className="text-[32px] font-bold tracking-[-0.02em] sm:text-[40px]">
        Build. Compete. Give back.
      </h2>
      <Link to="/volunteering" className="link-ul">
        Volunteering
      </Link>
    </div>
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {PHOTOS.map(({ src, alt, caption }) => (
        <figure key={caption}>
          <div className="cut cut-md aspect-[4/5] overflow-hidden bg-surface">
            <img src={src} alt={alt} loading="lazy" decoding="async" className="block h-full w-full object-cover" />
          </div>
          <figcaption className="mt-2.5 text-sm text-muted">{caption}</figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default Gallery;
