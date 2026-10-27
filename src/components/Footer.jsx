import { Link } from 'react-router';
import logo from '../assets/logo.webp';
import { SOCIAL_LINKS } from '../site';

const Footer = () => (
  <footer className="border-t border-line">
    <div className="container-content flex flex-wrap items-center justify-between gap-4 py-8">
      <Link to="/" className="flex">
        <img src={logo} alt="SCAR Robotics home" width="1065" height="371" className="h-7 w-auto" />
      </Link>
      <nav aria-label="Social" className="flex flex-wrap gap-x-6 text-sm">
        {SOCIAL_LINKS.map(({ href, label }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="py-2 no-underline">
            {label}
          </a>
        ))}
      </nav>
      <p className="text-sm text-muted">© 2026 Rutgers IEEE. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
