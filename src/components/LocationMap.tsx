import { useEffect, useRef } from "react";
import { locations } from "@/data/locations";

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
        center: [13.75, 100.54],
        zoom: 11,
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
          html: `<div class="cap-marker"></div>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7],
        });
        L.marker([loc.lat, loc.lng], { icon })
          .addTo(map!)
          .bindPopup(
            `<div style="font-family:var(--font-sans);color:#fff;background:#231F20;padding:8px 10px;min-width:140px;">
              <div style="font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#DEFF4C;margin-bottom:4px;">Active</div>
              <div style="font-weight:600;font-size:13px;">${loc.name}</div>
              <div style="font-size:11px;opacity:.7;margin-top:2px;">${loc.venue}</div>
              <div style="font-size:11px;opacity:.6;margin-top:4px;">${loc.address}</div>
              <a href="${loc.mapsUrl}" target="_blank" rel="noreferrer" style="display:inline-block;margin-top:6px;font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#DEFF4C;">Open in Maps ↗</a>
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
          <span className="cap-marker" /> {locations.length} active locations
        </div>
      </div>
    </div>
  );
}