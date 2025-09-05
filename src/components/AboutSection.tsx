import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@/assets/marika-poricelli.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Chi Sono
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un percorso di cura e crescita personalizzato per ogni persona e famiglia
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Text Section */}
              <div className="lg:col-span-2 space-y-6">
                <p className="text-foreground leading-relaxed text-justify">
                  Sono una psicologa e psicoterapeuta specializzata nell'accompagnare persone, coppie e famiglie 
                  attraverso momenti di difficoltà e crescita personale. La mia formazione mi ha portato a sviluppare 
                  un approccio che unisce competenza scientifica e calore umano.
                </p>
                <p className="text-foreground leading-relaxed text-justify">
                  Nel mio studio, caratterizzato da elementi naturali in legno e atmosfere accoglienti, 
                  creo uno spazio sicuro dove ogni persona può sentirsi compresa e supportata nel proprio 
                  percorso di benessere psicologico.
                </p>
                <p className="text-foreground leading-relaxed text-justify">
                  Credo profondamente nel valore delle relazioni familiari e nell'importanza di costruire 
                  legami sani e duraturi. Ogni intervento è pensato su misura, rispettando i tempi e le 
                  specificità di chi si rivolge a me.
                </p>
              </div>

              {/* Photo Section */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img 
                    src={profileImage} 
                    alt="Dott.ssa Marika Porricelli" 
                    className="w-48 h-60 lg:w-56 lg:h-72 object-cover rounded-2xl shadow-elevated"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Cards Section */}
            <div className="grid md:grid-cols-2 gap-4 mt-12">
              <Card className="warm-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Formazione</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Laurea in Psicologia</li>
                    <li>• Specializzazione in Psicoterapia</li>
                    <li>• Formazione in Terapia Familiare</li>
                    <li>• Aggiornamento continuo in metodologie validate</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="warm-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Specializzazioni</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Terapia individuale</li>
                    <li>• Terapia di coppia</li>
                    <li>• Terapia familiare</li>
                    <li>• Supporto genitoriale</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;