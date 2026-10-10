import { useMemo } from "react";

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Star = {
  left: number;
  top: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
};

export function Starfield({ count = 90 }: { count?: number }) {
  const stars = useMemo<Star[]>(() => {
    const rand = mulberry32(20261010);
    return Array.from({ length: count }, () => ({
      left: rand() * 100,
      top: rand() * 100,
      size: rand() < 0.82 ? 1 : 2,
      opacity: 0.15 + rand() * 0.55,
      duration: 2.8 + rand() * 4.5,
      delay: rand() * 6,
    }));
  }, [count]);

  return (
    <div aria-hidden="true" className="relative size-full overflow-hidden bg-black">
      <div className="absolute -top-48 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,42,102,0.16),transparent_65%)]" />
      <div className="absolute bottom-[-14rem] right-[-10rem] size-[36rem] rounded-full bg-[radial-gradient(circle,rgba(96,29,73,0.16),transparent_65%)]" />
      <div className="absolute left-[-8rem] top-1/3 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(192,106,147,0.1),transparent_65%)]" />
      {stars.map((star, i) => (
        <span
          key={i}
          className="star-twinkle absolute rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            backgroundColor: "#ffffff",
            ["--star-opacity" as string]: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
