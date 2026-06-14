"use client"

import { useEffect, useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { NAV_ITEMS, type PageKey } from "@/lib/nav"
import { cn } from "@/lib/utils"

interface SiteHeaderProps {
  active: PageKey
  onNavigate: (page: PageKey) => void
}

export function SiteHeader({ active, onNavigate }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [menuOpen])

  const handleNavigate = (page: PageKey) => {
    onNavigate(page)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0A192F] text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <button
          onClick={() => handleNavigate("startseite")}
          className="flex items-center gap-2.5 text-left sm:gap-3"
          aria-label="Zur Startseite"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-white/80 sm:h-11 sm:w-11">
            <span className="text-base font-bold tracking-tight sm:text-lg">ANV</span>
          </div>
          <div className="leading-tight">
            <span className="block text-base font-bold tracking-wide sm:text-lg">ANV</span>
            <span className="block text-[10px] font-light uppercase tracking-[0.18em] text-white/70 sm:text-[11px] sm:tracking-[0.2em]">
              Hansekontor GmbH
            </span>
          </div>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavigate(item.key)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors",
                active === item.key
                  ? "text-white"
                  : "text-white/60 hover:text-white",
              )}
            >
              {item.label}
              {active === item.key && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-white" />
              )}
            </button>
          ))}
          <a
            href="tel:+4940000000"
            className="ml-3 flex h-10 w-10 items-center justify-center rounded-md bg-white text-[#0A192F] transition-opacity hover:opacity-90"
            aria-label="Anrufen"
          >
            <Phone className="h-4 w-4" />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/30 lg:hidden"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 z-40 flex flex-col bg-[#0A192F] lg:hidden"
          style={{ height: "calc(100dvh - 4rem)" }}
        >
          <nav className="flex flex-col gap-1 px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigate(item.key)}
                className={cn(
                  "rounded-lg px-4 py-4 text-left text-base font-medium transition-colors",
                  active === item.key
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-auto border-t border-white/10 p-4">
            <a
              href="tel:+4940000000"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-[#0A192F]"
            >
              <Phone className="h-4 w-4" />
              Jetzt anrufen
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
