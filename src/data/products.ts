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

import aiBooth01 from "@/assets/products/ai-booth/ai-booth-01.png";
import aiBooth02 from "@/assets/products/ai-booth/ai-booth-02.jpg";
import aiBooth03 from "@/assets/products/ai-booth/ai-booth-03.jpg";
import aiBooth04 from "@/assets/products/ai-booth/ai-booth-04.jpg";
import autoSnap01 from "@/assets/products/auto-snap/auto-snap-01.jpg";
import autoSnap02 from "@/assets/products/auto-snap/auto-snap-02.jpg";
import autoSnap03 from "@/assets/products/auto-snap/auto-snap-03.jpg";
import autoSnap04 from "@/assets/products/auto-snap/auto-snap-04.jpg";
import autoSnap05 from "@/assets/products/auto-snap/auto-snap-05.jpg";
import autoSnap06 from "@/assets/products/auto-snap/auto-snap-06.jpg";
import autoSnap07 from "@/assets/products/auto-snap/auto-snap-07.jpg";
import autoSnap08 from "@/assets/products/auto-snap/auto-snap-08.jpg";
import autoSnap09 from "@/assets/products/auto-snap/auto-snap-09.jpg";
import autoSnap10 from "@/assets/products/auto-snap/auto-snap-10.jpg";
import boxShot01 from "@/assets/products/box-shot/box-shot-01.jpg";
import boxShot02 from "@/assets/products/box-shot/box-shot-02.jpg";
import boxShot03 from "@/assets/products/box-shot/box-shot-03.jpg";
import boxShot04 from "@/assets/products/box-shot/box-shot-04.jpg";
import boxShot05 from "@/assets/products/box-shot/box-shot-05.jpg";
import boxShot06 from "@/assets/products/box-shot/box-shot-06.jpg";
import boxShot07 from "@/assets/products/box-shot/box-shot-07.jpg";
import lca01 from "@/assets/products/lca/lca-01.jpg";
import photomoov01 from "@/assets/products/photomoov/photomoov-01.gif";
import photomoov02 from "@/assets/products/photomoov/photomoov-02.gif";
import photomoov03 from "@/assets/products/photomoov/photomoov-03.gif";
import photomoov04 from "@/assets/products/photomoov/photomoov-04.gif";
import popupStudio01 from "@/assets/products/popup-studio/popup-studio-01.jpg";
import popupStudio02 from "@/assets/products/popup-studio/popup-studio-02.jpg";
import popupStudio03 from "@/assets/products/popup-studio/popup-studio-03.jpg";
import popupStudio04 from "@/assets/products/popup-studio/popup-studio-04.jpg";
import popupStudio05 from "@/assets/products/popup-studio/popup-studio-05.jpg";
import popupStudio06 from "@/assets/products/popup-studio/popup-studio-06.png";
import popupTopView01 from "@/assets/products/popup-top-view/popup-top-view-01.jpg";
import popupTopView02 from "@/assets/products/popup-top-view/popup-top-view-02.jpg";
import popupTopView03 from "@/assets/products/popup-top-view/popup-top-view-03.jpg";
import popupTopView04 from "@/assets/products/popup-top-view/popup-top-view-04.jpg";
import popupTopView05 from "@/assets/products/popup-top-view/popup-top-view-05.jpg";
import popupTopView06 from "@/assets/products/popup-top-view/popup-top-view-06.jpg";
import popupTopView07 from "@/assets/products/popup-top-view/popup-top-view-07.jpg";
import sxPortable01 from "@/assets/products/sx-portable/sx-portable-01.png";
import sxPortable02 from "@/assets/products/sx-portable/sx-portable-02.png";
import sxStandard01 from "@/assets/products/sx-standard/sx-standard-01.jpg";
import sxStandard02 from "@/assets/products/sx-standard/sx-standard-02.jpg";
import sxStandard03 from "@/assets/products/sx-standard/sx-standard-03.jpg";
import sxStandard04 from "@/assets/products/sx-standard/sx-standard-04.jpg";
import sxStandard05 from "@/assets/products/sx-standard/sx-standard-05.jpg";
import sxStandard06 from "@/assets/products/sx-standard/sx-standard-06.jpg";


