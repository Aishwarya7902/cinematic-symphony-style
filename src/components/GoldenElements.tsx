import { useMemo } from "react";

const GoldenElements = ({ count = 8 }: { count?: number }) => {
  const elements = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const type = i % 4; // 0=circle, 1=ring, 2=diamond, 3=dot-cluster
        return {
          id: i,
          type,
          left: `${10 + Math.random() * 80}%`,
          top: `${5 + Math.random() * 90}%`,
          size: type === 3 ? 4 + Math.random() * 6 : 40 + Math.random() * 120,
          opacity: 0.03 + Math.random() * 0.05,
          rotation: Math.random() * 360,
          delay: Math.random() * 6,
          duration: 8 + Math.random() * 12,
        };
      }),
    [count]
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[0]">
      {elements.map((el) => {
        if (el.type === 0) {
          // Soft golden circle
          return (
            <div
              key={el.id}
              className="absolute rounded-full golden-float"
              style={{
                left: el.left,
                top: el.top,
                width: el.size,
                height: el.size,
                background: `radial-gradient(circle, hsl(43 80% 55% / ${el.opacity + 0.04}) 0%, hsl(43 80% 55% / ${el.opacity}) 40%, transparent 70%)`,
                animationDelay: `${el.delay}s`,
                animationDuration: `${el.duration}s`,
              }}
            />
          );
        }
        if (el.type === 1) {
          // Golden ring
          return (
            <div
              key={el.id}
              className="absolute rounded-full golden-float"
              style={{
                left: el.left,
                top: el.top,
                width: el.size * 0.8,
                height: el.size * 0.8,
                border: `1px solid hsl(43 80% 55% / ${el.opacity + 0.03})`,
                animationDelay: `${el.delay}s`,
                animationDuration: `${el.duration}s`,
              }}
            />
          );
        }
        if (el.type === 2) {
          // Golden diamond
          return (
            <div
              key={el.id}
              className="absolute golden-float"
              style={{
                left: el.left,
                top: el.top,
                width: el.size * 0.4,
                height: el.size * 0.4,
                background: `hsl(43 80% 55% / ${el.opacity + 0.02})`,
                transform: `rotate(45deg)`,
                animationDelay: `${el.delay}s`,
                animationDuration: `${el.duration}s`,
              }}
            />
          );
        }
        // Small golden dot
        return (
          <div
            key={el.id}
            className="absolute rounded-full golden-float"
            style={{
              left: el.left,
              top: el.top,
              width: el.size,
              height: el.size,
              background: `hsl(43 80% 55% / ${el.opacity + 0.06})`,
              boxShadow: `0 0 ${el.size * 2}px hsl(43 80% 55% / ${el.opacity})`,
              animationDelay: `${el.delay}s`,
              animationDuration: `${el.duration}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default GoldenElements;
