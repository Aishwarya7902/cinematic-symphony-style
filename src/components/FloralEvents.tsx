import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RosePetals from "./RosePetals";
import GoldenElements from "./GoldenElements";

const events = [
  {
    title: "Mehendi Ceremony",
    emoji: "🌿",
    desc: "An afternoon of intricate henna, laughter, and folk songs.",
    date: "13th December, 2026",
    time: "4:00 PM onwards",
    venue: "Sharma Residence, Jaipur",
  },
  {
    title: "Haldi Ceremony",
    emoji: "✨",
    desc: "Bless the couple with turmeric, flowers, and love.",
    date: "14th December, 2026",
    time: "10:00 AM onwards",
    venue: "Mehta Garden, Mumbai",
  },
  {
    title: "Sangeet Night",
    emoji: "💃",
    desc: "A night of dance, music, and unforgettable performances.",
    date: "14th December, 2026",
    time: "7:00 PM onwards",
    venue: "Grand Ballroom, Taj Palace",
  },
  {
    title: "Wedding Ceremony",
    emoji: "💍",
    desc: "The sacred union of two souls, bound by love and tradition.",
    date: "15th December, 2026",
    time: "9:00 AM onwards",
    venue: "Royal Mandap, Taj Palace",
  },
  {
    title: "Reception",
    emoji: "🥂",
    desc: "A grand celebration to toast the newlyweds with family & friends.",
    date: "15th December, 2026",
    time: "7:00 PM onwards",
    venue: "Crystal Hall, Taj Palace",
  },
  {
    title: "Vidaai",
    emoji: "🌸",
    desc: "A heartfelt farewell as the bride begins her new journey.",
    date: "16th December, 2026",
    time: "11:00 AM",
    venue: "Sharma Residence, Jaipur",
  },
];

const FloralEvents = () => {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState<number | null>(null);

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
    <section
      className="relative min-h-screen py-24 overflow-hidden"
      style={{
        background: "linear-gradient(165deg, hsl(345 65% 10%) 0%, hsl(345 55% 16%) 50%, hsl(345 65% 10%) 100%)",
      }}
    >
      <GoldenElements />
      <RosePetals />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, hsl(43 80% 55% / 0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm uppercase tracking-[0.4em] mb-4" style={{ color: "hsl(43 70% 72%)" }}>
            Pre-Wedding & Wedding Celebrations
          </p>
          <h2
            className="font-display text-5xl md:text-6xl mb-4"
            style={{
              background: "linear-gradient(135deg, hsl(43 80% 55%), hsl(43 60% 70%), hsl(43 80% 55%))",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 4s linear infinite",
            }}
          >
            Events & Festivities
          </h2>
          <div className="ornament-line mx-auto mt-4" />
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
                  className="rounded-2xl p-8 md:p-10 border backdrop-blur-sm"
                  style={{
                    background: "linear-gradient(160deg, hsl(345 55% 18%) 0%, hsl(345 50% 14%) 100%)",
                    borderColor: "hsl(43 80% 55% / 0.25)",
                    boxShadow: isActive
                      ? "0 20px 50px hsl(345 60% 8% / 0.6), 0 0 30px hsl(43 80% 55% / 0.08)"
                      : "0 10px 30px hsl(345 60% 8% / 0.4)",
                  }}
                >
                  <span className="text-5xl mb-5 block">{event.emoji}</span>
                  <h3 className="font-display text-2xl md:text-3xl mb-3" style={{ color: "hsl(43 80% 55%)" }}>
                    {event.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "hsl(40 30% 85%)" }}>
                    {event.desc}
                  </p>

                  <AnimatePresence>
                    {isRevealed && isActive ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div
                          className="border-t pt-5 mt-2 space-y-2 font-body text-sm"
                          style={{ borderColor: "hsl(43 80% 55% / 0.2)" }}
                        >
                          <p style={{ color: "hsl(43 70% 65%)" }} className="font-semibold">📅 {event.date}</p>
                          <p style={{ color: "hsl(40 30% 80%)" }}>🕓 {event.time}</p>
                          <p style={{ color: "hsl(40 30% 80%)" }}>📍 {event.venue}</p>
                        </div>
                      </motion.div>
                    ) : isActive ? (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-2 px-6 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300"
                        style={{
                          background: "linear-gradient(135deg, hsl(43 80% 55%), hsl(43 60% 45%))",
                          color: "hsl(345 65% 10%)",
                          boxShadow: "0 4px 15px hsl(43 80% 55% / 0.3)",
                        }}
                        whileHover={{ scale: 1.05, boxShadow: "0 6px 20px hsl(43 80% 55% / 0.4)" }}
                        whileTap={{ scale: 0.97 }}
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
            className="w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110"
            style={{ borderColor: "hsl(43 80% 55% / 0.4)", color: "hsl(43 80% 55%)", background: "hsl(345 55% 14% / 0.8)" }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110"
            style={{ borderColor: "hsl(43 80% 55% / 0.4)", color: "hsl(43 80% 55%)", background: "hsl(345 55% 14% / 0.8)" }}
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
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{
                background: idx === active ? "hsl(43 80% 55%)" : "hsl(43 80% 55% / 0.25)",
                boxShadow: idx === active ? "0 0 10px hsl(43 80% 55% / 0.5)" : "none",
              }}
            />
          ))}
        </div>
      </div>

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
