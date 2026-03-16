import PageLayout from "@/components/PageLayout";
import { useEffect } from "react";
import { Bell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Krankenversicherung() {
  useEffect(() => {
    document.title = "Private Krankenversicherung | OptiCheck Deutschland";
  }, []);

  return (
    <PageLayout title="Private Krankenversicherung" subtitle="Bald verfügbar auf OptiCheck">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-50 border border-amber-200">
          <Bell className="h-9 w-9 text-amber-600" />
        </div>

        <h2 className="mt-8 font-[Manrope] text-3xl font-extrabold tracking-[-0.03em] text-[#171A21]">
          Wir arbeiten daran
        </h2>

        <p className="mt-4 max-w-lg text-lg leading-8 text-[#3A4A5D]">
          Der SmartCheck für die Private Krankenversicherung ist derzeit in Entwicklung. Bald können Sie auch
          hier Ihre Situation analysieren und sich an einen spezialisierten Makler vermitteln lassen.
        </p>

        <p className="mt-6 max-w-lg text-[#5B6C85]">
          In der Zwischenzeit können Sie unseren Wohngebäude-Check nutzen, um Ihre Wohngebäudeversicherung
          zu optimieren.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="https://get.opticheck.io/wohngebaude-check">
            <Button className="group h-12 rounded-full bg-[#25C685] px-7 text-base font-semibold text-white shadow-[0_18px_48px_rgba(37,198,133,0.24)] transition hover:brightness-[1.03]">
              Wohngebäude-Check starten
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="/">
            <Button variant="outline" className="h-12 rounded-full border-[#E0E8F1] px-7 text-base text-[#3A4A5D] hover:bg-[#F8FBFF]">
              Zurück zur Startseite
            </Button>
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
