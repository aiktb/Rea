<script setup lang="ts">
import { Icon } from '@iconify/vue'

// prettier-ignore
const items = [
  { name: 'email',message: 'hey@aiktb.com', link: 'mailto:hey@aiktb.com', icon: 'tabler:mail' },
  { name: 'twitter',message: '@aiktb39', link: 'https://twitter.com/aiktb39', icon: 'tabler:brand-x' },
  { name: 'telegram',message: 't.me/aiktb', link: 'https://t.me/aiktb', icon: 'tabler:brand-telegram' },
]
</script>

<template>
  <div class="address">
    <div class="contact">Contact me</div>
    <address class="items">
      <a v-for="item of items" :key="item.link" class="item" :href="item.link" target="_blank">
        <Icon :icon="item.icon" width="1.25em" height="1.25em" aria-hidden="true" />
        <span class="sr-only">{{ item.name }}</span>
        {{ item.message }}
      </a>
    </address>
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

.address {
  margin-top: 1rem;
  padding-left: 1rem;
  font-size: 13px;
  line-height: 28px;
}

.contact {
  font-weight: bold;
}

.items {
  display: flex;
  flex-direction: column;
  color: var(--vp-c-text-2);
}

.item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.item:hover {
  color: var(--vp-c-text-1);
}
</style>
