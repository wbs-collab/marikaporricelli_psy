import heroImage from "@/assets/hero-therapy-office.jpg";
const HeroSection = () => {
  return <section id="home" className="hero-section min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      <div className="hero-content container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
            Dott.ssa Marika Porricelli
          </h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 font-light">
            Psicologa e Psicoterapeuta
          </p>
          <div className="therapy-quote text-lg sm:text-xl text-primary-foreground/95 mb-12 max-w-3xl mx-auto leading-relaxed">Ogni ferita ha qualcosa da insegnare insieme possiamo ascoltarla.</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => document.getElementById('about')?.scrollIntoView({
            behavior: 'smooth'
          })} className="bg-primary-foreground text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary-foreground/90 transition-all duration-300 transform hover:scale-105">
              Scopri di più
            </button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })} className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition-all duration-300 transform hover:scale-105">
              Prenota un Appuntamento
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;