import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import GoldenElements from "./GoldenElements";
import RoyalRajasthanBackground from "./RoyalRajasthanBackground";
import AnimatedRoyalBackground from "./AnimatedRoyalBackground";
import { Celebration } from "./Celebration";

const initialWishes = [
  { id: 1, name: "Aunt Sunita", message: "Wishing you both a lifetime of love and happiness. May God bless your union." },
  { id: 2, name: "Rohan & Family", message: "Congratulations to the wonderful couple! So excited for the wedding celebrations." },
  { id: 3, name: "The Guptas", message: "May your journey together be filled with endless joy and prosperity." },
  { id: 4, name: "Siddhi & Vivek", message: "Heartiest congratulations! Can't wait to see you both on the big day." },
];

const WishingWallSection = () => {
  const [wishes, setWishes] = useState(initialWishes);
  const [newMessage, setNewMessage] = useState("");
  const [guestName, setGuestName] = useState("Aman Sharma");
  const [showCelebration, setShowCelebration] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { guestName: pathName } = useParams();

  useEffect(() => {
    if (pathName) {
      setGuestName(decodeURIComponent(pathName).replace(/[-_]/g, ' '));
    } else {
      const params = new URLSearchParams(window.location.search);
      const guestParam = params.get("guest");
      if (guestParam) setGuestName(guestParam);
    }
  }, [pathName]);

  const handlePostWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newWish = {
      id: Date.now(),
      name: guestName,
      message: newMessage,
    };

    setWishes([newWish, ...wishes]);
    setNewMessage("");
    setShowCelebration(true);
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-y-auto py-24 bg-transparent">
      <RoyalRajasthanBackground sectionRef={sectionRef} />
      <AnimatedRoyalBackground />
      <GoldenElements />
      <Celebration active={showCelebration} onComplete={() => setShowCelebration(false)} />
      
      {/* Light Glowing Animation Background Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-radial-gradient from-[#c3aa64]/10 via-transparent to-transparent blur-[80px]"
        />
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-hindi text-[#e8dcb8] text-xl tracking-widest mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            आशीर्वाद
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-[#c3aa64] glow-gold mb-6 animate-shimmer bg-clip-text">
            Wishing Wall
          </h2>
          <div className="ornament-line mx-auto drop-shadow-[0_0_5px_#c3aa64]" />
          <p className="text-[#e8dcb8]/90 mt-8 max-w-2xl mx-auto font-body text-lg leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Dearest <span className="text-[#c3aa64] font-semibold">{guestName}</span>, leave your blessings for the couple as they begin their beautiful journey.
          </p>
        </motion.div>

        {/* Moving Film / Marquee Animation for Wishes */}
        <div className="group relative w-full overflow-hidden py-10 mb-16">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#3b000b] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#3b000b] to-transparent z-20 pointer-events-none" />
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 30, 
              repeat: Infinity 
            }}
            className="flex gap-8 whitespace-nowrap"
            style={{ width: "fit-content" }}
          >
            {[...wishes, ...wishes].map((wish, i) => (
              <div
                key={`${wish.id}-${i}`}
                className="inline-block w-[300px] md:w-[400px] bg-[#1a0004]/60 backdrop-blur-md border border-[#c3aa64]/30 p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex-shrink-0"
              >
                <p className="text-[#e8dcb8] font-body italic mb-6 text-xl whitespace-normal leading-relaxed">"{wish.message}"</p>
                <div className="text-[#c3aa64] font-display text-2xl text-right drop-shadow-[0_0_5px_#c3aa64]">
                  — {wish.name}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Post a Blessing Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-lg bg-[#2a0007]/80 backdrop-blur-xl border-2 border-[#c3aa64]/40 p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
          <h3 className="font-display text-3xl text-[#f4e2b0] mb-8 text-center drop-shadow-[0_0_8px_rgba(195,170,100,0.6)]">Post your Blessing</h3>
          <form onSubmit={handlePostWish} className="space-y-8">
            <div className="relative">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="w-full bg-black/40 border border-[#c3aa64]/30 rounded-2xl p-6 text-[#e8dcb8] focus:outline-none focus:border-[#c3aa64] transition-all h-32 resize-none text-lg placeholder-[#c3aa64]/30"
                placeholder="Write your blessings here..."
                required
              />
            </div>
            <button
              type="submit"
              className="group relative w-full overflow-hidden border-2 border-[#c3aa64] text-[#c3aa64] hover:text-[#3b000b] px-10 py-5 rounded-full transition-all duration-500 font-display uppercase tracking-[0.4em] font-bold text-lg shadow-[0_0_20px_rgba(195,170,100,0.2)] hover:shadow-[0_0_30px_rgba(195,170,100,0.5)]"
            >
              <span className="absolute inset-0 w-full h-full -ml-[100%] bg-[#c3aa64] transition-all duration-500 group-hover:ml-0 z-0 text-center flex items-center justify-center">Post Wish</span>
              <span className="relative z-10 transition-colors duration-500 group-hover:opacity-0">Post Wish</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default WishingWallSection;
