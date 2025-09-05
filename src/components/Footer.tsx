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
              Psicologa e Psicoterapeuta
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Contatti</h4>
              <p className="text-background/80 mb-1">+39 XXX XXX XXXX</p>
              <p className="text-background/80">info@marikaporicelli.it</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Studio</h4>
              <p className="text-background/80">Via delle Rose, 123</p>
              <p className="text-background/80">00100 Roma, RM</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Orari</h4>
              <p className="text-background/80">Lun-Ven: 9:00-19:00</p>
              <p className="text-background/80">Sab: 9:00-13:00</p>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-6">
            <p className="text-background/60 text-sm">
              © 2024 Dott.ssa Marika Porricelli. Tutti i diritti riservati.
            </p>
            <p className="text-background/60 text-xs mt-2">
              Psicologa iscritta all'Ordine degli Psicologi del Lazio - N. XXXX
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;