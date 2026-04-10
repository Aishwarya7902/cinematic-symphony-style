import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import GoldenElements from "./GoldenElements";
import RoyalRajasthanBackground from "./RoyalRajasthanBackground";
import AnimatedRoyalBackground from "./AnimatedRoyalBackground";
import { Celebration } from "./Celebration";

type Response = "accepted" | null;

const RSVPSection = () => {
  const [response, setResponse] = useState<Response>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-y-auto py-24 bg-transparent">
      <RoyalRajasthanBackground sectionRef={sectionRef} />
      <AnimatedRoyalBackground />
      <GoldenElements />
      <Celebration active={showCelebration} onComplete={() => setShowCelebration(false)} />
      
      <div className="relative z-10 max-w-2xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-hindi text-[#e8dcb8] text-xl tracking-widest mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            आर एस वी पी
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-[#c3aa64] glow-gold mb-6 animate-shimmer bg-clip-text">
            RSVP
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="ornament-line mx-auto mb-8"
          />
          <p className="font-body text-[#e8dcb8]/80 text-lg">
            Kindly respond by 1st November, 2026
          </p>
        </motion.div>

        {/* Buttons / Response */}
        <AnimatePresence mode="wait">
          {response === null ? 
            <motion.div
              key="buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center"
            >
              <button
                onClick={() => {
                  setResponse("accepted");
                  setShowCelebration(true);
                }}
                className="group relative w-full sm:w-auto overflow-hidden border-2 border-[#c3aa64] text-[#c3aa64] hover:text-[#3b000b] px-12 py-5 rounded-full transition-all duration-500 font-display text-2xl uppercase tracking-[0.2em] font-bold shadow-[0_0_20px_rgba(195,170,100,0.2)] hover:shadow-[0_0_30px_rgba(195,170,100,0.5)]"
              >
                <span className="absolute inset-0 w-full h-full -ml-[100%] bg-[#c3aa64] transition-all duration-500 group-hover:ml-0 z-0 text-center flex items-center justify-center">Joyfully Accept</span>
                <span className="relative z-10 transition-colors duration-500 group-hover:opacity-0">🙏 Joyfully Accept</span>
              </button>
            </motion.div>
           : 
            <motion.div
              key="response"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center py-12 px-8 rounded-[2.5rem] bg-[#1f0005]/60 backdrop-blur-xl border-2 border-[#c3aa64]/30 shadow-[0_20px_60px_rgba(0,0,0,0.7)] max-w-md mx-auto relative overflow-hidden"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#c3aa64]/5 blur-[60px] rounded-full" />
              
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-7xl mb-8 block"
              >
                🎉
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="font-display text-4xl mb-4 text-[#f4e2b0] glow-gold"
              >
                We're Thrilled!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-body text-[#e8dcb8] text-lg leading-relaxed mb-8"
              >
                Thank you for accepting our invitation. We can't wait to celebrate this beautiful journey with you!
              </motion.p>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                onClick={() => setResponse(null)}
                className="text-sm font-body text-[#c3aa64]/50 underline underline-offset-8 hover:text-[#c3aa64] transition-colors"
              >
                Change response
              </motion.button>
            </motion.div>
          }
        </AnimatePresence>


        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20 pt-10 border-t border-[#c3aa64]/10"
        >
          <p className="font-hindi text-2xl mb-4 text-[#c3aa64]/50">शुभ विवाह</p>
          <p className="font-display text-3xl mb-2 text-[#f4e2b0]">Aarav &amp; Priya</p>
          <p className="font-body text-lg text-[#c3aa64]/40 tracking-widest">15 · 12 · 2026</p>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPSection;
