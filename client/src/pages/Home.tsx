/*
  Design philosophy: Vertrauensarchitektur (Trust Architecture).
  Bauhaus-inspired geometric precision, blue-to-green gradient accents,
  champagne warm backgrounds, Manrope headlines, modular card system.
  Fully Germanised for the German insurance broker market.
*/

import PublicFooter from "@/components/PublicFooter";
import { Button } from "@/components/ui/button";
import PublicHeader from "@/components/PublicHeader";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CarFront,
  CheckCircle2,
  ChevronRight,
  Clock3,
  HeartHandshake,
  House,
  MapPin,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  UserRoundSearch,
  Umbrella,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

/* ═══ IMAGE ASSETS ═══ */
const logoDark =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663380993655/ZmgeavQNGVXjbUckiZMcqr/optichecklogoblackbackground_275c3b11.png";

const heroFamily =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663380993655/fQEoWXU3HmfkrqUK7vBeHa/opticheck-de-hero-family-german-C5jpynGeAefnYDpEzpZ2DT.webp";

const brokerMeeting =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663380993655/fQEoWXU3HmfkrqUK7vBeHa/opticheck-de-social-proof-broker-FDey9tQDCuEu8Q35qjfzn4.webp";

const trustUiVisual =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663380993655/fQEoWXU3HmfkrqUK7vBeHa/opticheck-de-trust-ui-visual-U9eHe47d5BnWPjtkBraFQD.webp";

const propertyGerman =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663380993655/fQEoWXU3HmfkrqUK7vBeHa/opticheck-de-property-german-2hCkbD8V6nUuaQAzEvkXvN.webp";

const consumerGuidance =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663380993655/fQEoWXU3HmfkrqUK7vBeHa/opticheck-de-consumer-guidance-hhJNazcC2JS2yrWZVDMqRk.webp";

/* ═══ GERMAN CITY IMAGES (Unsplash) ═══ */
const cityImages: Record<string, string> = {
  Berlin: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=600&q=80",
  Munchen: "https://images.unsplash.com/photo-1595867818082-083862f3d630?w=600&q=80",
  Hamburg: "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?w=600&q=80",
  Frankfurt: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80",
  Koln: "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?w=600&q=80",
  Dusseldorf: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&q=80",
  Stuttgart: "https://images.unsplash.com/photo-1534313314376-a72289b6181e?w=600&q=80",
  Leipzig: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=600&q=80",
  Dresden: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=600&q=80",
  Hannover: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80",
};

const cityNames = [
  "Berlin", "Munchen", "Hamburg", "Frankfurt", "Koln",
  "Dusseldorf", "Stuttgart", "Leipzig", "Dresden", "Hannover",
];

/* ═══ INSURANCE CATEGORIES ═══ */
const insuranceOptions = [
  {
    icon: House,
    title: "Wohngebaudeversicherung",
    subtitle: "Schutz fur Ihr Eigenheim gegen Feuer, Sturm, Leitungswasser und weitere Risiken",
    href: "#smartcheck",
  },
  {
    icon: CarFront,
    title: "Kfz-Versicherung",
    subtitle: "Haftpflicht, Teilkasko oder Vollkasko: finden Sie den besten Schutz fur Ihr Fahrzeug",
    href: "#smartcheck",
  },
  {
    icon: Shield,
    title: "Haftpflichtversicherung",
    subtitle: "Die wichtigste Versicherung uberhaupt: Schutz vor Schadenersatzanspruchen Dritter",
    href: "#smartcheck",
  },
  {
    icon: Umbrella,
    title: "Berufsunfahigkeitsversicherung",
    subtitle: "Sichern Sie Ihr Einkommen ab, falls Sie Ihren Beruf nicht mehr ausuben konnen",
    href: "#smartcheck",
  },
  {
    icon: Heart,
    title: "Krankenversicherung",
    subtitle: "Gesetzlich oder privat? Finden Sie die optimale Absicherung fur Ihre Gesundheit",
    href: "#smartcheck",
  },
];

/* ═══ METRICS ═══ */
const metrics = [
  { label: "Deutsche vermittelt", value: "28.000+" },
  { label: "Versicherungspartner", value: "120+" },
  { label: "Geprüfte Makler", value: "85+" },
  { label: "Jahre Erfahrung", value: "8+" },
];

/* ═══ TRUST CHIPS ═══ */
const heroTrustChips = [
  "Kein Einfluss auf Ihren SCHUFA-Score",
  "Vermittlung an echte Makler, kein Chatbot",
  "Entwickelt fur den deutschen Markt",
];

const trustBadges = [
  "Bankgrade-verschlusselte Verbindung: Ihre Daten sind jederzeit sicher",
  "Vermittlung an lizenzierte Makler, kein Verkauf an zufallige Anbieter",
  "Eine 2-Minuten-Anfrage deckt alle Versicherungsbereiche ab",
  "Personliche Ruckmeldung innerhalb weniger Stunden, keine automatisierten E-Mails",
];

