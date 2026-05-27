import { ReactNode, ElementType } from "react";
import { useInView } from "@/hooks/useInView";

interface Props {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}

export function RevealOnScroll({ children, as: Tag = "div", delay = 0, className = "" }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[800ms] ease-out motion-reduce:transition-none ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}