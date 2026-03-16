import PageLayout from "@/components/PageLayout";
import { useEffect } from "react";

export default function Impressum() {
  useEffect(() => {
    document.title = "Impressum | OptiCheck Deutschland";
  }, []);

  return (
    <PageLayout title="Impressum" subtitle="Angaben gemäß § 5 TMG und § 18 Abs. 2 MStV">
      <div className="prose prose-lg max-w-none text-[#3A4A5D]">
        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">Diensteanbieter</h2>
        <p>
          <strong>Global Liberty Digital LLC</strong><br />
          1309 Coffeen Avenue<br />
          Sheridan, WY 82801<br />
          Vereinigte Staaten von Amerika (USA)
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">Marke</h2>
        <p>
          OptiCheck ist eine eingetragene Marke der Global Liberty Digital LLC. Die Marke wird für den Betrieb
          der Versicherungsvergleichs- und Vermittlungsplattform unter der Domain <strong>opticheck.io</strong> verwendet.
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:info@opticheck.io" className="text-[#2F6BFF] hover:underline">info@opticheck.io</a><br />
          Webseite: <a href="https://opticheck.io" className="text-[#2F6BFF] hover:underline">https://opticheck.io</a>
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">Verantwortlich für den Inhalt</h2>
        <p>
          Global Liberty Digital LLC<br />
          1309 Coffeen Avenue<br />
          Sheridan, WY 82801, USA
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">Haftungsausschluss</h2>

        <h3 className="font-[Manrope] text-xl font-bold text-[#171A21]">Haftung für Inhalte</h3>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
          und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
          gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
          rechtswidrige Tätigkeit hinweisen.
        </p>

        <h3 className="font-[Manrope] text-xl font-bold text-[#171A21]">Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
          verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>

        <h3 className="font-[Manrope] text-xl font-bold text-[#171A21]">Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
          der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
          Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
          gestattet.
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">Hinweis zur Versicherungsvermittlung</h2>
        <p>
          OptiCheck ist keine Versicherungsgesellschaft und kein Versicherungsmakler. OptiCheck betreibt eine
          digitale Plattform zur Vermittlung von Versicherungsanfragen an lizenzierte Versicherungsmakler.
          OptiCheck erteilt keine Versicherungsberatung, schließt keine Versicherungsverträge ab und erhält
          keine Provisionen von Versicherungsgesellschaften. Die Vergütung erfolgt ausschließlich über ein
          Pay-Per-Lead-Modell, bei dem Makler für qualifizierte Anfragen eine Vermittlungsgebühr zahlen.
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">Streitbeilegung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#2F6BFF] hover:underline">
            https://ec.europa.eu/consumers/odr
          </a>
          . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </PageLayout>
  );
}
