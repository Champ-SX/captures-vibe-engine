import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { caseStudies } from "@/data/caseStudies";
import { PageHero } from "@/components/PageHero";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ParallaxImage } from "@/components/ParallaxImage";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const cs = caseStudies.find((c) => c.slug === params.slug);
    if (!cs) throw notFound();
    return { cs };
  },
  head: ({ loaderData }) => {
    const cs = loaderData?.cs;
    const title = cs ? `${cs.client} — CAPTURES Case Study` : "Case Study — CAPTURES";
    const desc = cs?.summary ?? "CAPTURES case study";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(cs ? [{ property: "og:image", content: cs.hero }] : []),
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-3xl font-semibold">Case study not found</h1>
      <Link to="/case-studies" className="mt-6 inline-block text-primary">← All case studies</Link>
    </div>
  ),
  component: CaseStudyDetail,
});

function CaseStudyDetail() {
  const { cs } = Route.useLoaderData();

  return (
    <>
      <PageHero
        image={cs.hero}
        alt={cs.client}
        backLink={{ to: "/case-studies", label: "All case studies" }}
        eyebrow={cs.client}
        title={cs.title}
        intro={cs.summary}
        meta={[
          { k: "Client", v: cs.client },
          { k: "Year", v: cs.year },
          { k: "Category", v: cs.category },
          { k: "Format", v: cs.technology[0] ?? "—" },
        ]}
      />

      {/* OVERVIEW */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:grid-cols-[1fr_2fr]">
          <SectionLabel index="01">Overview</SectionLabel>
          <RevealOnScroll as="p" className="text-lg text-muted-foreground md:text-xl">
            {cs.summary}
          </RevealOnScroll>
        </div>
      </section>

      {/* FULL ARTICLE */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:grid-cols-[1fr_2fr]">
          <SectionLabel index="02">Read case study</SectionLabel>
          <div className="space-y-6 text-lg text-muted-foreground md:text-xl">
            {cs.article.split("\n\n").map((paragraph: string, i: number) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX BAND */}
      {cs.gallery[0] && (
        <section className="border-b border-border">
          <ParallaxImage
            src={cs.gallery[0]}
            alt=""
            speed={0.18}
            className="h-[60vh] min-h-[400px] w-full"
            overlay
          />
        </section>
      )}

      {/* CHALLENGE + JOURNEY */}
      <section className="border-b border-border" style={{ backgroundColor: "var(--color-teal)" }}>
        <div className="mx-auto grid max-w-[1400px] gap-px bg-border md:grid-cols-2">
          <div className="bg-[color:var(--color-teal)] p-10 md:p-16">
            <SectionLabel index="03">The challenge</SectionLabel>
            <p className="mt-6 text-lg text-foreground md:text-xl">{cs.challenge}</p>
          </div>
          <div className="bg-[color:var(--color-teal)] p-10 md:p-16">
            <SectionLabel index="04">Guest journey</SectionLabel>
            <ol className="mt-6 space-y-4">
              {cs.guestJourney.map((step: string, i: number) => (
                <li key={i} className="flex gap-4 border-b border-border pb-4">
                  <span className="font-mono text-[11px] text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* TECH + OUTPUTS */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:grid-cols-2">
          <div>
            <SectionLabel index="05">Technology</SectionLabel>
            <div className="mt-6 flex flex-wrap gap-2">
              {cs.technology.map((t: string) => (
                <span key={t} className="border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em]">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel index="06">Outputs</SectionLabel>
            <ul className="mt-6 space-y-3">
              {cs.outputs.map((o: string) => (
                <li key={o} className="flex items-center gap-3 border-b border-border py-3">
                  <span className="h-1.5 w-1.5 bg-primary" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <SectionLabel index="07">Results</SectionLabel>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {cs.results.map((r: { label: string; value: string }) => (
              <div key={r.label} className="bg-background p-10">
                <div className="font-display text-5xl font-semibold text-primary md:text-6xl">{r.value}</div>
                <div className="eyebrow mt-4">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <SectionLabel index="08">Behind the scenes</SectionLabel>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {cs.gallery.map((g: string, i: number) => (
              <RevealOnScroll key={i} delay={i * 60} className={`group overflow-hidden border border-border bg-surface ${i === 0 ? "md:col-span-2 aspect-[16/8]" : "aspect-[4/3]"}`}>
                <img src={g} alt="" className="img-hover-lift h-full w-full object-cover" />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-28 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Plan your next activation.
          </h2>
          <a
            href="mailto:hello@captures.photo"
            className="mt-8 inline-block bg-primary px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground"
          >
            hello@captures.photo →
          </a>
        </div>
      </section>
    </>
  );
}