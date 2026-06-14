"use client"

import { MapPin, Mail, Phone } from "lucide-react"
import { Field, TextInput, TextArea } from "@/components/form-fields"

const DETAILS = [
  {
    icon: MapPin,
    label: "Adresse",
    lines: ["Lademannbogen 6", "22339 Hamburg, Deutschland"],
  },
  {
    icon: Mail,
    label: "E-Mail",
    lines: ["info@anv-hansekontor.de"],
  },
  {
    icon: Phone,
    label: "Telefon",
    lines: ["+49 1514 1261888"],
  },
]

export function KontaktPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-[#0A192F] sm:text-4xl">
        Kontaktieren Sie uns
      </h1>
      <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
        Wir freuen uns auf Ihre Anfrage und melden uns schnellstmöglich bei
        Ihnen zurück.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        {/* Details */}
        <div className="space-y-6">
          {DETAILS.map((d) => (
            <div
              key={d.label}
              className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0A192F]">
                <d.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0A192F]">{d.label}</h3>
                {d.lines.map((line) => (
                  <p key={line} className="text-sm text-muted-foreground">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-8">
          <form className="grid gap-5" onSubmit={(e) => e.preventDefault()}>
            <Field label="Name">
              <TextInput placeholder="Vor- und Nachname" />
            </Field>
            <Field label="E-Mail">
              <TextInput type="email" placeholder="name@firma.de" />
            </Field>
            <Field label="Telefon">
              <TextInput type="tel" placeholder="+49 ..." />
            </Field>
            <Field label="Betreff">
              <TextInput placeholder="Worum geht es?" />
            </Field>
            <Field label="Nachricht">
              <TextArea placeholder="Ihre Nachricht" rows={5} />
            </Field>
            <button
              type="submit"
              className="rounded-md bg-[#0A192F] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
