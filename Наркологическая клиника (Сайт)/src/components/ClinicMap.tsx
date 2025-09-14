import React, { useState } from 'react';
import { MapPin, Navigation, Car, Clock, Phone, Train, Bus } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface ClinicFloor {
  id: number;
  name: string;
  rooms: {
    id: number;
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    description: string;
  }[];
}

const clinicFloors: ClinicFloor[] = [
  {
    id: 1,
    name: "1 этаж - Приём и диагностика",
    rooms: [
      { id: 1, name: "Регистратура", x: 10, y: 10, width: 80, height: 30, color: "#3B82F6", description: "Запись на прием, оформление документов" },
      { id: 2, name: "Кабинет нарколога", x: 100, y: 10, width: 70, height: 40, color: "#10B981", description: "Первичный осмотр и консультация" },
      { id: 3, name: "Процедурная", x: 180, y: 10, width: 60, height: 30, color: "#F59E0B", description: "Забор анализов, инъекции" },
      { id: 4, name: "Лаборатория", x: 250, y: 10, width: 70, height: 40, color: "#8B5CF6", description: "Экспресс-анализы" },
      { id: 5, name: "Холл ожидания", x: 10, y: 60, width: 200, height: 60, color: "#6B7280", description: "Комфортная зона ожидания с Wi-Fi" },
      { id: 6, name: "Кафетерий", x: 220, y: 60, width: 100, height: 60, color: "#EC4899", description: "Здоровое питание для пациентов" }
    ]
  },
  {
    id: 2,
    name: "2 этаж - Лечение и терапия",
    rooms: [
      { id: 7, name: "Кабинет психолога", x: 10, y: 10, width: 80, height: 50, color: "#10B981", description: "Индивидуальная психотерапия" },
      { id: 8, name: "Групповая терапия", x: 100, y: 10, width: 100, height: 50, color: "#3B82F6", description: "Сеансы групповой поддержки" },
      { id: 9, name: "Детоксикация", x: 210, y: 10, width: 110, height: 50, color: "#F59E0B", description: "Палаты для очищения организма" },
      { id: 10, name: "Медицинский пост", x: 10, y: 70, width: 70, height: 30, color: "#EF4444", description: "Круглосуточное наблюдение" },
      { id: 11, name: "Комната отдыха", x: 90, y: 70, width: 120, height: 50, color: "#8B5CF6", description: "Релаксация и восстановление" },
      { id: 12, name: "Кабинет врача", x: 220, y: 70, width: 100, height: 50, color: "#06B6D4", description: "Ведущий нарколог" }
    ]
  },
  {
    id: 3,
    name: "3 этаж - Реабилитация",
    rooms: [
      { id: 13, name: "Спортзал", x: 10, y: 10, width: 120, height: 80, color: "#10B981", description: "Физическая реабилитация" },
      { id: 14, name: "Библиотека", x: 140, y: 10, width: 80, height: 40, color: "#8B5CF6", description: "Образовательные материалы" },
      { id: 15, name: "Творческая мастерская", x: 230, y: 10, width: 90, height: 40, color: "#F59E0B", description: "Арт-терапия" },
      { id: 16, name: "Медитационный зал", x: 140, y: 60, width: 80, height: 50, color: "#06B6D4", description: "Практики осознанности" },
      { id: 17, name: "Кабинет соц. работника", x: 230, y: 60, width: 90, height: 50, color: "#EC4899", description: "Социальная адаптация" }
    ]
  }
];

const transportRoutes = [
  { type: 'metro', icon: Train, name: 'Станция метро "Московская"', time: '5 мин пешком', color: '#3B82F6' },
  { type: 'bus', icon: Bus, name: 'Автобус: 5, 15, 23, 47', time: 'Остановка "Медцентр"', color: '#10B981' },
  { type: 'car', icon: Car, name: 'На автомобиле', time: 'Бесплатная парковка', color: '#F59E0B' }
];

