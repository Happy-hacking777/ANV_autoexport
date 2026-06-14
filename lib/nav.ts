export type PageKey =
  | "startseite"
  | "fahrzeugueberfuehrung"
  | "export"
  | "ueber-uns"
  | "kontakt"

export const NAV_ITEMS: { key: PageKey; label: string }[] = [
  { key: "startseite", label: "Startseite" },
  { key: "fahrzeugueberfuehrung", label: "Fahrzeugüberführung" },
  { key: "export", label: "Export Auto" },
  { key: "ueber-uns", label: "Über uns" },
  { key: "kontakt", label: "Kontakt" },
]
