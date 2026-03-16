/*
  Wohngebäudeversicherung Landingpage
  Design: Vertrauensarchitektur (Trust Architecture).
  SEO-optimiert für "Wohngebäudeversicherung vergleichen", "Wohngebäudeversicherung Makler", etc.
  Colors: #081B3D (navy), #2F6BFF (blue), #25C685 (green), #F7F5F0 (champagne), white.
  Fonts: Manrope (headlines), Inter (body).
*/

import PublicHeader from "@/components/PublicHeader";
import PublicFooter from "@/components/PublicFooter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Droplets,
  Flame,
  House,
  MapPin,
  Shield,
  ShieldCheck,
  Snowflake,
  Star,
  ThumbsUp,
  Wind,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ═══ CONSTANTS ═══ */
const WOHNGEBAUDE_CHECK_URL = "https://get.opticheck.io/wohngebaude-check";

/* ═══ IMAGE ASSETS ═══ */
const propertyGerman =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663380993655/fQEoWXU3HmfkrqUK7vBeHa/opticheck-de-property-german-2hCkbD8V6nUuaQAzEvkXvN.webp";

const heroFamily =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663380993655/fQEoWXU3HmfkrqUK7vBeHa/opticheck-de-hero-family-german-C5jpynGeAefnYDpEzpZ2DT.webp";

const brokerMeeting =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663380993655/fQEoWXU3HmfkrqUK7vBeHa/opticheck-de-social-proof-broker-FDey9tQDCuEu8Q35qjfzn4.webp";

/* ═══ TRUST BADGES ═══ */
const iso27001Badge = "https://d2xsxph8kpxj0f.cloudfront.net/310519663380993655/fQEoWXU3HmfkrqUK7vBeHa/iso27001-badge_be61318f.png";
const soc2Badge = "https://d2xsxph8kpxj0f.cloudfront.net/310519663380993655/fQEoWXU3HmfkrqUK7vBeHa/soc2-badge_4bb06d7f.png";
const gdprBadge = "https://d2xsxph8kpxj0f.cloudfront.net/310519663380993655/fQEoWXU3HmfkrqUK7vBeHa/gdpr-badge_b110e588.jpg";

/* ═══ DATA ═══ */
const coveredRisks = [
  {
    icon: Flame,
    title: "Feuer & Brand",
    description: "Schutz vor Schäden durch Brand, Blitzschlag, Explosion und Implosion an Ihrem Gebäude und festen Einbauten.",
  },
  {
    icon: Droplets,
    title: "Leitungswasser",
    description: "Absicherung gegen Rohrbrüche, auslaufende Waschmaschinen und Frostschäden an der Wasserinstallation.",
  },
  {
    icon: Wind,
    title: "Sturm & Hagel",
    description: "Übernahme der Kosten bei Dachschäden, zerbrochenen Fenstern und Fassadenschäden ab Windstärke 8.",
  },
  {
    icon: Snowflake,
    title: "Elementarschäden",
    description: "Zusatzschutz gegen Überschwemmung, Erdrutsch, Erdbeben, Schneedruck und Starkregen.",
  },
  {
    icon: Zap,
    title: "Überspannung",
    description: "Schutz für fest verbaute Elektrik und Haustechnik bei Überspannungsschäden durch Blitzeinschlag.",
  },
  {
    icon: House,
    title: "Gebäudebestandteile",
    description: "Versichert sind alle festen Bestandteile: Heizung, sanitäre Anlagen, Einbauküche, Fußböden und mehr.",
  },
];

const advantages = [
  "Kostenloser Vergleich in unter 2 Minuten",
  "Vermittlung an geprüfte, lizenzierte Makler",
  "Keine SCHUFA-Abfrage, keine Verpflichtung",
  "Persönliche Beratung statt automatisierter Listen",
  "Über 120 Versicherungspartner im Netzwerk",
  "Transparente Prozesse ohne versteckte Kosten",
];

