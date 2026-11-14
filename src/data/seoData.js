/**
 * Centralized SEO Data for Techno NDT Technical Services
 * Contains JSON-LD structured data schemas and per-page meta information.
 */

const SITE_URL = "https://www.technondtservices.com";
const COMPANY_NAME = "Techno NDT Technical Services";
const COMPANY_TAGLINE = "Test. Detect. Protect.";
const COMPANY_PHONE = "+919841506600";
const COMPANY_EMAIL = "technondtfinance@gmail.com";
const COMPANY_ADDRESS = {
  street: "No. 981-B, 3rd Main Road, 4th Cross Street, Mathur, MMDA, Manali",
  city: "Chennai",
  state: "Tamil Nadu",
  postalCode: "600068",
  country: "IN",
};

// ─── Organization Schema ─────────────────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: COMPANY_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-512.png`,
  description: "Professional NDT inspection, testing & industrial manpower supply services in Chennai, India.",
  slogan: COMPANY_TAGLINE,
  telephone: COMPANY_PHONE,
  email: COMPANY_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY_ADDRESS.street,
    addressLocality: COMPANY_ADDRESS.city,
    addressRegion: COMPANY_ADDRESS.state,
    postalCode: COMPANY_ADDRESS.postalCode,
    addressCountry: COMPANY_ADDRESS.country,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: COMPANY_PHONE,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+919176976225",
      contactType: "technical support",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil"],
    },
  ],
  foundingDate: "2022",
  founder: {
    "@type": "Person",
    name: "Techno NDT Team",
  },
  sameAs: [
    "https://wa.me/919841506600",
  ],
};

// ─── LocalBusiness Schema ────────────────────────────────────────────────────
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#localbusiness`,
  name: COMPANY_NAME,
  image: `${SITE_URL}/og-image.jpg`,
  url: SITE_URL,
  telephone: COMPANY_PHONE,
  email: COMPANY_EMAIL,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY_ADDRESS.street,
    addressLocality: COMPANY_ADDRESS.city,
    addressRegion: COMPANY_ADDRESS.state,
    postalCode: COMPANY_ADDRESS.postalCode,
    addressCountry: COMPANY_ADDRESS.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.1667,
    longitude: 80.2667,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceType: [
    "Non-Destructive Testing",
    "Radiographic Testing",
    "Ultrasonic Testing",
    "Magnetic Particle Testing",
    "Liquid Penetrant Testing",
    "Post Weld Heat Treatment",
    "Welding Inspection",
    "Industrial Inspection",
    "Pipeline Inspection",
    "Manpower Supply",
  ],
};

// ─── WebSite Schema ──────────────────────────────────────────────────────────
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: COMPANY_NAME,
  url: SITE_URL,
  description: "Official website of Techno NDT Technical Services — professional NDT inspection & testing company in Chennai, India.",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

// ─── FAQ Schema (from FAQ data) ──────────────────────────────────────────────
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Non-Destructive Testing (NDT)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non-Destructive Testing (NDT) is a wide group of analysis techniques used in science and technology industry to evaluate the properties of a material, component or system without causing damage.",
      },
    },
    {
      "@type": "Question",
      name: "Which NDT methods do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer Radiographic Testing (RT), Ultrasonic Testing (UT & UTG), Liquid Penetrant Testing (PT), Magnetic Particle Testing (MPT), Visual Testing (VT), and comprehensive welding inspection services.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve a diverse range of critical industries including Power Generation, Oil & Gas / Pipelines, Petrochemicals, Fertilizers, Fabrication yards, Refineries, and Nuclear operations.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you mobilize for an inspection project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depending on the location and project scale, our certified teams can typically mobilize within 24 to 48 hours for urgent shutdown and maintenance requirements across the region.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide certified NDT personnel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we supply highly skilled and fully certified Level II & III NDT technicians, QA/QC engineers, and welding inspectors for short-term and long-term project deployments.",
      },
    },
    {
      "@type": "Question",
      name: "What is PWHT and when is it required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Post Weld Heat Treatment (PWHT) is a thermal process applied after welding. It is required to relieve residual stresses induced by welding, reducing the likelihood of brittle fracture and stress corrosion cracking.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle both onsite and offsite inspections?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We are equipped with portable, advanced NDT equipment allowing us to perform rigorous inspections directly at your facility, active construction site, or fabrication yard.",
      },
    },
    {
      "@type": "Question",
      name: "How do I request a quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can request a quote by filling out the contact form on our website, sending an email to our core team, or calling us directly at +91 98415 06600. We will promptly assess your requirements.",
      },
    },
  ],
};

// ─── Service Schema Generator ────────────────────────────────────────────────
export function generateServiceSchemas(services) {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    description: service.detailedDesc,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: `${SITE_URL}/services#service-${service.id}`,
  }));
}

