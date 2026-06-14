"use client"

import type { PageKey } from "@/lib/nav"

interface UeberUnsPageProps {
  onNavigate: (page: PageKey) => void
}

const METRICS = [
  { value: "100%", label: "Pünktlichkeit" },
  { value: "Sichere", label: "Abwicklung" },
  { value: "Seit 2018", label: "Erfahrenes Team" },
]

const PARTNERS = ["ONLOGIST", "ADAC", "Europcar", "Miles"]

export function UeberUnsPage({ onNavigate }: UeberUnsPageProps) {
  return (
    <div>
      <section className="bg-[#0A192F] py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Ihr Hanseatischer Partner in der Automobillogistik
          </h1>
        </div>
      </section>

      {/* Mission split */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#0A192F]">Unsere Mission</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Mit Fokus auf deutsche Qualitätsstandards verbinden wir
              Zuverlässigkeit, Präzision und Pünktlichkeit. Wir stehen für
              transparente B2B-Kommunikation und eine partnerschaftliche
              Zusammenarbeit auf Augenhöhe.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#0A192F]">Unsere Vision</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Wir fokussieren uns auf deutsche Qualitätsstandards und
              hanseatische Verlässlichkeit – mit transparenten Prozessen und
              langfristigen Geschäftsbeziehungen, die auf Vertrauen basieren.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-y border-border bg-secondary py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 text-center sm:grid-cols-3 sm:px-6 lg:px-8">
          {METRICS.map((m) => (
            <div key={m.label}>
              <div className="text-4xl font-bold tracking-tight text-[#0A192F] lg:text-5xl">
                {m.value}
              </div>
              <div className="mt-2 text-lg font-medium text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-[#0A192F]">
          Vertraut von den Marktführern
        </h2>
        <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted-foreground">
          Wir arbeiten aktiv mit führenden Plattformen und gewerblichen
          Mietwagenflotten zusammen – darunter ONLOGIST, ADAC und Europcar.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {PARTNERS.map((p) => (
            <div
              key={p}
              className="flex h-24 items-center justify-center rounded-lg border border-border bg-secondary"
            >
              <span className="text-lg font-semibold tracking-tight text-muted-foreground">
                {p}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A192F] py-14 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Bereit für die Zusammenarbeit?
          </h2>
          <button
            onClick={() => onNavigate("kontakt")}
            className="mt-6 inline-flex rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#0A192F] transition-opacity hover:opacity-90"
          >
            Kontaktieren Sie uns
          </button>
        </div>
      </section>
    </div>
  )
}
