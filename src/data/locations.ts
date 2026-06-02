export type CaptureLocation = {
  name: string;
  venue: string;
  address: string;
  lat: number;
  lng: number;
  mapsUrl: string;
};

const q = (a: string) => `https://maps.google.com/?q=${encodeURIComponent(a)}`;

export const locations: CaptureLocation[] = [
  {
    name: "RIVERCITY Fl.3",
    venue: "River City Bangkok",
    address: "23 Trok Rongnamkhaeng, Charoenkrung Rd, Sampantawong, Bangkok 10100",
    lat: 13.7378,
    lng: 100.5126,
    mapsUrl: q("River City Bangkok"),
  },
  {
    name: "นิทรรศการรัตนโกสินทร์",
    venue: "Rattanakosin Exhibition Hall",
    address: "100 Ratchadamnoen Klang Ave, Phra Nakhon, Bangkok 10200",
    lat: 13.7565,
    lng: 100.5019,
    mapsUrl: q("Rattanakosin Exhibition Hall Bangkok"),
  },
  {
    name: "Woot Woot",
    venue: "Warehouse 30 Bangkok",
    address: "52–60 Charoen Krung 30, Bang Rak, Bangkok 10500",
    lat: 13.729,
    lng: 100.5158,
    mapsUrl: q("Warehouse 30 Bangkok"),
  },
  {
    name: "BACC Fl.5",
    venue: "Bangkok Art & Culture Centre",
    address: "939 Rama I Rd, Wang Mai, Pathum Wan, Bangkok 10330",
    lat: 13.7466,
    lng: 100.5302,
    mapsUrl: q("Bangkok Art and Culture Centre"),
  },
  {
    name: "CTW",
    venue: "CentralWorld Bangkok",
    address: "999/9 Rama I Rd, Pathum Wan, Bangkok 10330",
    lat: 13.7466,
    lng: 100.5396,
    mapsUrl: q("CentralWorld Bangkok"),
  },
  {
    name: "Neighbor Thonglor",
    venue: "Neighbor Bar Thonglor",
    address: "Thonglor (Sukhumvit 55), Bangkok",
    lat: 13.737,
    lng: 100.58,
    mapsUrl: q("Neighbor Bar Thonglor Bangkok"),
  },
  {
    name: "QSNCC Fl. LM / LG",
    venue: "Queen Sirikit National Convention Center",
    address: "60 New Ratchadapisek Rd, Khlong Toei, Bangkok 10110",
    lat: 13.7234,
    lng: 100.5601,
    mapsUrl: q("Queen Sirikit National Convention Center"),
  },
  {
    name: "Museum Siam",
    venue: "Museum Siam",
    address: "4 Sanam Chai Rd, Phra Nakhon, Bangkok 10200",
    lat: 13.7437,
    lng: 100.4944,
    mapsUrl: q("Museum Siam Bangkok"),
  },
  {
    name: "Dog's Dream",
    venue: "Dog's Dream",
    address: "Ratchaphruek Rd, Bang Khanun, Bang Kruai, Nonthaburi 11130",
    lat: 13.805,
    lng: 100.448,
    mapsUrl: q("Dog's Dream Ratchaphruek Bang Kruai Nonthaburi"),
  },
  {
    name: "Such A Small World",
    venue: "Such A Small World",
    address: "Bangkok",
    lat: 13.7308,
    lng: 100.5418,
    mapsUrl: "https://maps.app.goo.gl/ScTRZqveRttimn2j8",
  },
  {
    name: "Low Key",
    venue: "Low Key",
    address: "Bangkok",
    lat: 13.7245,
    lng: 100.5685,
    mapsUrl: "https://maps.app.goo.gl/uD12DCwxy9TCz8eb9",
  },
  {
    name: "KTB HQ",
    venue: "Krungthai Bank HQ",
    address: "35 Sukhumvit Rd, Khlong Toei Nuea, Watthana, Bangkok 10110",
    lat: 13.744,
    lng: 100.58,
    mapsUrl: "https://maps.app.goo.gl/QhLqV3r5MVPF7eFD8",
  },
];