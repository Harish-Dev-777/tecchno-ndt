import { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "../../lib/utils";

const faqs = [
  { question: "What is Non-Destructive Testing (NDT)?", answer: "Non-Destructive Testing (NDT) is a wide group of analysis techniques used in science and technology industry to evaluate the properties of a material, component or system without causing damage." },
  { question: "Which NDT methods do you offer?", answer: "We offer Radiographic Testing (RT), Ultrasonic Testing (UT & UTG), Liquid Penetrant Testing (PT), Magnetic Particle Testing (MPT), Visual Testing (VT), and comprehensive welding inspection services." },
  { question: "What industries do you serve?", answer: "We serve a diverse range of critical industries including Power Generation, Oil & Gas / Pipelines, Petrochemicals, Fertilizers, Fabrication yards, Refineries, and Nuclear operations." },
  { question: "How quickly can you mobilize for an inspection project?", answer: "Depending on the location and project scale, our certified teams can typically mobilize within 24 to 48 hours for urgent shutdown and maintenance requirements across the region." },
  { question: "Do you provide certified NDT personnel?", answer: "Yes, we supply highly skilled and fully certified Level II & III NDT technicians, QA/QC engineers, and welding inspectors for short-term and long-term project deployments." },
  { question: "What is PWHT and when is it required?", answer: "Post Weld Heat Treatment (PWHT) is a thermal process applied after welding. It is required to relieve residual stresses induced by welding, reducing the likelihood of brittle fracture and stress corrosion cracking." },
  { question: "Can you handle both onsite and offsite inspections?", answer: "Absolutely. We are equipped with portable, advanced NDT equipment allowing us to perform rigorous inspections directly at your facility, active construction site, or fabrication yard." },
  { question: "How do I request a quote?", answer: "You can request a quote by filling out the contact form on our website, sending an email to our core team, or calling us directly at +91 98415 06600. We will promptly assess your requirements." }
];

function FAQItem({ faq, isOpen, onClick }) {
  const contentRef = useRef(null);

  return (
    <div className="border border-border bg-secondary rounded-2xl overflow-hidden transition-all duration-300 mb-4">
      <dt>
        <button
          onClick={onClick}
          className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
        >
          <span className={cn("font-heading font-bold text-lg md:text-xl pr-8 transition-colors", isOpen ? "text-accent" : "text-ink")}>
            {faq.question}
          </span>
          <span className={cn("shrink-0 p-2 rounded-full transition-colors", isOpen ? "bg-accent/10 text-accent" : "bg-card text-ink")}>
            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </span>
        </button>
      </dt>
      <dd
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        className="transition-all duration-500 ease-in-out opacity-100 overflow-hidden"
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8 text-ink-soft leading-relaxed">
          {faq.answer}
        </div>
      </dd>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-2 sm:py-4 bg-background transition-colors duration-500">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-8" data-aos="fade-up">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Queries Answered</span>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-ink">
            Frequently Asked Questions
          </h2>
        </div>

        <dl className="space-y-4" data-aos="fade-up" data-aos-delay="100">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </dl>
      </div>
    </section>
  );
}
