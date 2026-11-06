const STARS = [
  { top: "6%", left: "8%", size: "text-lg", delay: "0s" },
  { top: "12%", left: "85%", size: "text-2xl", delay: "0.6s" },
  { top: "28%", left: "14%", size: "text-sm", delay: "1.2s" },
  { top: "9%", left: "68%", size: "text-base", delay: "1.8s" },
  { top: "42%", left: "92%", size: "text-sm", delay: "0.3s" },
  { top: "58%", left: "5%", size: "text-xl", delay: "1.5s" },
  { top: "72%", left: "88%", size: "text-base", delay: "0.9s" },
  { top: "86%", left: "10%", size: "text-sm", delay: "2.2s" },
  { top: "90%", left: "80%", size: "text-lg", delay: "0.2s" },
  { top: "35%", left: "50%", size: "text-xs", delay: "2.6s" },
];

export default function StarDecor() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      aria-hidden="true"
    >
      {STARS.map((s, i) => (
        <span
          key={i}
          className={`animate-twinkle absolute text-[#fde047] ${s.size}`}
          style={{ position: "absolute", top: s.top, left: s.left, animationDelay: s.delay }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