const howItWorks = [
  {
    step: "01",
    title: "SmartCheck starten",
    description: "Beantworten Sie wenige Fragen zu Ihrem Gebäude: Baujahr, Wohnfläche, Bauart und gewünschter Schutzumfang. Dauert nur 2 Minuten.",
  },
  {
    step: "02",
    title: "Profil wird analysiert",
    description: "SmartCheck gleicht Ihr Gebäudeprofil mit über 120 Versicherungspartnern ab und identifiziert die passendsten Tarife für Ihre Situation.",
  },
  {
    step: "03",
    title: "Makler kontaktiert Sie",
    description: "Ein auf Wohngebäudeversicherung spezialisierter Makler prüft Ihre Anfrage und meldet sich persönlich mit konkreten Empfehlungen.",
  },
  {
    step: "04",
    title: "Optimaler Schutz",
    description: "Sie entscheiden in Ruhe. Ihr Makler begleitet Sie durch den gesamten Prozess, von der Tarifauswahl bis zum Vertragsabschluss.",
  },
];

const faqItems = [
  {
    question: "Was deckt eine Wohngebäudeversicherung ab?",
    answer: "Eine Wohngebäudeversicherung schützt Ihr Eigenheim gegen Schäden durch Feuer, Leitungswasser, Sturm und Hagel. Optional können Sie Elementarschäden wie Überschwemmung, Erdrutsch oder Starkregen mitversichern. Versichert sind das Gebäude selbst sowie alle fest verbauten Bestandteile wie Heizung, sanitäre Anlagen und Einbauküchen.",
  },
  {
    question: "Ist eine Wohngebäudeversicherung Pflicht?",
    answer: "Gesetzlich ist die Wohngebäudeversicherung keine Pflichtversicherung. Allerdings verlangen nahezu alle Banken den Nachweis einer Wohngebäudeversicherung als Voraussetzung für die Baufinanzierung. Auch ohne Kredit ist der Abschluss dringend empfohlen, da ein Brandschaden oder Leitungswasserschaden schnell existenzbedrohend werden kann.",
  },
  {
    question: "Was kostet eine Wohngebäudeversicherung?",
    answer: "Die Kosten hängen von mehreren Faktoren ab: Wohnfläche, Baujahr, Bauart (massiv oder Fertighaus), Standort und gewählter Deckungsumfang. Für ein durchschnittliches Einfamilienhaus mit 140 m² liegen die Jahresbeiträge typischerweise zwischen 200 und 600 Euro. Mit einem OptiCheck SmartCheck finden Sie in 2 Minuten heraus, welche Tarife für Ihr Gebäude in Frage kommen.",
  },
  {
    question: "Was ist der Unterschied zwischen Wohngebäude- und Hausratversicherung?",
    answer: "Die Wohngebäudeversicherung schützt das Gebäude selbst und alle fest verbauten Bestandteile. Die Hausratversicherung hingegen deckt den beweglichen Besitz innerhalb des Gebäudes ab, also Möbel, Elektronik, Kleidung und persönliche Gegenstände. Für umfassenden Schutz empfehlen Experten beide Versicherungen.",
  },
  {
    question: "Wann sollte ich meine Wohngebäudeversicherung wechseln?",
    answer: "Ein Wechsel lohnt sich, wenn Ihr aktueller Beitrag deutlich über dem Marktdurchschnitt liegt, wenn sich Ihr Gebäude verändert hat (Anbau, Sanierung) oder wenn Ihr bestehender Tarif wichtige Leistungen wie Elementarschutz nicht enthält. Der SmartCheck zeigt Ihnen in 2 Minuten, ob bessere Optionen verfügbar sind.",
  },
  {
    question: "Was bedeutet 'gleitender Neuwert'?",
    answer: "Der gleitende Neuwert stellt sicher, dass Ihr Gebäude im Schadenfall zum aktuellen Neubauwert (inklusive Preissteigerungen für Material und Handwerker) wiederhergestellt werden kann. Dies ist der empfohlene Versicherungswert, da er Unterversicherung verhindert und automatisch an die Baupreisentwicklung angepasst wird.",
  },
  {
    question: "Ist der OptiCheck SmartCheck wirklich kostenlos?",
    answer: "Ja, der SmartCheck ist für Verbraucher vollständig kostenlos und unverbindlich. Es erfolgt keine SCHUFA-Abfrage und keine automatische Vertragsbindung. Sie erhalten eine persönliche Einschätzung und werden bei Bedarf an einen spezialisierten Makler vermittelt, der Sie kostenfrei berät.",
  },
];

