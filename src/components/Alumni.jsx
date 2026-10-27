import { ALUMNI_COMPANIES } from '../logos';
import LogoGrid from './LogoGrid';

const Alumni = () => (
  <section aria-labelledby="alumni-heading" className="container-content pb-28">
    <h2 id="alumni-heading" className="eyebrow mb-8 text-center">
      Our alumni network
    </h2>
    <LogoGrid logos={ALUMNI_COMPANIES} className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" />
  </section>
);

export default Alumni;
