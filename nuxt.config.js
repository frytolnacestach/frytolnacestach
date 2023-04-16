const axios = require('axios')

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Frytol na cestách',
    htmlAttrs: {
      lang: 'cs'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Web Frytol na cestách' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'author', content: 'Michal Fryč' },
      { name: 'keywords', content: 'Frytol na cestách, youtube, cestování, blog, mapa světa' },
      { name: 'robots', content: 'index, follow' },
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
      { src: '/js/js_o-popup-cookies.js', type: 'text/javascript', defer: 'defer' }
    ]
  },
  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: 'https://frytolnacestach.cz/sitemap-main.xml',
    // custom robots.txt file path
    TxtSitemap: '/robots.txt',
  },

  copy: [
    {
      from: 'static/ads.txt',
      to: 'ads.txt',
      toType: 'file'
    },
    {
      from: 'static/seznam-wmt-7a9jTJETrjtBnGcMOa5dKSZ1K9yvwfMY.txt',
      to: 'seznam-wmt-7a9jTJETrjtBnGcMOa5dKSZ1K9yvwfMY.txt',
      toType: 'file'
    }
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '@/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    { src: '~/plugins/vue-lazyload', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build', 
    '@nuxtjs/eslint-module', 
    '@nuxtjs/tailwindcss'
  ],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/svg',
    'vue-scrollto/nuxt'
  ],

  sitemap: {
    hostname: process.env.BASE_URL,
    exclude: [
      '/styleguide'
    ],
    sitemaps: [
      {
        path: '/sitemap-main.xml'
      },
      {
        path: '/sitemap-posts.xml',
        routes: async () => {
          let { data } = await axios.get('https://frytolnacestach-api.vercel.app/api/posts')
          return data.map(v => `/clanky/${v.slug}`)
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-videos.xml',
        routes: async () => {
          let { data } = await axios.get('https://frytolnacestach-api.vercel.app/api/videos')
          return data.map(v => `/videa/${v.slug}`)
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-places-continets.xml',
        routes: async () => {
          let { data } = await axios.get('https://frytolnacestach-api.vercel.app/api/places-continents')
          return data.map(v => `/svet/kontinent/${v.slug}`)
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-places-stats.xml',
        routes: async () => {
          let { data } = await axios.get('https://frytolnacestach-api.vercel.app/api/places-states')
          return data.map(v => `/svet/stat/${v.slug}`)
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-places-cities.xml',

        routes: async () => {
          const routes = []
      
          // Add routes for the ranges 1-999, 1000-1999, and 2000-2999
          for (let i = 1; i <= 3; i++) {
            const start = (i - 1) * 1000 + 1
            const end = i * 1000
            const { data } = await axios.get(`https://frytolnacestach-api.vercel.app/api/places-cities?start=${start}&end=${end}`)
            const rangeRoutes = data.map(v => `/svet/mesto/${v.slug}`)
            routes.push(...rangeRoutes)
          }
      
          return routes
        },
        exclude: ['/**']
      }
    ]
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'stat-slug',
        path: '/svet/stat/:slug',
        component: resolve(__dirname, 'pages/svet/stat/_slug.vue'),
        alias: '/svet/stat/:slug/default'
      })
      routes.push({
        name: 'stat-slug-tab',
        path: '/svet/stat/:slug/:tab',
        component: resolve(__dirname, 'pages/svet/stat/_slug.vue')
      })
    }
  },

  generate: {
    async routes() {
      const { data } = await axios.get('https://frytolnacestach-api.vercel.app/api/places-states');
      const slugs = data.map((item) => item.slug);
      const routes = [];
      slugs.forEach((slug) => {
        const tabs = [
          'default',
          'ceny',
          'lide',
          'cesta',
          'kontakty',
          'ubytovani',
          'videa'
        ];
        tabs.forEach((tab) => {
          routes.push(`svet/stat/${slug}/${tab}`);
        });
      });
      return routes;
    }
  },

  lazyload: {
    directiveOnly: true,
    loadingClass: 'loading',
    loadedClass: 'loaded',
    appendClass: 'lazyload-wrapper'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  }
}
