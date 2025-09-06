import { Video, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <a 
              href="https://youtu.be/onDIP1yscR4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-lg font-semibold inline-flex items-center"
            >
              <Video className="w-5 h-5 mr-2" />
              Guarda l'intervista su YouTube
              <Link className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewsSection;