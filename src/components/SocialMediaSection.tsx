import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";

const SocialMediaSection = () => {
  // Mock Instagram posts - in a real implementation, you would fetch these from Instagram API
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      caption: "La mindfulness come strumento di benessere quotidiano...",
      likes: 124,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      caption: "Tecniche di rilassamento per gestire l'ansia...",
      likes: 98,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      caption: "L'importanza dell'autostima nel percorso terapeutico...",
      likes: 156,
    },
  ];

  return (
    <section id="social-media" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              Seguimi sui Social
            </h2>
            <div className="section-divider mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Condivido contenuti utili su psicologia, benessere mentale e crescita personale. 
              Seguimi per consigli pratici e spunti di riflessione.
            </p>
          </div>

          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-foreground">@marikaporricelli_psicologa</h3>
                <p className="text-muted-foreground">Seguimi su Instagram</p>
              </div>
            </div>
            
            <Button asChild
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-white border-0"
            >
              <a href="https://www.instagram.com/marikaporricelli_psicologa?igsh=MW03Z2V3c3MydjRybQ==" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4 mr-2" />
                Segui su Instagram
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {instagramPosts.map((post) => (
              <a key={post.id} href="https://www.instagram.com/marikaporricelli_psicologa?igsh=MW03Z2V3c3MydjRybQ==" target="_blank" rel="noopener noreferrer">
                <Card className="warm-card overflow-hidden group cursor-pointer h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt="Instagram post" 
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">{post.caption}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                          <Instagram className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-foreground">@marikaporricelli_psicologa</span>
                      </div>
                      <span className="text-sm text-muted-foreground">♥ {post.likes}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.caption}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Clicca sui post per visitare il mio profilo Instagram e vedere tutti i contenuti
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;