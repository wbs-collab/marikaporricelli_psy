import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";

import post1 from "/src/assets/hero-option-1.jpg";
import post2 from "/src/assets/hero-option-2.jpg";
import post3 from "/src/assets/hero-option-3.jpg";
import post4 from "/src/assets/hero-option-4.jpg";
import post5 from "/src/assets/hero-therapy-office.jpg";
import post6 from "/src/assets/marika-poricelli.jpg";
import profilePic from "/src/assets/marika-poricelli.jpg";

const SocialMediaSection = () => {
  const instagramPosts = [
    { id: 1, src: post1, alt: "Post 1" },
    { id: 2, src: post2, alt: "Post 2" },
    { id: 3, src: post3, alt: "Post 3" },
    { id: 4, src: post4, alt: "Post 4" },
    { id: 5, src: post5, alt: "Post 5" },
    { id: 6, src: post6, alt: "Post 6" },
  ];

  return (
    <section id="social-media" className="py-20 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-semibold mb-4 text-foreground">
            Social Media
          </h2>
          <p className="text-foreground/80 mb-12">
            Seguimi su Instagram per aggiornamenti e contenuti.
          </p>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={profilePic}
                    alt="Marika Porricelli"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-lg">marika.porricelli_psy</p>
                    <p className="text-sm text-foreground/70">Dott.ssa Marika Porricelli</p>
                  </div>
                </div>
                <Button asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4 mr-2" /> Follow
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {instagramPosts.map((post) => (
                  <div key={post.id} className="relative group overflow-hidden rounded-md">
                    <img
                      src={post.src}
                      alt={post.alt}
                      className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
