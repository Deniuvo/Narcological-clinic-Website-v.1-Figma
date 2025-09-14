import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Clock, Users, Award } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

function StatItem({ icon, value, label, delay }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="text-center lg:text-left group"
    >
      <div className="flex items-center justify-center lg:justify-start mb-3">
        <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
          {icon}
        </div>
      </div>
      
      <div className="text-2xl lg:text-3xl text-gray-900 mb-1 font-semibold">
        {value}
      </div>
      
      <div className="text-xs lg:text-sm text-gray-600">{label}</div>
    </motion.div>
  );
}

export function AnimatedStats() {
  const stats = [
    {
      icon: <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />,
      value: "15+",
      label: "лет опыта",
      delay: 0
    },
    {
      icon: <Users className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />,
      value: "2000+",
      label: "пациентов",
      delay: 100
    },
    {
      icon: <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />,
      value: "24/7",
      label: "поддержка",
      delay: 200
    },
    {
      icon: <Award className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />,
      value: "92%",
      label: "успешных случаев",
      delay: 300
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-6 lg:pt-8 max-w-full">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
}