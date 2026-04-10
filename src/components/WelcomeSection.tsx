import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GoldenElements from "./GoldenElements";
import RoyalRajasthanBackground from "./RoyalRajasthanBackground";

interface WelcomeSectionProps {
  onOpenInvitation: () => void;
}

const WelcomeSection = ({ onOpenInvitation }: WelcomeSectionProps) => {
  const [guestName, setGuestName] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const { guestName: pathName } = useParams();

  useEffect(() => {
    // Check URL route parameter (e.g. /John-Doe) or query params (e.g. ?guest=John+Doe)
    if (pathName) {
      // Decode and replace dashes/underscores with spaces for better presentation
      const decodedName = decodeURIComponent(pathName).replace(/[-_]/g, ' ');
      setGuestName(decodedName);
    } else {
      const params = new URLSearchParams(window.location.search);
      const guestParam = params.get("guest");
      if (guestParam) {
        setGuestName(guestParam);
      }
    }
  }, [pathName]);

  return (
    <div ref={sectionRef} className="flex flex-col items-center justify-center min-h-screen relative p-6 text-center z-10 w-full overflow-y-auto bg-transparent">
      <RoyalRajasthanBackground sectionRef={sectionRef} />
      <GoldenElements />
      
      {/* Royal Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#3b000b]/60 z-10" /> {/* Dark overlay for text readability */}
        <img 
          src="/welcome_bg.png" 
          alt="Royal Indian Background" 
          className="w-full h-full object-cover opacity-60" 
        />
      </div>

      {/* Decorative ornaments */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mb-8 z-10 relative"
      >
        <img src="/lovable-uploads/271ad52b-74f4-448f-8890-0b6fd501438a.png" alt="Royal Ornament" className="w-32 h-auto mx-auto opacity-80 drop-shadow-[0_0_15px_rgba(195,170,100,0.5)]" onError={(e) => e.currentTarget.style.display = 'none'} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="space-y-6 max-w-2xl z-10 relative"
      >
        <h2 className="font-body text-4xl md:text-6xl text-[#c3aa64] glow-gold">
          {guestName ? guestName : "Aman Sharma"}
        </h2>
        
        <p className="font-hindi text-lg md:text-xl text-[#e8dcb8] leading-relaxed opacity-95 mx-auto max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          We warmly invite you to share our joy and bless us with your presence on our special day.
        </p>

        <div className="py-8 font-display text-5xl md:text-7xl text-[#c3aa64] animate-shimmer bg-clip-text drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          <span className="block mb-2">Aarav</span>
          <span className="block text-3xl md:text-4xl italic opacity-90">&amp;</span>
          <span className="block mt-2">Priya</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="mt-8 z-10 relative"
      >
        <Button 
          onClick={onOpenInvitation} 
          className="bg-black/50 backdrop-blur-sm border-2 border-[#c3aa64] text-[#c3aa64] hover:bg-[#c3aa64] hover:text-[#4a0000] px-8 py-6 rounded-full text-xl tracking-widest uppercase transition-all duration-300 font-semibold shadow-[0_0_20px_rgba(195,170,100,0.3)] hover:shadow-[0_0_30px_rgba(195,170,100,0.6)]"
        >
          Open Invitation
        </Button>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-60 z-10">
        <div className="w-full h-40 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
    </div>
  );
};

export default WelcomeSection;
