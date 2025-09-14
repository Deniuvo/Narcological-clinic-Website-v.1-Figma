import { useState } from 'react';
import { X, Clock, Users, Star, CheckCircle, Phone, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ServiceDetail {
  title: string;
  description: string;
  fullDescription: string;
  duration: string;
  price: string;
  methods: string[];
  stages: { title: string; description: string }[];
  benefits: string[];
  contraindications: string[];
  specialists: string[];
  equipment: string[];
}

interface ServiceDetailSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  serviceIndex: number;
}

const serviceDetails: ServiceDetail[] = [
  {
    title: 'Детоксикация',
    description: 'Безопасное выведение токсинов из организма под медицинским наблюдением',
    fullDescription: 'Процедура детоксикации направлена на полное очищение организма от продуктов распада алкоголя и наркотических веществ. Проводится в условиях стационара или на дому под постоянным наблюдением медицинского персонала.',
    duration: '3-7 дней',
    price: 'от 5 000 ₽',
    methods: [
      'Инфузионная терапия (капельницы)',
      'Медикаментозная поддержка',
      'Витаминотерапия',
      'Плазмаферез (по показаниям)',
      'Озонотерапия'
    ],
    stages: [
      {
        title: 'Первичный осмотр',
        description: 'Оценка состояния пациента, сбор анамнеза, определение степени интоксикации'
      },
      {
        title: 'Составление плана лечения',
        description: 'Индивидуальный подбор препаратов и процедур на основе состояния пациента'
      },
      {
        title: 'Детоксикационная терапия',
        description: 'Проведение капельниц, введение лекарственных препаратов'
      },
      {
        title: 'Стабилизация состояния',
        description: 'Контроль жизненных показателей, коррекция терапии при необходимости'
      },
      {
        title: 'Восстановительный период',
        description: 'Витаминотерапия, восстановление электролитного баланса'
      }
    ],
    benefits: [
      'Безопасное выведение токсинов',
      'Снятие абстинентного синдрома',
      'Восстановление работы органов',
      'Улучшение самочувствия',
      'Подготовка к дальнейшему лечению'
    ],
    contraindications: [
      'Острая сердечная недостаточность',
      'Тяжелые нарушения ритма сердца',
      'Острый инфаркт миокарда',
      'Острые психические расстройства'
    ],
    specialists: [
      'Врач-нарколог',
      'Врач-реаниматолог',
      'Медицинская сестра',
      'Врач-терапевт'
    ],
    equipment: [
      'Системы для инфузионной терапии',
      'Мониторы жизненных функций',
      'Дефибриллятор',
      'Кислородное оборудование'
    ]
  },
  {
    title: 'Кодирование',
    description: 'Современные методы кодирования от алкоголизма и наркомании',
    fullDescription: 'Кодирование - это комплекс медицинских и психотерапевтических методов, направленных на формирование стойкого отвращения к алкоголю или наркотикам. Применяются как медикаментозные, так и психотерапевтические подходы.',
    duration: '1 день',
    price: 'от 8 000 ₽',
    methods: [
      'Препарат Эспераль (дисульфирам)',
      'Торпедо (налтрексон)',
      'Кодирование по Довженко',
      'Гипнотерапия',
      'НЛП-кодирование'
    ],
    stages: [
      {
        title: 'Предварительная консультация',
        description: 'Беседа с врачом, определение противопоказаний, выбор метода'
      },
      {
        title: 'Подготовительный период',
        description: 'Воздержание от употребления (3-7 дней), медицинское обследование'
      },
      {
        title: 'Процедура кодирования',
        description: 'Введение препарата или проведение психотерапевтического сеанса'
      },
      {
        title: 'Провокационная проба',
        description: 'Демонстрация действия препарата (при медикаментозном кодировании)'
      },
      {
        title: 'Инструктаж пациента',
        description: 'Объяснение правил поведения в период действия кодирования'
      }
    ],
    benefits: [
      'Быстрый результат',
      'Высокая эффективность',
      'Долгосрочное действие',
      'Безопасность процедуры',
      'Психологическая поддержка'
    ],
    contraindications: [
      'Беременность и лактация',
      'Тяжелые заболевания печени',
      'Психические расстройства',
      'Сердечно-сосудистые заболевания'
    ],
    specialists: [
      'Врач-нарколог',
      'Психотерапевт',
      'Врач-психиатр',
      'Медицинская сестра'
    ],
    equipment: [
      'Стерильные инструменты',
      'Препараты для кодирования',
      'Оборудование для мониторинга',
      'Аптечка неотложной помощи'
    ]
  },
  {
    title: 'Реабилитация',
    description: 'Комплексная программа восстановления и социальной адаптации',
    fullDescription: 'Программа реабилитации включает в себя медицинское лечение, психологическую поддержку, социальную адаптацию и духовное восстановление. Цель - полное возвращение пациента к нормальной жизни в обществе.',
    duration: '3-12 месяцев',
    price: 'от 50 000 ₽/месяц',
    methods: [
      'Программа "12 шагов"',
      'Групповая психотерапия',
      'Индивидуальная терапия',
      'Трудотерапия',
      'Арт-терапия',
      'Семейная терапия'
    ],
    stages: [
      {
        title: 'Адаптационный период',
        description: 'Привыкание к режиму, знакомство с правилами центра'
      },
      {
        title: 'Медицинская реабилитация',
        description: 'Восстановление физического здоровья, лечение сопутствующих заболеваний'
      },
      {
        title: 'Психологическая работа',
        description: 'Индивидуальные и групповые занятия с психологом'
      },
      {
        title: 'Социальная адаптация',
        description: 'Обучение навыкам жизни в обществе, трудотерапия'
      },
      {
        title: 'Подготовка к выписке',
        description: 'Планирование дальнейшей жизни, поддержка семьи'
      }
    ],
    benefits: [
      'Комплексный подход',
      'Долгосрочная ремиссия',
      'Восстановление семейных отношений',
      'Возвращение к трудовой деятельности',
      'Духовное развитие'
    ],
    contraindications: [
      'Острые психические расстройства',
      'Инфекционные заболевания в острой стадии',
      'Тяжелые соматические заболевания',
      'Отсутствие мотивации к лечению'
    ],
    specialists: [
      'Врач-нарколог',
      'Психолог',
      'Психотерапевт',
      'Социальный работник',
      'Консультант по зависимости'
    ],
    equipment: [
      'Спортивный зал',
      'Арт-терапевтическая студия',
      'Компьютерный класс',
      'Библиотека',
      'Мастерские для трудотерапии'
    ]
  },
  {
    title: 'Лечение на дому',
    description: 'Выезд нарколога на дом для оказания неотложной помощи',
    fullDescription: 'Выездная наркологическая помощь предоставляется в комфортных домашних условиях. Врач приезжает с полным набором необходимых препаратов и оборудования для оказания качественной медицинской помощи.',
    duration: '2-6 часов',
    price: 'от 3 000 ₽',
    methods: [
      'Детоксикационные капельницы',
      'Снятие абстинентного синдрома',
      'Седативная терапия',
      'Витаминотерапия',
      'Консультирование'
    ],
    stages: [
      {
        title: 'Вызов врача',
        description: 'Обращение по телефону, описание состояния пациента'
      },
      {
        title: 'Выезд специалиста',
        description: 'Врач приезжает в течение 30-60 минут'
      },
      {
        title: 'Осмотр пациента',
        description: 'Оценка состояния, измерение жизненных показателей'
      },
      {
        title: 'Оказание помощи',
        description: 'Проведение необходимых процедур, введение препаратов'
      },
      {
        title: 'Рекомендации',
        description: 'Составление плана дальнейшего лечения'
      }
    ],
    benefits: [
      'Комфорт домашней обстановки',
      'Конфиденциальность',
      'Быстрый выезд',
      'Полный набор препаратов',
      'Индивидуальный подход'
    ],
    contraindications: [
      'Критическое состояние пациента',
      'Необходимость реанимационных мероприятий',
      'Агрессивное поведение',
      'Отсутствие условий для процедур'
    ],
    specialists: [
      'Выездной врач-нарколог',
      'Медицинская сестра',
      'Водитель-санитар'
    ],
    equipment: [
      'Портативное медицинское оборудование',
      'Препараты для детоксикации',
      'Системы для капельниц',
      'Средства первой помощи'
    ]
  },
  {
    title: 'Семейная терапия',
    description: 'Работа с созависимостью и восстановление семейных отношений',
    fullDescription: 'Семейная терапия направлена на работу не только с зависимым, но и с его близкими. Программа помогает восстановить здоровые отношения в семье и преодолеть созависимость.',
    duration: '3-6 месяцев',
    price: 'от 3 000 ₽/сеанс',
    methods: [
      'Семейные сессии',
      'Групповая терапия для созависимых',
      'Индивидуальная работа',
      'Психообразование',
      'Поведенческая терапия'
    ],
    stages: [
      {
        title: 'Диагностика семейной системы',
        description: 'Выявление паттернов взаимодействия в семье'
      },
      {
        title: 'Психообразование',
        description: 'Обучение семьи природе зависимости и созависимости'
      },
      {
        title: 'Работа с эмоциями',
        description: 'Проработка чувств вины, стыда, злости'
      },
      {
        title: 'Восстановление границ',
        description: 'Обучение здоровым способам взаимодействия'
      },
      {
        title: 'Планирование будущего',
        description: 'Создание новой модели семейных отношений'
      }
    ],
    benefits: [
      'Восстановление семейных отношений',
      'Преодоление созависимости',
      'Улучшение коммуникации',
      'Поддержка в выздоровлении',
      'Профилактика рецидивов'
    ],
    contraindications: [
      'Домашнее насилие',
      'Острые психические расстройства',
      'Нежелание участвовать в терапии',
      'Активное употребление веществ'
    ],
    specialists: [
      'Семейный психотерапевт',
      'Психолог',
      'Социальный работник',
      'Консультант по созависимости'
    ],
    equipment: [
      'Комфортная терапевтическая обстановка',
      'Аудио-видео оборудование',
      'Материалы для арт-терапии',
      'Методические пособия'
    ]
  },
  {
    title: 'Консультации',
    description: 'Круглосуточная телефонная поддержка и психологическая помощь',
    fullDescription: 'Консультационные услуги включают в себя телефонную поддержку, онлайн-консультации, очные встречи с специалистами. Доступна круглосуточная горячая линия для экстренных случаев.',
    duration: '30-60 минут',
    price: 'от 2 000 ₽',
    methods: [
      'Телефонные консультации',
      'Видео-звонки',
      'Онлайн-чат',
      'Очные встречи',
      'Кризисное вмешательство'
    ],
    stages: [
      {
        title: 'Первичный контакт',
        description: 'Установление контакта, выяснение проблемы'
      },
      {
        title: 'Оценка ситуации',
        description: 'Анализ состояния, степени риска'
      },
      {
        title: 'Консультирование',
        description: 'Предоставление информации, эмоциональная поддержка'
      },
      {
        title: 'Планирование помощи',
        description: 'Составление плана дальнейших действий'
      },
      {
        title: 'Направление к специалистам',
        description: 'Рекомендации по получению специализированной помощи'
      }
    ],
    benefits: [
      'Круглосуточная доступность',
      'Анонимность',
      'Быстрая помощь',
      'Профессиональная поддержка',
      'Удобный формат'
    ],
    contraindications: [
      'Необходимость экстренной медицинской помощи',
      'Суицидальные намерения',
      'Острые психотические состояния'
    ],
    specialists: [
      'Психолог-консультант',
      'Врач-нарколог',
      'Кризисный психолог',
      'Оператор горячей линии'
    ],
    equipment: [
      'Телефонное оборудование',
      'Компьютеры для онлайн-консультаций',
      'Программы для видео-связи',
      'База данных специалистов'
    ]
  }
];

