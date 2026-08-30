export interface FieldNote {
  n: string
  tag: string
  body: string
  href?: string
}

export const notes: FieldNote[] = [
  {
    n: "001",
    tag: "principle",
    body: "A system is only as clear as the worst name in it. Renaming is refactoring — treat it with the same seriousness.",
  },
  {
    n: "002",
    tag: "experiment",
    body: "Rebuilt a data table to stream rows instead of paginating. The interesting part was not speed — it was how it changed the way people scanned the data.",
  },
  {
    n: "003",
    tag: "bookmark",
    body: "Revisiting the idea that most caching bugs are actually invalidation bugs wearing a disguise. Keeping a running log of the ones I hit.",
    href: "/writing",
  },
  {
    n: "004",
    tag: "note",
    body: "Latency budgets are a design tool, not just an SRE metric. Deciding early where the 200ms goes shapes the whole interface.",
  },
  {
    n: "005",
    tag: "principle",
    body: "Prefer boring infrastructure and interesting product. The exciting parts of a stack are rarely where the value is.",
  },
  {
    n: "006",
    tag: "experiment",
    body: "Trying to write every migration so it can be reverted without a meeting. Forward-only is a smell more often than a strategy.",
  },
]
