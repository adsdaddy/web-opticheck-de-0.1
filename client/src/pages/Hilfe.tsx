import PageLayout from "@/components/PageLayout";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const WOHNGEBAUDE_CHECK_URL = "https://get.opticheck.io/wohngebaude-check";

const faqCategories = [
  {
    title: "Allgemeine Fragen",
    items: [
      {
        q: "Was ist OptiCheck?",
        a: "OptiCheck ist eine digitale Plattform, die Verbrauchern hilft, Versicherungsoptionen zu vergleichen und sich mit qualifizierten, lizenzierten Versicherungsmaklern verbinden zu lassen. Wir sind kein Versicherungsunternehmen und kein Makler – wir vermitteln den Kontakt zu Experten, die Ihnen persönlich weiterhelfen.",
      },
      {
        q: "Ist die Nutzung von OptiCheck kostenlos?",
        a: "Ja, die Nutzung von OptiCheck ist für Verbraucher vollständig kostenlos. Es entstehen keine Gebühren für den SmartCheck oder die Vermittlung an einen Makler. Unsere Vergütung erfolgt über ein Pay-Per-Lead-Modell, bei dem Makler für qualifizierte Anfragen zahlen.",
      },
      {
        q: "Wie unterscheidet sich OptiCheck von anderen Vergleichsportalen?",
        a: "Anders als typische Vergleichsportale, die Ihnen nur Preistabellen zeigen, qualifiziert OptiCheck Sie zuerst über unseren SmartCheck und vermittelt Sie dann an einen spezialisierten Makler, der sich persönlich um Ihre Anfrage kümmert. Sie erhalten keine generischen Listen, sondern eine persönliche Beratung.",
      },
    ],
  },
  {
    title: "SmartCheck",
    items: [
      {
        q: "Was ist der SmartCheck?",
        a: "Der SmartCheck ist unser intelligentes Vorqualifizierungstool. In nur 2 Minuten analysieren wir Ihre Versicherungssituation anhand einiger einfacher Fragen und vermitteln Sie an den passenden Makler. Es gibt keine SCHUFA-Abfrage und keine Verpflichtung.",
      },
      {
        q: "Welche Daten werden beim SmartCheck erhoben?",
        a: "Wir fragen nach grundlegenden Informationen wie Versicherungsart, Objektdaten (z. B. Wohnfläche, Baujahr), gewünschtem Schutzumfang und Ihren Kontaktdaten. Diese Informationen werden ausschließlich zur Vermittlung an einen geeigneten Makler verwendet.",
      },
      {
        q: "Beeinflusst der SmartCheck meinen SCHUFA-Score?",
        a: "Nein, der SmartCheck hat keinerlei Einfluss auf Ihren SCHUFA-Score. Es findet keine Bonitätsabfrage statt.",
      },
    ],
  },
  {
    title: "Maklervermittlung",
    items: [
      {
        q: "Wie werden die Makler ausgewählt?",
        a: "Alle Makler in unserem Netzwerk sind nach §34d GewO zugelassen und IHK-registriert. Sie werden anhand Ihrer spezifischen Anfrage und Ihres Standorts ausgewählt, um sicherzustellen, dass Sie einen Spezialisten erhalten, der Ihren lokalen Markt kennt.",
      },
      {
        q: "Wie schnell meldet sich ein Makler bei mir?",
        a: "In der Regel meldet sich ein Makler innerhalb weniger Stunden nach Abschluss Ihres SmartCheck bei Ihnen. Die genaue Reaktionszeit kann je nach Tageszeit und Verfügbarkeit variieren.",
      },
      {
        q: "Bin ich nach dem SmartCheck zu etwas verpflichtet?",
        a: "Nein, der SmartCheck und die Maklervermittlung sind vollständig unverbindlich. Sie entscheiden selbst, ob und wie Sie mit dem vermittelten Makler weiter vorgehen möchten.",
      },
    ],
  },
  {
    title: "Versicherungsarten",
    items: [
      {
        q: "Welche Versicherungen kann ich über OptiCheck vergleichen?",
        a: "Aktuell bieten wir den Wohngebäude-Check an, mit dem Sie Ihre Wohngebäudeversicherung optimieren können. Weitere Versicherungsarten wie Kfz-Versicherung, Haftpflichtversicherung, Berufsunfähigkeitsversicherung und Krankenversicherung sind in Vorbereitung und werden bald verfügbar sein.",
      },
      {
        q: "Was ist der Wohngebäude-Check?",
        a: "Der Wohngebäude-Check ist unser spezialisierter SmartCheck für die Wohngebäudeversicherung. Er analysiert Ihr Eigenheim und Ihren aktuellen Versicherungsschutz und vermittelt Sie an einen Makler, der auf Wohngebäudeversicherungen spezialisiert ist.",
      },
    ],
  },
  {
    title: "Datenschutz & Sicherheit",
    items: [
      {
        q: "Wie werden meine Daten geschützt?",
        a: "Wir verwenden bankübliche SSL-Verschlüsselung für alle Datenübertragungen. Ihre Daten werden nur an den vermittelten Makler weitergegeben und nicht an Dritte verkauft. Weitere Details finden Sie in unserer Datenschutzerklärung.",
      },
      {
        q: "An wen werden meine Daten weitergegeben?",
        a: "Ihre Daten werden ausschließlich an den für Sie ausgewählten, lizenzierten Versicherungsmakler weitergegeben. Es findet kein Verkauf Ihrer Daten an Dritte oder Werbetreibende statt.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E6DED3] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-[Manrope] text-base font-bold text-[#171A21]">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-[#6B7B90] transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-5 text-[0.95rem] leading-7 text-[#3A4A5D]">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Hilfe() {
  useEffect(() => {
    document.title = "Hilfe & FAQ | OptiCheck Deutschland";
  }, []);

  return (
    <PageLayout title="Hilfe & FAQ" subtitle="Häufig gestellte Fragen und Antworten rund um OptiCheck">
      <div className="space-y-12">
        {faqCategories.map((cat) => (
          <div key={cat.title}>
            <h2 className="mb-4 font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#171A21]">
              {cat.title}
            </h2>
            <div className="rounded-[1.6rem] border border-[#E6DED3] bg-white p-6 shadow-[0_12px_36px_rgba(23,26,33,0.05)]">
              {cat.items.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-[1.6rem] border border-[#CFE1EF] bg-[linear-gradient(135deg,rgba(47,107,255,0.06)_0%,rgba(37,198,133,0.06)_100%)] p-8 text-center">
          <h3 className="font-[Manrope] text-xl font-bold text-[#171A21]">Noch Fragen?</h3>
          <p className="mt-2 text-[#3A4A5D]">
            Kontaktieren Sie uns direkt – wir helfen Ihnen gerne weiter.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/kontakt"
              className="rounded-full bg-[#2F6BFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(47,107,255,0.24)] transition hover:brightness-[1.05]"
            >
              Kontakt aufnehmen
            </a>
            <a
              href={WOHNGEBAUDE_CHECK_URL}
              className="rounded-full border border-[#E0E8F1] bg-white px-6 py-3 text-sm font-semibold text-[#2F6BFF] shadow-[0_8px_24px_rgba(15,33,61,0.06)] transition hover:bg-[#F8FBFF]"
            >
              Wohngebäude-Check starten
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
