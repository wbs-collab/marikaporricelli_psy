import { Card, CardContent } from "@/components/ui/card";
import { Ear, Heart, BookOpen, Users } from "lucide-react";
import marikaVideo from "@/assets/Marikavideo.mp4";

const ApproachSection = () => {
  const approaches = [
    {
      icon: <Ear className="w-6 h-6" />,
      title: "Ascolto Attivo",
      description: "Ogni persona ha una storia unica. Il mio primo impegno è ascoltare con attenzione e senza giudizio."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Empatia",
      description: "Creo uno spazio sicuro dove sentirsi compresi e accolti, rispettando i tempi di ciascuno."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Metodi Scientifici",
      description: "Utilizzo strumenti e tecniche validate dalla ricerca scientifica per garantire l'efficacia del percorso."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Focus Relazionale",
      description: "L'importanza delle relazioni familiari e affettive è al centro del mio approccio terapeutico."
    }
  ];

  return (
    <section id="approach" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Il Mio Approccio
            </h2>
            <div className="section-divider mb-8"></div>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                La mia metodologia si basa su tre pilastri fondamentali che guidano ogni intervento terapeutico:
              </p>
              <blockquote className="therapy-quote text-xl text-primary font-medium italic">
                Ogni percorso è costruito su misura, con ascolto, empatia e strumenti scientifici validati.
              </blockquote>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {approaches.map((approach, index) => (
              <Card key={index} className="warm-card text-center h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    {approach.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {approach.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {approach.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
                Percorsi Personalizzati
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Non esistono soluzioni universali in psicoterapia. Ogni intervento è costruito 
                specificamente per la persona o la famiglia che ho di fronte, rispettando le 
                sue caratteristiche uniche e i suoi obiettivi.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                La durata e la frequenza degli incontri vengono concordate insieme, 
                garantendo flessibilità e adattamento alle esigenze specifiche di ogni situazione.
              </p>
            </div>
            <div>
              <video 
                src={marikaVideo} 
                className="rounded-lg shadow-elevated w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
                controls 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;