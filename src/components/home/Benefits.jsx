import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  TrendingDown, 
  Lock, 
  Handshake, 
  Zap, 
  AlertTriangle, 
  Award, 
  Coins 
} from 'lucide-react';

const benefits = [
  {
    title: "Regulatory Compliance",
    description: "Meeting all client and statutory requirements seamlessly.",
    icon: ShieldCheck,
    tag: "Security"
  },
  {
    title: "Cost-Effective Solutions",
    description: "High-quality inspection without stretching your budget.",
    icon: TrendingDown,
    tag: "Finance"
  },
  {
    title: "Long-Term Asset Protection",
    description: "Extending the lifespan of your critical infrastructure.",
    icon: Lock,
    tag: "Value"
  },
  {
    title: "Trusted Support",
    description: "Professional service support you can rely on daily.",
    icon: Handshake,
    tag: "Partnership"
  },
  {
    title: "Better Safety",
    description: "Significantly reducing workplace hazards and risks.",
    icon: Zap,
    tag: "Impact"
  },
  {
    title: "Reduced Failures",
    description: "Preventing costly operational breakdowns and downtime.",
    icon: AlertTriangle,
    tag: "Efficiency"
  },
  {
    title: "Improved Quality",
    description: "Elevating the structural standards of your projects.",
    icon: Award,
    tag: "Quality"
  },
  {
    title: "Cost Savings",
    description: "Long-term financial benefits through preventive care.",
    icon: Coins,
    tag: "ROI"
  }
];

export default function Benefits() {
  return (
    <section className="py-2 bg-secondary/30 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-8 gap-8">
          <div className="max-w-2xl" data-aos="fade-right">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Benefits</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black text-ink">
              The Value We Bring To Your Business
            </h3>
          </div>
          <p className="text-ink-soft max-w-md lg:text-right" data-aos="fade-left">
            Beyond inspection, we provide the peace of mind and operational excellence required for modern industrial success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-8 rounded-[2rem] bg-background border border-border hover:border-accent transition-all duration-700 ease-out h-full flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-2">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-ink text-cream flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {benefit.tag}
                  </span>
                </div>
                
                <h4 className="text-lg font-heading font-bold text-ink mb-3">
                  {benefit.title}
                </h4>
                <p className="text-ink-soft text-sm leading-relaxed mt-auto">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
