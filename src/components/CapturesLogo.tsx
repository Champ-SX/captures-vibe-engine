import { cn } from "@/lib/utils";

type Variant = "monogram" | "horizontal" | "vertical";
type Tone = "lime" | "white" | "black";

interface Props {
  variant?: Variant;
  tone?: Tone;
  className?: string;
  monoClassName?: string;
  wordClassName?: string;
}

const toneClass: Record<Tone, string> = {
  lime: "text-primary",
  white: "text-foreground",
  black: "text-background",
};

/**
 * CAPTURES aperture monogram — 9 radiating blades around a central
 * star-shaped negative space. Drawn with currentColor so it inherits
 * from `text-*` utilities on the wrapper.
 */
function Monogram({ className }: { className?: string }) {
  const blades = Array.from({ length: 9 }, (_, i) => i * 40);
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={cn("block", className)}
      fill="currentColor"
    >
      {blades.map((angle) => (
        <rect
          key={angle}
          x="44"
          y="4"
          width="12"
          height="38"
          rx="1.5"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
    </svg>
  );
}

function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display font-bold leading-none tracking-tight",
        className,
      )}
    >
      CAPTURES
    </span>
  );
}

export function CapturesLogo({
  variant = "horizontal",
  tone = "lime",
  className,
  monoClassName,
  wordClassName,
}: Props) {
  const toneCls = toneClass[tone];

  if (variant === "monogram") {
    return (
      <span className={cn("inline-block", toneCls, className)}>
        <Monogram className={cn("h-7 w-7", monoClassName)} />
      </span>
    );
  }

  if (variant === "vertical") {
    return (
      <span
        className={cn(
          "inline-flex flex-col items-start gap-2",
          toneCls,
          className,
        )}
      >
        <Monogram className={cn("h-8 w-8", monoClassName)} />
        <Wordmark className={cn("text-base", wordClassName)} />
      </span>
    );
  }

  return (
    <span
      className={cn("inline-flex items-center gap-2.5", toneCls, className)}
    >
      <Monogram className={cn("h-6 w-6 shrink-0", monoClassName)} />
      <Wordmark className={cn("text-[17px]", wordClassName)} />
    </span>
  );
}