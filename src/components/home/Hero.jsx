import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ContainerTextFlip } from "../ui/container-text-flip";
import { CircularText } from "../ui/circular-text";
import { ActionButton } from "../ui/action-button";
import { motion } from "motion/react";
import heroCutout from "../../assets/home/hero-cutout.png";

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
    <section className="relative h-[85vh] lg:h-[88vh] min-h-[600px] flex flex-col items-center bg-background transition-colors duration-500 pt-[88px] overflow-x-hidden">
      
      {/* Main Centered Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center flex-grow flex flex-col items-center justify-center pb-6 sm:pb-12"
      >
        
        {/* Centered Circular Text Badge - Top Center on Desktop */}
        <motion.div variants={itemVariants} className="hidden md:flex mb-2 sm:mb-6 relative z-[60]">
          <div className="w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] flex items-center justify-center relative scale-90 sm:scale-100">
             <div className="absolute inset-0 bg-accent/[0.03] rounded-full blur-xl animate-pulse"></div>
             <CircularText 
               text="YEARS OF EXPERIENCE * FROM 2022 * " 
               spinDuration={30} 
               className="w-full h-full text-ink font-black"
               textClassName="text-[8px]"
             />
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
               <span className="text-4xl font-black text-ink leading-none mt-1">4+</span>
               <span className="text-[9px] font-bold text-ink uppercase tracking-wider mt-0.5 whitespace-nowrap">Since 2022</span>
             </div>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="font-heading font-black text-ink flex flex-col items-center justify-center w-full">
          {/* Top Line of Heading */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-[10vw] sm:text-[10vw] md:text-[9vw] lg:text-[8.5vw] xl:text-[90px] leading-[0.95] tracking-tighter w-full max-w-full px-4 overflow-hidden">
            <span>Professional</span>
            
            <div className="flex items-center gap-2 md:gap-4">
              {/* Inline Image Pill */}  
              <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 50, damping: 15 }}
                className="w-[80px] h-[30px] sm:w-[140px] sm:h-[48px] md:w-[210px] md:h-[72px] lg:w-[260px] lg:h-[88px] xl:w-[280px] xl:h-[96px] rounded-full overflow-hidden shadow-sm shrink-0 inline-flex align-middle mx-1 md:mx-3 origin-left"
              >
                 <img 
                   src={heroCutout} 
                   alt="Certified NDT technician performing radiographic testing on an industrial component" 
                   className="w-full h-full object-cover" 
                 />
              </motion.div>

              <span>NDT</span>
            </div>
          </div>

          {/* Bottom Line of Heading */}
          <div className="text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7.5vw] xl:text-[85px] leading-[0.95] tracking-tighter mt-1 md:mt-2 text-center px-4 max-w-full break-words">
            Inspection & Testing
          </div>
        </motion.h1>
        
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-ink mt-3 sm:mt-5">
           <span>TEST</span>
           <span className="opacity-30 font-light">|</span>
           <span>DETECT</span>
           <span className="opacity-30 font-light">|</span>
           <span>PROTECT</span>
        </motion.div>

        <motion.p variants={itemVariants} className="mt-3 sm:mt-6 text-xs sm:text-lg text-ink/70 max-w-3xl text-center font-medium leading-relaxed px-4">
          Delivering accurate, reliable, and safety-focused inspection solutions including RT, X-Ray, UT, PT, MPT, and PWHT services for industrial projects.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 md:mt-8 w-full px-6">
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

        {/* Circular text on mobile only - Below CTA */}
        <motion.div variants={itemVariants} className="md:hidden flex justify-center mt-8 relative z-[60]">
          <div className="w-[100px] h-[100px] flex items-center justify-center relative">
             <CircularText 
               text="YEARS OF EXPERIENCE * FROM 2022 * " 
               spinDuration={30} 
               className="w-full h-full text-ink font-black"
               textClassName="text-[10px]"
             />
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
               <span className="text-4xl font-black text-ink leading-none mt-1">4+</span>
               <span className="text-[9px] font-bold text-ink uppercase tracking-wider mt-0.5 whitespace-nowrap">Since 2022</span>
             </div>
          </div>
        </motion.div>

      </motion.div>

      {/* Bottom Bar Info - Cleaned up */}
      <div className="w-full absolute bottom-0 bg-transparent hidden md:block z-[20]">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center justify-between text-xs font-bold tracking-widest uppercase text-ink relative">
          

          
        </div>
      </div>
    </section>
  );
}
