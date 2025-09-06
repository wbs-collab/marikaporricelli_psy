import { MessageCircle, Instagram, Linkedin, Music, UserCheck, Users, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-semibold mb-2">
              Dott.ssa Marika Porricelli
            </h3>
            <p className="text-background/80">
              Psicologa e Psicoterapeuta Sistemico - Relazionale I.F
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Contatti</h4>
              <p className="text-background/80 mb-1">+39 3343696441</p>
              <p className="text-background/80">psyporricelli@gmail.com</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Studio</h4>
              <p className="text-background/80">Via della Repubblica, 8</p>
              <p className="text-background/80">Cardito, NA</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Orari</h4>
              <p className="text-background/80">Lun-Ven: 9:00-19:00</p>
              <p className="text-background/80">Sab: 9:00-13:00</p>
            </div>
          </div>
          
          <div className="mb-8 flex justify-center space-x-4 flex-wrap gap-y-4">
            <a 
              href="https://wa.me/393343696441" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Contattami su WhatsApp" 
              className="text-background/80 hover:text-background transition-colors flex items-center space-x-1"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">WhatsApp</span>
            </a>
            <a 
              href="https://www.instagram.com/marikaporricelli_psicologa" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Seguimi su Instagram" 
              className="text-background/80 hover:text-background transition-colors flex items-center space-x-1"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">Instagram</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/marika-porricelli-484518160/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Collegati su LinkedIn" 
              className="text-background/80 hover:text-background transition-colors flex items-center space-x-1"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a 
              href="https://www.tiktok.com/@dott.ssa.porricelli1?_t=ZN-8zViOfpeKve&_r=1" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Seguimi su TikTok" 
              className="text-background/80 hover:text-background transition-colors flex items-center space-x-1"
            >
              <Music className="w-5 h-5" />
              <span className="text-sm">TikTok</span>
            </a>
            <a 
              href="https://www.miodottore.it/marika-porricelli/psicologo/cardito" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Prenota su MioDottore" 
              className="text-background/80 hover:text-background transition-colors flex items-center space-x-1"
            >
              <UserCheck className="w-5 h-5" />
              <span className="text-sm">MioDottore</span>
            </a>
            <a 
              href="https://www.guidapsicologi.it/studio/marika-porricelli" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Profilo su GuidaPsicologi" 
              className="text-background/80 hover:text-background transition-colors flex items-center space-x-1"
            >
              <Users className="w-5 h-5" />
              <span className="text-sm">GuidaPsicologi</span>
            </a>
            <a 
              href="https://m.facebook.com/2057828044527177/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Seguimi su Facebook" 
              className="text-background/80 hover:text-background transition-colors flex items-center space-x-1"
            >
              <Facebook className="w-5 h-5" />
              <span className="text-sm">Facebook</span>
            </a>
          </div>

          <div className="border-t border-background/20 pt-6">
            <p className="text-background/60 text-sm">
              © 2025 Dott.ssa Marika Porricelli. Tutti i diritti riservati.
            </p>
            <p className="text-background/60 text-xs mt-2">
              Psicologa iscritta all'Ordine degli Psicologi della Regione Campania. N. 10708
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;