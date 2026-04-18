import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Phone } from "lucide-react";
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
                animate={{ 
                  borderColor: ["rgba(195, 170, 100, 0.4)", "rgba(244, 226, 176, 0.8)", "rgba(195, 170, 100, 0.4)"],
                  boxShadow: [
                    "0 0 20px rgba(195, 170, 100, 0.1)",
                    "0 0 40px rgba(195, 170, 100, 0.3)",
                    "0 0 20px rgba(195, 170, 100, 0.1)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              >
                {/* Dynamic Spotlight Effect */}
                <motion.div 
                  className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(195,170,100,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                  }}
                />

                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#c3aa64] to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                
                <AnimatePresence mode="wait">
                  <motion.span
                    key={item.val}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="font-display text-4xl md:text-6xl text-[#f4e2b0] glow-gold mb-1 relative z-10"
                  >
                    {String(item.val).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>
                
                <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#c3aa64]/70 relative z-10">
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
          animate={{ 
            y: [0, -10, 0],
            boxShadow: [
              "0 20px 60px rgba(0,0,0,0.7), 0 0 20px rgba(195, 170, 100, 0.05)",
              "0 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(195, 170, 100, 0.15)",
              "0 20px 60px rgba(0,0,0,0.7), 0 0 20px rgba(195, 170, 100, 0.05)"
            ]
          }}
          viewport={{ once: true }}
          transition={{ 
            delay: 0.6, 
            duration: 1,
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            boxShadow: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="bg-[#1f0005]/60 border-2 border-[#c3aa64]/30 p-10 md:p-16 rounded-[3rem] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative overflow-hidden group"
        >
          {/* Animated Glow Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-20 w-64 h-64 bg-[#c3aa64]/10 blur-[80px] rounded-full pointer-events-none" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#c3aa64]/10 blur-[80px] rounded-full pointer-events-none" 
          />
          
          <div className="absolute inset-0 border border-[#c3aa64]/20 rounded-[3rem] pointer-events-none" />
          
          <p className="font-display text-4xl md:text-6xl text-[#f4e2b0] mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] relative z-10">
            15th December, 2026
          </p>
          
          <div className="space-y-4 font-hindi text-xl md:text-2xl text-[#f4e2b0]/90 tracking-wide mb-8 relative z-10">
            <p className="glow-gold">समय: सायं 7:00 बजे</p>
            <p className="glow-gold">स्थान: द ग्रैंड बॉलरूम, ताज पैलेस, मुंबई</p>
          </div>
          
          <div className="ornament-line mx-auto w-1/4 mb-10 opacity-50 relative z-10" />
          
          <p className="font-body text-[#e8dcb8]/80 text-sm uppercase tracking-[0.5em] leading-loose relative z-10 drop-shadow-md mb-10">
            Traditional Elegance · Black Tie
          </p>

          {/* Father's Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 border-t border-[#c3aa64]/20 pt-10">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#c3aa64]/5 border border-[#c3aa64]/10"
            >
              <div className="flex items-center gap-2 text-[#f4e2b0]">
                <Phone size={16} className="text-[#c3aa64]" />
                <span className="font-display text-lg tracking-wider">Mr. Sharma</span>
              </div>
              <p className="font-hindi text-[#e8dcb8]/60 text-xs mb-1">(Bride's Father)</p>
              <a href="tel:+919988776655" className="font-body text-[#c3aa64] hover:text-[#f4e2b0] transition-colors tracking-[0.2em] font-medium text-sm lg:text-base">+91 99887 76655</a>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#c3aa64]/5 border border-[#c3aa64]/10"
            >
              <div className="flex items-center gap-2 text-[#f4e2b0]">
                <Phone size={16} className="text-[#c3aa64]" />
                <span className="font-display text-lg tracking-wider">Mr. Verma</span>
              </div>
              <p className="font-hindi text-[#e8dcb8]/60 text-xs mb-1">(Groom's Father)</p>
              <a href="tel:+918877665544" className="font-body text-[#c3aa64] hover:text-[#f4e2b0] transition-colors tracking-[0.2em] font-medium text-sm lg:text-base">+91 88776 65544</a>
            </motion.div>
          </div>
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
