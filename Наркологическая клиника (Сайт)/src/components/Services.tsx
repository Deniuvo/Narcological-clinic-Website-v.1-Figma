import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
// Motion removed due to environment constraints
import { 
  Stethoscope, 
  Brain, 
  Heart, 
  Home, 
  Users, 
  Phone,
  ArrowRight
} from 'lucide-react';
import { ModernPopup, usePopup } from './ModernPopups';
import { ServiceDetailSidebar, useServiceDetail } from './ServiceDetailSidebar';

const services = [
  {
    icon: Stethoscope,
    title: 'Детоксикация',
    description: 'Безопасное выведение токсинов из организма под медицинским наблюдением. Снятие абстинентного синдрома.',
    features: ['24/7 наблюдение', 'Капельницы', 'Медикаменты', 'Витаминотерапия']
  },
  {
    icon: Brain,
    title: 'Кодирование',
    description: 'Современные методы кодирования от алкоголизма и наркомании. Медикаментозные и психотерапевтические методы.',
    features: ['Эспераль', 'Торпедо', 'Гипноз', 'НЛП']
  },
  {
    icon: Heart,
    title: 'Реабилитация',
    description: 'Комплексная программа восстановления и социальной адаптации. Работа с психологами и наркологами.',
    features: ['12 шагов', 'Групповая терапия', 'Трудотерапия', 'Социализация']
  },
  {
    icon: Home,
    title: 'Лечение на дому',
    description: 'Выезд нарколога на дом для оказания неотложной помощи и проведения процедур в комфортных условиях.',
    features: ['Выезд 24/7', 'Капельницы', 'Детоксикация', 'Консультации']
  },
  {
    icon: Users,
    title: 'Семейная терапия',
    description: 'Работа с созависимостью и восстановление семейных отношений. Поддержка близких пациента.',
    features: ['Созависимость', 'Семейные сессии', 'Поддержка', 'Образование']
  },
  {
    icon: Phone,
    title: 'Консультации',
    description: 'Круглосуточная телефонная поддержка, онлайн-консультации и психологическая помощь.',
    features: ['24/7 горячая линия', 'Онлайн чат', 'Видео-звонки', 'Экстренная помощь']
  }
];

export function Services() {
  const { activePopup, openPopup, closePopup } = usePopup();
  const { isOpen, serviceIndex, openDetail, closeDetail } = useServiceDetail();
  
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="text-center mb-12 animate-slide-up"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Направления деятельности центра
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предоставляем полный спектр услуг для лечения алкогольной и наркотической 
            зависимости с использованием современных методик и персонального подхода
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="card-hover animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 bg-white border-0 shadow-lg group">
                  <CardHeader>
                    <div 
                      className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4 hover-scale transition-transform duration-300"
                    >
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          className="flex items-center text-sm animate-slide-left"
                          style={{animationDelay: `${(index * 0.1) + (featureIndex * 0.05)}s`}}
                        >
                          <div 
                            className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-3 animate-pulse-slow"
                            style={{animationDelay: `${featureIndex * 0.3}s`}}
                          />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full group/btn border-blue-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                      onClick={() => openDetail(index)}
                    >
                      Подробнее
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div 
          className="text-center mt-16 animate-slide-up"
          style={{animationDelay: '0.3s'}}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-12 py-4 text-lg shadow-xl hover:shadow-2xl interactive-button hover-lift"
            onClick={() => openPopup('appointment')}
          >
            Записаться на консультацию
          </Button>
        </div>
      </div>
      
      {/* Popups */}
      {activePopup && (
        <ModernPopup
          isOpen={!!activePopup}
          onClose={closePopup}
          type={activePopup as any}
        />
      )}
      
      {/* Service Detail Sidebar */}
      <ServiceDetailSidebar
        isOpen={isOpen}
        onClose={closeDetail}
        serviceIndex={serviceIndex}
      />
    </section>
  );
}