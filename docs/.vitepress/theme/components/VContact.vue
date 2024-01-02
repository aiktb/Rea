<script setup lang="ts">
import { Icon } from '@iconify/vue'

// prettier-ignore
const items = [
  { name: 'github',message: 'aiktb', link: 'https://github.com/aiktb', icon: 'tabler:brand-github' },
  { name: 'twitter',message: '@aiktb39', link: 'https://twitter.com/aiktb39', icon: 'tabler:brand-x' },
  { name: 'email',message: 'hey@aiktb.dev', link: 'mailto:hey@aiktb.dev', icon: 'tabler:mail' },
  { name: 'telegram',message: 't.me/aiktb', link: 'https://t.me/aiktb', icon: 'tabler:brand-telegram' },
  { name: 'reddit',message: 'r/aiktb', link: 'https://reddit.com/u/aiktb', icon: 'tabler:brand-reddit' },
]
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-4">
    <a
      v-for="item of items"
      :key="item.link"
      :href="item.link"
      target="_blank"
      class="flex items-center gap-1 italic"
    >
      <Icon aria-hidden="true" :icon="item.icon" />
      <span class="sr-only">{{ item.name }}</span>
      {{ item.message }}
    </a>
  </div>
</template>
