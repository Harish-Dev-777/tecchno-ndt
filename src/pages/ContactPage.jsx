import { useEffect } from "react";
import ContactSection from "../components/contact/ContactSection";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact | Techno NDT Technical Services";
  }, []);

  return (
    <div className="w-full pt-[88px] bg-cream">
      
      {/* Page Hero */}
      <section className="py-20 sm:py-32 bg-ink text-cream relative">
        <div className="absolute inset-0 bg-noise opacity-50"></div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center" data-aos="fade-up">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Reach Out</span>
          <h1 className="font-heading font-black text-5xl md:text-6xl mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-cream/70 max-w-2xl mx-auto">
            Our engineering and support teams are available for consultations, scheduling, and emergency call-outs.
          </p>
        </div>
      </section>

      <ContactSection />
      
    </div>
  );
}
