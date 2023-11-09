<script setup lang="ts">
import DefaultTheme from 'vitepress/theme-without-fonts'

import Address from './components/ReaAddress.vue'
import Comments from './components/ReaComments.vue'
import Progress from './components/ReaProgress.vue'

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
      <Address />
    </template>
  </Layout>
</template>
