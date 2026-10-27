import { FORMSPREE_URL } from '../site';

const inputClass =
  'w-full border-0 border-b border-field bg-transparent px-0 py-2.5 text-[17px] leading-[normal] text-white outline-none transition-colors focus:border-white';

function Field({ label, className = '', children }) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-sm text-dim">{label}</span>
      {children}
    </label>
  );
}

// Plain HTML POST to Formspree, same endpoint and field names as the original site.
const SponsorForm = ({ label = 'Sponsorship inquiry' }) => (
  <form
    name="form"
    action={FORMSPREE_URL}
    method="POST"
    aria-label={label}
    className="grid min-w-0 flex-[1_1_420px] grid-cols-1 content-start gap-x-6 gap-y-7 sm:grid-cols-2"
  >
    <Field label="Email address*" className="sm:col-span-2">
      <input type="email" name="email" autoComplete="email" required className={inputClass} />
    </Field>
    <Field label="First name*">
      <input type="text" name="firstName" autoComplete="given-name" required className={inputClass} />
    </Field>
    <Field label="Last name*">
      <input type="text" name="lastName" autoComplete="family-name" required className={inputClass} />
    </Field>
    <Field label="Phone number">
      <input
        type="tel"
        name="telephone"
        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
        title="10 digits, numbers only"
        autoComplete="tel-national"
        className={inputClass}
      />
    </Field>
    <Field label="Company">
      <input type="text" name="company" autoComplete="organization" className={inputClass} />
    </Field>
    <Field label="Message" className="sm:col-span-2">
      <textarea name="message" rows="4" className={`${inputClass} resize-y`} />
    </Field>
    <div className="sm:col-span-2">
      <button type="submit" className="btn px-7 py-[15px] text-base">
        Send message
      </button>
    </div>
  </form>
);

export default SponsorForm;
