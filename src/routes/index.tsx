import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { caseStudies } from "@/data/caseStudies";
import { products, type Product } from "@/data/products";
import saas01 from "@/assets/saas/saas-01.png";
import heroKiehls from "@/assets/hero/hero-kiehls.jpg";

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
  const [stripProducts, setStripProducts] = useState<Product[]>(() => products.slice(0, 5));
  useEffect(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5).slice(0, 5);
    setStripProducts(shuffled);
  }, []);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 z-0 opacity-60"
          style={{
            backgroundImage: `url(${heroKiehls})`,
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
              <div className="mt-10 flex flex-col gap-8">
                <div className="border-l-2 border-primary pl-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">01 — Bespoke</div>
                  <div className="mt-2 font-display text-xl font-medium">Custom Experience</div>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                    For agencies, organizers, and brand teams. Photo systems and audience interaction tools, configured around the campaign — deployed at brand launches, festivals, activations, and corporate events.
                  </p>
                </div>
                <div className="border-l-2 border-border pl-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">02 — Library</div>
                  <div className="mt-2 font-display text-xl font-medium">Ready-to-Go Photobooth</div>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                    Twelve proven booth formats — Mirror, 360 Video, AI Portrait, Multi-Camera, Open-Air, and more. Pre-engineered, field-tested, and ready to deploy. You pick the format; we handle build, logistics, and on-site operation.
                  </p>
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
              {stripProducts.map((p) => (
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
              <Link
                to="/product-services"
                className="group block w-[220px] flex-shrink-0 bg-primary"
              >
                <div className="relative aspect-[4/5] overflow-hidden flex items-center justify-center">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground">
                    →
                  </span>
                </div>
                <div className="p-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/80">All</div>
                  <div className="mt-2 font-display text-sm font-medium text-primary-foreground">See all products →</div>
                </div>
              </Link>
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
                  Software for Business
                </span>
              </div>
              <h3 className="mt-8 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                CAPTURES<br />
                <span className="text-primary">BOOTH.</span>
              </h3>
              <p className="mt-6 max-w-md text-sm text-muted-foreground md:text-base">
                Event management, AI experience, instant sharing, live gallery, and client delivery — built for modern photobooth operators and agencies.
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

            {/* Module preview */}
            <div className="md:col-span-7">
              <div className="border border-border/50 bg-background/30">
                <div className="flex items-center justify-between border-b border-border/50 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 bg-primary" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">captures.booth / modules</span>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">v2.4</span>
                </div>
                <div className="grid grid-cols-2 gap-px bg-border/40 md:grid-cols-3">
                  {[
                    { m: "Live Gallery", v: "sync" },
                    { m: "Instant Sharing", v: "ok" },
                    { m: "Customize UX/UI", v: "active" },
                    { m: "Framework Designer", v: "PRINT · GIF · Video" },
                    { m: "Event Dashboard", v: "live" },
                    { m: "Integration", v: "api" },
                    { m: "Multi-event Control", v: "ready" },
                    { m: "Realtime Monitor", v: "↗" },
                    { m: "Branding", v: "on" },
                    { m: "Analytics", v: "↗" },
                    { m: "Lead Collection", v: "auto" },
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

          {/* App screenshot */}
          <div className="mt-16">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Inside the app
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                1 screen
              </span>
            </div>
            <div className="mt-6 max-w-sm overflow-hidden border border-border/50 bg-background/30">
              <img
                src={saas01}
                alt="CAPTURES BOOTH app"
                className="h-full w-full object-cover"
                loading="lazy"
              />
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
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="flex items-end justify-between">
            <SectionLabel index="03">Featured work</SectionLabel>
            <Link
              to="/case-studies"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
            >
              All case studies →
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-10">
            {/* 01 — Estee Lauder */}
            <Link to="/case-studies/$slug" params={{ slug: "estee-lauder-pure-color-desire" }} className="group block">
              <div className="relative aspect-[16/11] overflow-hidden border border-border">
                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80"
                  alt="Estee Lauder Pure Color Desire lipstick launch event"
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
                <div className="absolute left-4 top-4 bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  Beauty · Product Launch
                </div>
              </div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <h3 className="max-w-xl font-display text-2xl font-semibold leading-tight tracking-tight md:text-[28px]">
                  Cinematic VIDEOBOOTH for Estee Lauder's Pure Color Desire launch.
                </h3>
                <span className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-muted-foreground">2024</span>
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                The St. Regis Hotel — Bangkok
              </div>
            </Link>

            {/* 02 — Cartier */}
            <Link to="/case-studies/$slug" params={{ slug: "cartier-precious-garage" }} className="group block">
              <div className="relative aspect-[16/11] overflow-hidden border border-border">
                <img
                  src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1600&q=80"
                  alt="Cartier Precious Garage golden container activation"
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
                <div className="absolute left-4 top-4 bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  Luxury · Brand Activation
                </div>
              </div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <h3 className="max-w-xl font-display text-2xl font-semibold leading-tight tracking-tight md:text-[28px]">
                  4,526 downloads and 4,500 prints for Cartier Precious Garage.
                </h3>
                <span className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-muted-foreground">2024</span>
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Siam Paragon — Bangkok
              </div>
            </Link>
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
