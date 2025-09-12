import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const businessHours = [
  { day: "Понеделник - Петок", hours: "07:00 - 18:00" },
  { day: "Сабота", hours: "07:00 - 16:00" },
  { day: "Недела", hours: "Затворено" }
];

const contactInfo = [
  {
    icon: Phone,
    title: "Телефон",
    info: "+389 43 211 097",
    description: "Повикајте нè за брза помош"
  },
  {
    icon: Mail,
    title: "Емаил",
    info: "info@pododekor.com.mk",
    description: "Испратете нè порака"
  },
  {
    icon: MapPin,
    title: "Адреса",
    info: "Б. Горев бб, Велес",
    description: "Посетете нè во нашиот центар"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: remove mock functionality - integrate with real email service
    console.log("Form submitted:", formData);
    toast({
      title: "Пораката е пратена!",
      description: "Ќе ви одговориме во најкус можен рок.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Контактирајте нè
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Имате прашања или потреба од консултација? Контактирајте нè и нашиот тим ќе ви помогне.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Испратете порака</h3>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Име и презиме *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Вашето име"
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+389 XX XXX XXX"
                        data-testid="input-phone"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Емаил *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="vashemail@example.com"
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Порака *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Опишете го вашето прашање или проект..."
                      className="min-h-32"
                      data-testid="textarea-message"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" data-testid="button-submit">
                    <Send className="w-4 h-4 mr-2" />
                    Испрати порака
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Контакт информации</h3>
            
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-contact-${index}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
                        <contact.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{contact.title}</CardTitle>
                        <CardDescription>{contact.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="font-medium text-foreground">{contact.info}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Работно време
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-medium text-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Бесплатна достава</h4>
                <p className="text-primary-foreground/90">
                  За нарачки над 5.000 денари во градот Велес и околните места.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}