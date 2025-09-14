import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedStats } from './AnimatedStats';
import { SimpleBackground } from './SimpleBackground';
// Motion removed due to environment constraints
import { ModernPopup, usePopup } from './ModernPopups';

export function Hero() {
  const { activePopup, openPopup, closePopup } = usePopup();
  
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 lg:py-28 min-h-screen flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
      </div>
      
      {/* Simple animated background */}
      <SimpleBackground />
      
      <div className="container mx-auto px-4 relative z-[5]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-6 lg:space-y-8 max-w-full animate-slide-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              Профессиональная помощь при
              <span className="block text-blue-600 animate-fade-in">алкогольной и наркотической зависимости</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
              Наркологическая клиника "ХелсЦентр" в Самаре предоставляет комплексное лечение 
              зависимостей с применением современных методик и индивидуального подхода
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-full animate-slide-up">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-4 shadow-lg hover:shadow-xl interactive-button hover-lift"
                onClick={() => openPopup('consultation')}
              >
                Получить консультацию
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-4 interactive-button hover-lift"
                onClick={() => openPopup('programs')}
              >
                Узнать о программах
              </Button>
            </div>

            {/* Animated Stats */}
            <AnimatedStats />
          </div>

          {/* Right image */}
          <div className="relative lg:pl-8 max-w-full">
            <div className="relative">
              {/* Main image container with proper border radius */}
              <div className="bg-white rounded-3xl p-2 shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1734002886107-168181bcd6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwc21pbGluZ3xlbnwxfHx8fDE3NTc1MTEwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Врач-нарколог ХелсЦентра"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-2xl"
                />
              </div>

              {/* Static info cards */}
              <div className="absolute top-8 -left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-green-100">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-sm text-gray-900 font-medium">Онлайн</div>
                    <div className="text-xs text-gray-600">24/7 поддержка</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 -right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-blue-100">
                <div className="text-center">
                  <div className="text-2xl text-blue-600 mb-1 font-bold">95%</div>
                  <div className="text-xs text-gray-600">успешных случаев</div>
                </div>
              </div>
            </div>
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