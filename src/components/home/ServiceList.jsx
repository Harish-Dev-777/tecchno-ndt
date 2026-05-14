import { Link } from "react-router-dom";
import { services } from "../../data/services";
import { Wrench, ShieldCheck, Activity, Search, Gauge, Box, Magnet, Eye, Layers, Settings, FileCheck, Hammer, Users } from "lucide-react";

// Helper to map index to an icon
const getIcon = (index) => {
  const icons = [Wrench, ShieldCheck, Activity, Search, Gauge, Box, Magnet, Eye, Layers, Settings, FileCheck, Hammer, Users];
  const Icon = icons[index % icons.length];
  return <Icon className="w-8 h-8" />;
};

export default function ServiceList() {
  return (
    <section className="py-24 sm:py-32 bg-background transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8" data-aos="fade-up">
          <div className="max-w-2xl">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-ink leading-tight">
              Comprehensive NDT <br/> & Inspection Services
            </h2>
          </div>
          <Link 
            to="/services" 
            className="group relative z-10 flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-border bg-card px-8 h-[48px] sm:h-[60px] text-sm font-bold tracking-wide text-ink shadow-xl transition-colors duration-300 hover:border-accent hover:text-white before:absolute before:w-full before:-left-full hover:before:left-0 before:rounded-full before:bg-accent before:transition-all before:duration-700 hover:before:scale-150 hover:before:duration-700 before:-z-10 before:aspect-square"
          >
            View All 13 Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, idx) => (
            <div 
              key={service.id} 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
              className="group bg-secondary p-8 lg:p-10 rounded-3xl border-l-[6px] border-transparent hover:border-accent hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex flex-col h-full shadow-sm"
            >
              <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center text-ink mb-8 shadow-sm group-hover:text-accent transition-colors">
                {getIcon(idx)}
              </div>
              <h3 className="font-heading font-bold text-2xl text-ink mb-4 leading-snug">
                {service.name}
              </h3>
              <p className="text-muted-foreground mb-8 flex-grow font-medium">
                {service.shortDesc}
              </p>
              <Link 
                to={`/services#service-${service.id}`}
                className="inline-flex items-center gap-2 font-bold text-sm tracking-wide text-ink group-hover:text-accent transition-colors mt-auto"
              >
                Learn More <span>&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
