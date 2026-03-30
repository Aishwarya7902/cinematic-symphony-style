import { motion } from "framer-motion";
import { useMemo } from "react";

// Confetti particles
const useConfetti = () =>
  useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 10,
        duration: 4 + Math.random() * 6,
        color: ["🎊", "🎉", "✨", "🌟", "🎶"][Math.floor(Math.random() * 5)],
        size: 14 + Math.random() * 14,
      })),
    []
  );

const baraatCharacters = ["🐎", "🥁", "💃", "🕺", "🎺", "🪘", "💃", "🕺", "🎶", "🐎", "🥁", "💃", "🕺", "🎺", "💃", "🕺"];

const BaraatSection = () => {
  const confetti = useConfetti();

  return (
    <section className="section-baraat relative min-h-screen py-24 overflow-hidden">
      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="particle"
          style={{
            left: c.left,
            top: -30,
            fontSize: c.size,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
          }}
        >
          {c.color}
        </div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-baraat-cream/80 text-sm uppercase tracking-[0.4em] mb-4">
            Let the celebration begin
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-baraat-yellow mb-4">
            The Grand Baraat
          </h2>
          <p className="font-hindi text-baraat-cream/70 text-xl mb-10">
            बारात — उत्सव की शुरुआत
          </p>
        </motion.div>

        {/* Moving baraat strip */}
        <div className="overflow-hidden mb-16">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...baraatCharacters, ...baraatCharacters].map((char, i) => (
              <span key={i} className="text-5xl md:text-6xl inline-block" style={{ animationDelay: `${i * 0.2}s` }}>
                {char}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-baraat-cream/10 backdrop-blur-sm rounded-xl p-6 border border-baraat-yellow/20"
          >
            <span className="text-3xl mb-3 block">🐎</span>
            <h3 className="font-display text-xl text-baraat-yellow mb-2">Baraat Procession</h3>
            <p className="font-body text-baraat-cream/70 text-sm">
              15th December, 2026 · 5:00 PM
            </p>
            <p className="font-body text-baraat-cream/60 text-sm mt-1">
              Starting from Hotel Marriott
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-baraat-cream/10 backdrop-blur-sm rounded-xl p-6 border border-baraat-yellow/20"
          >
            <span className="text-3xl mb-3 block">🎶</span>
            <h3 className="font-display text-xl text-baraat-yellow mb-2">DJ & Dhol Night</h3>
            <p className="font-body text-baraat-cream/70 text-sm">
              Dance your heart out on the streets
            </p>
            <p className="font-body text-baraat-cream/60 text-sm mt-1">
              Dress Code: Festive & Bright
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BaraatSection;
