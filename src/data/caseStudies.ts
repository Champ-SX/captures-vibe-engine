export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  article: string;
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
    slug: "estee-lauder-pure-color-desire",
    client: "Estée Lauder",
    title: "Cinematic VIDEOBOOTH for the Pure Color Desire launch.",
    summary: "A fashion-video moment for the Pure Color Desire lipstick collection at The St. Regis Bangkok — captured, styled, and shared in real time.",
    article: "Collaborating with “ESTEE LAUDER” for a new “Pure Color Desire” lipstick collection product launching, happening at The saint regis hotel, Bangkok.\n\nWe created a “cinematic scene” feature of our VIDEOBOOTH that shooting a small video clip with a scene style like movie or music video. A fashion video this time expose a modelish in every girl.\n\nVIDEOBOOTH is the lastest marketing product that powerful and able to speak brand concept and also individually generate by brands’ customers.\n\nIt supports today’s social network and eases to share on Facebook, Instagram, tiktok and etc.\n\nThis event invited beauty bloggers and influencers to create contents and share to their channels. We analyzed the #hashtag for this event and it produced 2,753 posts for this opening event.",
    year: "2024",
    category: "Brand launch",
    hero: img("photo-1522335789203-aabd1fc54bc9"),
    challenge: "Launch the new Pure Color Desire lipstick collection at The St. Regis Bangkok with a content moment beauty bloggers and influencers would actually want to post — and let the brand concept speak through every guest-generated clip.",
    guestJourney: [
      "Bloggers and influencers checked in at the VIDEOBOOTH stage.",
      "Each guest stepped into a cinematic scene styled like a fashion film.",
      "A short clip was captured — turning every guest into the model.",
      "Clips were delivered instantly for sharing on Facebook, Instagram and TikTok.",
    ],
    technology: ["VIDEOBOOTH", "Cinematic Scene", "Instant Sharing", "Hashtag Analytics"],
    outputs: ["Cinematic fashion clips", "Instant social-ready videos", "Branded hashtag campaign"],
    results: [
      { label: "#Hashtag posts", value: "2,753" },
      { label: "Channels activated", value: "FB · IG · TikTok" },
      { label: "Format", value: "Cinematic VIDEOBOOTH" },
    ],
    gallery: [img("photo-1522335789203-aabd1fc54bc9"), img("photo-1492684223066-81342ee5ff30"), img("photo-1535378917042-10a22c95931a"), img("photo-1493225457124-a3eb161ffa5f")],
  },
  {
    slug: "cartier-precious-garage",
    client: "Cartier",
    title: "Precious Garage at Siam Paragon.",
    summary: "A glittering golden-container photo setting in the heart of Bangkok — built for Cartier fans to step inside and take a piece of the moment home.",
    article: "We had another proud opportunity to work with “Cartier Precious Garage” with brand Cartier. The event organized in the center of Bangkok city at Siam Paragon. During the gorgeous event allows Thai Cartier fans to experience a fabulous photo setting.\n\nCreating a scene for the customer to stand in the center of the glittering golden container results in impressive physical printing photos and digital GIF file. While S/X massively generated 4,526 downloaded files and 4,500 prints.",
    year: "2024",
    category: "Retail experience",
    hero: img("photo-1518998053901-5348d3961a04"),
    challenge: "Give Thai Cartier fans a fabulous, on-brand photo moment in the center of Bangkok — premium enough to match the house, simple enough to deliver instantly at retail scale.",
    guestJourney: [
      "Guests entered the glittering golden container at Siam Paragon.",
      "S/X captured the moment as both a print-ready frame and a digital GIF.",
      "An impressive physical print was handed over on the spot.",
      "The digital GIF was delivered for instant social sharing.",
    ],
    technology: ["S/X System", "Print Station", "GIF Capture", "Cloud Gallery"],
    outputs: ["Physical printed photos", "Digital GIF files", "Branded keepsake frame"],
    results: [
      { label: "Downloaded files", value: "4,526" },
      { label: "Prints delivered", value: "4,500" },
      { label: "Venue", value: "Siam Paragon, Bangkok" },
    ],
    gallery: [img("photo-1518998053901-5348d3961a04"), img("photo-1604881991720-f91add269bed"), img("photo-1496024840928-4c417adf211d"), img("photo-1492684223066-81342ee5ff30")],
  },
  {
    slug: "getty-images-popup-studio",
    client: "Getty Images",
    title: "POPUP STUDIO — studio-quality photos, anywhere.",
    summary: "A new portable studio service built with Getty Images — pro cameraman, pro lighting, instant share and quick print, delivered on location.",
    article: "Collaboration work with Getty Image brought us to start our new service called POPUP STUDIO. Setting shooting studio to our customer and experience quality photo from anywhere. With our professional cameraman which specialist in lighting and photography fundamental and high-quality devices deliver the studio-quality photos to your hands.\n\nBy its simple process, instant sharing and quick print make POPUP STUDIO the right service for marketing especially for nowadays social network and digital marketing.\n\nThe Getty Image event with S/X produced 1,450 images and share to the internet within a few hours.",
    year: "2024",
    category: "Studio service",
    hero: img("photo-1542038784456-1ea8e935640e"),
    challenge: "Bring studio-grade photography out of the studio — so brands and customers can get the quality they expect for social and digital marketing, anywhere the event happens.",
    guestJourney: [
      "A professional cameraman greeted each guest on-site.",
      "Specialist lighting and high-quality devices set the studio standard.",
      "Photos were processed and delivered in a simple, fast flow.",
      "Instant sharing and quick print sent images to social within hours.",
    ],
    technology: ["POPUP STUDIO", "Pro Lighting Kit", "Instant Sharing", "Quick Print"],
    outputs: ["Studio-quality photos", "Instant social delivery", "On-site prints"],
    results: [
      { label: "Images produced", value: "1,450" },
      { label: "Delivery window", value: "A few hours" },
      { label: "System", value: "S/X · POPUP STUDIO" },
    ],
    gallery: [img("photo-1542038784456-1ea8e935640e"), img("photo-1535378917042-10a22c95931a"), img("photo-1492684223066-81342ee5ff30"), img("photo-1496024840928-4c417adf211d")],
  },
];