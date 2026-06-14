"use client"

import { useEffect, useState } from "react"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    const consent =
      typeof window !== "undefined"
        ? window.localStorage.getItem("anv-cookie-consent")
        : "true"
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    setHiding(true)
    window.localStorage.setItem("anv-cookie-consent", "accepted")
    setTimeout(() => setVisible(false), 350)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      className={`fixed inset-x-0 bottom-0 z-50 transition-all duration-300 ${
        hiding ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="mx-auto mb-4 max-w-4xl px-4">
        <div className="flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-2xl sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu
            verbessern. Mit dem Klick auf {"'Alle akzeptieren'"} stimmen Sie der
            Verwendung zu.
          </p>
          <div className="flex w-full shrink-0 gap-3 sm:w-auto">
            <button
              onClick={accept}
              className="flex-1 rounded-md bg-[#0A192F] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:flex-none"
            >
              Alle akzeptieren
            </button>
            <button
              onClick={accept}
              className="flex-1 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent sm:flex-none"
            >
              Einstellungen
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