export function ClinicMap() {
  const [selectedFloor, setSelectedFloor] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'floors' | 'route'>('floors');

  const currentFloor = clinicFloors.find(floor => floor.id === selectedFloor);
  const selectedRoomData = currentFloor?.rooms.find(room => room.id === selectedRoom);

  const openInMaps = () => {
    const address = "г. Самара, ул. Московская, 25";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://yandex.ru/maps/?text=${encodedAddress}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Интерактивная карта клиники
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ознакомьтесь с планировкой нашего центра и узнайте, как до нас добраться
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-white rounded-xl p-1 shadow-md">
              <button
                onClick={() => setActiveTab('floors')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === 'floors' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                План этажей
              </button>
              <button
                onClick={() => setActiveTab('route')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === 'route' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Как добраться
              </button>
            </div>
          </div>

          {activeTab === 'floors' ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Floor Selector */}
              <div className="lg:col-span-1">
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Выберите этаж</h3>
                  <div className="space-y-3">
                    {clinicFloors.map((floor) => (
                      <button
                        key={floor.id}
                        onClick={() => {
                          setSelectedFloor(floor.id);
                          setSelectedRoom(null);
                        }}
                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                          selectedFloor === floor.id
                            ? 'bg-blue-100 border-2 border-blue-500 text-blue-700'
                            : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                        }`}
                      >
                        <div className="font-medium">{floor.id} этаж</div>
                        <div className="text-sm text-gray-600 mt-1">
                          {floor.name.split(' - ')[1]}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-medium mb-3">Контакты</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        ул. Московская, 25
                      </div>
                      <div className="flex items-center">
                        <Phone size={16} className="mr-2" />
                        +7 (846) 123-45-67
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        Круглосуточно
                      </div>
                    </div>
                    <Button onClick={openInMaps} className="w-full mt-4" variant="outline">
                      <Navigation size={16} className="mr-2" />
                      Открыть в картах
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Floor Plan */}
              <div className="lg:col-span-2">
                <Card className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold text-lg">
                      {currentFloor?.name}
                    </h3>
                    <div className="text-sm text-gray-500">
                      Нажмите на кабинет для подробностей
                    </div>
                  </div>

                  {/* SVG Floor Plan */}
                  <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
                    <svg viewBox="0 0 340 140" className="w-full h-80 max-w-none">
                      {/* Grid */}
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                      
                      {/* Rooms */}
                      {currentFloor?.rooms.map((room) => (
                        <g key={room.id}>
                          <rect
                            x={room.x}
                            y={room.y}
                            width={room.width}
                            height={room.height}
                            fill={selectedRoom === room.id ? room.color : `${room.color}40`}
                            stroke={room.color}
                            strokeWidth="2"
                            rx="4"
                            className="cursor-pointer transition-all duration-300 hover:opacity-80"
                            onClick={() => setSelectedRoom(selectedRoom === room.id ? null : room.id)}
                          />
                          <text
                            x={room.x + room.width / 2}
                            y={room.y + room.height / 2}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="text-xs font-medium fill-gray-700 pointer-events-none"
                          >
                            {room.name}
                          </text>
                        </g>
                      ))}
                      
                      {/* Entrance */}
                      <g>
                        <rect x="150" y="138" width="40" height="4" fill="#ef4444" rx="2"/>
                        <text x="170" y="134" textAnchor="middle" className="text-xs fill-red-600 font-medium">
                          ВХОД
                        </text>
                      </g>
                    </svg>
                  </div>

                  {/* Room Details */}
                  {selectedRoomData && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-medium text-blue-900">
                        {selectedRoomData.name}
                      </h4>
                      <p className="text-blue-700 mt-1">
                        {selectedRoomData.description}
                      </p>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          ) : (
            /* Route Tab */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Как добраться</h3>
                <div className="space-y-6">
                  {transportRoutes.map((route, index) => {
                    const IconComponent = route.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center`} style={{backgroundColor: route.color + '20'}}>
                          <IconComponent size={24} style={{color: route.color}} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{route.name}</h4>
                          <p className="text-gray-600 mt-1">{route.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white">
                  <h4 className="font-semibold mb-2">Наш адрес</h4>
                  <p className="mb-4">г. Самара, ул. Московская, 25</p>
                  <Button onClick={openInMaps} variant="secondary" className="w-full">
                    <Navigation size={16} className="mr-2" />
                    Построить маршрут
                  </Button>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Ориентиры</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>Рядом с торговым центром "Гудвин"</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span>Напротив парка "Загородный"</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span>200 метров от остановки "Медцентр"</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <span>Вход с правой стороны здания</span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-4">Режим работы</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">Приёмное отделение</div>
                      <div className="text-gray-600">Круглосуточно</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Консультации</div>
                      <div className="text-gray-600">9:00 - 21:00</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Детоксикация</div>
                      <div className="text-gray-600">24/7</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Реабилитация</div>
                      <div className="text-gray-600">8:00 - 20:00</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center text-green-800">
                    <Car size={20} className="mr-2" />
                    <span className="font-medium">Бесплатная парковка</span>
                  </div>
                  <p className="text-green-700 text-sm mt-1">
                    50 мест, видеонаблюдение, охрана
                  </p>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}