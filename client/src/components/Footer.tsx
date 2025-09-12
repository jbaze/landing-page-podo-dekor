import { Building2, MapPin, Phone, Mail, Facebook } from "lucide-react";

const quickLinks = [
  { name: "Услуги", href: "#services" },
  { name: "За нас", href: "#about" },
  { name: "Контакт", href: "#contact" },
  { name: "Локација", href: "#contact" }
];

const services = [
  "Сува градба",
  "Ламинат подови",
  "Фасадни материјали",
  "Електро материјали",
  "Санитарни елементи",
  "Заштита од инсекти"
];

const partners = [
  "KRONOSWISS",
  "WEBER",
  "HOROZ",
  "CERESIT"
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary text-primary-foreground">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Пододекор</h3>
                <p className="text-sm text-background/70">Центар за сува градба</p>
              </div>
            </div>
            <p className="text-background/80 mb-4 leading-relaxed">
              Водечки центар за градежни материјали и решенија за сува градба во Велес.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/PododekorCentarZaSuvaGradba" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/70 hover:text-primary transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Брзи врски</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-primary transition-colors"
                    data-testid={`link-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Услуги</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-background/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Контакт</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-background/80 text-sm">Б. Горев бб, Велес</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-background/80 text-sm">+389 43 211 097</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-background/80 text-sm">info@pododekor.com.mk</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-2 text-sm">Партнери</h5>
              <div className="flex flex-wrap gap-2">
                {partners.map((partner, index) => (
                  <span key={index} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 Пододекор - Центар за сува градба. Сите права се задржани.
          </p>
          <p className="text-background/50 text-xs mt-2">
            Понеделник - Петок: 07:00 - 18:00 | Сабота: 07:00 - 16:00 | Недела: Затворено
          </p>
        </div>
      </div>
    </footer>
  );
}