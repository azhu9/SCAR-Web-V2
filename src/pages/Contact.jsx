import PageLayout from '../components/PageLayout';
import SponsorForm from '../components/SponsorForm';
import { CONTACT_EMAIL, DISCORD_URL } from '../site';

const Contact = () => (
  <PageLayout name="Contact" eyebrow="Contact" title="Send us a message.">
    <section className="container-content flex flex-wrap gap-16 pb-[120px]">
      <div className="min-w-0 flex-[1_1_380px]">
        <h2 className="eyebrow mb-3.5">Email</h2>
        <a href={`mailto:${CONTACT_EMAIL}`} className="link-ul break-all text-xl">
          {CONTACT_EMAIL}
        </a>
        <h2 className="eyebrow mb-3.5 mt-10">Rutgers students</h2>
        <p className="max-w-[440px] text-lg leading-[1.6] text-soft">
          Want to join the team? Come say hi on{' '}
          <a href={DISCORD_URL} target="_blank" rel="noreferrer" className="underline decoration-2 underline-offset-[6px]">
            Discord
          </a>
          .
        </p>
      </div>
      <SponsorForm label="Contact form" />
    </section>
  </PageLayout>
);

export default Contact;
