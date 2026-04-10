// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  compatibilityDate: '2026-04-07',

  vite: {
    optimizeDeps: {
      include: [
        'zod/mini'
      ]
    }
  }
})
