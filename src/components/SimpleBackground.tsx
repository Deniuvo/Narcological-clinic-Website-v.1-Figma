import { Heart, Activity, Shield } from 'lucide-react';

export function SimpleBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Static floating icons - Motion removed due to environment constraints */}
      <div className="absolute top-20 right-16 text-blue-300/20">
        <Heart className="w-8 h-8" />
      </div>

      <div className="absolute bottom-32 left-16 text-indigo-300/20">
        <Activity className="w-10 h-10" />
      </div>

      <div className="absolute top-1/3 left-1/4 text-blue-400/15">
        <Shield className="w-6 h-6" />
      </div>

      {/* Static particles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
        />
      ))}
    </div>
  );
}