const testimonials = [
  {
    quote: "Nach dem SmartCheck hatte ich innerhalb einer Stunde einen Makler am Telefon, der mir drei Tarife klar erklärt hat. Am Ende spare ich 280 Euro im Jahr.",
    name: "Markus W.",
    context: "Einfamilienhaus, Stuttgart",
    stars: 5,
  },
  {
    quote: "Unser Altbau in Hamburg war schwer zu versichern. Der OptiCheck-Makler hat einen Tarif gefunden, den wir alleine nie entdeckt hätten.",
    name: "Petra & Klaus H.",
    context: "Altbau-Mehrfamilienhaus, Hamburg",
    stars: 5,
  },
  {
    quote: "Ich wollte Elementarschutz dazu, mein alter Versicherer hat abgelehnt. Über OptiCheck hatte ich in zwei Tagen einen neuen Vertrag mit vollem Schutz.",
    name: "Andreas F.",
    context: "Doppelhaushälfte, Köln",
    stars: 5,
  },
];

/* ═══ ANIMATION PRESETS ═══ */
const fadeUp = {
  initial: { opacity: 0, y: 32, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 0.96, ease: [0.16, 1, 0.3, 1] as const },
};

/* ═══ FAQ ACCORDION ITEM ═══ */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E2DFD8] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-[Manrope] text-base font-bold text-[#171A21] md:text-lg">{question}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-[#3A4A5D] transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[600px] pb-5" : "max-h-0"}`}>
        <p className="text-[15px] leading-7 text-[#3A4A5D]">{answer}</p>
      </div>
    </div>
  );
}

