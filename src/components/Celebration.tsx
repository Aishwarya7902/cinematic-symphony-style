import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export const Celebration = ({ active, onComplete }: { active: boolean, onComplete?: () => void }) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    if (active) {
      const newSparkles = Array.from({ length: 50 }, (_, i) => ({
        id: Date.now() + i,
        x: 50, // Start center
        y: 50,
        size: Math.random() * 8 + 4,
        color: Math.random() > 0.5 ? "#d4af37" : "#f9e29c", // Gold spectrum
        duration: 1.5 + Math.random() * 1.5,
        delay: Math.random() * 0.2
      }));
      setSparkles(newSparkles);

      const timer = setTimeout(() => {
        setSparkles([]);
        if (onComplete) onComplete();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [active, onComplete]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <AnimatePresence>
        {sparkles.map((s) => (
          <motion.div
            key={s.id}
            initial={{ 
              opacity: 0, 
              scale: 0, 
              x: "50vw", 
              y: "50vh" 
            }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0, 1.2, 0.8, 0],
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              rotate: Math.random() * 360
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: s.duration, 
              delay: s.delay,
              ease: "easeOut" 
            }}
            className="absolute rounded-full"
            style={{ 
              width: s.size, 
              height: s.size, 
              backgroundColor: s.color,
              boxShadow: `0 0 10px ${s.color}, 0 0 20px ${s.color}`
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
