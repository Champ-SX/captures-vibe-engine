import { Link } from "@tanstack/react-router";
import { CapturesLogo } from "@/components/CapturesLogo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <CapturesLogo variant="vertical" tone="lime" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Event experience tools built for modern activations. A SIXSHEET system.
            </p>
            <a
              href="mailto:hello@captures.photo"
              className="mt-6 inline-block bg-primary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground"
            >
              Start a project →
            </a>
          </div>
          <FooterCol title="Explore" links={[
            { to: "/product-services", label: "Product & Services" },
            { to: "/space-activation", label: "Space Activation" },
            { to: "/case-studies", label: "Case Studies" },
            { to: "/technology", label: "Technology" },
            { to: "/contact", label: "Contact" },
          ]} />
          <div>
            <div className="eyebrow mb-4">System</div>
            <ul className="space-y-3 text-sm">
              <li><a href="http://captures.photo/booth" target="_blank" rel="noreferrer" className="hover:text-primary">Captures Booth ↗</a></li>
              <li><a href="mailto:hello@captures.photo" className="hover:text-primary">hello@captures.photo</a></li>
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-4">Operations</div>
            <p className="text-sm text-muted-foreground">
              Bangkok &middot; Available worldwide
            </p>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-between border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>© {new Date().getFullYear()} SIXSHEET / CAPTURES</span>
          <span>v.1.0 · Event-ready</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <div className="eyebrow mb-4">{title}</div>
      <ul className="space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="hover:text-primary">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}