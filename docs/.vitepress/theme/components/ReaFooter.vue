<script setup lang="ts">
import { Icon } from '@iconify/vue'

const items = [
  { title: 'GitHub', link: 'https://github.com/aiktb', icon: 'tabler:brand-github' },
  { title: 'Twitter', link: 'https://twitter.com/aiktb39', icon: 'tabler:brand-x' },
  { title: 'RSS Feed', link: '/feed.xml', icon: 'tabler:rss' },
]
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
          <Icon :icon="item.icon" width="1.5em" height="1.5em" />
        </a>
      </div>
      <p class="message">
        Proudly hosted with
        <a href="https://www.netlify.com/" title="Netlify">
          <span class="hidden"> Netlify </span>
          <Icon class="netlify icon" height="2em" icon="logos:netlify" />
        </a>
      </p>
      <p class="copyright">
        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a> |
        <a href="https://github.com/aiktb/Rea/blob/master/LICENSE" target="_blank">MIT License</a> |
        Copyright © 2023 <a href="mailto:hey@aiktb.com" target="_blank">aiktb</a>
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

.hidden {
  position: absolute;
  clip: rect(0, 0, 0, 0);
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
