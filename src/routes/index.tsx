import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { Marquee } from "@/components/Marquee";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ParallaxImage } from "@/components/ParallaxImage";
import { products } from "@/data/products";
import heroKiehls from "@/assets/hero/hero-kiehls.jpg";
import homeProductServices from "@/assets/home/home-product-services.jpg";
import homeSpaceActivation from "@/assets/home/home-space-activation.jpg";
import esteeLauderHero from "@/assets/case-studies/estee-lauder/001-7-2.jpg";
import cartierHero from "@/assets/case-studies/cartier/001-6-2.jpg";

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
  const marqueeProducts = products.slice(0, 10);
  return (
    <>
      {/* HERO — cinematic full-bleed */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden border-b border-border">
        <img
          src={heroKiehls}
          alt="CAPTURES brand activation"
          className="absolute inset-0 h-full w-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
        <div className="absolute inset-x-0 top-0 z-10 mx-auto max-w-[1400px] px-6 pt-8">
          <SectionLabel index="00">A SIXSHEET system</SectionLabel>
        </div>

        {/* Floating overlay card, definedvc-style */}
        <div className="absolute bottom-10 left-6 right-6 z-10 md:bottom-16 md:left-12 md:right-auto md:max-w-2xl">
          <RevealOnScroll className="border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-md md:p-12">
            <div className="flex items-center gap-3">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-yellow)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-yellow)]" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Live · captures.photo
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              Event experience tools<br />
              <span className="text-primary">for modern activations.</span>
            </h1>
            <p className="mt-6 max-w-lg text-sm text-muted-foreground md:text-base">
              CAPTURES is a connected photobooth and event engagement system. Built for brand activations, retail, and live experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
          </RevealOnScroll>
        </div>

        {/* Floating stats — right side */}
        <div className="absolute bottom-10 right-6 z-10 hidden md:bottom-16 md:right-12 md:block">
          <div className="grid grid-cols-1 gap-4 text-right">
            {[
              { k: "12+", l: "Booth products" },
              { k: "180k", l: "Guest captures" },
              { k: "8", l: "Cities live" },
            ].map((s) => (
              <div key={s.l} className="bg-background/70 px-5 py-3 backdrop-blur-sm">
                <div className="font-display text-2xl font-semibold">{s.k}</div>
                <div className="eyebrow mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <section className="border-b border-border bg-background py-6">
        <Marquee speed={45}>
          {["Photobooth systems", "Space activations", "Event technology", "AI portrait", "360 video", "Mirror booth", "Live gallery", "Brand experiences"].map((t, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="font-display text-3xl font-semibold tracking-tight md:text-5xl">{t}</span>
              <span className="h-2 w-2 rounded-full bg-primary" />
            </div>
          ))}
        </Marquee>
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
          <RevealOnScroll>
            <h2 className="mt-6 max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">
              Our Product & Services<br />
              <span className="text-muted-foreground">serve your event experience.</span>
            </h2>
          </RevealOnScroll>
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
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">02 — LIBRARY</div>
                  <div className="mt-2 font-display text-xl font-medium">Ready-to-Go Photobooth</div>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                    Plug-and-play photobooth systems designed for brands, venues, and events. Pre-engineered, field-tested, and deployment-ready — from classic photo experiences to AI-powered and multi-camera formats. Fast to launch, easy to operate, and built for scalable real-world use.
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
                  src={homeProductServices}
                  alt="CAPTURES Photo Booth installation"
                  className="h-full w-full object-cover grayscale"
                />
                <div className="absolute left-3 top-3 bg-background/85 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
                  Live · capture
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INFINITE PRODUCT MARQUEE */}
      <section className="border-b border-border bg-background py-12">
        <Marquee speed={60}>
          {marqueeProducts.map((p) => (
            <Link
              key={p.id}
              to="/product-services/$productId"
              params={{ productId: p.id }}
              className="group block w-[260px] flex-shrink-0"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                <img
                  src={p.image}
                  alt={p.name}
                  className="img-hover-lift h-full w-full object-cover grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="mt-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{p.id.replace("product-", "P/")}</div>
                <div className="mt-1 font-display text-sm font-medium">{p.name}</div>
              </div>
            </Link>
          ))}
        </Marquee>
      </section>

      {/* PARALLAX IMAGE BAND */}
      <section className="relative h-[60vh] min-h-[420px] border-b border-border">
        <ParallaxImage
          src={homeProductServices}
          alt="CAPTURES booth in production"
          speed={0.18}
          className="h-full w-full"
          overlay
        />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1400px] px-6">
            <RevealOnScroll>
              <div className="max-w-2xl">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">In motion</span>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                  Every capture<br />
                  <span className="text-primary">becomes a moment.</span>
                </h2>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* PILLAR 2 — CAPTURES BOOTH (SaaS) */}
      <section
        className="relative overflow-hidden border-b border-border bg-black"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 20% 30%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "auto, 48px 48px, 48px 48px",
        }}
      >
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div>
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

        </div>
      </section>

      {/* PILLAR 3 — SPACE ACTIVATION */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden border border-border">
                <img
                  src={homeSpaceActivation}
                  alt="Fotoautomat space activation"
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

      {/* FEATURED WORK — image-led overlay tiles */}
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

          <div className="mt-12 grid gap-6 md:grid-cols-12 md:gap-8">
            {/* 01 — Estee Lauder (tall, left, offset) */}
            <Link
              to="/case-studies/$slug"
              params={{ slug: "estee-lauder-pure-color-desire" }}
              className="group relative col-span-12 block md:col-span-7"
            >
              <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
                <img
                  src={esteeLauderHero}
                  alt="Estee Lauder Pure Color Desire lipstick launch event"
                  className="img-hover-lift h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
                <div className="absolute left-5 top-5 bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  Beauty · Product Launch
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    The St. Regis Hotel — Bangkok · 2024
                  </div>
                  <h3 className="mt-3 max-w-xl font-display text-2xl font-semibold leading-tight tracking-tight md:text-4xl">
                    Cinematic VIDEOBOOTH for Estée Lauder's Pure Color Desire launch.
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    View case study →
                  </span>
                </div>
              </div>
            </Link>

            {/* 02 — Cartier (right, top-pushed) */}
            <Link
              to="/case-studies/$slug"
              params={{ slug: "cartier-precious-garage" }}
              className="group relative col-span-12 block md:col-span-5 md:mt-24"
            >
              <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/6]">
                <img
                  src={cartierHero}
                  alt="Cartier Precious Garage golden container activation"
                  className="img-hover-lift h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
                <div className="absolute left-5 top-5 bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  Luxury · Brand Activation
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Siam Paragon — Bangkok · 2024
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                    4,526 downloads and 4,500 prints for Cartier Precious Garage.
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    View case study →
                  </span>
                </div>
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
          <Link
            to="/contact"
            className="mt-10 inline-block bg-primary px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
