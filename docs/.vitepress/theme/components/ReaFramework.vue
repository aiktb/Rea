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
  <div class="framework">
    <a v-for="item of items" :key="item.link" :href="item.link" :title="item.title" target="_blank">
      <Icon
        :icon="item.icon"
        :width="item.title === 'Golang' ? '3.5em' : '2em'"
        :height="item.title === 'Golang' ? '3.5em' : '2em'"
      />
    </a>
  </div>
</template>

<style scoped>
.framework {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.framework a {
  /* Conflicts with `.vp-doc a`. */
  border-bottom: none;
}
</style>
