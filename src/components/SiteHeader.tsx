import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/product-services", label: "Product & Services" },
  { to: "/space-activation", label: "Space Activation" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/technology", label: "Technology" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-[17px] font-semibold tracking-tight">
          <span className="inline-block h-2 w-2 bg-primary" />
          <span>CAP<span className="text-primary">*</span>TURES</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="http://captures.photo/booth"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Captures Booth ↗
          </a>
        </nav>
        <a
          href="mailto:hello@captures.photo"
          className="hidden bg-primary px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90 md:inline-block"
        >
          Inquire
        </a>
      </div>
    </header>
  );
}