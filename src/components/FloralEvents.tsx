import { motion } from "framer-motion";
import mehendiFloral from "@/assets/mehendi-floral.jpg";

const events = [
  {
    title: "Mehendi Ceremony",
    date: "13th December, 2026",
    time: "4:00 PM onwards",
    venue: "Sharma Residence, Jaipur",
    emoji: "🌿",
    desc: "An afternoon of intricate henna, laughter, and folk songs.",
  },
  {
    title: "Haldi Ceremony",
    date: "14th December, 2026",
    time: "10:00 AM onwards",
    venue: "Mehta Garden, Mumbai",
    emoji: "✨",
    desc: "Bless the couple with turmeric, flowers, and love.",
  },
  {
    title: "Sangeet Night",
    date: "14th December, 2026",
    time: "7:00 PM onwards",
    venue: "Grand Ballroom, Taj Palace",
    emoji: "💃",
    desc: "A night of dance, music, and unforgettable performances.",
  },
];

// Floating petals
const petals = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 8,
  duration: 6 + Math.random() * 6,
  size: 12 + Math.random() * 16,
}));

const FloralEvents = () => {
  return (
    <section className="section-floral relative min-h-screen py-24 overflow-hidden">
      {/* Floating petals */}
      {petals.map((p) => (
        <div
          key={p.id}
          className="particle text-floral-pink opacity-40"
          style={{
            left: p.left,
            top: -40,
            fontSize: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          🌸
        </div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header with image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-floral-green-light text-sm uppercase tracking-[0.4em] mb-4">Pre-Wedding Celebrations</p>
          <h2 className="font-display text-5xl md:text-6xl text-floral-green mb-6">Events & Festivities</h2>
          
          <div className="max-w-xl mx-auto rounded-2xl overflow-hidden shadow-xl mb-4">
            <img src={mehendiFloral} alt="Mehendi ceremony" className="w-full h-64 object-cover" loading="lazy" width={1920} height={1080} />
          </div>
        </motion.div>

        {/* Event cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-floral-cream/80 backdrop-blur-sm rounded-2xl p-8 border border-floral-green/10 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <span className="text-4xl mb-4 block">{event.emoji}</span>
              <h3 className="font-display text-2xl text-floral-green mb-3">{event.title}</h3>
              <p className="font-body text-floral-green/70 text-sm mb-4 leading-relaxed">{event.desc}</p>
              <div className="space-y-2 font-body text-sm">
                <p className="text-floral-gold font-semibold">{event.date}</p>
                <p className="text-floral-green/60">{event.time}</p>
                <p className="text-floral-green/60">{event.venue}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloralEvents;
