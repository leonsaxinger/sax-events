/* =====================================================================
   ZENTRALE INHALTS-DATEI — HIER ALLES ANPASSEN
   Suche nach "TODO" für Platzhalter, die noch echte Daten brauchen.
   ===================================================================== */

export const site = {
  name: "SAX-Events",
  tagline: "Fertige Events mit eigener Community.",
  contact: {
    email: "office@sax-events.at",
    phone: "+43 670 6020287",
    whatsapp: "436706020287",
    region: "Traun · Österreich & Europa",
    address: "Traunerstraße 43, 4050 Traun, Österreich",
    owner: "Leon Saxinger",
  },
  socials: {
    instagram: "https://www.instagram.com/events.sax",
    tiktok: "",
    youtube: "",
    facebook: "",
  },
  instagramHandle: "events.sax",
};

// ---- Navigation ------------------------------------------------------
// Anker mit "/#..." damit sie auch von Unterseiten (Team/Office) funktionieren.
export const navLinks = [
  { label: "Konzepte", href: "/#konzepte" },
  { label: "FREAKY", href: "/events/freaky" },
  { label: "SOVU", href: "/events/sovu" },
  { label: "Team", href: "/team" },
  { label: "Office", href: "/office" },
  { label: "Kontakt", href: "/#kontakt" },
];

// ---- Partner / Sponsoren (Marquee) ----------------------------------
// invert: true => dunkles Logo wird per CSS zu Weiß gedreht (für dunklen BG).
// mode: "white" => Logo wird zu reinem Weiß gefärbt; "natural" => unverändert.
// Silberpfeil: aktuell ohne Logo (gelieferte Datei hat hellen Hintergrund) ->
// zeigt Schriftzug. TODO: transparentes/weißes Silberpfeil-PNG unter
// public/partners/silberpfeil.png ablegen, dann logo wieder setzen.
export const partners = [
  { name: "City Beats", logo: "/partners/citybeats.svg", mode: "white" as const },
  { name: "Empire", logo: "/partners/empire.png", mode: "natural" as const },
  // Datei fehlt aktuell -> zeigt Schriftzug; sobald public/partners/silberpfeil.png
  // (transparent/weiß) abgelegt ist, erscheint automatisch das Logo.
  { name: "Silberpfeil", logo: "/partners/silberpfeil.png", mode: "white" as const },
  { name: "Drip Likör", logo: "/partners/drip.png", mode: "white" as const },
];

// ---- "Warum wir" — Nachtleben-Problem & Antwort ----------------------
export const nightlife = {
  eyebrow: "Warum es uns gibt",
  heading: "Europas Nachtleben",
  headingAccent: "wird leiser.",
  body: "Das Clubsterben ist fast nicht zu übersehen. Die neue Generation braucht neue, moderne und ansprechende Eventformate — keine Partys von der Stange.",
  image: "/images/p-uni-2.jpg",
  points: [
    { title: "Clubs verschwinden", text: "Quer durch Europa schließen Locations schneller, als neue entstehen." },
    { title: "Feiern wird beliebig", text: "Überall dieselbe Playlist, dieselbe Deko, dasselbe Gefühl von nichts." },
    { title: "Eine Generation sucht", text: "Junge Leute wollen Erlebnisse, die sie hören und spüren — und finden sie kaum." },
  ],
  solutionHeading: "Hier treten wir an.",
  solutionBody: "Wir greifen ein: einzigartige Events mit eigener Community und punktgenauem Marketing auf TikTok, Instagram & Co. Wir bespielen die neue Generation wieder mit dem, was sie hören und spüren will — von jung für jung.",
};

// ---- Social-Media-Kennzahlen (echte Zahlen) --------------------------
export const stats = [
  { to: 1.5, decimals: 1, suffix: " Mio", label: "Views / Monat" },
  { to: 20, decimals: 0, suffix: "K", label: "Interaktionen / Monat" },
  { to: 100, decimals: 0, suffix: "+", label: "Posts / Event" },
  { to: 10, decimals: 0, suffix: "", label: "Creatives vorab / Event" },
];

// ---- Unsere fertigen Konzepte (Kurz-Preview + Link zur Event-Seite) --
export const jarsIntro = {
  eyebrow: "Unsere Formate",
  heading: "Fertige Konzepte.",
  body: "Marken statt Partys von der Stange — jedes Format mit eigenem Look, eigener Crowd und eigenem Marketing. Hier der Vorgeschmack — Details auf der jeweiligen Event-Seite.",
};

