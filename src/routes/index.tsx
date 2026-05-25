import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { caseStudies } from "@/data/caseStudies";
import { products } from "@/data/products";

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

      {/* SECTION INTRO */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-24">
          <div className="flex items-end justify-between">
            <SectionLabel index="01">The system</SectionLabel>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:block">
              Product · Software · Activation
            </span>
          </div>
          <h2 className="mt-6 max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">
            Our Product & Services<br />
            <span className="text-muted-foreground">serve your event experience.</span>
          </h2>
        </div>
      </section>

      {/* PILLAR 1 — PRODUCT & SERVICES */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-36">
          <div className="grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] tracking-[0.2em] text-primary">P1</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Primary pillar
                </span>
              </div>
              <h3 className="mt-8 font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                Product<br />
                <span className="text-primary">& Services.</span>
              </h3>
              <p className="mt-8 max-w-lg text-base text-muted-foreground md:text-lg">
                Custom-built event experiences and a modular library of 12 booth products. Designed for brand activations, retail moments, and cultural events.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">01 — Bespoke</div>
                  <div className="mt-2 font-display text-lg">Custom Experience</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">02 — Library</div>
                  <div className="mt-2 font-display text-lg">Legacy Photobooth · 12 products</div>
                </div>
              </div>
              <Link
                to="/product-services"
                className="mt-12 inline-block bg-primary px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Explore products →
              </Link>
            </div>
            <div className="md:col-span-2">
              <div className="relative aspect-[3/4] overflow-hidden border border-border bg-surface">
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=70"
                  alt="Cinematic event capture"
                  className="h-full w-full object-cover grayscale"
                />
                <div className="absolute left-3 top-3 bg-background/85 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
                  Live · capture
                </div>
              </div>
            </div>
          </div>

          {/* Modular product strip */}
          <div className="mt-16 -mx-6 overflow-x-auto px-6">
            <div className="flex min-w-max gap-px bg-border">
              {products
                .filter((p) => ["product-01", "product-03", "product-05", "product-06", "product-02"].includes(p.id))
                .map((p) => (
                  <Link
                    key={p.id}
                    to="/product-services/$productId"
                    params={{ productId: p.id }}
                    className="group block w-[220px] flex-shrink-0 bg-background"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="p-3">
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{p.id.replace("product-", "P/")}</div>
                      <div className="mt-2 font-display text-sm font-medium">{p.name}</div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 2 — CAPTURES BOOTH (SaaS) */}
      <section className="border-b border-border" style={{ backgroundColor: "var(--color-teal)" }}>
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] tracking-[0.2em] text-primary">P2</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Software · v2.4
                </span>
              </div>
              <h3 className="mt-8 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                CAPTURES BOOTH<br />
                <span className="text-primary">Connected ops.</span>
              </h3>
              <p className="mt-6 max-w-md text-sm text-muted-foreground md:text-base">
                Connected booth management system for modern event operations. Dashboards, queues, prints, and galleries — coordinated in one place.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span><span className="text-primary">99.9</span> uptime</span>
                <span><span className="text-primary">12</span> modules</span>
                <span><span className="text-primary">Live</span> sync</span>
              </div>
              <a
                href="http://captures.photo/booth"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-block border border-primary bg-transparent px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Open captures.photo/booth ↗
              </a>
            </div>

            {/* Dashboard preview */}
            <div className="md:col-span-7">
              <div className="border border-border/50 bg-background/30">
                <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 bg-primary" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">captures.booth / dashboard</span>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">v2.4</span>
                </div>
                <div className="grid grid-cols-2 gap-px bg-border/40 md:grid-cols-4">
                  {[
                    { m: "Dashboard", v: "live" },
                    { m: "Queue", v: "08" },
                    { m: "Prints", v: "1.2k" },
                    { m: "Gallery", v: "sync" },
                    { m: "QR Flow", v: "ok" },
                    { m: "Analytics", v: "↗" },
                    { m: "Setup", v: "ready" },
                    { m: "Booth SW", v: "v2.4" },
                  ].map((m) => (
                    <div key={m.m} className="bg-[color:var(--color-teal)] p-5">
                      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">Module</div>
                      <div className="mt-3 font-display text-sm font-medium">{m.m}</div>
                      <div className="mt-1 font-mono text-[10px] text-muted-foreground">{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 3 — SPACE ACTIVATION */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden border border-border">
                <img
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1600&q=70"
                  alt="Photoautomat in a venue space"
                  className="h-full w-full object-cover grayscale"
                />
                <div className="absolute bottom-3 left-3 bg-background/85 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
                  Permanent install
                </div>
              </div>
            </div>
            <div className="md:col-span-5 md:pt-8">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] tracking-[0.2em] text-primary">P3</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Venue · location
                </span>
              </div>
              <h3 className="mt-8 font-display text-4xl font-semibold tracking-tight md:text-6xl">
                Space<br />
                <span className="text-primary">Activation.</span>
              </h3>
              <p className="mt-8 max-w-md text-sm text-muted-foreground md:text-base">
                Photoautomat systems for retail spaces, cafés, and venue activations. Always-on capture moments with revenue-share opportunities for hosts.
              </p>
              <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Cafés · Retail · Lifestyle venues
              </div>
              <Link
                to="/space-activation"
                className="mt-10 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-primary hover:underline"
              >
                See activation system →
              </Link>
            </div>
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
