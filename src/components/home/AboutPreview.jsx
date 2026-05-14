import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-24 sm:py-32 bg-background transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div data-aos="fade-right">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">About Us</span>
          <h2 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-ink leading-tight mb-8">
            Precision-Driven <br/> NDT Solutions <br/> Since 2022
          </h2>
          <p className="text-lg text-ink-soft mb-8 leading-relaxed">
            We in Techno NDT Services believe in continual improvement and customer satisfaction. Our objective is to render efficient service with a Concept of Quality to all kinds of industry, ensuring that Quality and Safety are achieved and maintained throughout every project we coordinate from Chennai.
          </p>
          
          <div className="flex items-center gap-4 text-ink font-bold mb-10">
            <CheckCircle2 className="text-[#25D366] w-6 h-6" />
            <p>Certified NDT Level II/III Technicians</p>
          </div>

          <Link 
            to="/about" 
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold h-[48px] sm:h-[60px] px-8 rounded-full transition-all"
          >
            Know More <span>&rarr;</span>
          </Link>
        </div>

        <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden" data-aos="fade-left">
          <img 
            src="https://images.unsplash.com/photo-1510156445373-c59807869614?w=1000&q=80" 
            alt="Techno NDT inspection equipment" 
            className="w-full h-full object-cover"
          />
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-background transition-colors duration-500 rounded-bl-[2.5rem] flex items-center justify-center p-4">
            <div className="w-full h-full rounded-full border-2 border-dashed border-accent animate-spin-slow"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