export const jars = [
  {
    name: "FREAKY",
    logo: "/logo/freaky-logo.png",
    tagline: "Let's Go Freaky.",
    description:
      "Schaum, Bass, Enthemmung — unsere Schaumparty mit eigener Crowd.",
    tags: ["Schaumparty", "Community", "Showacts"],
    href: "/events/freaky",
    cta: "FREAKY ansehen",
    available: true,
    video: "/videos/freaky-1.mp4",
    poster: "/images/freaky-1-poster.jpg",
    coverGradient: "",
    accent: "#E0218A",
  },
  {
    name: "SOVU",
    logo: "",
    tagline: "Outdoor · Day to Night.",
    description:
      "Das Open-Air-Sommerformat — von Sonnenuntergang bis tief in die Nacht.",
    tags: ["Open Air", "Summer", "Day to Night"],
    href: "/events/sovu",
    cta: "SOVU ansehen",
    available: true,
    video: "",
    poster: "",
    coverGradient:
      "linear-gradient(135deg, #0a1a3a 0%, #1d4ed8 45%, #fb923c 80%, #fb7185 100%)",
    accent: "#38bdf8",
  },
];

// ---- Leistungen (Marketing-Fokus) ------------------------------------
export const services = [
  { title: "Marketing & Content", description: "Rund 10 Creatives pro Event — Video & Foto, vorab produziert und gezielt für Promo auf Instagram & TikTok ausgespielt." },
  { title: "Eventkonzepte", description: "Komplette Formate von der Idee bis zur Marke — inklusive Name, Look und Community-Aufbau." },
  { title: "Showacts & Programm", description: "Showacts, Tänzerinnen, Hostessen, Deko & Material — das komplette Programm aus einer Hand." },
  { title: "Partyanimation & Moderation", description: "Wir holen die Crowd ab und halten die Energie den ganzen Abend hoch." },
];

// ---- Showreel (Aftermovie) -------------------------------------------
export const showreel = {
  heading: "Seht es. Spürt es.",
  subheading: "Ein Ausschnitt aus dem, was wir Nacht für Nacht abliefern.",
  videoSrc: "/videos/aftermovie.mp4",
  poster: "/images/aftermovie-poster.jpg",
};

// ---- FREAKY (Event-Detailseite) -------------------------------------
export const freaky = {
  instagram: "https://www.instagram.com/letsgofreaky/",
  instagramHandle: "letsgofreaky",
  ticketUrl: "https://events.tickethead.io?organizer_id=saxevents",
  tagline: "Let's Go Freaky.",
  hook: "Free Shots, Hiphop & Reggaeton, Show-Momente & Dancers — die Nacht, die anders tickt.",
  // Evergreen-Perks (in der Hero-Sequenz). Bei Bedarf pro Saison anpassen.
  perks: [
    "FREE Ananas-Vodka Slushi Shots",
    "FREE Wassereis",
    "FREE Kondome",
    "FREE Tequila Guns",
    "Hiphop & Reggaeton",
    "Show-Momente & Dancers",
  ],
  intro:
    "FREAKY ist mehr als eine Party: ein Erlebnis aus Free Specials, Showacts und einer Community, die wiederkommt. Ein Format, das Interesse weckt und die neue Generation genau dort abholt, wo sie feiern will.",
  claim: "Die Nacht, die anders tickt.",
  heroVideo: "/videos/aftermovie.mp4",
  heroPoster: "/images/aftermovie-poster.jpg",
  aftermovie: "/videos/aftermovie.mp4",
  aftermoviePoster: "/images/aftermovie-poster.jpg",
  stats: [
    { to: 1000, decimals: 0, suffix: "+", label: "Besucher pro Edition" },
    { to: 3000, decimals: 0, suffix: "", label: "Community" },
    { to: 6, decimals: 0, suffix: "", label: "Partner-Clubs" },
  ],
  features: [
    { title: "Showacts & Dancers", text: "Tänzerinnen, Performances und Momente, die im Kopf bleiben." },
    { title: "Eigene Community", text: "Über 3.000 Leute, die FREAKY leben und immer wiederkommen." },
    { title: "Newcomer-Contests", text: "Die Bühne für neue Talente — mitten in der Crowd." },
    { title: "Influencer-Collabs", text: "Reichweite mit Creators wie Colja & Gabriel — weitere folgen." },
  ],
  // TODO: weitere Club-Logos in public/partners/ ergänzen
  clubs: [
    "City Beats",
    "Empire Sankt Martin",
    "Luma Munich",
    "Eventfabrik Graz",
    "Eventfabrik Niklasdorf",
    "Eventhouse Freilassing",
  ],
  gallery: [
    "/images/p-freaky-8.jpg",
    "/images/p-freaky-1.jpg",
    "/images/p-freaky-9.jpg",
    "/images/p-freaky-3.jpg",
    "/images/p-freaky-10.jpg",
    "/images/p-freaky-5.jpg",
    "/images/p-freaky-6.jpg",
    "/images/p-freaky-7.jpg",
  ],
};

