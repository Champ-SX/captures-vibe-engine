import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { products } from "@/data/products";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/product-services/")({
  head: () => ({
    meta: [
      { title: "Product & Services — CAPTURES" },
      { name: "description", content: "Custom photobooth experiences and a library of 12 booth products built for guest engagement and branded activations." },
      { property: "og:title", content: "Product & Services — CAPTURES" },
      { property: "og:description", content: "Photobooth systems designed for guest engagement, branded experiences, and live events." },
      { property: "og:url", content: "/product-services" },
    ],
    links: [{ rel: "canonical", href: "/product-services" }],
  }),
  component: ProductServices,
});

function ProductServices() {
  return (
    <>
      <PageHero
        image={products[0]?.image}
        eyebrow="02 · Product & Services"
        title={
          <>
            Photobooth systems for every<br />
            <span className="text-primary">format of event.</span>
          </>
        }
        intro="A Custom Experience and a hardware catalogue engineered around how modern activations actually flow — from unattended retail to high-volume brand experiences."
        cta={{ href: "mailto:hello@captures.photo", label: "Talk to us →" }}
      />

      {/* CUSTOM EXPERIENCE */}
      <section className="border-b border-border">
        <div className="relative aspect-[16/8] w-full overflow-hidden border-b border-border bg-surface">
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2200&q=80"
            alt="Custom event experience"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute left-6 top-6 bg-background/85 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            01 · Custom Experience
          </div>
        </div>
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:grid-cols-[1fr_2fr]">
          <div>
            <SectionLabel>Service</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Designed around the activation.
            </h2>
          </div>
          <div>
            <p className="text-base text-muted-foreground md:text-lg">
              Photobooth systems designed for guest engagement, branded experiences, and live events. We design, build, and operate the full experience — from interaction to keepsake.
            </p>
            <div className="mt-12 grid gap-px bg-border sm:grid-cols-2">
              {[
                ["Interactive experiences", "Touch, motion, and prompt-led engagement."],
                ["Brand activations", "Fully branded UI, output, and packaging."],
                ["AI experiences", "Custom-trained AI style packs and portraits."],
                ["Multi-camera systems", "Bullet-time, 360, and synchronised capture."],
                ["Live displays", "Real-time gallery walls and stage feeds."],
                ["Creative outputs", "Print, GIF, slide film, and keepsakes."],
                ["Data and report", "Leverage insights for the next activation."],
                ["Queue and Check-In", "Manage guest flow and on-site check-in."],
              ].map(([t, d]) => (
                <div key={t} className="bg-background p-6">
                  <div className="font-display text-lg font-medium">{t}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* READY TO DEPLOY PHOTOBOOTH */}
      <section className="border-b border-border" style={{ backgroundColor: "var(--color-teal)" }}>
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel index="02">Lineup</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Event-Ready Photobooth Systems
              </h2>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
                A growing collection of photobooth formats designed for different event experiences, guest interactions, and operational needs. From roving cameras and social-first video booths to classic photoautomat systems and creative print experiences — each format is built for real-world deployment, branded customization, and live engagement.
              </p>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{products.length} products</span>
          </div>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 8).map((p, i) => (
              <Link
                key={p.id}
                to="/product-services/$productId"
                params={{ productId: p.id }}
                className="group block bg-[color:var(--color-teal)] p-5 transition-colors hover:bg-background"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]" />
                  <span className="absolute left-3 top-3 bg-background/85 px-2 py-1 font-mono text-[10px] tracking-[0.2em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary">→</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  <div><span className="text-foreground/70">Output</span><br />{p.output}</div>
                  <div><span className="text-foreground/70">Best for</span><br />{p.bestFor}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20">
            <SectionLabel index="03">Photoautomat Systems</SectionLabel>
            <div className="mt-8 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
              {products.slice(8).map((p, i) => (
                <Link
                  key={p.id}
                  to="/product-services/$productId"
                  params={{ productId: p.id }}
                  className="group block bg-[color:var(--color-teal)] p-5 transition-colors hover:bg-background"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    <img src={p.image} alt={p.name} className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]" />
                    <span className="absolute left-3 top-3 bg-background/85 px-2 py-1 font-mono text-[10px] tracking-[0.2em] text-primary">
                      {String(i + 9).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary">→</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    <div><span className="text-foreground/70">Output</span><br />{p.output}</div>
                    <div><span className="text-foreground/70">Best for</span><br />{p.bestFor}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}