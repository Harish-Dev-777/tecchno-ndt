import { useEffect } from "react";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";

export default function PortfolioPage() {
  useEffect(() => {
    document.title = "Portfolio | Techno NDT Technical Services";
  }, []);

  return (
    <div className="w-full pt-[88px] bg-background transition-colors duration-500">
      
      {/* Page Hero */}
      <section className="py-20 sm:py-32 bg-secondary border-b border-border transition-colors duration-500">
        <div className="max-w-[1400px] mx-auto px-6" data-aos="fade-up">
          <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Track Record</span>
          <h1 className="font-heading font-black text-5xl md:text-6xl text-ink mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-ink-soft max-w-2xl leading-relaxed font-medium">
            Delivering robust NDT results across various highly specialized and critically demanding industrial landscapes.
          </p>
        </div>
      </section>

      {/* Grid Iteration */}
      <PortfolioGrid />

    </div>
  );
}
