import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { CapturesLogo } from "@/components/CapturesLogo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const nav = [
  { to: "/product-services", label: "Product & Services" },
  { to: "/space-activation", label: "Space Activation" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/technology", label: "Technology" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        <Link to="/" aria-label="CAPTURES — home">
          <CapturesLogo variant="horizontal" tone="lime" />
        </Link>

        {/* Desktop nav */}
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

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-80 bg-background border-border">
            <div className="flex flex-col h-full pt-8">
              <div className="flex flex-col gap-6">
                {nav.map((item) => (
                  <SheetClose asChild key={item.to}>
                    <Link
                      to={item.to}
                      className="font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                      activeProps={{ className: "text-foreground" }}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <a
                    href="http://captures.photo/booth"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    Captures Booth ↗
                  </a>
                </SheetClose>
              </div>
              <div className="mt-auto pb-8">
                <SheetClose asChild>
                  <a
                    href="mailto:hello@captures.photo"
                    className="inline-block bg-primary px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
                    onClick={() => setOpen(false)}
                  >
                    Inquire
                  </a>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
