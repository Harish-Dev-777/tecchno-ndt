import SEOHead from "../components/common/SEOHead";
import { pageSEO } from "../data/seoData";
import GalleryGrid from "../components/gallery/GalleryGrid";

export default function GalleryPage() {
  const seo = pageSEO.gallery;

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        breadcrumbs={seo.breadcrumbs}
      />
      <div className="w-full pt-[88px] bg-background min-h-screen pb-12 transition-colors duration-500">
        
        {/* Page Hero */}
        <section className="py-2 sm:py-4 bg-secondary text-ink relative transition-colors duration-500">
          <div className="absolute inset-0 bg-noise opacity-30"></div>
          <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center" data-aos="fade-up">
            <h1 className="font-heading font-black text-5xl md:text-6xl mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-ink-soft max-w-2xl mx-auto">
              Explore our state-of-the-art NDT equipment, advanced testing facilities, and dedicated inspection teams in action across industrial sites.
            </p>
          </div>
        </section>

        <GalleryGrid />
        
      </div>
    </>
  );
}
