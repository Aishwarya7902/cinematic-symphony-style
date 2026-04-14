import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import GoldenElements from "./GoldenElements";
import RoyalRajasthanBackground from "./RoyalRajasthanBackground";
import AnimatedRoyalBackground from "./AnimatedRoyalBackground";

import eventMehendi from "@/assets/mehandi.jpg";
import eventHaldi from "@/assets/haldi.jpg";
import eventSangeet from "@/assets/sangeet.jpg";
import eventWedding from "@/assets/wedding.jpg";
import eventReception from "@/assets/reception.jpg";
import eventVidaai from "@/assets/vidai.jpg";

const events = [
  {
    title: "Mehendi Ceremony",
    emoji: "🌿",
    desc: "An afternoon of intricate henna, laughter, and folk songs.",
    date: "13th December, 2026",
    time: "4:00 PM onwards",
    venue: "Sharma Residence, Jaipur",
    image: eventMehendi,
  },
  {
    title: "Haldi Ceremony",
    emoji: "✨",
    desc: "Bless the couple with turmeric, flowers, and love.",
    date: "14th December, 2026",
    time: "10:00 AM onwards",
    venue: "Mehta Garden, Mumbai",
    image: eventHaldi,
  },
  {
    title: "Sangeet Night",
    emoji: "💃",
    desc: "A night of dance, music, and unforgettable performances.",
    date: "14th December, 2026",
    time: "7:00 PM onwards",
    venue: "Grand Ballroom, Taj Palace",
    image: eventSangeet,
  },
  {
    title: "Wedding Ceremony",
    emoji: "💍",
    desc: "The sacred union of two souls, bound by love and tradition.",
    date: "15th December, 2026",
    time: "9:00 AM onwards",
    venue: "Royal Mandap, Taj Palace",
    image: eventWedding,
  },
  {
    title: "Reception",
    emoji: "🥂",
    desc: "A grand celebration to toast the newlyweds with family & friends.",
    date: "15th December, 2026",
    time: "7:00 PM onwards",
    venue: "Crystal Hall, Taj Palace",
    image: eventReception,
  },
  {
    title: "Vidaai",
    emoji: "🌸",
    desc: "A heartfelt farewell as the bride begins her new journey.",
    date: "16th December, 2026",
    time: "11:00 AM",
    venue: "Sharma Residence, Jaipur",
    image: eventVidaai,
  },
];

