import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import couplePortrait from "@/assets/couple-portrait.jpg";
import storyFirstMeet from "@/assets/story-first-meet.png";
import storyFirstDate from "@/assets/story-first-date.png";
import storyProposal from "@/assets/story-proposal.png";
import storyForever from "@/assets/story-forever.png";
import RosePetals from "./RosePetals";
import GoldenElements from "./GoldenElements";

const timeline = [
  { year: "2019", title: "First Meeting", desc: "A chance encounter at a friend's wedding set the stars in motion.", image: storyFirstMeet },
  { year: "2020", title: "First Date", desc: "Coffee turned into dinner, dinner turned into forever conversations.", image: storyFirstDate },
  { year: "2023", title: "The Proposal", desc: "Under the twinkling lights of Udaipur, he asked the question.", image: storyProposal },
  { year: "2026", title: "Forever Begins", desc: "Two souls, one journey. Our story continues...", image: storyForever },
];

const CoupleStory = () => {
  const [activeStory, setActiveStory] = useState<number | null>(null);

  return (
    <section
      className="relative min-h-screen py-24 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, hsl(345 65% 10%), hsl(345 60% 14%), hsl(345 55% 11%))",
      }}
    >
      <GoldenElements />
      <RosePetals />
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
          {/* Image — shows selected story illustration or default portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "0 8px 40px hsl(345 60% 8% / 0.6)" }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStory !== null ? `story-${activeStory}` : "default"}
                  src={activeStory !== null ? timeline[activeStory].image : couplePortrait}
                  alt={activeStory !== null ? timeline[activeStory].title : "Priya and Arjun"}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width={1024}
                  height={1280}
                  initial={{ opacity: 0, scale: 0.85, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.85, rotateY: 15 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </AnimatePresence>
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(345 60% 10% / 0.4), transparent)" }} />
            </div>
            {/* Decorative frame accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl -z-10" style={{ border: "2px solid hsl(43 80% 55% / 0.25)" }} />

            {/* Floating sparkles when story is active */}
            <AnimatePresence>
              {activeStory !== null && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={`sparkle-${i}`}
                      className="absolute rounded-full"
                      style={{
                        width: 4 + Math.random() * 4,
                        height: 4 + Math.random() * 4,
                        background: "hsl(43 80% 65%)",
                        left: `${15 + Math.random() * 70}%`,
                        top: `${10 + Math.random() * 80}%`,
                        boxShadow: "0 0 8px hsl(43 80% 55% / 0.6)",
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                        y: [0, -20, -40],
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                  ))}
                </>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px" style={{ background: "linear-gradient(180deg, transparent, hsl(43 80% 55% / 0.3), transparent)" }} />

            <div className="space-y-12">
              {timeline.map((item, idx) => {
                const isActive = activeStory === idx;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="relative pl-12 cursor-pointer select-none"
                    onClick={() => setActiveStory(isActive ? null : idx)}
                    whileHover={{ x: 6 }}
                  >
                    {/* Dot */}
                    <motion.div
                      className="absolute left-2.5 top-1 w-3 h-3 rounded-full"
                      style={{
                        background: "hsl(43 80% 55%)",
                        border: "2px solid hsl(345 60% 12%)",
                        boxShadow: isActive
                          ? "0 0 16px hsl(43 80% 55% / 0.8), 0 0 30px hsl(43 80% 55% / 0.4)"
                          : "0 0 8px hsl(43 80% 55% / 0.4)",
                      }}
                      animate={{
                        scale: isActive ? [1, 1.4, 1] : 1,
                      }}
                      transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
                    />
                    <p className="font-body text-sm font-semibold tracking-widest mb-1" style={{ color: "hsl(43 70% 60%)" }}>{item.year}</p>
                    <h3
                      className="font-display text-2xl mb-2 transition-colors duration-300"
                      style={{ color: isActive ? "hsl(43 80% 60%)" : "hsl(43 50% 72%)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="font-body leading-relaxed" style={{ color: "hsl(40 30% 80% / 0.75)" }}>{item.desc}</p>

                    {/* Active indicator */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: 60, opacity: 1 }}
                          exit={{ width: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="mt-3 h-0.5 rounded-full"
                          style={{ background: "linear-gradient(90deg, hsl(43 80% 55%), transparent)" }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Tap hint */}
                    <p className="font-body text-xs mt-2 opacity-50" style={{ color: "hsl(43 60% 60%)" }}>
                      {isActive ? "✨ Tap to close" : "Tap to see the moment"}
                    </p>
                  </motion.div>
                );
              })}
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
