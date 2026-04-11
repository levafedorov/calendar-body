import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/supabase'
  ],

  $meta: {
    name: 'base'
  },

  routeRules: {
    '/': { prerender: true }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  supabase: {
    redirect: false,
    types: join(dirname(fileURLToPath(import.meta.url)), './types/supabase.ts')
  }
})
