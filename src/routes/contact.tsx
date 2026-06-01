import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, Instagram, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SectionLabel } from "@/components/SectionLabel";
import popupStudio02 from "@/assets/products/popup-studio/popup-studio-02.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CAPTURES" },
      {
        name: "description",
        content:
          "Talk to CAPTURES. Call, LINE, email, or Instagram — we're ready to design your next photobooth activation.",
      },
      { property: "og:title", content: "Contact — CAPTURES" },
      {
        property: "og:description",
        content: "Reach the CAPTURES studio in Bangkok — call, LINE, email, or Instagram.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

type Method = {
  n: string;
  eyebrow: string;
  title: string;
  value: string;
  href: string;
  cta: string;
  Icon: typeof Phone;
  external?: boolean;
};

const methods: Method[] = [
  {
    n: "01",
    eyebrow: "Telephone",
    title: "Call us",
    value: "080-268-6632",
    href: "tel:+66802686632",
    cta: "Dial now",
    Icon: Phone,
  },
  {
    n: "02",
    eyebrow: "LINE Official",
    title: "Chat on LINE",
    value: "@SIXSHEET",
    href: "https://line.me/R/ti/p/@SIXSHEET",
    cta: "Open in LINE",
    Icon: MessageCircle,
    external: true,
  },
  {
    n: "03",
    eyebrow: "Email",
    title: "Send email",
    value: "admin@sixsheet.me",
    href: "mailto:admin@sixsheet.me",
    cta: "Compose message",
    Icon: Mail,
  },
  {
    n: "04",
    eyebrow: "Instagram",
    title: "Follow on Instagram",
    value: "@sixsheet",
    href: "https://www.instagram.com/sixsheet/",
    cta: "Visit profile",
    Icon: Instagram,
    external: true,
  },
];

function Contact() {
  return (
    <>
      <PageHero
        image={popupStudio02}
        alt="CAPTURES studio"
        eyebrow="05 · Contact"
        title={
          <>
            Let's create<br />
            <span className="text-primary">something memorable.</span>
          </>
        }
        intro="Whether you're planning an event, launching a campaign, or looking for the right photobooth solution, we'd love to hear from you."
        cta={{ href: "mailto:admin@sixsheet.me", label: "Start a conversation →" }}
      />

      {/* CONTACT METHODS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <SectionLabel index="01">Reach the studio</SectionLabel>
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Four direct lines. Pick whichever feels right.
              </h2>
              <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
                Our team in Bangkok replies fast. Daytime calls, late-night LINE messages,
                long briefs by email — all of it lands with the same person.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
            {methods.map((m, idx) => {
              const Icon = m.Icon;
              return (
                <RevealOnScroll key={m.n} delay={idx * 80}>
                  <a
                    href={m.href}
                    target={m.external ? "_blank" : undefined}
                    rel={m.external ? "noreferrer" : undefined}
                    className="group relative block h-full bg-background p-8 transition-all duration-500 hover:bg-surface md:p-12"
                    style={{
                      // subtle primary glow on hover via inline shadow var
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center border border-border bg-surface text-primary transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                        METHOD / {m.n}
                      </span>
                    </div>
                    <div className="eyebrow mt-10">{m.eyebrow}</div>
                    <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                      {m.title}
                    </h3>
                    <div className="mt-4 font-mono text-sm tracking-wide text-foreground md:text-base">
                      {m.value}
                    </div>
                    <div className="mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors group-hover:text-primary">
                      <span>{m.cta}</span>
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        boxShadow: "inset 0 0 80px -30px var(--color-primary)",
                      }}
                    />
                  </a>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* STUDIO BLOCK */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-border md:grid-cols-2">
          <div className="bg-background p-10 md:p-16">
            <SectionLabel index="02">Studio</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Visit us in Bangkok.
            </h2>
            <div className="mt-10 space-y-6">
              <div>
                <div className="eyebrow">Address</div>
                <p className="mt-3 max-w-sm text-base text-foreground md:text-lg">
                  33 Soi Pradipat 17,<br />
                  Pradipat Road, Samsennai,<br />
                  Phayathai, Bangkok 10400
                </p>
              </div>
              <div>
                <div className="eyebrow">Operating</div>
                <p className="mt-3 text-base text-muted-foreground">
                  Bangkok studio · Available worldwide
                </p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=33+Soi+Pradipat+17+Phayathai+Bangkok"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Open in maps
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>

          <div className="relative bg-background p-10 md:p-16">
            <SectionLabel index="03">Brief us</SectionLabel>
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight md:text-3xl">
              What to include in your first message.
            </h3>
            <ul className="mt-8 space-y-4">
              {[
                "Event date and city",
                "Audience size and venue type",
                "Brand or campaign context",
                "Output you'd love — print, GIF, gallery, merch",
              ].map((row) => (
                <li
                  key={row}
                  className="flex items-center gap-4 border-b border-border py-3 text-base"
                >
                  <span className="h-1.5 w-1.5 shrink-0 bg-primary" />
                  <span>{row}</span>
                </li>
              ))}
            </ul>
            <a
              href="mailto:admin@sixsheet.me?subject=New%20project%20brief"
              className="mt-10 inline-block bg-primary px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Email the studio →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-28 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Got an event in mind? Let's talk.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            We'll come back with concepts, timelines, and the right CAPTURES system for your moment.
          </p>
          <a
            href="mailto:admin@sixsheet.me"
            className="mt-10 inline-block bg-primary px-8 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-primary-foreground"
          >
            admin@sixsheet.me
          </a>
        </div>
      </section>
    </>
  );
}