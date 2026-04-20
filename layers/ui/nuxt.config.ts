import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({

  modules: [
    '@nuxt/ui'
  ],
  $meta: {
    name: 'ui'
  },
  components: [
    {
      path: join(currentDir, './app/components'),
      pathPrefix: false
    }
  ],
  css: [join(currentDir, './assets/css/main.css')],
  runtimeConfig: {
    public: {
      supabase: {
        url: '',
        key: ''
      }
    }
  }
})
