import { Link } from 'react-router';

const Info = () => (
  <section id="who-we-are" aria-labelledby="who-we-are-heading" className="container-content pb-[72px] pt-[120px] text-center">
    <h2 id="who-we-are-heading" className="eyebrow">
      Who are we?
    </h2>
    <p className="mx-auto mt-[22px] max-w-[900px] text-[clamp(24px,3vw,36px)] font-semibold leading-[1.3]">
      Our job is to let students of all backgrounds and majors design, build, program and strategize together, and put
      Rutgers on the map of international competitive robotics.
    </p>
    <p className="mx-auto mt-7 max-w-[700px] text-[17px] leading-[1.65] text-soft sm:text-lg">
      VEX U is a collegiate robotics competition that pits universities against each other in head-to-head matches. Each
      year the Robotics Education &amp; Competition Foundation releases a new game, and we design robots to win it through
      intelligent programming, robust builds and killer strategy.
    </p>
    <Link to="/about" className="link-ul mt-7">
      Learn more
    </Link>
  </section>
);

export default Info;
