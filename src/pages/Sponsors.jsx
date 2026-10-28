import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';
import LogoGrid from '../components/LogoGrid';
import robotLogos from '../assets/robot-sponsor-logos.webp';
import { ALUMNI_COMPANIES, SPONSORS_AND_PARTNERS, SPONSOR_TIERS } from '../logos';
import { CONTACT_EMAIL, PACKET_SIZE, PACKET_URL } from '../site';

// ---- Page copy: edit freely ----

const STATS = [
  { value: '100%', label: 'Worlds qualifications', accent: true },
  { value: '17th', label: 'in the world at Worlds 2026' },
  { value: '2×', label: 'Tournament Champions' },
  { value: '3×', label: 'Design Award' },
];

const REASONS = [
  {
    title: 'Seen on the world stage',
    body: 'Your logo travels on our robots to tournaments across the region and to the VEX Robotics World Championship.',
  },
  {
    title: 'Meet future engineers',
    body: 'Our members come from every major, and our alumni go on to companies like Lockheed Martin, Google and Tesla.',
  },
  {
    title: 'Back Rutgers students',
    body: 'A season costs about $16,400 in parts, travel and registration. Sponsors are how students get to compete.',
  },
];

const IN_KIND = [
  { title: 'Software and tools', body: 'CAD, simulation and development software for designing and programming robots.' },
  { title: 'Materials and parts', body: 'Aluminum, polycarbonate, 3D-printing filament, motors and electronics.' },
  { title: 'Manufacturing', body: 'PCB fabrication, machining, laser cutting and 3D printing.' },
  { title: 'Travel', body: 'Lodging and transportation for competitions, including the World Championship.' },
];

const FAQ = [
  {
    q: 'Is my sponsorship tax-deductible?',
    a: 'Yes. Sponsorships are tax-deductible. Let us know if your company needs any documentation for its records.',
  },
  {
    q: 'What does my sponsorship pay for?',
    a: 'A season costs about $16,400: roughly 69% goes to travel for competitions, 18% to parts and equipment, and 13% to registration.',
  },
  {
    q: 'What do sponsors get?',
    a: 'Depending on the level, your logo goes on our competing robots, this website and our merchandise, and we thank you on social media. The sponsorship packet lists every level and its perks.',
  },
  {
    q: 'When does my logo go on the robot?',
    a: "We add sponsor logos as we build each season's robots, so sponsoring early in the season means your logo competes all year.",
  },
  {
    q: 'Can we sponsor with products or services instead of money?',
    a: 'Absolutely. Software, materials, manufacturing and travel support all make a real difference.',
  },
  {
    q: 'How do we get started?',
    a: `Send us a message through our contact page or email ${CONTACT_EMAIL}, and we'll follow up with next steps and payment details.`,
  },
];

// ---- Page ----

function PacketButton() {
  return (
    <a href={PACKET_URL} download="SCAR-Robotics-Sponsorship-Packet.pdf" className="btn max-w-full flex-wrap gap-x-3 gap-y-1 whitespace-normal px-7 py-[15px] text-base">
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 2v8M4 7l4 4 4-4M2 14h12" />
      </svg>
      Download sponsorship packet
      <span className="font-normal">PDF, {PACKET_SIZE}</span>
    </a>
  );
}

// Current sponsors grouped by tier (highest first), then everyone without a tier.
// With no tiers set, it's one untitled group.
function sponsorGroups() {
  const groups = SPONSOR_TIERS.map((tier) => ({ title: tier, logos: SPONSORS_AND_PARTNERS.filter((s) => s.tier === tier) }));
  const untiered = SPONSORS_AND_PARTNERS.filter((s) => !SPONSOR_TIERS.includes(s.tier));
  const tiered = groups.filter((g) => g.logos.length > 0);
  return [...tiered, { title: tiered.length ? 'Partners' : null, logos: untiered }].filter((g) => g.logos.length);
}

const SectionHeading = ({ id, eyebrow, children }) => (
  <>
    <p className="eyebrow">{eyebrow}</p>
    <h2 id={id} className="mt-4 text-[clamp(32px,4vw,44px)] font-bold leading-[1.05] tracking-[-0.02em]">
      {children}
    </h2>
  </>
);

