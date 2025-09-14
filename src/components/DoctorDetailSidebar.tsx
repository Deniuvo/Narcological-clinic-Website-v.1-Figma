import { useState } from "react";
import {
  X,
  Clock,
  Award,
  Star,
  Phone,
  Calendar,
  MapPin,
  GraduationCap,
  Stethoscope,
  Users,
  Heart,
  Brain,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface DoctorDetail {
  name: string;
  position: string;
  specialization: string;
  experience: string;
  education: string;
  achievements: string[];
  image: string;
  fullBio: string;
  qualifications: string[];
  specialties: string[];
  workSchedule: string;
  consultationTypes: string[];
  languages: string[];
  publications: string[];
  awards: string[];
  patientReviews: {
    rating: number;
    comment: string;
    patient: string;
  }[];
}

interface DoctorDetailSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  doctorIndex: number;
}

const doctorDetails: DoctorDetail[] = [
  {
    name: "Иванова Елена Сергеевна",
    position: "Главный врач-нарколог",
    specialization: "Лечение алкоголизма, детоксикация",
    experience: "20 лет",
    education: "СамГМУ, врач-психиатр-нарколог",
    achievements: [
      "Кандидат медицинских наук",
      "Высшая категория",
      "500+ успешных случаев",
    ],
    image:
      "https://images.unsplash.com/photo-1576669801945-7a346954da5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NzUzNzA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fullBio:
      "Елена Сергеевна - опытный врач-нарколог с 20-летним стажем работы. Возглавляет наркологическое отделение клиники с 2015 года. Специализируется на лечении алкогольной зависимости, проведении детоксикационной терапии и разработке индивидуальных программ лечения. Является автором более 25 научных работ в области наркологии.",
    qualifications: [
      "Диплом врача СамГМУ (2004)",
      "Ординатура по психиатрии-наркологии (2006)",
      'Кандидатская диссертация "Современные подходы к лечению алкогольной зависимости" (2012)',
      "Сертификат повышения квалификации по наркологии (2023)",
      'Обучение по программе "Мотивационное интервьюирование" (2022)',
    ],
    specialties: [
      "Алкогольная зависимость",
      "Детоксикационная терапия",
      "Кодирование от алкоголизма",
      "Лечение абстинентного синдрома",
      "Семейное консультирование",
      "Профилактика рецидивов",
    ],
    workSchedule: "Пн-Пт: 9:00-18:00, Сб: 9:00-15:00",
    consultationTypes: [
      "Первичная консультация",
      "Повторная консультация",
      "Семейная консультация",
      "Онлайн-консультация",
      "Выездная консультация",
    ],
    languages: ["Русский", "Английский"],
    publications: [
      "Современные методы детоксикации при алкогольной зависимости (2023)",
      "Роль семьи в процессе реабилитации (2022)",
      "Профилактика рецидивов алкоголизма (2021)",
      "Мотивационные интервенции в наркологии (2020)",
    ],
    awards: [
      "Почетная грамота Министерства здравоохранения (2020)",
      "Благодарность за вклад в развитие наркологии (2018)",
      "Лучший врач года - ХелсЦентр (2017, 2019, 2021)",
    ],
    patientReviews: [
      {
        rating: 5,
        comment:
          "Елена Сергеевна спасла мою семью. Профессиональный подход, чуткость и понимание. Рекомендую всем!",
        patient: "Анна К.",
      },
      {
        rating: 5,
        comment:
          "Благодаря доктору Ивановой я смог победить свою зависимость. Уже 3 года трезвости!",
        patient: "Михаил С.",
      },
      {
        rating: 5,
        comment:
          "Внимательный врач, объясняет все доступным языком. Лечение проходило комфортно.",
        patient: "Екатерина Л.",
      },
    ],
  },
  {
    name: "Петров Алексей Михайлович",
    position: "Врач-нарколог",
    specialization: "Лечение наркомании, кодирование",
    experience: "15 лет",
    education: "РНИМУ им. Н.И. Пирогова",
    achievements: [
      "Первая категория",
      "Сертификат по наркологии",
      "300+ пациентов",
    ],
    image:
      "https://images.unsplash.com/photo-1565647946321-a146ac24a220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZWRpY2FsJTIwdGVhbSUyMGRvY3RvcnN8ZW58MXx8fHwxNzU3NDg1NjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fullBio:
      "Алексей Михайлович специализируется на лечении наркотической зависимости и проведении различных видов кодирования. Имеет большой опыт работы с пациентами, употребляющими опиаты, стимуляторы и синтетические наркотики. Применяет современные методики лечения и индивидуальный подход к каждому пациенту.",
    qualifications: [
      "Диплом врача РНИМУ им. Н.И. Пирогова (2009)",
      "Интернатура по наркологии (2010)",
      "Сертификат специалиста по наркологии (2023)",
      'Курс "Современные методы кодирования" (2022)',
      "Обучение по работе с опиоидной зависимостью (2021)",
    ],
    specialties: [
      "Наркотическая зависимость",
      "Опиоидная зависимость",
      "Кодирование от наркомании",
      "Заместительная терапия",
      "Работа с созависимыми",
      "Профилактика передозировок",
    ],
    workSchedule: "Пн-Пт: 10:00-19:00, Сб: 10:00-16:00",
    consultationTypes: [
      "Диагностическая консультация",
      "Консультация по лечению",
      "Кодирование",
      "Контрольные осмотры",
      "Экстренная консультация",
    ],
    languages: ["Русский"],
    publications: [
      "Методы лечения опиоидной зависимости (2023)",
      "Кодирование: эффективность и безопасность (2022)",
      "Работа с семьями наркозависимых (2021)",
    ],
    awards: [
      "Благодарность за профессионализм (2022)",
      "Врач месяца - ХелсЦентр (2020, 2021)",
    ],
    patientReviews: [
      {
        rating: 5,
        comment:
          "Алексей Михайлович помог мне справиться с наркозависимостью. Очень благодарен!",
        patient: "Дмитрий П.",
      },
      {
        rating: 4,
        comment:
          "Профессиональный врач, знает свое дело. Лечение прошло успешно.",
        patient: "Александр К.",
      },
    ],
  },
  {
    name: "Смирнова Анна Владимировна",
    position: "Психолог-психотерапевт",
    specialization: "Семейная терапия, созависимость",
    experience: "12 лет",
    education: "МГУ, факультет психологии",
    achievements: [
      "Гештальт-терапевт",
      "Системная семейная терапия",
      "200+ семей",
    ],
    image:
      "https://images.unsplash.com/photo-1714976694810-85add1a29c96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwc3ljaG9sb2dpc3QlMjB0aGVyYXBpc3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU3NjAwNjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fullBio:
      "Анна Владимировна - клинический психолог и семейный психотерапевт. Специализируется на работе с созависимостью, семейных кризисах и восстановлении отношений в семьях, где есть проблемы с зависимостью. Использует современные методы психотерапии, включая гештальт-терапию и системную семейную терапию.",
    qualifications: [
      "Диплом психолога МГУ (2012)",
      "Профессиональная переподготовка по психотерапии (2014)",
      "Сертификат гештальт-терапевта (2016)",
      "Обучение системной семейной терапии (2018)",
      'Курс "Работа с созависимостью" (2022)',
    ],
    specialties: [
      "Созависимость",
      "Семейная терапия",
      "Гештальт-терапия",
      "Работа с травмой",
      "Групповая терапия",
      "Индивидуальная терапия",
    ],
    workSchedule: "Пн-Чт: 12:00-20:00, Пт: 10:00-18:00",
    consultationTypes: [
      "Индивидуальная терапия",
      "Семейная терапия",
      "Парная терапия",
      "Групповые сессии",
      "Онлайн-консультации",
    ],
    languages: ["Русский", "Английский", "Немецкий"],
    publications: [
      "Созависимость: путь к освобождению (2023)",
      "Семейная динамика в ситуации зависимости (2022)",
      "Гештальт-подход в работе с зависимостью (2021)",
    ],
    awards: [
      "Лучший психолог года - ХелсЦентр (2022)",
      "Сертификат признания от пациентов (2021)",
    ],
    patientReviews: [
      {
        rating: 5,
        comment:
          "Анна Владимировна помогла нашей семье пережить трудный период. Очень деликатный подход.",
        patient: "Семья Ивановых",
      },
      {
        rating: 5,
        comment:
          "Благодаря работе с психологом я смогла избавиться от созависимости.",
        patient: "Мария Т.",
      },
    ],
  },
  {
    name: "Козлов Дмитрий Андреевич",
    position: "Консультант по химическим зависимостям",
    specialization: 'Реабилитация, программа "12 шагов"',
    experience: "8 лет",
    education: "Программа подготовки консультантов",
    achievements: [
      "10 лет трезвости",
      "Сертифицированный консультант",
      "150+ случаев",
    ],
    image:
      "https://images.unsplash.com/photo-1565647946321-a146ac24a220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZWRpY2FsJTIwdGVhbSUyMGRvY3RvcnN8ZW58MXx8fHwxNzU3NDg1NjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fullBio:
      'Дмитрий Андреевич - сертифицированный консультант по химическим зависимостям с личным опытом выздоровления. Специализируется на проведении групповых и индивидуальных сессий по программе "12 шагов", а также на сопровождении пациентов в процессе реабилитации. Его личный опыт и профессиональные навыки помогают пациентам поверить в возможность выздоровления.',
    qualifications: [
      "Сертифицированный консультант по зависимости (2017)",
      'Обучение программе "12 шагов" (2016)',
      "Курс групповой терапии (2018)",
      "Тренинг мотивационного консультирования (2020)",
      "Повышение квалификации консультантов (2023)",
    ],
    specialties: [
      'Программа "12 шагов"',
      "Групповая терапия",
      "Мотивационное интервьюирование",
      "Профилактика рецидивов",
      "Спонсорство в программе",
      "Работа с отрицанием",
    ],
    workSchedule: "Пн-Ср,Пт: 14:00-21:00, Сб: 10:00-18:00",
    consultationTypes: [
      "Индивидуальные сессии",
      "Групповые встречи",
      "Мотивационные интервью",
      "Кризисные консультации",
      "Семейные встречи",
    ],
    languages: ["Русский"],
    publications: [
      "Мой путь к трезвости: опыт программы 12 шагов (2022)",
      "Групповая поддержка в лечении зависимости (2021)",
    ],
    awards: [
      "Благодарность от сообщества АА (2023)",
      "Консультант года - ХелсЦентр (2022)",
    ],
    patientReviews: [
      {
        rating: 5,
        comment:
          "Дмитрий Андреевич понимает как никто другой. Его поддержка бесценна.",
        patient: "Сергей В.",
      },
      {
        rating: 5,
        comment:
          "Благодаря работе с консультантом я смог начать новую жизнь.",
        patient: "Андрей М.",
      },
    ],
  },
];

