import SEOHead from "../components/common/SEOHead";
import { pageSEO, organizationSchema, localBusinessSchema, webSiteSchema, faqSchema } from "../data/seoData";
import Hero from "../components/home/Hero";
import ClientsMarquee from "../components/home/ClientsMarquee";
import ServiceList from "../components/home/ServiceList";
import PortfolioPreview from "../components/home/PortfolioPreview";
import AboutPreview from "../components/home/AboutPreview";
import GalleryMarquee from "../components/home/GalleryMarquee";
import FAQ from "../components/home/FAQ";
import ContactForm from "../components/home/ContactForm";
import Features from "../components/home/Features";
import Benefits from "../components/home/Benefits";

export default function HomePage() {
  const seo = pageSEO.home;

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        breadcrumbs={seo.breadcrumbs}
        schemas={[organizationSchema, localBusinessSchema, webSiteSchema, faqSchema]}
      />
      <div className="w-full">
        <Hero />
        <ClientsMarquee />
        <Features />
        <Benefits />
        <ServiceList />
        <PortfolioPreview />
        <AboutPreview />
        <GalleryMarquee />
        <FAQ />
        <ContactForm />
      </div>
    </>
  );
}
