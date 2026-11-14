import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  FileText, 
  HeartHandshake, 
  ShieldCheck, 
  Factory, 
  Clock,
  Zap
} from 'lucide-react';

const features = [
  {
    title: "Skilled Inspection Team",
    description: "Certified experts with years of industrial field experience.",
    icon: Users,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Accurate Testing",
    description: "Precision-driven results using state-of-the-art NDT equipment.",
    icon: Target,
    color: "bg-red-500/10 text-red-500"
  },
  {
    title: "Fast Reporting",
    description: "Quick turnaround times for comprehensive inspection reports.",
    icon: FileText,
    color: "bg-amber-500/10 text-amber-500"
  },
  {
    title: "Reliable Service",
    description: "Consistent quality and dependable support for critical assets.",
    icon: HeartHandshake,
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    title: "Compliance Standards",
    description: "Strict adherence to international industrial safety norms.",
    icon: ShieldCheck,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "On-Site & Off-Site",
    description: "Versatile inspection solutions at your facility or our lab.",
    icon: Factory,
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical assistance for urgent requirements.",
    icon: Clock,
    color: "bg-cyan-500/10 text-cyan-500"
  },
  {
    title: "Advanced Technology",
    description: "Utilizing the latest digital NDT tools for superior detection.",
    icon: Zap,
    color: "bg-indigo-500/10 text-indigo-500"
  }
];

export default function Features() {
  return (
    <section className="py-2 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Features</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-black text-ink mb-6">
            Why Choose Techno NDT?
          </h3>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-border bg-card hover:border-accent/30 transition-all duration-700 ease-out group relative overflow-hidden"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon className="w-7 h-7" />
              </div>
              
              <h4 className="text-xl font-heading font-bold text-ink mb-3 group-hover:text-accent transition-colors">
                {feature.title}
              </h4>
              <p className="text-ink-soft text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