const Sponsors = () => (
  <PageLayout
    name="Sponsors"
    eyebrow="Sponsors"
    title="Thank you to our sponsors."
    intro="We are grateful to the companies and organizations who make our seasons possible."
  >
    {/* Current sponsors: the first thing on the page */}
    <section aria-label="Our sponsors and partners" className="container-content space-y-12 pb-20">
      {sponsorGroups().map(({ title, logos }) => (
        <div key={title ?? 'all'}>
          {title && <h2 className="eyebrow mb-4">{title}</h2>}
          <LogoGrid logos={logos} area={7000} maxH={64} className="grid-cols-2 lg:grid-cols-4" />
        </div>
      ))}
    </section>

    {/* Join them */}
    <section aria-labelledby="join-heading" className="border-t border-line">
      <div className="container-content grid items-end gap-10 py-20 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <SectionHeading id="join-heading" eyebrow="Become a sponsor">
            Put Rutgers on the map with us.
          </SectionHeading>
          <p className="mt-6 max-w-[600px] text-lg leading-[1.6] text-soft">
            SCAR is a student team competing against universities from around the world. Sponsors cover the parts, travel and
            registration that get us there, and every sponsorship is tax-deductible.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4 lg:justify-end">
          <PacketButton />
          <Link to="/contact" className="link-ul">
            Get in touch
          </Link>
        </div>
      </div>
    </section>

    {/* Why sponsor */}
    <section aria-labelledby="why-heading" className="border-t border-line">
      <div className="container-content pb-[120px] pt-24">
        <SectionHeading id="why-heading" eyebrow="Why sponsor SCAR">
          A proven team on the world stage.
        </SectionHeading>
        <dl className="mt-12 grid grid-cols-2 gap-px border-y border-line bg-line lg:grid-cols-4">
          {STATS.map(({ value, label, accent }) => (
            <div key={label} className="flex flex-col-reverse bg-black px-5 py-8 sm:px-6">
              <dt className="mt-3 text-[15px] text-dim sm:text-[17px]">{label}</dt>
              <dd className={`text-[40px] font-extrabold leading-none tracking-[-0.03em] sm:text-[56px] ${accent ? 'text-scarlet-light' : ''}`}>
                {value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {REASONS.map(({ title, body }) => (
            <div key={title}>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-relaxed text-soft">{body}</p>
            </div>
          ))}
        </div>
        <h3 className="eyebrow mb-6 mt-16">Where our alumni work</h3>
        <LogoGrid logos={ALUMNI_COMPANIES} area={4200} className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" />
      </div>
    </section>

    {/* Your logo here */}
    <section aria-labelledby="logo-heading" className="border-t border-line">
      <div className="container-content grid items-center gap-12 py-24 lg:grid-cols-[1.2fr_1fr]">
        <figure>
          <div className="cut cut-lg overflow-hidden bg-surface">
            <img
              src={robotLogos}
              alt="Sponsor logos for Onshape, Whimsy Tech, JLCPCB, EasyEDA, Polymaker, IEEE and Rutgers on the side of SCAR's 2025–26 robot"
              width="1200"
              height="600"
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted">Sponsor logos on our 2025–26 competition robot.</figcaption>
        </figure>
        <div>
          <SectionHeading id="logo-heading" eyebrow="Your logo here">
            Your logo, on the robot.
          </SectionHeading>
          <p className="mt-6 text-lg leading-[1.6] text-soft">
            Sponsor logos go on the robots we compete with, in front of teams, judges and audiences at every event. Depending on
            the level, they also appear on this website, our merchandise and our social media.
          </p>
          <a href={PACKET_URL} download="SCAR-Robotics-Sponsorship-Packet.pdf" className="link-ul mt-6">
            See levels and perks in the packet
          </a>
        </div>
      </div>
    </section>

    {/* In-kind */}
    <section aria-labelledby="in-kind-heading" className="border-t border-line">
      <div className="container-content grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading id="in-kind-heading" eyebrow="In-kind support">
            Support us in other ways.
          </SectionHeading>
          <p className="mt-6 text-lg leading-[1.6] text-soft">
            Not every sponsorship is a check. Companies have supported SCAR with software, parts and manufacturing, and we are
            glad to talk about what you can offer.
          </p>
        </div>
        <ul className="border-t border-line">
          {IN_KIND.map(({ title, body }) => (
            <li key={title} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[200px_1fr] sm:gap-8">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="leading-relaxed text-soft">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* FAQ */}
    <section aria-labelledby="faq-heading" className="border-t border-line">
      <div className="container-content grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading id="faq-heading" eyebrow="FAQ">
          Questions sponsors ask.
        </SectionHeading>
        <div className="border-t border-line">
          {FAQ.map(({ q, a }) => (
            <details key={q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {q}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="shrink-0 text-muted transition-transform group-open:rotate-45"
                >
                  <path d="M8 2v12M2 8h12" />
                </svg>
              </summary>
              <p className="max-w-[640px] pb-6 leading-relaxed text-soft">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Sponsors;
