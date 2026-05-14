import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import aboutImg from "../../assets/aboutus/about-01.png";
import { CircularText } from "../ui/circular-text";

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
            src={aboutImg} 
            alt="Techno NDT inspection equipment" 
            className="w-full h-full object-cover"
          />
          {/* Decorative Corner with CircularText */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-background transition-colors duration-500 rounded-bl-[2.5rem] flex items-center justify-center p-2">
            <div className="relative w-full h-full flex items-center justify-center">
              <CircularText 
                text="TECHNO NDT ★ SINCE 2022 ★ " 
                spinDuration={25} 
                className="!w-full !h-full text-accent font-black"
                textClassName="text-[9px]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xl font-black text-accent leading-none">4+</span>
                <span className="text-[5px] font-bold text-ink uppercase tracking-wider mt-0.5">Years</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
