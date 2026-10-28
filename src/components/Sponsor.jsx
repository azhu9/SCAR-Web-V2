import { Link } from 'react-router';
import robotLogos from '../assets/robot-sponsor-logos.webp';
import { SPONSORS_AND_PARTNERS } from '../logos';
import { PACKET_URL } from '../site';
import LogoMarquee from './LogoMarquee';

const Sponsor = () => (
  <section id="sponsors" aria-labelledby="sponsors-heading" className="border-t border-line py-24">
    <div className="container-content flex flex-wrap items-end justify-between gap-x-12 gap-y-8">
      <div>
        <p className="eyebrow">Sponsors</p>
        <h2 id="sponsors-heading" className="mt-[18px] text-[36px] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[44px]">
          Thank you to our sponsors.
        </h2>
        <p className="mt-4 max-w-[480px] text-lg leading-[1.6] text-soft">
          They put our robots on the field. Want to join them?
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
        <Link to="/contact" className="btn px-7 py-[15px] text-base">
          Contact us
        </Link>
        <Link to="/sponsors" className="link-ul">
          Sponsorship details
        </Link>
      </div>
    </div>

    <div className="mt-12">
      <LogoMarquee logos={SPONSORS_AND_PARTNERS} label="Our sponsors and partners" />
    </div>

    <div className="container-content mt-12">
      <div className="relative">
        <div className="cut cut-lg overflow-hidden bg-surface">
          <img
            src={robotLogos}
            alt="Sponsor logos on the side of SCAR's 2025–26 competition robot"
            width="1200"
            height="600"
            loading="lazy"
            decoding="async"
            className="block aspect-[2/1] w-full object-cover"
          />
        </div>
        {/* On wide screens the text sits over the photo in a translucent corner panel. */}
        <div className="hero-panel-static mt-6 lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:max-w-[440px] lg:p-8">
          <p className="eyebrow text-scarlet-light">Your logo here</p>
          <h3 className="mt-3 text-[28px] font-bold leading-tight tracking-[-0.02em]">Your logo, on the robot.</h3>
          <p className="mt-3 leading-relaxed text-soft">
            Sponsor logos compete with us at every event, in front of teams, judges and audiences.
          </p>
          <a href={PACKET_URL} download="SCAR-Robotics-Sponsorship-Packet.pdf" className="link-ul mt-4">
            Download the sponsorship packet
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Sponsor;
