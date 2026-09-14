import logoUrl from "../assets/saola-logo.png";

// Add only verified company information. Empty values never become broken links.
export const siteConfig = {
  name: "Saola Systems",
  domain: "saolasystems.com",
  email: "info@saolasystems.com",
  phone: "", // CONTACT_PHONE
  facebook: "", // FACEBOOK_URL
  linkedin: "", // LINKEDIN_URL
  privacyUrl: "", // Link to approved Privacy Policy before public launch.
  termsUrl: "", // Link to approved Terms of Service before public launch.
  contactEndpoint: import.meta.env.VITE_CONTACT_ENDPOINT || "",
  logoUrl, // Official artwork; CSS omits the tagline and handles dark-surface contrast.
  faviconUrl: "", // Optional official icon-only asset in public/.
};
