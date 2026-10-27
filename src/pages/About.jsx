import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';
import SeasonTimeline from '../components/SeasonTimeline';
import { SEASONS } from '../data/seasons';

const About = () => (
  <PageLayout
    name="About Us"
    eyebrow="About us"
    title={`${SEASONS.length} seasons of VEX U.`}
    intro="SCAR is the Rutgers IEEE VEX U team. Students of every major design, build, program and strategize together to compete against universities from around the world."
  >
    <section aria-labelledby="history-heading" className="container-content pb-[120px]">
      <h2 id="history-heading" className="eyebrow border-b border-line pb-6">
        Team history
      </h2>
      <SeasonTimeline seasons={SEASONS} />
      <Link to="/contact" className="link-ul mt-12">
        Get in touch
      </Link>
    </section>
  </PageLayout>
);

export default About;
