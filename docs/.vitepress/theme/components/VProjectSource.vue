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
  <section v-if="props.source.extension" class="flex items-center gap-4">
    <a
      v-if="props.source.extension.chrome"
      :href="props.source.extension.chrome"
      target="_blank"
      title="Chrome Web Store"
      class="flex items-center gap-2 border-none"
    >
      <Icon aria-hidden="true" icon="simple-icons:googlechrome" />
      Chrome
    </a>
    <a
      v-if="props.source.extension.firefox"
      :href="props.source.extension.firefox"
      target="_blank"
      title="Add-ons for Firefox"
      class="flex items-center gap-2 border-none"
    >
      <Icon aria-hidden="true" icon="simple-icons:firefoxbrowser" />
      Firefox
    </a>
    <a
      v-if="props.source.extension.edge"
      :href="props.source.extension.edge"
      target="_blank"
      title="Microsoft Edge Add-ons"
      class="flex items-center gap-2 border-none"
    >
      <Icon aria-hidden="true" icon="simple-icons:microsoftedge" />
      Edge
    </a>
  </section>
  <section v-if="props.source.website" class="flex items-center gap-4">
    <a :href="props.source.website" class="flex items-center gap-2 border-none">
      <Icon aria-hidden="true" icon="tabler:link" />
      {{ props.source.website }}
    </a>
  </section>
</template>
