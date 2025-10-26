import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#2D1B4E] to-[#1A1F2C]">
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzhCNUNGNiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
          <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Icon name="Sparkles" size={20} className="text-primary" />
            <span className="text-primary font-medium">Самый атмосферный квест в городе</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-scale-in">
            Escape the Misha
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Погрузитесь в мир загадок и головоломок. Сможете ли вы разгадать тайну и выбраться за 60 минут?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all text-lg px-8 py-6 shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Забронировать игру
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Узнать больше
              <Icon name="ArrowDown" size={20} className="ml-2" />
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">60</div>
              <div className="text-muted-foreground">минут</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2-6</div>
              <div className="text-muted-foreground">человек</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">18+</div>
              <div className="text-muted-foreground">возраст</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary/50" />
        </div>
      </section>

      <section id="about" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            О квесте
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Brain" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Сюжет</h3>
              <p className="text-muted-foreground leading-relaxed">
                Вы оказываетесь в загадочной комнате, где каждая деталь скрывает секрет. 
                Миша исчез, и только вы можете разгадать тайну его исчезновения. 
                Время идёт, а загадки становятся всё сложнее...
              </p>
            </Card>
            
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Puzzle" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Головоломки</h3>
              <p className="text-muted-foreground leading-relaxed">
                Уникальные механические и логические задачи, которые требуют командной работы. 
                От простых шифров до сложных технологических загадок — каждый найдёт своё испытание.
              </p>
            </Card>
            
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Sparkle" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Атмосфера</h3>
              <p className="text-muted-foreground leading-relaxed">
                Профессиональное освещение, звуковое сопровождение и декорации создают полное 
                погружение в историю. Вы почувствуете себя героем триллера!
              </p>
            </Card>
            
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Trophy" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Рекорды</h3>
              <p className="text-muted-foreground leading-relaxed">
                Лучшее время прохождения — 42 минуты! Сможете ли вы побить рекорд? 
                Каждая команда получает сертификат и фото на память о прохождении.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 px-4 relative">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Забронировать
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Заполните форму, и мы свяжемся с вами для подтверждения
          </p>
          
          <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Дата</label>
                  <Input 
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Время</label>
                  <Input 
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Количество человек (2-6)</label>
                <Input 
                  type="number"
                  min="2"
                  max="6"
                  placeholder="4"
                  value={formData.people}
                  onChange={(e) => setFormData({...formData, people: e.target.value})}
                  required
                  className="bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Комментарий (необязательно)</label>
                <Textarea 
                  placeholder="Особые пожелания..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-background/50 border-primary/30 focus:border-primary min-h-24"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6 shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4 border-t border-primary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Контакты
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 text-center hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground">
                г. Москва, ул. Загадочная, 42
              </p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 text-center hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">
                +7 (999) 123-45-67
              </p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur border-primary/20 text-center hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Режим работы</h3>
              <p className="text-muted-foreground">
                Ежедневно 10:00 — 22:00
              </p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-primary/20">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Escape the Misha. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
