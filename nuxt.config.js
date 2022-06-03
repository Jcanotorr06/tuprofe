import {defineNuxtConfig} from '@nuxt/bridge'
export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tuprofe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  },
  privateRuntimeConfig: {
    API_KEY: process.env.API_KEY
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bootstrapVue.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxt/postcss8',
    'bootstrap-vue/nuxt',
    '@pinia/nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
    '@nuxt/postcss8',
    'bootstrap-vue/nuxt',
    ['nuxt-supabase', {
      supabaseUrl: process.env.API_URL,
      supabaseKey: process.env.API_KEY
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'es',
    },
  },

  tailwindcss: {
    jit: true,
    exposeConfig: true
  },

  bootstrapVue: {
    icons: true,
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  // i18n modul configuration: https://i18n.nuxtjs.org
  i18n: {
    locales: [
      {
        code: 'es',
        iso: 'es',
        file: 'es.js',
        name: "ES"
      },
      {
        code: 'en',
        iso: 'en',
        file: 'en.js',
        name: "EN"
      }
    ],
    strategy: 'no_prefix',
    langDir: 'lang/',
    defaultLocale: 'es',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    vueI18n: {
      fallbackLocale: false,
      messages: {

      }
    }
  },

  googleFonts:{
    families: {
      'Josefin+Sans': [400, 500, 600],
      Rubik: [700,800,900]
    },
    display: 'swap',
    download: true,
    inject: true,
    subsets: 'latin'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      // necessary for nuxt bridge
      'pinia',
    ],
  },
})
