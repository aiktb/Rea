<script setup lang="ts">
import { Icon } from '@iconify/vue'

import ProjectSource from './VProjectSource.vue'

const items = [
  {
    tag: 'browser extension',
    list: [
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
  },
  {
    tag: 'website',
    list: [
      {
        title: 'Rea',
        description: 'Personal blog theme developed based on VitePress.',
        github: 'https://github.com/aiktb/Rea',
        source: {
          website: 'https://aiktb.com',
        },
      },
    ],
  },
]
</script>

<template>
  <div>
    <h1 class="flex items-center gap-2">
      Projects
      <Icon class="inline text-[--vp-c-brand-1]" aria-hidden="true" icon="tabler:sparkles" />
    </h1>
    <template v-for="item of items" :key="item.tag">
      <h2 class="capitalize">{{ item.tag }}</h2>
      <template v-for="project of item.list" :key="project.github">
        <h3 class="flex items-center gap-2">
          {{ project.title }}
        </h3>
        <p>{{ project.description }}</p>
        <ProjectSource :source="project.source" />
      </template>
    </template>
  </div>
</template>
