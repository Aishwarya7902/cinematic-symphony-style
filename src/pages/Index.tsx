import { useState } from "react";
import Curtain from "@/components/Curtain";
import SectionContainer from "@/components/SectionContainer";

const Index = () => {
  const [curtainOpened, setCurtainOpened] = useState(false);

  return (
    <main className="overflow-x-hidden relative h-screen w-full bg-[#3b000b]">
      {!curtainOpened && <Curtain onOpenComplete={() => setCurtainOpened(true)} />}
      
      <div className={`transition-opacity duration-1000 ${curtainOpened ? "opacity-100" : "opacity-0 invisible"}`}>
        <SectionContainer />
      </div>
    </main>
  );
};

export default Index;
