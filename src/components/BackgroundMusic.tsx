import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface BackgroundMusicProps {
  autoStart: boolean;
}

const BackgroundMusic = ({ autoStart }: BackgroundMusicProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // We'll use a placeholder royalty-free Indian classical track
    // In a real app, this would be a local asset like /assets/royal_symphony.mp3
    const audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3");
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (autoStart && audioRef.current && !isPlaying) {
      // Browsers often block auto-play without interaction, 
      // but since this starts after the curtain opens (which requires interaction), it might work.
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Auto-play blocked by browser:", err);
      });
    }
  }, [autoStart]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[60]">
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={toggleMusic}
        className="relative group p-4 rounded-full bg-black/40 backdrop-blur-md border border-[#c3aa64]/30 text-[#c3aa64] shadow-[0_0_20px_rgba(195,170,100,0.2)] hover:border-[#c3aa64] hover:shadow-[0_0_30px_rgba(195,170,100,0.4)] transition-all duration-300"
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <Volume2 size={24} />
              {/* Musical pulses */}
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full border border-[#c3aa64]/50 pointer-events-none"
              />
            </motion.div>
          ) : (
            <motion.div
              key="muted"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <VolumeX size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Tooltip */}
        <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-black/60 backdrop-blur-md border border-[#c3aa64]/20 rounded-lg text-xs font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          {isPlaying ? "Mute Symphony" : "Play Symphony"}
        </span>
      </motion.button>
    </div>
  );
};

export default BackgroundMusic;
