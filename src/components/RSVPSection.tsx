import { motion } from "framer-motion";
import { useState } from "react";

const RSVPSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", guests: "1", attending: "yes", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen bg-background py-24">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-muted-foreground text-sm uppercase tracking-[0.4em] mb-4">We hope to see you</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">RSVP</h2>
          <div className="ornament-line ornament-line-luxury mx-auto mb-6" />
          <p className="font-body text-muted-foreground">Kindly respond by 1st November, 2026</p>
        </motion.div>

        {!submitted ? (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Full Name *</label>
              <input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-royal-gold/40 transition-shadow"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-royal-gold/40 transition-shadow"
                placeholder="your@email.com"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block font-body text-sm text-muted-foreground mb-2">Number of Guests</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-royal-gold/40"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-body text-sm text-muted-foreground mb-2">Attending?</label>
                <select
                  value={formData.attending}
                  onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-royal-gold/40"
                >
                  <option value="yes">Joyfully Accept</option>
                  <option value="no">Regretfully Decline</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block font-body text-sm text-muted-foreground mb-2">Message for the Couple</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-royal-gold/40 resize-none transition-shadow"
                placeholder="Your wishes..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-royal-gold text-royal-bg-deep font-display text-lg rounded-lg hover:opacity-90 transition-opacity"
            >
              Send RSVP
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <span className="text-6xl mb-6 block">🙏</span>
            <h3 className="font-display text-3xl text-foreground mb-4">Thank You, {formData.name}!</h3>
            <p className="font-body text-muted-foreground">Your response has been recorded. We can't wait to celebrate with you!</p>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20 pt-10 border-t border-border"
        >
          <p className="font-hindi text-muted-foreground text-lg mb-2">शुभ विवाह</p>
          <p className="font-display text-2xl text-foreground mb-1">Priya & Arjun</p>
          <p className="font-body text-muted-foreground text-sm">15 · 12 · 2026</p>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPSection;
