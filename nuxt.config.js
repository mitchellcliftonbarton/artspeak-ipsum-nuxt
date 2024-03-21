const description = 'A simple lorem ipsum generator based on International Art English.'
const title = 'Artspeak Ipsum'
const socialImage = './social.jpg'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: socialImage
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: title
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: socialImage
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: socialImage
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: title
      }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    script: [
      {
        src: 'https://github.com/devongovett/pdfkit/releases/download/v0.8.0/pdfkit.js'
      },
      {
        src: 'https://github.com/devongovett/blob-stream/releases/download/v0.1.3/blob-stream.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/src/scss/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    icon: {
      fileName: 'favicon.png'
    }
  },

  googleAnalytics: {
    id: 'UA-61480746-10'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
