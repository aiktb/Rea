<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { data as groupedPosts } from '../utils/blog.data'

const formatDate = (raw: string): string => {
  const date = new Date(raw)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}
</script>

<template>
  <main class="blog">
    <section>
      <h1 class="title">The Rea Blog <Icon class="icon" icon="tabler:activity" /></h1>
      <p>A technology-driven blog created by aiktb.</p>
    </section>
    <template v-for="year in Object.keys(groupedPosts)" :key="year">
      <h2>{{ year }}</h2>
      <ul>
        <li v-for="post of groupedPosts[year]" :key="post.url">
          <article class="article">
            <a :href="post.url" class="link">{{ post.title }}</a> -
            <dl>
              <dt class="hidden">Published on</dt>
              <dd>
                <time :datetime="post.date" class="time">{{ formatDate(post.date) }}</time>
              </dd>
            </dl>
          </article>
        </li>
      </ul>
    </template>
  </main>
</template>

<style scoped>
.hidden {
  position: absolute;
  padding: 0;
  margin: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
  display: inline;
}

.title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  display: inline;
  color: var(--vp-c-brand-1);
}

.article dd,
.article dl {
  margin: 0;
  display: inline;
}

.link {
  border-bottom: none !important;
}

.time {
  font-weight: bold;
}
</style>
