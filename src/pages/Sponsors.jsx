import PageLayout from '../components/PageLayout';
import LogoGrid from '../components/LogoGrid';
import SponsorForm from '../components/SponsorForm';
import { SPONSORS_AND_PARTNERS } from '../logos';
import { CONTACT_EMAIL } from '../site';

const Sponsors = () => (
  <PageLayout
    name="Sponsors"
    eyebrow="Sponsors"
    title="Thank you to our sponsors and partners."
    intro="We are grateful for the support of our generous sponsors who make our club possible."
  >
    <section aria-labelledby="partners-heading" className="container-content pb-[120px]">
      <h2 id="partners-heading" className="eyebrow mb-3.5">
        Sponsors and partners
      </h2>
      <LogoGrid logos={SPONSORS_AND_PARTNERS} area={7000} maxH={64} className="grid-cols-2 lg:grid-cols-3" />
    </section>

    <section aria-labelledby="become-heading" className="border-t border-line">
      <div className="container-content flex flex-wrap gap-16 py-24">
        <div className="min-w-0 flex-[1_1_380px]">
          <h2 id="become-heading" className="text-[36px] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[44px]">
            Become a sponsor
          </h2>
          <p className="mt-[18px] max-w-[440px] text-lg leading-[1.6] text-soft">
            If you would like to sponsor Rutgers VEX U Robotics, send us a message or email{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline decoration-2 underline-offset-[6px]">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
        <SponsorForm />
      </div>
    </section>
  </PageLayout>
);

export default Sponsors;
