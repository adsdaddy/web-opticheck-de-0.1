import PageLayout from "@/components/PageLayout";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

function AccordionSection({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left font-[Manrope] text-lg font-bold text-[#171A21] hover:text-[#2F6BFF] transition-colors"
      >
        {title}
        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-6 prose prose-lg max-w-none text-[#3A4A5D]">{children}</div>}
    </div>
  );
}

export default function Datenschutz() {
  useEffect(() => {
    document.title = "Datenschutzerklärung | OptiCheck";
  }, []);

  return (
    <PageLayout title="Datenschutzerklärung" subtitle="Informationen zum Schutz Ihrer personenbezogenen Daten">
      <div className="max-w-none text-[#3A4A5D]">
        {/* Intro */}
        <div className="prose prose-lg max-w-none mb-8">
          <p>
            Der Schutz Ihrer Privatsphäre ist für uns von höchster Bedeutung. Darüber hinaus ist es uns wichtig,
            dass Sie jederzeit wissen, wann wir Daten speichern und wie wir diese verwenden.
          </p>
          <p>
            Wir haben ein umfassendes Datenschutzkonzept erarbeitet, an dem wir unsere Prozesse zur
            Datenverarbeitung im Einklang mit den gesetzlichen Bestimmungen ausrichten. Dadurch erbringen wir
            unsere Dienstleistungen und schützen Ihre Daten auf dem höchsten Niveau.
          </p>
          <p>
            Die nachfolgenden Datenschutzbestimmungen gelten für das Online-Angebot unter{" "}
            <a href="https://opticheck.io" className="text-[#2F6BFF] hover:underline">opticheck.io</a>{" "}
            („Online-Angebot").
          </p>
        </div>

        {/* Accordion Sections */}
        <div className="divide-y divide-gray-200 border-t border-gray-200">

          <AccordionSection title="1. Verantwortliche Stelle" defaultOpen={true}>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Webseite im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p>
              <strong>Global Liberty Digital LLC</strong><br />
              1309 Coffeen Avenue<br />
              Sheridan, WY 82801, USA<br /><br />
              E-Mail: <a href="mailto:privacy@opticheck.io" className="text-[#2F6BFF] hover:underline">privacy@opticheck.io</a>
            </p>
            <p>
              Für alle Fragen zum Thema Datenschutz in Zusammenhang mit unseren Produkten, Dienstleistungen oder
              der Nutzung unserer Website können Sie sich jederzeit an uns unter der oben genannten E-Mail-Adresse wenden.
            </p>
          </AccordionSection>

          <AccordionSection title="2. Allgemeines zur Datenverarbeitung">
            <p>
              Wir erheben und verwenden personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur
              Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.
              Die Erhebung und Verwendung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach
              Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung
              einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch
              gesetzliche Vorschriften gestattet ist.
            </p>
            <p>
              Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person
              einholen, dient Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage.
            </p>
          </AccordionSection>

          <AccordionSection title="3. Welche Daten erheben wir?">
            <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">3.1 Automatisch erhobene Daten (Server-Logfiles)</h3>
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
              <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers</li>
            </ul>
            <p>
              Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet: Gewährleistung eines
              reibungslosen Verbindungsaufbaus der Website, Gewährleistung einer komfortablen Nutzung unserer
              Website, Auswertung der Systemsicherheit und -stabilität sowie zu weiteren administrativen Zwecken.
              Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">3.2 Daten aus dem SmartCheck-Formular</h3>
            <p>
              Wenn Sie unser SmartCheck-Formular nutzen, erheben wir die von Ihnen eingegebenen Daten. Hierzu gehören insbesondere:
            </p>
            <ul>
              <li>Versicherungsart und gewünschter Schutzumfang</li>
              <li>Angaben zum versicherten Objekt (z. B. Wohnfläche, Baujahr, Gebäudetyp)</li>
              <li>Kontaktdaten (Name, E-Mail-Adresse, Telefonnummer)</li>
              <li>Weitere versicherungsrelevante Informationen</li>
            </ul>
            <p>
              Diese Daten werden ausschließlich zum Zweck der Vermittlung an einen qualifizierten Versicherungsmakler
              verwendet. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche
              Maßnahmen) sowie Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
            </p>

            <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">3.3 Kontaktaufnahme</h3>
            <p>
              Bei der Kontaktaufnahme mit uns (z. B. per Kontaktformular oder E-Mail) werden die Angaben des Nutzers
              zur Bearbeitung der Kontaktanfrage und deren Abwicklung gemäß Art. 6 Abs. 1 lit. b DSGVO verarbeitet.
            </p>
          </AccordionSection>

          <AccordionSection title="4. Wofür nutzen wir Ihre Daten und auf welcher Rechtsgrundlage?">
            <p>Wir verarbeiten Ihre personenbezogenen Daten im Einklang mit den Bestimmungen der DSGVO zu folgenden Zwecken:</p>

            <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">Bereitstellung des Online-Angebots</h3>
            <p>
              Zur Bereitstellung unseres Online-Angebots und der damit verbundenen Funktionen verarbeiten wir
              personenbezogene Daten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
              der Bereitstellung des Online-Angebots).
            </p>

            <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">Vermittlung von Versicherungsanfragen</h3>
            <p>
              Wenn Sie unser SmartCheck-Formular ausfüllen, nutzen wir Ihre Daten, um Sie mit einem qualifizierten
              Versicherungsmakler zusammenzubringen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung
              vorvertraglicher Maßnahmen) sowie Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
            </p>

            <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">Analyse und Verbesserung</h3>
            <p>
              Wir nutzen anonymisierte bzw. pseudonymisierte Nutzungsdaten zur Verbesserung unseres Angebots.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Verbesserung unseres Angebots).
            </p>

            <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">Werbung und Marketing</h3>
            <p>
              Soweit Sie uns Ihre Einwilligung erteilt haben, nutzen wir Ihre Daten, um Ihnen interessenbezogene
              Werbung auszuspielen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Sie können
              Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>
          </AccordionSection>

          <AccordionSection title="5. Weitergabe von Daten an Dritte">
            <p>
              Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten
              Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
            </p>
            <ul>
              <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben (Art. 6 Abs. 1 lit. a DSGVO),</li>
              <li>die Weitergabe zur Vermittlung an einen Versicherungsmakler erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO),</li>
              <li>für die Weitergabe eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c DSGVO),</li>
              <li>die Weitergabe zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben.</li>
            </ul>

            <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">Weitergabe an Versicherungsmakler</h3>
            <p>
              Im Rahmen unserer Vermittlungstätigkeit teilen wir Ihre Anfragedaten mit qualifizierten
              Versicherungsmaklern, um Ihnen passende Versicherungsangebote zu unterbreiten. Die Makler erhalten
              dabei die für die Angebotserstellung relevanten Daten und sind vertraglich verpflichtet, diese
              ausschließlich für den vereinbarten Zweck zu verwenden und DSGVO-konform zu verarbeiten.
            </p>
          </AccordionSection>

          <AccordionSection title="6. Dienstleister">
            <p>
              Zur Erbringung unserer Leistungen setzen wir externe Dienstleister ein, die in unserem Auftrag
              personenbezogene Daten verarbeiten (Auftragsverarbeiter gemäß Art. 28 DSGVO). Mit allen
              Dienstleistern haben wir Auftragsverarbeitungsverträge geschlossen, die den Anforderungen der
              DSGVO entsprechen. Die Dienstleister sind an unsere Weisungen gebunden und werden von uns
              regelmäßig kontrolliert.
            </p>
            <p>Wir setzen Dienstleister in folgenden Bereichen ein:</p>
            <ul>
              <li><strong>Hosting und Infrastruktur:</strong> Bereitstellung und Betrieb der technischen Infrastruktur für unser Online-Angebot. Die Server befinden sich in der Europäischen Union.</li>
              <li><strong>Datenbanken und Datenspeicherung:</strong> Speicherung und Verwaltung von Nutzerdaten in gesicherten Rechenzentren.</li>
              <li><strong>E-Mail-Kommunikation:</strong> Versand von transaktionalen E-Mails (z. B. Bestätigungen, Benachrichtigungen).</li>
              <li><strong>Analyse und Optimierung:</strong> Anonymisierte Auswertung des Nutzerverhaltens zur Verbesserung unseres Angebots.</li>
              <li><strong>Marketing und Werbung:</strong> Messung der Wirksamkeit von Werbekampagnen und Ausspielung interessenbezogener Werbung.</li>
            </ul>
            <p>
              Soweit Dienstleister ihren Sitz außerhalb der Europäischen Union bzw. des Europäischen Wirtschaftsraums
              haben, stellen wir durch geeignete Garantien sicher, dass Ihre Daten angemessen geschützt werden. Dies
              erfolgt insbesondere durch den Abschluss von EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO)
              oder durch die Zertifizierung des Dienstleisters unter dem EU-US Data Privacy Framework.
            </p>
          </AccordionSection>

          <AccordionSection title="7. Speicherfristen">
            <p>
              Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für den jeweiligen Verarbeitungszweck
              erforderlich ist oder wie es die gesetzlichen Aufbewahrungsfristen vorsehen. Anschließend werden die
              Daten routinemäßig gelöscht.
            </p>
            <ul>
              <li><strong>Anfragedaten (Leads):</strong> Werden nach Abschluss der Vermittlung bzw. nach Ablauf der Bearbeitungsfrist gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
              <li><strong>Server-Logfiles:</strong> Werden nach spätestens 30 Tagen automatisch gelöscht.</li>
              <li><strong>Kontaktanfragen:</strong> Werden nach abschließender Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</li>
              <li><strong>Vertragsdaten:</strong> Werden für die Dauer der Geschäftsbeziehung und darüber hinaus gemäß den gesetzlichen Aufbewahrungsfristen (in der Regel 6 bis 10 Jahre) gespeichert.</li>
            </ul>
          </AccordionSection>

          <AccordionSection title="8. Cookies und Tracking-Technologien">
            <p>
              Wir setzen auf unserer Webseite Cookies ein. Hierbei handelt es sich um kleine Textdateien, die Ihr
              Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite
              besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder
              sonstige Schadsoftware.
            </p>

            <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">Technisch notwendige Cookies</h3>
            <p>
              Einige Cookies sind technisch notwendig, damit unsere Website ordnungsgemäß funktioniert. Diese
              Cookies werden automatisch gesetzt und können nicht deaktiviert werden. Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">Analyse-Cookies</h3>
            <p>
              Darüber hinaus setzen wir Cookies ein, die eine Analyse des Surfverhaltens der Nutzer ermöglichen.
              Diese Cookies werden nur mit Ihrer Einwilligung gesetzt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO.
              Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>

            <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">Marketing-Cookies</h3>
            <p>
              Marketing-Cookies werden genutzt, um Besuchern auf Webseiten zu folgen und interessenbezogene
              Werbung anzuzeigen. Diese Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO.
            </p>

            <p>
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
              Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell
              ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
              Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
          </AccordionSection>

          <AccordionSection title="9. Ihre Rechte als betroffene Person">
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
            <ul>
              <li><strong>Recht auf Auskunft</strong> (Art. 15 DSGVO): Sie haben das Recht, Auskunft über die von uns verarbeiteten personenbezogenen Daten zu verlangen.</li>
              <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO): Sie haben das Recht, die Berichtigung unrichtiger oder die Vervollständigung unvollständiger Daten zu verlangen.</li>
              <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO): Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
              <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO): Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.</li>
              <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
              <li><strong>Recht auf Widerspruch</strong> (Art. 21 DSGVO): Sie haben das Recht, jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.</li>
              <li><strong>Recht auf Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO): Sie haben das Recht, eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen.</li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a href="mailto:privacy@opticheck.io" className="text-[#2F6BFF] hover:underline">privacy@opticheck.io</a>.
              Wir werden Ihre Anfrage unverzüglich, spätestens jedoch innerhalb eines Monats, bearbeiten.
            </p>

            <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">Beschwerderecht bei einer Aufsichtsbehörde</h3>
            <p>
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das
              Recht auf Beschwerde bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat Ihres
              Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht
              sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
            </p>
          </AccordionSection>

          <AccordionSection title="10. Datensicherheit">
            <p>
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer)
              in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
              Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der
              geschlossenen Darstellung des Schlüssel- beziehungsweise Schloss-Symbols in der Statusleiste Ihres Browsers.
            </p>
            <p>
              Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre
              Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung
              oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend
              der technologischen Entwicklung fortlaufend verbessert.
            </p>
          </AccordionSection>

          <AccordionSection title="11. Änderungen dieser Datenschutzerklärung">
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die Weiterentwicklung
              unserer Webseite und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher
              Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle
              Datenschutzerklärung kann jederzeit auf der Website unter{" "}
              <a href="/datenschutz" className="text-[#2F6BFF] hover:underline">opticheck.io/datenschutz</a>{" "}
              von Ihnen abgerufen und ausgedruckt werden.
            </p>
          </AccordionSection>

          <AccordionSection title="12. Kontakt">
            <p>
              Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an:{" "}
              <a href="mailto:privacy@opticheck.io" className="text-[#2F6BFF] hover:underline">privacy@opticheck.io</a>
            </p>
            <p>
              <strong>Global Liberty Digital LLC</strong><br />
              1309 Coffeen Avenue<br />
              Sheridan, WY 82801, USA
            </p>
          </AccordionSection>

        </div>
      </div>
    </PageLayout>
  );
}
