<script setup lang="ts">
import { ref } from 'vue';
import { useDynamicMarkdown } from '@/composables/use-dynamic-markdown';

const rawText = ref<string>(`
  ## A sub component

  <dr-link to="about">ℹ️ To the About page</dr-link><br>
  <dr-link to="home">🏠 To the Home page</dr-link>
  `)

const DynamicMarkdown = useDynamicMarkdown(rawText)
</script>

<template>
  <main>
    <h1>Home</h1>
    <div>
      <DynamicMarkdown />
    </div>
  </main>
</template>

<style scoped>
:deep(.inner-link) {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: mediumslateblue;
}
</style>
