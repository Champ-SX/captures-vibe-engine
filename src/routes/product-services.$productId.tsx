import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { products } from "@/data/products";
import { PageHero } from "@/components/PageHero";
import { ParallaxImage } from "@/components/ParallaxImage";
import { FeatureShowcase, type FeatureItem } from "@/components/FeatureShowcase";

export const Route = createFileRoute("/product-services/$productId")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — CAPTURES` : "Product — CAPTURES";
    const desc = p?.description ?? "CAPTURES booth product";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(p ? [{ property: "og:image", content: p.image }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="text-3xl font-semibold">Product not found</h1>
      <Link to="/product-services" className="mt-6 inline-block text-primary">← Back to products</Link>
    </div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();

  return (
    <>
      <PageHero
        image={product.image}
        alt={product.name}
        backLink={{ to: "/product-services", label: "All products" }}
        eyebrow="Product"
        title={product.name}
        intro={product.tagline}
        cta={{ to: "/contact", label: "Request a quote →" }}
        meta={[
          { k: "Output", v: product.output },
          { k: "Setup", v: product.setup },
          { k: "Best for", v: product.bestFor },
          { k: "Features", v: `${product.features.length} modules` },
        ]}
      />

      {/* OVERVIEW */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:grid-cols-[1fr_2fr]">
          <div>
            <SectionLabel index="01">Overview</SectionLabel>
          </div>
          <div>
            <p className="text-lg text-muted-foreground md:text-xl">{product.description}</p>
            <div className="mt-12 grid gap-px bg-border sm:grid-cols-3">
              <Spec label="Output" value={product.output} />
              <Spec label="Setup" value={product.setup} />
              <Spec label="Best for" value={product.bestFor} />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <FeatureShowcase
        sectionIndex="02"
        sectionLabel="Features"
        headline={`Inside the ${product.name}.`}
        features={buildFeatureItems(product.features, product.samples, product.image)}
      />

      {/* USE CASES + BRANDING */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-border px-6 py-24 md:grid-cols-2 md:px-0">
          <div className="bg-background p-10 md:p-16">
            <SectionLabel index="03">Use cases</SectionLabel>
            <ul className="mt-8 space-y-3">
              {product.useCases.map((u: string) => (
                <li key={u} className="flex items-center gap-3 border-b border-border py-3">
                  <span className="h-1.5 w-1.5 bg-primary" />
                  <span className="text-base">{u}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background p-10 md:p-16">
            <SectionLabel index="04">Branding</SectionLabel>
            <p className="mt-8 text-base text-muted-foreground md:text-lg">{product.branding}</p>
          </div>
        </div>
      </section>

      {/* SAMPLES */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <SectionLabel index="05">Sample outputs</SectionLabel>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {product.samples.map((s: string, i: number) => (
              <div key={i} className="group aspect-[4/5] overflow-hidden border border-border bg-surface">
                <img src={s} alt="" className="img-hover-lift h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX BREAK */}
      {product.samples[0] && (
        <section className="border-b border-border">
          <ParallaxImage
            src={product.samples[0]}
            alt=""
            speed={0.2}
            className="h-[55vh] min-h-[360px] w-full"
            overlay
          />
        </section>
      )}

      {/* LINEUP GRID */}
      <section className="border-b border-border" style={{ backgroundColor: "var(--color-teal)" }}>
        <div className="mx-auto max-w-[1400px] px-6 py-24">
          <SectionLabel index="06">Lineup</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Explore more products
          </h2>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((p) => p.id !== product.id)
              .map((p, i) => (
                <Link
                  key={p.id}
                  to="/product-services/$productId"
                  params={{ productId: p.id }}
                  className="group block bg-[color:var(--color-teal)] p-5 transition-colors hover:bg-background"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
                    />
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
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-[1400px] px-6 py-28 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Bring {product.name} to your next event.
          </h2>
          <a
            href={`mailto:hello@captures.photo?subject=${encodeURIComponent(product.name + " inquiry")}`}
            className="mt-8 inline-block bg-primary px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground"
          >
            Request a quote →
          </a>
        </div>
      </section>
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background p-6">
      <div className="eyebrow">{label}</div>
      <div className="mt-3 font-display text-base font-medium">{value}</div>
    </div>
  );
}

function buildFeatureItems(
  features: string[],
  samples: string[],
  fallback: string,
): FeatureItem[] {
  const pool = samples.length ? samples : [fallback];
  return features.map((title, i) => ({
    title,
    image: pool[i % pool.length],
  }));
}