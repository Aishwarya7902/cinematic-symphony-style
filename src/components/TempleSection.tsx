import { motion } from "framer-motion";
import templeInterior from "@/assets/temple-interior.jpg";

const diyas = Array.from({ length: 7 }, (_, i) => i);

const TempleSection = () => {
  return (
    <section className="section-temple relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-15">
        <img src={templeInterior} alt="Temple" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-temple-cream via-temple-bg/95 to-temple-cream" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Diyas row */}
        <div className="flex justify-center gap-8 mb-12">
          {diyas.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-3xl animate-diya"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              🪔
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-hindi text-temple-saffron text-xl md:text-2xl mb-4"
        >
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-hindi text-temple-saffron text-xl md:text-2xl mb-10"
        >
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="ornament-line ornament-line-temple mx-auto mb-10"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl md:text-5xl text-temple-deep mb-6"
        >
          Divine Blessings
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-temple-copper text-lg leading-relaxed max-w-2xl mx-auto mb-12"
        >
          With the blessings of Lord Ganesha and the grace of our elders, we seek your 
          presence as we begin this sacred journey together. Your love and blessings 
          are the greatest gifts we could receive.
        </motion.p>

        {/* Families */}
        <div className="grid md:grid-cols-2 gap-12">
          {[
            { family: "Bride's Family", parents: "Mr. & Mrs. Rajesh Sharma", city: "Jaipur" },
            { family: "Groom's Family", parents: "Mr. & Mrs. Vikram Mehta", city: "Mumbai" },
          ].map((side, idx) => (
            <motion.div
              key={side.family}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 + idx * 0.2 }}
              className="bg-temple-cream/60 backdrop-blur-sm rounded-lg p-8 border border-temple-saffron/20"
            >
              <p className="text-temple-saffron text-sm uppercase tracking-[0.3em] mb-3 font-body">{side.family}</p>
              <p className="font-display text-2xl text-temple-deep mb-1">{side.parents}</p>
              <p className="text-temple-copper/70 font-body">{side.city}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TempleSection;
