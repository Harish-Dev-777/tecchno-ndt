import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import { useModal } from "../../context/ModalContext";
import logo from "../../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openQuoteModal } = useModal();

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#1A1A1A] text-[#F5F0E8] pt-16 sm:pt-32 pb-8 z-0">
      <div className="max-w-[1400px] mx-auto px-6 relative">
        {/* Subtle radial glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full h-[150%] bg-accent/5 blur-[120px] pointer-events-none" />
        
        {/* Mobile Layout Strategy: Flex Column for Rows */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-10 md:gap-12 relative z-10">
          
          {/* Row 1/Col 1: Brand & Address */}
          <div className="flex flex-row md:flex-col justify-between md:justify-start items-start gap-6">
            <div className="space-y-4 max-w-[50%] md:max-w-full">
              <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="Techno NDT Technical Services" className="h-12 sm:h-14 w-auto brightness-0 invert" />
              </Link>
              <p className="text-accent font-bold font-heading tracking-widest uppercase text-[10px] sm:text-sm">
                Test. Detect. Protect.
              </p>
              <p className="text-[#F5F0E8]/70 text-[10px] sm:text-sm leading-relaxed hidden md:block">
                Delivering precision-driven NDT inspection services across industrial sectors since 2022.
              </p>
            </div>

            {/* Address - On Right for mobile, Below for Desktop */}
            <div className="max-w-[45%] md:max-w-full text-right md:text-left pt-1">
              <p className="text-[#F5F0E8]/60 text-[10px] sm:text-sm leading-relaxed">
                <strong className="text-[#F5F0E8]/80 block md:inline mb-1 md:mb-0">Address:</strong> No. 981-B, 3rd Main Road, 4th Cross Street, Mathur, MMDA, Manali, Chennai – 600068
              </p>
            </div>
          </div>

          {/* Row 2/Col 2: Quick Links */}
          <div className="md:ml-12 lg:ml-24 space-y-4 sm:space-y-6">
            <h3 className="font-heading font-bold text-sm sm:text-lg pb-1.5 border-b border-white/10 text-[#F5F0E8] w-full">Quick Links</h3>
            <ul className="grid grid-cols-3 md:grid-cols-1 gap-x-2 gap-y-3">
              {["Home", "About Us", "Services", "Portfolio", "Gallery", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" us", "").replace(" ", "-")}`}
                    className="text-[11px] sm:text-sm text-[#F5F0E8]/70 hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Row 3/Col 3: Connect */}
          <div className="flex flex-row md:flex-col justify-between items-end md:items-start md:space-y-6">
            <div className="space-y-4 w-full">
              <h3 className="font-heading font-bold text-sm sm:text-lg pb-1.5 border-b border-white/10 hidden md:block text-[#F5F0E8]">Reach Us</h3>
              <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href="https://wa.me/919841506600"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shrink-0"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="mailto:technondtfinance@gmail.com"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-accent hover:scale-110 transition-all shrink-0"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="tel:+919841506600"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-accent hover:scale-110 transition-all shrink-0"
                    aria-label="Phone"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
                <button
                  onClick={openQuoteModal}
                  className="group relative z-10 flex w-fit cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-accent bg-accent px-4 sm:px-6 h-[40px] sm:h-[50px] text-[10px] sm:text-sm font-bold tracking-wide text-white shadow-xl transition-all duration-300 hover:border-[#F5F0E8] hover:text-[#1A1A1A] before:absolute before:w-full before:-left-full hover:before:left-0 before:rounded-full before:bg-[#F5F0E8] before:transition-all before:duration-700 hover:before:scale-150 hover:before:duration-700 before:-z-10 before:aspect-square"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policies (Row 4) */}
        <div className="mt-12 md:mt-16 border-t border-white/10 pt-8 flex flex-col items-center gap-6 text-[10px] sm:text-xs text-[#F5F0E8]/40">
          
          {/* Mobile Policies Row - Centered for visibility */}
          <div className="flex md:hidden items-center gap-4 font-medium text-[#F5F0E8]/60">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy</Link>
            <span className="opacity-30">|</span>
            <Link to="/terms-and-conditions" className="hover:text-accent transition-colors">Terms</Link>
            <span className="opacity-30">|</span>
            <Link to="/refund-policy" className="hover:text-accent transition-colors">Refund</Link>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center md:text-left">© {currentYear} Techno NDT Technical Services. All rights reserved.</p>
            <div className="hidden md:flex items-center gap-4 font-medium">
              <Link to="/privacy-policy" className="hover:text-[#F5F0E8] transition-colors">Privacy Policy</Link>
              <span className="opacity-30">|</span>
              <Link to="/terms-and-conditions" className="hover:text-[#F5F0E8] transition-colors">Terms & Conditions</Link>
              <span className="opacity-30">|</span>
              <Link to="/refund-policy" className="hover:text-[#F5F0E8] transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
