const StudioSection = () => {
  return (
    <section id="studio" className="py-20 bg-background/80">
      <div className="container mx-auto px-4 sm-px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Il Mio Studio
            </h2>
            <div className="section-divider mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden shadow-elevated h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.8610121767338!2d14.299921776422371!3d40.94071322358182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133ba9f6b3f0a255%3A0x9c59f07eed3bc675!2sVia%20della%20Repubblica%2C%208%2C%2080024%20Cardito%20NA%2C%20Italy!5e0!3m2!1sen!2sus!4v1757538244345!5m2!1sen!2sus" 
                className="w-full h-full border-0" 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
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