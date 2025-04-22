// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n',
            '@nuxtjs/sitemap', 
            '@pinia/nuxt'],
  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix',
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'nl', file: 'nl.json', name: 'Dutch' }
    ]
 },

  site: {
    url: 'http://localhost:3000',
    name: 'Nuxt-Project',
    description: 'Nuxt-Project is a Nuxt 3 project with i18n and sitemap modules.',
  },



  sitemap: {
    sources: ['/api/[sitemap]/urls'],
  },

  compatibilityDate: '2025-04-17',
});

