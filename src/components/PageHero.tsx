import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface MetaItem {
  k: string;
  v: string;
}

interface Props {
  image: string;
  alt?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  cta?: { to?: string; href?: string; label: string };
  meta?: MetaItem[];
  backLink?: { to: string; label: string };
  align?: "left" | "right";
  /** aspect ratio class, default tall cinematic */
  aspectClassName?: string;
}

export function PageHero({
  image,
  alt = "",
  eyebrow,
  title,
  intro,
  cta,
  meta,
  backLink,
  align = "left",
  aspectClassName = "h-[80vh] min-h-[560px] md:h-[88vh]",
}: Props) {
  return (
    <section className="relative border-b border-border">
      <div className={`relative w-full overflow-hidden bg-surface ${aspectClassName}`}>
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover animate-kenburns"
        />
        {/* gradient fades */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent" />

        {/* eyebrow top */}
        <div className="absolute left-6 top-6 md:left-10 md:top-10">
          {backLink ? (
            <Link
              to={backLink.to}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/80 hover:text-primary"
            >
              ← {backLink.label}
            </Link>
          ) : (
            <span className="bg-background/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-primary backdrop-blur">
              {eyebrow}
            </span>
          )}
        </div>

        {/* live dot */}
        <div className="absolute right-6 top-6 hidden items-center gap-2 md:right-10 md:top-10 md:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70">Captures · live</span>
        </div>

        {/* floating overlay card */}
        <div
          className={`absolute bottom-6 md:bottom-10 ${
            align === "right" ? "right-6 md:right-10" : "left-6 md:left-10"
          } max-w-[640px]`}
        >
          <div className="bg-background/92 p-6 backdrop-blur-md md:p-10">
            {backLink && (
              <div className="eyebrow mb-4 text-primary">{eyebrow}</div>
            )}
            <h1 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              {title}
            </h1>
            {intro && (
              <p className="mt-5 max-w-lg text-sm text-muted-foreground md:text-base">
                {intro}
              </p>
            )}
            {cta && (
              <div className="mt-7">
                {cta.to ? (
                  <Link
                    to={cta.to}
                    className="inline-block bg-primary px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground"
                  >
                    {cta.label}
                  </Link>
                ) : (
                  <a
                    href={cta.href}
                    className="inline-block bg-primary px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground"
                  >
                    {cta.label}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {meta && meta.length > 0 && (
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-px border-x border-b border-border bg-border md:grid-cols-4">
            {meta.map((m) => (
              <div key={m.k} className="bg-background p-5">
                <div className="eyebrow">{m.k}</div>
                <div className="mt-2 font-display text-base font-medium">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}