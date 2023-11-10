import type { Dictionary } from 'lodash'
import { groupBy } from 'lodash-es'
import { createContentLoader, type ContentData } from 'vitepress'

interface Post {
  title: string
  url: string
  date: string // YYYY-MM-DD
}

declare const data: Dictionary<Post[]>
// Sorted.
export { data }

const extractTitle = (markdown: string): string => {
  const match = markdown.match(/^# (.*)$/m)
  return match ? match[1]! : 'Not Found Title in Markdown'
}

const formatURL = (url: string): string => {
  return url.replace(/\/\d+\./, '/')
}

const transformRawPosts = (rawPosts: ContentData[]) => {
  const posts: Post[] = rawPosts
    .map((post) => ({
      title: extractTitle(post.src!),
      url: formatURL(post.url),
      date: (post.frontmatter.date as Date).toISOString().slice(0, 10),
    }))
    .sort((a, b) => b.date.localeCompare(a.date))

  return groupBy(posts, (post) => post.date.slice(0, 4))
}

export default createContentLoader('blog/*.md', {
  includeSrc: true,
  transform: (raw) => transformRawPosts(raw),
})
