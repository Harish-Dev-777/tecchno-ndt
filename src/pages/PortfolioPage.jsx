import SEOHead from "../components/common/SEOHead";
import { pageSEO } from "../data/seoData";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";

export default function PortfolioPage() {
  const seo = pageSEO.portfolio;

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        breadcrumbs={seo.breadcrumbs}
      />
      <div className="w-full pt-[88px] bg-background transition-colors duration-500">
        
        {/* Page Hero */}
        <section className="py-4 sm:py-6 bg-secondary text-ink transition-colors duration-500">
          <div className="max-w-[1400px] mx-auto px-6 text-center" data-aos="fade-up">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Track Record</span>
            <h1 className="font-heading font-black text-5xl md:text-6xl mb-6">
              Our NDT Project Portfolio
            </h1>
            <p className="text-xl text-ink-soft max-w-2xl mx-auto leading-relaxed">
              Delivering robust NDT results across power generation, oil &amp; gas, petrochemicals, refineries, and other highly specialized and critically demanding industrial landscapes.
            </p>
          </div>
        </section>

        {/* Grid Iteration */}
        <PortfolioGrid />

      </div>
    </>
  );
}
