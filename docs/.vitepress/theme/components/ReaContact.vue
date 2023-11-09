<script setup lang="ts">
import { Icon } from '@iconify/vue'

const items = [
  { message: 'aiktb', link: 'https://github.com/aiktb', icon: 'tabler:brand-github' },
  { message: '@aiktb39', link: 'https://twitter.com/aiktb39', icon: 'tabler:brand-twitter' },
  { message: 'hey@aiktb.com', link: 'mailto:hey@aiktb.com', icon: 'tabler:mail' },
  { message: 't.me/aiktb', link: 'https://t.me/aiktb', icon: 'tabler:brand-telegram' },
  { message: 'r/aiktb', link: 'https://reddit.com/u/aiktb', icon: 'tabler:brand-reddit' },
]
</script>

<template>
  <div class="contact">
    <a v-for="item of items" :key="item.link" :href="item.link" target="_blank" class="item">
      <Icon :icon="item.icon" />
      {{ item.message }}
    </a>
  </div>
</template>

<style scoped>
.contact {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact .item {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-style: italic;
  gap: 0.25rem;
}
</style>
