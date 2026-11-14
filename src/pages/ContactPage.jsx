import SEOHead from "../components/common/SEOHead";
import { pageSEO, localBusinessSchema } from "../data/seoData";
import ContactSection from "../components/contact/ContactSection";

export default function ContactPage() {
  const seo = pageSEO.contact;

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        breadcrumbs={seo.breadcrumbs}
        schemas={[localBusinessSchema]}
      />
      <div className="w-full pt-[88px] bg-cream">
        
        {/* Page Hero */}
        <section className="py-4 sm:py-6 bg-secondary text-ink relative">
          <div className="absolute inset-0 bg-noise opacity-50"></div>
          <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center" data-aos="fade-up">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Reach Out</span>
            <h1 className="font-heading font-black text-5xl md:text-6xl mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-ink-soft max-w-2xl mx-auto">
              Our engineering and support teams are available for NDT consultations, inspection scheduling, project quotations, and emergency call-outs across India.
            </p>
          </div>
        </section>

        <ContactSection />
        
      </div>
    </>
  );
}
