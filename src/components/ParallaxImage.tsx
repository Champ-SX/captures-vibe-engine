import { useEffect, useRef } from "react";

interface Props {
  src: string;
  alt: string;
  speed?: number; // 0 = none, 0.3 = subtle, 0.6 = strong
  className?: string;
  imgClassName?: string;
  overlay?: boolean;
}

export function ParallaxImage({ src, alt, speed = 0.25, className = "", imgClassName = "", overlay = false }: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const update = () => {
      const wrap = wrapRef.current;
      const img = imgRef.current;
      if (!wrap || !img) return;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // distance of element center from viewport center, normalized
      const offset = (rect.top + rect.height / 2 - vh / 2) * speed;
      img.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.18)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover will-change-transform ${imgClassName}`}
        style={{ transform: "scale(1.18)" }}
      />
      {overlay && <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />}
    </div>
  );
}