import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import ContactFormCard from "../common/ContactFormCard";

export default function ContactForm() {
  return (
    <section className="py-2 sm:py-4 bg-background border-t border-border transition-colors duration-500" id="contact">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div data-aos="fade-right">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight text-ink">
            Ready to secure your industrial assets?
          </h2>
          <p className="text-ink/70 text-lg mb-6 max-w-xl font-medium">
            Reach out to our engineering team today for immediate mobilization, technical consultations, or service quotations tailored to your next critical shutdown.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="text-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl text-ink mb-2">Office</h4>
                <p className="text-ink-soft leading-relaxed">No. 981-B, 3rd Main Road,<br/> Mathur, Manali, Chennai</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="text-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl text-ink mb-2">Email</h4>
                <p className="text-ink-soft">technondt2022@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <ContactFormCard />

      </div>
    </section>
  );
}
