import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";

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

const modules = [
  {
    n: "01",
    title: "Payment System",
    desc: "Flexible payment workflows for permanent installs and paid activations.",
    items: ["QR payment", "Credit card", "Digital wallets", "On-site payment flow"],
    tone: "teal",
  },
  {
    n: "02",
    title: "Creative Print",
    desc: "Specialty print outputs that go beyond standard 4x6 strips.",
    items: ["Heat transfer", "Inkjet", "Film slide", "Custom formats"],
    tone: "dark",
  },
  {
    n: "03",
    title: "GIF & Live Photo",
    desc: "Short-form animated outputs optimised for social.",
    items: ["GIF outputs", "Live photos", "Instant sharing", "Social-ready"],
    tone: "dark",
  },
  {
    n: "04",
    title: "Cloud Gallery",
    desc: "Branded online gallery for instant guest delivery and event archive.",
    items: ["Online gallery", "QR access", "Event archive", "Instant delivery"],
    tone: "teal",
  },
  {
    n: "05",
    title: "Data Analytics",
    desc: "Operational and engagement reporting after every activation.",
    items: ["Guest insights", "Usage tracking", "Engagement reports", "Operational analytics"],
    tone: "dark",
  },
  {
    n: "06",
    title: "Photo Merchandise",
    desc: "Turn photos into collectibles on the spot — keepsakes that travel home.",
    items: ["Keychains", "Photo charms", "Magnets", "Branded packaging"],
    tone: "yellow",
  },
];

function Technology() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <SectionLabel index="01">Technology</SectionLabel>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Modules built for<br />
            <span className="text-primary">live experiences.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
            CAPTURES is built as a stack of operational modules. Use the ones you need — combine them for the activation.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16">
          <div className="grid gap-px bg-border md:grid-cols-2">
            {modules.map((m) => {
              const bg =
                m.tone === "teal"
                  ? "bg-[color:var(--color-teal)]"
                  : m.tone === "yellow"
                  ? "bg-[color:var(--color-yellow)] text-[color:var(--color-primary-foreground)]"
                  : "bg-background";
              return (
                <div key={m.n} className={`${bg} p-10 md:p-12`}>
                  <div className="flex items-baseline justify-between">
                    <span className={`font-mono text-[11px] tracking-[0.2em] ${m.tone === "yellow" ? "text-[color:var(--color-primary-foreground)]/70" : "text-primary"}`}>
                      MODULE / {m.n}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl">{m.title}</h3>
                  <p className={`mt-3 max-w-md text-sm md:text-base ${m.tone === "yellow" ? "text-[color:var(--color-primary-foreground)]/80" : "text-muted-foreground"}`}>
                    {m.desc}
                  </p>

                  <div className="mt-10 grid grid-cols-2 gap-px border-t border-border bg-border">
                    {m.items.map((it) => (
                      <div key={it} className={`${bg} px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em]`}>
                        {it}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
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