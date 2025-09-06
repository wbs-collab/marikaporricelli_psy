import { MessageCircle, Instagram, Linkedin, Music, UserCheck, Users, Facebook } from "lucide-react";

const SocialMediaSection = () => {
  const socialMediaLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/39XXXXXXXXX",
      icon: MessageCircle,
      description: "Contattami direttamente"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/marikaporricelli_psicologa?igsh=MW03Z2V3c3MydjRybQ==",
      icon: Instagram,
      description: "@marikaporricelli_psicologa"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/marika-porricelli-484518160/",
      icon: Linkedin,
      description: "Profilo professionale"
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@dott.ssa.porricelli1?_t=ZN-8zViOfpeKve&_r=1",
      icon: Music,
      description: "@dott.ssa.porricelli1"
    },
    {
      name: "MioDottore",
      href: "https://www.miodottore.it/marika-porricelli/psicologo/cardito",
      icon: UserCheck,
      description: "Prenota una visita"
    },
    {
      name: "GuidaPsicologi",
      href: "https://www.guidapsicologi.it/studio/marika-porricelli",
      icon: Users,
      description: "Profilo su GuidaPsicologi"
    },
    {
      name: "Facebook",
      href: "https://m.facebook.com/2057828044527177/",
      icon: Facebook,
      description: "Seguimi su Facebook"
    }
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {socialMediaLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-6 rounded-lg border border-border bg-card hover:bg-accent transition-colors duration-300"
                >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{link.name}</h3>
                  <p className="text-sm text-muted-foreground text-center">{link.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;