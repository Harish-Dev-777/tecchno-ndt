import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import ContactFormCard from "../common/ContactFormCard";

export default function ContactForm() {
  return (
    <section className="py-24 sm:py-32 bg-background border-t border-border transition-colors duration-500" id="contact">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div data-aos="fade-right">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-ink">
            Ready to secure your industrial assets?
          </h2>
          <p className="text-ink/70 text-lg mb-12 max-w-xl font-medium">
            Reach out to our engineering team today for immediate mobilization, technical consultations, or service quotations tailored to your next critical shutdown.
          </p>

          <div className="space-y-8 bg-secondary p-8 rounded-3xl border border-border mb-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="text-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1 text-ink">Head Office</h4>
                <p className="text-ink/60 leading-relaxed">No. 981-B, 3rd Main Road, 4th Cross Street, Mathur, MMDA, Manali, Chennai – 600068</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="text-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1 text-ink">Direct Lines</h4>
                <p className="text-ink/60 font-medium">+91 98415 06600 <br/> +91 91769 76225</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                <Mail className="text-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1 text-ink">Email Connect</h4>
                <p className="text-ink/60 font-bold break-all">technondtfinance@gmail.com <br/> technondt2022@gmail.com</p>
              </div>
            </div>
          </div>

          <a 
            href="https://wa.me/919841506600"
            target="_blank"
            rel="noreferrer" 
            className="group relative flex w-fit cursor-pointer items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold tracking-wide text-white shadow-[0_10px_20px_-5px_rgba(37,211,102,0.4)] transition-all duration-300 hover:bg-[#128C7E] hover:-translate-y-1 hover:shadow-[0_20px_30px_-10px_rgba(37,211,102,0.6)] active:scale-95"
          >
            {/* Pulsing ring effect on hover */}
            <div className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-0 group-hover:animate-ping pointer-events-none" />
            
            <svg 
              className="w-6 h-6 fill-current transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="relative z-10">Chat via WhatsApp</span>
          </a>

        </div>

        <ContactFormCard />

      </div>
    </section>
  );
}
