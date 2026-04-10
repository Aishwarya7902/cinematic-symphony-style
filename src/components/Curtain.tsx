import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface CurtainProps {
  onOpenComplete: () => void;
}

const Curtain = ({ onOpenComplete }: CurtainProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start opening after a short delay to allow initial render
    const timerOpen = setTimeout(() => {
      setIsOpen(true);
    }, 800);
    
    // Fade out the entire layer after revealing the shloka for a few seconds
    const timerFade = setTimeout(() => {
      setIsFadingOut(true);
    }, 4500);

    const timerComplete = setTimeout(() => {
      onOpenComplete();
    }, 5500);

    return () => {
      clearTimeout(timerOpen);
      clearTimeout(timerFade);
      clearTimeout(timerComplete);
    };
  }, [onOpenComplete]);

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 pointer-events-none flex overflow-hidden bg-[#3b000b]"
        >
          {/* REVEALED CONTENT (Behinds Curtains) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-0">
            {/* Background Texture for the Shloka screen */}
            <div className="absolute inset-0 opacity-20 bg-[url('/curtain_texture.png')] bg-cover bg-center" />
            
            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-[#c3aa64] opacity-40 shadow-[0_0_10px_#c3aa64]"
                initial={{ 
                  x: Math.random() * window.innerWidth, 
                  y: window.innerHeight + 50 
                }}
                animate={{ 
                  y: -50,
                  x: `calc(${Math.random() * 100}vw + ${Math.sin(i) * 50}px)`
                }}
                transition={{ 
                  duration: 5 + Math.random() * 5, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
            ))}

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className="relative z-10 flex flex-col items-center gap-6 text-center"
            >
              <img 
                src="/ganesha_symbol.png" 
                alt="Lord Ganesha" 
                className="w-48 md:w-64 h-auto drop-shadow-[0_0_20px_rgba(195,170,100,0.5)] glow-gold"
              />
              
              <div className="font-hindi text-[#c3aa64] text-xl md:text-3xl leading-relaxed mt-4 glow-gold whitespace-pre-line tracking-wide">
                {"वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥"}
              </div>
              <div className="font-display text-[#c3aa64] text-lg md:text-xl opacity-80 mt-2 tracking-widest uppercase">
                Shree Ganeshaya Namah
              </div>
            </motion.div>
          </div>

          {/* Left Curtain */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isOpen ? "-100%" : 0 }}
            transition={{ duration: 2.5, ease: [0.76, 0, 0.24, 1] }}
            className="absolute left-0 top-0 w-1/2 h-full bg-[#4a0000] border-r-4 border-[#c3aa64] shadow-[10px_0_30px_rgba(0,0,0,0.5)] z-10"
          >
            <div className="absolute inset-0 opacity-40 bg-[url('/curtain_texture.png')] bg-cover bg-left" />
            <div className="w-16 h-full bg-gradient-to-r from-black/40 to-transparent absolute right-0" />
            <div className="w-32 h-full bg-gradient-to-l from-black/20 to-transparent absolute right-16" />
            <div className="w-1 h-full bg-[#c3aa64] absolute right-0 shadow-[0_0_10px_#c3aa64]" />
          </motion.div>

          {/* Right Curtain */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isOpen ? "100%" : 0 }}
            transition={{ duration: 2.5, ease: [0.76, 0, 0.24, 1] }}
            className="absolute right-0 top-0 w-1/2 h-full bg-[#4a0000] border-l-4 border-[#c3aa64] shadow-[-10px_0_30px_rgba(0,0,0,0.5)] z-10"
          >
            <div className="absolute inset-0 opacity-40 bg-[url('/curtain_texture.png')] bg-cover bg-right" />
            <div className="w-16 h-full bg-gradient-to-l from-black/40 to-transparent absolute left-0" />
            <div className="w-32 h-full bg-gradient-to-r from-black/20 to-transparent absolute left-16" />
            <div className="w-1 h-full bg-[#c3aa64] absolute left-0 shadow-[0_0_10px_#c3aa64]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Curtain;
