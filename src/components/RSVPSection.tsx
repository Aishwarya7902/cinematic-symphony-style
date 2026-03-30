import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Response = "accepted" | "declined" | null;

const RSVPSection = () => {
  const [response, setResponse] = useState<Response>(null);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
      style={{ background: "linear-gradient(135deg, hsl(345 65% 10%) 0%, hsl(345 60% 14%) 50%, hsl(345 65% 10%) 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 40%, hsl(43 80% 55% / 0.04) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-2xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.4em] mb-4" style={{ color: "hsl(43 60% 70% / 0.7)" }}>
            We hope to see you
          </p>
          <h2
            className="font-display text-5xl md:text-6xl mb-4"
            style={{
              background: "linear-gradient(135deg, hsl(43 80% 55%), hsl(38 70% 65%), hsl(43 90% 50%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% 200%",
              animation: "shimmer-gold 4s ease-in-out infinite",
            }}
          >
            RSVP
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto mb-6 h-px w-48"
            style={{ background: "linear-gradient(90deg, transparent, hsl(43 80% 55% / 0.6), transparent)" }}
          />
          <p className="font-body" style={{ color: "hsl(43 60% 70% / 0.6)" }}>
            Kindly respond by 1st November, 2026
          </p>
        </motion.div>

        {/* Buttons / Response */}
        <AnimatePresence mode="wait">
          {response === null ? (
            <motion.div
              key="buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={() => setResponse("accepted")}
                className="w-full sm:w-auto px-10 py-4 rounded-xl font-display text-lg transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, hsl(43 80% 55%), hsl(38 70% 50%))",
                  color: "hsl(345 65% 10%)",
                  boxShadow: "0 4px 24px hsl(43 80% 55% / 0.25)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 6px 32px hsl(43 80% 55% / 0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 24px hsl(43 80% 55% / 0.25)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                🙏 Joyfully Accept
              </button>
              <button
                onClick={() => setResponse("declined")}
                className="w-full sm:w-auto px-10 py-4 rounded-xl font-display text-lg transition-all duration-300"
                style={{
                  background: "hsl(345 50% 16% / 0.8)",
                  border: "1px solid hsl(43 80% 55% / 0.25)",
                  color: "hsl(43 80% 65%)",
                  boxShadow: "0 4px 20px hsl(345 60% 8% / 0.4)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "hsl(43 80% 55% / 0.5)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "hsl(43 80% 55% / 0.25)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Regretfully Decline
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="response"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center py-10 rounded-xl mx-auto max-w-md"
              style={{
                background: "hsl(345 50% 16% / 0.6)",
                border: "1px solid hsl(43 80% 55% / 0.2)",
                boxShadow: "0 8px 32px hsl(345 60% 8% / 0.4)",
              }}
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-6xl mb-6 block"
              >
                {response === "accepted" ? "🎉" : "💌"}
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="font-display text-3xl mb-3 px-6"
                style={{ color: "hsl(43 80% 60%)" }}
              >
                {response === "accepted" ? "We're Thrilled!" : "We'll Miss You"}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-body px-6"
                style={{ color: "hsl(35 30% 85% / 0.8)" }}
              >
                {response === "accepted"
                  ? "Thank you for accepting our invitation. We can't wait to celebrate this beautiful journey with you!"
                  : "We understand and appreciate your kind wishes. You'll always be in our hearts on this special day."}
              </motion.p>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                onClick={() => setResponse(null)}
                className="mt-6 text-sm font-body underline underline-offset-4 transition-colors"
                style={{ color: "hsl(43 60% 65% / 0.5)" }}
              >
                Change response
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20 pt-10"
          style={{ borderTop: "1px solid hsl(43 80% 55% / 0.1)" }}
        >
          <p className="font-hindi text-lg mb-2" style={{ color: "hsl(43 60% 70% / 0.5)" }}>शुभ विवाह</p>
          <p className="font-display text-2xl mb-1" style={{ color: "hsl(35 30% 88%)" }}>Priya & Arjun</p>
          <p className="font-body text-sm" style={{ color: "hsl(43 60% 70% / 0.4)" }}>15 · 12 · 2026</p>
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

export default RSVPSection;
