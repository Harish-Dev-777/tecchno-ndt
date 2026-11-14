import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ServiceDetail({ service, index }) {
  const [showModal, setShowModal] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    if (showModal) {
      // Lock scroll and stop Lenis if it exists
      document.body.style.overflow = 'hidden';
      if (window.lenis) window.lenis.stop();
    } else {
      // Unlock scroll and start Lenis
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
    }

    return () => {
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
    };
  }, [showModal]);

  return (
    <div 
      id={`service-${service.id}`} 
      className={`scroll-mt-32 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-10 items-center py-1`}
    >
      <div className="flex-1 w-full" data-aos={isEven ? 'fade-right' : 'fade-left'}>
        <span className="font-heading font-black text-6xl md:text-8xl text-ink/10 block mb-4">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="font-heading font-black text-3xl md:text-4xl text-ink mb-3">
          {service.name}
        </h2>
        <p className="text-xl font-bold text-accent mb-3 leading-snug">
          {service.shortDesc}
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4 font-medium">
          {service.detailedDesc}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <Link 
            to="/contact" 
            state={{ selectedService: service.name }}
            className="inline-flex items-center justify-center gap-2 bg-accent text-white hover:bg-[#25D366] w-full sm:w-64 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-lg"
          >
            Request this service
          </Link>

          {service.longDesc && (
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center gap-2 bg-ink text-white hover:bg-[#25D366] w-full sm:w-64 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-lg group"
            >
              Read More 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 w-full" data-aos={isEven ? 'fade-left' : 'fade-right'}>
        <div className="grid grid-cols-2 gap-4">
          <img 
            src={service.images[0]} 
            alt={`${service.alt} - Primary view`} 
            loading="lazy"
            className="w-full aspect-[4/5] object-cover rounded-[2rem] rounded-tl-none shadow-lg"
          />
          <img 
            src={service.images[1]} 
            alt={`${service.alt} - Technical detail`} 
            loading="lazy"
            className="w-full aspect-[4/5] object-cover rounded-[2rem] rounded-br-none shadow-lg mt-4"
          />
        </div>
      </div>

      {/* Detailed Content Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[200] flex items-start justify-center p-4 sm:p-6 pt-24 sm:pt-32">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-background w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-border flex items-center justify-between bg-secondary">
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-ink pr-8">
                  {service.name}
                </h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/20 hover:bg-accent/90 hover:scale-110 hover:rotate-90 transition-all duration-300 active:scale-95 shrink-0"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div 
                className="p-6 sm:p-10 overflow-y-auto overflow-x-hidden bg-background flex-1 overscroll-contain custom-scrollbar"
                data-lenis-prevent="true"
              >
                <div className="prose prose-ink max-w-none">
                  {service.longDesc.split('\n\n').map((para, i) => (
                    <p key={i} className="text-lg text-ink-soft leading-relaxed mb-6 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 sm:p-8 bg-secondary border-t border-border flex justify-end">
                <button 
                  onClick={() => setShowModal(false)}
                  className="bg-ink text-white px-10 py-3 rounded-full font-bold hover:bg-[#25D366] transition-all shadow-lg"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
