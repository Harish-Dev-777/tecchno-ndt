import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import Lenis from "@studio-freight/lenis";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import WhatsAppFloat from "./components/common/WhatsAppFloat";
import QuoteFloat from "./components/common/QuoteFloat";
import BackToTop from "./components/common/BackToTop";
import CookieBanner from "./components/common/CookieBanner";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
import NotFoundPage from "./pages/NotFoundPage";

import { ModalProvider } from "./context/ModalContext";
import QuoteModal from "./components/common/QuoteModal";
import ClickSpark from "./components/ui/ClickSpark";
import AdminPage from "./pages/AdminPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Force scroll to top instantly
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
      document.body.scrollTo(0, 0);
      
      // If lenis is attached to window (common pattern), use it
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname, hash]);
  return null;
}

const validRoutes = [
  "/", "/about", "/services", "/portfolio", "/gallery", 
  "/contact", "/privacy-policy", "/terms-and-conditions", 
  "/refund-policy", "/admin"
];

function AppContent() {
  const { pathname } = useLocation();
  const normalizedPath = pathname === "/" ? pathname : pathname.replace(/\/$/, "");
  const isNotFound = !validRoutes.includes(normalizedPath);
  const isAdmin = normalizedPath === "/admin";
  const hideHeaderFooter = isAdmin || isNotFound;

  return (
    <div className="flex flex-col min-h-screen selection:bg-accent selection:text-white overflow-x-clip">
      {!hideHeaderFooter && <Header />}
      <main className={`flex-grow relative z-10 bg-background ${!hideHeaderFooter ? 'shadow-[0_20px_50px_rgba(0,0,0,0.15)]' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      
      {!hideHeaderFooter && (
        <>
          <BackToTop />
          <WhatsAppFloat />
          <QuoteFloat />
          <CookieBanner />
          <Footer />
        </>
      )}
    </div>
  );
}

export default function App() {
  useEffect(() => {
    // Only initialize Lenis on desktop / large screens (width >= 1024px)
    const isMobile = window.innerWidth < 1024;
    let lenis: Lenis | null = null;
    let rafId: number | null = null;

    if (!isMobile) {
      lenis = new Lenis({
        lerp: 0.1,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5, 
        infinite: false,
      });

      (window as any).lenis = lenis;

      const raf = (time: number) => {
        if (lenis) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
      };

      rafId = requestAnimationFrame(raf);
    }

    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });

    return () => {
      if (lenis) {
        lenis.destroy();
        (window as any).lenis = null;
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <ModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ClickSpark
          sparkColor='#e86b25'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <AppContent />
        </ClickSpark>
        <QuoteModal />
      </BrowserRouter>
    </ModalProvider>
  );
}
