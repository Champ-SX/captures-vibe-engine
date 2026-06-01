import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ParallaxImage } from "@/components/ParallaxImage";
import { SectionLabel } from "@/components/SectionLabel";
import techHero from "@/assets/products/ai-booth/ai-booth-02.jpg";
import sxStandard02 from "@/assets/products/sx-standard/sx-standard-02.jpg";
import sxStandard03 from "@/assets/products/sx-standard/sx-standard-03.jpg";
import popupStudio03 from "@/assets/products/popup-studio/popup-studio-03.jpg";
import boxShot02 from "@/assets/products/box-shot/box-shot-02.jpg";
import boxShot05 from "@/assets/products/box-shot/box-shot-05.jpg";
import photomoov01 from "@/assets/products/photomoov/photomoov-01.gif";
import photomoov02 from "@/assets/products/photomoov/photomoov-02.gif";
import cloudGallery from "@/assets/technology/cloud-gallery.jpg";
import analyticsDashboard from "@/assets/technology/analytics-dashboard.jpg";
import merchKeychain from "@/assets/technology/merch-keychain.jpg";
import merchMagnet from "@/assets/technology/merch-magnet.jpg";
import merchCharm from "@/assets/technology/merch-charm.jpg";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — CAPTURES" },
      { name: "description", content: "Technology modules built for engagement, operations, and post-event experiences." },
      { property: "og:title", content: "Technology — CAPTURES" },
      { property: "og:description", content: "Payments, creative print, GIF, cloud gallery, analytics, and photo merchandise — built as modular components." },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: Technology,
});

