import { useEffect } from "react";
import { SITE_URL, generateBreadcrumbSchema } from "../../data/seoData";

/**
 * SEOHead — Dynamically sets per-page meta tags, canonical URL, OG tags, and JSON-LD structured data.
 *
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description (150–160 chars ideal)
 * @param {string} props.keywords - Comma-separated keywords
 * @param {string} props.canonical - Canonical path, e.g. "/about"
 * @param {Array} [props.breadcrumbs] - Array of { name, url } objects for BreadcrumbList schema
 * @param {Array} [props.schemas] - Array of JSON-LD schema objects to inject
 */
export default function SEOHead({ title, description, keywords, canonical, breadcrumbs, schemas = [] }) {
  useEffect(() => {
    // ── Title ──
    document.title = title;

    // ── Meta tags helper ──
    const setMeta = (nameOrProp, content, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${nameOrProp}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, nameOrProp);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // ── Standard Meta ──
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);

    // ── Canonical ──
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", `${SITE_URL}${canonical}`);

    // ── Open Graph ──
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", `${SITE_URL}${canonical}`, true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "Techno NDT Technical Services", true);
    setMeta("og:locale", "en_IN", true);
    setMeta("og:image", `${SITE_URL}/og-image.jpg`, true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:image:alt", "Techno NDT Technical Services – Professional NDT Inspection & Testing", true);

    // ── Twitter Card ──
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", `${SITE_URL}/og-image.jpg`);
    setMeta("twitter:image:alt", "Techno NDT Technical Services – Professional NDT Inspection & Testing");

    // ── Robots ──
    setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // ── JSON-LD Structured Data ──
    // Remove any previously injected SEO scripts
    document.querySelectorAll('script[data-seo-jsonld]').forEach((el) => el.remove());

    const allSchemas = [...schemas];

    // Add breadcrumbs schema if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      allSchemas.push(generateBreadcrumbSchema(breadcrumbs));
    }

    allSchemas.forEach((schema, i) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", `seo-${i}`);
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // ── Cleanup ──
    return () => {
      document.querySelectorAll('script[data-seo-jsonld]').forEach((el) => el.remove());
    };
  }, [title, description, keywords, canonical, breadcrumbs, schemas]);

  return null;
}
