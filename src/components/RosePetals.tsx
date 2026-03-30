import { useMemo } from "react";

const RosePetals = ({ count = 20 }: { count?: number }) => {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 12,
        duration: 6 + Math.random() * 8,
        size: 12 + Math.random() * 10,
        drift: -30 + Math.random() * 60,
        rotation: Math.random() * 360,
        opacity: 0.25 + Math.random() * 0.35,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute rose-petal"
          style={{
            left: p.left,
            top: -20,
            fontSize: p.size,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            ["--drift" as string]: `${p.drift}px`,
            ["--rot" as string]: `${p.rotation}deg`,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
};

export default RosePetals;
