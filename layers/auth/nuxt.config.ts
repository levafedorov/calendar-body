export default defineNuxtConfig({
  $meta: {
    name: 'auth'
  },

  supabase: {
    redirectOptions: {
      login: '/sign-in',
      callback: '/confirm',
      include: undefined,
      exclude: ['/sign-up'],
      saveRedirectToCookie: false
    }
  }
})
