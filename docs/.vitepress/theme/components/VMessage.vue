<script setup lang="ts">
import { Icon } from '@iconify/vue'

//prettier-ignore
const messages = [
  {
    title: 'Support me',
    items: [
      // { name: 'Github Sponsor', link:'https://github.com/sponsors/aiktb', icon: 'line-md:heart-twotone' },
      { message: 'Buy Me a Coffee', link: 'https://www.buymeacoffee.com/aiktb', icon: 'line-md:buy-me-a-coffee-twotone' },
    ],
  },
  {
    title: 'Contact me',
    items: [
      { message: 'hey@aiktb.com', link: 'mailto:hey@aiktb.com', icon: 'tabler:mail' },
      { message: '@aiktb39', link: 'https://twitter.com/aiktb39', icon: 'tabler:brand-x' },
      { message: 't.me/aiktb', link: 'https://t.me/aiktb', icon: 'tabler:brand-telegram' },
    ],
  },
]
</script>

<template>
  <section v-for="message of messages" :key="message.title" class="mt-3 pl-4 text-[13px]/7">
    <div class="font-bold capitalize" role="heading" aria-level="2">{{ message.title }}</div>
    <address class="flex flex-col text-[--vp-c-text-2]">
      <a
        v-for="item of message.items"
        :key="item.link"
        class="flex items-center gap-1.5 hover:text-[--vp-c-text-1]"
        :href="item.link"
        target="_blank"
      >
        <Icon :icon="item.icon" width="1.25em" height="1.25em" aria-hidden="true" />
        {{ item.message }}
      </a>
    </address>
  </section>
</template>
