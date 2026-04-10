import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeSection from "./WelcomeSection";
import RoyalHero from "./RoyalHero";
import FamilySection from "./FamilySection";
import CoupleStory from "./CoupleStory";
import FloralEvents from "./FloralEvents";
import WishingWallSection from "./WishingWallSection";
import LuxuryWedding from "./LuxuryWedding";
import RSVPSection from "./RSVPSection";
import AnimatedRoyalBackground from "./AnimatedRoyalBackground";
import BackgroundMusic from "./BackgroundMusic";
import { ChevronUp, ChevronDown } from "lucide-react";

const sections = [
  WelcomeSection,
  RoyalHero,
  CoupleStory,
  FamilySection,
  FloralEvents,
  WishingWallSection,
  LuxuryWedding,
  RSVPSection,
];

const sectionNames = [
  "Welcome",
  "The Invitation",
  "Our Story",
  "Families",
  "Events",
  "Wishing Wall",
  "The Wedding",
  "RSVP"
];

const SectionContainer = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Prevent default scroll when we are managing full screen sections
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        nextSection();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        prevSection();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection]);

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  const handleOpenInvitation = () => {
    setCurrentSection(1);
    setHasInteracted(true);
  };

  const CurrentComponent = sections[currentSection];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#3b000b]">
      <AnimatedRoyalBackground />
      <BackgroundMusic autoStart={hasInteracted} />
      
      {/* Sections rendering using framer-motion AnimatePresence for transitions */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full overflow-y-auto"
        >
          {currentSection === 0 ? (
            <WelcomeSection onOpenInvitation={handleOpenInvitation} />
          ) : (
            <CurrentComponent />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Dot Navigation (Desktop only, minimal on mobile) */}
      {currentSection > 0 && (
        <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
          {sections.map((_, index) => {
            if (index === 0) return null; // hide dot for welcome
            return (
              <div key={index} className="group relative flex items-center justify-end">
                <span className="hidden md:block absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[#c3aa64] text-sm pr-2">
                  {sectionNames[index]}
                </span>
                <button
                  onClick={() => setCurrentSection(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSection === index 
                      ? "bg-[#c3aa64] scale-125 shadow-[0_0_10px_#c3aa64]" 
                      : "bg-[#c3aa64]/30 hover:bg-[#c3aa64]/70"
                  }`}
                  aria-label={`Go to ${sectionNames[index]}`}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Bottom Right Controls */}
      {currentSection > 0 && (
        <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 flex flex-col gap-2 z-40">
          <button
            onClick={prevSection}
            disabled={currentSection <= 1} // Index 1 is the first real section
            className="p-3 rounded-full bg-[#c3aa64]/10 border border-[#c3aa64]/30 text-[#c3aa64] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#c3aa64]/20 hover:border-[#c3aa64] transition-all"
            aria-label="Previous Section"
          >
            <ChevronUp size={24} />
          </button>
          <button
            onClick={nextSection}
            disabled={currentSection === sections.length - 1}
            className="p-3 rounded-full bg-[#c3aa64]/20 border border-[#c3aa64]/50 text-[#c3aa64] shadow-[0_0_15px_rgba(195,170,100,0.2)] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#c3aa64]/30 hover:border-[#c3aa64] transition-all"
            aria-label="Next Section"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionContainer;
