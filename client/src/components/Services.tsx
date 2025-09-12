import { Home, Palette, Hammer, Zap, Bath, Bug } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dryConstructionImg from "@assets/generated_images/dry_construction_work_scene_6fdefd14.png";
import laminateImg from "@assets/generated_images/laminate_flooring_display_samples_bfeba6b9.png";
import facadeImg from "@assets/generated_images/facade_construction_materials_work_f96eec1f.png";
import electricalImg from "@assets/generated_images/electrical_supplies_and_equipment_35e4bb89.png";
import bathroomImg from "@assets/generated_images/bathroom_fixtures_and_elements_4b7168ef.png";
import insectImg from "@assets/generated_images/insect_protection_screens_solutions_c199634e.png";

const services = [
  {
    icon: Home,
    title: "Сува градба",
    description: "Комплетни системи за сува градба, гипс картон, профили и прибор за професионална изведба.",
    features: ["Гипс картон", "Метални профили", "Изолациони материјали", "Лепилни смеси"],
    image: dryConstructionImg
  },
  {
    icon: Palette,
    title: "Ламинат подови",
    description: "Авторизиран увозник на швајцарски KRONOSWISS ламинат - премиум квалитет за вашиот дом.",
    features: ["KRONOSWISS ламинат", "Подлоги за ламинат", "Плинтуси", "Транзициони профили"],
    image: laminateImg
  },
  {
    icon: Hammer,
    title: "Фасадни материјали",
    description: "WEBER фасадни системи со 10 години гаранција за професионални фасадни решенија.",
    features: ["WEBER системи", "Фасадни бои", "Изолација", "10 години гаранција"],
    image: facadeImg
  },
  {
    icon: Zap,
    title: "Електро материјали",
    description: "HOROZ електрични уреди, кабли, рефлектори и дистрибутивни табли за сите потреби.",
    features: ["HOROZ уреди", "Продолжни кабли", "Рефлектори", "Дистрибутивни табли"],
    image: electricalImg
  },
  {
    icon: Bath,
    title: "Санитарни елементи",
    description: "Комплетни решенија за бањи - арматури, огледала, грејачи и сите потребни елементи.",
    features: ["Арматури", "Огледала", "Електрични грејачи", "Санитарни додатоци"],
    image: bathroomImg
  },
  {
    icon: Bug,
    title: "Заштита од инсекти",
    description: "Мрежи за прозори и врати, електрични лампи против инсекти за комфорт во домот.",
    features: ["Мрежи за прозори", "Мрежи за врати", "Електрични лампи", "UV лампи"],
    image: insectImg
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Нашите услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплетни решенија за сува градба и завршни работи. Квалитетни материјали од водечки производители.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300 overflow-hidden" data-testid={`card-service-${index}`}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground shadow-lg">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}