/* ═══ PILLARS ═══ */
const pillars = [
  {
    icon: Sparkles,
    title: "Intelligente Vorqualifizierung",
    copy: "SmartCheck analysiert Ihr Versicherungsprofil in Sekunden und filtert irrelevante Angebote heraus, sodass Sie nur passende Optionen sehen.",
  },
  {
    icon: HeartHandshake,
    title: "Ein echter Makler an Ihrer Seite",
    copy: "Vergessen Sie Chatbots und generische Vergleichstabellen. Ihre Anfrage landet bei einem lizenzierten Makler, der sich personlich um Sie kummert.",
  },
  {
    icon: ShieldCheck,
    title: "Vertrauen, das Sie spuren",
    copy: "Verschlusselte Daten, transparente Prozesse und keine versteckten Kosten. OptiCheck wurde fur die Entscheidungen gebaut, die wirklich zahlen.",
  },
];

/* ═══ STEPS ═══ */
const steps = [
  {
    number: "01",
    title: "Sagen Sie uns, was Sie brauchen",
    copy: "Beantworten Sie einige einfache Fragen. Kein Fachchinesisch, keine SCHUFA-Abfrage, keine Verpflichtung. Nur 2 Minuten Ihrer Zeit.",
  },
  {
    number: "02",
    title: "Wir finden Ihre beste Option",
    copy: "SmartCheck gleicht Ihr Profil mit uber 120 Versicherungspartnern ab und zeigt Ihnen nur die Wege, die sich wirklich lohnen.",
  },
  {
    number: "03",
    title: "Lernen Sie Ihren Makler kennen",
    copy: "Ein Spezialist pruft Ihre Anfrage, ruft Sie direkt an und bespricht mit Ihnen die besten Moglichkeiten.",
  },
  {
    number: "04",
    title: "Handeln Sie mit Klarheit",
    copy: "Kein Ratespiel mehr. Sie wissen genau, welche Versicherung zu Ihnen passt, was sie kostet und wie es weitergeht.",
  },
];

/* ═══ COMPARISON ═══ */
const comparisonRows = [
  { feature: "Vorqualifizierung", opticheck: "KI-gestutzt in 2 Minuten", typical: "Einfaches Formular oder keine" },
  { feature: "Personliche Betreuung", opticheck: "Lizenzierter Makler ruft Sie an", typical: "Self-Service oder Chatbot" },
  { feature: "Anbietervergleich", opticheck: "120+ Partner, maklergesteuert", typical: "Gesponserte Ergebnisse" },
  { feature: "Ihr Erlebnis", opticheck: "Gefuhrt, personlich, premium", typical: "Vergleichstabelle und viel Gluck" },
];

/* ═══ TESTIMONIALS ═══ */
const testimonials = [
  {
    quote: "Ich habe eine Stunde lang Versicherungen verglichen und war vollig uberfordert. Nach dem SmartCheck hatte ich innerhalb einer Stunde einen Makler am Telefon, der mir drei Optionen klar erklart hat.",
    name: "Sabine M.",
    context: "Wohngebaudeversicherung, Munchen",
    stars: 5,
  },
  {
    quote: "Als Selbststandiger ist es schwer, die richtige BU-Versicherung zu finden. Mein OptiCheck-Makler wusste genau, welche Anbieter meine Situation verstehen.",
    name: "Thomas K.",
    context: "Berufsunfahigkeitsversicherung, Hamburg",
    stars: 5,
  },
  {
    quote: "Der SmartCheck hat zwei Minuten gedauert. Am selben Nachmittag hatte ich einen Makler, der mir 340 Euro im Jahr bei der Kfz-Versicherung gespart hat.",
    name: "Julia R.",
    context: "Kfz-Versicherung, Berlin",
    stars: 5,
  },
  {
    quote: "Ich dachte, meine Haftpflichtversicherung ware in Ordnung. Mein Makler hat mir gezeigt, dass ich deutlich unterversichert war, und das zum gleichen Preis.",
    name: "Markus H.",
    context: "Haftpflichtversicherung, Frankfurt",
    stars: 5,
  },
  {
    quote: "Der gesamte Prozess fuhlte sich begleitet und ruhig an. Kein Druck, nur klare Informationen und ein Makler, der wirklich zugehort hat.",
    name: "Anna S.",
    context: "Krankenversicherung, Koln",
    stars: 5,
  },
  {
    quote: "Wir haben unsere Wohngebaudeversicherung uber OptiCheck gewechselt und sparen jetzt 480 Euro im Jahr bei besserem Schutz. Warum habe ich das nicht fruher gemacht?",
    name: "Stefan W.",
    context: "Wohngebaudeversicherung, Stuttgart",
    stars: 5,
  },
  {
    quote: "Mein Makler hat mir erklart, warum meine alte BU-Versicherung Lucken hatte. Jetzt bin ich richtig abgesichert und zahle sogar weniger.",
    name: "Katharina B.",
    context: "Berufsunfahigkeitsversicherung, Dusseldorf",
    stars: 5,
  },
  {
    quote: "Als alleinerziehende Mutter war mir wichtig, dass jemand meine Situation versteht. Mein OptiCheck-Makler hat genau das getan und die perfekte Losung gefunden.",
    name: "Lena F.",
    context: "Haftpflicht + Krankenversicherung, Leipzig",
    stars: 5,
  },
  {
    quote: "Ich habe wochenlang Vergleichsportale durchforstet und kam nicht weiter. Ein SmartCheck und ich hatte einen Makler, der die Arbeit fur mich erledigt hat.",
    name: "Michael D.",
    context: "Kfz-Versicherung, Dresden",
    stars: 5,
  },
  {
    quote: "Nach meinem Umzug brauchte ich schnell eine neue Wohngebaudeversicherung. Vom SmartCheck bis zum Abschluss hat alles nur eine Woche gedauert.",
    name: "Petra G.",
    context: "Wohngebaudeversicherung, Hannover",
    stars: 5,
  },
  {
    quote: "Ich arbeite selbst in der Finanzbranche und habe trotzdem OptiCheck fur meine eigene Versicherung genutzt. Das Maklernetzwerk ist wirklich beeindruckend.",
    name: "Christian L.",
    context: "Komplettcheck, Frankfurt",
    stars: 5,
  },
  {
    quote: "Mit 25 hatte ich keine Ahnung von Versicherungen. Mein Makler hat mir alles in einfacher Sprache erklart und mir genau das empfohlen, was ich brauche.",
    name: "Sophie T.",
    context: "Erstversicherung, Berlin",
    stars: 5,
  },
];

