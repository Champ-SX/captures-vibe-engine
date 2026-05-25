import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { caseStudies } from "@/data/caseStudies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CAPTURES — Event experience tools by SIXSHEET" },
      { name: "description", content: "Photobooth systems, space activations, and event technology built for live experiences." },
      { property: "og:title", content: "CAPTURES — Event experience tools" },
      { property: "og:description", content: "Built for events. Designed for engagement." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2000&q=70)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-28 pt-24 md:pb-40 md:pt-32">
          <SectionLabel index="00">A SIXSHEET system</SectionLabel>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-[96px]">
            Event experience tools<br />
            <span className="text-primary">for modern activations.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
            CAPTURES is a connected photobooth and event engagement system. Built for brand activations, retail, and live experiences.
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/product-services"
              className="bg-primary px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore products →
            </Link>
            <Link
              to="/case-studies"
              className="border border-border px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              See activations
            </Link>
          </div>

          <div className="mt-20 grid max-w-3xl grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "12+", l: "Booth products" },
              { k: "180k", l: "Guest captures" },
              { k: "8", l: "Cities live" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-semibold md:text-4xl">{s.k}</div>
                <div className="eyebrow mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION INDEX */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <div className="flex items-end justify-between">
            <SectionLabel index="01">The system</SectionLabel>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:block">
              Four operational areas
            </span>
          </div>
          <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            A modular platform for live experiences.
          </h2>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
            {[
              { to: "/product-services", n: "01", t: "Product & Services", d: "Custom experiences and a library of 12 booth products built for engagement." },
              { to: "/space-activation", n: "02", t: "Space Activation", d: "Photoautomat systems for venues, retail, and lifestyle spaces. Revenue-share available." },
              { to: "/case-studies", n: "03", t: "Case Studies", d: "How CAPTURES shows up in malls, festivals, fashion launches, and permanent installs." },
              { to: "/technology", n: "04", t: "Technology", d: "Payments, print, gallery, analytics, and merchandise — built as modular components." },
            ].map((b) => (
              <Link
                key={b.to}
                to={b.to}
                className="group bg-background p-10 transition-colors hover:bg-surface"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-primary">{b.n}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-primary">
                    Open →
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold md:text-3xl">{b.t}</h3>
                <p className="mt-3 max-w-md text-sm text-muted-foreground md:text-base">{b.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CAPTURES BOOTH preview */}
      <section className="border-b border-border" style={{ backgroundColor: "var(--color-teal)" }}>
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <SectionLabel index="02">Operations</SectionLabel>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              CAPTURES BOOTH<br />
              <span className="text-primary">Connected operations.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm text-muted-foreground md:text-base">
              A connected booth management system designed for modern event operations. Dashboards, queues, prints, and galleries — coordinated in one place.
            </p>
            <a
              href="http://captures.photo/booth"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-block border border-primary bg-transparent px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Open captures.photo/booth ↗
            </a>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border">
            {["Dashboard", "Booth software", "QR workflow", "Queue", "Prints", "Gallery", "Analytics", "Setup"].map((m) => (
              <div key={m} className="bg-[color:var(--color-teal)] p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Module</div>
                <div className="mt-3 font-display text-lg font-medium">{m}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <div className="flex items-end justify-between">
            <SectionLabel index="03">Featured work</SectionLabel>
            <Link to="/case-studies" className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary">
              All case studies →
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {caseStudies.slice(0, 2).map((cs) => (
              <Link
                key={cs.slug}
                to="/case-studies/$slug"
                params={{ slug: cs.slug }}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-border bg-surface">
                  <img src={cs.hero} alt={cs.client} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]" />
                  <div className="absolute left-4 top-4 bg-background/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                    {cs.category}
                  </div>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">{cs.title}</h3>
                  <span className="font-mono text-[11px] text-muted-foreground">{cs.year}</span>
                </div>
                <div className="eyebrow mt-2">{cs.client}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-28 text-center md:py-40">
          <SectionLabel index="04">Start a project</SectionLabel>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Built for events.<br />
            <span className="text-primary">Designed for engagement.</span>
          </h2>
          <a
            href="mailto:hello@captures.photo"
            className="mt-10 inline-block bg-primary px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90"
          >
            hello@captures.photo →
          </a>
        </div>
      </section>
    </>
  );
}
