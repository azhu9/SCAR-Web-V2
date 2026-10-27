const AWARDS = [
  { value: '2×', label: 'Tournament Champions' },
  { value: '2×', label: 'Excellence Award' },
  { value: '3×', label: 'Design Award' },
  { value: '100%', label: 'Worlds Qualifications', accent: true },
];

// gap-px over a line-colored background draws the hairline dividers between cells.
const Awards = () => (
  <section aria-labelledby="awards-heading" className="container-content pb-[120px]">
    <h2 id="awards-heading" className="sr-only">
      Awards and achievements
    </h2>
    <dl className="grid grid-cols-2 gap-px border-y border-line bg-line lg:grid-cols-4">
      {AWARDS.map(({ value, label, accent }) => (
        <div key={label} className="flex flex-col-reverse bg-black px-5 py-8 sm:px-6 sm:py-9">
          <dt className="mt-3 text-[15px] text-dim sm:text-[17px]">{label}</dt>
          <dd
            className={`text-[44px] font-extrabold leading-none tracking-[-0.03em] sm:text-[64px] ${
              accent ? 'text-scarlet-light' : ''
            }`}
          >
            {value}
          </dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Awards;
