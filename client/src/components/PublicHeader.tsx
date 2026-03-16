/*
  PublicHeader – OptiCheck Deutschland
  Vertrauensarchitektur design system. Manrope headings, blue-to-green accents.
*/

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const WOHNGEBAUDE_CHECK_URL = "https://get.opticheck.io/wohngebaude-check";

const logoDark =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663380993655/ZmgeavQNGVXjbUckiZMcqr/optichecklogoblackbackground_275c3b11.png";

type PublicHeaderProps = {
  sticky?: boolean;
  offsetClassName?: string;
};

export default function PublicHeader({
  sticky = true,
  offsetClassName = "pt-4",
}: PublicHeaderProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [produkteOpen, setProdukteOpen] = useState(false);
  const [unternehmenOpen, setUnternehmenOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProdukteOpen(false);
    setUnternehmenOpen(false);
  }, [location]);

  return (
    <header
      className={`${sticky ? "sticky top-0" : "relative"} z-50 bg-transparent ${offsetClassName}`}
      style={{ backgroundColor: "#07234c", borderStyle: "none" }}
    >
      <div className="container">
        <div className="rounded-[1.75rem] border border-white/12 bg-[rgba(10,27,61,0.72)] px-4 py-3 shadow-[0_22px_55px_rgba(4,14,34,0.32)] backdrop-blur-xl supports-[backdrop-filter]:bg-[rgba(10,27,61,0.58)] sm:px-5 md:rounded-full md:py-3 xl:px-6">
          <div className="flex items-center justify-between gap-4 sm:gap-5">
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center gap-3 self-center">
              <img
                src={logoDark}
                alt="OptiCheck"
                className="h-10 w-auto object-contain md:h-11"
                width={176}
                height={44}
                decoding="async"
                fetchPriority="high"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center justify-center gap-1 xl:flex">
              {/* Produkte Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setHoveredDropdown("produkte")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <button className="flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] font-medium text-white/82 transition hover:bg-white/10 hover:text-white">
                  Produkte
                  <ChevronDown className={`h-3.5 w-3.5 text-white/60 transition ${hoveredDropdown === "produkte" ? "rotate-180" : ""}`} />
                </button>
                {hoveredDropdown === "produkte" && (
                  <div className="absolute left-0 top-full z-50 pt-2">
                    <div className="min-w-[280px] rounded-xl border border-white/12 bg-[#0A1B3D]/95 p-2 shadow-[0_22px_55px_rgba(4,14,34,0.5)] backdrop-blur-xl">
                      <a
                        href={WOHNGEBAUDE_CHECK_URL}
                        className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#25C685]/20 text-xs">🏠</span>
                        <div>
                          <div className="font-semibold text-white/90">Wohngebäudeversicherung</div>
                          <div className="text-xs text-[#25C685]">Jetzt verfügbar</div>
                        </div>
                      </a>
                      <Link
                        href="/krankenversicherung"
                        className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-white/50 transition hover:bg-white/5"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-500/20 text-xs">❤️</span>
                        <div>
                          <div className="font-semibold">Private Krankenversicherung</div>
                          <div className="text-xs text-amber-400/80">Bald verfügbar</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Unternehmen Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setHoveredDropdown("unternehmen")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <button className="flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] font-medium text-white/82 transition hover:bg-white/10 hover:text-white">
                  Unternehmen
                  <ChevronDown className={`h-3.5 w-3.5 text-white/60 transition ${hoveredDropdown === "unternehmen" ? "rotate-180" : ""}`} />
                </button>
                {hoveredDropdown === "unternehmen" && (
                  <div className="absolute left-0 top-full z-50 pt-2">
                    <div className="min-w-[220px] rounded-xl border border-white/12 bg-[#0A1B3D]/95 p-2 shadow-[0_22px_55px_rgba(4,14,34,0.5)] backdrop-blur-xl">
                      <Link href="/ueber-uns" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-white/76 transition hover:bg-white/10 hover:text-white">
                        Über uns
                      </Link>
                      <Link href="/karriere" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-white/76 transition hover:bg-white/10 hover:text-white">
                        Karriere
                      </Link>
                      <Link href="/partner-werden" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-white/76 transition hover:bg-white/10 hover:text-white">
                        Partner werden
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <Link href="/hilfe" className="rounded-full px-4 py-2 text-[0.95rem] font-medium text-white/82 transition hover:bg-white/10 hover:text-white">
                Hilfe & FAQ
              </Link>
              <Link href="/kontakt" className="rounded-full px-4 py-2 text-[0.95rem] font-medium text-white/82 transition hover:bg-white/10 hover:text-white">
                Kontakt
              </Link>
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex shrink-0 items-center gap-2 lg:gap-3">
              <a href={WOHNGEBAUDE_CHECK_URL} className="hidden lg:block">
                <Button className="group h-11 rounded-full bg-[#25C685] px-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,198,133,0.28)] transition hover:brightness-[1.03] hover:shadow-[0_22px_46px_rgba(37,198,133,0.36)]">
                  Wohngebäude-Check
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </Button>
              </a>

              <button
                type="button"
                aria-label={mobileMenuOpen ? "Navigation schließen" : "Navigation öffnen"}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((c) => !c)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white shadow-[0_12px_28px_rgba(4,14,34,0.26)] transition hover:bg-white/12 xl:hidden"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="mt-4 space-y-3 border-t border-white/10 pt-4 xl:hidden">
              <nav className="space-y-2">
                {/* Produkte */}
                <button
                  onClick={() => setProdukteOpen(!produkteOpen)}
                  className="flex w-full items-center justify-between rounded-[1.2rem] bg-white/6 px-4 py-3 text-left text-sm font-medium text-white/88 transition hover:bg-white/10"
                >
                  Produkte
                  <ChevronDown className={`h-4 w-4 transition ${produkteOpen ? "rotate-180" : ""}`} />
                </button>
                {produkteOpen && (
                  <div className="ml-3 space-y-1 border-l border-white/10 pl-3">
                    <a href={WOHNGEBAUDE_CHECK_URL} className="block rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                      Wohngebäudeversicherung
                    </a>
                    <Link href="/krankenversicherung" className="block rounded-lg px-3 py-2 text-sm text-white/50" onClick={() => setMobileMenuOpen(false)}>
                      Private Krankenversicherung <span className="ml-1 text-xs text-amber-400">(bald)</span>
                    </Link>
                  </div>
                )}

                {/* Unternehmen */}
                <button
                  onClick={() => setUnternehmenOpen(!unternehmenOpen)}
                  className="flex w-full items-center justify-between rounded-[1.2rem] bg-white/6 px-4 py-3 text-left text-sm font-medium text-white/88 transition hover:bg-white/10"
                >
                  Unternehmen
                  <ChevronDown className={`h-4 w-4 transition ${unternehmenOpen ? "rotate-180" : ""}`} />
                </button>
                {unternehmenOpen && (
                  <div className="ml-3 space-y-1 border-l border-white/10 pl-3">
                    <Link href="/ueber-uns" className="block rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                      Über uns
                    </Link>
                    <Link href="/karriere" className="block rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                      Karriere
                    </Link>
                    <Link href="/partner-werden" className="block rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                      Partner werden
                    </Link>
                  </div>
                )}

                <Link href="/hilfe" className="block rounded-[1.2rem] bg-white/6 px-4 py-3 text-sm font-medium text-white/88 hover:bg-white/10" onClick={() => setMobileMenuOpen(false)}>
                  Hilfe & FAQ
                </Link>
                <Link href="/kontakt" className="block rounded-[1.2rem] bg-white/6 px-4 py-3 text-sm font-medium text-white/88 hover:bg-white/10" onClick={() => setMobileMenuOpen(false)}>
                  Kontakt
                </Link>
              </nav>
              <a href={WOHNGEBAUDE_CHECK_URL} onClick={() => setMobileMenuOpen(false)}>
                <Button className="h-12 w-full rounded-[1.2rem] bg-[#25C685] text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,198,133,0.28)]">
                  Wohngebäude-Check starten
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
