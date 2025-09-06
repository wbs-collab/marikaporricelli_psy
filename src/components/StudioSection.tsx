const StudioSection = () => {
  return (
    <section id="studio" className="py-20 bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Il Mio Studio
            </h2>
            <div className="section-divider mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden shadow-elevated">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Studio di psicoterapia" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="space-y-6 text-lg">
              <p className="text-foreground leading-relaxed text-justify">
                Il mio studio è pensato per essere un rifugio sicuro e atmosfere calde che favoriscono il rilassamento e l'apertura emotiva.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Ogni dettaglio è studiato per creare un ambiente che rispecchi i valori di calore umano e professionalità, dove ogni persona può sentirsi a proprio agio nel condividere le proprie esperienze e difficoltà.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
