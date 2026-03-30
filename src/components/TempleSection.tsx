import { motion } from "framer-motion";

const TempleSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4"
      style={{ background: "linear-gradient(160deg, hsl(345 65% 10%), hsl(345 60% 14%), hsl(345 55% 11%))" }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(43 80% 55% / 0.15) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, hsl(43 80% 55% / 0.1) 0%, transparent 40%),
                            radial-gradient(circle at 50% 80%, hsl(43 80% 55% / 0.08) 0%, transparent 45%)`
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Top ornament */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <span className="block h-px w-16 bg-gradient-to-r from-transparent to-[hsl(43_80%_55%_/_0.6)]" />
          <span className="text-2xl" style={{ color: "hsl(43 80% 55%)" }}>✦</span>
          <span className="block h-px w-16 bg-gradient-to-l from-transparent to-[hsl(43_80%_55%_/_0.6)]" />
        </motion.div>

        {/* Shloka */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-6"
        >
          <p className="font-hindi text-2xl md:text-3xl lg:text-4xl leading-relaxed animate-shimmer-gold"
            style={{
              background: "linear-gradient(90deg, hsl(43 70% 50%), hsl(43 90% 70%), hsl(43 70% 50%))",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer-gold 4s linear infinite",
              textShadow: "none",
            }}
          >
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-6"
        >
          <p className="font-hindi text-2xl md:text-3xl lg:text-4xl leading-relaxed"
            style={{
              background: "linear-gradient(90deg, hsl(43 70% 50%), hsl(43 90% 70%), hsl(43 70% 50%))",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer-gold 4s linear infinite",
              animationDelay: "0.5s",
            }}
          >
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा
          </p>
        </motion.div>

        {/* Meaning */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center font-display text-base md:text-lg italic max-w-2xl mx-auto mb-16 leading-relaxed"
          style={{ color: "hsl(43 50% 72%)" }}
        >
          "O Lord Ganesha, of curved trunk and massive form, whose brilliance equals
          a billion suns — please bless all my endeavors, removing every obstacle, always."
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mx-auto mb-16 h-px w-40"
          style={{ background: "linear-gradient(90deg, transparent, hsl(43 80% 55% / 0.5), transparent)" }}
        />

        {/* Family Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 1 }}
          className="rounded-2xl p-8 md:p-12 mx-auto max-w-3xl"
          style={{
            background: "linear-gradient(145deg, hsl(345 55% 14% / 0.8), hsl(345 60% 10% / 0.9))",
            border: "1px solid hsl(43 80% 55% / 0.25)",
            boxShadow: "0 8px 40px hsl(345 60% 8% / 0.6), inset 0 1px 0 hsl(43 80% 55% / 0.1)",
          }}
        >
          {/* Card heading */}
          <div className="text-center mb-10">
            <p className="font-display text-sm uppercase tracking-[0.35em]"
              style={{ color: "hsl(43 70% 60%)" }}
            >
              With the blessings of our beloved families
            </p>
          </div>

          {/* Two columns */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-8">
            {/* Bride's Family */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="text-center"
            >
              <p className="text-xs uppercase tracking-[0.4em] mb-4 font-body"
                style={{ color: "hsl(43 80% 55% / 0.7)" }}
              >
                Bride's Family
              </p>
              <div className="mx-auto mb-4 h-px w-12"
                style={{ background: "linear-gradient(90deg, transparent, hsl(43 80% 55% / 0.4), transparent)" }}
              />
              <p className="font-display text-xl md:text-2xl mb-2"
                style={{ color: "hsl(43 70% 72%)" }}
              >
                Mr. & Mrs. Rajesh Sharma
              </p>
              <p className="font-body text-sm" style={{ color: "hsl(43 40% 60% / 0.7)" }}>
                Jaipur, Rajasthan
              </p>
            </motion.div>

            {/* Vertical divider (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 w-px h-20"
              style={{ background: "linear-gradient(180deg, transparent, hsl(43 80% 55% / 0.3), transparent)" }}
            />

            {/* Groom's Family */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 1.4 }}
              className="text-center"
            >
              <p className="text-xs uppercase tracking-[0.4em] mb-4 font-body"
                style={{ color: "hsl(43 80% 55% / 0.7)" }}
              >
                Groom's Family
              </p>
              <div className="mx-auto mb-4 h-px w-12"
                style={{ background: "linear-gradient(90deg, transparent, hsl(43 80% 55% / 0.4), transparent)" }}
              />
              <p className="font-display text-xl md:text-2xl mb-2"
                style={{ color: "hsl(43 70% 72%)" }}
              >
                Mr. & Mrs. Vikram Mehta
              </p>
              <p className="font-body text-sm" style={{ color: "hsl(43 40% 60% / 0.7)" }}>
                Mumbai, Maharashtra
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex items-center justify-center gap-4 mt-14"
        >
          <span className="block h-px w-12 bg-gradient-to-r from-transparent to-[hsl(43_80%_55%_/_0.4)]" />
          <span className="text-lg" style={{ color: "hsl(43 80% 55% / 0.6)" }}>🙏</span>
          <span className="block h-px w-12 bg-gradient-to-l from-transparent to-[hsl(43_80%_55%_/_0.4)]" />
        </motion.div>
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

export default TempleSection;