/* ═══ SMARTCHECK SNAPSHOT ═══ */
const smartCheckSnapshotFields = [
  ["Versicherungsart", "Wohngebaudeversicherung"],
  ["Objektwert", "380.000 Euro"],
  ["Wohnflache", "145 m2"],
  ["Vermittlungsweg", "SmartMatch zum Makler"],
] as const;

/* ═══ ANIMATION PRESETS ═══ */
const sectionMotion = {
  initial: { opacity: 0, y: 32, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 0.96, ease: [0.16, 1, 0.3, 1] as const },
};

/* ═══ REUSABLE COMPONENTS ═══ */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#D9E3EF] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#4C6FFF] shadow-[0_10px_28px_rgba(15,33,61,0.05)]">
      <span className="h-2 w-2 rounded-full bg-[linear-gradient(90deg,#2F6BFF_0%,#25C685_100%)]" />
      {children}
    </div>
  );
}

function OptimizedImage({
  src, alt, className, sizes, width, height, loading = "lazy", fetchPriority = "auto", decoding = "async",
}: {
  src: string; alt: string; className: string; sizes?: string; width?: number; height?: number;
  loading?: "eager" | "lazy"; fetchPriority?: "high" | "low" | "auto"; decoding?: "async" | "sync" | "auto";
}) {
  return (
    <img src={src} alt={alt} className={className} sizes={sizes} width={width} height={height}
      loading={loading} fetchPriority={fetchPriority} decoding={decoding} />
  );
}

