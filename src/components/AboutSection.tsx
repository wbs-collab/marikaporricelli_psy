import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@/assets/marika-poricelli.jpg";
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
                <p className="text-foreground leading-relaxed text-justify">Sono una psicologa clinica, psicoterapeuta i.f. ad indirizzo sistemico relazionale, tecnico ABA, psicologo giuridico ed esperta di genitorialità. </p>
                <p className="text-foreground leading-relaxed text-justify">Nel mio studio effettuo prestazioni di supporto psicologico ad adulti, adolescenti, coppie, famiglie e famiglie con bambini con disturbi psicologici di vario tipo con particolare interesse per depressione, ansia, stress e stress lavoro correlato. Tuttavia, il mio interesse è bypassare la diagnosi clinica e l'etichetta diagnostica ed iniziare con il paziente un lavoro sulle difficoltà relazionali.</p>
                <p className="text-foreground leading-relaxed text-justify">Il mio modello di riferimento è quello sistemico-relazionale ed è incentrato sullo studio e osservazione del comportamento dell'individuo singolo, in coppia e in famiglia focalizzando l'attenzione sul sistema di relazioni significative in cui vive e con cui interagisce. Il sintomo, la diagnosi, la prognosi e il trattamento, sono riletti in chiave relazionale, pertanto è in tale ottica che si incentra la cura cioè nel dare un nuovo significato ai sintomi ed esplicitarne la funzione nel proprio contesto/sistema di vita.

              </p>
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
                    <li>• Certificazione come Tecnico ABA (ASSOTABA)</li>
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