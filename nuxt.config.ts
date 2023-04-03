// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-icon',
        '@nuxtjs/google-fonts'
    
    ],
    ssr: true,
    googleFonts: {
        families: {
            'EB+Garamond': true,
            'Dancing+Script': true,
        },
        display: 'block'
    },
    runtimeConfig: {
        MONGO_HOST: process.env.MONGO_HOST,
        MONGO_ADMIN: process.env.MONGO_ADMIN,
        MONGO_ADMIN_PASS: process.env.MONGO_ADMIN_PASS,
        MONGO_DB: process.env.MONGO_DB

    },
    nitro: {
        plugins: ['~/server/db/index.js']
    }
})
