import PageLayout from "@/components/PageLayout";
import { useEffect } from "react";

export default function Datenschutz() {
  useEffect(() => {
    document.title = "Datenschutzerklärung | OptiCheck Deutschland";
  }, []);

  return (
    <PageLayout title="Datenschutzerklärung" subtitle="Informationen zum Schutz Ihrer personenbezogenen Daten gemäß DSGVO">
      <div className="prose prose-lg max-w-none text-[#3A4A5D]">
        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Webseite ist:<br /><br />
          <strong>Global Liberty Digital LLC</strong><br />
          1309 Coffeen Avenue<br />
          Sheridan, WY 82801, USA<br />
          E-Mail: <a href="mailto:datenschutz@opticheck.io" className="text-[#2F6BFF] hover:underline">datenschutz@opticheck.io</a>
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">2. Erhebung und Speicherung personenbezogener Daten</h2>
        <p>
          Beim Besuch unserer Webseite werden automatisch Informationen an den Server unserer Webseite gesendet.
          Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen
          werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
        </p>
        <ul>
          <li>IP-Adresse des anfragenden Rechners</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Webseite, von der aus der Zugriff erfolgt (Referrer-URL)</li>
          <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
        </ul>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">3. Nutzung des SmartCheck-Formulars</h2>
        <p>
          Wenn Sie unser SmartCheck-Formular ausfüllen, erheben wir die von Ihnen eingegebenen Daten, darunter:
        </p>
        <ul>
          <li>Versicherungsart und gewünschter Schutzumfang</li>
          <li>Angaben zum Objekt (z. B. Wohnfläche, Baujahr)</li>
          <li>Kontaktdaten (Name, E-Mail, Telefonnummer)</li>
          <li>Weitere versicherungsrelevante Informationen</li>
        </ul>
        <p>
          Diese Daten werden ausschließlich zum Zweck der Vermittlung an einen qualifizierten Versicherungsmakler
          verwendet. Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie
          Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">4. Weitergabe von Daten</h2>
        <p>
          Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten
          Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
        </p>
        <ul>
          <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben (Art. 6 Abs. 1 lit. a DSGVO)</li>
          <li>Die Weitergabe zur Vermittlung an einen Versicherungsmakler erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO)</li>
          <li>Eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c DSGVO)</li>
          <li>Die Weitergabe zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist</li>
        </ul>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">5. Cookies</h2>
        <p>
          Wir setzen auf unserer Webseite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr
          Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden. Cookies richten auf
          Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige Schadsoftware.
        </p>
        <p>
          Die meisten der von uns verwendeten Cookies sind sogenannte "Session-Cookies". Sie werden nach Ende
          Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie
          diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">6. Ihre Rechte</h2>
        <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
        <ul>
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
          <a href="mailto:datenschutz@opticheck.io" className="text-[#2F6BFF] hover:underline">datenschutz@opticheck.io</a>
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">7. Datensicherheit</h2>
        <p>
          Wir verwenden innerhalb des Webseiten-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer)
          in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
          Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der
          geschlossenen Darstellung des Schlüssel- beziehungsweise Schloss-Symbols in der Statusleiste Ihres Browsers.
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
        <p>
          Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die Weiterentwicklung
          unserer Webseite und Angebote oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben
          kann es notwendig werden, diese Datenschutzerklärung zu ändern.
        </p>
      </div>
    </PageLayout>
  );
}
