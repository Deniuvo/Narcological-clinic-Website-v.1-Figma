import React, { useState, useEffect } from 'react';
import { Star, Quote, ThumbsUp, Shield, Award, Users, Clock, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface Review {
  id: number;
  name: string;
  treatment: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
  beforePhoto?: string;
  afterPhoto?: string;
}

interface Statistic {
  icon: React.ElementType;
  value: string;
  label: string;
  color: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Анна С.",
    treatment: "Лечение алкогольной зависимости",
    rating: 5,
    text: "Спасибо огромное всему коллективу клиники! После многих неудачных попыток именно здесь мне помогли справиться с зависимостью. Прошло уже 2 года без срывов. Профессиональный подход, внимательные врачи и эффективные методики.",
    date: "2 месяца назад",
    verified: true
  },
  {
    id: 2,
    name: "Михаил П.",
    treatment: "Детоксикация + кодирование",
    rating: 5,
    text: "Обратился в критическом состоянии. Врачи работали круглосуточно, быстро стабилизировали состояние. Кодирование прошло без осложнений. Сейчас чувствую себя новым человеком. Рекомендую!",
    date: "3 недели назад",
    verified: true
  },
  {
    id: 3,
    name: "Елена В.",
    treatment: "Реабилитационная программа",
    rating: 5,
    text: "Дочь проходила 3-месячную программу реабилитации. Изменения видны кардинальные - и физические, и психологические. Персонал создал атмосферу поддержки и понимания. Очень благодарна!",
    date: "1 месяц назад",
    verified: true
  },
  {
    id: 4,
    name: "Дмитрий К.",
    treatment: "Амбулаторное лечение",
    rating: 4,
    text: "Лечился амбулаторно 6 месяцев. Удобный график, не пришлось брать больничный. Врачи всегда на связи, корректировали лечение по ходу. Результат отличный!",
    date: "2 недели назад",
    verified: true
  },
  {
    id: 5,
    name: "Марина Л.",
    treatment: "Психотерапия + семейная терапия",
    rating: 5,
    text: "Проходили семейную терапию после лечения мужа. Психолог помог восстановить отношения и научил справляться с трудностями. Семья снова стала крепкой.",
    date: "1 неделя назад",
    verified: true
  }
];

const statistics: Statistic[] = [
  { icon: Users, value: "2,847", label: "Пациентов вылечено", color: "#10B981" },
  { icon: Award, value: "15", label: "Лет успешной работы", color: "#3B82F6" },
  { icon: ThumbsUp, value: "96%", label: "Положительных отзывов", color: "#8B5CF6" },
  { icon: CheckCircle, value: "89%", label: "Успешных результатов", color: "#F59E0B" }
];

const achievements = [
  "Лицензия Минздрава РФ №ЛО-63-01-004321",
  "Сертификат ISO 9001:2015",
  "Член ассоциации наркологов России",
  "Аккредитация JCI International"
];

const platforms = [
  { name: "Яндекс.Карты", rating: 4.8, reviews: 234 },
  { name: "Google Maps", rating: 4.9, reviews: 187 },
  { name: "2ГИС", rating: 4.7, reviews: 156 },
  { name: "Продокторов", rating: 4.8, reviews: 89 }
];

export function SocialProof() {
  const [currentReview, setCurrentReview] = useState(0);
  const [animatedStats, setAnimatedStats] = useState<{[key: string]: number}>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Анимация статистики
    statistics.forEach((stat, index) => {
      setTimeout(() => {
        const targetValue = parseInt(stat.value.replace(/[^\d]/g, ''));
        let currentValue = 0;
        const increment = targetValue / 50;
        
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
          }
          setAnimatedStats(prev => ({
            ...prev,
            [stat.label]: Math.floor(currentValue)
          }));
        }, 30);
      }, index * 200);
    });
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Нам доверяют тысячи пациентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные отзывы людей, которые смогли преодолеть зависимость с нашей помощью
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => {
            const IconComponent = stat.icon;
            const animatedValue = animatedStats[stat.label] || 0;
            const displayValue = stat.value.includes('%') 
              ? `${animatedValue}%` 
              : animatedValue.toLocaleString();
            
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 stat-card">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{backgroundColor: stat.color + '20'}}
                >
                  <IconComponent size={32} style={{color: stat.color}} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {displayValue}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Reviews Carousel */}
          <div className="lg:col-span-2">
            <Card className="p-8 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold">Отзывы пациентов</h3>
                <div className="flex space-x-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentReview === index ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden h-64">
                {reviews.map((review, index) => (
                  <div
                    key={review.id}
                    className={`absolute inset-0 transition-all duration-500 ${
                      currentReview === index 
                        ? 'opacity-100 transform translate-x-0' 
                        : 'opacity-0 transform translate-x-full'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <Quote size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div>
                            <div className="font-semibold text-gray-900">{review.name}</div>
                            <div className="text-sm text-gray-600">{review.treatment}</div>
                          </div>
                          {review.verified && (
                            <div className="flex items-center text-green-600 text-xs">
                              <Shield size={14} className="mr-1" />
                              Проверен
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex space-x-1">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Button variant="outline" className="w-full">
                  Читать все отзывы (234)
                </Button>
              </div>
            </Card>
          </div>

          {/* Ratings & Achievements */}
          <div className="space-y-6">
            {/* Platform Ratings */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Рейтинги на платформах</h3>
              <div className="space-y-4">
                {platforms.map((platform, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">{platform.name}</div>
                      <div className="text-sm text-gray-600">{platform.reviews} отзывов</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {renderStars(Math.floor(platform.rating))}
                      </div>
                      <span className="font-semibold text-gray-900">{platform.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Сертификаты и лицензии</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4" size="sm">
                Посмотреть документы
              </Button>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Clock size={24} />
                <h3 className="font-semibold">Круглосуточная помощь</h3>
              </div>
              <p className="text-blue-100 text-sm mb-4">
                Наши специалисты готовы помочь в любое время суток
              </p>
              <Button variant="secondary" className="w-full">
                Вызвать врача сейчас
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}