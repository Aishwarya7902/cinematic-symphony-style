import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  JharokhaIcon, 
  PeacockIcon, 
  MandanaIcon, 
  MarigoldPetalIcon, 
  PalaceArchIcon 
} from "./RoyalIcons";

interface RoyalRajasthanBackgroundProps {
  sectionRef: React.RefObject<HTMLDivElement | HTMLElement>;
}

const RoyalRajasthanBackground: React.FC<RoyalRajasthanBackgroundProps> = ({ sectionRef }) => {
  const { scrollYProgress } = useScroll({
    container: sectionRef,
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Parallax transforms for various elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-10 md:opacity-15">
      {/* Background Palace Arches */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <PalaceArchIcon className="w-full h-auto opacity-40 animate-pulse" style={{ animationDuration: '10s' }} />
      </motion.div>

      {/* Floating Jharokhas */}
      <motion.div 
        style={{ y: y2, x: -50 }}
        className="absolute top-1/4 -left-10 md:left-10 animate-float-slow"
      >
        <JharokhaIcon className="w-40 md:w-64 h-auto shadow-2xl" />
      </motion.div>

      <motion.div 
        style={{ y: y3, x: 50 }}
        className="absolute top-1/2 -right-10 md:right-10 animate-float"
        style={{ animationDelay: '1s' }}
      >
        <JharokhaIcon className="w-40 md:w-64 h-auto transform scale-x-[-1] shadow-2xl" />
      </motion.div>

      {/* Mandana Patterns */}
      <motion.div 
        style={{ y: y4, rotate: rotate1 }}
        className="absolute top-10 right-1/4 animate-spin-slow"
      >
        <MandanaIcon className="w-32 md:w-48 h-48 opacity-30" />
      </motion.div>

      <motion.div 
        style={{ y: y1, rotate: rotate2 }}
        className="absolute bottom-20 left-1/4 animate-spin-slow"
        style={{ animationDirection: 'reverse', animationDuration: '40s' }}
      >
        <MandanaIcon className="w-32 md:w-48 h-48 opacity-30" />
      </motion.div>

      {/* Peacocks */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-10 left-5 md:left-20 animate-float-slow"
      >
        <PeacockIcon className="w-32 md:w-48 h-48" />
      </motion.div>

      <motion.div 
        style={{ y: y3 }}
        className="absolute top-20 right-5 md:right-20 animate-float"
        style={{ animationDelay: '2s' }}
      >
        <PeacockIcon className="w-32 md:w-48 h-48 transform scale-x-[-1]" />
      </motion.div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2a0007]/50 to-transparent"></div>
    </div>
  );
};

export default RoyalRajasthanBackground;

