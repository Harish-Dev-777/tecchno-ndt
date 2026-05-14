import { useEffect } from "react";
import WhyChooseUs from "../components/about/WhyChooseUs";
import VisionMission from "../components/about/VisionMission";
import Benefits from "../components/about/Benefits";
import ClientsGrid from "../components/about/ClientsGrid";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Techno NDT Technical Services";
  }, []);

  return (
    <div className="w-full pt-[88px]">
      
      {/* Page Hero */}
      <section className="py-20 sm:py-32 bg-secondary border-b border-border transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto px-6 text-center" data-aos="fade-up">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
          <h1 className="font-heading font-black text-5xl md:text-6xl text-ink">
            About Us
          </h1>
        </div>
      </section>

      <WhyChooseUs />
      <VisionMission />
      <Benefits />
      <ClientsGrid />

      {/* Support Card Header inline */}
      <section className="py-24 bg-background transition-colors duration-500">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-ink p-10 md:p-16 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl transition-colors duration-500" data-aos="fade-up">
            <div className="text-cream text-center md:text-left">
              <h3 className="font-heading font-black text-3xl md:text-4xl mb-4">Need immediate support?</h3>
              <p className="text-cream/70 text-lg">Our engineering team is ready to deploy.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <a 
                href="tel:+919841506600" 
                className="group relative z-10 flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-border bg-card px-8 py-4 text-sm font-bold tracking-wide text-ink shadow-xl transition-colors duration-300 hover:border-accent hover:text-white before:absolute before:w-full before:-left-full hover:before:left-0 before:rounded-full before:bg-accent before:transition-all before:duration-700 hover:before:scale-150 hover:before:duration-700 before:-z-10 before:aspect-square"
                aria-label="Call Us"
              >
                <Phone className="w-5 h-5 transition-colors" />
                Call Now
              </a>
              <a 
                href="https://wa.me/919841506600" 
                target="_blank" 
                rel="noreferrer"
                className="group relative z-10 flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-[#25D366] bg-[#25D366] px-8 py-4 text-sm font-bold tracking-wide text-white shadow-xl transition-colors duration-300 hover:border-white hover:text-ink before:absolute before:w-full before:-left-full hover:before:left-0 before:rounded-full before:bg-white before:transition-all before:duration-700 hover:before:scale-150 hover:before:duration-700 before:-z-10 before:aspect-square"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
