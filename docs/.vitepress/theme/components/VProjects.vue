<script setup lang="ts">
import { Icon } from '@iconify/vue'

import ProjectSource from './VProjectSource.vue'

const items = {
  extension: [
    {
      title: 'Furigana Maker',
      description: 'Add furigana to Japanese text for any web page.',
      github: 'https://github.com/aiktb/FuriganaMaker',
      source: {
        extension: {
          chrome:
            'https://chromewebstore.google.com/detail/furigana-maker/heodojceeinbkfjfilnfminlkgbacpfp',
          firefox: 'https://addons.mozilla.org/en-US/firefox/addon/furigana-maker/',
          edge: 'https://microsoftedge.microsoft.com/addons/detail/furigana-maker/kohpoklaaeicnkdapjkmljdachedmbbi',
        },
      },
    },
    {
      title: "Don't Translate Code",
      description: "Don't translate code blocks on the pages, keep them elegant!",
      github: 'https://github.com/aiktb/DontTranslateCode',
      source: {
        extension: {
          chrome:
            'https://chromewebstore.google.com/detail/dont-translate-code/bihlkngkifdjdlbikeaihecbblmedjjp',
          firefox: 'https://addons.mozilla.org/firefox/addon/dont-translate-code/',
          edge: 'https://microsoftedge.microsoft.com/addons/detail/dont-translate-code/pccanfkogfldicdbgljbnopmdghokjmo',
        },
      },
    },
  ],
  website: [
    {
      title: 'Rea',
      description: 'Personal blog theme developed based on VitePress.',
      github: 'https://github.com/aiktb/Rea',
      source: {
        website: 'https://aiktb.com',
      },
    },
  ],
}
</script>

<template>
  <div class="projects">
    <h1 class="title">
      Projects
      <Icon class="icon" aria-hidden="true" icon="tabler:sparkles" />
    </h1>
    <h2>Browser Extension</h2>
    <template v-for="item of items.extension" :key="item.github">
      <h3 class="title">
        {{ item.title }}
      </h3>
      <p>{{ item.description }}</p>
      <ProjectSource :source="item.source" />
    </template>
    <h2>Website</h2>
    <template v-for="item of items.website" :key="item.github">
      <h3 class="title">
        {{ item.title }}
      </h3>
      <p>{{ item.description }}</p>
      <ProjectSource :source="item.source"
    /></template>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  display: inline;
  color: var(--vp-c-brand-1);
}

.projects a {
  border-bottom: none !important;
}
</style>
