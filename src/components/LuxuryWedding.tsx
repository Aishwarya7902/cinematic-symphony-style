import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import RosePetals from "./RosePetals";

const weddingDate = new Date("2026-12-15T19:00:00");

const LuxuryWedding = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
      style={{ background: "linear-gradient(135deg, hsl(345 65% 10%) 0%, hsl(345 60% 14%) 50%, hsl(345 65% 10%) 100%)" }}
    >
      <RosePetals />
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 40%, hsl(43 80% 55% / 0.04) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.5em] mb-6" style={{ color: "hsl(43 60% 70% / 0.7)" }}>
            The Main Event
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
            Wedding Ceremony
          </h2>

          {/* Ornamental divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mt-2 mb-10 h-px w-48"
            style={{ background: "linear-gradient(90deg, transparent, hsl(43 80% 55% / 0.6), transparent)" }}
          />
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center gap-6 md:gap-10 mb-16"
        >
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
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div
                className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg backdrop-blur-sm mb-2"
                style={{
                  background: "hsl(345 50% 16% / 0.8)",
                  border: "1px solid hsl(43 80% 55% / 0.25)",
                  boxShadow: "0 4px 20px hsl(345 60% 8% / 0.4), inset 0 1px 0 hsl(43 80% 55% / 0.08)",
                }}
              >
                <span
                  className="font-display text-3xl md:text-4xl font-bold"
                  style={{ color: "hsl(43 80% 60%)" }}
                >
                  {String(item.val).padStart(2, "0")}
                </span>
              </div>
              <span className="font-body text-xs uppercase tracking-widest" style={{ color: "hsl(43 60% 65% / 0.6)" }}>
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-4"
        >
          <p className="font-display text-2xl md:text-3xl" style={{ color: "hsl(35 30% 88%)" }}>
            15th December, 2026
          </p>
          <p className="font-body text-lg" style={{ color: "hsl(43 60% 70% / 0.7)" }}>
            7:00 PM · The Grand Ballroom
          </p>
          <p className="font-body" style={{ color: "hsl(43 60% 70% / 0.5)" }}>
            Taj Palace Hotel, Mumbai
          </p>
          <p className="font-body text-sm mt-6" style={{ color: "hsl(43 60% 70% / 0.4)" }}>
            Dress Code: Black Tie · Traditional Elegance
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
