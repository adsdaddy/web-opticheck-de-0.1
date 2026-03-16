const logoDark =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663380993655/ZmgeavQNGVXjbUckiZMcqr/optichecklogoblackbackground_275c3b11.png";

const insuranceLinks = [
  { label: "Wohngebaudeversicherung", href: "#versicherungen" },
  { label: "Kfz-Versicherung", href: "#versicherungen" },
  { label: "Haftpflichtversicherung", href: "#versicherungen" },
  { label: "Berufsunfahigkeitsversicherung", href: "#versicherungen" },
  { label: "Krankenversicherung", href: "#versicherungen" },
];

const aboutLinks = [
  { label: "Uber OptiCheck", href: "#uber-uns" },
  { label: "So funktioniert's", href: "#so-funktionierts" },
  { label: "SmartCheck", href: "#smartcheck" },
  { label: "Kontakt", href: "#kontakt" },
];

const legalLinks = [
  { label: "Impressum", href: "#impressum" },
  { label: "Datenschutzerklarung", href: "#datenschutz" },
  { label: "AGB", href: "#agb" },
  { label: "Beschwerdeverfahren", href: "#beschwerde" },
];

export default function PublicFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1836] py-14 text-white">
      <div className="container">
        {/* Top row */}
        <div className="grid gap-10 lg:grid-cols-[200px_1fr]">
          <div>
            <img src={logoDark} alt="OptiCheck" className="h-11 w-auto object-contain" />
            <p className="mt-6 text-xs text-white/62">&copy; 2026 OptiCheck Deutschland.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Versicherungen */}
            <div>
              <h2 className="font-[Manrope] text-[0.95rem] font-extrabold tracking-[-0.03em] text-[#8DC4FF]">
                Versicherungen
              </h2>
              <div className="mt-3 grid gap-1.5 text-[0.82rem] leading-6 text-white/78">
                {insuranceLinks.map((link) => (
                  <a key={link.label} href={link.href} className="transition hover:text-[#7BE0C3]">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Uber uns */}
            <div>
              <h2 className="font-[Manrope] text-[0.95rem] font-extrabold tracking-[-0.03em] text-[#8DC4FF]">
                Uber uns
              </h2>
              <div className="mt-3 grid gap-1.5 text-[0.82rem] leading-6 text-white/78">
                {aboutLinks.map((link) => (
                  <a key={link.label} href={link.href} className="transition hover:text-[#7BE0C3]">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Rechtliches */}
            <div>
              <h2 className="font-[Manrope] text-[0.95rem] font-extrabold tracking-[-0.03em] text-[#8DC4FF]">
                Rechtliches
              </h2>
              <div className="mt-3 grid gap-1.5 text-[0.82rem] leading-6 text-white/78">
                {legalLinks.map((link) => (
                  <a key={link.label} href={link.href} className="transition hover:text-[#7BE0C3]">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Unser Versprechen */}
            <div>
              <h2 className="font-[Manrope] text-[0.95rem] font-extrabold tracking-[-0.03em] text-[#8DC4FF]">
                Unser Versprechen
              </h2>
              <div className="mt-3 text-[0.78rem] leading-6 text-white/62">
                <p>
                  OptiCheck ist eine Versicherungsvergleichs- und Vermittlungsplattform, die
                  Verbrauchern in Deutschland hilft, Versicherungsoptionen zu vergleichen, ihren
                  Bedarf uber SmartCheck zu prufen und mit qualifizierten Versicherungsmaklern
                  verbunden zu werden.
                </p>
                <p className="mt-4">
                  OptiCheck bietet keine Versicherungen an, erteilt keine Finanzberatung und
                  garantiert nicht die Verfugbarkeit bestimmter Versicherungsprodukte. Wir
                  vermitteln ausschliesslich den Kontakt zu lizenzierten Maklern.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-3 text-[0.8rem] leading-6 text-white/68 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p>&copy; OptiCheck GmbH</p>
              <p>Handelsregister: HRB XXXXXX, Amtsgericht Frankfurt am Main</p>
            </div>
            <div className="flex flex-col gap-1 text-[0.82rem] text-white/88 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-3">
              <a href="#impressum" className="font-medium transition hover:text-[#7BE0C3]">
                Impressum
              </a>
              <a href="#datenschutz" className="font-medium transition hover:text-[#7BE0C3]">
                Datenschutz
              </a>
              <a href="#agb" className="font-medium transition hover:text-[#7BE0C3]">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
