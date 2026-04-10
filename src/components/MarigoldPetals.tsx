import { useMemo } from "react";

const MarigoldPetals = ({ count = 25 }: { count?: number }) => {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 15,
        duration: 8 + Math.random() * 10,
        size: 14 + Math.random() * 12,
        drift: -50 + Math.random() * 100,
        rotation: Math.random() * 360,
        opacity: 0.3 + Math.random() * 0.4,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute marigold-petal animate-drift"
          style={{
            left: p.left,
            top: -20,
            fontSize: p.size,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
            zIndex: 1,
            // Inline animation using simplified CSS logic
            ["--drift" as string]: `${p.drift}px`,
            ["--rot" as string]: `${p.rotation}deg`,
          }}
        >
          🌼
        </div>
      ))}
      <style>{`
        .marigold-petal {
          position: absolute;
          user-select: none;
          pointer-events: none;
        }
        .animate-drift {
          animation: marigold-fall linear infinite;
        }
        @keyframes marigold-fall {
          0% {
            transform: translateY(-5vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(105vh) translateX(var(--drift)) rotate(var(--rot));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default MarigoldPetals;
