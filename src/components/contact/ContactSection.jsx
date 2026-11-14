import { Phone, Mail, MapPin, Navigation, ExternalLink, Copy, Check, Info, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WhatsAppIcon } from "../common/Icons";
import ContactFormCard from "../common/ContactFormCard";

export default function ContactSection() {
  const [viewMode, setViewMode] = useState('roadmap'); // roadmap or satellite
  const [isCopied, setIsCopied] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  // Auto-hide overlay on small screens initially
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowOverlay(false);
      } else {
        setShowOverlay(true);
      }
    };
    
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mapBase = "https://www.google.com/maps?q=Techno+NDT+Solutions,+Manali,+Chennai&output=embed";
  const mapSrc = viewMode === 'satellite' ? `${mapBase}&t=k` : mapBase;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Techno NDT Solutions Location',
          text: 'Visit Techno NDT Solutions in Manali, Chennai.',
          url: 'https://maps.app.goo.gl/YourActualLinkIfKnown',
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      alert('Sharing not supported on this browser. Copy the address instead!');
    }
  };

  return (
    <section className="py-4 sm:py-6">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-8 sm:mb-10">
          
          {/* Left Side: Address & Info */}
          <div data-aos="fade-right">
            <h2 className="font-heading font-black text-4xl md:text-5xl text-ink mb-10">
              Get In Touch
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex gap-4 items-start">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl text-ink mb-2">Corporate Office</h4>
                  <p className="text-ink-soft leading-relaxed">No. 981-B, 3rd Main Road,<br/> 4th Cross Street, Mathur, MMDA, <br/> Manali, Chennai – 600068</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl text-ink mb-2">Direct Lines</h4>
                  <p className="text-ink-soft">+91 98415 06600 <br/> +91 91769 76225</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl text-ink mb-2">Email Channels</h4>
                  <p className="text-ink-soft">technondtfinance@gmail.com <br/> technondt2022@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              
              <button 
                onClick={handleShare}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-green-600 bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
              >
                <ExternalLink className="w-5 h-5" />
                Share Location
              </button>
            </div>
          </div>

          {/* Right Side: Form */}
          <div data-aos="fade-left">
            <ContactFormCard 
              title="Start Your Project" 
              subtitle="Discussion" 
              highlightWord="Discussion"
            />
          </div>
        </div>

        {/* Full Width Map Row with Interactive Overlay */}
        <div className="w-full relative group" data-aos="fade-up">
          <div className="w-full h-[400px] sm:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative">
            <iframe 
              key={viewMode}
              title="Techno NDT Location"
              src={mapSrc} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className={`transition-all duration-700 ${viewMode === 'roadmap' ? 'grayscale-[0.4] contrast-[1.1] hover:grayscale-0' : ''}`}
            ></iframe>

            {/* Map Controls (Top Right) */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex flex-wrap justify-end gap-2 z-30">
              <button 
                onClick={() => setShowOverlay(!showOverlay)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl font-bold text-[10px] sm:text-xs transition-all shadow-lg border border-white/20 backdrop-blur-md ${showOverlay ? 'bg-red-600 text-white border-red-600' : 'bg-green-600 text-white border-green-600'}`}
              >
                <Info className="w-3.5 h-3.5" />
                {showOverlay ? 'Hide Details' : 'Details'}
              </button>
              <div className="flex gap-2">
                <button 
                  onClick={() => setViewMode('roadmap')}
                  className={`px-3 sm:px-4 py-2 rounded-xl font-bold text-[10px] sm:text-xs transition-all shadow-lg border border-white/20 backdrop-blur-md bg-accent text-white ${viewMode === 'roadmap' ? 'ring-2 ring-white ring-offset-2 ring-offset-accent' : 'opacity-70 hover:opacity-100'}`}
                >
                  Standard
                </button>
                <button 
                  onClick={() => setViewMode('satellite')}
                  className={`px-3 sm:px-4 py-2 rounded-xl font-bold text-[10px] sm:text-xs transition-all shadow-lg border border-white/20 backdrop-blur-md bg-green-600 text-white ${viewMode === 'satellite' ? 'ring-2 ring-white ring-offset-2 ring-offset-green-600' : 'opacity-70 hover:opacity-100'}`}
                >
                  Satellite
                </button>
              </div>
            </div>

            {/* Map Overlay Card */}
            <AnimatePresence>
              {showOverlay && (
                <motion.div 
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.95 }}
                  className="absolute top-20 right-4 sm:top-24 sm:right-6 w-[calc(100%-2rem)] sm:w-[340px] bg-[#1A1A1A]/95 backdrop-blur-lg p-4 sm:p-6 rounded-[2rem] shadow-2xl border border-white/10 z-20"
                >
                  <button 
                    onClick={() => setShowOverlay(false)}
                    className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/10 transition-colors sm:hidden"
                  >
                    <X className="w-4 h-4 text-white/60" />
                  </button>

                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-xl flex items-center justify-center text-white shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm sm:text-base text-white leading-tight">Visit Our Office</h4>
                      <p className="text-[8px] sm:text-[10px] text-accent font-bold uppercase tracking-widest">Techno NDT Solutions</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-white/80 mb-4 sm:mb-6 leading-relaxed">
                    No. 981-B, 3rd Main Road, 4th Cross Street, Mathur, MMDA, Manali, Chennai – 600068
                  </p>

                  {/* Landmark Highlights */}
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-widest mb-2 opacity-60">Nearby Landmarks</p>
                    <ul className="space-y-1 sm:space-y-1.5">
                      <li className="flex items-center gap-2 text-[10px] sm:text-[11px] text-white/70">
                        <div className="w-1 h-1 rounded-full bg-accent" />
                        Manali Industrial Hub (2 mins)
                      </li>
                      <li className="flex items-center gap-2 text-[10px] sm:text-[11px] text-white/70">
                        <div className="w-1 h-1 rounded-full bg-accent" />
                        CPCL Refinery (5 mins)
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <a 
                      href="https://www.google.com/maps/dir//Techno+NDT+Solutions,+Manali,+Chennai"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 bg-accent text-white py-2.5 sm:py-3 rounded-xl text-[10px] sm:text-xs font-bold hover:bg-accent-dark transition-colors shadow-lg shadow-accent/20"
                    >
                      <Navigation className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                      Directions
                    </a>
                    <a 
                      href="https://maps.app.goo.gl/YourActualLinkIfKnown" 
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-600 text-white py-2.5 sm:py-3 rounded-xl text-[10px] sm:text-xs font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
                    >
                      <ExternalLink className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                      Full Map
                    </a>
                  </div>

                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText("No. 981-B, 3rd Main Road, 4th Cross Street, Mathur, MMDA, Manali, Chennai – 600068");
                      setIsCopied(true);
                      setTimeout(() => setIsCopied(false), 2000);
                    }}
                    className={`mt-2 sm:mt-3 w-full flex items-center justify-center gap-2 transition-all text-[10px] sm:text-[11px] font-bold py-2.5 sm:py-3 rounded-xl ${isCopied ? 'bg-green-600 text-white shadow-lg' : 'bg-white text-black shadow-lg hover:bg-white/90'}`}
                  >
                    {isCopied ? <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> : <Copy className="w-3 sm:w-3.5 h-3 sm:h-3.5" />}
                    {isCopied ? 'Address Copied!' : 'Copy Full Address'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>


          </div>
        </div>
      </div>
    </section>
  );
}
