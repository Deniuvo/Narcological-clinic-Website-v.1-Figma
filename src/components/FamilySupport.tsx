import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, MessageCircle, Users, BookOpen } from 'lucide-react';
import { ModernPopup, usePopup } from './ModernPopups';

export function FamilySupport() {
  const { activePopup, openPopup, closePopup } = usePopup();
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
              Близкий не хочет лечиться?
              <span className="block text-blue-600">Мы поможем!</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Отказ от лечения - это часть болезни. Наши специалисты знают, как мотивировать 
              зависимого человека на лечение и помочь семье в этой сложной ситуации.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">Бесплатная консультация</h3>
                  <p className="text-gray-600">
                    Наши психологи проведут индивидуальную консультацию и помогут найти 
                    подход к вашему близкому
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">Работа с семьей</h3>
                  <p className="text-gray-600">
                    Помогаем близким понять природу зависимости и научиться правильно 
                    взаимодействовать с больным
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">Мотивационная терапия</h3>
                  <p className="text-gray-600">
                    Специальные методики, которые помогают зависимому осознать необходимость 
                    лечения
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-900 mb-2">Группы поддержки</h3>
                  <p className="text-gray-600">
                    Встречи с другими семьями, которые прошли похожий путь, обмен опытом 
                    и взаимная поддержка
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => openPopup('help')}
              >
                Получить помощь
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => openPopup('psychologist')}
              >
                Задать вопрос психологу
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1675524375058-0b0f72f5d3b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhZGRpY3Rpb24lMjByZWNvdmVyeSUyMHRoZXJhcHl8ZW58MXx8fHwxNzU3NTEwNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Семейная поддержка"
                  className="w-full h-full object-cover block"
                />
              </CardContent>
            </Card>
            
            {/* Floating card */}
           <Card className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm transform translate-y-[-5px]">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl text-blue-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Горячая линия</div>
                  <div className="text-sm text-blue-600 mt-1">8 (846) 250-55-55</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl text-gray-900 mb-4">
              Помните: зависимость - это болезнь, а не моральная слабость
            </h3>
            <p className="text-gray-600 mb-6">
              Чем раньше начать лечение, тем больше шансов на успешное выздоровление. 
              Не откладывайте обращение за помощью - каждый день может быть решающим.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => openPopup('contact')}
            >
              Связаться с психологом
            </Button>
          </div>
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
    </section>
  );
}