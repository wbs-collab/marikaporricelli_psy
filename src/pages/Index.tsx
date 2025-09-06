import AboutSection from "@/components/AboutSection";
import ApproachSection from "@/components/ApproachSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SocialMediaSection from "./components/SocialMediaSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ApproachSection />
        <ContactSection />
        <SocialMediaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;