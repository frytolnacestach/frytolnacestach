export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Frytol na cestách',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Web Frytol na cestách' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'author', content: 'Michal Fryč' },
      { name: 'keywords', content: 'Frytol na cestách, youtube, cestování, blog' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:image', content: '/images/og/og-default.png' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicons/apple-touch-icon.png' },
      { rel: 'icon', type:'image/png', sizes: '32x32', href: '/images/favicons/favicon-32x32.png' },
      { rel: 'icon', type:'image/png', sizes: '16x16', href: '/images/favicons/favicon-16x16.png' },
      { rel: 'manifest', sizes: '180x180', href: '/images/favicons/site.webmanifest' }
    ],
    script: [
      { src: '/js/cookies-default.js', type: 'text/javascript' },
      { src: '/js/gtm.js', type: 'text/javascript' },
      { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5217753750259737', async: true},
      { src: 'https://code.jquery.com/jquery-3.6.1.min.js', crossorigin: 'anonymous'},
      { src: '/js/js_m-hamburger.js', type: 'text/javascript', defer: 'defer' },
      { src: '/js/js_o-cookies-dialog.js', type: 'text/javascript', defer: 'defer' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '@/assets/css/main.scss',
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
