import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';
import volunteer from '../assets/volunteer.webp';

// ---- Page copy: edit freely ----

// Events we judge every year. Add an entry to list another one.
const EVENTS = [
  {
    name: 'Highlander Summit Signature Event',
    where: 'NJIT, Newark',
    body: 'A VEX Robotics Signature Event hosted at NJIT. SCAR members serve on the judging panel.',
  },
  {
    name: 'VEX New Jersey State Championship',
    where: 'NJIT, Newark',
    body: "New Jersey's state championship, also held at NJIT. SCAR members serve on the judging panel.",
  },
];

const ROLES = [
  { title: 'Judging', body: 'Interviewing teams and reviewing engineering notebooks to decide judged awards.' },
  { title: 'Refereeing', body: 'Enforcing the game rules on the field during qualification and elimination matches.' },
  { title: 'Scorekeeping', body: 'Running the tournament software, match schedule and scores.' },
  { title: 'And more', body: 'Field setup, robot inspection and whatever else helps the day run smoothly.' },
];

// ---- Page ----

const Volunteering = () => (
  <PageLayout
    name="Volunteering"
    eyebrow="Volunteering"
    title="Giving back to VEX in New Jersey."
    intro="Rutgers SCAR helps run VEX V5RC events around New Jersey every season, from refereeing and scorekeeping to judging."
    actions={
      <Link to="/contact" className="btn px-7 py-[15px] text-base">
        Request volunteers
      </Link>
    }
  >
    <div className="container-content pb-[120px]">
      <figure>
        <div className="cut cut-lg aspect-[16/9] overflow-hidden bg-surface">
          <img
            src={volunteer}
            alt="SCAR members volunteering at a high school VEX competition"
            width="1400"
            height="1054"
            className="block h-full w-full object-cover"
          />
        </div>
        <figcaption className="mt-3 text-sm text-muted">SCAR members volunteering at a high school VEX competition.</figcaption>
      </figure>
    </div>

    {/* Events we judge */}
    <section aria-labelledby="events-heading" className="border-t border-line">
      <div className="container-content py-24">
        <p className="eyebrow">Every year</p>
        <h2 id="events-heading" className="mt-4 text-[clamp(32px,4vw,44px)] font-bold leading-[1.05] tracking-[-0.02em]">
          Events we judge.
        </h2>
        <p className="mt-6 max-w-[640px] text-lg leading-[1.6] text-soft">
          Each season our members judge a few events, including two of the biggest VEX competitions in the state.
        </p>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {EVENTS.map(({ name, where, body }) => (
            <li key={name} className="cut cut-md bg-[#111214] p-8">
              <p className="eyebrow text-scarlet-light">{where}</p>
              <h3 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.01em]">{name}</h3>
              <p className="mt-4 leading-relaxed text-soft">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* How we help */}
    <section aria-labelledby="roles-heading" className="border-t border-line">
      <div className="container-content grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="eyebrow">How we help</p>
          <h2 id="roles-heading" className="mt-4 text-[clamp(32px,4vw,44px)] font-bold leading-[1.05] tracking-[-0.02em]">
            Wherever the event needs us.
          </h2>
        </div>
        <ul className="border-t border-line">
          {ROLES.map(({ title, body }) => (
            <li key={title} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[180px_1fr] sm:gap-8">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="leading-relaxed text-soft">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Request volunteers */}
    <section aria-labelledby="request-heading" className="border-t border-line">
      <div className="container-content py-24">
        <p className="eyebrow">Hosting an event?</p>
        <h2 id="request-heading" className="mt-4 text-[clamp(32px,4vw,44px)] font-bold leading-[1.05] tracking-[-0.02em]">
          Need volunteers?
        </h2>
        <p className="mt-6 max-w-[560px] text-lg leading-[1.6] text-soft">
          If your team or organization is hosting a VEX competition in New Jersey and needs referees, scorekeepers or judges,
          get in touch.
        </p>
        <Link to="/contact" className="btn mt-9 px-7 py-[15px] text-base">
          Contact us
        </Link>
      </div>
    </section>
  </PageLayout>
);

export default Volunteering;
