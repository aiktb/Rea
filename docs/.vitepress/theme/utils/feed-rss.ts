import { writeFileSync } from 'fs'
import path from 'path'
import { Feed } from 'feed'
import { createContentLoader, type ContentData, type SiteConfig } from 'vitepress'

const id: string = 'aiktb'
const baseUrl: string = `https://${id}.com`
type RssGenerator = (config: SiteConfig) => Promise<void>
export const feed: RssGenerator = async (config) => {
  const feed: Feed = new Feed({
    language: 'en-US',
    title: `${id}'s blog`,
    description: 'A technology-driven blog created by aiktb.',
    id: baseUrl,
    link: baseUrl,
    image: `${baseUrl}/social-preview.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `Copyright (c) 2023-present ${id}`,
  })

  const posts: ContentData[] = await createContentLoader('blog/*.md', {
    excerpt: true,
    render: true,
    transform: (rawData) => {
      return rawData.sort((a, b) => {
        return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
      })
    },
  }).load()

  for (const { url, excerpt, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title as string,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: excerpt as string,
      content: html as string,
      author: [{ name: `${id}` }],
      date: frontmatter.date,
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.xml'), feed.rss2())
}
