import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Headset, Mail, MessageCircle } from "lucide-react";
import { cn } from "../../lib/utils";
import logo from "../../assets/logo.png";
import ThemeToggle from "../ui/theme-toggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll(); // Initial check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu and dropdown on route change
    setMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-[100] h-[88px] transition-all duration-300",
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-border"
            : "bg-background border-b border-transparent"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center relative z-[110]" onClick={closeMenu}>
            <img src={logo} alt="Techno NDT Technical Services" className="h-14 sm:h-16 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "font-medium text-sm transition-colors hover:text-accent",
                  location.pathname === link.path
                    ? "text-accent underline decoration-2 underline-offset-4"
                    : "text-ink"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions Container */}
          <div className="flex items-center gap-4 ml-auto lg:ml-0 relative z-[110]" ref={dropdownRef}>
            {/* Theme Toggler */}
            <ThemeToggle />
            
            {/* Customer Support CTA */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-700 hover:-translate-y-1 bg-accent text-white",
                  isDropdownOpen && "rotate-[360deg]"
                )}
                aria-label="Customer Support"
              >
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <Headset className={cn(
                    "absolute transition-all duration-700",
                    isDropdownOpen ? "opacity-0 scale-50 rotate-[360deg]" : "opacity-100 scale-100 rotate-0"
                  )} size={20} />
                  <X className={cn(
                    "absolute transition-all duration-700",
                    isDropdownOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-[360deg]"
                  )} size={20} />
                </div>
              </button>
              
              {/* Dropdown Card */}
              {isDropdownOpen && (
                <div className="absolute top-[calc(100%+0.5rem)] right-0 w-64 bg-card rounded-2xl shadow-xl border border-border p-3 flex flex-col gap-2 z-[120] animate-in slide-in-from-top-2 fade-in duration-200">
                  <a
                    href="mailto:technondtfinance@gmail.com"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-secondary rounded-xl transition-colors text-ink group"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">Email Us</span>
                      <span className="text-xs font-bold truncate max-w-[150px]">technondtfinance@gmail.com</span>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919841506600"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-[#25D366]/10 rounded-xl transition-colors text-ink group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">WhatsApp</span>
                      <span className="text-xs font-bold">+91 98415 06600</span>
                    </div>
                  </a>

                  <a
                    href="tel:+919841506600"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 rounded-xl transition-colors text-ink group"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-ink-soft">Call Us</span>
                      <span className="text-xs font-bold">+91 98415 06600</span>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-ink transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span className={cn("block h-0.5 bg-current rounded-full transition-all duration-300 ease-out", mobileMenuOpen ? "translate-y-2 rotate-45 w-6" : "w-6")} />
              <span className={cn("block h-0.5 bg-current rounded-full transition-all duration-300 ease-out", mobileMenuOpen ? "opacity-0 w-6" : "w-6")} />
              <span className={cn("block h-0.5 bg-current rounded-full transition-all duration-300 ease-out", mobileMenuOpen ? "-translate-y-2 -rotate-45 w-6" : "w-4 self-end")} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-xl z-[90] transition-all duration-500 ease-in-out lg:hidden flex flex-col items-center justify-center p-6 h-[100dvh]",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center justify-center gap-8 w-full">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={cn(
                "font-heading font-black text-4xl sm:text-5xl text-center transition-all duration-500",
                location.pathname === link.path ? "text-accent" : "text-ink hover:text-accent",
                mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${100 + idx * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
