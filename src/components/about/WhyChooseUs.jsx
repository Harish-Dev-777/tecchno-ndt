import { Shield, Users, Compass, HardHat } from "lucide-react";

const features = [
  { icon: Shield, title: "Quality Assurance", desc: "Rigorous ISO-compliant testing procedures guaranteeing 100% accurate results." },
  { icon: Users, title: "Certified Experts", desc: "Highly skilled ASNT Level II & III technicians with decade-spanning experience." },
  { icon: Compass, title: "Advanced Technology", desc: "Utilizing modern Phased Array, Digital RT, and precise UT/PT equipment." },
  { icon: HardHat, title: "Safety-First Approach", desc: "Uncompromising safety standards adhering to top global nuclear & O&G protocols." }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-background transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div data-aos="fade-right" className="relative pl-6 sm:pl-10">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-accent rounded-full"></div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink leading-tight mb-8">
            Uncompromised Quality & Technical Expertise.
          </h2>
          <p className="text-xl text-ink-soft leading-relaxed italic border-l-4 border-accent/20 pl-6">
            "We deliver precision-driven NDT solutions with uncompromised quality, technical expertise, and a commitment to industrial safety. Our reliable service, advanced technology, and experienced professionals make us a trusted partner for inspection excellence."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12" data-aos="fade-left">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="space-y-4">
                <div className="w-14 h-14 bg-ink text-background rounded-2xl flex items-center justify-center transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-ink">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
