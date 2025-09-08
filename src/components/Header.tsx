import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h2 className="text-xl font-serif font-semibold text-primary">
              Dott.ssa Marika Porricelli
            </h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Chi Sono
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Servizi
            </button>
            <button
              onClick={() => scrollToSection('approach')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Approccio
            </button>
            <button
              onClick={() => scrollToSection('social')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Seguimi sui Social
            </button>
            <button
              onClick={() => scrollToSection('interviews')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Interviste e Conferenze
            </button>
            <button
              onClick={() => scrollToSection('contact-form')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Richiesta Informazioni
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Contatti
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                Chi Sono
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                Servizi
              </button>
              <button
                onClick={() => scrollToSection('approach')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                Approccio
              </button>
              <button
                onClick={() => scrollToSection('social')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                Seguimi sui Social
              </button>
              <button
                onClick={() => scrollToSection('interviews')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                Interviste e Conferenze
              </button>
              <button
                onClick={() => scrollToSection('contact-form')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                Richiesta Informazioni
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="default"
                className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Contatti
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;