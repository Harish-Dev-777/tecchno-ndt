import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { gallery } from "../../data/gallery";

export default function GalleryMarquee() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use only images from data for the slides display
  const slides = gallery.map((item) => ({ src: item.src, alt: item.alt }));

  // Create an extended array for the marquee to loop seamlessly
  const marqueeItems = [...gallery, ...gallery, ...gallery];

  const handleImageClick = (index) => {
    // Determine original index mapping if clicked from cloned array
    const actualIndex = index % gallery.length;
    setCurrentIndex(actualIndex);
    setIsOpen(true);
  };

  return (
    <section className="py-2 bg-background overflow-hidden transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-6 mb-4" data-aos="fade-up">
        <span className="text-accent font-bold tracking-widest uppercase text-sm block mb-4">Gallery</span>
        <h2 className="font-heading font-black text-4xl md:text-5xl text-ink">
          Our Work in the Field
        </h2>
      </div>

      <div className="relative w-full mask-edges-dark overflow-hidden py-4">
        {/* We use a paused class state based on whether modal is open */}
        <div 
          className={`flex w-max gap-4 px-2 hover:[animation-play-state:paused] ${isOpen ? '[animation-play-state:paused]' : 'animate-marquee-slow'}`}
        >
          {marqueeItems.map((img, i) => (
            <div 
              key={`g-${img.id}-${i}`}
              onClick={() => handleImageClick(i)}
              className="relative w-[320px] sm:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden cursor-zoom-in group shrink-0"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-cream text-ink font-bold px-4 py-2 rounded-full text-sm">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={currentIndex}
          slides={slides}
        />
      )}
    </section>
  );
}
