/**
 * A hand-slapped sticker / rubber-stamp accent. Rotated, chunky border,
 * meant to be dropped onto a corner of a section or card to break the
 * clean-grid "template" feel. Purely decorative.
 */
export default function Sticker({
  children,
  rotate = -8,
  color = "accent",
  className = "",
}: {
  children: React.ReactNode;
  rotate?: number;
  color?: "accent" | "acid" | "bubble" | "coral" | "grape";
  className?: string;
}) {
  const ring: Record<string, string> = {
    accent: "border-accent text-accent",
    acid: "border-acid text-acid",
    bubble: "border-bubble text-bubble",
    coral: "border-coral text-coral",
    grape: "border-grape text-grape",
  };

  return (
    <span
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`inline-flex items-center gap-1.5 rounded-full border-2 border-dashed bg-ink/70 px-4 py-1.5 font-display text-sm uppercase tracking-wide backdrop-blur-sm ${ring[color]} ${className}`}
    >
      {children}
    </span>
  );
}