export function DoctorDetailSidebar({
  isOpen,
  onClose,
  doctorIndex,
}: DoctorDetailSidebarProps) {
  const [activeTab, setActiveTab] = useState("overview");

  if (
    !isOpen ||
    doctorIndex < 0 ||
    doctorIndex >= doctorDetails.length
  )
    return null;

  const doctor = doctorDetails[doctorIndex];

  const tabs = [
    {
      id: "overview",
      label: "Обзор",
      icon: <Stethoscope className="w-4 h-4" />,
    },
    {
      id: "experience",
      label: "Опыт",
      icon: <Award className="w-4 h-4" />,
    },
    {
      id: "reviews",
      label: "Отзывы",
      icon: <Star className="w-4 h-4" />,
    },
    {
      id: "schedule",
      label: "Запись",
      icon: <Clock className="w-4 h-4" />,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <div className="fixed inset-0 z-[100000] flex">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
         className="relative ml-auto w-full max-w-2xl bg-white h-full overflow-y-auto shadow-2xl overflow-x-hidden"
         style={{
         animation: 'slideInRight 0.3s ease-out'
        }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200 z-10">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">
                    {doctor.name}
                  </h2>
                  <p className="text-sm text-blue-600 font-medium mb-2">
                    {doctor.position}
                  </p>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 text-xs"
                  >
                    {doctor.specialization}
                  </Badge>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/80 rounded-lg transition-colors flex-shrink-0"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Quick Info */}
            <div className="flex gap-4 text-sm">
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                Опыт: {doctor.experience}
              </div>
              <div className="flex items-center text-gray-600">
                <GraduationCap className="w-4 h-4 mr-1" />
                {doctor.education.split(",")[0]}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="px-6 flex space-x-1 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {tab.icon}
                <span className="ml-1.5">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
                  <Brain className="w-4 h-4 mr-2 text-blue-600" />
                  О враче
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {doctor.fullBio}
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
                  <Heart className="w-4 h-4 mr-2 text-red-500" />
                  Специализации
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {doctor.specialties.map(
                    (specialty, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">
                          {specialty}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
                  <Users className="w-4 h-4 mr-2 text-green-600" />
                  Типы консультаций
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {doctor.consultationTypes.map(
                    (type, index) => (
                      <div
                        key={index}
                        className="bg-green-50 border border-green-200 rounded-lg p-2.5"
                      >
                        <span className="text-sm text-green-800">
                          {type}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  Языки
                </h3>
                <div className="flex gap-2">
                  {doctor.languages.map((language, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs"
                    >
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2 text-purple-600" />
                  Образование и квалификация
                </h3>
                <div className="space-y-2">
                  {doctor.qualifications.map(
                    (qualification, index) => (
                      <div
                        key={index}
                        className="bg-purple-50 border border-purple-200 rounded-lg p-2.5"
                      >
                        <span className="text-sm text-purple-800">
                          {qualification}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
                  <Award className="w-4 h-4 mr-2 text-yellow-600" />
                  Награды и достижения
                </h3>
                <div className="space-y-2">
                  {doctor.awards.map((award, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2"
                    >
                      <Award className="w-3.5 h-3.5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        {award}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  Публикации
                </h3>
                <div className="space-y-2">
                  {doctor.publications.map(
                    (publication, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 border border-gray-200 rounded-lg p-2.5"
                      >
                        <span className="text-sm text-gray-800">
                          {publication}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-gray-900 flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                Отзывы пациентов
              </h3>
              <div className="space-y-3">
                {doctor.patientReviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-3"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-xs text-gray-500 font-medium">
                        {review.patient}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      "{review.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-600" />
                  Расписание работы
                </h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-800 font-medium">
                    {doctor.workSchedule}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-red-600" />
                  Где принимает
                </h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <p className="text-sm text-gray-800 font-medium">
                    ХелсЦентр, г. Самара
                  </p>
                  <p className="text-sm text-gray-600">
                    ул. Московское шоссе, 25
                  </p>
                  <p className="text-sm text-gray-600">
                    Кабинет № {doctorIndex + 101}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  Важная информация
                </h3>
                <div className="space-y-1.5 text-sm text-gray-600">
                  <p>
                    • Записаться на консультацию можно по
                    телефону или онлайн
                  </p>
                  <p>
                    • Приходите за 15 минут до назначенного
                    времени
                  </p>
                  <p>
                    • При себе иметь документ, удостоверяющий
                    личность
                  </p>
                  <p>
                    • Возможна отмена записи не позднее чем за
                    24 часа
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
          <div className="flex gap-3">
            <Button
              className="flex-1 bg-blue-600 hover:bg-blue-700"
              onClick={() => {
                /* Открыть попап записи */
              }}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Записаться
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                /* Открыть попап консультации */
              }}
            >
              <Phone className="w-4 h-4 mr-2" />
              Консультация
            </Button>
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">
            Консультация: от 2 500 ₽ • Онлайн: от 2 000 ₽
          </p>
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

export function useDoctorDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const [doctorIndex, setDoctorIndex] = useState(0);

  const openDetail = (index: number) => {
    setDoctorIndex(index);
    setIsOpen(true);
  };

  const closeDetail = () => setIsOpen(false);

  return {
    isOpen,
    doctorIndex,
    openDetail,
    closeDetail,
  };
}