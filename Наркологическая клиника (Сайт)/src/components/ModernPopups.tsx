import { useState } from 'react';
import { X, Phone, MessageCircle, Calendar, Heart, Brain, HelpCircle } from 'lucide-react';
import { Checkbox } from './ui/checkbox';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'consultation' | 'programs' | 'appointment' | 'help' | 'psychologist' | 'contact';
}

export function ModernPopup({ isOpen, onClose, type }: PopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    urgency: 'normal',
    agreedToPolicy: false
  });

  if (!isOpen) return null;

  const popupConfig = {
    consultation: {
      title: 'Получить консультацию',
      subtitle: 'Бесплатная консультация специалиста',
      icon: <Phone className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      fields: ['name', 'phone', 'message']
    },
    programs: {
      title: 'Узнать о программах',
      subtitle: 'Подберем подходящую программу лечения',
      icon: <Heart className="w-6 h-6" />,
      color: 'from-blue-400 to-blue-500',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      fields: ['name', 'phone', 'email']
    },
    appointment: {
      title: 'Записаться на консультацию',
      subtitle: 'Выберите удобное время для визита',
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconBg: 'bg-indigo-100',
      fields: ['name', 'phone', 'message', 'urgency']
    },
    help: {
      title: 'Получить помощь',
      subtitle: 'Экстренная поддержка 24/7',
      icon: <HelpCircle className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconBg: 'bg-red-100',
      fields: ['name', 'phone', 'urgency', 'message']
    },
    psychologist: {
      title: 'Задать вопрос психологу',
      subtitle: 'Анонимная психологическая поддержка',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-50',
      iconBg: 'bg-indigo-100',
      fields: ['name', 'email', 'message']
    },
    contact: {
      title: 'Связаться с психологом',
      subtitle: 'Персональная работа со специалистом',
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      fields: ['name', 'phone', 'email', 'message']
    }
  };

  const config = popupConfig[type];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreedToPolicy) {
      alert('Необходимо согласиться с политикой обработки персональных данных');
      return;
    }
    // Здесь будет обработка отправки формы
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 z-[100003] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
    style={{
      animation: 'fadeIn 0.2s ease-out'
    }}
    onClick={onClose}
      />
      
      {/* Popup */}
      <div 
        className="relative w-full max-w-md max-h-[90vh] bg-white/98 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden flex flex-col"
    style={{
      animation: 'slideUp 0.3s ease-out'
        }}
      >
        {/* Header */}
          <div className={`${config.bgColor} p-6 rounded-t-3xl relative overflow-hidden flex-shrink-0`}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className={`p-3 ${config.iconBg} rounded-2xl`}>
                <div className="text-blue-600">
                  {config.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{config.title}</h3>
                <p className="text-gray-600 text-sm">{config.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/80 rounded-xl transition-colors text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form */}
       <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto flex-1">
          {config.fields.includes('name') && (
            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Имя</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white transition-all"
                placeholder="Введите ваше имя"
                required
              />
            </div>
          )}

          {config.fields.includes('phone') && (
            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Телефон</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white transition-all"
                placeholder="+7 (___) ___-__-__"
                required
              />
            </div>
          )}

          {config.fields.includes('email') && (
            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white transition-all"
                placeholder="your@email.com"
                required
              />
            </div>
          )}

          {config.fields.includes('urgency') && (
            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Срочность</label>
              <select
                value={formData.urgency}
                onChange={(e) => handleInputChange('urgency', e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white transition-all"
              >
                <option value="normal">Плановая консультация</option>
                <option value="urgent">Срочно</option>
                <option value="emergency">Экстренно</option>
              </select>
            </div>
          )}

          {config.fields.includes('message') && (
            <div className="space-y-2">
              <label className="text-gray-700 font-medium">Сообщение</label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white transition-all min-h-[100px] resize-none"
                placeholder="Опишите вашу ситуацию..."
                rows={3}
              />
            </div>
          )}

          {/* Privacy Checkbox */}
         <div className="flex items-start space-x-3 pt-2 flex-shrink-0">
            <Checkbox
              id="privacy-policy"
              checked={formData.agreedToPolicy}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, agreedToPolicy: !!checked }))
              }
              className="mt-1"
            />
            <label 
              htmlFor="privacy-policy" 
              className="text-sm text-gray-600 leading-relaxed cursor-pointer"
            >
              Нажимая "Отправить", я соглашаюсь с{' '}
              <button 
                type="button"
                className="text-blue-600 hover:text-blue-700 underline"
                onClick={() => {/* Открыть политику конфиденциальности */}}
              >
                политикой обработки персональных данных
              </button>
              {' '}и даю согласие на получение информационных сообщений
            </label>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-6 flex-shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all"
            >
              Отмена
            </button>
            <button
              type="submit"
              disabled={!formData.agreedToPolicy}
              className={`flex-1 px-4 py-3 text-white bg-gradient-to-r ${config.color} hover:shadow-lg rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              Отправить
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export function usePopup() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const openPopup = (type: string) => setActivePopup(type);
  const closePopup = () => setActivePopup(null);

  return {
    activePopup,
    openPopup,
    closePopup
  };
}