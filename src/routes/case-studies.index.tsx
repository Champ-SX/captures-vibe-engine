import { createFileRoute, Link } from "@tanstack/react-router";
import { caseStudies } from "@/data/caseStudies";
import { PageHero } from "@/components/PageHero";
import { RevealOnScroll } from "@/components/RevealOnScroll";

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
      <PageHero
        image={caseStudies[0]?.hero}
        eyebrow="01 · Case Studies"
        title={
          <>
            Activations.<br />
            <span className="text-primary">Built in the wild.</span>
          </>
        }
        intro="Brand activations, retail experiences, and live events powered by CAPTURES — from malls and festivals to fashion launches and permanent installs."
        cta={{ href: "mailto:hello@captures.photo", label: "Start a project →" }}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16">
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <RevealOnScroll key={cs.slug} delay={i * 80} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <Link
                key={cs.slug}
                to="/case-studies/$slug"
                params={{ slug: cs.slug }}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-border bg-surface">
                  <img src={cs.hero} alt={cs.client} className="img-hover-lift h-full w-full object-cover grayscale group-hover:grayscale-0" />
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
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}