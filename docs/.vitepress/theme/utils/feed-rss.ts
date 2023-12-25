import { writeFileSync } from 'fs'
import path from 'path'
import { Feed } from 'feed'
import { createContentLoader, type ContentData, type SiteConfig } from 'vitepress'

const id: string = 'aiktb'
const baseUrl: string = `https://${id}.com`
type RssGenerator = (config: SiteConfig) => Promise<void>
export const feed: RssGenerator = async (config) => {
  const feed: Feed = new Feed({
    id: baseUrl,
    title: `${id}'s blog`,
    language: 'en-US',
    author: { name: `${id}`, email: 'hey@aiktb.com', link: 'https://github.com/aiktb' },
    link: baseUrl,
    description: 'A technology-driven blog created by aiktb.',
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

  for (const { url, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title as string,
      id: `${baseUrl}${url.replace(/\/\d+\./, '/')}`,
      link: `${baseUrl}${url.replace(/\/\d+\./, '/')}`,
      date: frontmatter.date,
      content: html!,
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.xml'), feed.rss2())
}
