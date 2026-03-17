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
          E-Mail: <a href="mailto:privacy@opticheck.io" className="text-[#2F6BFF] hover:underline">privacy@opticheck.io</a>
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

        <h3 className="font-[Manrope] text-xl font-bold text-[#171A21]">4a. Weitergabe an Versicherungsmakler</h3>
        <p>
          Wir teilen Ihre Daten mit qualifizierten Versicherungsmaklern, um Ihnen passende Angebote zu unterbreiten.
          Die Makler erhalten folgende Daten:
        </p>
        <ul>
          <li>Name, E-Mail, Telefonnummer</li>
          <li>Adresse und Geburtsdatum</li>
          <li>Produktspezifische Informationen (z. B. Objektwert, Wohnfläche, gewünschter Schutzumfang)</li>
        </ul>
        <p>
          Die Makler sind vertraglich verpflichtet, Ihre Daten DSGVO-konform zu verarbeiten und ausschließlich
          für die Angebotserstellung zu nutzen. Maklerstandorte: Deutschland, Österreich, Schweiz, Australien.
          Für Datenweitergaben nach Australien gelten EU-Standardvertragsklauseln.
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">5. Auftragsverarbeiter (Art. 28 DSGVO)</h2>
        <p>Wir nutzen folgende Dienstleister zur Datenverarbeitung:</p>
        <ul>
          <li>
            <strong>Vercel Inc.</strong> (Hosting und Infrastruktur)<br />
            Standort: EU-Rechenzentren (Frankfurt, Dublin, London)<br />
            DPA: vercel.com/legal/dpa
          </li>
          <li>
            <strong>Supabase Inc.</strong> (Datenbank)<br />
            Standort: EU-Rechenzentren<br />
            DPA: supabase.com/legal/dpa
          </li>
          <li>
            <strong>Postmark</strong> (E-Mail-Versand)<br />
            Standort: USA (Standardvertragsklauseln)<br />
            DPA: postmarkapp.com/eu/gdpr
          </li>
          <li>
            <strong>Meta Platforms Inc.</strong> (Werbekampagnen-Tracking)<br />
            Standort: USA (Data Privacy Framework)<br />
            Zweck: Messung der Kampagnenleistung
          </li>
        </ul>
        <p>Alle Dienstleister sind vertraglich zur DSGVO-Compliance verpflichtet.</p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">6. Speicherdauer</h2>
        <p>
          Wir speichern Ihre Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist:
        </p>
        <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">Lead-Daten</h3>
        <ul>
          <li>Aktive Anfragen: Bis zur Umwandlung oder Ablehnung</li>
          <li>Umgewandelte Anfragen: 6 Monate (Kundenservice für Makler)</li>
          <li>Abgelehnte Anfragen: 30 Tage</li>
          <li>Erstattete Anfragen: 1 Jahr (Streitbeilegung)</li>
          <li>Inaktive Anfragen: 90 Tage ohne Statusänderung</li>
        </ul>
        <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">Makler-Daten</h3>
        <ul>
          <li>Aktive Partnerschaft: Dauer der Zusammenarbeit</li>
          <li>Inaktive Makler: 1 Jahr nach letzter Aktivität</li>
        </ul>
        <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">Nutzerkonten</h3>
        <ul>
          <li>Aktive Nutzer: Dauer der Beschäftigung/Vertrag</li>
          <li>Inaktive Nutzer: 3 Monate nach letztem Login</li>
        </ul>
        <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">Werbekampagnen-Daten</h3>
        <ul>
          <li>Kampagnenkosten: 2 Jahre (steuerrechtliche Anforderungen)</li>
          <li>Performance-Daten: 90 Tage nach Kampagnenende</li>
        </ul>
        <p>Audit-Protokolle: 1 Jahr</p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">7. Cookies</h2>
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

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">8. Ihre Rechte</h2>
        <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
        <ul>
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>

        <h3 className="font-[Manrope] text-xl font-bold text-[#171A21]">Auskunftsrecht (Art. 15 DSGVO)</h3>
        <p>
          Sie haben das Recht, eine Kopie aller über Sie gespeicherten Daten zu erhalten.
          So fordern Sie Ihre Daten an:
        </p>
        <ul>
          <li>E-Mail an: <a href="mailto:privacy@opticheck.io" className="text-[#2F6BFF] hover:underline">privacy@opticheck.io</a></li>
          <li>Betreff: "Auskunftsanfrage gemäß Art. 15 DSGVO"</li>
          <li>Angabe: Name und E-Mail-Adresse zur Identifikation</li>
        </ul>
        <p>Wir antworten innerhalb von 30 Tagen kostenlos.</p>

        <h3 className="font-[Manrope] text-xl font-bold text-[#171A21]">Recht auf Löschung (Art. 17 DSGVO)</h3>
        <p>
          Sie können die Löschung Ihrer Daten beantragen.
          Kontakt: <a href="mailto:privacy@opticheck.io" className="text-[#2F6BFF] hover:underline">privacy@opticheck.io</a>.
          Bearbeitungszeit: 30 Tage. Ausnahmen: Wir können die Löschung verweigern, wenn:
        </p>
        <ul>
          <li>Gesetzliche Aufbewahrungspflichten bestehen</li>
          <li>Ein aktiver Vertrag besteht</li>
          <li>Rechtliche Ansprüche anhängig sind</li>
        </ul>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">9. Internationale Datenübermittlung</h2>
        <p>
          Lead-Daten werden an Versicherungsmakler in folgenden Ländern übermittelt:
        </p>
        <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">EU/EWR: Deutschland, Österreich, Schweiz</h3>
        <p>Angemessenes Schutzniveau gemäß DSGVO.</p>
        <h3 className="font-[Manrope] text-lg font-bold text-[#171A21]">Drittländer: Australien, USA</h3>
        <p>
          Für Datenübermittlungen nach Australien und in die USA gelten EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).
          Zusätzlich werden technische Schutzmaßnahmen wie Verschlüsselung und Zugangsbeschränkungen angewendet.
        </p>
        <p>
          Dienstleister mit Sitz in den USA (Vercel, Supabase, Meta) sind entweder unter dem EU-US Data Privacy
          Framework zertifiziert oder haben EU-Standardvertragsklauseln abgeschlossen.
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">10. Datensicherheit</h2>
        <p>
          Wir verwenden innerhalb des Webseiten-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer)
          in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
          Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der
          geschlossenen Darstellung des Schlüssel- beziehungsweise Schloss-Symbols in der Statusleiste Ihres Browsers.
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">11. Beschwerderecht bei einer Aufsichtsbehörde</h2>
        <p>
          Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das
          Recht auf Beschwerde bei einer Aufsichtsbehörde zu, wenn Sie der Ansicht sind, dass die Verarbeitung
          der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt. Die zuständige Aufsichtsbehörde
          richtet sich nach dem Bundesland Ihres Wohnsitzes.
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">12. Aktualität und Änderung dieser Datenschutzerklärung</h2>
        <p>
          Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die Weiterentwicklung
          unserer Webseite und Angebote oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben
          kann es notwendig werden, diese Datenschutzerklärung zu ändern.
        </p>
      </div>
    </PageLayout>
  );
}
