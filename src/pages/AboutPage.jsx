import SEOHead from "../components/common/SEOHead";
import { pageSEO, organizationSchema } from "../data/seoData";
import WhyChooseUs from "../components/about/WhyChooseUs";
import VisionMission from "../components/about/VisionMission";
import Benefits from "../components/about/Benefits";
import ClientsGrid from "../components/about/ClientsGrid";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { WhatsAppIcon } from "../components/common/Icons";

export default function AboutPage() {
  const seo = pageSEO.about;

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        breadcrumbs={seo.breadcrumbs}
        schemas={[organizationSchema]}
      />
      <div className="w-full pt-[88px]">
        
        {/* Page Hero */}
        <section className="py-4 sm:py-6 bg-secondary text-ink transition-colors duration-500">
          <div className="max-w-[1400px] mx-auto px-6 text-center" data-aos="fade-up">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="font-heading font-black text-5xl md:text-6xl">
              About Us
            </h1>
            <p className="mt-6 text-xl text-ink-soft max-w-2xl mx-auto leading-relaxed">
              Trusted NDT inspection partner delivering precision-driven testing and certified technician deployment across India since 2022.
            </p>
          </div>
        </section>

        <WhyChooseUs />
        <VisionMission />
        <Benefits />
        <ClientsGrid />

        {/* Support Card Header inline */}
        <section className="py-4 bg-background transition-colors duration-500">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl transition-colors duration-500" data-aos="fade-up">
              <div className="text-ink text-center md:text-left">
                <h3 className="font-heading font-black text-3xl md:text-4xl mb-4">Need immediate support?</h3>
                <p className="text-ink/70 text-lg">Our engineering team is ready to deploy.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
                <a 
                  href="tel:+919841506600" 
                  className="group relative z-10 flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-accent px-8 py-4 text-sm font-bold tracking-wide text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                  aria-label="Call Techno NDT Technical Services"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>

                <a 
                  href="https://wa.me/919841506600" 
                  target="_blank"
                  rel="noreferrer"
                  className="group relative z-10 flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold tracking-wide text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                  aria-label="Chat on WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
}