// ---- SOVU im SURACE am See (Day-to-Night Lake Event) -----------------
export const sovu = {
  name: "SOVU",
  venue: "SURACE am See",
  tagline: "Day-to-Night Summer Lake Event",
  intro:
    "Ein Tag am Wasser, der nie aufhört: Sonne, See und entspannte Drinks am Nachmittag — bis aus der goldenen Stunde eine Nacht voller Musik wird. SOVU im SURACE am See.",
  phases: [
    {
      no: "01",
      label: "Day Vibe",
      title: "Ankommen am See.",
      text: "Sonne auf der Haut, Blick übers Wasser, ein kühler Drink auf der Terrasse. Der entspannte Start in den Tag.",
      img: "/images/sovu/day-lake.jpg",
    },
    {
      no: "02",
      label: "Food & Aperitivo",
      title: "Aperitivo im SURACE.",
      text: "Mediterrane Küche, frische Drinks, gute Gesellschaft — der genussvolle Übergang in den Abend.",
      img: "/images/sovu/food-1.jpg",
    },
    {
      no: "03",
      label: "Sunset Moment",
      title: "Goldene Stunde.",
      text: "Die Sonne sinkt über den See, die Musik wird wärmer, die Stimmung dichter. Der Moment, auf den alle warten.",
      img: "/images/sovu/sunset-drone.jpg",
    },
    {
      no: "04",
      label: "Night Party",
      title: "Die Nacht beginnt.",
      text: "DJ, Lights, Crowd. Aus dem Sundowner wird die Party — direkt am Wasser, bis tief in die Nacht.",
      img: "/images/sovu/night-venue.jpg",
    },
  ],
  process: [
    { no: "01", title: "Datum finden", text: "Gemeinsam wählen wir den perfekten Termin am See — passend zu Saison, Wetter und Location." },
    { no: "02", title: "Event anmelden", text: "Behörden, Genehmigungen, Location-Abstimmung — wir übernehmen die komplette Organisation." },
    { no: "03", title: "Promo vor Ort", text: "Promo-Shoot mit Statisten & Content-Crew direkt am See — Reels und Visuals, die vorab Hype auf Instagram & TikTok machen." },
    { no: "04", title: "Aufbau & Event-Tag", text: "Technik, Bar, Showacts und Crew: Wir bauen auf und liefern den Tag — von der Sonne am Nachmittag bis tief in die Nacht." },
  ],
};

// ---- Office / Creative Space (Vermietung) ----------------------------
export const office = {
  name: "SAX Creative Space",
  location: "Ansfelden · Linz-Land",
  address: "Traunuferstraße 130, 4052 Ansfelden",
  mapsQuery: "Traunuferstraße 130, Ansfelden, Österreich",
  intro:
    "Unser modernes Office & Creative Space in Ansfelden (nahe Linz) — buchbar für Meetings, Coworking, Shootings, Content, Tanz, Yoga und kreatives Arbeiten. Professionell ausgestattet, flexibel mietbar.",
  rooms: [
    { icon: "monitor", title: "Office & Arbeitsplätze", text: "Voll ausgestattete Arbeitsplätze zum konzentrierten Arbeiten.", img: "/images/office/office.jpg" },
    { icon: "users", title: "Besprechungsraum", text: "Platz für Meetings, Calls und Präsentationen.", img: "/images/office/meeting.jpg" },
    { icon: "palette", title: "Creative Room", text: "Separater Raum für Ideen, Proben und kreatives Arbeiten.", img: "/images/office/creative.jpg" },
    { icon: "mirror", title: "5-Meter-Spiegelwand", text: "Große Spiegelwand — ideal für Tanz, Yoga, Shootings & Content.", img: "/images/office/mirror.jpg" },
  ],
  useCases: [
    "Meetings",
    "Coworking",
    "Workshops",
    "Shootings",
    "Content Creation",
    "Tanz",
    "Yoga",
    "Proben / Creative Work",
  ],
  gallery: [
    "/images/office/01.jpg",
    "/images/office/02.jpg",
    "/images/office/03.jpg",
    "/images/office/04.jpg",
    "/images/office/05.jpg",
    "/images/office/06.jpg",
  ],
};

// ---- Galerie (echte Fotos, Mix aus FREAKY + universell) --------------
export const gallery = [
  { src: "/images/p-freaky-2.jpg", alt: "FREAKY Moment", aspect: "tall" },
  { src: "/images/p-uni-1.jpg", alt: "Crowd", aspect: "wide" },
  { src: "/images/p-freaky-5.jpg", alt: "FREAKY Moment", aspect: "square" },
  { src: "/images/p-uni-3.jpg", alt: "Nacht", aspect: "square" },
  { src: "/images/p-freaky-7.jpg", alt: "FREAKY Moment", aspect: "tall" },
  { src: "/images/p-uni-5.jpg", alt: "Tanzfläche", aspect: "wide" },
];
