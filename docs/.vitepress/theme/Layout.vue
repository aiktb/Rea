<script setup lang="ts">
import DefaultTheme from 'vitepress/theme-without-fonts'

import Comments from './components/VComments.vue'
import Message from './components/VMessage.vue'
import Progress from './components/VProgress.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-top>
      <Progress />
    </template>
    <template #doc-after>
      <Comments />
    </template>
    <template #aside-outline-after>
      <Message />
    </template>
  </Layout>
</template>
