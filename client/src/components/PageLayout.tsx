/*
  PageLayout – Shared wrapper for all subpages.
  Dark header, white content area, dark footer.
*/

import PublicHeader from "@/components/PublicHeader";
import PublicFooter from "@/components/PublicFooter";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export default function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white font-[Inter] text-[#171A21]">
      <PublicHeader offsetClassName="pt-0" />

      {/* Page Hero */}
      <section className="relative bg-[#081B3D] pb-16 pt-12 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,107,255,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(37,198,133,0.10),transparent_36%)]" />
        <div className="container relative">
          <h1 className="font-[Manrope] text-4xl font-extrabold tracking-[-0.04em] md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/72">{subtitle}</p>
          )}
        </div>
      </section>

      {/* Content */}
      <main className="py-16 md:py-20">
        <div className="container max-w-4xl">
          {children}
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
