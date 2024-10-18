import { marked } from 'marked'
import { defineComponent, unref, type MaybeRef } from 'vue'

export const useDynamicMarkdown = (rawMarkdown: MaybeRef<string>) => {
  const text = marked.parse(unref(rawMarkdown)) as string
  const withComponents = text.replaceAll(/dr-link/g, 'router-link')
  const withProps = withComponents.replaceAll(
    /<router-link to="(.+)">(.*)<\/router-link>/g,
    `<router-link class="inner-link" :to="{ name: '$1' }">$2</router-link>`,
  )

  return defineComponent({
    name: 'MarkdownRuntimeComponent', // Avoid anonymous component
    template: withProps,
  })
}
