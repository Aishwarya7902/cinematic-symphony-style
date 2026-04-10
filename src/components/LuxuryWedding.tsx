import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import GoldenElements from "./GoldenElements";
import RoyalRajasthanBackground from "./RoyalRajasthanBackground";
import AnimatedRoyalBackground from "./AnimatedRoyalBackground";

const weddingDate = new Date("2026-12-15T19:00:00");

const LuxuryWedding = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-y-auto py-24 bg-transparent">
      <RoyalRajasthanBackground sectionRef={sectionRef} />
      <AnimatedRoyalBackground />
      <GoldenElements />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <p className="font-hindi text-[#e8dcb8] text-xl tracking-[0.3em] mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            शुभ विवाह
          </p>
          <h2 className="font-display text-5xl md:text-8xl text-[#c3aa64] glow-gold mb-6 animate-shimmer bg-clip-text">
            Wedding Ceremony
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="ornament-line mx-auto mb-16"
          />
        </motion.div>

        {/* Countdown */}
        <div className="flex justify-center flex-wrap gap-6 md:gap-12 mb-20">
          {[
            { val: timeLeft.days, label: "Days" },
            { val: timeLeft.hours, label: "Hours" },
            { val: timeLeft.minutes, label: "Minutes" },
            { val: timeLeft.seconds, label: "Seconds" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-2xl bg-[#1a0004]/80 backdrop-blur-xl border border-[#c3aa64]/40 shadow-[0_15px_35px_rgba(0,0,0,0.6)] group hover:border-[#c3aa64] transition-all duration-500 overflow-hidden relative"
                animate={{ borderColor: ["rgba(195, 170, 100, 0.4)", "rgba(244, 226, 176, 0.8)", "rgba(195, 170, 100, 0.4)"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#c3aa64] to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                
                <AnimatePresence mode="wait">
                  <motion.span
                    key={item.val}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="font-display text-4xl md:text-6xl text-[#f4e2b0] glow-gold mb-1"
                  >
                    {String(item.val).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>
                
                <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#c3aa64]/70">
                  {item.label}
                </span>
                </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ y: [0, -10, 0] }}
          viewport={{ once: true }}
          transition={{ 
            delay: 0.6, 
            duration: 1,
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="bg-[#1f0005]/60 border-2 border-[#c3aa64]/20 p-10 md:p-16 rounded-[3rem] backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#c3aa64]/5 blur-[60px] rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#c3aa64]/5 blur-[60px] rounded-full" />
          
          <p className="font-display text-4xl md:text-6xl text-[#f4e2b0] mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
            15th December, 2026
          </p>
          
          <div className="space-y-4 font-hindi text-xl md:text-2xl text-[#c3aa64]/90 tracking-wide mb-8">
            <p>समय: सायं 7:00 बजे</p>
            <p>स्थान: द ग्रैंड बॉलरूम, ताज पैलेस, मुंबई</p>
          </div>
          
          <div className="ornament-line mx-auto w-1/4 mb-10 opacity-30" />
          
          <p className="font-body text-[#e8dcb8]/60 text-sm uppercase tracking-[0.5em] leading-loose">
            Traditional Elegance · Black Tie
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer-gold {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default LuxuryWedding;
