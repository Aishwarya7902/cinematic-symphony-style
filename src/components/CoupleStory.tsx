import { motion } from "framer-motion";
import couplePortrait from "@/assets/couple-portrait.jpg";

const timeline = [
  { year: "2019", title: "First Meeting", desc: "A chance encounter at a friend's wedding set the stars in motion." },
  { year: "2020", title: "First Date", desc: "Coffee turned into dinner, dinner turned into forever conversations." },
  { year: "2023", title: "The Proposal", desc: "Under the twinkling lights of Udaipur, he asked the question." },
  { year: "2026", title: "Forever Begins", desc: "Two souls, one journey. Our story continues..." },
];

const CoupleStory = () => {
  return (
    <section className="relative min-h-screen bg-background py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-body text-muted-foreground text-sm uppercase tracking-[0.4em] mb-4">Our Journey</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">Love Story</h2>
          <div className="ornament-line ornament-line-luxury mx-auto" />
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={couplePortrait}
                alt="Priya and Arjun"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1024}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            {/* Decorative frame accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-royal-gold/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

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
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-royal-gold border-2 border-background" />
                  <p className="text-royal-gold font-body text-sm font-semibold tracking-widest mb-1">{item.year}</p>
                  <h3 className="font-display text-2xl text-foreground mb-2">{item.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleStory;