/* ═══ MAIN COMPONENT ═══ */
export default function Wohngebaeudeversicherung() {
  useEffect(() => {
    document.title = "Wohngebäudeversicherung vergleichen | OptiCheck";

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute(
      "content",
      "Wohngebäudeversicherung vergleichen und sparen. SmartCheck in 2 Min., Vermittlung an geprüfte Makler. Kostenlos und unverbindlich."
    );

    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (!keywordsTag) {
      keywordsTag = document.createElement("meta");
      keywordsTag.setAttribute("name", "keywords");
      document.head.appendChild(keywordsTag);
    }
    keywordsTag.setAttribute(
      "content",
      "Wohngebäudeversicherung, Wohngebäudeversicherung vergleichen, Gebäudeversicherung, Hausversicherung, Wohngebäudeversicherung Kosten, Elementarversicherung, Wohngebäudeversicherung Makler, Feuerversicherung, Sturmschaden Versicherung, OptiCheck"
    );
  }, []);

  return (
    <div className="min-h-screen bg-white font-[Inter] text-[#171A21] selection:bg-[#2F6BFF]/20">
      <PublicHeader offsetClassName="pt-0" />

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative isolate overflow-hidden bg-[#081B3D] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={propertyGerman}
            alt="Deutsche Wohnsiedlung mit traditionellen Dächern"
            className="h-full w-full object-cover opacity-[0.16] mix-blend-screen scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,107,255,0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(37,198,133,0.12),transparent_30%),linear-gradient(180deg,#0A1F47_0%,#081B3D_60%,#102A56_100%)]" />

        <div className="container relative py-20 md:py-24 xl:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#25C685]">
                <House className="h-3.5 w-3.5" />
                Wohngebäudeversicherung
              </div>

              <h1 className="mt-6 font-[Manrope] text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] md:text-5xl xl:text-[3.4rem]">
                Wohngebäude&shy;versicherung{" "}
                <span className="bg-[linear-gradient(90deg,#2F6BFF_0%,#25C685_100%)] bg-clip-text text-transparent">
                  smart vergleichen.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-white/72">
                Schützen Sie Ihr Eigenheim gegen Feuer, Sturm, Leitungswasser und Elementarschäden. In 2 Minuten analysiert SmartCheck Ihr Gebäudeprofil und vermittelt Sie an einen spezialisierten Makler.
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#25C685]" />
                  Keine SCHUFA-Abfrage, keine Verpflichtung
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#25C685]" />
                  Vermittlung an lizenzierte Makler, kein Chatbot
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#25C685]" />
                  Über 120 Versicherungspartner im Vergleich
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={WOHNGEBAUDE_CHECK_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 rounded-full bg-[#25C685] px-7 text-sm font-bold text-white shadow-[0_8px_32px_rgba(37,198,133,0.35)] hover:bg-[#1FAF73]">
                    Wohngebäude-Check starten <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>

              <p className="mt-4 flex items-center gap-2 text-xs text-white/40">
                <Clock3 className="h-3.5 w-3.5" />
                Dauert nur ca. 2 Minuten. Kostenlos und unverbindlich.
              </p>
            </div>

            {/* Right: Visual */}
            <div className="hidden lg:block">
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-sm">
                <img
                  src={heroFamily}
                  alt="Deutsche Familie vor ihrem Eigenheim"
                  className="h-[380px] w-full rounded-2xl object-cover object-center"
                />
                <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-[#0D2347]/90 px-5 py-4 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25C685]/20">
                      <ShieldCheck className="h-5 w-5 text-[#25C685]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/50">SmartCheck Ergebnis</p>
                      <p className="text-sm font-bold text-white">Vorqualifiziert: Makler bereit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <section className="border-b border-[#E2DFD8] bg-[#F7F5F0] py-6">
        <div className="container flex flex-wrap items-center justify-center gap-8 md:gap-14">
          <div className="flex items-center gap-3">
            <img src={iso27001Badge} alt="ISO 27001 Zertifizierung" className="h-10 w-10 rounded-lg object-contain" />
            <span className="text-xs font-semibold text-[#3A4A5D]">ISO 27001</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={soc2Badge} alt="SOC 2 Type II Zertifizierung" className="h-10 w-10 rounded-lg object-contain" />
            <span className="text-xs font-semibold text-[#3A4A5D]">SOC 2 Type II</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={gdprBadge} alt="DSGVO konform" className="h-10 w-10 rounded-lg object-contain" />
            <span className="text-xs font-semibold text-[#3A4A5D]">DSGVO</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#3A4A5D]">4,8/5 Bewertung</span>
          </div>
        </div>
      </section>

      <main>
        {/* ═══ WHAT IS COVERED SECTION ═══ */}
        <section className="py-20 md:py-24">
          <div className="container">
            <motion.div {...fadeUp} className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D9E3EF] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#4C6FFF] shadow-[0_10px_28px_rgba(15,33,61,0.05)]">
                <span className="h-2 w-2 rounded-full bg-[linear-gradient(90deg,#2F6BFF_0%,#25C685_100%)]" />
                Leistungsumfang
              </div>
              <h2 className="mt-5 font-[Manrope] text-3xl font-extrabold tracking-[-0.03em] text-[#171A21] md:text-4xl">
                Was Ihre Wohngebäudeversicherung abdeckt
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#3A4A5D]">
                Eine gute Wohngebäudeversicherung schützt Ihr Eigenheim umfassend. Hier sind die wichtigsten Risiken, die abgesichert werden.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coveredRisks.map((risk, i) => (
                <motion.div
                  key={risk.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-2xl border border-[#E2DFD8] bg-white p-7 shadow-[0_4px_24px_rgba(15,33,61,0.04)] transition hover:border-[#2F6BFF]/20 hover:shadow-[0_8px_32px_rgba(47,107,255,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#081B3D]">
                    <risk.icon className="h-6 w-6 text-[#25C685]" />
                  </div>
                  <h3 className="mt-5 font-[Manrope] text-lg font-bold text-[#171A21]">{risk.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#3A4A5D]">{risk.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WHY OPTICHECK SECTION ═══ */}
        <section className="bg-[#081B3D] py-20 md:py-24">
          <div className="container">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div {...fadeUp}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#25C685]">
                  <span className="h-2 w-2 rounded-full bg-[#25C685]" />
                  Ihre Vorteile
                </div>
                <h2 className="mt-5 font-[Manrope] text-3xl font-extrabold tracking-[-0.03em] text-white md:text-4xl">
                  Warum Eigenheimbesitzer OptiCheck wählen
                </h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-white/60">
                  Statt stundenlang Tarife zu vergleichen, erledigt SmartCheck die Vorarbeit. Sie bekommen einen echten Makler, der auf Wohngebäudeversicherung spezialisiert ist.
                </p>

                <ul className="mt-8 space-y-4">
                  {advantages.map((adv) => (
                    <li key={adv} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#25C685]" />
                      <span className="text-[15px] leading-6 text-white/80">{adv}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <a href={WOHNGEBAUDE_CHECK_URL} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="gap-2 rounded-full bg-[#25C685] px-7 text-sm font-bold text-white shadow-[0_8px_32px_rgba(37,198,133,0.35)] hover:bg-[#1FAF73]">
                      Jetzt Wohngebäude-Check starten <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:block"
              >
                <div className="rounded-3xl border border-white/10 bg-white/5 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-sm">
                  <img
                    src={brokerMeeting}
                    alt="Versicherungsmaklerin berät ein Paar zur Wohngebäudeversicherung"
                    className="h-[420px] w-full rounded-2xl object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ HOW IT WORKS SECTION ═══ */}
        <section className="bg-[#F7F5F0] py-20 md:py-24">
          <div className="container">
            <motion.div {...fadeUp} className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D9E3EF] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#4C6FFF] shadow-[0_10px_28px_rgba(15,33,61,0.05)]">
                <span className="h-2 w-2 rounded-full bg-[linear-gradient(90deg,#2F6BFF_0%,#25C685_100%)]" />
                So funktioniert's
              </div>
              <h2 className="mt-5 font-[Manrope] text-3xl font-extrabold tracking-[-0.03em] text-[#171A21] md:text-4xl">
                In 4 Schritten zum optimalen Gebäudeschutz
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#3A4A5D]">
                Kein Papierkram, keine SCHUFA-Abfrage, keine Verpflichtung. Einfach der smartere Weg zur richtigen Wohngebäudeversicherung.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-2xl border border-[#E2DFD8] bg-white p-7 shadow-[0_4px_24px_rgba(15,33,61,0.04)]"
                >
                  <span className="font-[Manrope] text-4xl font-extrabold text-[#2F6BFF]/15">{step.step}</span>
                  <h3 className="mt-3 font-[Manrope] text-lg font-bold text-[#171A21]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#3A4A5D]">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href={WOHNGEBAUDE_CHECK_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 rounded-full bg-[#2F6BFF] px-7 text-sm font-bold text-white shadow-[0_8px_32px_rgba(47,107,255,0.25)] hover:bg-[#1D5AE8]">
                  Wohngebäude-Check starten <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ═══ SEO CONTENT SECTION ═══ */}
        <section className="py-20 md:py-24">
          <div className="container max-w-4xl">
            <motion.div {...fadeUp}>
              <h2 className="font-[Manrope] text-3xl font-extrabold tracking-[-0.03em] text-[#171A21] md:text-4xl">
                Wohngebäudeversicherung: Alles, was Sie wissen müssen
              </h2>

              <div className="mt-8 space-y-6 text-[15px] leading-7 text-[#3A4A5D]">
                <p>
                  Die Wohngebäudeversicherung gehört zu den wichtigsten Versicherungen für Eigenheimbesitzer in Deutschland. Sie schützt das Gebäude selbst und alle fest verbauten Bestandteile gegen die häufigsten Schadensursachen: Feuer, Leitungswasser, Sturm und Hagel. Ohne diesen Schutz tragen Eigentümer das volle finanzielle Risiko bei einem Schaden, der schnell in die Hunderttausende gehen kann.
                </p>

                <h3 className="font-[Manrope] text-xl font-bold text-[#171A21]">
                  Warum ist die Wohngebäudeversicherung so wichtig?
                </h3>
                <p>
                  Ein Eigenheim ist für die meisten Deutschen die größte Investition ihres Lebens. Ein einziger Leitungswasserschaden kostet im Durchschnitt über 3.000 Euro, ein Brandschaden kann leicht sechsstellige Summen erreichen. Die Wohngebäudeversicherung stellt sicher, dass Ihr Haus im Schadenfall repariert oder wiederaufgebaut werden kann, ohne dass Sie Ihre Ersparnisse aufbrauchen müssen.
                </p>

                <h3 className="font-[Manrope] text-xl font-bold text-[#171A21]">
                  Elementarschutz: Ein Muss in Zeiten des Klimawandels
                </h3>
                <p>
                  Starkregen, Überschwemmungen und Erdrutsche nehmen in Deutschland zu. Die Standarddeckung einer Wohngebäudeversicherung umfasst diese Risiken nicht automatisch. Der Elementarschutz muss als Zusatzbaustein hinzugebucht werden. Angesichts der zunehmenden Extremwetterereignisse empfehlen Verbraucherschützer und der Gesamtverband der Deutschen Versicherungswirtschaft (GDV) dringend, diesen Schutz einzuschließen.
                </p>

                <h3 className="font-[Manrope] text-xl font-bold text-[#171A21]">
                  Wohngebäudeversicherung vergleichen: So finden Sie den besten Tarif
                </h3>
                <p>
                  Die Beiträge und Leistungen der verschiedenen Anbieter unterscheiden sich erheblich. Faktoren wie Baujahr, Bauart, Wohnfläche, Standort und gewünschter Deckungsumfang beeinflussen den Preis. Ein systematischer Vergleich ist daher unerlässlich. Mit dem OptiCheck SmartCheck geben Sie in nur 2 Minuten die wichtigsten Eckdaten Ihres Gebäudes ein und werden anschließend mit einem spezialisierten Makler verbunden, der die besten Optionen für Ihre Situation kennt.
                </p>

                <h3 className="font-[Manrope] text-xl font-bold text-[#171A21]">
                  Darauf sollten Sie beim Vergleich achten
                </h3>
                <ul className="ml-1 space-y-3">
                  {[
                    "Versicherungssumme: Achten Sie auf den gleitenden Neuwert, um Unterversicherung zu vermeiden.",
                    "Selbstbeteiligung: Eine moderate Selbstbeteiligung kann den Beitrag senken, sollte aber im Schadenfall tragbar sein.",
                    "Elementarschutz: Prüfen Sie, ob Überschwemmung, Starkregen und Erdrutsch eingeschlossen sind.",
                    "Grobe Fahrlässigkeit: Gute Tarife verzichten auf den Einwand der groben Fahrlässigkeit.",
                    "Ableitungsrohre: Achten Sie darauf, dass auch Rohre außerhalb des Gebäudes mitversichert sind.",
                    "Photovoltaik: Falls vorhanden, sollte Ihre Solaranlage im Versicherungsschutz enthalten sein.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#2F6BFF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ TESTIMONIALS SECTION ═══ */}
        <section className="bg-[#081B3D] py-20 md:py-24">
          <div className="container">
            <motion.div {...fadeUp} className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#25C685]">
                <span className="h-2 w-2 rounded-full bg-[#25C685]" />
                Erfahrungsberichte
              </div>
              <h2 className="mt-5 font-[Manrope] text-3xl font-extrabold tracking-[-0.03em] text-white md:text-4xl">
                Was Eigenheimbesitzer über OptiCheck sagen
              </h2>
            </motion.div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-[15px] leading-7 text-white/80">"{t.quote}"</p>
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-white/50">{t.context}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FAQ SECTION ═══ */}
        <section className="py-20 md:py-24">
          <div className="container max-w-3xl">
            <motion.div {...fadeUp} className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D9E3EF] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#4C6FFF] shadow-[0_10px_28px_rgba(15,33,61,0.05)]">
                <span className="h-2 w-2 rounded-full bg-[linear-gradient(90deg,#2F6BFF_0%,#25C685_100%)]" />
                Häufige Fragen
              </div>
              <h2 className="mt-5 font-[Manrope] text-3xl font-extrabold tracking-[-0.03em] text-[#171A21] md:text-4xl">
                Fragen zur Wohngebäudeversicherung
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#3A4A5D]">
                Die wichtigsten Antworten rund um Schutzumfang, Kosten und den OptiCheck SmartCheck.
              </p>
            </motion.div>

            <motion.div {...fadeUp} className="mt-12 rounded-2xl border border-[#E2DFD8] bg-white px-6 py-2 shadow-[0_4px_24px_rgba(15,33,61,0.04)] md:px-8">
              {faqItems.map((item) => (
                <FaqItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ FINAL CTA SECTION ═══ */}
        <section className="relative isolate overflow-hidden bg-[#081B3D] py-20 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,107,255,0.18),transparent_50%)]" />
          <div className="container relative text-center">
            <motion.div {...fadeUp}>
              <h2 className="mx-auto max-w-2xl font-[Manrope] text-3xl font-extrabold tracking-[-0.03em] text-white md:text-4xl">
                Schützen Sie Ihr Eigenheim. Starten Sie jetzt den SmartCheck.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/60">
                In nur 2 Minuten erfahren Sie, welche Wohngebäudeversicherung am besten zu Ihrem Haus passt. Kostenlos, unverbindlich und ohne SCHUFA-Abfrage.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href={WOHNGEBAUDE_CHECK_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 rounded-full bg-[#25C685] px-8 text-sm font-bold text-white shadow-[0_8px_32px_rgba(37,198,133,0.35)] hover:bg-[#1FAF73]">
                    Wohngebäude-Check starten <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
              <div className="mx-auto mt-8 flex flex-wrap justify-center gap-6 text-xs text-white/40">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Bankverschlüsselt</span>
                <span className="flex items-center gap-1.5"><ThumbsUp className="h-3.5 w-3.5" /> 4,8/5 Bewertung</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Deutschlandweit</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
