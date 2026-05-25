export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  year: string;
  category: string;
  hero: string;
  challenge: string;
  guestJourney: string[];
  technology: string[];
  outputs: string[];
  results: { label: string; value: string }[];
  gallery: string[];
};

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=75`;

export const caseStudies: CaseStudy[] = [
  {
    slug: "case-study-01",
    client: "Lifestyle Mall — Bangkok",
    title: "A six-week mall activation that doubled foot traffic in the atrium.",
    summary: "Mirror Booth + Merchandise Bar installed in a flagship mall atrium for six consecutive weekends.",
    year: "2024",
    category: "Retail activation",
    hero: img("photo-1519222970733-f546218fa6d7"),
    challenge: "The client wanted a non-disruptive way to drive weekend foot traffic to a slow-performing atrium without a hard sell.",
    guestJourney: [
      "Guests spotted the booth from the main escalator.",
      "Touch screen prompts walked them through capture in under 30 seconds.",
      "Branded prints + a keychain were delivered on the spot.",
      "QR delivered a digital copy to the cloud gallery.",
    ],
    technology: ["Mirror Booth", "Photo Merchandise Bar", "Cloud Gallery", "Analytics"],
    outputs: ["4x6 branded prints", "Custom keychains", "Cloud gallery delivery"],
    results: [
      { label: "Guest captures", value: "12,400" },
      { label: "Atrium foot traffic", value: "+108%" },
      { label: "Avg. dwell time", value: "4m 12s" },
    ],
    gallery: [img("photo-1519222970733-f546218fa6d7"), img("photo-1492684223066-81342ee5ff30"), img("photo-1496024840928-4c417adf211d"), img("photo-1604881991720-f91add269bed")],
  },
  {
    slug: "case-study-02",
    client: "Independent Music Festival",
    title: "360 video capture for a sold-out 8,000-guest weekend.",
    summary: "360 Video Booth deployed across two stages with live display walls and instant QR delivery.",
    year: "2024",
    category: "Music & culture",
    hero: img("photo-1493225457124-a3eb161ffa5f"),
    challenge: "Create a shareable festival moment that didn't compete with stage attention but became a destination on its own.",
    guestJourney: [
      "Queue management kept wait times under 6 minutes.",
      "Slow-motion 360 capture with the festival's audio bed.",
      "QR scan delivered the clip in under 90 seconds.",
      "Live display wall projected highlights between sets.",
    ],
    technology: ["360 Video Booth", "Live Display Wall", "Cloud Gallery", "Analytics"],
    outputs: ["Vertical 360 MP4", "Festival highlight reel", "Cloud gallery"],
    results: [
      { label: "Captures", value: "3,820" },
      { label: "Social shares (24h)", value: "11.2K" },
      { label: "Median delivery time", value: "62s" },
    ],
    gallery: [img("photo-1493225457124-a3eb161ffa5f"), img("photo-1485827404703-89b55fcc595e"), img("photo-1514525253161-7a46d19cd819"), img("photo-1492684223066-81342ee5ff30")],
  },
  {
    slug: "case-study-03",
    client: "Fashion Brand Launch",
    title: "AI portrait studio as the centerpiece of a flagship launch.",
    summary: "AI Portrait Studio with custom-trained style pack created bespoke editorial portraits for every guest.",
    year: "2025",
    category: "Fashion launch",
    hero: img("photo-1535378917042-10a22c95931a"),
    challenge: "Make a single-night launch feel personal at scale — every guest leaves with something that belongs only to them.",
    guestJourney: [
      "Stylist-greeted check-in and pose direction.",
      "Single portrait captured in a controlled lighting bay.",
      "Three AI-styled portraits printed and delivered in a branded envelope.",
      "Digital copies delivered via private gallery.",
    ],
    technology: ["AI Portrait Studio", "Creative Print", "Cloud Gallery"],
    outputs: ["Editorial AI portraits", "Branded envelope keepsake", "Private gallery"],
    results: [
      { label: "Guests captured", value: "412" },
      { label: "Capture-to-print", value: "48s avg" },
      { label: "Press mentions", value: "27" },
    ],
    gallery: [img("photo-1535378917042-10a22c95931a"), img("photo-1492684223066-81342ee5ff30"), img("photo-1495707902641-75cac588d2e9"), img("photo-1604881991720-f91add269bed")],
  },
  {
    slug: "case-study-04",
    client: "Café Chain — Permanent Install",
    title: "Permanent photoautomat installs across 14 café locations.",
    summary: "Photoautomat Permanent deployed under a revenue-share agreement across the chain's lifestyle locations.",
    year: "2023 — ongoing",
    category: "Permanent install",
    hero: img("photo-1604881991720-f91add269bed"),
    challenge: "Add a recurring foot-traffic and revenue driver to the chain's lifestyle locations without operational overhead.",
    guestJourney: [
      "Guests notice the booth on their way to seating.",
      "QR + card payment, 30-second cycle.",
      "Branded strip prints + a digital copy in the chain's app.",
      "Auto-restock alerts handle paper + ribbon supply.",
    ],
    technology: ["Photoautomat Permanent", "Payment System", "Cloud Gallery", "Analytics"],
    outputs: ["Branded photo strips", "App-delivered digital copies"],
    results: [
      { label: "Locations live", value: "14" },
      { label: "Monthly captures", value: "18,600+" },
      { label: "Repeat usage", value: "31%" },
    ],
    gallery: [img("photo-1604881991720-f91add269bed"), img("photo-1496024840928-4c417adf211d"), img("photo-1519222970733-f546218fa6d7"), img("photo-1492684223066-81342ee5ff30")],
  },
];