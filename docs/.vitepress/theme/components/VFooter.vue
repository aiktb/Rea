<script setup lang="ts">
import { Icon } from '@iconify/vue'

// prettier-ignore
const items = [
  { title: 'GitHub', link: 'https://github.com/aiktb', icon: 'tabler:brand-github' },
  { title: 'Twitter', link: 'https://twitter.com/aiktb39', icon: 'tabler:brand-x' },
  { title: 'RSS Feed', link: '/feed.xml', icon: 'tabler:rss' },
  // { title: 'Github Sponsor', link: 'https://github.com/sponsors/aiktb', icon: 'line-md:heart-twotone' },
  { title: 'Buy me a coffee', link: 'https://www.buymeacoffee.com/aiktb', icon: 'line-md:buy-me-a-coffee-twotone' },
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
  <footer class="z-[--vp-z-index-footer] border-t border-[--vp-c-gutter] px-6 py-8">
    <div class="max-[--vp-layout-max-width] mx-auto text-center">
      <div class="mb-3 flex items-center justify-center gap-4">
        <a
          v-for="item of items"
          :key="item.link"
          :href="item.link"
          :title="item.title"
          target="_blank"
          class="transition duration-300 hover:text-[--vp-c-brand-1]"
        >
          <span class="sr-only">{{ item.title }}</span>
          <Icon :icon="item.icon" width="1.25em" height="1.25em" aria-hidden="true" />
        </a>
      </div>
      <p
        class="relative items-center justify-center gap-[1ex] text-sm/6 font-medium text-[--vp-c-text-2]"
      >
        Proudly hosted with
        <a href="https://www.netlify.com/" target="_blank">
          <span class="sr-only"> Netlify </span>
          <Icon
            class="ml-[3px] inline align-middle brightness-200 transition duration-300 hover:filter-none"
            height="2em"
            aria-hidden="true"
            icon="logos:netlify"
          />
        </a>
      </p>
      <p class="text-sm/6 font-medium text-[--vp-c-text-2]">
        <a
          class="text-[--vp-c-brand-1] transition duration-300 hover:text-[--vp-c-brand-2]"
          href="https://github.com/aiktb/Rea/blob/main/LICENSE-POST"
          target="_blank"
          >CC BY 4.0</a
        >
        |
        <a
          class="text-[--vp-c-brand-1] transition duration-300 hover:text-[--vp-c-brand-2]"
          href="https://github.com/aiktb/Rea/blob/main/LICENSE-CODE"
          target="_blank"
          >MIT License</a
        >
        <span class="block sm:inline">
          <span class="hidden sm:inline"> | </span>
          {{ generateCopyright() }}
          <a
            class="italic text-[--vp-c-brand-1] transition duration-300 hover:text-[--vp-c-brand-2]"
            href="mailto:hey@aiktb.com"
            target="_blank"
            >aiktb</a
          >
        </span>
      </p>
    </div>
  </footer>
</template>
