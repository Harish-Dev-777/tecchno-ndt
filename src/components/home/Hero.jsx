import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ContainerTextFlip } from "../ui/container-text-flip";
import { CircularText } from "../ui/circular-text";
import { ActionButton } from "../ui/action-button";
import { motion } from "motion/react";

export default function Hero() {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 1
      }
    }
  };

  return (
    <section className="relative h-[100dvh] min-h-[600px] flex flex-col items-center bg-background transition-colors duration-500 pt-[88px] overflow-x-hidden">
      
      {/* Main Centered Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center flex-grow flex flex-col items-center justify-center pb-12 sm:pb-24"
      >
        
        {/* Animated Tagline Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-card/60 backdrop-blur-md border border-border rounded-full px-4 py-1.5 mb-4 sm:mb-6 shadow-sm">
          <div className="w-3 h-3 flex flex-wrap gap-[1px] opacity-70">
            <div className="w-[4px] h-[4px] border border-ink rounded-full"></div>
            <div className="w-[4px] h-[4px] border border-ink rounded-full"></div>
            <div className="w-[4px] h-[4px] border border-ink rounded-full"></div>
            <div className="w-[4px] h-[4px] border border-ink rounded-full"></div>
          </div>
          <ContainerTextFlip 
            words={["TEST.", "DETECT.", "PROTECT."]} 
            className="!text-[10px] sm:!text-[10px] md:!text-[10px] lg:!text-xs pt-0 pb-0 font-bold"
            textClassName="uppercase tracking-[0.2em] text-ink font-bold"
            animationDuration={500}
            interval={2000}
          />
        </motion.div>

        <motion.h1 variants={itemVariants} className="font-heading font-black text-ink flex flex-col items-center justify-center w-full">
          {/* Top Line of Heading */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-[10vw] sm:text-[10vw] md:text-[9vw] lg:text-[8.5vw] xl:text-[90px] leading-[0.95] tracking-tighter w-full">
            <span>Professional</span>
            
            {/* Inline Image Pill */}
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 50, damping: 15 }}
              className="w-[80px] h-[36px] sm:w-[120px] sm:h-[48px] md:w-[180px] md:h-[72px] lg:w-[220px] lg:h-[88px] xl:w-[240px] xl:h-[96px] rounded-full overflow-hidden shadow-sm shrink-0"
            >
               <img 
                 src="https://images.unsplash.com/photo-1542382601-5768560298a0?w=800&q=80" 
                 alt="Inspection" 
                 className="w-full h-full object-cover" 
               />
            </motion.div>

            <span>NDT</span>
          </div>

          {/* Bottom Line of Heading */}
          <div className="text-[8vw] sm:text-[9vw] md:text-[8vw] lg:text-[7.5vw] xl:text-[85px] leading-[0.95] tracking-tighter mt-1 md:mt-4 text-center">
            Inspection & Testing
          </div>
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-4 sm:mt-8 text-xs sm:text-lg text-ink/70 max-w-3xl text-center font-medium leading-relaxed px-4">
          Delivering accurate, reliable, and safety-focused inspection solutions including RT, X-Ray, UT, PT, MPT, and PWHT services for industrial projects.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 md:mt-12 w-full px-6">
          <Link 
            to="/contact" 
            className="w-full sm:w-auto group relative z-10 flex h-[48px] sm:h-[60px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1eb570] px-8 text-sm font-bold tracking-wide text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            CONTACT US
          </Link>

          <Link to="/services" className="w-full sm:w-auto">
            <ActionButton className="w-full sm:w-auto h-[48px] sm:h-[60px] justify-center !py-0">
              Our Services
            </ActionButton>
          </Link>
        </motion.div>

        {/* Circular text on mobile below buttons */}
        <motion.div variants={itemVariants} className="md:hidden flex justify-center mt-10 relative z-[60]">
          <div className="w-[100px] h-[100px] flex items-center justify-center relative">
             <CircularText 
               text="YEARS OF EXPERIENCE * FROM 2022 * " 
               spinDuration={30} 
               className="w-full h-full text-ink font-black"
               textClassName="text-[10px]"
             />
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
               <span className="text-2xl font-black text-ink leading-none mt-1">4+</span>
               <span className="text-[6px] font-bold text-ink uppercase tracking-wider mt-0.5 whitespace-nowrap">Since 2022</span>
             </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar Info */}
      <div className="w-full border-t border-ink/10 absolute bottom-0 bg-transparent hidden md:block z-[20]">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center justify-between text-xs font-bold tracking-widest uppercase text-ink relative">
          
          {/* Absolutely positioned spinning badge overlapping the top border of bottom bar */}
          <div className="absolute left-6 -top-12 w-[100px] h-[100px] flex items-center justify-center z-[100]">
             <div className="absolute inset-0 bg-background transition-colors duration-500 rounded-full"></div> {/* Background to hide border behind it */}
             <CircularText 
               text="YEARS OF EXPERIENCE * FROM 2022 * " 
               spinDuration={30} 
               className="w-full h-full text-ink font-black"
               textClassName="text-[10px]"
             />
             {/* Center Content */}
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
               <span className="text-2xl font-black text-ink leading-none mt-1">4+</span>
               <span className="text-[6px] font-bold text-ink uppercase tracking-wider mt-0.5 whitespace-nowrap">Since 2022</span>
             </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
