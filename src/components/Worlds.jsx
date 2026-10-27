import worlds from '../assets/worlds.webp';

const Worlds = () => (
  <section aria-label="World Championship" className="container-content pb-[120px]">
    <figure>
      <div className="cut cut-lg aspect-video overflow-hidden bg-surface">
        <img
          src={worlds}
          alt="The SCAR team posing in front of the VEX Robotics World Championship sign"
          width="1400"
          height="1106"
          loading="lazy"
          decoding="async"
          className="block h-full w-full object-cover"
        />
      </div>
      <figcaption className="mx-auto mt-8 max-w-[760px] text-center text-lg leading-[1.55] text-[#E4E5E7] sm:text-[22px]">
        SCAR at the VEX Robotics World Championship. At the 2025 championship in Dallas, we finished 22nd in the world and
        were the top-ranked robotics team in New Jersey.
      </figcaption>
    </figure>
  </section>
);

export default Worlds;
