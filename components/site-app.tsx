"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CookieBanner } from "@/components/cookie-banner"
import { HomePage } from "@/components/pages/home-page"
import { FahrzeugPage } from "@/components/pages/fahrzeug-page"
import { ExportPage } from "@/components/pages/export-page"
import { UeberUnsPage } from "@/components/pages/ueber-uns-page"
import { KontaktPage } from "@/components/pages/kontakt-page"
import type { PageKey } from "@/lib/nav"

export function SiteApp() {
  const [active, setActive] = useState<PageKey>("startseite")

  const navigate = (page: PageKey) => {
    setActive(page)
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader active={active} onNavigate={navigate} />
      <main className="flex-1">
        {active === "startseite" && <HomePage onNavigate={navigate} />}
        {active === "fahrzeugueberfuehrung" && <FahrzeugPage />}
        {active === "export" && <ExportPage />}
        {active === "ueber-uns" && <UeberUnsPage onNavigate={navigate} />}
        {active === "kontakt" && <KontaktPage />}
      </main>
      <SiteFooter onNavigate={navigate} />
      <CookieBanner />
    </div>
  )
}
