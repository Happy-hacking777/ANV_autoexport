"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { PageKey } from "@/lib/nav"

interface HomePageProps {
  onNavigate: (page: PageKey) => void
}

const CLIENTS = ["ONLOGIST", "ADAC", "Europcar", "Hertz", "Choice", "Miles"]

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-6 lg:grid-cols-2">
        <PreviewCard
          title="Fahrzeugüberführung"
          image="/images/vehicle-transfer.png"
          alt="Fahrzeugtransporter mit Premiumfahrzeugen auf der Autobahn"
          primaryLabel="Jetzt anfragen"
          secondaryLabel="Mehr erfahren"
          onClick={() => onNavigate("fahrzeugueberfuehrung")}
        />
        <PreviewCard
          title="Export Auto Von Deutschland"
          image="/images/car-export-port.png"
          alt="Exportfahrzeuge und Container im Hafen"
          primaryLabel="Zum Export"
          secondaryLabel="Unsere Märkte"
          onClick={() => onNavigate("export")}
        />
      </div>

      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#0A192F] sm:text-4xl">
          Unsere Kunden
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CLIENTS.map((name) => (
            <div
              key={name}
              className="flex h-24 items-center justify-center rounded-lg border border-border bg-secondary"
            >
              <span className="text-lg font-semibold tracking-tight text-muted-foreground">
                {name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function PreviewCard({
  title,
  image,
  alt,
  primaryLabel,
  secondaryLabel,
  onClick,
}: {
  title: string
  image: string
  alt: string
  primaryLabel: string
  secondaryLabel: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="px-6 pb-4 pt-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-[#0A192F] sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className="relative mx-6 aspect-[16/9] overflow-hidden rounded-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-wrap gap-3 p-6">
        <span className="inline-flex items-center gap-2 rounded-md bg-[#0A192F] px-5 py-2.5 text-sm font-semibold text-white">
          {secondaryLabel}
        </span>
        <span className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors group-hover:border-[#0A192F]">
          {primaryLabel}
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </button>
  )
}
