import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Phone } from 'lucide-react';
import { Button } from './ui/button';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  options?: string[];
}

const botResponses = {
  greeting: "Здравствуйте! Я виртуальный консультант клиники ХелсЦентр. Как могу помочь?",
  services: "Мы предлагаем:\n• Детоксикацию\n• Кодирование\n• Реабилитацию\n• Психотерапию\n• Амбулаторное лечение\n\nО какой услуге хотели бы узнать подробнее?",
  prices: "Стоимость лечения зависит от программы:\n• Консультация нарколога - от 2000₽\n• Детоксикация - от 5000₽\n• Кодирование - от 8000₽\n• Реабилитация - от 35000₽\n\nДля точной оценки нужна консультация врача.",
  emergency: "Если ситуация критическая, звоните немедленно:\n📞 +7 (846) 123-45-67\n\nВрач выедет в течение 30 минут!",
  appointment: "Для записи на прием:\n1. Позвоните +7 (846) 123-45-67\n2. Или оставьте заявку через форму\n3. Выберете удобное время\n\nПрием ведется круглосуточно.",
  address: "Мы находимся по адресу:\n📍 г. Самара, ул. Московская, 25\n🚇 5 минут от ст. м. Московская\n🅿️ Бесплатная парковка\n🕐 Работаем 24/7"
};

const chatFlow = [
  {
    trigger: ["привет", "здравствуйте", "добрый день", "help", "помощь"],
    response: botResponses.greeting,
    options: ["Услуги", "Цены", "Экстренная помощь", "Записаться", "Адрес"]
  },
  {
    trigger: ["услуги", "лечение", "что лечите"],
    response: botResponses.services,
    options: ["Детоксикация", "Кодирование", "Реабилитация", "Цены"]
  },
  {
    trigger: ["цены", "стоимость", "сколько стоит"],
    response: botResponses.prices,
    options: ["Записаться на консультацию", "Экстренная помощь"]
  },
  {
    trigger: ["экстренная", "срочно", "помощь", "критическая"],
    response: botResponses.emergency,
    options: ["Вызвать врача", "Записаться на прием"]
  },
  {
    trigger: ["записаться", "прием", "консультация"],
    response: botResponses.appointment,
    options: ["Адрес клиники", "Услуги"]
  },
  {
    trigger: ["адрес", "где находитесь", "как добраться"],
    response: botResponses.address,
    options: ["Записаться", "Услуги", "Цены"]
  }
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Приветственное сообщение при первом открытии
      setTimeout(() => {
        addBotMessage(botResponses.greeting, ["Услуги", "Цены", "Экстренная помощь", "Записаться", "Адрес"]);
      }, 500);
    }
  }, [isOpen]);

  const addMessage = (text: string, isBot: boolean, options?: string[]) => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      isBot,
      timestamp: new Date(),
      options
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addBotMessage = (text: string, options?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(text, true, options);
    }, 1000 + Math.random() * 1000); // Реалистичная задержка
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, false);
    const userMessage = inputValue.toLowerCase();
    setInputValue('');

    // Поиск подходящего ответа
    const matchedFlow = chatFlow.find(flow => 
      flow.trigger.some(trigger => userMessage.includes(trigger))
    );

    if (matchedFlow) {
      addBotMessage(matchedFlow.response, matchedFlow.options);
    } else {
      // Дефолтный ответ
      addBotMessage(
        "Извините, не совсем понял ваш вопрос. Могу помочь с информацией о:\n• Услугах клиники\n• Ценах на лечение\n• Записи на прием\n• Экстренной помощи",
        ["Услуги", "Цены", "Записаться", "Экстренная помощь"]
      );
    }
  };

  const handleOptionClick = (option: string) => {
    addMessage(option, false);
    
    const matchedFlow = chatFlow.find(flow => 
      flow.trigger.some(trigger => option.toLowerCase().includes(trigger))
    );

    if (matchedFlow) {
      addBotMessage(matchedFlow.response, matchedFlow.options);
    }
  };

  const handleCallDoctor = () => {
    window.open('tel:+78461234567', '_self');
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 chat-pulse"
          size="lg"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
        
        {/* Notification Badge */}
        {!isOpen && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white text-xs font-medium">1</span>
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
          <div className="fixed bottom-24 right-2 left-2 sm:right-6 sm:left-auto sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-[100002] chat-window">
    {/* Header */}
    <div className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-t-2xl">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <Bot className="w-6 h-6 text-blue-600" />
        </div>
        <div className="min-w-0">
          <h3 className="font-medium text-sm sm:text-base">Консультант ХелсЦентр</h3>
          <p className="text-xs sm:text-sm opacity-90">Онлайн • Отвечает быстро</p>
        </div>
      </div>
      <Button
        onClick={handleCallDoctor}
        variant="ghost"
        size="sm"
        className="text-white hover:bg-white/20 flex-shrink-0"
      >
        <Phone size={18} />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 h-[360px] overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] ${message.isBot ? 'order-2' : 'order-1'}`}>
                  <div className={`px-4 py-2 rounded-2xl ${
                    message.isBot 
                      ? 'bg-gray-100 text-gray-800 rounded-bl-md' 
                      : 'bg-blue-600 text-white rounded-br-md'
                  }`}>
                    <p className="whitespace-pre-line">{message.text}</p>
                  </div>
                  
                  {/* Quick Reply Options */}
                  {message.isBot && message.options && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.isBot ? 'order-1 mr-2 bg-blue-100' : 'order-2 ml-2 bg-gray-300'
                }`}>
                  {message.isBot ? <Bot size={16} className="text-blue-600" /> : <User size={16} className="text-gray-600" />}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Bot size={16} className="text-blue-600" />
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Напишите ваш вопрос..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700"
                size="sm"
              >
                <Send size={16} />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Для экстренной помощи звоните: +7 (846) 123-45-67
            </p>
          </div>
        </div>
      )}
    </>
  );
}