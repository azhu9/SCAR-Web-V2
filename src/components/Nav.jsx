import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router';
import logo from '../assets/logo.webp';
import { DISCORD_URL, NAV_LINKS } from '../site';

// Pieces shared by the hero's corner panels and the fixed site navbar.

export function LogoLink({ className = 'h-9' }) {
  const { pathname } = useLocation();
  return (
    <Link
      to="/"
      // Already home: the router won't scroll, so take the user back to the top.
      onClick={() => pathname === '/' && window.scrollTo({ top: 0 })}
      className="flex items-center"
    >
      <img src={logo} alt="SCAR Robotics home" width="1065" height="371" className={`${className} w-auto`} />
    </Link>
  );
}

export function NavLinks({ label }) {
  return (
    <nav aria-label={label} className="hidden gap-6 text-[15px] font-medium min-[821px]:flex">
      {NAV_LINKS.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `py-2 no-underline ${isActive ? 'underline decoration-2 underline-offset-[6px]' : ''}`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export function JoinButton() {
  return (
    <a href={DISCORD_URL} target="_blank" rel="noreferrer" className="btn px-3.5 py-3 text-[15px] max-[374px]:hidden min-[821px]:px-[18px]">
      Join SCAR
    </a>
  );
}

// Menu button plus the full-screen menu it opens. Only shown at ≤820px.
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const dialogRef = useRef(null);
  const titleId = useId();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.querySelector('a, button')?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;
      // Keep focus inside the menu while it is open.
      const focusable = dialog.querySelectorAll('a, button');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    const button = buttonRef.current;
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      button?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className="icon-btn min-[821px]:hidden"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 5h14M2 13h14" />
        </svg>
      </button>
      {open &&
        createPortal(
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="fixed inset-0 z-50 flex flex-col bg-black px-6 pb-10"
          >
            <div className="flex h-[76px] shrink-0 items-center justify-between">
              <h2 id={titleId} className="eyebrow">
                Menu
              </h2>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="icon-btn"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3l12 12M15 3L3 15" />
                </svg>
              </button>
            </div>
            <nav aria-label="Mobile" className="mt-6 flex flex-col border-t border-line">
              <Link to="/" onClick={() => setOpen(false)} className="border-b border-line py-5 text-[28px] font-bold tracking-tight no-underline">
                Home
              </Link>
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === to ? 'page' : undefined}
                  className="border-b border-line py-5 text-[28px] font-bold tracking-tight no-underline aria-[current=page]:text-scarlet-light"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn mt-auto px-6 py-4 text-base">
              Join SCAR on Discord
            </a>
          </div>,
          document.body,
        )}
    </>
  );
}
