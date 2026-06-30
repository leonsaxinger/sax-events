/**
 * Brand wordmark (text only). The SAX-Events badge lives in the hero, so the
 * navbar/footer use just the wordmark to avoid a doubled logo.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-2xl uppercase tracking-wide sm:text-[1.7rem] ${className}`}
    >
      SAX<span className="text-accent">·</span>Events
    </span>
  );
}
