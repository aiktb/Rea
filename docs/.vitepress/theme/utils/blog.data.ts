import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  url: string
  // YYYY-MM-DD
  date: string
}

declare const data: PostGroup[]
// Sorted.
export { data }

interface PostGroup {
  posts: Post[]
  year: string
}

const extractTitle = (markdown: string): string => {
  const match = markdown.match(/^# (.*)$/m)
  return match ? match[1]! : 'Not Found Title in Markdown'
}

const formatURL = (url: string): string => {
  return url.replace(/\/\d+\./, '/')
}

export default createContentLoader('blog/*.md', {
  includeSrc: true,
  render: true,
  transform: (raw) => {
    const posts: Post[] = raw
      .map((post) => {
        return {
          title: extractTitle(post.src!),
          url: formatURL(post.url),
          date: post.frontmatter.date.toISOString().slice(0, 10),
        }
      })
      .sort((a, b) => b.date.localeCompare(a.date))

    const groupedPosts: PostGroup[] = []
    let currentYear = ''
    for (const post of posts) {
      const year = post.date.slice(0, 4)
      if (year !== currentYear) {
        currentYear = year
        groupedPosts.push({ year, posts: [post] })
      } else {
        groupedPosts[groupedPosts.length - 1]!.posts.push(post)
      }
    }
    return groupedPosts
  },
})
