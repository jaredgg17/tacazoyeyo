import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { HowItWorks } from "./components/HowItWorks";
import { MenuSection } from "./components/MenuSection";
import { MenuCompleto } from "./components/MenuCompleto";
import { GallerySection } from "./components/GallerySection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { MapSection } from "./components/MapSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF9E6] font-['Montserrat',sans-serif]">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <MenuCompleto />
      <MenuSection />
      <GallerySection />
      <FAQSection />
      <MapSection />
      <CTASection />
      <Footer />

      {/* Floating WhatsApp Button */}
      
    </div>
  );
}