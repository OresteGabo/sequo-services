import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'
export { paths, pageIds, locales, pageMeta } from './content/pages'

export async function render(path: string) {
  return renderToString(createSSRApp(App, { initialPath: path }))
}
