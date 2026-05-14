import { useEffect } from "react";
import GalleryGrid from "../components/gallery/GalleryGrid";

export default function GalleryPage() {
  useEffect(() => {
    document.title = "Gallery | Techno NDT Technical Services";
  }, []);

  return (
    <div className="w-full pt-[88px] bg-background min-h-screen pb-24 transition-colors duration-500">
      
      {/* Page Hero */}
      <section className="py-20 sm:py-32 bg-ink text-cream relative transition-colors duration-500">
        <div className="absolute inset-0 bg-noise opacity-30"></div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center" data-aos="fade-up">
          <h1 className="font-heading font-black text-5xl md:text-6xl mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-cream/70 max-w-2xl mx-auto">
            Explore our state-of-the-art facilities, advanced equipment, and dedicated teams in action.
          </p>
        </div>
      </section>

      <GalleryGrid />
      
    </div>
  );
}
