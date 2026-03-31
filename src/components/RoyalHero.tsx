import { motion } from "framer-motion";
import royalPalace from "@/assets/royal-palace.jpg";
import RosePetals from "./RosePetals";
import GoldenElements from "./GoldenElements";

const RoyalHero = () => {
  return (
    <section className="section-royal relative min-h-screen flex items-center justify-center overflow-hidden">
      <GoldenElements />
      <RosePetals />
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={royalPalace}
          alt="Royal palace entrance"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-bg-deep/80 via-royal-bg/60 to-royal-bg-deep/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Ornamental top */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <p className="font-hindi text-royal-gold-light text-lg tracking-widest">
            ॐ श्री गणेशाय नमः
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="ornament-line mx-auto mb-10"
        />

        {/* Main text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-royal-gold-light/80 font-body text-sm uppercase tracking-[0.4em] mb-4"
        >
          You are cordially invited to the wedding of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl text-royal-gold glow-gold mb-4 leading-tight"
        >
          Priya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="text-royal-gold-light/70 font-display italic text-2xl md:text-3xl mb-4"
        >
          &
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl text-royal-gold glow-gold mb-10 leading-tight"
        >
          Arjun
        </motion.h1>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex items-center justify-center gap-6 text-royal-gold-light/80"
        >
          <span className="ornament-line w-12" />
          <span className="font-body text-sm uppercase tracking-[0.3em]">
            15 · December · 2026
          </span>
          <span className="ornament-line w-12" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-royal-gold/40 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-royal-gold/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoyalHero;
