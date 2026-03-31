import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";

const baraatEvents = [
  {
    icon: "🐎",
    title: "Baraat Procession",
    desc: "The groom arrives in a grand procession with music, dance, and celebration.",
    date: "15th December, 2026",
    time: "5:00 PM",
    venue: "Starting from Hotel Marriott",
    dressCode: "Traditional & Festive",
  },
  {
    icon: "🎶",
    title: "DJ & Dhol Night",
    desc: "Dance your heart out on the streets with live dhol and DJ beats.",
    date: "15th December, 2026",
    time: "6:00 PM",
    venue: "Main Road to Venue",
    dressCode: "Festive & Bright",
  },
];

const baraatCharacters = ["🐎", "🥁", "💃", "🕺", "🎺", "🪘", "💃", "🕺", "🎶", "🐎", "🥁", "💃", "🕺", "🎺", "💃", "🕺"];

// Firework burst particles
const FireworkBurst = ({ x, y, delay }: { x: number; y: number; delay: number }) => {
  const particles = useMemo(() => 
    Array.from({ length: 8 }).map((_, i) => ({
      angle: (i / 8) * 360,
      distance: 40 + Math.random() * 30,
      color: ["hsl(43 80% 55%)", "hsl(0 70% 55%)", "hsl(30 80% 60%)", "hsl(43 90% 70%)"][i % 4],
      size: 3 + Math.random() * 3,
    })), []
  );

  return (
    <div className="absolute pointer-events-none" style={{ left: `${x}%`, top: `${y}%` }}>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: Math.cos((p.angle * Math.PI) / 180) * p.distance,
            y: Math.sin((p.angle * Math.PI) / 180) * p.distance,
            scale: [0, 1.2, 0.8, 0],
          }}
          transition={{ duration: 1.8, delay: delay + i * 0.05, repeat: Infinity, repeatDelay: 3 + Math.random() * 2 }}
          className="absolute rounded-full"
          style={{ width: p.size, height: p.size, background: p.color, boxShadow: `0 0 6px ${p.color}` }}
        />
      ))}
    </div>
  );
};

// Confetti pieces
const ConfettiPiece = ({ delay, startX }: { delay: number; startX: number }) => {
  const color = useMemo(() => 
    ["hsl(43 80% 55%)", "hsl(0 70% 50%)", "hsl(120 60% 50%)", "hsl(200 70% 55%)", "hsl(300 60% 55%)"][Math.floor(Math.random() * 5)],
  []);
  const size = useMemo(() => 6 + Math.random() * 6, []);
  const rotation = useMemo(() => Math.random() * 360, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, x: startX, rotate: 0 }}
      animate={{ opacity: [0, 1, 1, 0], y: ["-5%", "105%"], rotate: rotation + 720, x: startX + (Math.random() - 0.5) * 80 }}
      transition={{ duration: 4 + Math.random() * 3, delay, repeat: Infinity, repeatDelay: Math.random() * 2 }}
      className="absolute top-0 pointer-events-none"
      style={{
        width: size,
        height: size * 0.6,
        background: color,
        borderRadius: "1px",
      }}
    />
  );
};

// Dancing dhol player silhouette animation
const DholPlayer = ({ side }: { side: "left" | "right" }) => (
  <motion.div
    className="absolute bottom-10 pointer-events-none hidden md:block"
    style={{ [side]: "5%" }}
    animate={{ y: [0, -8, 0, -4, 0], rotate: side === "left" ? [0, -3, 0, 3, 0] : [0, 3, 0, -3, 0] }}
    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="text-6xl opacity-60">🥁</div>
  </motion.div>
);

// Bouncing music notes
const MusicNote = ({ x, delay }: { x: number; delay: number }) => {
  const note = useMemo(() => ["🎵", "🎶", "🎼", "♪"][Math.floor(Math.random() * 4)], []);
  return (
    <motion.div
      className="absolute pointer-events-none text-2xl md:text-3xl"
      style={{ left: `${x}%`, bottom: "15%" }}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: [0, 0.7, 0.7, 0], y: [-20, -80, -120, -160], x: [0, (Math.random() - 0.5) * 40] }}
      transition={{ duration: 3, delay, repeat: Infinity, repeatDelay: 2 + Math.random() * 3 }}
    >
      {note}
    </motion.div>
  );
};

const BaraatSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const fireworks = useMemo(() => [
    { x: 15, y: 12, delay: 0 },
    { x: 80, y: 8, delay: 1.2 },
    { x: 50, y: 15, delay: 2.5 },
    { x: 30, y: 20, delay: 3.8 },
    { x: 70, y: 18, delay: 1.8 },
  ], []);

  const confetti = useMemo(() => 
    Array.from({ length: 20 }).map((_, i) => ({
      delay: Math.random() * 5,
      startX: Math.random() * 100,
    })), []
  );

  const musicNotes = useMemo(() => [
    { x: 10, delay: 0 }, { x: 25, delay: 1.5 }, { x: 45, delay: 0.8 },
    { x: 60, delay: 2.2 }, { x: 75, delay: 1.1 }, { x: 90, delay: 3 },
  ], []);

  return (
    <section className="relative min-h-screen py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(345 65% 10%) 0%, hsl(345 60% 14%) 50%, hsl(345 65% 10%) 100%)" }}>
      
      {/* Firework bursts */}
      {fireworks.map((fw, i) => (
        <FireworkBurst key={i} x={fw.x} y={fw.y} delay={fw.delay} />
      ))}

      {/* Confetti falling */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {confetti.map((c, i) => (
          <ConfettiPiece key={i} delay={c.delay} startX={c.startX} />
        ))}
      </div>

      {/* Music notes floating up */}
      {musicNotes.map((mn, i) => (
        <MusicNote key={i} x={mn.x} delay={mn.delay} />
      ))}

      {/* Dhol players on sides */}
      <DholPlayer side="left" />
      <DholPlayer side="right" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 30%, hsl(43 80% 55% / 0.06) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.4em] mb-4" style={{ color: "hsl(43 60% 70% / 0.8)" }}>
            Let the celebration begin
          </p>
          <h2
            className="font-display text-5xl md:text-7xl mb-4"
            style={{
              background: "linear-gradient(135deg, hsl(43 80% 55%), hsl(38 70% 65%), hsl(43 90% 50%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% 200%",
              animation: "shimmer-gold 4s ease-in-out infinite",
            }}
          >
            The Grand Baraat
          </h2>
          <p className="font-hindi text-xl mb-2" style={{ color: "hsl(43 60% 70% / 0.7)" }}>
            बारात — उत्सव की शुरुआत
          </p>

          {/* Ornamental divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mt-6 mb-12 h-px w-48"
            style={{ background: "linear-gradient(90deg, transparent, hsl(43 80% 55% / 0.6), transparent)" }}
          />
        </motion.div>

        {/* Moving baraat strip */}
        <div className="overflow-hidden mb-16">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...baraatCharacters, ...baraatCharacters].map((char, i) => (
              <motion.span
                key={i}
                className="text-5xl md:text-6xl inline-block"
                animate={{ y: [0, -6, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 0.8, delay: i * 0.15, repeat: Infinity, repeatDelay: 1 }}
                style={{ opacity: 0.8 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Event cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {baraatEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              whileHover={{ y: -4, boxShadow: "0 8px 32px hsl(43 80% 55% / 0.12)" }}
              className="rounded-xl p-6 backdrop-blur-sm transition-all duration-300"
              style={{
                background: "hsl(345 50% 16% / 0.8)",
                border: "1px solid hsl(43 80% 55% / 0.2)",
                boxShadow: "0 4px 20px hsl(345 60% 8% / 0.4)",
              }}
            >
              <span className="text-3xl mb-3 block">{event.icon}</span>
              <h3
                className="font-display text-xl mb-2"
                style={{ color: "hsl(43 80% 60%)" }}
              >
                {event.title}
              </h3>
              <p className="font-body text-sm mb-4" style={{ color: "hsl(35 30% 80% / 0.7)" }}>
                {event.desc}
              </p>

              <button
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-body transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, hsl(43 80% 55% / 0.15), hsl(43 80% 55% / 0.08))",
                  border: "1px solid hsl(43 80% 55% / 0.3)",
                  color: "hsl(43 80% 65%)",
                }}
              >
                {expandedCard === index ? "Hide Details" : "View Details"}
                <ChevronDown
                  className="w-4 h-4 transition-transform duration-300"
                  style={{ transform: expandedCard === index ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              <AnimatePresence>
                {expandedCard === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div
                      className="mt-4 pt-4 space-y-2 text-left"
                      style={{ borderTop: "1px solid hsl(43 80% 55% / 0.15)" }}
                    >
                      {[
                        { label: "Date", value: event.date },
                        { label: "Time", value: event.time },
                        { label: "Venue", value: event.venue },
                        { label: "Dress Code", value: event.dressCode },
                      ].map((item) => (
                        <div key={item.label} className="flex justify-between text-sm font-body">
                          <span style={{ color: "hsl(43 60% 60% / 0.8)" }}>{item.label}</span>
                          <span style={{ color: "hsl(35 30% 85%)" }}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
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

export default BaraatSection;
