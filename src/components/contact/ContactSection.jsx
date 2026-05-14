import { Phone, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "../common/Icons";
import ContactFormCard from "../common/ContactFormCard";

export default function ContactSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        <div data-aos="fade-right">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-ink mb-10">
            Get In Touch
          </h2>

          <div className="space-y-8 mb-12">
            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="text-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl text-ink mb-2">Corporate Office</h4>
                <p className="text-ink-soft leading-relaxed">No. 981-B, 3rd Main Road,<br/> 4th Cross Street, Mathur, MMDA, <br/> Manali, Chennai – 600068</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="text-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl text-ink mb-2">Direct Lines</h4>
                <p className="text-ink-soft">+91 98415 06600 <br/> +91 91769 76225</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="text-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl text-ink mb-2">Email Channels</h4>
                <p className="text-ink-soft">technondtfinance@gmail.com <br/> technondt2022@gmail.com</p>
              </div>
            </div>
          </div>

          <a 
            href="https://wa.me/919841506600"
            target="_blank"
            rel="noreferrer" 
            className="group relative z-10 flex w-full sm:w-auto cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-[#25D366] bg-[#25D366] px-8 py-4 text-sm font-bold tracking-wide text-white shadow-xl transition-colors duration-300 hover:border-white hover:text-ink before:absolute before:w-full before:-left-full hover:before:left-0 before:rounded-full before:bg-white before:transition-all before:duration-700 hover:before:scale-150 hover:before:duration-700 before:-z-10 before:aspect-square"
          >
            <WhatsAppIcon className="w-6 h-6" />
            WhatsApp Us
          </a>

          {/* Google Map Embedded */}
          <div className="mt-16 w-full h-[300px] rounded-3xl overflow-hidden shadow-lg border border-border">
            <iframe 
              title="Techno NDT Location"
              src="https://www.google.com/maps?q=Karumari+Amman+Koil+Street,+Manali,+Tamil+Nadu+600068&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        {/* Form Side */}
        <div data-aos="fade-left">
          <ContactFormCard 
            title="Start Your Project" 
            subtitle="Discussion" 
            highlightWord="Discussion"
          />
        </div>

      </div>
    </section>
  );
}
