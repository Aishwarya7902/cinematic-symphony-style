import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GoldenElements from "./GoldenElements";
import RoyalRajasthanBackground from "./RoyalRajasthanBackground";
import { 
  GrandparentsAvatar, 
  UncleAuntAvatar, 
  SiblingsAvatar, 
  CousinsAvatar 
} from "./RoyalIcons";

const RelativeAvatar = ({ src, name, type, isLate }: { src: string, name: string, type: string, isLate?: boolean }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [fallbackToSvg, setFallbackToSvg] = useState(false);

  const renderFallbackSvg = () => {
    switch (type) {
      case "grandparent": return <GrandparentsAvatar />;
      case "uncle_aunt": return <UncleAuntAvatar />;
      case "sibling": return <SiblingsAvatar />;
      case "cousin": return <CousinsAvatar />;
      default: return <CousinsAvatar />;
    }
  };

  if (fallbackToSvg) {
    return (
      <div className="w-16 h-16 rounded-full border-2 border-[#c3aa64] overflow-hidden shrink-0 glow-gold shadow-[0_0_10px_#c3aa64] transition-transform duration-300 group-hover/item:scale-110 flex items-center justify-center bg-[#1a0004] relative">
        {renderFallbackSvg()}
        {isLate && (
           <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#c3aa64]/30 backdrop-blur-[1px] flex items-center justify-center">
             <span className="text-[8px] font-hindi text-white uppercase tracking-tighter">स्वर्गवासी</span>
           </div>
        )}
      </div>
    );
  }

  return (
    <div className={`w-16 h-16 rounded-full border-2 border-[#c3aa64] overflow-hidden shrink-0 glow-gold shadow-[0_0_10px_#c3aa64] transition-transform duration-300 group-hover/item:scale-110 flex items-center justify-center bg-[#1a0004] relative`}>
      <img 
        src={imgSrc} 
        alt={name} 
        className={`w-full h-full object-cover ${isLate ? 'grayscale brightness-75 contrast-125' : ''}`}
        onError={() => {
          if (imgSrc !== "/extended_avatar.png") {
            // If the specific relative image fails, try the generic local extended avatar
            setImgSrc("/extended_avatar.png");
          } else {
            // If even that fails, fall back to the SVG Silhouette
            setFallbackToSvg(true);
          }
        }}
      />
      {isLate && (
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#c3aa64]/30 backdrop-blur-[1px] flex items-center justify-center">
          <span className="text-[8px] font-hindi text-white uppercase tracking-tighter">स्वर्गवासी</span>
        </div>
      )}
    </div>
  );
};

