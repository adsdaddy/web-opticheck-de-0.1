import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const logoDark =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663380993655/ZmgeavQNGVXjbUckiZMcqr/optichecklogoblackbackground_275c3b11.png";

type NavItem = {
  label: string;
  href?: string;
  children?: Array<{ label: string; href: string }>;
};

const primaryNav: NavItem[] = [
  {
    label: "Versicherungen",
    href: "#versicherungen",
    children: [
      { label: "Wohngebaudeversicherung", href: "#versicherungen" },
      { label: "Kfz-Versicherung", href: "#versicherungen" },
      { label: "Haftpflichtversicherung", href: "#versicherungen" },
      { label: "Berufsunfahigkeitsversicherung", href: "#versicherungen" },
      { label: "Krankenversicherung", href: "#versicherungen" },
    ],
  },
  { label: "So funktioniert's", href: "#so-funktionierts" },
  { label: "SmartCheck", href: "#smartcheck" },
  { label: "Uber uns", href: "#uber-uns" },
];

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
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setMobileMenuOpen(false);
    setExpandedItems({});
  }, [location]);

  const toggleExpanded = (label: string) => {
    setExpandedItems((current) => ({
      ...current,
      [label]: !current[label],
    }));
  };

  return (
    <header
      className={`${sticky ? "sticky top-0" : "relative"} z-50 bg-transparent ${offsetClassName}`}
      style={{ backgroundColor: "#07234c", borderStyle: "none" }}
    >
      <div className="container">
        <div className="rounded-[1.75rem] border border-white/12 bg-[rgba(10,27,61,0.72)] px-4 py-3 shadow-[0_22px_55px_rgba(4,14,34,0.32)] backdrop-blur-xl supports-[backdrop-filter]:bg-[rgba(10,27,61,0.58)] sm:px-5 md:rounded-full md:py-3 xl:px-6">
          <div className="flex items-center justify-between gap-4 sm:gap-5">
            <Link
              href="/"
              className="flex shrink-0 items-center gap-3 self-center"
            >
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
              {primaryNav.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const sharedClassName =
                  "rounded-full px-4 py-2 text-[0.95rem] font-medium transition text-white/82 hover:bg-white/10 hover:text-white";

                if (hasChildren) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setHoveredDropdown(item.label)}
                      onMouseLeave={() => setHoveredDropdown(null)}
                    >
                      <div className="flex items-center">
                        <a href={item.href} className={sharedClassName}>
                          {item.label}
                        </a>
                        <ChevronDown
                          className={`-ml-1 h-3.5 w-3.5 text-white/60 transition ${hoveredDropdown === item.label ? "rotate-180" : ""}`}
                        />
                      </div>

                      {hoveredDropdown === item.label && (
                        <div className="absolute left-0 top-full z-50 pt-2">
                          <div className="min-w-[260px] rounded-xl border border-white/12 bg-[#0A1B3D]/95 p-2 shadow-[0_22px_55px_rgba(4,14,34,0.5)] backdrop-blur-xl">
                            {item.children?.map((child) => (
                              <a
                                key={child.label}
                                href={child.href}
                                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-white/76 transition hover:bg-white/10 hover:text-white"
                              >
                                {child.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a key={item.label} href={item.href} className={sharedClassName}>
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="flex shrink-0 items-center gap-2 lg:gap-3">
              <a href="#smartcheck" className="hidden lg:block">
                <Button className="h-11 rounded-full bg-[#25C685] px-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,198,133,0.28)] transition hover:brightness-[1.03] hover:shadow-[0_22px_46px_rgba(37,198,133,0.36)]">
                  SmartCheck starten
                </Button>
              </a>

              <button
                type="button"
                aria-label={mobileMenuOpen ? "Navigation schliessen" : "Navigation offnen"}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((current) => !current)}
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
                {primaryNav.map((item) => {
                  const hasChildren = Boolean(item.children?.length);
                  const isExpanded = expandedItems[item.label] ?? false;

                  return (
                    <div key={item.label} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <a
                          href={item.href}
                          className="flex w-full items-center justify-between rounded-[1.2rem] bg-white/6 px-4 py-3 text-left text-sm font-medium text-white/88 transition hover:bg-white/10 hover:text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                        {hasChildren && (
                          <button
                            type="button"
                            onClick={() => toggleExpanded(item.label)}
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/6 text-white/70"
                          >
                            <ChevronDown className={`h-4 w-4 transition ${isExpanded ? "rotate-180" : ""}`} />
                          </button>
                        )}
                      </div>
                      {hasChildren && isExpanded && (
                        <div className="ml-3 space-y-1 border-l border-white/10 pl-3">
                          {item.children?.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="block rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/8 hover:text-white"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
              <a href="#smartcheck" onClick={() => setMobileMenuOpen(false)}>
                <Button className="h-12 w-full rounded-[1.2rem] bg-[#25C685] text-sm font-semibold text-white shadow-[0_18px_40px_rgba(37,198,133,0.28)]">
                  SmartCheck starten
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
