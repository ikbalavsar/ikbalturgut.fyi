import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import type { APIContext } from "astro"
import { site } from "@/config"

export async function GET(context: APIContext) {
  const writing = (await getCollection("writing", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  )

  return rss({
    title: "Ikbal Turgut — Writing",
    description: site.tagline,
    site: context.site ?? site.url,
    items: writing.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: `/writing/${entry.id}/`,
      categories: [entry.data.tag],
    })),
    customData: `<language>en-us</language>`,
  })
}
