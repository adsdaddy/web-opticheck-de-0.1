/*
  PublicFooter – OptiCheck Deutschland
  Vertrauensarchitektur design system.
  Legal entity: Global Liberty Digital LLC, 1309 Coffeen Avenue, Sheridan, WY 82801, USA
*/

import { Link } from "wouter";

const WOHNGEBAUDE_CHECK_URL = "https://get.opticheck.io/wohngebaude-check";

const logoDark =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663380993655/ZmgeavQNGVXjbUckiZMcqr/optichecklogoblackbackground_275c3b11.png";

const produkteLinks = [
  { label: "Wohngebäudeversicherung", href: "/wohngebaeudeversicherung", external: false },
  { label: "Private Krankenversicherung", href: "/krankenversicherung", external: false, comingSoon: true },
];

const unternehmenLinks = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Karriere", href: "/karriere" },
  { label: "Partner werden", href: "/partner-werden" },
];

const serviceLinks = [
  { label: "Hilfe & FAQ", href: "/hilfe" },
  { label: "Kontakt", href: "/kontakt" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutzerklärung", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

export default function PublicFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1836] py-14 text-white">
      <div className="container">
        {/* Top row */}
        <div className="grid gap-10 lg:grid-cols-[200px_1fr]">
          <div>
            <Link href="/">
              <img src={logoDark} alt="OptiCheck" className="h-11 w-auto object-contain" />
            </Link>
            <p className="mt-6 text-xs text-white/62">&copy; {new Date().getFullYear()} OptiCheck.</p>
            <p className="mt-1 text-xs text-white/42">Eine Marke der Global Liberty Digital LLC</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Produkte */}
            <div>
              <h2 className="font-[Manrope] text-[0.95rem] font-extrabold tracking-[-0.03em] text-[#8DC4FF]">
                Produkte
              </h2>
              <div className="mt-3 grid gap-1.5 text-[0.82rem] leading-6 text-white/78">
                {produkteLinks.map((link) =>
                  link.external ? (
                    <a key={link.label} href={link.href} className="transition hover:text-[#7BE0C3]">
                      {link.label}
                    </a>
                  ) : (
                    <Link key={link.label} href={link.href} className="flex items-center gap-2 transition hover:text-[#7BE0C3]">
                      {link.label}
                      {link.comingSoon && (
                        <span className="rounded-full bg-amber-400/15 px-2 py-0.5 text-[10px] font-semibold text-amber-400">
                          Bald
                        </span>
                      )}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Unternehmen */}
            <div>
              <h2 className="font-[Manrope] text-[0.95rem] font-extrabold tracking-[-0.03em] text-[#8DC4FF]">
                Unternehmen
              </h2>
              <div className="mt-3 grid gap-1.5 text-[0.82rem] leading-6 text-white/78">
                {unternehmenLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="transition hover:text-[#7BE0C3]">
                    {link.label}
                  </Link>
                ))}
              </div>

              <h2 className="mt-6 font-[Manrope] text-[0.95rem] font-extrabold tracking-[-0.03em] text-[#8DC4FF]">
                Service
              </h2>
              <div className="mt-3 grid gap-1.5 text-[0.82rem] leading-6 text-white/78">
                {serviceLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="transition hover:text-[#7BE0C3]">
                    {link.label}
                  </Link>
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
                  <Link key={link.label} href={link.href} className="transition hover:text-[#7BE0C3]">
                    {link.label}
                  </Link>
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
                  Bedarf über SmartCheck zu prüfen und mit qualifizierten Versicherungsmaklern
                  verbunden zu werden.
                </p>
                <p className="mt-4">
                  OptiCheck bietet keine Versicherungen an, erteilt keine Finanzberatung und
                  garantiert nicht die Verfügbarkeit bestimmter Versicherungsprodukte. Wir
                  vermitteln ausschließlich den Kontakt zu lizenzierten Maklern.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-3 text-[0.8rem] leading-6 text-white/68 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p>OptiCheck ist eine eingetragene Marke der Global Liberty Digital LLC</p>
              <p>1309 Coffeen Avenue, Sheridan, WY 82801, USA</p>
            </div>
            <div className="flex flex-col gap-1 text-[0.82rem] text-white/88 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-3">
              <Link href="/impressum" className="font-medium transition hover:text-[#7BE0C3]">
                Impressum
              </Link>
              <Link href="/datenschutz" className="font-medium transition hover:text-[#7BE0C3]">
                Datenschutz
              </Link>
              <Link href="/agb" className="font-medium transition hover:text-[#7BE0C3]">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
