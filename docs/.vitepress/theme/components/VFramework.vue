<script setup lang="ts">
import { Icon } from '@iconify/vue'

const items = [
  { title: 'TypeScript', link: 'https://www.typescriptlang.org', icon: 'simple-icons:typescript' },
  { title: 'Vite', link: 'https://vitejs.dev', icon: 'simple-icons:vite' },
  { title: 'Vue', link: 'https://vuejs.org', icon: 'simple-icons:vuedotjs' },
  { title: 'React', link: 'https://react.dev', icon: 'simple-icons:react' },
  { title: 'Tailwind', link: 'https://tailwindcss.com/', icon: 'simple-icons:tailwindcss' },
  { title: 'Golang', link: 'https://go.dev', icon: 'simple-icons:go' },
]
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-4">
    <a
      v-for="item of items"
      :key="item.link"
      :href="item.link"
      :title="item.title"
      target="_blank"
      class="border-none"
    >
      <Icon
        :icon="item.icon"
        :width="item.title === 'Golang' ? '3.5em' : '2em'"
        :height="item.title === 'Golang' ? '3.5em' : '2em'"
        aria-hidden="true"
      />
      <span class="sr-only">{{ item.title }}</span>
    </a>
  </div>
</template>
