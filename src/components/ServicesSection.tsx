import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, User, Baby } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Terapia Individuale",
      description: "Percorsi personalizzati per il benessere psicologico individuale, gestione dell'ansia, depressione e crescita personale.",
      details: [
        "Sostegno psicologico",
        "Gestione dell'ansia e stress",
        "Elaborazione di traumi",
        "Crescita personale e autostima"
      ]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Terapia di Coppia",
      description: "Supporto per coppie che desiderano migliorare la comunicazione e rafforzare il loro legame affettivo.",
      details: [
        "Miglioramento della comunicazione",
        "Risoluzione dei conflitti",
        "Rafforzamento del legame",
        "Supporto nelle crisi di coppia"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Terapia Familiare",
      description: "Interventi mirati a migliorare le dinamiche familiari e creare un ambiente sereno per tutti i membri.",
      details: [
        "Dinamiche familiari",
        "Conflitti intergenerazionali",
        "Supporto nelle separazioni",
        "Riorganizzazione familiare"
      ]
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Supporto Genitoriale",
      description: "Accompagnamento per genitori nell'educazione e nella gestione delle sfide quotidiane con i figli.",
      details: [
        "Consulenza educativa",
        "Gestione comportamenti difficili",
        "Comunicazione con i figli",
        "Supporto nelle fasi evolutive"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            I Miei Servizi
          </h2>
          <div className="section-divider mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Offro percorsi terapeutici personalizzati, utilizzando metodologie scientificamente validate 
            per accompagnarti verso il benessere psicologico e relazionale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="warm-card h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;