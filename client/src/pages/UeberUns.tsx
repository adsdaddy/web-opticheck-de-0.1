import PageLayout from "@/components/PageLayout";
import { useEffect } from "react";
import { Shield, Users, Zap, Target, Globe, HeartHandshake } from "lucide-react";

export default function UeberUns() {
  useEffect(() => {
    document.title = "Über uns | OptiCheck Deutschland";
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Vertrauen",
      desc: "Wir vermitteln nur an lizenzierte, IHK-registrierte Makler. Ihre Daten sind bei uns sicher und werden niemals an Dritte verkauft.",
    },
    {
      icon: Users,
      title: "Persönlichkeit",
      desc: "Kein Chatbot, kein Callcenter. Jede Anfrage wird von einem echten Spezialisten bearbeitet, der sich Zeit für Ihre Situation nimmt.",
    },
    {
      icon: Zap,
      title: "Effizienz",
      desc: "In nur 2 Minuten analysiert SmartCheck Ihre Versicherungssituation und verbindet Sie mit dem passenden Experten.",
    },
    {
      icon: Target,
      title: "Präzision",
      desc: "Wir vermitteln nicht an irgendeinen Makler, sondern an den, der auf genau Ihren Versicherungstyp und Ihre Region spezialisiert ist.",
    },
    {
      icon: Globe,
      title: "Deutschlandweit",
      desc: "Von Berlin bis München, von Hamburg bis Stuttgart: Unser Maklernetzwerk deckt ganz Deutschland ab.",
    },
    {
      icon: HeartHandshake,
      title: "Unabhängigkeit",
      desc: "OptiCheck ist kein Versicherungsunternehmen. Wir sind unabhängig und haben nur ein Ziel: den besten Makler für Sie zu finden.",
    },
  ];

  return (
    <PageLayout title="Über uns" subtitle="OptiCheck – Deutschlands smartester Weg zur richtigen Versicherung">
      <div className="space-y-16">
        {/* Mission */}
        <div>
          <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#171A21]">
            Unsere Mission
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#3A4A5D]">
            Die meisten Deutschen zahlen zu viel für ihre Versicherungen – nicht weil es keine besseren Optionen gibt,
            sondern weil sie nie die richtigen sehen. Vergleichsportale überfluten Sie mit Tarifen und lassen Sie
            dann allein. OptiCheck macht es anders.
          </p>
          <p className="mt-4 text-lg leading-8 text-[#3A4A5D]">
            Wir kombinieren intelligente Technologie mit persönlicher Beratung. Unser SmartCheck analysiert Ihre
            Situation in 2 Minuten und vermittelt Sie an einen lizenzierten Makler, der auf genau Ihren
            Versicherungstyp spezialisiert ist. Kein Raten, kein Spam, kein Kleingedrucktes.
          </p>
        </div>

        {/* How we work */}
        <div>
          <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#171A21]">
            So arbeiten wir
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#3A4A5D]">
            OptiCheck ist eine Vermittlungsplattform – kein Versicherungsunternehmen und kein Makler. Wir erteilen
            keine Finanzberatung, schließen keine Verträge ab und erhalten keine Provisionen von Versicherungsgesellschaften.
          </p>
          <p className="mt-4 text-lg leading-8 text-[#3A4A5D]">
            Unser Geschäftsmodell ist einfach und transparent: Wenn ein Verbraucher über unseren SmartCheck eine
            qualifizierte Anfrage stellt, wird diese an einen passenden Makler weitergeleitet. Der Makler zahlt
            eine Vermittlungsgebühr für diese Anfrage. Für Verbraucher ist die Nutzung vollständig kostenlos.
          </p>
        </div>

        {/* Values */}
        <div>
          <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#171A21]">
            Unsere Werte
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-[1.6rem] border border-[#E1E8F1] bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFDFE_100%)] p-6 shadow-[0_12px_36px_rgba(15,33,61,0.05)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#2F6BFF_0%,#25C685_100%)] text-white shadow-[0_12px_28px_rgba(47,107,255,0.16)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-[Manrope] text-lg font-bold tracking-[-0.02em] text-[#171A21]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#5B6C85]">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className="rounded-[1.6rem] border border-[#E6DED3] bg-[#FBF8F3] p-8">
          <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#171A21]">
            Das Unternehmen
          </h2>
          <p className="mt-4 text-[#3A4A5D] leading-7">
            OptiCheck ist eine eingetragene Marke der <strong>Global Liberty Digital LLC</strong>, einem
            amerikanischen Technologieunternehmen mit Sitz in Sheridan, Wyoming. Von dort aus betreiben wir
            digitale Plattformen für den deutschen und australischen Versicherungs- und Finanzmarkt.
          </p>
          <p className="mt-4 text-sm text-[#6B7B90]">
            Global Liberty Digital LLC · 1309 Coffeen Avenue · Sheridan, WY 82801 · USA
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
