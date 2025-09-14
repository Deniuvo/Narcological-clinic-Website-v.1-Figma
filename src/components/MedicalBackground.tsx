import { motion } from 'motion/react';
import { Heart, Activity, Stethoscope, Plus, Pill, Zap } from 'lucide-react';
import { SimpleDNA } from './SimpleDNA';

export function MedicalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[2]">
      {/* Simple DNA for testing */}
      <SimpleDNA />

      {/* Animated Heart with Pulse */}
      <motion.div
        className="absolute top-20 left-[15%] text-red-300 opacity-40"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart size={60} fill="currentColor" />
      </motion.div>

      {/* ECG Line Animation */}
      <motion.div
        className="absolute top-40 right-[15%] text-blue-300 opacity-40"
        animate={{
          x: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Activity size={80} />
      </motion.div>

      {/* Floating Stethoscope */}
      <motion.div
        className="absolute bottom-[30%] left-[5%] text-green-300 opacity-30"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Stethoscope size={50} />
      </motion.div>

      {/* Medical Cross */}
      <motion.div
        className="absolute top-[60%] right-[8%] text-blue-500 opacity-60"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Plus size={45} strokeWidth={3} />
      </motion.div>

      {/* Pill Animation */}
      <motion.div
        className="absolute bottom-[60%] right-[25%] text-purple-200"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Pill size={35} />
      </motion.div>

      {/* DNA Helix Simulation */}
      <motion.div
        className="absolute top-[45%] left-[20%] text-indigo-200"
        animate={{
          rotate: [0, 360],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Zap size={40} />
      </motion.div>

      {/* Small Hearts Floating */}
      <motion.div
        className="absolute top-[25%] right-[30%] text-pink-200"
        animate={{
          y: [0, -25, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Heart size={25} fill="currentColor" />
      </motion.div>

      {/* Medical Pulse Line */}
      <motion.div
        className="absolute bottom-[40%] left-[30%] text-cyan-200"
        animate={{
          scaleX: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Activity size={55} />
      </motion.div>

      {/* Floating Plus Signs */}
      <motion.div
        className="absolute top-[70%] left-[15%] text-emerald-200"
        animate={{
          y: [0, -40, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Plus size={30} strokeWidth={2} />
      </motion.div>



      {/* Additional Heart */}
      <motion.div
        className="absolute bottom-[20%] right-[40%] text-red-400 opacity-60"
        animate={{
          scale: [0.8, 1.1, 0.8],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <Heart size={40} fill="currentColor" />
      </motion.div>

      {/* Medical Cross Small */}
      <motion.div
        className="absolute top-[15%] left-[35%] text-blue-300"
        animate={{
          rotate: [0, -360],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Plus size={25} strokeWidth={2} />
      </motion.div>

      {/* Stethoscope Small */}
      <motion.div
        className="absolute bottom-[80%] right-[20%] text-green-300"
        animate={{
          x: [0, 15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <Stethoscope size={35} />
      </motion.div>



      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-[30%] left-[60%] w-24 h-24 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full opacity-40"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[50%] right-[10%] w-16 h-16 bg-gradient-to-r from-green-300 to-teal-400 rounded-full opacity-40"
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-[60%] left-[45%] w-20 h-20 bg-gradient-to-r from-pink-300 to-red-400 rounded-full opacity-35"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}