<script setup lang="ts">
import { defineComponent } from 'vue';
import { marked } from 'marked';


const getDynamicComponent = () => {
  const text = marked.parse(`
  ## A sub component

  <dr-link to="about">ℹ️ To the About page</dr-link><br>
  <dr-link to="home">🏠 To the Home page</dr-link>
  `) as string

  const withComponents = text.replaceAll(/dr-link/g, 'router-link')
  const withProps = withComponents.replaceAll(/<router-link to="(.+)">(.*)<\/router-link>/g, `<router-link class="inner-link" :to="{ name: '$1' }">$2</router-link>`)

  return defineComponent({
    name: 'MarkdownRuntimeComponent',
    template: withProps
  })
}

const Woot = getDynamicComponent()
</script>

<template>
  <main>
    <h1>Home</h1>
    <div>
      <Woot />
    </div>
  </main>
</template>

<style scoped>
:deep(.inner-link) {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: mediumslateblue;
}
</style>
