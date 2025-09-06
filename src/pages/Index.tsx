import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import ContactSection from "@/components/ContactSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import InterviewsSection from "@/components/InterviewsSection";
import Footer from "@/components/Footer";

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
        <InterviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;