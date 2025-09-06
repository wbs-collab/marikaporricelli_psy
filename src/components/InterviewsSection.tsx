import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const InterviewsSection = () => {
  return (
    <section id="interviews" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Interviste e Conferenze
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Condivido la mia esperienza e le mie conoscenze attraverso interviste e conferenze 
              per diffondere la cultura del benessere psicologico.
            </p>
          </div>

          <div className="text-center">
            <Card className="inline-block max-w-md mx-auto overflow-hidden group">
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Guarda su YouTube
                </h3>
                <p className="text-muted-foreground mb-6">
                  Approfondimenti e contenuti esclusivi sui temi della psicologia e del benessere mentale.
                </p>
                <Button asChild className="w-full">
                  <a 
                    href="https://www.youtube.com/watch?v=onDIP1yscR4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Guarda l'intervista
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewsSection;