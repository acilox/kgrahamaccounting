// Central place for links, contact & NAP so every component + schema stays in
// sync. NAP (name/address/phone) must be byte-identical everywhere (playbook §5).
//
// ⚠️ DEMO PLACEHOLDERS — confirm/replace before go-live:
//   - calendly: swap for Kayon's real Calendly booking URL (her live site uses one).
//   - streetAddress: her current site shows no street address; add the real one
//     (or a registered business address) for full local-SEO NAP matching.
export const site = {
  name: 'K. Graham Accounting & Advisory, LLC',
  shortName: 'K. Graham Accounting',
  owner: 'Kayon Graham',
  credential: 'MBA · QuickBooks ProAdvisor',
  tagline: 'Fuel Your Growth, Not Your Paperwork.',
  subtagline: 'Audit-ready accounting & federal compliance for the DMV.',

  phone: '301-460-6208',
  phoneHref: 'tel:+13014606208',
  email: 'info@kgrahamaccounting.com',

  // NAP — city/region only until a street address is confirmed.
  city: 'Silver Spring',
  region: 'MD',
  regionName: 'Maryland',
  areaServed: 'Washington DC–Maryland–Virginia (DMV)',

  // ⚠️ placeholder — replace with the real Calendly link from her current site.
  calendly: 'https://calendly.com/kgrahamaccounting/free-consultation',

  socials: {
    linkedin: 'https://www.linkedin.com/company/k-graham-accounting-advisory',
    instagram: 'https://www.instagram.com/kgrahamaccounting',
    facebook: 'https://www.facebook.com/kgrahamaccounting',
    google: 'https://www.google.com/search?q=K+Graham+Accounting+Advisory',
  },
};

export const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
  'Consultation request — accounting & compliance'
)}`;
