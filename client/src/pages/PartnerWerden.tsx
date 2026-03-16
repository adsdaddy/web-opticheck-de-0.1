import PageLayout from "@/components/PageLayout";
import { useEffect } from "react";
import { CheckCircle2, ArrowRight, Users, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PartnerWerden() {
  useEffect(() => {
    document.title = "Partner werden | OptiCheck Deutschland";
  }, []);

  const benefits = [
    {
      icon: Users,
      title: "Qualifizierte Anfragen",
      desc: "Jede Anfrage wurde durch unseren SmartCheck vorqualifiziert. Sie erhalten nur Leads, die zu Ihrem Spezialgebiet passen.",
    },
    {
      icon: TrendingUp,
      title: "Planbares Wachstum",
      desc: "Unser Pay-Per-Lead-Modell gibt Ihnen volle Kostenkontrolle. Sie zahlen nur für Anfragen, die Sie tatsächlich erhalten.",
    },
    {
      icon: Shield,
      title: "Exklusivität",
      desc: "Ihre Leads werden nicht an zehn Makler gleichzeitig verschickt. Sie erhalten exklusive Anfragen für Ihre Region und Spezialisierung.",
    },
    {
      icon: Zap,
      title: "Schnelle Integration",
      desc: "Einfache Anbindung an Ihr bestehendes CRM. Leads werden in Echtzeit per E-Mail, SMS oder API-Schnittstelle zugestellt.",
    },
  ];

  const steps = [
    "Registrieren Sie sich als OptiCheck-Partner",
    "Definieren Sie Ihre Spezialisierung und Region",
    "Erhalten Sie vorqualifizierte Anfragen in Echtzeit",
    "Kontaktieren Sie den Verbraucher und beraten Sie persönlich",
  ];

  return (
    <PageLayout title="Partner werden" subtitle="Erhalten Sie qualifizierte Versicherungsanfragen über OptiCheck">
      <div className="space-y-16">
        {/* Intro */}
        <div>
          <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#171A21]">
            Für Versicherungsmakler
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#3A4A5D]">
            Sie sind ein lizenzierter Versicherungsmakler und suchen nach einem zuverlässigen Kanal für
            qualifizierte Neukundenanfragen? OptiCheck liefert Ihnen vorqualifizierte Leads von Verbrauchern,
            die aktiv nach Versicherungsschutz suchen.
          </p>
          <p className="mt-4 text-lg leading-8 text-[#3A4A5D]">
            Unser SmartCheck qualifiziert jeden Verbraucher vor, bevor die Anfrage an Sie weitergeleitet wird.
            Das bedeutet: weniger Zeitverschwendung, höhere Abschlussquoten und zufriedenere Kunden.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-[1.6rem] border border-[#E1E8F1] bg-white p-6 shadow-[0_12px_36px_rgba(15,33,61,0.05)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#2F6BFF_0%,#25C685_100%)] text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-[Manrope] text-lg font-bold text-[#171A21]">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#5B6C85]">{desc}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div>
          <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#171A21]">
            So funktioniert's
          </h2>
          <div className="mt-6 space-y-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-[1.4rem] border border-[#E3EAF2] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(15,33,61,0.04)]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2F6BFF] text-sm font-bold text-white">
                  {i + 1}
                </div>
                <p className="text-[#3A4A5D] leading-7">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="rounded-[1.6rem] border border-[#E6DED3] bg-[#FBF8F3] p-8">
          <h2 className="font-[Manrope] text-xl font-bold text-[#171A21]">Voraussetzungen</h2>
          <div className="mt-4 space-y-3">
            {[
              "Gültige Erlaubnis nach §34d GewO",
              "IHK-Registrierung als Versicherungsmakler",
              "Haftpflichtversicherung für Vermögensschäden",
              "Bereitschaft zur persönlichen Beratung per Telefon oder Video",
            ].map((req) => (
              <div key={req} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#25C685]" />
                <span className="text-sm text-[#3A4A5D]">{req}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-[1.6rem] border border-[#CFE1EF] bg-[linear-gradient(135deg,rgba(47,107,255,0.06)_0%,rgba(37,198,133,0.06)_100%)] p-8 text-center">
          <h3 className="font-[Manrope] text-xl font-bold text-[#171A21]">Jetzt Partner werden</h3>
          <p className="mt-3 text-[#3A4A5D]">
            Kontaktieren Sie uns, um mehr über unser Partnerprogramm zu erfahren und Ihre erste Anfrage zu erhalten.
          </p>
          <a href="mailto:partner@opticheck.io">
            <Button className="group mt-6 h-12 rounded-full bg-[#25C685] px-8 text-base font-semibold text-white shadow-[0_18px_48px_rgba(37,198,133,0.24)] transition hover:brightness-[1.03]">
              partner@opticheck.io kontaktieren
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
