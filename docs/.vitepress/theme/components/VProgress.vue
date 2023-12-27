<script setup lang="ts">
import { useData } from 'vitepress'
import { onMounted, onUnmounted, ref } from 'vue'

const { frontmatter } = useData()
const scrollPosition = ref(0)
const pageHeight = ref(0)
const scrollPercentage = ref(0)

function updateProgress() {
  scrollPosition.value = window.scrollY
  pageHeight.value = document.documentElement.scrollHeight - document.documentElement.clientHeight
  scrollPercentage.value = (scrollPosition.value / pageHeight.value) * 100
}
onMounted(() => {
  window.addEventListener('scroll', updateProgress)
})

onUnmounted(() => {
  window.addEventListener('scroll', updateProgress)
})
</script>

<template>
  <Teleport v-if="frontmatter.progress !== false" to="body">
    <progress
      class="progress fixed left-0 top-0 z-50 h-[5px] w-full appearance-none border-none bg-transparent"
      :value="scrollPercentage"
      max="100"
    />
  </Teleport>
</template>

<style scoped>
.progress::-webkit-progress-bar {
  background-color: transparent;
}

.progress::-webkit-progress-value {
  border-radius: 10px;
  background: var(--vp-c-divider);
}

.progress::-moz-progress-bar {
  border-radius: 10px;
}
</style>