const FloralEvents = () => {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState<number | null>(null);
  const [showImage, setShowImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const prev = () => {
    setRevealed(null);
    setActive((c) => (c - 1 + events.length) % events.length);
  };
  const next = () => {
    setRevealed(null);
    setActive((c) => (c + 1) % events.length);
  };

  const getCardStyle = (idx: number) => {
    const diff = idx - active;
    const norm = ((diff % events.length) + events.length) % events.length;
    const offset = norm > events.length / 2 ? norm - events.length : norm;

    if (offset === 0) return { x: 0, scale: 1, rotateY: 0, z: 50, opacity: 1, filter: "blur(0px)" };
    if (offset === 1) return { x: 260, scale: 0.82, rotateY: -25, z: 0, opacity: 0.6, filter: "blur(2px)" };
    if (offset === -1) return { x: -260, scale: 0.82, rotateY: 25, z: 0, opacity: 0.6, filter: "blur(2px)" };
    return { x: offset > 0 ? 400 : -400, scale: 0.7, rotateY: 0, z: -50, opacity: 0, filter: "blur(4px)" };
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen py-24 overflow-y-auto bg-transparent">
      <RoyalRajasthanBackground sectionRef={sectionRef} />
      <AnimatedRoyalBackground />
      <GoldenElements />

      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1a0004] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1a0004] to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-hindi text-[#e8dcb8] text-xl tracking-widest mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            उत्सव
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-[#c3aa64] glow-gold mb-6 animate-shimmer bg-clip-text">
            Events & Festivities
          </h2>
          <div className="ornament-line mx-auto drop-shadow-[0_0_5px_#c3aa64]" />
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative flex items-center justify-center" style={{ perspective: "1200px", minHeight: 420 }}>
          {events.map((event, idx) => {
            const style = getCardStyle(idx);
            const isActive = idx === active;
            const isRevealed = revealed === idx;

            return (
              <motion.div
                key={event.title}
                className="absolute w-[320px] md:w-[380px] cursor-pointer"
                animate={{
                  x: style.x,
                  scale: style.scale,
                  rotateY: style.rotateY,
                  z: style.z,
                  opacity: style.opacity,
                  filter: style.filter,
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ transformStyle: "preserve-3d", zIndex: isActive ? 10 : 1 }}
                onClick={() => isActive && setRevealed(isRevealed ? null : idx)}
                whileHover={isActive ? { scale: 1.03, y: -4 } : {}}
              >
                <div
                  className={`rounded-2xl p-8 md:p-10 border backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden relative ${isActive ? "border-[#c3aa64]/60 shadow-[0_0_40px_rgba(195,170,100,0.2)]" : "border-[#c3aa64]/25"}`}
                  style={{
                    background: "linear-gradient(160deg, #1f0005 0%, #1a0004 100%)",
                  }}
                >
                  {/* Dynamic Spotlight Effect for Active Card */}
                  {isActive && (
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
                  )}

                  <span className="text-5xl mb-5 block relative z-10">{event.emoji}</span>
                  <h3 className="font-display text-2xl md:text-3xl mb-3 text-[#c3aa64] glow-gold relative z-10">
                    {event.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed mb-6 text-[#e8dcb8]/80 relative z-10">
                    {event.desc}
                  </p>

                  <AnimatePresence>
                    {isRevealed && isActive ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden relative z-10"
                      >
                        <div
                          className="border-t pt-5 mt-2 space-y-2 font-body text-sm border-[#c3aa64]/20"
                        >
                          <p className="text-[#c3aa64] font-semibold">📅 {event.date}</p>
                          <p className="text-[#e8dcb8]">🕓 {event.time}</p>
                          <p className="text-[#e8dcb8]">📍 {event.venue}</p>
                        </div>
                        {/* View Animation Button */}
                        <motion.button
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="mt-4 w-full px-6 py-3 rounded-full font-body text-sm font-medium transition-all duration-300 bg-[#c3aa64] text-[#1a0004] shadow-[0_4px_15px_rgba(195,170,100,0.3)] hover:scale-105 active:scale-95"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowImage(idx);
                          }}
                        >
                          ✨ View Celebration
                        </motion.button>
                      </motion.div>
                    ) : isActive ? (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-2 px-6 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 border border-[#c3aa64] text-[#c3aa64] hover:bg-[#c3aa64] hover:text-[#1a0004] relative z-10 active:scale-95"
                        onClick={(e) => {
                          e.stopPropagation();
                          setRevealed(idx);
                        }}
                      >
                        View Details
                      </motion.button>
                    ) : null}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full flex items-center justify-center border border-[#c3aa64]/40 text-[#c3aa64] bg-[#1a0004]/80 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full flex items-center justify-center border border-[#c3aa64]/40 text-[#c3aa64] bg-[#1a0004]/80 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-3 mt-6">
          {events.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setRevealed(null); setActive(idx); }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === active ? "bg-[#c3aa64] scale-125 glow-gold" : "bg-[#c3aa64]/25"}`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Image Overlay */}
      <AnimatePresence>
        {showImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setShowImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowImage(null)}
                className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center border border-[#c3aa64]/40 bg-[#1a0004] text-[#c3aa64]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden border-2 border-[#c3aa64]/40 shadow-[0_0_60px_rgba(195,170,100,0.15)]">
                <img
                  src={events[showImage].image}
                  alt={events[showImage].title}
                  className="w-full aspect-square object-cover"
                />
              </div>

              <div className="text-center mt-6">
                <span className="text-4xl mb-2 block">{events[showImage].emoji}</span>
                <h3 className="font-display text-3xl text-[#c3aa64] glow-gold">
                  {events[showImage].title}
                </h3>
                <p className="font-body text-lg text-[#e8dcb8] mt-2">
                  {events[showImage].desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
};

export default FloralEvents;
