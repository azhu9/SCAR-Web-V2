import { CURRENT_SPONSORS } from '../logos';
import LogoGrid from './LogoGrid';
import SponsorForm from './SponsorForm';

const Sponsor = () => (
  <section id="sponsors" aria-labelledby="sponsors-heading" className="border-t border-line">
    <div className="container-content flex flex-wrap gap-16 py-24">
      <div className="min-w-0 flex-[1_1_380px]">
        <p className="eyebrow">Sponsors</p>
        <h2 id="sponsors-heading" className="my-[18px] text-[36px] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[44px]">
          Want to sponsor our team?
        </h2>
        <p className="mb-10 max-w-[440px] text-lg leading-[1.6] text-soft">Type in your email and send us a message.</p>
        <h3 className="eyebrow mb-3.5">Current sponsors</h3>
        <LogoGrid logos={CURRENT_SPONSORS} area={4400} className="grid-cols-3" />
      </div>
      <SponsorForm />
    </div>
  </section>
);

export default Sponsor;
