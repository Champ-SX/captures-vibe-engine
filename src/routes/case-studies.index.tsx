import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { caseStudies } from "@/data/caseStudies";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — CAPTURES" },
      { name: "description", content: "Activations, campaigns, retail experiences, and live events powered by CAPTURES." },
      { property: "og:title", content: "Case Studies — CAPTURES" },
      { property: "og:description", content: "How CAPTURES shows up in malls, festivals, fashion launches, and permanent installs." },
    ],
  }),
  component: CaseStudiesIndex,
});

function CaseStudiesIndex() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <SectionLabel index="01">Case Studies</SectionLabel>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Activations.<br />
            <span className="text-muted-foreground">Built in the wild.</span>
          </h1>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16">
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <Link
                key={cs.slug}
                to="/case-studies/$slug"
                params={{ slug: cs.slug }}
                className={`group block ${i % 2 === 1 ? "md:mt-24" : ""}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-border bg-surface">
                  <img src={cs.hero} alt={cs.client} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]" />
                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="bg-background/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{cs.category}</span>
                    <span className="bg-background/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{cs.year}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="eyebrow">{cs.client}</div>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                    {cs.title}
                  </h2>
                  <p className="mt-3 max-w-lg text-sm text-muted-foreground">{cs.summary}</p>
                  <div className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground group-hover:text-primary">
                    Read case study →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}