"use client"

import Image from "next/image"
import { FileCheck, Network, Receipt, Building2 } from "lucide-react"
import { Field, TextInput, TextArea, Select } from "@/components/form-fields"

const SERVICES = [
  {
    icon: FileCheck,
    title: "Zoll & Dokumente",
    text: "Abwicklung von Exportanmeldungen, EUR.1-Warenverkehrsbescheinigungen und Ausfuhrkennzeichen.",
  },
  {
    icon: Network,
    title: "Logistik-Netzwerk",
    text: "Nahtloser RoRo-Versand, Containertransport und Überland-Routen mit Tracking.",
  },
  {
    icon: Receipt,
    title: "MwSt. Rückerstattung",
    text: "Sichere Umsatzsteuer-Rückerstattung für qualifizierte internationale B2B-Käufer.",
  },
  {
    icon: Building2,
    title: "Großkunden-Service",
    text: "Skalierbare Exportlösungen für internationale Händler und gewerbliche Flotten.",
  },
]

const REGIONS = ["EU", "Naher Osten", "Zentralasien", "Afrika", "Weitere Regionen"]

export function ExportPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A192F] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Professioneller Autoexport aus Deutschland weltweit
            </h1>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-white/70">
              Von der Zollabwicklung bis zur Verschiffung – Ihr Partner für den
              sicheren und transparenten Fahrzeugexport.
            </p>
            <a
              href="#export-anfrage"
              className="mt-8 inline-flex rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#0A192F] transition-opacity hover:opacity-90"
            >
              Export-Anfrage starten
            </a>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
            <Image
              src="/images/car-export-port.png"
              alt="Exportfahrzeuge und Container im Hafen"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2x2 services */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="flex gap-5 rounded-xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0A192F]">
                <s.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0A192F]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Network + form */}
      <section
        id="export-anfrage"
        className="bg-secondary py-16"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#0A192F] sm:text-3xl">
              Destination Network
            </h2>
            <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
              Wir bedienen die wichtigsten Exportregionen weltweit – mit
              etablierten Partnern in jeder Zielregion:
            </p>
            <ul className="mt-6 space-y-3">
              {REGIONS.map((r) => (
                <li key={r} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#0A192F]" />
                  <span className="text-sm font-medium text-foreground">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-[#0A192F]">Export-Anfrage</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Teilen Sie uns Ihre Exportanforderungen mit.
            </p>
            <form
              className="mt-6 grid gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <Field label="Firma">
                <TextInput placeholder="Ihr Unternehmen" />
              </Field>
              <Field label="Zielland">
                <TextInput placeholder="z. B. Kasachstan" />
              </Field>
              <Field label="Anzahl der Fahrzeuge">
                <TextInput type="number" min={1} placeholder="z. B. 10" />
              </Field>
              <Field label="Benötigte Zolldienste">
                <Select defaultValue="">
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  <option>Exportanmeldung</option>
                  <option>EUR.1</option>
                  <option>Ausfuhrkennzeichen</option>
                  <option>Komplettpaket</option>
                </Select>
              </Field>
              <Field label="Nachricht">
                <TextArea placeholder="Ihre Anfrage" />
              </Field>
              <button
                type="submit"
                className="rounded-md bg-[#0A192F] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Export-Anfrage senden
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
