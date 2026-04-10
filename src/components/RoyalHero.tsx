import { useState, useRef } from "react";
import { motion } from "framer-motion";
import royalPalace from "@/assets/royal-palace.jpg";
import GoldenElements from "./GoldenElements";
import RoyalRajasthanBackground from "./RoyalRajasthanBackground";

const RoyalHero = () => {
  const [isCoupleMet, setIsCoupleMet] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <section ref={sectionRef} className="section-royal relative min-h-screen flex items-center justify-center overflow-y-auto">
      <RoyalRajasthanBackground sectionRef={sectionRef} />
      <GoldenElements />
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={royalPalace}
          alt="Royal palace entrance"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-bg-deep/80 via-royal-bg/60 to-royal-bg-deep/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Ornamental top */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <p className="font-hindi text-royal-gold-light text-lg tracking-widest">
            ॐ श्री गणेशाय नमः
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="ornament-line mx-auto mb-10"
        />

        {/* Couple Animation - They walk towards each other */}
        <div className="relative h-48 md:h-64 w-full mx-auto mb-8 flex items-center justify-center overflow-hidden">
          {/* Bride/Left half sliding right */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="absolute z-10 w-48 h-48 md:w-64 md:h-64"
          >
            <div 
              className="w-full h-full bg-no-repeat bg-contain bg-center" 
              style={{ 
                backgroundImage: "url('/indian_wedding_couple.png')",
                clipPath: "inset(0 50% 0 0)"
              }} 
            />
          </motion.div>

          {/* Groom/Right half sliding left */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            onAnimationComplete={() => setIsCoupleMet(true)}
            className="absolute z-10 w-48 h-48 md:w-64 md:h-64"
          >
            <div 
              className="w-full h-full bg-no-repeat bg-contain bg-center" 
              style={{ 
                backgroundImage: "url('/indian_wedding_couple.png')",
                clipPath: "inset(0 0 0 50%)"
              }} 
            />
          </motion.div>
          
          {/* Sparkler/glow effect when they meet */}
          {isCoupleMet && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 2, 1.5], opacity: [0, 0.6, 0] }}
              transition={{ duration: 1 }}
              className="absolute w-40 h-40 bg-[#c3aa64] rounded-full blur-[40px] z-0 mix-blend-screen"
            />
          )}
        </div>

        {/* Text reveals only after they meet */}
        {isCoupleMet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-[#e8dcb8] font-hindi text-xl md:text-2xl mb-4 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              With joyous hearts, we invite you to celebrate the beautiful union of
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-[#c3aa64] glow-gold mb-2 leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
            >
              Priya
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-[#c3aa64]/80 font-display italic text-3xl md:text-4xl mb-2 drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]"
            >
              &
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-[#c3aa64] glow-gold mb-8 leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
            >
              Arjun
            </motion.h1>

            {/* Date */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 1, type: "spring", stiffness: 100 }}
              className="flex items-center justify-center gap-6 text-[#f4e2b0] mb-6"
            >
              <span className="ornament-line w-12 hidden md:block" />
              <span className="font-body text-xl md:text-3xl font-semibold uppercase tracking-[0.2em] drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]">
                15 · Dec · 2026
              </span>
              <span className="ornament-line w-12 hidden md:block" />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-[#e8dcb8]/90 font-hindi italic text-lg md:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              Let's create memories that will last a lifetime.
            </motion.p>
          </motion.div>
        )}

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-royal-gold/40 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-royal-gold/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoyalHero;
