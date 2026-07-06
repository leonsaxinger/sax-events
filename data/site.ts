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
      "Bass, Enthemmung, Free Specials — die Nacht, die anders tickt, mit eigener Crowd.",
    tags: ["Nightlife", "Community", "Showacts"],
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

// ---- SOVU (Day-to-Night Open-Air am Oedter See, Traun) ---------------
// Entspanntes Elektro/House-Event, 16–24 Uhr, ruhiger Vibe, Publikum 20–50.
// Die Seite dient auch als seriöse Konzept-Vorlage (Kapazität, Sicherheit,
// Anrainer-Rücksicht) — deshalb der Sicherheits-/Organisationsteil.
export const sovu = {
  name: "SOVU",
  tagline: "Day-to-Night Open Air",
  location: "Oedter See · Traun",
  dateLabel: "14. August 2026",
  dateNote: "in Planung",
  timeLabel: "16:00 – 24:00 Uhr",
  intro:
    "SOVU ist unser Day-to-Night Open Air am Oedter See in Traun: entspannt am Nachmittag mit Sonne, guten Drinks und feinen House-Vibes — bis aus der goldenen Stunde ein stimmungsvoller, ruhiger Abend wird. Kein lauter Rummel, sondern ein gepflegtes Open Air für alle, die guten Sound und gute Gesellschaft schätzen.",
  // Schnelle Fakten zum Überblick
  facts: [
    { label: "Termin", value: "14. Aug 2026" },
    { label: "Zeit", value: "16 – 24 Uhr" },
    { label: "Ort", value: "Oedter See · Traun" },
    { label: "Musik", value: "House · Electronic" },
    { label: "Publikum", value: "20 – 50 Jahre" },
    { label: "Kapazität", value: "max. 300" },
  ],
  // Der Tagesverlauf — entspannt, ruhig, kein Vollgas.
  phases: [
    {
      no: "01",
      time: "ab 16 Uhr",
      label: "Day Vibe",
      title: "Ankommen am See.",
      text: "Sonne am Wasser, kühle Drinks und ruhige House-Beats. Ein entspannter Nachmittag, bei dem alle ankommen.",
    },
    {
      no: "02",
      time: "Früher Abend",
      label: "Aperitivo",
      title: "Drinks & gute Gesellschaft.",
      text: "Aperitivo an der Bar, feine Elektronik und gute Leute — genussvoll und gesellig, nie hektisch.",
      img: "/images/sovu/party-2.jpg",
    },
    {
      no: "03",
      time: "Goldene Stunde",
      label: "Sunset",
      title: "Die goldene Stunde.",
      text: "Wenn die Sonne über dem Oedter See sinkt, wird die Musik wärmer und der Moment magisch — der Höhepunkt des Abends.",
      img: "/images/sovu/party-1.jpg",
    },
    {
      no: "04",
      time: "bis 24 Uhr",
      label: "Ausklang",
      title: "Ruhiger Ausklang.",
      text: "Warme Lichter, entspannter Sound — und zum späteren Abend fahren wir die Lautstärke bewusst zurück. Um Mitternacht ist Schluss.",
    },
  ],
  // Sicherheits- & Organisationskonzept (schön aufbereitet für die Seite).
  safety: [
    { title: "Begrenzte Kapazität", text: "Max. 300 Gäste, gezählter Einlass — kein Überfüllen." },
    { title: "Zwei Ein- & Ausgänge", text: "Getrennte Zu- und Abgänge, jederzeit freie Fluchtwege." },
    { title: "Umzäuntes Gelände", text: "Klar abgegrenzter, kontrollierter Partybereich." },
    { title: "Sanitäranlagen", text: "Öffentliche Toiletten direkt am Gelände." },
    { title: "Fester Stromanschluss", text: "Starkstrom-Anschluss statt lauter Generatoren." },
    { title: "Security & Ersthelfer", text: "Geschultes Ordnerpersonal und Erste Hilfe vor Ort." },
  ],
  // Rücksicht auf Anrainer & Natur — der Kern des Lärmschutz-Konzepts.
  neighbours: [
    "Ende um 24:00 Uhr — pünktlich Schluss.",
    "Lautstärke wird zum Abend hin schrittweise reduziert.",
    "Entspanntes Genre (House / Electronic) in moderater Lautstärke.",
    "Beschallung bewusst von der Wohnbebauung weg ausgerichtet.",
    "Weitläufige Grünfläche am See — mit Abstand & Parkplätzen.",
  ],
  process: [
    { no: "01", title: "Anmeldung & Auflagen", text: "Behördlich sauber angemeldet — alle Auflagen werden erfüllt." },
    { no: "02", title: "Aufbau & Sicherheit", text: "Umzäunung, zwei Ein-/Ausgänge, Sanitär, Strom, Security & Erste Hilfe stehen bereit." },
    { no: "03", title: "Einlass & Bar", text: "Eintritt mit Ausweiskontrolle, verantwortungsvoller Ausschank, entspanntes Publikum." },
    { no: "04", title: "Event-Tag · 16–24 Uhr", text: "Von der Nachmittagssonne bis zum ruhigen Ausklang um Mitternacht — durchgängig betreut." },
  ],
};