export function ServiceDetailSidebar({ isOpen, onClose, serviceIndex }: ServiceDetailSidebarProps) {
  const [activeTab, setActiveTab] = useState('overview');
  
  if (!isOpen || serviceIndex < 0 || serviceIndex >= serviceDetails.length) return null;
  
  const service = serviceDetails[serviceIndex];

  const tabs = [
    { id: 'overview', label: 'Обзор' },
    { id: 'methods', label: 'Методы' },
    { id: 'stages', label: 'Этапы' },
    { id: 'team', label: 'Команда' }
  ];

  return (
    <div className="fixed inset-0 z-[100001] flex">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div 
        className="relative ml-auto w-full max-w-2xl bg-white h-full overflow-y-auto shadow-2xl"
        style={{
          animation: 'slideInRight 0.3s ease-out'
        }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
          <div className="flex items-center justify-between p-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
              <p className="text-gray-600 mt-1">{service.description}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          
          {/* Price and Duration */}
          <div className="px-6 pb-4 flex gap-4">
            <Badge variant="secondary" className="bg-blue-50 text-blue-700">
              <Clock className="w-4 h-4 mr-1" />
              {service.duration}
            </Badge>
            <Badge variant="secondary" className="bg-green-50 text-green-700">
              {service.price}
            </Badge>
          </div>

          {/* Tabs */}
          <div className="px-6 flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Описание</h3>
                <p className="text-gray-700 leading-relaxed">{service.fullDescription}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Преимущества</h3>
                <div className="grid grid-cols-1 gap-2">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Противопоказания</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <ul className="space-y-1">
                    {service.contraindications.map((item, index) => (
                      <li key={index} className="text-red-700 text-sm">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'methods' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Методы лечения</h3>
              <div className="grid grid-cols-1 gap-3">
                {service.methods.map((method, index) => (
                  <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-800">{method}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Используемое оборудование</h4>
                <div className="space-y-2">
                  {service.equipment.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'stages' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Этапы лечения</h3>
              <div className="space-y-4">
                {service.stages.map((stage, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">{stage.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{stage.description}</p>
                      </div>
                    </div>
                    {index < service.stages.length - 1 && (
                      <div className="ml-4 mt-2 w-0.5 h-4 bg-gray-200"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Команда специалистов</h3>
              <div className="grid grid-cols-1 gap-3">
                {service.specialists.map((specialist, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-800 font-medium">{specialist}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 text-sm">
                  Все специалисты имеют высшее медицинское образование, сертификаты по наркологии 
                  и большой опыт работы с зависимыми пациентами.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
          <div className="flex gap-3">
            <Button 
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              onClick={() => {/* Открыть попап записи */}}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Записаться
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => {/* Открыть попап консультации */}}
            >
              <Phone className="w-4 h-4 mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from { 
            transform: translateX(100%);
          }
          to { 
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export function useServiceDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceIndex, setServiceIndex] = useState(0);

  const openDetail = (index: number) => {
    setServiceIndex(index);
    setIsOpen(true);
  };

  const closeDetail = () => setIsOpen(false);

  return {
    isOpen,
    serviceIndex,
    openDetail,
    closeDetail
  };
}