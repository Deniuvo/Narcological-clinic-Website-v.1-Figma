import { motion } from 'motion/react';

export function SimpleDNA() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Simple visible DNA for testing */}
      <div className="relative w-[200px] h-screen">
        {/* Left strand */}
        <div 
          className="absolute w-4 h-full bg-blue-500/80 rounded-full left-0"
        />
        
        {/* Right strand */}
        <div 
          className="absolute w-4 h-full bg-blue-500/80 rounded-full right-0"
        />
        
        {/* Connecting bars */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-2 bg-blue-400/60 rounded-full"
            style={{
              top: `${i * 3}%`,
              transformOrigin: 'center',
            }}
            animate={{
              rotate: [i * 12, i * 12 + 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}