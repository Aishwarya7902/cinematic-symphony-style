import RoyalHero from "@/components/RoyalHero";
import TempleSection from "@/components/TempleSection";
import CoupleStory from "@/components/CoupleStory";
import FloralEvents from "@/components/FloralEvents";
import BaraatSection from "@/components/BaraatSection";
import LuxuryWedding from "@/components/LuxuryWedding";
import RSVPSection from "@/components/RSVPSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <RoyalHero />
      <TempleSection />
      <CoupleStory />
      <FloralEvents />
      <BaraatSection />
      <LuxuryWedding />
      <RSVPSection />
    </main>
  );
};

export default Index;
