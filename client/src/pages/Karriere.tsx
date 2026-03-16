import PageLayout from "@/components/PageLayout";
import { useEffect } from "react";
import { Rocket, Globe, Users, Zap } from "lucide-react";

export default function Karriere() {
  useEffect(() => {
    document.title = "Karriere | OptiCheck Deutschland";
  }, []);

  const perks = [
    { icon: Globe, title: "Remote-First", desc: "Arbeiten Sie von überall – wir sind ein verteiltes Team mit Fokus auf Ergebnisse, nicht Anwesenheit." },
    { icon: Rocket, title: "Schnelles Wachstum", desc: "OptiCheck wächst rasant. Gestalten Sie die Zukunft der Versicherungsvermittlung aktiv mit." },
    { icon: Users, title: "Kleines Team, großer Impact", desc: "Jede Person zählt. Ihre Ideen werden gehört und umgesetzt." },
    { icon: Zap, title: "Modernste Technologie", desc: "Wir arbeiten mit den neuesten Tools und Technologien – von KI bis hin zu modernen Web-Frameworks." },
  ];

  return (
    <PageLayout title="Karriere" subtitle="Gestalten Sie die Zukunft der Versicherungsvermittlung mit uns">
      <div className="space-y-16">
        <div>
          <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#171A21]">
            Warum OptiCheck?
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#3A4A5D]">
            OptiCheck verändert die Art, wie Deutsche ihre Versicherungen finden und vergleichen. Wir sind ein
            wachsendes Technologieunternehmen, das intelligente Vermittlung mit persönlicher Beratung verbindet.
            Wenn Sie Lust haben, in einem dynamischen Umfeld etwas Bedeutsames aufzubauen, sind Sie bei uns richtig.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {perks.map(({ icon: Icon, title, desc }) => (
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

        <div className="rounded-[1.6rem] border border-[#CFE1EF] bg-[linear-gradient(135deg,rgba(47,107,255,0.06)_0%,rgba(37,198,133,0.06)_100%)] p-8 text-center">
          <h3 className="font-[Manrope] text-xl font-bold text-[#171A21]">Offene Stellen</h3>
          <p className="mt-3 text-[#3A4A5D]">
            Aktuell haben wir keine offenen Stellen ausgeschrieben. Wir sind jedoch immer auf der Suche nach
            talentierten Menschen. Senden Sie uns Ihre Initiativbewerbung an:
          </p>
          <a
            href="mailto:karriere@opticheck.io"
            className="mt-4 inline-block rounded-full bg-[#2F6BFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(47,107,255,0.24)] transition hover:brightness-[1.05]"
          >
            karriere@opticheck.io
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
