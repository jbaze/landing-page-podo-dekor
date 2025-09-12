import { Award, Clock, MapPin, Users, Target, Lightbulb, Heart, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import teamPhoto from "@assets/generated_images/Professional_construction_team_photo_1ffa7df3.png";
import TransformationSlider from "./TransformationSlider";

const stats = [
  {
    icon: Clock,
    value: "20+",
    label: "Години искуство",
    description: "Долгогодишно присуство на пазарот"
  },
  {
    icon: Users,
    value: "1000+", 
    label: "Задоволни клиенти",
    description: "Успешно завршени проекти"
  },
  {
    icon: Award,
    value: "4",
    label: "Сертификати",
    description: "Меѓународни партнерства"
  },
  {
    icon: MapPin,
    value: "Велес",
    label: "Локација",
    description: "Центар на Македонија"
  }
];

const features = [
  "Искусна екипа",
  "Сертификувани мајстори са долгогодишно искуство",
  "Квалитетни материјали", 
  "Користиме само најквалитетни материјали познатих брендова",
  "Комплетна услуга",
  "Од планирање до завршеток - сè на едно место",
  "Гаранција квалитет",
  "Пружаме гаранција на сите наши работи"
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            О Нама
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Пододекор е водечка компанија у области сува градба са преко 15 година 
            искуства на тржишту Србије. Основали смо се са визијом пружања 
            најквалитетнијих услуга у градјевинарству, фокусирајући се на прецизност, 
            квалитет и задовољство клијента.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="space-y-6">
              {features.map((feature, index) => {
                if (index % 2 === 0) {
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{feature}</h4>
                        <p className="text-muted-foreground">{features[index + 1]}</p>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={teamPhoto} 
              alt="Наш стручни тим"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3">
              <h4 className="font-bold text-foreground">Наш стручни тим</h4>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover-elevate" data-testid={`card-stat-${index}`}>
              <CardHeader className="pb-2">
                <div className="flex justify-center mb-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                <CardDescription className="font-medium text-foreground">{stat.label}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <TransformationSlider />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover-elevate">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground">
                  <Target className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Нашата мисија</h3>
              <p className="text-muted-foreground leading-relaxed">
                Трансформишемо ваше просторе у функционалне и естетски привлачне амбиенте, користећи 
                најсавременије технике сува градба и најквалитетније материјале. Ваш успех је наш успех.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-chart-2/10 to-chart-2/5 border-chart-2/20 hover-elevate">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-chart-2 text-background">
                  <Lightbulb className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Нашата визија</h3>
              <p className="text-muted-foreground leading-relaxed">
                Да бидеме водечки центар за сува градба во регионот, познати по иновации и одличен квалитет.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-chart-3/10 to-chart-3/5 border-chart-3/20 hover-elevate">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-chart-3 text-background">
                  <Heart className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Нашите вредности</h3>
              <p className="text-muted-foreground leading-relaxed">
                Квалитет, доверба и професионализам во секое решение што го нудиме на нашите клиенти.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}