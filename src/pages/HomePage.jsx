import { useEffect } from "react";
import Hero from "../components/home/Hero";
import ClientsMarquee from "../components/home/ClientsMarquee";
import ServiceList from "../components/home/ServiceList";
import PortfolioPreview from "../components/home/PortfolioPreview";
import AboutPreview from "../components/home/AboutPreview";
import GalleryMarquee from "../components/home/GalleryMarquee";
import FAQ from "../components/home/FAQ";
import ContactForm from "../components/home/ContactForm";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home | Techno NDT Technical Services";
  }, []);

  return (
    <div className="w-full">
      <Hero />
      <ClientsMarquee />
      <ServiceList />
      <PortfolioPreview />
      <AboutPreview />
      <GalleryMarquee />
      <FAQ />
      <ContactForm />
    </div>
  );
}
