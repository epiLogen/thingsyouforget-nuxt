// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@nuxt/icon',
      '@nuxtjs/google-fonts',
      '@nuxtjs/supabase'
  ],

  ssr: false,

  googleFonts: {
      families: {
           'EB Garamond': {
                wght: [400, 500, 600, 700],
                ital: [100],
            },
      },
      display: 'block'
  },

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false
  },

  compatibilityDate: '2024-08-21'
})