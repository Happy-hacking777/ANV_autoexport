"use client"

import Image from "next/image"
import { Car, ShieldCheck, Smartphone } from "lucide-react"
import { Field, TextInput, TextArea, Select } from "@/components/form-fields"

const COMPETENCES = [
  {
    icon: Car,
    title: "Eigenachse & Fremdachse",
    text: "Überführung gefahren oder transportiert – flexible Lösungen für jedes Fahrzeug und jede Strecke.",
  },
  {
    icon: ShieldCheck,
    title: "Vollkaskoversichert",
    text: "Vollständig versichert mit zertifizierten, professionellen Überführungsfahrern.",
  },
  {
    icon: Smartphone,
    title: "Digitale Protokollierung",
    text: "Smartphone-basierte, papierlose Zustandsdokumentation und Übergaben in Echtzeit.",
  },
]

const STEPS = [
  { n: "1", title: "Anfrage & Buchung", text: "Unverbindliche Anfrage und schnelle Bestätigung." },
  { n: "2", title: "Fahrzeugabholung", text: "Termingerechte Abholung mit Zustandsaufnahme." },
  { n: "3", title: "Sicherer Transport", text: "Versicherte Überführung mit Live-Tracking." },
  { n: "4", title: "Digitale Übergabe", text: "Papierloses Übergabeprotokoll am Zielort." },
]

export function FahrzeugPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A192F] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Zuverlässige Fahrzeugüberführung für B2B-Kunden
            </h1>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-white/70">
              Deutschlandweite und europaweite Überführungen mit zertifizierten
              Fahrern, voller Versicherung und digitaler Dokumentation.
            </p>
            <a
              href="#anfrage"
              className="mt-8 inline-flex rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#0A192F] transition-opacity hover:opacity-90"
            >
              Jetzt Angebot anfordern
            </a>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
            <Image
              src="/images/chauffeur-delivery.png"
              alt="Professioneller Überführungsfahrer neben einer Premiumlimousine"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Competences */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {COMPETENCES.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0A192F]">
                <c.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#0A192F]">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-[#0A192F] sm:text-3xl">
            Unser Ablauf
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0A192F] text-xl font-bold text-white">
                  {s.n}
                </div>
                <h3 className="mt-4 font-semibold text-[#0A192F]">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
                {i < STEPS.length - 1 && (
                  <div className="absolute right-0 top-7 hidden h-0.5 w-1/2 translate-x-1/2 bg-border lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="anfrage" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-[#0A192F]">
            Angebot anfordern
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Füllen Sie das Formular aus – wir melden uns kurzfristig bei Ihnen.
          </p>
          <form
            className="mt-8 grid gap-5 sm:grid-cols-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <Field label="Firma">
              <TextInput placeholder="Ihr Unternehmen" />
            </Field>
            <Field label="Ansprechpartner">
              <TextInput placeholder="Vor- und Nachname" />
            </Field>
            <Field label="Abholort">
              <TextInput placeholder="Stadt / PLZ" />
            </Field>
            <Field label="Lieferort">
              <TextInput placeholder="Stadt / PLZ" />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Fahrzeugtyp">
                <Select defaultValue="">
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  <option>PKW</option>
                  <option>Transporter</option>
                  <option>LKW</option>
                  <option>Sonstiges</option>
                </Select>
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field label="Nachricht">
                <TextArea placeholder="Ihre Anfrage" />
              </Field>
            </div>
            <button
              type="submit"
              className="rounded-md bg-[#0A192F] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:col-span-2"
            >
              Anfrage senden
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