// ─── Breadcrumb Schema Generator ─────────────────────────────────────────────
export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url ? `${SITE_URL}${item.url}` : undefined,
    })),
  };
}

// ─── Per-Page SEO Meta Data ──────────────────────────────────────────────────
export const pageSEO = {
  home: {
    title: "Techno NDT Technical Services | NDT Inspection & Testing in Chennai, India",
    description: "Techno NDT provides professional Non-Destructive Testing (NDT) services including Radiographic Testing, Ultrasonic Testing, PWHT, MPT, PT & industrial inspection in Chennai, India. Get a free quote today.",
    keywords: "NDT services Chennai, non-destructive testing India, radiographic testing, ultrasonic testing, PWHT services, magnetic particle testing, liquid penetrant testing, welding inspection, industrial inspection Chennai, NDT company India, pipeline inspection, fabrication inspection, manpower supply NDT",
    canonical: "/",
    breadcrumbs: [{ name: "Home", url: "/" }],
  },
  about: {
    title: "About Us | Techno NDT Technical Services – Trusted NDT Partner Since 2022",
    description: "Learn about Techno NDT Technical Services — a leading NDT inspection company in Chennai, India since 2022. We deliver precision-driven testing, certified technicians, and reliable industrial inspection solutions.",
    keywords: "about Techno NDT, NDT company Chennai, industrial inspection company India, certified NDT technicians, NDT services provider, quality inspection partner",
    canonical: "/about",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "About Us" }],
  },
  services: {
    title: "NDT Services | RT, UT, PT, MPT, PWHT & Industrial Inspection – Techno NDT",
    description: "Explore our comprehensive NDT services: Radiographic Testing (RT), Ultrasonic Testing (UT), Liquid Penetrant Testing (PT), Magnetic Particle Testing (MPT), PWHT, welding inspection, pipeline inspection & more.",
    keywords: "radiographic testing services, ultrasonic testing services, liquid penetrant testing, magnetic particle testing, PWHT stress relieving, welding inspection services, visual testing, industrial inspection, pipeline inspection, fabrication inspection, NDT manpower supply, NDT services India",
    canonical: "/services",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Services" }],
  },
  portfolio: {
    title: "Our Portfolio | Industrial NDT Projects – Techno NDT Technical Services",
    description: "View our portfolio of completed NDT projects across power generation, oil & gas, petrochemicals, refineries, and fabrication industries. Techno NDT delivers proven results.",
    keywords: "NDT project portfolio, industrial inspection projects, NDT case studies, power plant inspection, oil gas pipeline testing, petrochemical inspection, refinery NDT services",
    canonical: "/portfolio",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Portfolio" }],
  },
  gallery: {
    title: "Gallery | NDT Equipment & Facilities – Techno NDT Technical Services",
    description: "Explore photos of our state-of-the-art NDT equipment, testing facilities, certified technicians, and on-site industrial inspection operations at Techno NDT.",
    keywords: "NDT equipment gallery, industrial testing photos, NDT facilities, on-site inspection images, NDT technicians at work, radiographic testing equipment",
    canonical: "/gallery",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Gallery" }],
  },
  contact: {
    title: "Contact Us | Techno NDT Technical Services – Get a Free Quote",
    description: "Contact Techno NDT Technical Services for NDT inspection quotes, project consultations, or emergency call-outs. Call +91 98415 06600 or email us. Located in Chennai, India.",
    keywords: "contact Techno NDT, NDT quote request, NDT inspection Chennai contact, industrial testing enquiry, NDT services phone number, NDT email contact",
    canonical: "/contact",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Contact Us" }],
  },
  privacyPolicy: {
    title: "Privacy Policy | Techno NDT Technical Services",
    description: "Read the privacy policy of Techno NDT Technical Services. Learn how we collect, use, and protect your personal and business information.",
    keywords: "Techno NDT privacy policy, data protection, information security",
    canonical: "/privacy-policy",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Privacy Policy" }],
  },
  terms: {
    title: "Terms & Conditions | Techno NDT Technical Services",
    description: "Review the terms and conditions governing the use of services provided by Techno NDT Technical Services, including liability, intellectual property, and governing law.",
    keywords: "Techno NDT terms conditions, service agreement, NDT terms of service",
    canonical: "/terms-and-conditions",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Terms & Conditions" }],
  },
  refundPolicy: {
    title: "Refund Policy | Techno NDT Technical Services",
    description: "Understand the refund and cancellation policy for NDT inspection services provided by Techno NDT Technical Services, including eligibility and process.",
    keywords: "Techno NDT refund policy, NDT service cancellation, inspection refund eligibility",
    canonical: "/refund-policy",
    breadcrumbs: [{ name: "Home", url: "/" }, { name: "Refund Policy" }],
  },
};

export { SITE_URL, COMPANY_NAME };
