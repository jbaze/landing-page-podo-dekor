import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import kronoswissLogo from "@assets/generated_images/KRONOSWISS_brand_style_logo_987de0ee.png";
import weberLogo from "@assets/generated_images/WEBER_brand_style_logo_8e4cf806.png";
import horozLogo from "@assets/generated_images/HOROZ_brand_style_logo_a31fe585.png";
import ceresitLogo from "@assets/generated_images/CERESIT_brand_style_logo_43915b3c.png";

const partners = [
  {
    name: "KRONOSWISS",
    logo: kronoswissLogo,
    description: "Авторизиран увозник на швајцарски ламинат",
    badge: "Премиум партнер"
  },
  {
    name: "WEBER",
    logo: weberLogo,
    description: "Фасадни системи со 10 години гаранција",
    badge: "Овластен дистрибутер"
  },
  {
    name: "HOROZ",
    logo: horozLogo,
    description: "Електрични уреди и осветление",
    badge: "Официјален партнер"
  },
  {
    name: "CERESIT",
    logo: ceresitLogo,
    description: "Изолациони и заштитни материјали",
    badge: "Сертифициран партнер"
  }
];

export default function PartnersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(partners.length / 3)) % Math.ceil(partners.length / 3));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
          Наши партнери
        </h3>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(partners.length / 3) }, (_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {partners.slice(slideIndex * 3, slideIndex * 3 + 3).map((partner, index) => (
                    <div key={slideIndex * 3 + index} className="text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-40 h-40 mb-6 flex items-center justify-center bg-muted/50 rounded-lg shadow-sm overflow-hidden hover-elevate transition-all duration-300">
                          <img 
                            src={partner.logo} 
                            alt={partner.name}
                            className="w-full h-full object-contain p-6"
                            data-testid={`img-partner-${slideIndex * 3 + index}`}
                          />
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <h4 className="text-2xl font-bold text-primary">{partner.name}</h4>
                          <Badge variant="secondary" className="text-xs">{partner.badge}</Badge>
                        </div>
                        <p className="text-muted-foreground text-lg">{partner.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 gap-4">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={prevSlide}
            data-testid="button-prev"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(partners.length / 3) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                data-testid={`dot-${index}`}
              />
            ))}
          </div>

          <Button 
            variant="outline" 
            size="icon" 
            onClick={nextSlide}
            data-testid="button-next"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}