import { Award, TrendingUp, Cpu, Users, Clock, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: Users, title: "Qualified Staff", desc: "Rigorous internal auditing guarantees our ASNT certified staff always perform to global code standards." },
  { icon: TrendingUp, title: "Proven Track Record", desc: "We've accurately mapped critical systems for major PSUs like ONGC, IOCL, and HPCL." },
  { icon: Cpu, title: "Advanced Equipment", desc: "Deployment of state-of-the-art defect evaluation instruments." },
  { icon: Clock, title: "On-time Delivery", desc: "Streamlined inspection processes minimizing costly project downtime." },
  { icon: ShieldCheck, title: "Safety Compliance", desc: "A flawless HSE record built on continuous safety workshops and strict PPE requirements." },
  { icon: Award, title: "Multi-Industry Experience", desc: "From hyper-pressurized fertilizer tanks to heavy refinery pipelines, we cover it all." }
];

export default function Benefits() {
  return (
    <section className="py-4 sm:py-6 bg-secondary transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-8 text-center" data-aos="fade-up">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-ink">
            Why Work With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-card p-8 lg:p-10 rounded-3xl group hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-accent/10 group-hover:bg-accent text-accent group-hover:text-white rounded-xl flex items-center justify-center transition-colors mb-8">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-ink mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
