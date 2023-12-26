<script setup lang="ts">
import { Icon } from '@iconify/vue'

// prettier-ignore
const items = [
  { name: 'github',message: 'aiktb', link: 'https://github.com/aiktb', icon: 'tabler:brand-github' },
  { name: 'twitter',message: '@aiktb39', link: 'https://twitter.com/aiktb39', icon: 'tabler:brand-x' },
  { name: 'email',message: 'hey@aiktb.com', link: 'mailto:hey@aiktb.com', icon: 'tabler:mail' },
  { name: 'telegram',message: 't.me/aiktb', link: 'https://t.me/aiktb', icon: 'tabler:brand-telegram' },
  { name: 'reddit',message: 'r/aiktb', link: 'https://reddit.com/u/aiktb', icon: 'tabler:brand-reddit' },
]
</script>

<template>
  <div class="contact">
    <a v-for="item of items" :key="item.link" :href="item.link" target="_blank" class="item">
      <Icon aria-hidden="true" :icon="item.icon" />
      <span class="sr-only">{{ item.name }}</span>
      {{ item.message }}
    </a>
  </div>
</template>

<style scoped>
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
  font-style: italic;
  gap: 0.25rem;
}
</style>
