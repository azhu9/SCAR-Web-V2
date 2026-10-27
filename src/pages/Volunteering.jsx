import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';
import volunteer from '../assets/volunteer.webp';

const Volunteering = () => (
  <PageLayout name="Volunteering" eyebrow="Volunteering" title="Need volunteers?">
    <section className="container-content grid items-center gap-12 pb-[120px] lg:grid-cols-2">
      <div className="cut cut-lg aspect-[4/3] overflow-hidden bg-surface">
        <img
          src={volunteer}
          alt="SCAR members volunteering at a high school VEX competition"
          width="1400"
          height="1054"
          className="block h-full w-full object-cover"
        />
      </div>
      <div>
        <p className="text-[clamp(22px,2.4vw,28px)] font-semibold leading-[1.4]">
          Are you a team or organization hosting a VEX competition and in need of volunteers?
        </p>
        <p className="mt-6 text-lg leading-[1.65] text-soft">
          Rutgers SCAR helps run several V5RC events around New Jersey with refereeing, scorekeeping, judging and more.
          Get in contact below.
        </p>
        <Link to="/contact" className="btn mt-8 px-7 py-[15px] text-base">
          Contact us
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default Volunteering;
