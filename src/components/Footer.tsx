import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="cross-logo bg-white"></div>
              <div>
                <h3 className="text-lg">ХелсЦентр</h3>
                <p className="text-sm text-gray-400">Наркологическая клиника</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Профессиональная помощь при алкогольной и наркотической зависимости 
              в Самаре. Лицензированная клиника с опытом работы более 15 лет.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-6">Услуги</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Лечение алкоголизма</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Лечение наркомании</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Детоксикация</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Кодирование</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Реабилитация</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Семейная терапия</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg mb-6">Информация</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">О центре</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Наши врачи</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Лицензии</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Отзывы</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Статьи</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Вопросы и ответы</a></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg mb-6">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">г. Самара</p>
                  <p className="text-gray-300">ул. Московское шоссе, 25</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-white">+7 (846) 250-55-55</p>
                  <p className="text-sm text-gray-400">Круглосуточно</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300">info@helscentr-samara.ru</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Ежедневно 24/7</p>
                  <p className="text-sm text-gray-400">Экстренная помощь</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ХелсЦентр. Все права защищены.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-4 text-center md:text-left">
            Лицензия на осуществление медицинской деятельности № ЛО-63-01-004567 от 15.03.2021
          </div>
        </div>
      </div>
    </footer>
  );
}