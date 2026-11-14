import { useMemo } from "react";
import SEOHead from "../components/common/SEOHead";
import { pageSEO, generateServiceSchemas } from "../data/seoData";
import { services } from "../data/services";
import ServiceDetail from "../components/services/ServiceDetail";

export default function ServicesPage() {
  const seo = pageSEO.services;
  const serviceSchemas = useMemo(() => generateServiceSchemas(services), []);

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        breadcrumbs={seo.breadcrumbs}
        schemas={serviceSchemas}
      />
      <div className="w-full pt-[88px] bg-background transition-colors duration-500">
        
        {/* Page Hero */}
        <section className="py-4 sm:py-6 bg-secondary text-ink transition-colors duration-500">
          <div className="max-w-[1400px] mx-auto px-6 text-center" data-aos="fade-up">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Services</span>
            <h1 className="font-heading font-black text-5xl md:text-6xl mb-6">
              Our NDT & Inspection Services
            </h1>
            <p className="text-xl text-ink-soft max-w-2xl mx-auto leading-relaxed">
              From radiographic testing to specialized manpower supply, our comprehensive suite of industrial NDT and inspection services ensures absolute structural integrity for power plants, refineries, pipelines, and fabrication yards.
            </p>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-6 py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Mobile Sticky Navigation Bar */}
            <div className="lg:hidden sticky top-[88px] z-30 bg-background/95 backdrop-blur-md border-b border-border py-4 -mx-6 px-6 overflow-x-auto whitespace-nowrap scrollbar-hide mb-8">
              <ul className="flex gap-6">
                {services.map((s) => (
                  <li key={s.id}>
                    <a 
                      href={`#service-${s.id}`} 
                      className="text-ink-soft hover:text-accent font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sticky Sidebar Navigation (Desktop) */}
            <aside className="hidden lg:block w-72 shrink-0" aria-label="Service navigation">
              <nav className="sticky top-28 bg-white p-6 rounded-3xl border border-border shadow-sm" aria-label="Jump to service">
                <h2 className="font-heading font-bold text-xl text-ink mb-6 pb-4 border-b border-border uppercase tracking-tight">Jump to Service</h2>
                <ul className="space-y-3">
                  {services.map((s) => (
                    <li key={s.id}>
                      <a 
                        href={`#service-${s.id}`} 
                        className="text-ink-soft hover:text-accent font-medium text-sm transition-colors flex items-center justify-between group"
                      >
                        <span className="truncate pr-4">{s.name}</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300">&rarr;</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main Content (List of Detailed Services) */}
            <div className="flex-1 space-y-2">
              {services.map((service, index) => (
                <ServiceDetail key={service.id} service={service} index={index} />
              ))}
            </div>

          </div>
        </div>
        
      </div>
    </>
  );
}
