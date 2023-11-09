<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Source {
  extension?: {
    chrome?: string
    firefox?: string
    edge?: string
  }
  website?: string
}

const props = defineProps<{
  source: Source
}>()
</script>

<template>
  <section v-if="props.source.extension" class="source">
    <a
      v-if="props.source.extension.chrome"
      :href="props.source.extension.chrome"
      target="_blank"
      title="chrome web store"
    >
      <Icon icon="tabler:brand-chrome" />
      Chrome
    </a>
    <a
      v-if="props.source.extension.firefox"
      :href="props.source.extension.firefox"
      target="_blank"
      title="Add-ons for Firefox"
    >
      <Icon icon="tabler:brand-firefox" />
      Firefox
    </a>
    <a
      v-if="props.source.extension.edge"
      :href="props.source.extension.edge"
      target="_blank"
      title="Microsoft Edge Add-ons"
    >
      <Icon icon="tabler:brand-edge" />
      Edge
    </a>
  </section>
  <section v-if="props.source.website" class="source">
    <a :href="props.source.website">
      <Icon icon="tabler:link" />
      {{ props.source.website }}
    </a>
  </section>
</template>

<style scoped>
.source {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.source a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: none;
}
</style>