function Technology() {
  return (
    <>
      <PageHero
        image={techHero}
        alt="Technology stack"
        eyebrow="04 · Technology"
        title={
          <>
            A flexible stack<br />
            <span className="text-primary">built for modern</span><br />
            event activations.
          </>
        }
        intro="Payments, creative print, GIF, cloud gallery, analytics, and photo merchandise — built as modular components you can mix into any activation."
        cta={{ href: "mailto:hello@captures.photo", label: "Talk to us →" }}
      />

      {/* INTRO */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:grid-cols-[1fr_2fr]">
          <div>
            <SectionLabel index="00">Stack</SectionLabel>
          </div>
          <div>
            <p className="text-lg text-muted-foreground md:text-xl">
              Six modular technologies engineered to drop into any CAPTURES booth or space.
              Mix them, swap them, scale them — every activation gets exactly the stack it needs.
            </p>
          </div>
        </div>
      </section>

      {/* 01 — PAYMENT (split 50/50, image right) */}
      <Module
        n="01"
        title="Payment System"
        desc="Flexible payment workflows for permanent installs and paid activations — handle in-booth transactions without breaking the experience."
        items={["QR payment", "Credit card", "Digital money"]}
        image={sxStandard02}
        align="right"
      />

      {/* 02 — CREATIVE PRINT (bento) */}
      <section className="relative border-b border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <div className="grid gap-6 md:grid-cols-2 md:gap-px md:bg-border">
            <div className="bg-background md:p-8">
              <RevealOnScroll>
                <span className="font-mono text-[11px] tracking-[0.2em] text-primary">MODULE / 02</span>
                <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                  Creative PhotoPrint
                </h3>
                <p className="mt-4 max-w-md text-muted-foreground md:text-lg">
                  Specialty print outputs that go beyond standard 4×6 strips. Heat transfer,
                  inkjet, slide film — pick the format that matches the brand story.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Heat transfer", "Inkjet", "FilmSlide", "Custom strips"].map((it) => (
                    <span
                      key={it}
                      className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
            <div className="grid gap-6 md:grid-cols-2 md:gap-px">
              <div className="aspect-[4/5] overflow-hidden bg-surface md:col-span-2">
                <img
                  src={popupStudio03}
                  alt="Creative print output"
                  loading="lazy"
                  className="h-full w-full object-cover img-hover-lift"
                />
              </div>
              <div className="aspect-square overflow-hidden bg-surface">
                <img src={boxShot02} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden bg-surface">
                <img src={boxShot05} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — GIF (sticky text + animated GIF) */}
      <section className="border-b border-border" style={{ backgroundColor: "var(--color-teal)" }}>
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <RevealOnScroll className="md:sticky md:top-24 md:self-start">
              <span className="font-mono text-[11px] tracking-[0.2em] text-primary">MODULE / 03</span>
              <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                GIF & Live Photo
              </h3>
              <p className="mt-4 max-w-md text-muted-foreground md:text-lg">
                Short-form animated outputs optimised for social. Guests share to stories
                in seconds — your brand travels with every loop.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-px border-t border-border bg-border">
                {["GIF outputs", "Live photos", "Instant sharing", "Social-ready"].map((it) => (
                  <div key={it} className="bg-[color:var(--color-teal)] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em]">
                    {it}
                  </div>
                ))}
              </div>
            </RevealOnScroll>
            <div className="grid gap-6">
              <div className="aspect-square overflow-hidden bg-background">
                <img src={photomoov01} alt="Animated GIF output" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden bg-background md:translate-x-12">
                <img src={photomoov02} alt="Live photo output" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — CLOUD GALLERY (full-width parallax) */}
      <section className="border-b border-border bg-background">
        <ParallaxImage
          src={cloudGallery}
          alt="Branded cloud gallery on phone"
          speed={0.18}
          className="h-[60vh] min-h-[420px] w-full"
          overlay
        />
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <RevealOnScroll>
              <span className="font-mono text-[11px] tracking-[0.2em] text-primary">MODULE / 04</span>
              <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Cloud Gallery
              </h3>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <p className="text-lg text-muted-foreground md:text-xl">
                A branded online gallery for instant guest delivery and event archive.
                One QR scan and every photo, GIF, and print is in their pocket.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-px border-t border-border bg-border md:grid-cols-4">
                {["Online gallery", "QR access", "Event archive", "Instant delivery"].map((it) => (
                  <div key={it} className="bg-background px-4 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {it}
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 05 — ANALYTICS (60/40 split) */}
      <Module
        n="05"
        title="Data Analytics / Report"
        desc="Operational and engagement reporting after every activation. Know exactly how the experience landed — and what to do next."
        items={["Guest insights", "Usage tracking", "Engagement reports", "Operational analytics"]}
        image={analyticsDashboard}
        align="left"
      />

      {/* 06 — MERCHANDISE (3-up grid) */}
      <section className="border-b border-border" style={{ backgroundColor: "var(--color-yellow)" }}>
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <RevealOnScroll>
              <span className="font-mono text-[11px] tracking-[0.2em] text-[color:var(--color-primary-foreground)]/70">
                MODULE / 06
              </span>
              <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight text-[color:var(--color-primary-foreground)] md:text-4xl lg:text-5xl">
                Photo Merchandise
              </h3>
              <p className="mt-4 max-w-md text-[color:var(--color-primary-foreground)]/80 md:text-lg">
                Turn photos into collectibles on the spot — keepsakes that travel home with
                your guests and live on long after the event.
              </p>
            </RevealOnScroll>
            <div className="grid grid-cols-3 gap-px bg-[color:var(--color-primary-foreground)]/15">
              {[
                { src: merchKeychain, label: "Keychains" },
                { src: merchCharm, label: "Photo charms" },
                { src: merchMagnet, label: "Magnets" },
              ].map((m, i) => (
                <RevealOnScroll key={m.label} delay={i * 100}>
                  <div className="group aspect-square overflow-hidden bg-[color:var(--color-yellow)]">
                    <img
                      src={m.src}
                      alt={m.label}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-[color:var(--color-yellow)] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-primary-foreground)]">
                    {m.label}
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-28 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Pick the modules. We'll build the activation.
          </h2>
          <a
            href="mailto:hello@captures.photo"
            className="mt-8 inline-block bg-primary px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground"
          >
            Talk to us →
          </a>
        </div>
      </section>
    </>
  );
}

function Module({
  n,
  title,
  desc,
  items,
  image,
  align,
}: {
  n: string;
  title: string;
  desc: string;
  items: string[];
  image: string;
  align: "left" | "right";
}) {
  const text = (
    <RevealOnScroll className="flex flex-col justify-center bg-background p-10 md:p-16">
      <span className="font-mono text-[11px] tracking-[0.2em] text-primary">MODULE / {n}</span>
      <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h3>
      <p className="mt-4 max-w-md text-muted-foreground md:text-lg">{desc}</p>
      <div className="mt-10 grid grid-cols-2 gap-px border-t border-border bg-border">
        {items.map((it) => (
          <div key={it} className="bg-background px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {it}
          </div>
        ))}
      </div>
    </RevealOnScroll>
  );
  const visual = (
    <div className="relative min-h-[420px] overflow-hidden bg-surface md:min-h-[560px]">
      <ParallaxImage
        src={image}
        alt={title}
        speed={0.15}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-[1400px] gap-px bg-border md:grid-cols-2">
        {align === "right" ? (
          <>
            {text}
            {visual}
          </>
        ) : (
          <>
            {visual}
            {text}
          </>
        )}
      </div>
    </section>
  );
}