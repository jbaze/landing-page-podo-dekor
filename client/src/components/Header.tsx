import { Building2, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary text-primary-foreground">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Пододекор</h1>
              <p className="text-sm text-muted-foreground">Центар за сува градба</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#services" 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-services"
            >
              Услуги
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-about"
            >
              За нас
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-contact"
            >
              Контакт
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden sm:flex" data-testid="button-phone">
              <Phone className="w-4 h-4 mr-2" />
              +389 43 211 097
            </Button>
            <Button size="sm" data-testid="button-contact">
              <Mail className="w-4 h-4 mr-2" />
              Контакт
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}