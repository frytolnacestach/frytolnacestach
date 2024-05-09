// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  target: 'static',
  
  app: {
    head: {
      htmlAttrs: {
        lang: 'cs',
        class: 'p-default'
      },
      title: 'Frytol na cestách',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Cestovatelský portál Frytol na cestách se zaměřuje na obejvování nových míst, plánování a ukladání cestovatelských zažitků.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'author', content: 'Michal Fryč' },
        { name: 'keywords', content: 'Cestovatelský portál, Frytol na cestách, objevuj svět, youtube, cestování, blog' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:locale', content: 'cs_CZ' },
        { property: 'og:site_name', content: 'Cestovatelský portál Frytol na cestách' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@frytolnacestach' }
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicons/apple-touch-icon.png' },
        { rel: 'icon', type:'image/png', sizes: '32x32', href: '/images/favicons/favicon-32x32.png' },
        { rel: 'icon', type:'image/png', sizes: '16x16', href: '/images/favicons/favicon-16x16.png' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://image.frytolnacestach.cz' },
        { rel: 'dns-prefetch', href: 'https://image.frytolnacestach.cz' },
        { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,300;1,400;1,500;1,600;1,700;1,900&display=swap', 
          media: 'print', 
          onload: 'this.media="all"'
        }
      ],
      script: [
        { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5217753750259737', async: true, crossorigin: "anonymous"},
        { src: '/js/gtm.js', type: 'text/javascript', async: true, defer: 'defer' },
        { src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyCSMOk3Z5URS7Mbb_T0RswNvemjUB3gPgg`, body: true }
      ]
    }
  },

  css: [
    '@/assets/css/main.scss',
    '@/assets/css/print.scss'
  ],

  modules: [
    '@vite-pwa/nuxt'
  ],

  // PWA
  pwa: {
    manifest: {
      lang: 'cs',
      name: 'Cestovatelský portál Frytol na cestách',
      short_name: 'Frytol na cestách',
      description: 'Cestovatelský portál Frytol na cestách vám ukáže celý svět. Objevuj místa o kterých si ani nevěděl(a) a nebo ty co by si chtěl(a) navštívit.',
      start_url: '/',
      display: 'standalone',
      background_color: '#edf1f4',
      theme_color: '#246e70',
      icons: [
        {
          src: "/images/favicons/manifest/icons/windows11/SmallTile.scale-100.png",
          sizes: "71x71",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/SmallTile.scale-125.png",
          sizes: "89x89",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/SmallTile.scale-150.png",
          sizes: "107x107",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/SmallTile.scale-200.png",
          sizes: "142x142",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/SmallTile.scale-400.png",
          sizes: "284x284",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square150x150Logo.scale-100.png",
          sizes: "150x150",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square150x150Logo.scale-125.png",
          sizes: "188x188",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square150x150Logo.scale-150.png",
          sizes: "225x225",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square150x150Logo.scale-200.png",
          sizes: "300x300",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square150x150Logo.scale-400.png",
          sizes: "600x600",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Wide310x150Logo.scale-100.png",
          sizes: "310x150",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Wide310x150Logo.scale-125.png",
          sizes: "388x188",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Wide310x150Logo.scale-150.png",
          sizes: "465x225",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Wide310x150Logo.scale-200.png",
          sizes: "620x300",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Wide310x150Logo.scale-400.png",
          sizes: "1240x600",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/LargeTile.scale-100.png",
          sizes: "310x310",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/LargeTile.scale-125.png",
          sizes: "388x388",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/LargeTile.scale-150.png",
          sizes: "465x465",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/LargeTile.scale-200.png",
          sizes: "620x620",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/LargeTile.scale-400.png",
          sizes: "1240x1240",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.scale-100.png",
          sizes: "44x44",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.scale-125.png",
          sizes: "55x55",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.scale-150.png",
          sizes: "66x66",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.scale-200.png",
          sizes: "88x88",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.scale-400.png",
          sizes: "176x176",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/StoreLogo.scale-100.png",
          sizes: "50x50",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/StoreLogo.scale-125.png",
          sizes: "63x63",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/StoreLogo.scale-150.png",
          sizes: "75x75",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/StoreLogo.scale-200.png",
          sizes: "100x100",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/StoreLogo.scale-400.png",
          sizes: "200x200",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/SplashScreen.scale-100.png",
          sizes: "620x300",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/SplashScreen.scale-125.png",
          sizes: "775x375",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/SplashScreen.scale-150.png",
          sizes: "930x450",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/SplashScreen.scale-200.png",
          sizes: "1240x600",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/SplashScreen.scale-400.png",
          sizes: "2480x1200",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.targetsize-16.png",
          sizes: "16x16",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.targetsize-20.png",
          sizes: "20x20",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.targetsize-24.png",
          sizes: "24x24",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.targetsize-30.png",
          sizes: "30x30",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.targetsize-32.png",
          sizes: "32x32",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.targetsize-36.png",
          sizes: "36x36",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.targetsize-40.png",
          sizes: "40x40",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.targetsize-44.png",
          sizes: "44x44",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.targetsize-48.png",
          sizes: "48x48",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.targetsize-60.png",
          sizes: "60x60",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.targetsize-64.png",
          sizes: "64x64",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.targetsize-72.png",
          sizes: "72x72",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.targetsize-80.png",
          sizes: "80x80",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.targetsize-96.png",
          sizes: "96x96",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.targetsize-256.png",
          sizes: "256x256",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
          sizes: "16x16",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
          sizes: "20x20",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
          sizes: "24x24",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
          sizes: "30x30",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
          sizes: "32x32",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
          sizes: "36x36",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
          sizes: "40x40",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
          sizes: "44x44",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
          sizes: "48x48",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
          sizes: "60x60",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
          sizes: "64x64",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
          sizes: "72x72",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
          sizes: "80x80",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
          sizes: "96x96",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
          sizes: "256x256",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
          sizes: "16x16",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
          sizes: "20x20",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
          sizes: "24x24",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
          sizes: "30x30",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
          sizes: "32x32",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
          sizes: "36x36",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
          sizes: "40x40",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
          sizes: "44x44",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
          sizes: "48x48",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
          sizes: "60x60",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
          sizes: "64x64",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
          sizes: "72x72",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
          sizes: "80x80",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
          sizes: "96x96",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
          sizes: "256x256",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/android/android-launchericon-512-512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/android/android-launchericon-192-192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/android/android-launchericon-144-144.png",
          sizes: "144x144",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/android/android-launchericon-96-96.png",
          sizes: "96x96",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/android/android-launchericon-72-72.png",
          sizes: "72x72",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/android/android-launchericon-48-48.png",
          sizes: "48x48",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/16.png",
          sizes: "16x16",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/20.png",
          sizes: "20x20",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/29.png",
          sizes: "29x29",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/32.png",
          sizes: "32x32",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/40.png",
          sizes: "40x40",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/50.png",
          sizes: "50x50",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/57.png",
          sizes: "57x57",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/58.png",
          sizes: "58x58",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/60.png",
          sizes: "60x60",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/64.png",
          sizes: "64x64",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/72.png",
          sizes: "72x72",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/76.png",
          sizes: "76x76",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/80.png",
          sizes: "80x80",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/87.png",
          sizes: "87x87",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/100.png",
          sizes: "100x100",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/114.png",
          sizes: "114x114",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/120.png",
          sizes: "120x120",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/128.png",
          sizes: "128x128",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/144.png",
          sizes: "144x144",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/152.png",
          sizes: "152x152",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/167.png",
          sizes: "167x167",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/180.png",
          sizes: "180x180",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/256.png",
          sizes: "256x256",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "/images/favicons/manifest/icons/ios/1024.png",
          sizes: "1024x1024",
          type: "image/png",
          purpose: "any maskable"
        }
      ],
    },
    workbox: {
      navigateFallback: '/'
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  },
  // PWA END

  render: {
    static: {
      maxAge: 60 * 60 * 24 * 120 * 1000 // @note 120 dní
    }
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: 'https://www.frytolnacestach.cz/sitemap-main.xml',
    TxtSitemap: 'public/robots.txt',
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://www.frytolnacestach.cz',
    envGoogleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || ''
  },

  copy: [
    {
      from: 'public/robots.txt',
      to: 'public/robots.txt',
      toType: 'file'
    },
    {
      from: 'public/ads.txt',
      to: 'ads.txt',
      toType: 'file'
    },
    {
      from: 'public/seznam-wmt-CZiSUftkY5j3UAZhi6O0ZSGO7jhCc5cH.txt',
      to: 'seznam-wmt-CZiSUftkY5j3UAZhi6O0ZSGO7jhCc5cH.txt',
      toType: 'file'
    },
    {
      from: 'public/BingSiteAuth.xml',
      to: 'BingSiteAuth.xml',
      toType: 'file'
    },
    {
      from: 'public/vercel.json',
      to: 'vercel.json',
      toType: 'file'
    }
  ],

  // Router
  router: {
    trailingSlash: false,
    middleware: ['removeTrailingSlash'],
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'user',
        path: '/cestovatel/:slug',
        component: resolve(__dirname, 'pages/cestovatel/[slug].vue')
      })
      routes.push({
        name: 'user-visited-place',
        path: '/cestovatel/:slug/navstivena-mista',
        component: resolve(__dirname, 'pages/cestovatel/[slug]/navstivena-mista.vue')
      })
      routes.push({
        name: 'user-review',
        path: '/cestovatel/:slug/recenze',
        component: resolve(__dirname, 'pages/cestovatel/[slug]/recenze.vue')
      })
      routes.push({
        name: 'user-video',
        path: '/cestovatel/:slug/videa',
        component: resolve(__dirname, 'pages/cestovatel/[slug]/videa.vue')
      })
      routes.push({
        name: 'user-post',
        path: '/cestovatel/:slug/clanky',
        component: resolve(__dirname, 'pages/cestovatel/[slug]/clanky.vue')
      })
      routes.push({
        name: 'user-follow',
        path: '/cestovatel/:slug/sleduji',
        component: resolve(__dirname, 'pages/cestovatel/[slug]/sleduji.vue')
      })
      routes.push({
        name: 'world-stat-slug',
        path: '/svet/stat/:slug',
        component: resolve(__dirname, 'pages/svet/stat/[slug].vue')
      })
      routes.push({
        name: 'world-stat-price',
        path: '/svet/stat/:slug/ceny',
        component: resolve(__dirname, 'pages/svet/stat/[slug]/ceny.vue')
      })
      routes.push({
        name: 'world-stat-trip',
        path: '/svet/stat/:slug/cesta',
        component: resolve(__dirname, 'pages/svet/stat/[slug]/cesta.vue')
      })
      routes.push({
        name: 'world-stat-what-to-see',
        path: '/svet/stat/:slug/co-videt',
        component: resolve(__dirname, 'pages/svet/stat/[slug]/co-videt.vue')
      })
      routes.push({
        name: 'world-stat-wall-sockets',
        path: '/svet/stat/:slug/elektricke-zasuvky',
        component: resolve(__dirname, 'pages/svet/stat/[slug]/elektricke-zasuvky.vue')
      })
      routes.push({
        name: 'world-stat-contacts',
        path: '/svet/stat/:slug/kontakty',
        component: resolve(__dirname, 'pages/svet/stat/[slug]/kontakty.vue')
      })
      routes.push({
        name: 'world-stat-people',
        path: '/svet/stat/:slug/lide',
        component: resolve(__dirname, 'pages/svet/stat/[slug]/lide.vue')
      })
      routes.push({
        name: 'world-stat-chains',
        path: '/svet/stat/:slug/retezce',
        component: resolve(__dirname, 'pages/svet/stat/[slug]/retezce.vue')
      })
      routes.push({
        name: 'world-stat-fauna',
        path: '/svet/stat/:slug/fauna',
        component: resolve(__dirname, 'pages/svet/stat/[slug]/fauna.vue')
      })
      routes.push({
        name: 'world-stat-flora',
        path: '/svet/stat/:slug/flora',
        component: resolve(__dirname, 'pages/svet/stat/[slug]/flora.vue')
      })
      routes.push({
        name: 'world-stat-foods',
        path: '/svet/stat/:slug/jidlo',
        component: resolve(__dirname, 'pages/svet/stat/[slug]/jidlo.vue')
      })
      routes.push({
        name: 'world-stat-brands',
        path: '/svet/stat/:slug/vyrobky',
        component: resolve(__dirname, 'pages/svet/stat/[slug]/vyrobky.vue')
      })
      routes.push({
        name: 'world-stat-neighboring',
        path: '/svet/stat/:slug/sousedni-staty',
        component: resolve(__dirname, 'pages/svet/stat/[slug]/sousedni-staty.vue')
      })
      routes.push({
        name: 'world-stat-hotel',
        path: '/svet/stat/:slug/ubytovani',
        component: resolve(__dirname, 'pages/svet/stat/[slug]/ubytovani.vue')
      })
      routes.push({
        name: 'world-stat-videos',
        path: '/svet/stat/:slug/videa',
        component: resolve(__dirname, 'pages/svet/stat/[slug]/videa.vue')
      })
      routes.push({
        name: 'world-stat-posts',
        path: '/svet/stat/:slug/clanky',
        component: resolve(__dirname, 'pages/svet/stat/[slug]/clanky.vue')
      })
    }
  },
  // Router END

  // Generate XML
  sitemap: {
    hostname: process.env.BASE_URL,
    exclude: [
      '/styleguide'
    ],
    sitemaps: [
      {
        path: '/sitemap-base.xml',
        routes: [
          '/',
          '/clanky',
          '/videa',
          '/social',
          '/iam',
          '/donate',
          '/svet',
          '/svet/kontinent',
          '/svet/stat',
          '/svet/region',
          '/svet/mesto',
          '/svet/misto',
          '/jidlo',
          '/fauna',
          '/flora',
          '/znacka',
          '/retezec',
          '/elektricka-zasuvka',
          '/cestovatel',
          '/cestovatelsky-slovnik',
          '/udalost',
          '/svetovy-cas',
          '/cookies',
          '/conditions',
          '/conditions-user',
          '/ucet',
          '/ucet/prihlaseni',
          '/ucet/registrace',
          '/ucet/zapomenute-heslo'
        ],
        exclude: [
          '/videa/**', '/videa/.*', '/videa\\?.*', 
          '/clanky/**', '/clanky/.*', '/clanky\\?.*', 
          '/cestovatel/**', '/cestovatel/.*', '/cestovatel\\?.*',
          '/cestovatelsky-slovnik/**', '/cestovatelsky-slovnik/.*', '/cestovatelsky-slovnik\\?.*',
          '/udalost/**', '/udalost/.*', '/udalost\\?.*',
          '/svetovy-cas/**', '/svetovy-cas/.*', '/svetovy-cas\\?.*',
          '/jidlo/**', '/jidlo/.*', '/jidlo\\?.*',
          '/fauna/**', '/fauna/.*', '/fauna\\?.*',
          '/flora/**', '/flora/.*', '/flora\\?.*',
          '/znacka/**', '/znacka/.*', '/znacka\\?.*',
          '/retezec/**', '/retezec/.*', '/retezec\\?.*',
          '/elektricka-zasuvka/**', '/elektricka-zasuvka/.*', '/elektricka-zasuvka\\?.*',
          '/svet/kontinent/**', '/svet/kontinent/.*', '/svet/kontinent\\?.*',
          '/svet/stat/**', '/svet/stat/.*', '/svet/stat\\?.*',
          '/svet/region/**', '/svet/region/.*', '/svet/region\\?.*',
          '/svet/mesto/**', '/svet/mesto/.*', '/svet/mesto\\?.*',
          '/svet/misto/**', '/svet/misto/.*', '/svet/misto\\?.*',
        ]
      },
      {
        path: '/sitemap-posts.xml',
        routes: async () => {
          let { data } = await fetch('https://api.frytolnacestach.cz/api/posts?showType=xml')
          return data.map(v => `/clanky/${v.slug}`)
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-videos.xml',
        routes: async () => {
          let { data } = await fetch('https://api.frytolnacestach.cz/api/videos?showType=xml')
          return data.map(v => `/videa/${v.slug}`)
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-foods.xml',
        routes: async () => {
          let { data } = await fetch('https://api.frytolnacestach.cz/api/foods?showType=xml')
          return data.map(v => `/jidlo/${v.slug}`)
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-fauna.xml',
        routes: async () => {
          let { data } = await fetch('https://api.frytolnacestach.cz/api/faunas?showType=xml')
          return data.map(v => `/fauna/${v.slug}`)
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-flora.xml',
        routes: async () => {
          let { data } = await fetch('https://api.frytolnacestach.cz/api/floras?showType=xml')
          return data.map(v => `/flora/${v.slug}`)
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-brands.xml',
        routes: async () => {
          let { data } = await fetch('https://api.frytolnacestach.cz/api/brands?showType=xml')
          return data.map(v => `/znacka/${v.slug}`)
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-travel-dictionary.xml',
        routes: async () => {
          let { data } = await fetch('https://api.frytolnacestach.cz/api/travel-dictionaries?showType=xml')
          return data.map(v => `/cestovatelsky-slovnik/${v.slug}`)
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-chains.xml',
        routes: async () => {
          let { data } = await fetch('https://api.frytolnacestach.cz/api/chains?showType=xml')
          return data.map(v => `/retezec/${v.slug}`)
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-wall-sockets.xml',
        routes: async () => {
          let { data } = await fetch('https://api.frytolnacestach.cz/api/wall-sockets?showType=xml')
          return data.map(v => `/elektricka-zasuvka/${v.slug}`)
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-events.xml',
        routes: async () => {
          let { data } = await fetch('https://api.frytolnacestach.cz/api/events?showType=xml')
          return data.map(v => `/udalost/${v.slug}`)
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-users.xml',
        routes: async () => {
          let { data } = await fetch('https://api.frytolnacestach.cz/api/users?showType=xml')
          return data.map(v => `/cestovatel/${v.slug}`)
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-world-time.xml',
        routes: async () => {
          let { data } = await fetch('https://api.frytolnacestach.cz/api/places-states?showType=xml')
          return data.map(v => `/svetovy-cas/${v.slug}`)
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-places-continets.xml',
        routes: async () => {
          let { data } = await fetch('https://api.frytolnacestach.cz/api/places-continents?showType=xml')
          return data.map(v => `/svet/kontinent/${v.slug}`)
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-places-stats.xml',
        routes: async () => {
          let { data } = await fetch('https://api.frytolnacestach.cz/api/places-states?showType=xml');
          
          let allRoutes = [];
      
          data.forEach(v => {
            // State - base
            allRoutes.push(`/svet/stat/${v.slug}`);
      
            // State - tabs
            const tabs = ['co-videt', 'ceny', 'lide', 'cesta', 'kontakty', 'ubytovani', 'videa', 'clanky', 'sousedni-staty', 'elektricke-zasuvky', 'retezce', 'fauna', 'flora', 'jidlo', 'vyrobky'];
            tabs.forEach(tab => {
              allRoutes.push(`/svet/stat/${v.slug}/${tab}`);
            });
          });
      
          return allRoutes;
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-places-regions.xml',
        routes: async () => {
          let { data } = await fetch('https://api.frytolnacestach.cz/api/places-regions?showType=xml')
          return data.map(v => `/svet/region/${v.slug}`)
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
            const { data } = await fetch(`https://api.frytolnacestach.cz/api/places-cities?showType=xml&start=${start}&end=${end}`)
            const rangeRoutes = data.map(v => `/svet/mesto/${v.slug}`)
            routes.push(...rangeRoutes)
          }
      
          return routes
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-places-spots.xml',
        routes: async () => {
          let { data } = await fetch('https://api.frytolnacestach.cz/api/places-spots?showType=xml')
          return data.map(v => `/svet/misto/${v.slug}`)
        },
        exclude: ['/**']
      },
      {
        path: '/sitemap-filter.xml',
        routes: async () => {
          const continentsResponse = await fetch('https://api.frytolnacestach.cz/api/places-continents?showType=xml')
          const statesResponse = await fetch('https://api.frytolnacestach.cz/api/places-states?showType=xml')

          const continentRoutes = continentsResponse.data.map(v => `/svet/stat?filterIDcontinent=${v.id}`)
          const stateRoutes = [
            ...statesResponse.data.map(v => `/svet/region?filterIDstate=${v.id}`),
            ...statesResponse.data.map(v => `/svet/mesto?filterIDstate=${v.id}`),
            ...statesResponse.data.map(v => `/svet/misto?filterIDstate=${v.id}`),
            ...statesResponse.data.map(v => `/clanky?filterIDstate=${v.id}`),
            ...statesResponse.data.map(v => `/videa?filterIDstate=${v.id}`)
          ]

          return [...continentRoutes, ...stateRoutes];
        },
        exclude: ['/**']
      }
    ]
  },
  // Generate XML END

  // Generate
  generate: {
    sourcemap: {
      server: true,
      client: true 
    },
    async routes() {
      // APIs
      const [
        postsData,
        videosData,
        foodsData,
        faunasData,
        florasData,
        brandsData,
        chainsData,
        wallSocketsData,
        travelDictionariesData,
        eventsData,
        usersData,
        worldTimeData, 
        placesContinentsData, 
        placesStatesData, 
        placesRegionsData, 
        placesCitiesData1, 
        placesCitiesData2, 
        placesCitiesData3, 
        placesSpotsData
      ] = await Promise.all([
        fetch('https://api.frytolnacestach.cz/api/posts'),
        fetch('https://api.frytolnacestach.cz/api/videos'),
        fetch('https://api.frytolnacestach.cz/api/foods'),
        fetch('https://api.frytolnacestach.cz/api/faunas'),
        fetch('https://api.frytolnacestach.cz/api/floras'),
        fetch('https://api.frytolnacestach.cz/api/brands'),
        fetch('https://api.frytolnacestach.cz/api/chains'),
        fetch('https://api.frytolnacestach.cz/api/wall-sockets'),
        fetch('https://api.frytolnacestach.cz/api/travel-dictionaries'),
        fetch('https://api.frytolnacestach.cz/api/events'),
        fetch('https://api.frytolnacestach.cz/api/users'),
        fetch('https://api.frytolnacestach.cz/api/places-states'),
        fetch('https://api.frytolnacestach.cz/api/places-continents'),
        fetch('https://api.frytolnacestach.cz/api/places-states'),
        fetch('https://api.frytolnacestach.cz/api/places-regions'),
        fetch('https://api.frytolnacestach.cz/api/places-cities?start=1&end=999'),
        fetch('https://api.frytolnacestach.cz/api/places-cities?start=1000&end=1999'),
        fetch('https://api.frytolnacestach.cz/api/places-cities?start=2000&end=2999'),
        fetch('https://api.frytolnacestach.cz/api/places-spots')
      ]);

      //MAPs
      const posts = postsData.data.map((item) => item.slug)
      const videos = videosData.data.map((item) => item.slug)
      const foods = foodsData.data.map((item) => item.slug)
      const faunas = faunasData.data.map((item) => item.slug)
      const floras = florasData.data.map((item) => item.slug)
      const brands = brandsData.data.map((item) => item.slug)
      const chains = chainsData.data.map((item) => item.slug)
      const wallSockets = wallSocketsData.data.map((item) => item.slug)
      const travelDictionaries = travelDictionariesData.data.map((item) => item.slug)
      const events = eventsData.data.map((item) => item.slug)
      const users = usersData.data.map((item) => item.slug)
      const worldTime = worldTimeData.data.map((item) => item.slug)
      const placesContinents = placesContinentsData.data.map((item) => item.slug)
      const placesStates = placesStatesData.data.map((item) => item.slug)
      const placesRegions = placesRegionsData.data.map((item) => item.slug)
      const placesCities1 = placesCitiesData1.data.map((item) => item.slug)
      const placesCities2 = placesCitiesData2.data.map((item) => item.slug)
      const placesCities3 = placesCitiesData3.data.map((item) => item.slug)
      const placesSpots = placesSpotsData.data.map((item) => item.slug)
      const placesContinentsID = placesContinentsData.data.map((item) => item.id)
      const placesStatesID = placesStatesData.data.map((item) => item.id)

      // Const
      const routes = []

      // Posts
      posts.forEach((slug) => {
        routes.push(`clanky/${slug}`)
      })

      // Videos
      videos.forEach((slug) => {
        routes.push(`videa/${slug}`)
      })

      // Foods
      foods.forEach((slug) => {
        routes.push(`jidlo/${slug}`)
      })

      // Faunas
      faunas.forEach((slug) => {
        routes.push(`fauna/${slug}`)
      })

      // Floras
      floras.forEach((slug) => {
        routes.push(`flora/${slug}`)
      })

      // Brands
      brands.forEach((slug) => {
        routes.push(`znacka/${slug}`)
      })

      // Chains
      chains.forEach((slug) => {
        routes.push(`retezec/${slug}`)
      })

      // Wall Sockets
      wallSockets.forEach((slug) => {
        routes.push(`elektricka-zasuvka/${slug}`)
      })

      // Travel Dictionaries
      travelDictionaries.forEach((slug) => {
        routes.push(`cestovatelsky-slovnik/${slug}`)
      })

      // Events
      events.forEach((slug) => {
        routes.push(`udalost/${slug}`)
      })

      // Users
      users.forEach((slug) => {
        routes.push(`cestovatel/${slug}`)
      })

      // World Time
      worldTime.forEach((slug) => {
        routes.push(`svetovy-cas/${slug}`)
      })

      // Places - Continents
      placesContinents.forEach((slug) => {
        routes.push(`svet/kontinent/${slug}`)
      })

      // Places - States
      placesStates.forEach((slug) => {
        routes.push(`svet/stat/${slug}`)
      })

      // Places - States - subpages
      placesStates.forEach((slug) => {
        const tabs = [
          'co-videt',
          'ceny',
          'lide',
          'cesta',
          'kontakty',
          'ubytovani',
          'videa',
          'clanky',
          'sousedni-staty',
          'elektricke-zasuvky',
          'retezce',
          'fauna',
          'flora',
          'jidlo',
          'vyrobky'
        ];

        tabs.forEach((tab) => {
          routes.push(`svet/stat/${slug}/${tab}`)
        })
      })

      // Places - Regions
      placesRegions.forEach((slug) => {
        routes.push(`svet/region/${slug}`)
      })

      // Places - Cities
      placesCities1.forEach((slug) => {
        routes.push(`svet/mesto/${slug}`)
      })
      placesCities2.forEach((slug) => {
        routes.push(`svet/mesto/${slug}`)
      })
      placesCities3.forEach((slug) => {
        routes.push(`svet/mesto/${slug}`)
      })

      // Places - Spots
      placesSpots.forEach((slug) => {
        routes.push(`svet/misto/${slug}`)
      })

      // Filter - Continent
      placesContinentsID.forEach((id) => {
        routes.push(`svet/stat?filterIDcontinent=${id}`)
      })

      // Filter - State
      placesStatesID.forEach((id) => {
        routes.push(`svet/region?filterIDstate=${id}`)
        routes.push(`svet/mesto?filterIDstate=${id}`)
        routes.push(`svet/misto?filterIDstate=${id}`)
        routes.push(`clanky?filterIDstate=${id}`)
        routes.push(`videa?filterIDstate=${id}`)
      })

      return routes
    }
  },
  // Generate END

  // Build
  build: {
    sourcemap: {
      server: true,
      client: true 
    }
  },
  // Build END

  devtools: {
    enabled: true
  }
})
