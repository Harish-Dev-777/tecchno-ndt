import { useEffect } from "react";
import { services } from "../data/services";
import ServiceDetail from "../components/services/ServiceDetail";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Services | Techno NDT Technical Services";
  }, []);

  return (
    <div className="w-full pt-[88px] bg-background transition-colors duration-500">
      
      {/* Page Hero */}
      <section className="py-20 sm:py-32 bg-ink text-cream border-b-4 border-accent transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto px-6" data-aos="fade-up">
          <h1 className="font-heading font-black text-5xl md:text-6xl mb-6">
            Our Services
          </h1>
          <p className="text-xl text-cream/70 max-w-2xl leading-relaxed">
            From radiographic testing to specialized manpower supply, our comprehensive suite of industrial NDT and inspection services ensures absolute structural integrity.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sticky Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32 bg-secondary p-6 rounded-3xl border border-border">
              <h3 className="font-heading font-bold text-xl text-ink mb-6 pb-4 border-b border-border">Jump to Service</h3>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.id}>
                    <a 
                      href={`#service-${s.id}`} 
                      className="text-ink-soft hover:text-accent font-medium text-sm transition-colors flex items-center justify-between group"
                    >
                      <span className="truncate pr-4">{s.name}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content (List of Detailed Services) */}
          <div className="flex-1 space-y-24 sm:space-y-32">
            {services.map((service, index) => (
              <ServiceDetail key={service.id} service={service} index={index} />
            ))}
          </div>

        </div>
      </div>
      
    </div>
  );
}
