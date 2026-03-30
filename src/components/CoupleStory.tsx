import { motion } from "framer-motion";
import couplePortrait from "@/assets/couple-portrait.jpg";
import RosePetals from "./RosePetals";

const timeline = [
  { year: "2019", title: "First Meeting", desc: "A chance encounter at a friend's wedding set the stars in motion." },
  { year: "2020", title: "First Date", desc: "Coffee turned into dinner, dinner turned into forever conversations." },
  { year: "2023", title: "The Proposal", desc: "Under the twinkling lights of Udaipur, he asked the question." },
  { year: "2026", title: "Forever Begins", desc: "Two souls, one journey. Our story continues..." },
];

const CoupleStory = () => {
  return (
    <section
      className="relative min-h-screen py-24 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, hsl(345 65% 10%), hsl(345 60% 14%), hsl(345 55% 11%))",
      }}
    >
      <RosePetals />
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 30% 40%, hsl(43 80% 55% / 0.08) 0%, transparent 50%),
                          radial-gradient(circle at 70% 70%, hsl(43 80% 55% / 0.05) 0%, transparent 45%)`
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm uppercase tracking-[0.4em] mb-4" style={{ color: "hsl(43 60% 65% / 0.7)" }}>Our Journey</p>
          <h2
            className="font-display text-5xl md:text-6xl mb-4"
            style={{
              background: "linear-gradient(90deg, hsl(43 70% 50%), hsl(43 90% 70%), hsl(43 70% 50%))",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer-gold 4s linear infinite",
            }}
          >Love Story</h2>
          <div className="mx-auto" style={{ width: 80, height: 2, background: "linear-gradient(90deg, transparent, hsl(43 80% 55%), transparent)" }} />
        </motion.div>

        {/* Two column: image + timeline */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "0 8px 40px hsl(345 60% 8% / 0.6)" }}>
              <img
                src={couplePortrait}
                alt="Priya and Arjun"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1024}
                height={1280}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(345 60% 10% / 0.4), transparent)" }} />
            </div>
            {/* Decorative frame accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl -z-10" style={{ border: "2px solid hsl(43 80% 55% / 0.25)" }} />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px" style={{ background: "linear-gradient(180deg, transparent, hsl(43 80% 55% / 0.3), transparent)" }} />

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative pl-12"
                >
                  {/* Dot */}
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full" style={{ background: "hsl(43 80% 55%)", border: "2px solid hsl(345 60% 12%)", boxShadow: "0 0 8px hsl(43 80% 55% / 0.4)" }} />
                  <p className="font-body text-sm font-semibold tracking-widest mb-1" style={{ color: "hsl(43 70% 60%)" }}>{item.year}</p>
                  <h3 className="font-display text-2xl mb-2" style={{ color: "hsl(43 50% 72%)" }}>{item.title}</h3>
                  <p className="font-body leading-relaxed" style={{ color: "hsl(40 30% 80% / 0.75)" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer-gold {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
};

export default CoupleStory;
