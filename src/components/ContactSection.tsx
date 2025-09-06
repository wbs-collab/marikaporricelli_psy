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
                      <p className="text-muted-foreground">+39 3343696441X</p>
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

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Studio</p>
                      <p className="text-muted-foreground">Via della Repubblica, 8</p>
                      <p className="text-muted-foreground">Cardito, NA</p>
                    </div>
                  </div>
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
                  onClick={() => window.location.href = 'tel:+39XXXXXXXXX'}
                >
                  Chiama Ora
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.location.href = 'mailto:info@marikaporicelli.it'}
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