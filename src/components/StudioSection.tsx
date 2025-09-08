const StudioSection = () => {
  return <section id="studio" className="py-20 bg-background/80">
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.123!2d14.256!3d40.941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU2JzI4LjAiTiAxNMKwMTUnMjIuMCJF!5e0!3m2!1sit!2sit!4v1234567890&q=Via+della+Repubblica,+8,+Cardito,+NA,+80024"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
                title="Ubicazione Studio - Via della Repubblica, 8, Cardito, NA"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
            <div className="space-y-6 text-lg">
              <p className="text-foreground leading-relaxed text-justify">Il mio studio è pensato per essere un rifugio sicuro, dove un’atmosfera calda favorisce il rilassamento e l’apertura emotiva.</p>
              <p className="text-muted-foreground leading-relaxed text-justify">
                Ogni dettaglio è studiato per creare un ambiente che rispecchi i valori di calore umano e professionalità, dove ogni persona può sentirsi a proprio agio nel condividere le proprie esperienze e difficoltà.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default StudioSection;