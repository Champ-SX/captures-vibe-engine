import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { LocationMap } from "@/components/LocationMap";
import { locations } from "@/data/locations";
import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/space-activation/hero.jpg";
import cafeCoincidence from "@/assets/space-activation/cafe-coincidence.jpg.asset.json";
import coincidenceBooth from "@/assets/space-activation/coincidence-booth.jpg.asset.json";
import coincidenceEntrance from "@/assets/space-activation/coincidence-entrance.jpg.asset.json";
import rkCafeBooth from "@/assets/space-activation/rk-cafe-booth.jpg.asset.json";
import phannapastTemple from "@/assets/space-activation/phannapast-temple.jpg.asset.json";
import fotoautomatSkeleton from "@/assets/space-activation/fotoautomat-skeleton.jpg.asset.json";
import sxOfficeHallway from "@/assets/space-activation/sx-office-hallway.jpg.asset.json";
import photostripOrange from "@/assets/space-activation/photostrip-orange.jpg.asset.json";
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
        alt="Fotoautomat booth inside a vintage curiosity shop"
        eyebrow="03 · Space Activation"
        title={
          <>
            Built for the<br />
            <span className="text-primary">places people return to.</span>
          </>
        }
        intro="Photoautomat systems designed to increase foot traffic, engagement, and repeat visits for your venue."
        cta={{ to: "/contact", label: "Activate a space →" }}
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
                {locations.length} active locations across Bangkok & Nonthaburi.
              </h2>
            </div>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:block">
              Live network
            </span>
          </div>
          <div className="mt-10">
            <LocationMap />
          </div>

          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc, i) => (
              <a
                key={loc.name}
                href={loc.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col bg-background p-6 transition-colors hover:bg-surface"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.22em] text-primary">
                    {String(i + 1).padStart(2, "0")} / {String(locations.length).padStart(2, "0")}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold leading-tight">{loc.name}</h3>
                <div className="mt-1 text-sm text-muted-foreground">{loc.venue}</div>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{loc.address}</p>
                <span className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors group-hover:text-primary">
                  Open in Maps →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX BREAK */}
      <section className="border-b border-border">
        <ParallaxImage
          src={cafeCoincidence.url}
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
              { src: cafeCoincidence.url, alt: "co—incidence photoautomat at café entrance" },
              { src: coincidenceBooth.url, alt: "co—incidence freestanding photoautomat booth with purple curtain" },
              { src: rkCafeBooth.url, alt: "Rubber Killer green PHOTOAUTOMAT booth in RK Café" },
              { src: phannapastTemple.url, alt: "Phannapast photoautomat at a Bangkok Chinese temple" },
              { src: fotoautomatSkeleton.url, alt: "Fotoautomat booth with vintage skeleton and chalkboard pricing" },
              { src: sxOfficeHallway.url, alt: "sx.automat photoautomat in an office building hallway" },
              { src: coincidenceEntrance.url, alt: "co—incidence photoautomat entrance with street greenery" },
              { src: photostripOrange.url, alt: "Customer holding a fresh co—incidence photo strip" },
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