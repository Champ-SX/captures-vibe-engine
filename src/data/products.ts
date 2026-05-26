export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  output: string;
  bestFor: string;
  image: string;
  features: string[];
  setup: string;
  branding: string;
  useCases: string[];
  samples: string[];
};

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=70`;

import boxShotMain from "@/assets/box-shot/booth-main.jpg";
import boxShotSide from "@/assets/box-shot/booth-side.jpg";
import boxShotSignage from "@/assets/box-shot/booth-signage.jpg";
import boxShotInterior from "@/assets/box-shot/booth-interior.jpg";
import boxShotPrints from "@/assets/box-shot/prints.jpg";
import boxShotStrip from "@/assets/box-shot/strip.jpg";
import boxShotGrid from "@/assets/box-shot/grid.jpg";

export const products: Product[] = [
  {
    id: "product-01",
    name: "LCA (Light Camera Action)",
    tagline: "Legacy iPad photobooth system with integrated lighting.",
    description: "Legacy iPad photobooth system with integrated lighting designed for simple event engagement and branded experiences.",
    output: "4x6 print · Digital",
    bestFor: "Simple activations, compact setups, mall events",
    image: img("photo-1492684223066-81342ee5ff30"),
    features: ["Touch interface", "Animated prompts", "Instant 4x6 print", "Custom overlays", "Live gallery sync"],
    setup: "1.2m x 1.2m · 220V · 30 min install",
    branding: "Full-screen UI skin, printed frames, vinyl wrap",
    useCases: ["Simple activations", "Compact setups", "Fast deployment", "Mall events", "Sponsor booths"],
    samples: [img("photo-1530103862676-de8c9debad1d"), img("photo-1492684223066-81342ee5ff30"), img("photo-1496024840928-4c417adf211d")],
  },
  {
    id: "product-02",
    name: "PHOTOMOOV",
    tagline: "Roving photobooth system for live interaction.",
    description: "Roving photobooth system designed for live interaction and mobile event coverage.",
    output: "GIF · 4x6 print",
    bestFor: "Festivals, roaming engagement, dynamic events",
    image: img("photo-1514525253161-7a46d19cd819"),
    features: ["Backdrop kit", "Ring light", "GIF capture", "Print + digital", "Branded template"],
    setup: "2m x 2m · 110/220V · 20 min install",
    branding: "Custom backdrop, print template, digital overlay",
    useCases: ["Festivals", "Roaming engagement", "Crowd interaction", "Experiential marketing", "Dynamic events"],
    samples: [img("photo-1492684223066-81342ee5ff30"), img("photo-1514525253161-7a46d19cd819"), img("photo-1496024840928-4c417adf211d")],
  },
  {
    id: "product-03",
    name: "AUTO SNAP",
    tagline: "Self-operated photobooth for guest-controlled capture.",
    description: "Self-operated photobooth system allowing guests to control their own capture experience.",
    output: "Vertical MP4 · GIF",
    bestFor: "Self-service, exhibitions, unattended setups",
    image: img("photo-1493225457124-a3eb161ffa5f"),
    features: ["Slow-motion capture", "Music sync", "Branded intro/outro", "QR delivery", "Live preview screen"],
    setup: "2.5m x 2.5m · 220V · 45 min install",
    branding: "Intro/outro animation, custom music, watermark",
    useCases: ["Self-service interaction", "Exhibitions", "Casual activations", "Unattended setups"],
    samples: [img("photo-1493225457124-a3eb161ffa5f"), img("photo-1514525253161-7a46d19cd819"), img("photo-1492684223066-81342ee5ff30")],
  },
  {
    id: "product-04",
    name: "STORYBOOTH",
    tagline: "Social-first video booth for short-form storytelling.",
    description: "Social-first video booth designed for short-form storytelling and SNS content creation.",
    output: "4x6 / 2x6 print",
    bestFor: "TikTok, Instagram Reels, creator engagement",
    image: img("photo-1604881991720-f91add269bed"),
    features: ["QR upload", "Self-service", "Custom frames", "Operator-free"],
    setup: "0.8m x 0.8m · 110V · 15 min install",
    branding: "Print frame, kiosk wrap, on-screen branding",
    useCases: ["TikTok", "Instagram Reels", "Creator engagement", "Campaign storytelling", "Shareable content"],
    samples: [img("photo-1604881991720-f91add269bed"), img("photo-1496024840928-4c417adf211d"), img("photo-1492684223066-81342ee5ff30")],
  },
  {
    id: "product-05",
    name: "POPUP FILM SLIDE",
    tagline: "Nostalgic film-slide keepsakes.",
    description: "Nostalgic photo experience featuring collectible film-slide style outputs and creative print keepsakes.",
    output: "Digital · 4x6 print",
    bestFor: "Lifestyle activations, collectible merchandise, creative print",
    image: img("photo-1535378917042-10a22c95931a"),
    features: ["Real-time AI styles", "Custom style training", "Print + digital", "Gallery delivery"],
    setup: "2m x 2m · 220V · 60 min install",
    branding: "Custom AI style pack, print frame, UI skin",
    useCases: ["Lifestyle activations", "Collectible merchandise", "Memory-driven campaigns", "Creative print experiences"],
    samples: [img("photo-1535378917042-10a22c95931a"), img("photo-1492684223066-81342ee5ff30"), img("photo-1493225457124-a3eb161ffa5f")],
  },
  {
    id: "product-06",
    name: "POPUP TOP VIEW",
    tagline: "Overhead camera for creative top-view visuals.",
    description: "Overhead camera experience designed for creative compositions and top-view social visuals.",
    output: "Vertical MP4",
    bestFor: "Flat-lay, beauty/fashion, creative styling",
    image: img("photo-1485827404703-89b55fcc595e"),
    features: ["Bullet-time effect", "Synchronised capture", "Cinematic output", "Live screen"],
    setup: "4m x 4m · 220V · 90 min install",
    branding: "Custom intro/outro, watermark, music",
    useCases: ["Flat-lay compositions", "Beauty/fashion products", "Creative styling", "Social-first photography"],
    samples: [img("photo-1485827404703-89b55fcc595e"), img("photo-1493225457124-a3eb161ffa5f"), img("photo-1535378917042-10a22c95931a")],
  },
  {
    id: "product-07",
    name: "POPUP STUDIO",
    tagline: "Portable studio with pro lighting and instant prints.",
    description: "Portable studio-style photo experience with professional lighting, instant prints, and branded backdrops.",
    output: "Digital · 2x6 strip",
    bestFor: "Fashion events, premium activations, portraits",
    image: img("photo-1492684223066-81342ee5ff30"),
    features: ["Portable rig", "Trained operator", "Instant delivery", "QR sharing"],
    setup: "Portable · 10 min ready",
    branding: "Custom strip frame, sharing screen, digital watermark",
    useCases: ["Fashion events", "Premium activations", "Portrait experiences", "Corporate events"],
    samples: [img("photo-1492684223066-81342ee5ff30"), img("photo-1604881991720-f91add269bed"), img("photo-1514525253161-7a46d19cd819")],
  },
  {
    id: "product-08",
    name: "AI BOOTH",
    tagline: "AI-powered photo experience with real-time outputs.",
    description: "AI-powered photo experience generating interactive and customized visual outputs in real time.",
    output: "Slide film keepsake",
    bestFor: "Futuristic activations, personalized content, digital engagement",
    image: img("photo-1495707902641-75cac588d2e9"),
    features: ["Real slide film", "Limited-edition feel", "Collectible packaging", "Optional digital scan"],
    setup: "1.5m x 1.5m · 220V · 30 min install",
    branding: "Custom slide mount, packaging, scan template",
    useCases: ["Futuristic activations", "Personalized content", "Experimental experiences", "Digital engagement"],
    samples: [img("photo-1495707902641-75cac588d2e9"), img("photo-1604881991720-f91add269bed"), img("photo-1535378917042-10a22c95931a")],
  },
  {
    id: "product-09",
    name: "BOX SHOT",
    tagline: "Compact vertical-view photoautomat.",
    description: "Compact vertical-view photoautomat designed to create framed \"inside-the-box\" compositions with visible booth edges.",
    output: "GIF · MP4",
    bestFor: "Artistic compositions, social content, compact venues",
    image: boxShotMain,
    features: ["3-frame GIF capture", "Branded loop", "Instant QR delivery", "Live screen"],
    setup: "1.5m x 1.5m · 110/220V · 20 min install",
    branding: "Loop overlay, frame, sharing screen",
    useCases: ["Artistic compositions", "Social content", "Compact venue installations", "Editorial-style captures"],
    samples: [boxShotSignage, boxShotSide, boxShotInterior, boxShotPrints, boxShotStrip, boxShotGrid],
  },
  {
    id: "product-10",
    name: "SX TALLY",
    tagline: "Standing-style photoautomat for high-volume events.",
    description: "Standing-style photoautomat system designed for clean event deployment and high-volume guest interaction.",
    output: "Keychain · Charm · Magnet",
    bestFor: "Brand activations, mall events, weddings, high-traffic",
    image: img("photo-1542038784456-1ea8e935640e"),
    features: ["On-site fulfilment", "Multiple keepsake formats", "Branded packaging", "Live queue"],
    setup: "2m x 2m · 220V · 45 min install",
    branding: "Packaging, keepsake stickers, station wrap",
    useCases: ["Brand activations", "Mall events", "Weddings", "High-traffic events"],
    samples: [img("photo-1542038784456-1ea8e935640e"), img("photo-1604881991720-f91add269bed"), img("photo-1492684223066-81342ee5ff30")],
  },
  {
    id: "product-11",
    name: "SX PORTABLE",
    tagline: "Portable photoautomat for flexible deployment.",
    description: "Portable photoautomat system designed for flexible transport, compact setups, and fast deployment.",
    output: "Live screen · Digital",
    bestFor: "Pop-up events, traveling activations, mobile operations",
    image: img("photo-1492684223066-81342ee5ff30"),
    features: ["Real-time sync", "Moderation queue", "Animated grid", "Brand layer"],
    setup: "Display + signal cable · 30 min install",
    branding: "Wall layout, motion overlays, branded transitions",
    useCases: ["Pop-up events", "Traveling activations", "Mobile operations", "Compact venues"],
    samples: [img("photo-1492684223066-81342ee5ff30"), img("photo-1485827404703-89b55fcc595e"), img("photo-1493225457124-a3eb161ffa5f")],
  },
  {
    id: "product-12",
    name: "SX STANDARD",
    tagline: "Full-size classic photoautomat.",
    description: "Full-size classic photoautomat system inspired by traditional photobooth culture and modern event experiences.",
    output: "Strip print · Digital",
    bestFor: "Long-term installations, classic booths, lifestyle spaces",
    image: img("photo-1604881991720-f91add269bed"),
    features: ["Always-on operation", "QR + card payment", "Auto-restock alerts", "Revenue share"],
    setup: "1m x 1m · 220V · permanent install",
    branding: "Booth wrap, print strip, screen branding",
    useCases: ["Long-term installations", "Classic booth experiences", "Lifestyle spaces", "Flagship activations"],
    samples: [img("photo-1604881991720-f91add269bed"), img("photo-1495707902641-75cac588d2e9"), img("photo-1496024840928-4c417adf211d")],
  },
];
