<script setup lang="ts">
import { Icon } from '@iconify/vue'

const items = [
  { title: 'GitHub', link: 'https://github.com/aiktb', icon: 'tabler:brand-github' },
  { title: 'Twitter', link: 'https://twitter.com/aiktb39', icon: 'tabler:brand-x' },
  { title: 'RSS Feed', link: '/feed.xml', icon: 'tabler:rss' },
]

const generateCopyright = () => {
  const startYear = 2023
  const currentYear = new Date().getFullYear()
  if (currentYear === startYear) {
    return `Copyright © ${startYear}`
  }
  return `Copyright © ${startYear}-${currentYear}`
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="icons">
        <a
          v-for="item of items"
          :key="item.link"
          :href="item.link"
          :title="item.title"
          target="_blank"
        >
          <span class="sr-only">{{ item.title }}</span>
          <Icon :icon="item.icon" width="1.5em" height="1.5em" aria-hidden="true" />
        </a>
      </div>
      <p class="message">
        Proudly hosted with
        <a href="https://www.netlify.com/" target="_blank">
          <span class="sr-only"> Netlify </span>
          <Icon class="netlify icon" height="2em" aria-hidden="true" icon="logos:netlify" />
        </a>
      </p>
      <p class="copyright">
        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a> |
        <a href="https://github.com/aiktb/Rea/blob/main/LICENSE" target="_blank">MIT License</a>
        <span class="copyright-info">
          <span class="divider"> | </span> {{ generateCopyright() }}
          <a class="name" href="mailto:hey@aiktb.com" target="_blank">aiktb</a>
        </span>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 24px;
}

.container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  text-align: center;
}

.message {
  position: relative;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  align-items: center;
  justify-content: center;
  gap: 1ex;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.netlify.icon {
  display: inline;
  vertical-align: middle;
  margin-left: 3px;
  transition: all 300ms;
  filter: brightness(250%);
}

.netlify.icon:hover {
  filter: none;
}

.copyright {
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.divider {
  display: none;
}

.copyright-info {
  display: block;
}

.name {
  font-style: italic;
}

@media (min-width: 500px) {
  .divider {
    display: inline;
  }

  .copyright-info {
    display: inline;
  }
}

.icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.icons a:hover {
  color: var(--vp-c-brand-1);
  transition: all 300ms;
}

.copyright a {
  color: var(--vp-c-brand-1);
}

.copyright a:hover {
  color: var(--vp-c-brand-2);
  transition: all 300ms;
}
</style>
