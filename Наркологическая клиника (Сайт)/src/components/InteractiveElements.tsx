import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Heart, Activity, Shield, Stethoscope, Pill, Cross } from 'lucide-react';

export function InteractiveElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Параллакс эффекты
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);
  const rotate = useTransform(scrollY, [0, 300], [0, 180]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Интерактивный фон с курсором */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Большие медицинские иконки с параллаксом */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-10 text-blue-300/20"
      >
        <Heart className="w-24 h-24" />
      </motion.div>

      <motion.div
        style={{ y: y2, rotate }}
        className="absolute bottom-32 left-20 text-indigo-300/20"
      >
        <Stethoscope className="w-32 h-32" />
      </motion.div>

      {/* Плавающие медицинские элементы */}
      <motion.div
        className="absolute top-1/4 left-1/3"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-blue-600" />
            <div>
              <div className="text-sm font-medium text-gray-900">Безопасность</div>
              <div className="text-xs text-gray-600">100% конфиденциально</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-3/4 right-1/4"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
          <div className="flex items-center space-x-3">
            <Activity className="w-8 h-8 text-green-600" />
            <div>
              <div className="text-sm font-medium text-gray-900">Эффективность</div>
              <div className="text-xs text-gray-600">Современные методы</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Анимированная сетка */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="medicalGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <motion.path 
                d="M 60 0 L 0 0 0 60" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
                animate={{
                  strokeDasharray: ["0 4", "4 4", "0 4"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#medicalGrid)" className="text-blue-600" />
        </svg>
      </div>

      {/* Медицинские частицы */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
          }}
          animate={{
            x: [null, Math.random() * 100 + '%'],
            y: [null, Math.random() * 100 + '%'],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {i % 4 === 0 && <Cross className="w-4 h-4 text-blue-400/40" />}
          {i % 4 === 1 && <Pill className="w-4 h-4 text-indigo-400/40" />}
          {i % 4 === 2 && <Heart className="w-3 h-3 text-red-400/40" />}
          {i % 4 === 3 && <Activity className="w-3 h-3 text-green-400/40" />}
        </motion.div>
      ))}

      {/* Волновая анимация */}
      <div className="absolute bottom-0 left-0 w-full h-32">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-full opacity-10"
        >
          <motion.path
            d="M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            animate={{
              d: [
                "M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z",
                "M0,80 C300,40 900,100 1200,80 L1200,120 L0,120 Z",
                "M0,60 C300,100 900,20 1200,60 L1200,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Пульсирующие круги */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border-2 border-blue-400/20 rounded-full"
            animate={{
              scale: [0, 2],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeOut",
            }}
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>
    </div>
  );
}