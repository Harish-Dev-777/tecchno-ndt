import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { gallery } from "../../data/gallery";
import { Search } from "lucide-react";

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ["All", "NDT Testing", "Equipment", "Office"];

  const filteredImages = activeFilter === "All" 
    ? gallery 
    : gallery.filter(img => img.category === activeFilter);

  const slides = filteredImages.map(img => ({ src: img.src, alt: img.alt }));

  const openLightbox = (idx) => {
    setCurrentIndex(idx);
    setIsOpen(true);
  };

  return (
    <>
      <section className="py-4 max-w-[1400px] mx-auto px-6">
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                activeFilter === cat 
                  ? "bg-accent text-white shadow-lg scale-105" 
                  : "bg-secondary text-ink hover:bg-card border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out" 
          key={activeFilter}
        >
          {filteredImages.map((image, idx) => (
            <div 
              key={image.id}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-secondary animate-in fade-in zoom-in duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-accent/90 p-4 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                  <Search size={24} />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-bold uppercase tracking-wider bg-ink/60 px-2 py-1 rounded backdrop-blur-sm">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={currentIndex}
        slides={slides}
      />
    </>
  );
}
