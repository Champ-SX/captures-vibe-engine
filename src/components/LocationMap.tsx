import { useEffect, useRef } from "react";

type Location = { name: string; city: string; lat: number; lng: number; status: "active" | "upcoming" };

const locations: Location[] = [
  { name: "Atrium Flagship", city: "Bangkok", lat: 13.7466, lng: 100.5347, status: "active" },
  { name: "Riverside Café", city: "Bangkok", lat: 13.7237, lng: 100.5142, status: "active" },
  { name: "Coast Lifestyle", city: "Pattaya", lat: 12.9236, lng: 100.8825, status: "active" },
  { name: "Northern Hub", city: "Chiang Mai", lat: 18.7883, lng: 98.9853, status: "active" },
  { name: "Marina Walk", city: "Singapore", lat: 1.2839, lng: 103.8607, status: "active" },
  { name: "Harbour Pop-Up", city: "Hong Kong", lat: 22.2783, lng: 114.1747, status: "upcoming" },
  { name: "Shibuya Concept", city: "Tokyo", lat: 35.6595, lng: 139.7005, status: "upcoming" },
  { name: "Soho Studio", city: "London", lat: 51.5136, lng: -0.1365, status: "upcoming" },
];

export function LocationMap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    let map: import("leaflet").Map | undefined;
    let cancelled = false;

    (async () => {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");
      if (cancelled || !ref.current) return;

      map = L.map(ref.current, {
        center: [20, 90],
        zoom: 3,
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: true,
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png", {
        attribution: "© OpenStreetMap · © CARTO",
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png", {
        subdomains: "abcd",
        maxZoom: 19,
        opacity: 0.7,
      }).addTo(map);

      locations.forEach((loc) => {
        const icon = L.divIcon({
          className: "",
          html: `<div class="cap-marker" style="${loc.status === "upcoming" ? "background:transparent;border-color:var(--color-primary);" : ""}"></div>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7],
        });
        L.marker([loc.lat, loc.lng], { icon })
          .addTo(map!)
          .bindPopup(
            `<div style="font-family:var(--font-sans);color:#fff;background:#231F20;padding:8px 10px;min-width:140px;">
              <div style="font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#DEFF4C;margin-bottom:4px;">${loc.status}</div>
              <div style="font-weight:600;font-size:13px;">${loc.name}</div>
              <div style="font-size:11px;opacity:.7;">${loc.city}</div>
            </div>`,
            { className: "cap-popup" }
          );
      });
    })();

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <div className="relative h-[560px] w-full border border-border bg-background">
      <div ref={ref} className="h-full w-full" />
      <div className="pointer-events-none absolute left-6 top-6 z-[400] flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.18em]">
        <div className="flex items-center gap-2 bg-background/80 px-3 py-2 backdrop-blur">
          <span className="cap-marker" /> Active
        </div>
        <div className="flex items-center gap-2 bg-background/80 px-3 py-2 backdrop-blur">
          <span className="cap-marker" style={{ background: "transparent" }} /> Upcoming
        </div>
      </div>
    </div>
  );
}