/* ═══ INSURANCE DIRECTORY SECTION ═══ */
function InsuranceDirectorySection() {
  return (
    <motion.section id="versicherungen" {...sectionMotion} className="relative border-b border-[#E6DED3] bg-[#FBF8F3] py-22 md:py-22">
      <div className="container">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionEyebrow>Versicherungsverzeichnis</SectionEyebrow>
            <h2 className="mt-5 font-[Manrope] text-4xl font-extrabold tracking-[-0.04em] text-[#171A21] md:text-5xl">
              Funf Versicherungswege. Ein smarterer Startpunkt.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#3A4A5D]">
            Ob Eigenheim, Auto, Haftpflicht, Berufsunfahigkeit oder Gesundheit: wahlen Sie Ihr Ziel und SmartCheck erledigt die schwere Arbeit.
          </p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-3 xl:grid-cols-5">
          {insuranceOptions.map(({ icon: Icon, title, subtitle, href }) => (
            <a
              key={title}
              href={href}
              className="group relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-[#E0E8F1] bg-white shadow-[0_18px_50px_rgba(13,30,56,0.06)] transition hover:-translate-y-1 hover:border-[#BFD5F2] hover:shadow-[0_24px_70px_rgba(13,30,56,0.10)]"
            >
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#EEF5FF_0%,#EAFBF6_100%)] text-[#2F6BFF] transition group-hover:bg-[linear-gradient(135deg,#2F6BFF_0%,#25C685_100%)] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-[Manrope] text-xl font-bold tracking-[-0.03em] text-[#171A21]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5B6C85]">{subtitle}</p>
                <div className="mt-auto pt-5 inline-flex items-center text-sm font-semibold text-[#2F6BFF] group-hover:text-[#1D8C92]">
                  Zum SmartCheck <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/* ═══ MAIN HOME COMPONENT ═══ */
export default function Home() {
  useEffect(() => {
    document.title = "Versicherungen vergleichen und sparen | OptiCheck Deutschland";

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute(
      "content",
      "28.000+ Deutsche nutzen OptiCheck, um mit gepruften Versicherungsmaklern verbunden zu werden und bei Wohngebaude-, Kfz-, Haftpflicht-, BU- und Krankenversicherung zu sparen. Kostenloser SmartCheck in 2 Minuten."
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#081B3D] font-[Inter] text-[#171A21] selection:bg-[#2F6BFF]/20 selection:text-[#171A21]">
      <PublicHeader offsetClassName="pt-0" />

      <main id="top" className="overflow-hidden">
        {/* ═══ HERO SECTION ═══ */}
        <section className="relative isolate overflow-hidden border-b border-[#122749] bg-[#081B3D] text-white">
          <div className="absolute inset-0 z-0">
            <img src={propertyGerman} alt="" aria-hidden="true"
              className="h-full w-full object-cover opacity-[0.14] mix-blend-screen scale-110" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,107,255,0.26),transparent_32%),radial-gradient(circle_at_top_right,rgba(37,198,133,0.14),transparent_26%),linear-gradient(180deg,#0A1F47_0%,#081B3D_58%,#102A56_100%)]" />
          <div className="container relative py-18 md:py-20 xl:py-24">
            <motion.div
              {...sectionMotion}
              className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] shadow-[0_40px_120px_rgba(4,14,34,0.34)] backdrop-blur-sm"
            >
              <div className="grid xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                {/* Left: Copy */}
                <div className="relative order-2 xl:order-1 p-8 md:p-9 xl:p-10">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,18,42,0.28)_0%,rgba(8,27,61,0.08)_70%,rgba(8,27,61,0.02)_100%)] xl:bg-[linear-gradient(90deg,rgba(8,27,61,0.24)_0%,rgba(8,27,61,0.12)_56%,rgba(8,27,61,0.00)_100%)]" />
                  <div className="relative max-w-[42rem]">
                    <SectionEyebrow>Deutschlands smartester Versicherungsvergleich</SectionEyebrow>

                    <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#4B5D74]">
                      <div className="inline-flex items-center gap-1 rounded-full border border-white/14 bg-white/10 px-4 py-2 font-semibold text-[#B9F3D7] backdrop-blur-sm">
                        <Star className="h-4 w-4 fill-[#00B67A] text-[#00B67A]" />
                        <Star className="h-4 w-4 fill-[#00B67A] text-[#00B67A]" />
                        <Star className="h-4 w-4 fill-[#00B67A] text-[#00B67A]" />
                        <Star className="h-4 w-4 fill-[#00B67A] text-[#00B67A]" />
                        <Star className="h-4 w-4 fill-[#00B67A] text-[#00B67A]" />
                        <span className="ml-2 text-white">4,8/5 Vertrauensbewertung</span>
                      </div>
                      <div className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-white/78 backdrop-blur-sm">Basierend auf verifiziertem Kundenfeedback</div>
                    </div>

                    <h1 className="mt-7 max-w-3xl font-[Manrope] text-[2.3rem] font-extrabold leading-[1.02] tracking-[-0.045em] text-white md:text-[3.1rem] xl:text-[3.45rem]">
                      Schluss mit Raten.
                      <span className="block bg-[linear-gradient(90deg,#8DC4FF_0%,#6CE8C0_54%,#25C685_100%)] bg-clip-text text-transparent">
                        Jetzt smart vergleichen.
                      </span>
                      Tausende Euro sparen.
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-[1.15rem]">
                      Die meisten Deutschen zahlen zu viel fur ihre Versicherungen, weil sie nie die richtigen Optionen sehen. OptiCheck andert das. In 2 Minuten analysiert SmartCheck Ihr Profil, vermittelt Sie an einen Spezialisten und bringt Sie auf den schnellsten Weg zum besseren Schutz.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {heroTrustChips.map((chip) => (
                        <div key={chip} className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white/82 shadow-[0_10px_28px_rgba(4,14,34,0.14)] backdrop-blur-sm">
                          {chip}
                        </div>
                      ))}
                    </div>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                      <a href="#versicherungen">
                        <Button className="group h-13 rounded-full bg-[#25C685] px-7 text-base font-semibold text-white shadow-[0_24px_72px_rgba(37,198,133,0.30)] transition hover:scale-[1.01] hover:brightness-[1.03]">
                          Mein bestes Angebot finden
                          <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                        </Button>
                      </a>
                      <a href="#versicherungen">
                        <Button
                          variant="outline"
                          className="h-13 rounded-full border-white/18 bg-white/8 px-7 text-base text-white shadow-[0_10px_28px_rgba(4,14,34,0.14)] backdrop-blur-sm hover:border-[#25C685] hover:bg-white/12 hover:text-white"
                        >
                          Alle Versicherungsarten
                        </Button>
                      </a>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:max-w-[34rem]">
                      {trustBadges.map((item) => (
                        <div key={item} className="rounded-[1.35rem] border border-white/12 bg-white/8 px-5 py-5 text-sm leading-6 text-white/80 shadow-[0_14px_36px_rgba(4,14,34,0.14)] backdrop-blur-sm">
                          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/12">
                            <CheckCircle2 className="h-5 w-5 text-[#25C685]" />
                          </div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Hero card */}
                <div className="relative order-1 xl:order-2 xl:border-l border-white/10 bg-[rgba(255,255,255,0.03)] p-6 md:p-6">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.02)_100%)]" />
                  <div className="relative space-y-6">
                    <div className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/96 shadow-[0_26px_70px_rgba(4,14,34,0.24)]">
                      <div className="relative">
                        <OptimizedImage
                          src={heroFamily}
                          alt="Deutsche Familie vor ihrem Eigenheim in einer ruhigen Wohnstrasse"
                          className="h-[245px] w-full object-cover object-center"
                          sizes="(max-width: 1279px) 100vw, 520px"
                          width={1040} height={490} loading="eager" fetchPriority="high" decoding="sync"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent_0%,rgba(23,26,33,0.64)_100%)] p-5 text-white">
                          <div className="inline-flex items-center gap-2 rounded-full bg-white/16 px-3 py-1 text-xs uppercase tracking-[0.18em] backdrop-blur-md">
                            <Clock3 className="h-3.5 w-3.5" /> Ca. 2 Minuten SmartCheck
                          </div>
                          <p className="mt-3 max-w-sm text-sm leading-6 text-white/90">
                            Wohngebaude, Kfz, Haftpflicht, BU und Krankenversicherung. Eine smarte Anfrage deckt alles ab.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-5 p-6">
                        <div className="rounded-[1.4rem] border border-[#DDE7F2] bg-[#F9FCFF] p-4">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4C6FFF]">Vertrauenssignal</p>
                              <div className="mt-2 flex items-center gap-2">
                                <div className="flex items-center gap-1 text-[#00B67A]">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                  ))}
                                </div>
                                <span className="text-sm font-semibold text-[#171A21]">Hervorragend</span>
                              </div>
                            </div>
                            <div className="rounded-full bg-white px-3 py-1 text-xs text-[#5A6A83]">DE-fokussiert</div>
                          </div>
                        </div>

                        <div className="rounded-[1.5rem] border border-[#E6DED3] bg-[#FBF8F3] p-6">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4C6FFF]">Wahlen Sie Ihren Versicherungsweg</p>
                          <h2 className="mt-3 font-[Manrope] text-[1.65rem] font-bold tracking-[-0.03em] text-[#171A21]">
                            Ziel wahlen. Wir kummern uns um den Rest.
                          </h2>
                          <div className="mt-6 grid gap-4">
                            {insuranceOptions.map(({ icon: Icon, title, href }) => (
                              <a
                                key={title}
                                href={href}
                                className="group flex items-center justify-between rounded-[1.2rem] border border-[#E3EAF3] bg-white px-5 py-5 shadow-[0_12px_30px_rgba(15,33,61,0.04)] transition hover:-translate-y-0.5 hover:border-[#BFD5F2] hover:shadow-[0_18px_36px_rgba(15,33,61,0.08)]"
                              >
                                <div className="flex items-center gap-4">
                                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#EEF5FF_0%,#EAFBF6_100%)] text-[#2F6BFF] transition group-hover:bg-[linear-gradient(135deg,#2F6BFF_0%,#25C685_100%)] group-hover:text-white">
                                    <Icon className="h-5 w-5" />
                                  </div>
                                  <span className="font-[Manrope] text-base font-bold text-[#171A21]">{title}</span>
                                </div>
                                <ChevronRight className="h-5 w-5 text-[#2F6BFF] transition group-hover:translate-x-1 group-hover:text-[#21B6A8]" />
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Metrics bar */}
            <div className="mt-10 grid gap-5 rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-[0_18px_60px_rgba(4,14,34,0.22)] backdrop-blur-sm md:grid-cols-4 md:p-6">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-[1.4rem] border border-white/12 bg-white/10 px-5 py-5 backdrop-blur-sm">
                  <div className="font-[Manrope] text-3xl font-extrabold tracking-[-0.04em] text-white md:text-4xl">{item.value}</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/62">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ INSURANCE DIRECTORY ═══ */}
        <InsuranceDirectorySection />



        {/* ═══ SMARTCHECK SNAPSHOT ═══ */}
        <motion.section id="smartcheck" {...sectionMotion} className="relative border-b border-[#E6DED3] bg-white py-20 md:py-20">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
              <div>
                <SectionEyebrow>SmartCheck Vorschau</SectionEyebrow>
                <h2 className="mt-6 max-w-xl font-[Manrope] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#171A21] md:text-5xl">
                  Wissen Sie genau, wo Sie stehen, bevor Sie mit einem Anbieter sprechen.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-[#3A4A5D]">
                  SmartCheck verwandelt ein paar ehrliche Antworten in eine personalisierte Versicherungsanalyse. Sie sehen Ihre besten Optionen, mogliche Lucken und den Makler, der am besten zu Ihrer Situation passt. Alles in unter 2 Minuten.
                </p>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-[#E1D8CB] bg-white p-5 shadow-[0_30px_90px_rgba(23,26,33,0.08)]">
                <div className="relative overflow-hidden rounded-[1.6rem] border border-[#E6EEF7] bg-[#FBF8F3]">
                  <OptimizedImage
                    src={propertyGerman}
                    alt="Deutsche Wohnsiedlung mit traditionellen Dachern aus der Vogelperspektive"
                    className="h-[240px] w-full object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 48vw" width={960} height={480}
                  />
                  <div className="grid gap-5 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4C6FFF]">SmartCheck Vorschau</p>
                        <h3 className="mt-3 font-[Manrope] text-3xl font-bold tracking-[-0.03em] text-[#171A21]">Ihre Versicherungsanalyse</h3>
                      </div>
                      <div className="rounded-full border border-[#D8E2EE] bg-white px-3 py-1 text-xs text-[#3A4A5D]">Ca. 2 Min.</div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {smartCheckSnapshotFields.map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-[#E0E8F2] bg-white px-4 py-4">
                          <div className="text-xs uppercase tracking-[0.18em] text-[#6E7D91]">{label}</div>
                          <div className="mt-1 text-base font-semibold text-[#171A21]">{value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[1.7rem] border border-[#CFE1EF] bg-[linear-gradient(135deg,rgba(47,107,255,0.10)_0%,rgba(37,198,133,0.10)_100%)] p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#2F6BFF_0%,#25C685_100%)] shadow-[0_18px_30px_rgba(47,107,255,0.20)]">
                          <BadgeCheck className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4C6FFF]">Ihr Ergebnis</p>
                          <p className="mt-1 text-lg font-semibold text-[#171A21]">Qualifiziert: Maklervermittlung bereit</p>
                          <p className="mt-2 text-sm leading-6 text-[#3A4A5D]">
                            Sie sind vorqualifiziert. Ein spezialisierter Makler wird Ihr Profil prufen und sich mit massgeschneiderten Optionen bei Ihnen melden. Keine generischen Listen, kein Spam.
                          </p>
                        </div>
                      </div>
                    </div>

                    <a href="#versicherungen">
                      <Button className="h-13 w-full rounded-full bg-[linear-gradient(90deg,#2F6BFF_0%,#2C86F7_28%,#21B6A8_68%,#25C685_100%)] text-base font-semibold text-white shadow-[0_26px_64px_rgba(47,107,255,0.24)] hover:brightness-[1.03]">
                        SmartCheck starten
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══ WHY OPTICHECK IS DIFFERENT ═══ */}
        <motion.section id="uber-uns" {...sectionMotion} className="relative border-b border-[#E6DED3] bg-white py-20 md:py-22">
          <div className="container grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <SectionEyebrow>Warum OptiCheck anders ist</SectionEyebrow>
              <h2 className="mt-6 max-w-xl font-[Manrope] text-4xl font-extrabold leading-tight tracking-[-0.04em] text-[#171A21] md:text-5xl">
                Das ist kein weiteres Vergleichsportal. Das ist Ihr Vorteil.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#3A4A5D]">
                Vergleichstabellen zeigen Ihnen Preise. OptiCheck zeigt Ihnen den Weg. Wir kombinieren KI-gestutzte Vorqualifizierung mit lizenzierten Maklern, die in Ihrem Namen verhandeln.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="group rounded-[1.75rem] border border-[#E1E8F1] bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFDFE_100%)] p-7 shadow-[0_18px_55px_rgba(15,33,61,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,33,61,0.12)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#2F6BFF_0%,#25C685_100%)] text-white shadow-[0_18px_40px_rgba(47,107,255,0.18)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-[Manrope] text-xl font-bold tracking-[-0.03em] text-[#171A21]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5D6C85]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ═══ GERMANY MAP / REGIONAL ═══ */}
        <motion.section {...sectionMotion} className="relative overflow-hidden bg-[#0D1E38] py-20 md:py-28">
          <div className="container">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#25C685]/30 bg-[#25C685]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#25C685]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25C685]" />
                  Deutschlandweites Vertrauen
                </span>
                <h2 className="mt-6 font-[Manrope] text-4xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
                  Gebaut fur die Art, wie Deutsche sich wirklich versichern.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#8BA4C4]">
                Von Berliner Altbauwohnungen bis zu bayerischen Einfamilienhausern: OptiCheck versteht die deutsche Versicherungslandschaft und verbindet Sie mit Maklern, die Ihren lokalen Markt kennen.
              </p>
            </div>

            {/* City grid */}
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {cityNames.map((city, i) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-[1.2rem] border border-white/10 shadow-[0_12px_40px_rgba(4,14,34,0.18)]"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cityImages[city] ?? ""}
                      alt={`Versicherungsoptionen in ${city}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="font-[Manrope] text-lg font-bold text-white">{city}</p>
                    <p className="text-xs text-white/70">Versicherungsoptionen entdecken</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ═══ CONSUMER-SIDE GUIDANCE ═══ */}
        <motion.section {...sectionMotion} className="relative overflow-hidden bg-[#FBF8F3] py-20 md:py-22">
          <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-[#E3DACD] bg-white shadow-[0_24px_80px_rgba(23,26,33,0.08)]">
              <OptimizedImage
                src={consumerGuidance}
                alt="Deutsches Paar pruft Versicherungsunterlagen gemeinsam auf dem Sofa"
                className="h-full min-h-[420px] w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 52vw" width={960} height={640}
              />
            </div>

            <div>
              <SectionEyebrow>Verbraucherberatung</SectionEyebrow>
              <h2 className="mt-6 font-[Manrope] text-4xl font-extrabold tracking-[-0.04em] text-[#171A21] md:text-5xl">
                Sie verdienen mehr als eine Vergleichstabelle und "viel Gluck."
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#3A4A5D]">
                Andere Plattformen werfen Sie in ein Meer von Tarifen und lassen Sie allein. OptiCheck qualifiziert Sie zuerst, vermittelt Sie an einen Makler, der auf Ihren Versicherungstyp spezialisiert ist, und gibt Ihnen einen Menschen, der wirklich ans Telefon geht.
              </p>
              <div className="mt-10 space-y-5">
                {[
                  "Vergleichen Sie echte Optionen fur Wohngebaude, Kfz, Haftpflicht, BU und Krankenversicherung an einem Ort.",
                  "Kennen Sie Ihren Versicherungsbedarf, bevor Sie mit jemandem sprechen. Keine SCHUFA-Abfrage erforderlich.",
                  "Werden Sie mit einem lizenzierten Makler verbunden, der genau auf das spezialisiert ist, was Sie brauchen.",
                ].map((point) => (
                  <div key={point} className="flex gap-4 rounded-[1.3rem] border border-[#E3EAF2] bg-white px-5 py-5 shadow-[0_10px_28px_rgba(15,33,61,0.04)]">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF5FF] text-[#25C685]">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-7 text-[#425269]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══ HOW IT WORKS ═══ */}
        <motion.section id="so-funktionierts" {...sectionMotion} className="relative overflow-hidden bg-[#171A21] py-20 text-white md:py-22">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#171A21_0%,#1A2230_100%)]" />
          <div className="container relative grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <div>
              <SectionEyebrow>So funktioniert's</SectionEyebrow>
              <h2 className="mt-6 font-[Manrope] text-4xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
                Von "Ich brauche eine Versicherung" zu "Ich habe einen Plan" in vier Schritten.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/78">
                Kein Papierkram. Keine SCHUFA-Abfrage. Keine Verpflichtung. Einfach ein smarterer Weg herauszufinden, welcher Schutz zu Ihnen passt und wer Ihnen dabei helfen kann.
              </p>
              <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-white/12 bg-white/6 p-4 backdrop-blur-sm">
                <OptimizedImage
                  src={trustUiVisual}
                  alt="OptiCheck Versicherungsvergleich auf dem Smartphone"
                  className="h-[260px] w-full rounded-[1.4rem] object-cover"
                  sizes="(max-width: 1024px) 100vw, 44vw" width={880} height={520}
                />
              </div>
            </div>

            <div className="grid gap-5">
              {steps.map((step) => (
                <div key={step.number} className="rounded-[1.6rem] border border-white/10 bg-white/6 p-7 backdrop-blur-sm">
                  <div className="text-base font-bold uppercase tracking-[0.24em] text-[#25C685]">{step.number}</div>
                  <h3 className="mt-3 font-[Manrope] text-2xl font-bold tracking-[-0.03em] text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/75">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ═══ COMPARISON TABLE ═══ */}
        <motion.section {...sectionMotion} className="relative border-b border-[#E6DED3] bg-white py-20 md:py-22">
          <div className="container grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <div>
              <SectionEyebrow>OptiCheck vs. typische Vergleichsportale</SectionEyebrow>
              <h2 className="mt-6 font-[Manrope] text-4xl font-extrabold tracking-[-0.04em] text-[#171A21] md:text-5xl">
                Sehen Sie, warum 28.000+ Deutsche OptiCheck gewahlt haben.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#3A4A5D]">
                Der Unterschied ist nicht kosmetisch. OptiCheck qualifiziert Sie vor, vermittelt Sie an einen echten Makler und bietet Ihnen begleitete Unterstutzung bei jedem Schritt.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#E1D8CB] bg-white shadow-[0_26px_80px_rgba(23,26,33,0.07)]">
              <div className="grid grid-cols-[1.3fr_1fr_1fr] border-b border-[#E7EDF5] bg-[#F8FBFF] px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7B90]">
                <div>Merkmal</div>
                <div>OptiCheck</div>
                <div>Typisches Portal</div>
              </div>
              {comparisonRows.map((row) => (
                <div key={row.feature} className="grid grid-cols-[1.3fr_1fr_1fr] border-b border-[#EEF2F7] px-5 py-5 text-sm leading-6 text-[#425269] last:border-b-0">
                  <div className="font-semibold text-[#171A21]">{row.feature}</div>
                  <div className="text-[#1D8C92]">{row.opticheck}</div>
                  <div>{row.typical}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ═══ TESTIMONIALS SECTION ═══ */}
        <motion.section {...sectionMotion} className="relative bg-[#FBF8F3] py-18 md:py-22">
          <div className="container">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <SectionEyebrow>Erfahrungsberichte</SectionEyebrow>
                <h2 className="mt-6 font-[Manrope] text-4xl font-extrabold tracking-[-0.04em] text-[#171A21] md:text-5xl">
                  Echte Deutsche. Echte Ergebnisse. Echte Ersparnisse.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#5A6A83]">
                Nehmen Sie nicht unser Wort dafur. Hier ist, was passiert ist, als diese Deutschen aufgehort haben, Tarife zu vergleichen, und angefangen haben, sich mit dem richtigen Makler verbinden zu lassen.
              </p>
            </div>

            <div className="mt-12 relative overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#FBF8F3] to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#FBF8F3] to-transparent" />
              <div className="flex gap-6 animate-scroll-left hover:[animation-play-state:paused]">
                {[...testimonials, ...testimonials].map((item, idx) => (
                  <div key={`${item.name}-${idx}`} className="w-[340px] shrink-0 rounded-[1.9rem] border border-[#E2D8CA] bg-white p-7 shadow-[0_18px_55px_rgba(23,26,33,0.06)]">
                    <div className="flex items-center gap-1 text-[#25C685]">
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <Star key={starIdx} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 text-base leading-8 text-[#425269]">"{item.quote}"</p>
                    <div className="mt-5">
                      <div className="font-[Manrope] text-lg font-bold tracking-[-0.03em] text-[#171A21]">{item.name}</div>
                      <div className="text-sm text-[#5A6A83]">{item.context}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══ BROKER MEETING SECTION ═══ */}
        <motion.section {...sectionMotion} className="relative border-y border-[#E6DED3] bg-white py-20 md:py-22">
          <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionEyebrow>Maklerberatung</SectionEyebrow>
              <h2 className="mt-6 font-[Manrope] text-4xl font-extrabold tracking-[-0.04em] text-[#171A21] md:text-5xl">
                Ihr Makler: Experte, Berater, Verhandler.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#3A4A5D]">
                Unsere Makler sind keine Verkaufer. Sie sind lizenzierte Spezialisten, die Ihren Versicherungsbedarf analysieren, die besten Konditionen verhandeln und Sie durch den gesamten Prozess begleiten.
              </p>
              <div className="mt-8 grid gap-4">
                {[
                  { title: "IHK-lizenziert und gepruft", desc: "Alle Makler in unserem Netzwerk sind nach §34d GewO zugelassen und IHK-registriert." },
                  { title: "Unabhangig und anbieterubergreifend", desc: "Zugang zu uber 120 Versicherungsgesellschaften fur eine wirklich unabhangige Beratung." },
                  { title: "Personlich und erreichbar", desc: "Kein Callcenter, kein Chatbot. Ihr Makler ist ein echter Mensch mit einer echten Telefonnummer." },
                ].map((item) => (
                  <div key={item.title} className="rounded-[1.6rem] border border-[#E4EAF2] bg-[#FBFDFE] p-6 shadow-[0_10px_28px_rgba(15,33,61,0.04)]">
                    <h3 className="font-[Manrope] text-lg font-bold tracking-[-0.03em] text-[#171A21]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#5B6C85]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#E3DACD] bg-white shadow-[0_24px_80px_rgba(23,26,33,0.08)]">
              <OptimizedImage
                src={brokerMeeting}
                alt="Versicherungsmaklerin berat ein junges Paar in einem modernen Buro"
                className="h-full min-h-[420px] w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" width={960} height={640}
              />
            </div>
          </div>
        </motion.section>

        {/* ═══ CTA SECTION ═══ */}
        <motion.section {...sectionMotion} className="relative overflow-hidden bg-[#171A21] py-22 text-white md:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#171A21_0%,#121A26_100%)]" />
          <div className="container relative grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <div>
              <SectionEyebrow>Bereit loszulegen</SectionEyebrow>
              <h2 className="mt-6 font-[Manrope] text-4xl font-extrabold tracking-[-0.04em] text-white md:text-5xl">
                Ihr besserer Schutz ist 2 Minuten entfernt.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/78">
                28.000+ Deutsche haben SmartCheck bereits genutzt, um den richtigen Makler zu finden und bei ihren Versicherungen zu sparen. Die einzige Frage ist: Worauf warten Sie noch?
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#versicherungen">
                  <Button className="group h-13 rounded-full bg-[#25C685] px-7 text-base font-semibold text-white shadow-[0_24px_72px_rgba(37,198,133,0.30)] transition hover:scale-[1.01] hover:brightness-[1.03]">
                    Mein bestes Angebot finden
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </Button>
                </a>
                <a href="#smartcheck">
                  <Button variant="outline" className="h-13 rounded-full border-white/30 bg-white/8 px-7 text-base text-white hover:bg-white/14">
                    Kostenlosen SmartCheck starten
                  </Button>
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/6 backdrop-blur-sm">
                <OptimizedImage
                  src={heroFamily}
                  alt="Deutsche Familie vor ihrem Eigenheim"
                  className="h-full min-h-[250px] w-full object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw" width={720} height={500}
                />
              </div>
              <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/6 backdrop-blur-sm">
                <OptimizedImage
                  src={brokerMeeting}
                  alt="Versicherungsmaklerin im Beratungsgesprach"
                  className="h-full min-h-[250px] w-full object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw" width={720} height={500}
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <PublicFooter />
    </div>
  );
}
