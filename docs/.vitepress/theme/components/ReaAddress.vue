<script setup lang="ts">
import { Icon } from '@iconify/vue'

const items = [
  { message: 'hey@aiktb.com', link: 'mailto:hey@aiktb.com', icon: 'tabler:mail' },
  { message: '@aiktb39', link: 'https://twitter.com/aiktb39', icon: 'tabler:brand-x' },
  { message: 't.me/aiktb', link: 'https://t.me/aiktb', icon: 'tabler:brand-telegram' },
]
</script>

<template>
  <div class="address">
    <div class="contact">Contact me</div>
    <address class="items">
      <a v-for="item of items" :key="item.link" class="item" :href="item.link" target="_blank">
        <Icon :icon="item.icon" width="1.2em" height="1.2em" />
        {{ item.message }}
      </a>
    </address>
  </div>
</template>

<style scoped>
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
  gap: 4px;
}

.item:hover {
  color: var(--vp-c-text-1);
}
</style>
