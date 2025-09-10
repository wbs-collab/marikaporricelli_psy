import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Contatti
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Prendi il primo passo verso il tuo benessere. Sono qui per accompagnarti in questo percorso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="warm-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  Informazioni di Contatto
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Telefono</p>
                      <p className="text-muted-foreground">+39 334 369 7841</p>
                      <p className="text-sm text-muted-foreground mt-1">Disponibile per appuntamenti</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">psyporricelli@gmail.com</p>
                      <p className="text-sm text-muted-foreground mt-1">Risposta entro 24 ore</p>
                    </div>
                  </div>

                  <a 
                    href="https://www.google.com/maps/place/Via+della+Repubblica,+8,+80024+Cardito+NA,+Italy/@40.9407132,14.2999218,17z/data=!3m1!4b1!4m6!3m5!1s0x133ba9f6b3f0a255:0x9c59f07eed3bc675!8m2!3d40.9407092!4d14.3024967!16s%2Fg%2F11khthz2n7?hl=en&entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">Studio</p>
                      <p className="text-muted-foreground group-hover:underline">Via della Repubblica, 8</p>
                      <p className="text-muted-foreground group-hover:underline">Cardito, NA</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="warm-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  Orari di Ricevimento
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-foreground">Lunedì - Venerdì</span>
                          <span className="text-muted-foreground">9:00 - 19:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-foreground">Sabato</span>
                          <span className="text-muted-foreground">9:00 - 13:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-foreground">Domenica</span>
                          <span className="text-muted-foreground">Chiuso</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                  Per garantire la massima attenzione a ogni percorso, ricevo esclusivamente su appuntamento. 
                  Offro la flessibilità di sessioni serali e la possibilità di effettuare consulenze online, per venire incontro a ogni esigenza.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-background p-8 rounded-lg shadow-warm border border-border">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Pronto per Iniziare?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Il primo passo è sempre il più importante. Contattami per fissare un primo colloquio 
                conoscitivo e iniziare insieme il tuo percorso di benessere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => window.location.href = 'tel:+393343697841'}
                >
                  Chiama Ora
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.location.href = 'mailto:psyporricelli@gmail.com'}
                >
                  Invia Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;