const FamilySection = () => {
  const [showExtended, setShowExtended] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const renderIcon = (type: string) => {
    switch (type) {
      case "grandparent": return <GrandparentsAvatar />;
      case "uncle_aunt": return <UncleAuntAvatar />;
      case "sibling": return <SiblingsAvatar />;
      case "cousin": return <CousinsAvatar />;
      default: return <CousinsAvatar />;
    }
  };

  const brideRelatives = [
    { 
      name: "Late Mr. R.K. Sharma (Grandfather)", 
      type: "grandparent", 
      isLate: true,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop" // Unique placeholder
    },
    { 
      name: "Mr. & Mrs. Gupta (Uncle & Aunt)", 
      type: "uncle_aunt",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" 
    },
    { 
      name: "Amit Sharma (Brother)", 
      type: "sibling",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    { 
      name: "Rahul, Sneha, Neha (Cousins)", 
      type: "cousin",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    }
  ];

  const groomRelatives = [
    { 
      name: "Mr. & Mrs. S.P. Verma (Grandparents)", 
      type: "grandparent",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400&h=400&fit=crop"
    },
    { 
      name: "Mr. & Mrs. Singh (Uncle & Aunt)", 
      type: "uncle_aunt",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    { 
      name: "Ritu Verma (Sister)", 
      type: "sibling",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    { 
      name: "Rohan, Pooja (Cousins)", 
      type: "cousin",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden overflow-y-auto py-24 bg-transparent">
      <RoyalRajasthanBackground sectionRef={sectionRef} />
      <GoldenElements />
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1a0004] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1a0004] to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <p className="font-hindi text-[#e8dcb8] text-xl tracking-widest mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            परिवार
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-[#c3aa64] mb-6 glow-gold animate-shimmer bg-clip-text">
            Meet the Families
          </h2>
          <div className="ornament-line mx-auto drop-shadow-[0_0_5px_#c3aa64]" />
        </motion.div>

        {/* Main Parents Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16"
        >
          {/* Bride's Family */}
          <motion.div variants={cardVariants} className="group relative">
            <div className="absolute inset-0 bg-[#c3aa64]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative border border-[#c3aa64]/40 bg-[#1f0005]/80 backdrop-blur-sm rounded-t-full rounded-b-2xl p-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 hover:border-[#c3aa64] hover:shadow-[0_0_30px_rgba(195,170,100,0.3)]">
              {/* Image Frame */}
              <div className="w-full h-64 md:h-80 rounded-t-full overflow-hidden border-2 border-[#c3aa64]/60 mb-6 relative">
                <div className="absolute inset-0 bg-[#3b000b]/40 z-10 mix-blend-overlay"></div>
                <img src="/bride_family.png" alt="Bride's Family" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h3 className="font-display text-3xl text-[#f4e2b0] mb-2 drop-shadow-[0_0_8px_rgba(195,170,100,0.8)]">Bride's Parents</h3>
              <div className="ornament-line mx-auto w-1/2 mb-4 opacity-50" />
              <p className="font-body text-xl text-[#c3aa64] tracking-wider mb-2">Mr. & Mrs. Sharma</p>
              <p className="font-hindi text-[#e8dcb8]/80 text-sm italic">Grandparents: Late Mr. R.K. Sharma</p>
            </div>
          </motion.div>

          {/* Groom's Family */}
          <motion.div variants={cardVariants} className="group relative">
            <div className="absolute inset-0 bg-[#c3aa64]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative border border-[#c3aa64]/40 bg-[#1f0005]/80 backdrop-blur-sm rounded-t-full rounded-b-2xl p-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 hover:border-[#c3aa64] hover:shadow-[0_0_30px_rgba(195,170,100,0.3)]">
              {/* Image Frame */}
              <div className="w-full h-64 md:h-80 rounded-t-full overflow-hidden border-2 border-[#c3aa64]/60 mb-6 relative">
                <div className="absolute inset-0 bg-[#3b000b]/40 z-10 mix-blend-overlay"></div>
                <img src="/groom_family.png" alt="Groom's Family" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h3 className="font-display text-3xl text-[#f4e2b0] mb-2 drop-shadow-[0_0_8px_rgba(195,170,100,0.8)]">Groom's Parents</h3>
              <div className="ornament-line mx-auto w-1/2 mb-4 opacity-50" />
              <p className="font-body text-xl text-[#c3aa64] tracking-wider mb-2">Mr. & Mrs. Verma</p>
              <p className="font-hindi text-[#e8dcb8]/80 text-sm italic">Grandparents: Mr. & Mrs. S.P. Verma</p>
            </div>
          </motion.div>
        </motion.div>

        {/* View Details Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onClick={() => setShowExtended(!showExtended)}
          className="relative group overflow-hidden border-2 border-[#c3aa64] text-[#c3aa64] hover:text-[#2a0007] px-10 py-4 text-center rounded-sm transition-all duration-500 outline-none font-body uppercase tracking-[0.3em] font-semibold text-sm shadow-[0_0_15px_rgba(195,170,100,0.3)] hover:shadow-[0_0_25px_rgba(195,170,100,0.6)]"
        >
          <span className="absolute inset-0 w-full h-full -ml-[100%] bg-[#c3aa64] transition-all duration-500 group-hover:ml-0 z-0"></span>
          <span className="relative z-10">{showExtended ? "Hide Other Members" : "View Details"}</span>
        </motion.button>

        <AnimatePresence>
          {showExtended && (
            <motion.div
              initial={{ height: 0, opacity: 0, rotateX: -20 }}
              animate={{ height: "auto", opacity: 1, rotateX: 0 }}
              exit={{ height: 0, opacity: 0, rotateX: 20 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="overflow-hidden mt-16 perspective-1000"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Bride's Extended */}
                <div className="space-y-6">
                  <h4 className="font-display text-2xl text-[#f4e2b0] mb-6 drop-shadow-[0_0_5px_#c3aa64]">Bride's Relatives</h4>
                  {brideRelatives.map((member, i) => (
                    <motion.div 
                      key={`bride-ext-${i}`}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 + 0.3 }}
                      className="border border-[#c3aa64]/30 bg-black/40 backdrop-blur-md p-5 rounded-lg flex items-center gap-4 hover:border-[#c3aa64]/80 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.6)] group/item"
                    >
                      <RelativeAvatar 
                        src={member.image} 
                        name={member.name} 
                        type={member.type} 
                        isLate={member.isLate}
                      />
                      <p className={`font-body text-lg text-left ${member.isLate ? 'text-[#e8dcb8]/60 italic' : 'text-[#e8dcb8]'}`}>
                        {member.name}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Groom's Extended */}
                <div className="space-y-6">
                  <h4 className="font-display text-2xl text-[#f4e2b0] mb-6 drop-shadow-[0_0_5px_#c3aa64]">Groom's Relatives</h4>
                  {groomRelatives.map((member, i) => (
                    <motion.div 
                      key={`groom-ext-${i}`}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 + 0.3 }}
                      className="border border-[#c3aa64]/30 bg-black/40 backdrop-blur-md p-5 rounded-lg flex items-center gap-4 hover:border-[#c3aa64]/80 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.6)] group/item"
                    >
                      <RelativeAvatar 
                        src={member.image} 
                        name={member.name} 
                        type={member.type} 
                        isLate={member.isLate}
                      />
                      <p className="font-body text-lg text-[#e8dcb8] text-left">{member.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FamilySection;

