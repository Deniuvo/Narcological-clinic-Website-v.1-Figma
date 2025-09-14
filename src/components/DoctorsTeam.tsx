import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Award, Clock, Users } from 'lucide-react';
import { DoctorDetailSidebar, useDoctorDetail } from './DoctorDetailSidebar';
import { ModernPopup, usePopup } from './ModernPopups';

const doctors = [
  {
    name: 'Иванова Елена Сергеевна',
    position: 'Главный врач-нарколог',
    specialization: 'Лечение алкоголизма, детоксикация',
    experience: '20 лет',
    education: 'СамГМУ, врач-психиатр-нарколог',
    achievements: ['Кандидат медицинских наук', 'Высшая категория', '500+ успешных случаев'],
    image: 'https://images.unsplash.com/photo-1576669801945-7a346954da5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NzUzNzA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Петров Алексей Михайлович',
    position: 'Врач-нарколог',
    specialization: 'Лечение наркомании, кодирование',
    experience: '15 лет',
    education: 'РНИМУ им. Н.И. Пирогова',
    achievements: ['Первая категория', 'Сертификат по наркологии', '300+ пациентов'],
    image: 'https://images.unsplash.com/photo-1565647946321-a146ac24a220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZWRpY2FsJTIwdGVhbSUyMGRvY3RvcnN8ZW58MXx8fHwxNzU3NDg1NjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Смирнова Анна Владимировна',
    position: 'Психолог-психотерапевт',
    specialization: 'Семейная терапия, созависимость',
    experience: '12 лет',
    education: 'МГУ, факультет психологии',
    achievements: ['Гештальт-терапевт', 'Системная семейная терапия', '200+ семей'],
    image: 'https://images.unsplash.com/photo-1714976694810-85add1a29c96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwc3ljaG9sb2dpc3QlMjB0aGVyYXBpc3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU3NjAwNjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Козлов Дмитрий Андреевич',
    position: 'Консультант по химическим зависимостям',
    specialization: 'Реабилитация, программа "12 шагов"',
    experience: '8 лет',
    education: 'Программа подготовки консультантов',
    achievements: ['10 лет трезвости', 'Сертифицированный консультант', '150+ случаев'],
    image: 'https://images.unsplash.com/photo-1565647946321-a146ac24a220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZWRpY2FsJTIwdGVhbSUyMGRvY3RvcnN8ZW58MXx8fHwxNzU3NDg1NjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function DoctorsTeam() {
  const { isOpen, doctorIndex, openDetail, closeDetail } = useDoctorDetail();
  const { activePopup, openPopup, closePopup } = usePopup();
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Наши врачи
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Команда высококвалифицированных специалистов с большим опытом работы 
            в области наркологии и реабилитации зависимых
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {doctors.map((doctor, index) => (
            <Card 
              key={index} 
              className="bg-white hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openDetail(index)}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <ImageWithFallback 
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg text-gray-900 mb-1">
                  {doctor.name}
                </CardTitle>
                <p className="text-blue-600 mb-2">{doctor.position}</p>
                <Badge variant="secondary" className="text-xs">
                  {doctor.specialization}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">Опыт: {doctor.experience}</span>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <strong>Образование:</strong> {doctor.education}
                  </div>

                  <div className="space-y-1">
                    <div className="text-sm text-gray-700 mb-2">Достижения:</div>
                    {doctor.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center text-xs">
                        <Award className="w-3 h-3 text-yellow-500 mr-2" />
                        <span className="text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team stats */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">специалистов</div>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">лет опыта</div>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl text-gray-900 mb-2">4.8/5</div>
              <div className="text-gray-600">рейтинг</div>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">доступность</div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center mt-12 bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl mb-4">Нужна консультация специалиста?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Наши врачи готовы ответить на ваши вопросы и помочь выбрать оптимальную 
            программу лечения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              onClick={() => openPopup('appointment')}
            >
              Записаться к врачу
            </button>
            <button 
              className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => openPopup('psychologist')}
            >
              Задать вопрос
            </button>
          </div>
        </div>
      </div>
      
      {/* Doctor Detail Sidebar */}
      <DoctorDetailSidebar
        isOpen={isOpen}
        onClose={closeDetail}
        doctorIndex={doctorIndex}
      />
      
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