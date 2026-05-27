import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { LocationMap } from "@/components/LocationMap";
import heroImg from "@/assets/space-activation/hero.jpg";
import cafeCoincidence from "@/assets/space-activation/cafe-coincidence.jpg";
import rkfCafe from "@/assets/space-activation/rkf-cafe.jpg";
import templeImg from "@/assets/space-activation/temple.jpg";
import { PageHero } from "@/components/PageHero";
import { ParallaxImage } from "@/components/ParallaxImage";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const Route = createFileRoute("/space-activation")({
  head: () => ({
    meta: [
      { title: "Space Activation — CAPTURES" },
      { name: "description", content: "Photoautomat systems designed to increase foot traffic, engagement, and repeat visits for your venue." },
      { property: "og:title", content: "Space Activation — CAPTURES" },
      { property: "og:description", content: "Long-term installations and pop-ups for retail, cafés, and lifestyle spaces. Revenue-share model available." },
      { property: "og:url", content: "/space-activation" },
    ],
    links: [{ rel: "canonical", href: "/space-activation" }],
  }),
  component: SpaceActivation,
});

const formats = [
  { t: "Long-term installations", d: "Permanent booths for venues with consistent traffic. Auto-restock, remote monitoring, monthly reporting." },
  { t: "Retail activations", d: "Branded pop-ups built around seasonal campaigns. Modular setup, fast install, full operations." },
  { t: "Café experiences", d: "Compact photoautomat units for cafés and lifestyle spaces. Revenue-share friendly." },
  { t: "Shared GP model", d: "We install, operate, and split revenue. Zero capex for the venue." },
  { t: "Pop-up spaces", d: "Short-run installations for cultural moments, brand weeks, and one-off campaigns." },
  { t: "Lifestyle venues", d: "Designed to live in galleries, hotels, and creative spaces — not look like a kiosk." },
];

function SpaceActivation() {
  return (
    <>
      <PageHero
        image={heroImg}
        alt="Lifestyle space activation"
        eyebrow="03 · Space Activation"
        title={
          <>
            Built for the<br />
            <span className="text-primary">places people return to.</span>
          </>
        }
        intro="Photoautomat systems designed to increase foot traffic, engagement, and repeat visits for your venue."
        cta={{ href: "mailto:hello@captures.photo?subject=Space%20Activation%20inquiry", label: "Activate a space →" }}
      />

      {/* FORMATS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <SectionLabel index="02">Formats</SectionLabel>
          <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
            Six ways CAPTURES lives in a venue.
          </h2>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {formats.map((f, i) => (
              <div key={f.t} className="bg-background p-8">
                <div className="font-mono text-[10px] tracking-[0.2em] text-primary">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-4 font-display text-xl font-semibold">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <div className="flex items-end justify-between">
            <div>
              <SectionLabel index="03">Network</SectionLabel>
              <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
                Active locations + expansion.
              </h2>
            </div>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:block">
              Live network
            </span>
          </div>
          <div className="mt-10">
            <LocationMap />
          </div>
        </div>
      </section>

      {/* PARALLAX BREAK */}
      <section className="border-b border-border">
        <ParallaxImage
          src={cafeCoincidence}
          alt="Photoautomat in a café"
          speed={0.2}
          className="h-[55vh] min-h-[380px] w-full"
          overlay
        />
      </section>

      {/* GALLERY */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <SectionLabel index="04">In the wild</SectionLabel>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { src: cafeCoincidence, alt: "co—incidence photoautomat at café entrance" },
              { src: rkfCafe, alt: "Rubber Killer photoautomat in RK Café" },
              { src: templeImg, alt: "Phannapast photoautomat at Chinese temple" },
            ].map((img, i) => (
              <RevealOnScroll key={img.alt} delay={i * 80} className="group aspect-square overflow-hidden border border-border bg-surface">
                <img src={img.src} alt={img.alt} className="img-hover-lift h-full w-full object-cover" />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}