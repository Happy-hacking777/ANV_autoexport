"use client"

import { NAV_ITEMS, type PageKey } from "@/lib/nav"

interface SiteFooterProps {
  onNavigate: (page: PageKey) => void
}

export function SiteFooter({ onNavigate }: SiteFooterProps) {
  return (
    <footer className="mt-20 bg-[#0A192F] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-white/80">
                <span className="text-base font-bold">ANV</span>
              </div>
              <div className="leading-tight">
                <span className="block font-bold">ANV</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-white/60">
                  Hansekontor GmbH
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Ihr hanseatischer Partner für zuverlässige Fahrzeugüberführung und
              professionellen Autoexport aus Deutschland seit 2018.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => onNavigate(item.key)}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>Lademannbogen 6</li>
              <li>22339 Hamburg, Deutschland</li>
              <li>info@anv-hansekontor.de</li>
              <li>+49 1514 1261888</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <span>© {new Date().getFullYear()} ANV Hansekontor GmbH. Alle Rechte vorbehalten.</span>
          <div className="flex gap-6">
            <span>Impressum</span>
            <span>Datenschutz</span>
            <span>AGB</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
