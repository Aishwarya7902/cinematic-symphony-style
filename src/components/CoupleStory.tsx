import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import couplePortrait from "@/assets/couple-portrait.jpg";
import storyFirstMeet from "@/assets/first-meet.jpg";
import storyFirstDate from "@/assets/first-date.jpg";
import storyProposal from "@/assets/first-proposal.jpg";
import storyForever from "@/assets/forever-begins.jpg";
import GoldenElements from "./GoldenElements";
import RoyalRajasthanBackground from "./RoyalRajasthanBackground";
import AnimatedRoyalBackground from "./AnimatedRoyalBackground";

const timeline = [
  { year: "2019", title: "First Meeting", desc: "A chance encounter at a friend's wedding set the stars in motion.", image: storyFirstMeet },
  { year: "2020", title: "First Date", desc: "Coffee turned into dinner, dinner turned into forever conversations.", image: storyFirstDate },
  { year: "2023", title: "The Proposal", desc: "Under the twinkling lights of Udaipur, he asked the question.", image: storyProposal },
  { year: "2026", title: "Forever Begins", desc: "Two souls, one journey. Our story continues...", image: storyForever },
];

const CoupleStory = () => {
  const [activeStory, setActiveStory] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-24 overflow-y-auto bg-transparent">
      <RoyalRajasthanBackground sectionRef={sectionRef} />
      <AnimatedRoyalBackground />
      <GoldenElements />

      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-radial-gradient from-[#c3aa64]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-radial-gradient from-[#c3aa64]/10 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-hindi text-[#e8dcb8] text-xl tracking-widest mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            प्रेम कहानी
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-[#c3aa64] glow-gold mb-6 animate-shimmer bg-clip-text">
            Our Love Story
          </h2>
          <div className="ornament-line mx-auto drop-shadow-[0_0_5px_#c3aa64]" />
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
            <div className="relative rounded-[2rem] overflow-hidden border-2 border-[#c3aa64]/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStory !== null ? `story-${activeStory}` : "default"}
                  src={activeStory !== null ? timeline[activeStory].image : couplePortrait}
                  alt={activeStory !== null ? timeline[activeStory].title : "Couple Story"}
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1a0004]/80 to-transparent" />
            </div>

            {/* Decorative Arched Frame Accent */}
            <div className="absolute -inset-4 border border-[#c3aa64]/20 rounded-[2.5rem] -z-10 pointer-events-none" />

            {/* Sparkle effects */}
            <AnimatePresence>
              {activeStory !== null && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`sparkle-${i}`}
                      className="absolute w-2 h-2 bg-[#c3aa64] rounded-full shadow-[0_0_8px_rgba(195,170,100,0.8)]"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                        y: [-20, -60],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line with gradient */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c3aa64]/0 via-[#c3aa64]/30 to-[#c3aa64]/0 rounded-full" />

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
                    className="relative pl-16 cursor-pointer group"
                    onClick={() => setActiveStory(isActive ? null : idx)}
                  >
                    {/* Golden Dot */}
                    <div className="absolute left-[1.125rem] top-1 flex items-center justify-center">
                      <motion.div
                        className="w-5 h-5 rounded-full border-2 border-[#c3aa64] bg-[#3b000b] z-20"
                        animate={{
                          scale: isActive ? 1.5 : 1,
                          backgroundColor: isActive ? "#c3aa64" : "#3b000b",
                          boxShadow: isActive ? "0 0 20px #c3aa64" : "none",
                        }}
                      />
                      {isActive && (
                        <motion.div
                          className="absolute w-10 h-10 rounded-full bg-[#c3aa64]/20 -z-10"
                          animate={{ scale: [1, 1.6, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>

                    <motion.div 
                      className={`bg-[#1f0005]/60 backdrop-blur-xl p-6 rounded-2xl border transition-all duration-500 shadow-xl group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] relative overflow-hidden ${isActive ? "border-[#c3aa64]/60 shadow-[0_0_30px_rgba(195,170,100,0.2)]" : "border-[#c3aa64]/10 hover:border-[#c3aa64]/30"}`}
                      animate={isActive ? {
                        boxShadow: [
                          "0 0 20px rgba(195, 170, 100, 0.1)",
                          "0 0 40px rgba(195, 170, 100, 0.25)",
                          "0 0 20px rgba(195, 170, 100, 0.1)"
                        ]
                      } : {}}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {/* Suble Glow Orb for Active Item */}
                      {isActive && (
                        <motion.div 
                          animate={{ opacity: [0.1, 0.3, 0.1] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="absolute -top-10 -right-10 w-32 h-32 bg-[#c3aa64]/20 blur-[40px] rounded-full pointer-events-none" 
                        />
                      )}

                      <p className="font-body text-[#c3aa64] font-bold text-sm tracking-widest mb-2 relative z-10">{item.year}</p>
                      <h3
                        className={`font-display text-2xl md:text-3xl mb-3 transition-all duration-300 relative z-10 ${isActive ? "text-[#f4e2b0] glow-gold" : "text-[#e8dcb8]/80 group-hover:text-[#c3aa64]"}`}
                      >
                        {item.title}
                      </h3>
                      <p className="font-body text-[#e8dcb8]/70 leading-relaxed italic relative z-10">{item.desc}</p>

                      {isActive && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          className="h-0.5 w-1/4 bg-[#c3aa64] mt-4 origin-left relative z-10 shadow-[0_0_10px_#c3aa64]"
                        />
                      )}
                    </motion.div>
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