import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { LocationMap } from "@/components/LocationMap";
import heroImg from "@/assets/space-activation/hero.jpg";
import cafeCoincidence from "@/assets/space-activation/cafe-coincidence.jpg";
import rkfCafe from "@/assets/space-activation/rkf-cafe.jpg";
import templeImg from "@/assets/space-activation/temple.jpg";

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
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:grid-cols-[1.2fr_1fr] md:py-32">
          <div>
            <SectionLabel index="01">Space Activation</SectionLabel>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
              Built for the<br />
              <span className="text-primary">places people return to.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
              Photoautomat systems designed to increase foot traffic, engagement, and repeat visits for your venue.
            </p>
            <a
              href="mailto:hello@captures.photo?subject=Space%20Activation%20inquiry"
              className="mt-10 inline-block bg-primary px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground"
            >
              Activate a space →
            </a>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden border border-border bg-surface">
            <img
              src={heroImg}
              alt="Lifestyle space activation"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

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

      {/* GALLERY */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <SectionLabel index="04">In the wild</SectionLabel>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { src: cafeCoincidence, alt: "co—incidence photoautomat at café entrance" },
              { src: rkfCafe, alt: "Rubber Killer photoautomat in RK Café" },
              { src: templeImg, alt: "Phannapast photoautomat at Chinese temple" },
            ].map((img) => (
              <div key={img.alt} className="aspect-square overflow-hidden border border-border bg-surface">
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}