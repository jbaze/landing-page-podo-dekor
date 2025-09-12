import { ArrowRight, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/generated_images/construction_materials_warehouse_interior_751c9a7c.png";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary/10 to-background">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
      
      <div className="container mx-auto px-4 py-16 relative z-20">
        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="flex items-center gap-1" data-testid="badge-authorized">
              <Shield className="w-3 h-3" />
              Авторизиран увозник KRONOSWISS
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1" data-testid="badge-weber">
              <Star className="w-3 h-3" />
              WEBER партнер
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Професионални решенија за{" "}
            <span className="text-primary">сува градба</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Водечки центар за ламинат, фасадни материјали и градежни решенија во Велес. 
            Повеќе од 20 години искуство во градежништвото.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8 py-6" data-testid="button-services">
              Погледнете ги нашите услуги
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 bg-background/80 backdrop-blur-sm" 
              data-testid="button-consultation"
            >
              Бесплатна консултација
            </Button>
          </div>
          
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Години искуство</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Задоволни клиенти</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Поддршка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}