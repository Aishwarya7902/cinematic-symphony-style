import { motion } from "framer-motion";
import { useMemo } from "react";
import { GlowingMarigoldPetal } from "./RoyalIcons";

const AnimatedRoyalBackground = () => {
  // Generate magical glowing petals that match the reference image
  const petals = useMemo(() => 
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 15 + Math.random() * 35,
      // Colors from the image: Warm Gold and Royal Pink/Crimson
      color: i % 2 === 0 ? "#ffbf00" : "#ff3366",
      duration: 20 + Math.random() * 30,
      delay: Math.random() * -20, // Start mid-animation
      drift: (Math.random() - 0.5) * 150,
      rotateInitial: Math.random() * 360,
      opacity: 0.4 + Math.random() * 0.4,
      blur: Math.random() > 0.7 ? "2px" : "0px" // Some foreground blurs
    })), 
  []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#5a0001]">
      {/* Deep Cinematic Overlay - Vibrant Maroon Gradient */}
      <motion.div
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-[#3b000b] via-[#5a0001] to-[#700101] opacity-90 mix-blend-multiply"
      />
      
      {/* Enhanced Royal Mandala Focus - Matching reference scale */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-10">
        <motion.img
          src="/lovable-uploads/271ad52b-74f4-448f-8890-0b6fd501438a.png"
          alt=""
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          className="w-[180vw] md:w-[90vw] max-w-none grayscale brightness-150 contrast-125"
          style={{ filter: "sepia(100%) hue-rotate(5deg) saturate(300%)" }}
        />
      </div>

      {/* Magical Floating Glowing Petals */}
      <div className="absolute inset-0">
        {petals.map((p) => (
          <motion.div
            key={p.id}
            initial={{ 
              opacity: 0, 
              top: `${p.y}%`, 
              left: `${p.x}%`,
              rotate: p.rotateInitial,
              scale: 0.8
            }}
            animate={{ 
              opacity: [0, p.opacity, 0], 
              top: [`${p.y}%`, `${p.y - 15}%`], // Gentle upward drift
              left: [`${p.x}%`, `${p.x + p.drift / 10}%`],
              rotate: p.rotateInitial + (p.drift > 0 ? 90 : -90),
              scale: [0.8, 1.1, 0.8]
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              delay: p.delay,
              ease: "easeInOut"
            }}
            className="absolute flex items-center justify-center"
            style={{ 
              width: p.size, 
              height: p.size,
              filter: `blur(${p.blur})`,
              zIndex: p.size > 30 ? 5 : 1 // Larger ones appear slightly more foreground
            }}
          >
            <GlowingMarigoldPetal color={p.color} className="w-full h-full" />
            {/* Inner Glow Center */}
            <div 
              className="absolute inset-0 rounded-full blur-[10px]" 
              style={{ backgroundColor: p.color, opacity: 0.3 }} 
            />
          </motion.div>
        ))}
      </div>

      {/* Subtle Dust/Sparkles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            initial={{ opacity: 0, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0, 1.2, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 4, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
            className="absolute w-1 h-1 bg-[#f4e2b0] rounded-full shadow-[0_0_8px_#c3aa64]"
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedRoyalBackground;