// ---- Team (Struktur: Management / Social Media / Acts & Performers) --
// TODO: echte Namen ergänzen ("Name folgt" ersetzen) + Fotos nach
// public/images/team/ legen (Dateinamen unten) — bis dahin zeigt SmartImg
// automatisch "Foto folgt".
export const team = {
  eyebrow: "Die Crew",
  intro:
    "Events wie unsere entstehen nicht allein. Hinter SAX-Events steht eine Crew aus Organisation, Content und Show — von jung für jung.",
  departments: [
    {
      no: "01",
      name: "Management",
      accent: "accent" as const,
      blurb: "Konzept, Booking, Organisation — hier laufen alle Fäden zusammen.",
      members: [
        { name: "Leon Saxinger", role: "Founder & Event Management", img: "/images/team/leon.jpg" },
        { name: "Name folgt", role: "Organisation & Booking", img: "/images/team/management-2.jpg" },
      ],
    },
    {
      no: "02",
      name: "Social Media",
      accent: "grape" as const,
      blurb: "1,5 Mio Views im Monat kommen nicht von allein — unser Content-Team liefert.",
      members: [
        { name: "Name folgt", role: "Content Creation", img: "/images/team/social-1.jpg" },
        { name: "Name folgt", role: "Video & Schnitt", img: "/images/team/social-2.jpg" },
        { name: "Name folgt", role: "Fotografie", img: "/images/team/social-3.jpg" },
      ],
    },
    {
      no: "03",
      name: "Acts & Performers",
      accent: "coral" as const,
      blurb: "Showacts, Tänzerinnen und Hosts — die Energie auf der Bühne und in der Crowd.",
      members: [
        { name: "Name folgt", role: "Showacts", img: "/images/team/act-1.jpg" },
        { name: "Name folgt", role: "Dance", img: "/images/team/act-2.jpg" },
        { name: "Name folgt", role: "Dance", img: "/images/team/act-3.jpg" },
        { name: "Name folgt", role: "Host & Moderation", img: "/images/team/act-4.jpg" },
      ],
    },
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
// feature: true => tile spans 2x2 (hero tiles in the bento grid).
export const gallery = [
  { src: "/images/p-freaky-2.jpg", alt: "FREAKY Moment", feature: true },
  { src: "/images/p-uni-1.jpg", alt: "Crowd auf der Tanzfläche" },
  { src: "/images/p-freaky-5.jpg", alt: "FREAKY Moment" },
  { src: "/images/p-uni-3.jpg", alt: "Nacht" },
  { src: "/images/p-freaky-7.jpg", alt: "FREAKY Moment" },
  { src: "/images/p-uni-5.jpg", alt: "Party", feature: true },
  { src: "/images/p-freaky-8.jpg", alt: "FREAKY Moment" },
  { src: "/images/p-uni-6.jpg", alt: "Nacht" },
  { src: "/images/p-freaky-3.jpg", alt: "FREAKY Moment" },
  { src: "/images/p-uni-2.jpg", alt: "Crowd" },
];
