import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import Lenis from "@studio-freight/lenis";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import WhatsAppFloat from "./components/common/WhatsAppFloat";
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

import { ThemeProvider } from "./components/theme-provider";
import { ModalProvider } from "./context/ModalContext";
import QuoteModal from "./components/common/QuoteModal";

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
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <ModalProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen selection:bg-accent selection:text-white bg-background">
            <Header />
            <main className="flex-grow relative z-20 bg-background shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
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
              </Routes>
            </main>
            
            {/* Reveal Spacer for Fixed Footer */}
            <div className="h-[1050px] sm:h-[650px] md:h-[500px] lg:h-[450px] pointer-events-none" />
            
            <BackToTop />
            <WhatsAppFloat />
            <CookieBanner />
            <Footer />
          </div>
          <QuoteModal />
        </BrowserRouter>
      </ModalProvider>
    </ThemeProvider>
  );
}