export const products: Product[] = [
  {
    id: "product-01",
    name: "LCA (Light Camera Action)",
    tagline: "Legacy iPad photobooth system with integrated lighting.",
    description: "Legacy iPad photobooth system with integrated lighting designed for simple event engagement and branded experiences.",
    output: "4x6 print · Digital",
    bestFor: "Simple activations, compact setups, mall events",
    image: lca01,
    features: ["Touch interface", "Animated prompts", "Instant 4x6 print", "Custom overlays", "Live gallery sync"],
    setup: "1.2m x 1.2m · 220V · 30 min install",
    branding: "Full-screen UI skin, printed frames, vinyl wrap",
    useCases: ["Simple activations", "Compact setups", "Fast deployment", "Mall events", "Sponsor booths"],
    samples: [lca01],
  },
  {
    id: "product-02",
    name: "PHOTOMOOV",
    tagline: "Roving photobooth system for live interaction.",
    description: "Roving photobooth system designed for live interaction and mobile event coverage.",
    output: "GIF · 4x6 print",
    bestFor: "Festivals, roaming engagement, dynamic events",
    image: photomoov01,
    features: ["Backdrop kit", "Ring light", "GIF capture", "Print + digital", "Branded template"],
    setup: "2m x 2m · 110/220V · 20 min install",
    branding: "Custom backdrop, print template, digital overlay",
    useCases: ["Festivals", "Roaming engagement", "Crowd interaction", "Experiential marketing", "Dynamic events"],
    samples: [photomoov02, photomoov03, photomoov04],
  },
  {
    id: "product-03",
    name: "AUTO SNAP",
    tagline: "Self-operated photobooth for guest-controlled capture.",
    description: "Self-operated photobooth system allowing guests to control their own capture experience.",
    output: "Vertical MP4 · GIF",
    bestFor: "Self-service, exhibitions, unattended setups",
    image: autoSnap01,
    features: ["Slow-motion capture", "Music sync", "Branded intro/outro", "QR delivery", "Live preview screen"],
    setup: "2.5m x 2.5m · 220V · 45 min install",
    branding: "Intro/outro animation, custom music, watermark",
    useCases: ["Self-service interaction", "Exhibitions", "Casual activations", "Unattended setups"],
    samples: [autoSnap02, autoSnap03, autoSnap04, autoSnap05, autoSnap06, autoSnap07, autoSnap08, autoSnap09, autoSnap10],
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
    image: popupTopView01,
    features: ["Bullet-time effect", "Synchronised capture", "Cinematic output", "Live screen"],
    setup: "4m x 4m · 220V · 90 min install",
    branding: "Custom intro/outro, watermark, music",
    useCases: ["Flat-lay compositions", "Beauty/fashion products", "Creative styling", "Social-first photography"],
    samples: [popupTopView02, popupTopView03, popupTopView04, popupTopView05, popupTopView06, popupTopView07],
  },
  {
    id: "product-07",
    name: "POPUP STUDIO",
    tagline: "Portable studio with pro lighting and instant prints.",
    description: "Portable studio-style photo experience with professional lighting, instant prints, and branded backdrops.",
    output: "Digital · 2x6 strip",
    bestFor: "Fashion events, premium activations, portraits",
    image: popupStudio01,
    features: ["Portable rig", "Trained operator", "Instant delivery", "QR sharing"],
    setup: "Portable · 10 min ready",
    branding: "Custom strip frame, sharing screen, digital watermark",
    useCases: ["Fashion events", "Premium activations", "Portrait experiences", "Corporate events"],
    samples: [popupStudio02, popupStudio03, popupStudio04, popupStudio05, popupStudio06],
  },
  {
    id: "product-08",
    name: "AI BOOTH",
    tagline: "AI-powered photo experience with real-time outputs.",
    description: "AI-powered photo experience generating interactive and customized visual outputs in real time.",
    output: "Slide film keepsake",
    bestFor: "Futuristic activations, personalized content, digital engagement",
    image: aiBooth01,
    features: ["Real slide film", "Limited-edition feel", "Collectible packaging", "Optional digital scan"],
    setup: "1.5m x 1.5m · 220V · 30 min install",
    branding: "Custom slide mount, packaging, scan template",
    useCases: ["Futuristic activations", "Personalized content", "Experimental experiences", "Digital engagement"],
    samples: [aiBooth02, aiBooth03, aiBooth04],
  },
  {
    id: "product-09",
    name: "BOX SHOT",
    tagline: "Compact vertical-view photoautomat.",
    description: "Compact vertical-view photoautomat designed to create framed \"inside-the-box\" compositions with visible booth edges.",
    output: "GIF · MP4",
    bestFor: "Artistic compositions, social content, compact venues",
    image: boxShot01,
    features: ["3-frame GIF capture", "Branded loop", "Instant QR delivery", "Live screen"],
    setup: "1.5m x 1.5m · 110/220V · 20 min install",
    branding: "Loop overlay, frame, sharing screen",
    useCases: ["Artistic compositions", "Social content", "Compact venue installations", "Editorial-style captures"],
    samples: [boxShot02, boxShot03, boxShot04, boxShot05, boxShot06, boxShot07],
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
    image: sxPortable01,
    features: ["Real-time sync", "Moderation queue", "Animated grid", "Brand layer"],
    setup: "Display + signal cable · 30 min install",
    branding: "Wall layout, motion overlays, branded transitions",
    useCases: ["Pop-up events", "Traveling activations", "Mobile operations", "Compact venues"],
    samples: [sxPortable02],
  },
  {
    id: "product-12",
    name: "SX STANDARD",
    tagline: "Full-size classic photoautomat.",
    description: "Full-size classic photoautomat system inspired by traditional photobooth culture and modern event experiences.",
    output: "Strip print · Digital",
    bestFor: "Long-term installations, classic booths, lifestyle spaces",
    image: sxStandard01,
    features: ["Always-on operation", "QR + card payment", "Auto-restock alerts", "Revenue share"],
    setup: "1m x 1m · 220V · permanent install",
    branding: "Booth wrap, print strip, screen branding",
    useCases: ["Long-term installations", "Classic booth experiences", "Lifestyle spaces", "Flagship activations"],
    samples: [sxStandard02, sxStandard03, sxStandard04, sxStandard05, sxStandard06],
  },
];
