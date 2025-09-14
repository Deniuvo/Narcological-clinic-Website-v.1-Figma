import { motion } from 'motion/react';
import { Heart, Activity } from 'lucide-react';

export function MedicalAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Heartbeat line animation */}
      <div className="absolute top-1/4 left-0 w-full h-0.5 opacity-20">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ width: '30%' }}
        />
      </div>

      {/* Floating medical particles - responsive */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            y: [null, '-5vw', '5vw'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Medical cross animations - responsive positioning */}
      <motion.div
        className="absolute top-16 right-4 sm:right-16 text-blue-300/30"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Heart className="w-6 h-6 sm:w-8 sm:h-8" />
      </motion.div>

      <motion.div
        className="absolute bottom-16 sm:bottom-32 left-4 sm:left-16 text-blue-400/30"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.div>

      {/* Pulse waves - responsive */}
      <div className="absolute top-1/3 left-1/4">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 sm:w-16 sm:h-16 border border-blue-400/20 rounded-full"
            animate={{
              scale: [0, 1.5],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.7,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>
    </div>
  );
}