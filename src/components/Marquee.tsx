import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  speed?: number; // seconds for one loop
  className?: string;
  pauseOnHover?: boolean;
}

export function Marquee({ children, speed = 40, className = "", pauseOnHover = true }: Props) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className={`flex w-max gap-12 ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}