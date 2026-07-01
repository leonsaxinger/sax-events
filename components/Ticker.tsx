import { Sparkle } from "./Icons";

/**
 * Full-bleed marquee band used as a loud divider between sections.
 * Big Anton caps scrolling sideways on a colour strip — pure CSS animation
 * (see `animate-marquee`), pauses under prefers-reduced-motion.
 */
export default function Ticker({
  text,
  bg = "bg-accent",
  fg = "text-ink",
  rotate = 0,
  speed = "normal",
}: {
  text: string;
  bg?: string;
  fg?: string;
  rotate?: number;
  speed?: "normal" | "slow";
}) {
  const items = Array.from({ length: 8 });
  const anim = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";

  return (
    <div
      className={`relative isolate overflow-hidden border-y-2 border-ink py-3 ${bg} ${fg}`}
      style={rotate ? { transform: `rotate(${rotate}deg)`, marginBlock: "1.5rem" } : undefined}
    >
      <div className={`flex w-max ${anim} whitespace-nowrap`}>
        {items.concat(items).map((_, i) => (
          <span
            key={i}
            className="flex items-center gap-5 pr-5 font-display text-xl uppercase tracking-tight sm:text-2xl"
          >
            {text}
            <Sparkle className="h-4 w-4 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
