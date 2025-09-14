import { useState, useRef } from 'react';
import { Button } from './ui/button';
import { ChevronDown, Phone, MessageCircle, Menu, X } from 'lucide-react';
import { ModernPopup, usePopup } from './ModernPopups';

interface MenuItem {
  name: string;
  submenu?: { name: string; href: string }[];
  href?: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Услуги',
    submenu: [
      { name: 'Лечение алкоголизма', href: '#' },
      { name: 'Лечение наркомании', href: '#' },
      { name: 'Кодирование', href: '#' },
      { name: 'Детоксикация', href: '#' },
      { name: 'Реабилитация', href: '#' }
    ]
  },
  {
    name: 'Специалисты',
    submenu: [
      { name: 'Наркологи', href: '#' },
      { name: 'Психологи', href: '#' },
      { name: 'Психотерапевты', href: '#' },
      { name: 'Консультанты', href: '#' }
    ]
  },
  {
    name: 'Программы',
    submenu: [
      { name: '12 шагов', href: '#' },
      { name: 'Семейная терапия', href: '#' },
      { name: 'Групповая терапия', href: '#' },
      { name: 'Амбулаторное лечение', href: '#' }
    ]
  },
  {
    name: 'О центре',
    submenu: [
      { name: 'О нас', href: '#' },
      { name: 'Лицензии', href: '#' },
      { name: 'История центра', href: '#' },
      { name: 'Отзывы', href: '#' }
    ]
  },
  {
    name: 'Информация',
    submenu: [
      { name: 'Статьи', href: '#' },
      { name: 'Памятки', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Тесты на зависимость', href: '#' }
    ]
  },
  {
    name: 'Контакты',
    submenu: [
      { name: 'Адреса клиник', href: '#' },
      { name: 'Телефоны', href: '#' },
      { name: 'Режим работы', href: '#' },
      { name: 'Как добраться', href: '#' }
    ]
  }
];

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { activePopup, openPopup, closePopup } = usePopup();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150); // Уменьшена задержка для более быстрого отклика
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-[9999]">
      <div className="container mx-auto px-4 relative">
        {/* Top bar with contacts */}
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <div className="flex items-center space-x-2 sm:space-x-4 truncate">
            <span className="text-xs sm:text-sm text-gray-600 truncate">г. Самара, ул. Фадеева, 56А/1</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            <a href="tel:+78462505555" className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 whitespace-nowrap">
              8 (999) 333-10-74
            </a>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4 max-w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <div className="cross-logo"></div>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl text-blue-900 truncate">ХелсЦентр</h1>
              <p className="text-xs sm:text-sm text-gray-600 truncate">Наркологическая клиника</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center space-x-8 relative z-[9999]" 
            style={{ position: 'relative', zIndex: 9999 }}
          >
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className={`flex items-center space-x-1 transition-colors duration-200 relative z-[9999] ${
                    activeMenu === item.name 
                      ? 'text-blue-600 bg-blue-50 px-3 py-2 rounded-lg' 
                      : 'text-gray-700 hover:text-blue-600 px-3 py-2'
                  }`}
                  style={{ position: 'relative', zIndex: 9999 }}
                >
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown menu */}
                {activeMenu === item.name && item.submenu && (
                  <div 
                    className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 min-w-[200px] py-2 animate-in fade-in-0 zoom-in-95 duration-100"
                    style={{ 
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      zIndex: 99999,
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                      minWidth: '200px',
                      padding: '8px 0',
                      marginTop: '8px',
                      animation: 'fadeIn 0.15s ease-out'
                    }}
                  >
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        style={{ 
                          display: 'block',
                          padding: '8px 16px',
                          fontSize: '14px',
                          color: '#374151',
                          textDecoration: 'none'
                        }}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">
            <Button 
              variant="outline" 
              className="flex items-center space-x-1 xl:space-x-2 px-3 xl:px-4"
              onClick={() => openPopup('consultation')}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm xl:text-base">Вызвать врача</span>
            </Button>
            <Button 
              className="flex items-center space-x-1 xl:space-x-2 bg-blue-600 hover:bg-blue-700 px-3 xl:px-4"
              onClick={() => openPopup('psychologist')}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm xl:text-base">Задать вопрос</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {menuItems.map((item) => (
              <div key={item.name} className="mb-4">
                <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600">
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {item.submenu && (
                  <div className="mt-2 ml-4 space-y-2">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-sm text-gray-600 hover:text-blue-600"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col space-y-3 mt-6">
              <Button 
                variant="outline" 
                className="flex items-center space-x-2"
                onClick={() => openPopup('consultation')}
              >
                <Phone className="w-4 h-4" />
                <span>Вызвать врача</span>
              </Button>
              <Button 
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
                onClick={() => openPopup('psychologist')}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Задать вопрос</span>
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* Popups */}
      {activePopup && (
        <ModernPopup
          isOpen={!!activePopup}
          onClose={closePopup}
          type={activePopup as any}
        />
      )}
    </header>
  );
}