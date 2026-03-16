import PageLayout from "@/components/PageLayout";
import { useEffect } from "react";
import { Mail, MapPin, Globe } from "lucide-react";

export default function Kontakt() {
  useEffect(() => {
    document.title = "Kontakt | OptiCheck Deutschland";
  }, []);

  return (
    <PageLayout title="Kontakt" subtitle="Wir freuen uns auf Ihre Nachricht">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#171A21]">
              So erreichen Sie uns
            </h2>
            <p className="mt-3 text-[#3A4A5D] leading-7">
              Haben Sie Fragen zu OptiCheck, unserem SmartCheck oder der Maklervermittlung?
              Wir helfen Ihnen gerne weiter.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-4 rounded-[1.4rem] border border-[#E4EAF2] bg-[#FBFDFE] p-5 shadow-[0_8px_24px_rgba(15,33,61,0.04)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#EEF5FF_0%,#EAFBF6_100%)] text-[#2F6BFF]">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-[Manrope] text-base font-bold text-[#171A21]">E-Mail</h3>
                <a href="mailto:info@opticheck.io" className="mt-1 text-sm text-[#2F6BFF] hover:underline">
                  info@opticheck.io
                </a>
                <p className="mt-1 text-xs text-[#6B7B90]">Wir antworten in der Regel innerhalb von 24 Stunden</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-[1.4rem] border border-[#E4EAF2] bg-[#FBFDFE] p-5 shadow-[0_8px_24px_rgba(15,33,61,0.04)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#EEF5FF_0%,#EAFBF6_100%)] text-[#2F6BFF]">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-[Manrope] text-base font-bold text-[#171A21]">Webseite</h3>
                <a href="https://opticheck.io" className="mt-1 text-sm text-[#2F6BFF] hover:underline">
                  opticheck.io
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-[1.4rem] border border-[#E4EAF2] bg-[#FBFDFE] p-5 shadow-[0_8px_24px_rgba(15,33,61,0.04)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#EEF5FF_0%,#EAFBF6_100%)] text-[#2F6BFF]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-[Manrope] text-base font-bold text-[#171A21]">Unternehmenssitz</h3>
                <p className="mt-1 text-sm text-[#3A4A5D]">
                  Global Liberty Digital LLC<br />
                  1309 Coffeen Avenue<br />
                  Sheridan, WY 82801, USA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h2 className="font-[Manrope] text-2xl font-extrabold tracking-[-0.03em] text-[#171A21]">
            Schnellzugriff
          </h2>

          <div className="space-y-4">
            <a
              href="https://get.opticheck.io/wohngebaude-check"
              className="block rounded-[1.4rem] border border-[#E0E8F1] bg-white p-6 shadow-[0_12px_36px_rgba(15,33,61,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(15,33,61,0.08)]"
            >
              <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">Wohngebäude-Check starten</h3>
              <p className="mt-2 text-sm text-[#3A4A5D]">
                Analysieren Sie Ihre Wohngebäudeversicherung in nur 2 Minuten und lassen Sie sich an einen spezialisierten Makler vermitteln.
              </p>
            </a>

            <a
              href="/hilfe"
              className="block rounded-[1.4rem] border border-[#E0E8F1] bg-white p-6 shadow-[0_12px_36px_rgba(15,33,61,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(15,33,61,0.08)]"
            >
              <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">Hilfe & FAQ</h3>
              <p className="mt-2 text-sm text-[#3A4A5D]">
                Finden Sie Antworten auf häufig gestellte Fragen rund um OptiCheck, den SmartCheck und die Maklervermittlung.
              </p>
            </a>

            <a
              href="/partner-werden"
              className="block rounded-[1.4rem] border border-[#E0E8F1] bg-white p-6 shadow-[0_12px_36px_rgba(15,33,61,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(15,33,61,0.08)]"
            >
              <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">Partner werden</h3>
              <p className="mt-2 text-sm text-[#3A4A5D]">
                Sie sind Versicherungsmakler und möchten qualifizierte Anfragen über OptiCheck erhalten? Erfahren Sie mehr.
              </p>
            </a>
          </div>

          <div className="rounded-[1.4rem] border border-[#E6DED3] bg-[#FBF8F3] p-6">
            <h3 className="font-[Manrope] text-base font-bold text-[#171A21]">Datenschutzanfragen</h3>
            <p className="mt-2 text-sm text-[#3A4A5D]">
              Für Anfragen zum Datenschutz wenden Sie sich bitte an:{" "}
              <a href="mailto:datenschutz@opticheck.io" className="text-[#2F6BFF] hover:underline">
                datenschutz@opticheck.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
