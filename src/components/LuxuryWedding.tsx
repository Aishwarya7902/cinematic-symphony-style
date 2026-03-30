import { motion } from "framer-motion";
import luxuryWedding from "@/assets/luxury-wedding.jpg";
import { useEffect, useState } from "react";

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
    <section className="section-luxury relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={luxuryWedding} alt="Wedding ceremony" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-luxury-bg/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <p className="font-body text-luxury-gold-light/70 text-sm uppercase tracking-[0.5em] mb-6">
            The Main Event
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-luxury-gold glow-gold mb-4">
            Wedding Ceremony
          </h2>
          <div className="ornament-line ornament-line-luxury mx-auto mb-10" />
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
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-luxury-gold/30 rounded-lg bg-luxury-charcoal/50 backdrop-blur-sm mb-2">
                <span className="font-display text-3xl md:text-4xl text-luxury-gold">{String(item.val).padStart(2, "0")}</span>
              </div>
              <span className="font-body text-xs text-luxury-gold-light/50 uppercase tracking-widest">{item.label}</span>
            </div>
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
          <p className="font-display text-2xl md:text-3xl text-luxury-cream">
            15th December, 2026
          </p>
          <p className="font-body text-luxury-gold-light/70 text-lg">
            7:00 PM · The Grand Ballroom
          </p>
          <p className="font-body text-luxury-gold-light/50">
            Taj Palace Hotel, Mumbai
          </p>
          <p className="font-body text-luxury-gold-light/40 text-sm mt-6">
            Dress Code: Black Tie · Traditional Elegance
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LuxuryWedding;
