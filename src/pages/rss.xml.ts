import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import type { APIContext } from "astro"
import { site } from "@/config"

export async function GET(context: APIContext) {
  const writing = (await getCollection("writing", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  )
  const notes = (await getCollection("notes", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  )

  return rss({
    title: "Ikbal Turgut — Writing",
    description: site.tagline,
    site: context.site ?? site.url,
    items: [
      ...writing.map((entry) => ({
        title: entry.data.title,
        description: entry.data.description,
        pubDate: entry.data.date,
        link: `/writing/${entry.id}/`,
        categories: [entry.data.tag],
      })),
      ...notes.map((entry) => ({
        title: entry.data.title,
        description: entry.data.summary,
        pubDate: entry.data.date,
        link: `/notes/${entry.id}/`,
        categories: [entry.data.tag],
      })),
    ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime()),
    customData: `<language>en-us</language>`,
  })
}
