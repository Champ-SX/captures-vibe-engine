import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionLabel } from "@/components/SectionLabel";

export type FeatureItem = {
  title: string;
  description?: string;
  image: string;
};

interface Props {
  features: FeatureItem[];
  sectionIndex?: string;
  sectionLabel?: string;
  headline?: string;
}

export function FeatureShowcase({
  features,
  sectionIndex = "02",
  sectionLabel = "Features",
  headline = "Built into every booth.",
}: Props) {
  const [active, setActive] = useState(0);

  if (!features.length) return null;

  return (
    <section className="border-b border-border" style={{ backgroundColor: "var(--color-teal)" }}>
      <div className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionLabel index={sectionIndex}>{sectionLabel}</SectionLabel>
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {headline}
          </h2>
        </div>

        {/* DESKTOP: hover-to-preview */}
        <div className="mt-14 hidden gap-px bg-border md:grid md:grid-cols-[1fr_1.2fr]">
          <div className="bg-[color:var(--color-teal)]">
            <ul>
              {features.map((f, i) => {
                const isActive = i === active;
                return (
                  <li
                    key={f.title}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    tabIndex={0}
                    className={`group relative cursor-pointer border-b border-border px-6 py-7 transition-colors duration-300 lg:px-10 ${
                      isActive ? "bg-background" : "hover:bg-background/40"
                    }`}
                  >
                    <div className="flex items-baseline gap-6">
                      <span
                        className={`font-mono text-[11px] tracking-[0.2em] transition-colors duration-300 ${
                          isActive ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <h3
                          className={`font-display text-xl font-medium tracking-tight transition-colors duration-300 md:text-2xl ${
                            isActive ? "text-foreground" : "text-foreground/70"
                          }`}
                        >
                          {f.title}
                        </h3>
                        {f.description && (
                          <p
                            className={`mt-2 max-w-md text-sm text-muted-foreground transition-opacity duration-500 ${
                              isActive ? "opacity-100" : "opacity-0 h-0"
                            }`}
                            aria-hidden={!isActive}
                          >
                            {f.description}
                          </p>
                        )}
                      </div>
                      <span
                        className={`font-mono text-[10px] tracking-[0.2em] transition-all duration-500 ${
                          isActive
                            ? "translate-x-0 text-primary opacity-100"
                            : "-translate-x-2 text-muted-foreground opacity-0"
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative overflow-hidden bg-background">
            <div className="sticky top-20 aspect-[4/5] w-full overflow-hidden bg-surface p-6 md:p-10 lg:aspect-[4/3]">
              {features.map((f, i) => (
                <img
                  key={f.image + i}
                  src={f.image}
                  alt={f.title}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-contain p-6 md:p-10 transition-opacity duration-700 ease-out ${
                    i === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent p-6 md:p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                  Feature / {String(active + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 font-display text-xl font-semibold md:text-2xl">
                  {features[active].title}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE: accordion */}
        <div className="mt-12 md:hidden">
          <Accordion type="single" defaultValue="item-0" collapsible className="border-t border-border">
            {features.map((f, i) => (
              <AccordionItem key={f.title} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="px-1 py-5 hover:no-underline">
                  <div className="flex items-baseline gap-4 text-left">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg font-medium tracking-tight">
                      {f.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="overflow-hidden bg-surface p-3">
                    <img
                      src={f.image}
                      alt={f.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-contain"
                    />
                  </div>
                  {f.description && (
                    <p className="mt-4 text-sm text-muted-foreground">{f.description}</p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}