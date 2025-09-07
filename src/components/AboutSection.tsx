import { Card, CardContent } from "@/components/ui/card";
import profileImage from "/lovable-uploads/38e8d6ed-6ba0-4317-b0fd-2b912f115df9.png";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-background">
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
                <p className="text-foreground leading-relaxed text-justify">Sono una psicologa clinica e psicoterapeuta i.f. ad indirizzo sistemico-relazionale. Sono inoltre tecnico ABA, psicologa giuridica ed esperta di genitorialità.</p>
                <p className="text-foreground leading-relaxed text-justify">Nel mio studio offro percorsi di supporto psicologico rivolti ad adulti, adolescenti, coppie e famiglie, comprese quelle con bambini che presentano disturbi psicologici di varia natura. Mi occupo in particolare di depressione, ansia, stress e stress lavoro-correlato. Il mio obiettivo è superare l'etichetta della diagnosi e avviare con la persona un lavoro focalizzato sulle difficoltà relazionali.</p>
                <p className="text-foreground leading-relaxed text-justify">Il modello di riferimento è quello sistemico-relazionale, che si concentra sull'osservazione del comportamento dell'individuo nel suo contesto: come singolo, in coppia o all'interno della famiglia. L'attenzione è rivolta al sistema di relazioni significative in cui vive e interagisce. In quest'ottica, sintomi, diagnosi, prognosi e trattamento vengono riletti in chiave relazionale, attribuendo un nuovo significato ai sintomi e capendo insieme qual è la loro funzione all'interno della propria vita.</p>

              </div>

              {/* Photo Section */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img src={profileImage} alt="Dott.ssa Marika Porricelli" className="w-64 h-80 lg:w-72 lg:h-96 object-cover rounded-2xl shadow-elevated" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Cards Section */}
            <div className="grid md:grid-cols-2 gap-4 mt-12">
              <Card className="warm-card">
                <CardContent className="p-6 px-[24px] py-[24px]">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Formazione</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Laurea in Psicologia</li>
                    <li>• Master di II livello in Psicologia Giuridico - Forense e Diagnostica Forense</li>
                    <li>• Specializzazione in Psicoterapia Sistemico - Relazionale</li>
                    <li>• Certificazione come Tecnico ABA (ASSOTABA)</li>
                    <li>• Formazione in Terapia Familiare</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="warm-card px-[24px] py-[24px]">
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
    </section>;
};
export default AboutSection;
