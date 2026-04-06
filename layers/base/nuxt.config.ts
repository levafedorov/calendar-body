export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint'
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
  }

//   supabase: {
//     redirect: false
//   }
})
