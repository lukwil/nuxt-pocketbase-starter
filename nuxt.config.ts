// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    nitro: {
        preset: 'static',
    },
    ssr: false,

    modules: [
        'vuetify-nuxt-module',
        '@pinia/nuxt',
        '@nuxt/eslint',
        'pocketbase-nuxt',
    ],

    pocketbase: {
        url: 'https://pocketbase.io', // Your PocketBase URL
    },
});
