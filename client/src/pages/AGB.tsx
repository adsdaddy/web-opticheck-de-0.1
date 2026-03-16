import PageLayout from "@/components/PageLayout";
import { useEffect } from "react";

export default function AGB() {
  useEffect(() => {
    document.title = "Allgemeine Geschäftsbedingungen | OptiCheck Deutschland";
  }, []);

  return (
    <PageLayout title="Allgemeine Geschäftsbedingungen" subtitle="Nutzungsbedingungen für die OptiCheck-Plattform">
      <div className="prose prose-lg max-w-none text-[#3A4A5D]">
        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">§ 1 Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der Webseite opticheck.io
          und der darüber angebotenen Dienstleistungen der Global Liberty Digital LLC, 1309 Coffeen Avenue,
          Sheridan, WY 82801, USA (nachfolgend "OptiCheck" oder "wir").
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">§ 2 Leistungsbeschreibung</h2>
        <p>
          OptiCheck betreibt eine digitale Plattform zur Vermittlung von Versicherungsanfragen. Über den
          sogenannten "SmartCheck" können Verbraucher ihre Versicherungssituation analysieren lassen und
          werden anschließend an qualifizierte, lizenzierte Versicherungsmakler vermittelt.
        </p>
        <p>
          OptiCheck ist weder Versicherungsgesellschaft noch Versicherungsmakler. OptiCheck erteilt keine
          Versicherungsberatung, schließt keine Versicherungsverträge ab und erhält keine Provisionen von
          Versicherungsgesellschaften.
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">§ 3 Nutzung der Plattform</h2>
        <p>
          Die Nutzung der OptiCheck-Plattform ist für Verbraucher kostenlos. Durch die Nutzung des SmartCheck
          und die Übermittlung Ihrer Daten erklären Sie sich damit einverstanden, dass Ihre Angaben an einen
          geeigneten Versicherungsmakler weitergeleitet werden.
        </p>
        <p>
          Sie verpflichten sich, bei der Nutzung der Plattform wahrheitsgemäße und vollständige Angaben zu machen.
          Falsche oder irreführende Angaben können zum Ausschluss von der Nutzung führen.
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">§ 4 Vermittlung an Makler</h2>
        <p>
          Nach Abschluss des SmartCheck wird Ihre Anfrage an einen oder mehrere qualifizierte Versicherungsmakler
          weitergeleitet. Der Makler wird sich in der Regel innerhalb weniger Stunden mit Ihnen in Verbindung setzen.
        </p>
        <p>
          OptiCheck übernimmt keine Gewähr für die Qualität der Beratung durch den vermittelten Makler, die
          Verfügbarkeit bestimmter Versicherungsprodukte oder den Abschluss eines Versicherungsvertrages.
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">§ 5 Haftung</h2>
        <p>
          OptiCheck haftet nicht für Schäden, die aus der Nutzung der Plattform oder der Vermittlung an einen
          Versicherungsmakler entstehen, es sei denn, diese beruhen auf vorsätzlichem oder grob fahrlässigem
          Verhalten von OptiCheck.
        </p>
        <p>
          OptiCheck haftet insbesondere nicht für:
        </p>
        <ul>
          <li>Die Richtigkeit, Vollständigkeit oder Aktualität der auf der Plattform bereitgestellten Informationen</li>
          <li>Die Qualität der Beratung durch vermittelte Makler</li>
          <li>Den Abschluss oder die Konditionen von Versicherungsverträgen</li>
          <li>Technische Störungen oder Ausfälle der Plattform</li>
        </ul>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">§ 6 Datenschutz</h2>
        <p>
          Die Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten erfolgt gemäß unserer{" "}
          <a href="/datenschutz" className="text-[#2F6BFF] hover:underline">Datenschutzerklärung</a>.
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">§ 7 Änderungen der AGB</h2>
        <p>
          OptiCheck behält sich das Recht vor, diese AGB jederzeit zu ändern. Die jeweils aktuelle Version
          ist auf unserer Webseite einsehbar. Durch die fortgesetzte Nutzung der Plattform nach Änderung
          der AGB erklären Sie sich mit den geänderten Bedingungen einverstanden.
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">§ 8 Anwendbares Recht und Gerichtsstand</h2>
        <p>
          Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gerichtsstand
          ist, soweit gesetzlich zulässig, der Sitz des Betreibers.
        </p>

        <h2 className="font-[Manrope] text-2xl font-bold text-[#171A21]">§ 9 Salvatorische Klausel</h2>
        <p>
          Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so wird dadurch die Wirksamkeit
          der übrigen Bestimmungen nicht berührt. An die Stelle der unwirksamen Bestimmung tritt eine wirksame
          Bestimmung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
        </p>

        <p className="mt-8 text-sm text-[#6B7B90]">
          Stand: März 2026
        </p>
      </div>
    </PageLayout>
  );
}
