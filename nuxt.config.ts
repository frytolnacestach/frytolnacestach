// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

let routesAll
let routesPosts
let routesVideos
let routesFoods
let routesFauna
let routesFlora
let routesBrands
let routesChains
let routesWallSockets
let routesTravelDictionary
let routesEvents
let routesUsers
let routesPlacesStates
let routesPlacesContinents
let routesPlacesRegions
let routesPlacesCities
let routesPlacesSpots
let routesWorldTimes
let routesFilters

const getPostRoutes = async () => {
  const placesStatesSubpages = [
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
  ]

  const usersSubpages = [
    'navstivena-mista',
    'recenze',
    'clanky',
    'videa',
    'sleduji'
  ]

  try {
    // APIs
    const responsePosts = await fetch('https://api.frytolnacestach.cz/api/posts')
    const responseVideos = await fetch('https://api.frytolnacestach.cz/api/videos')
    const responseFoods = await fetch('https://api.frytolnacestach.cz/api/foods')
    const responseFaunas = await fetch('https://api.frytolnacestach.cz/api/faunas')
    const responseFloras = await fetch('https://api.frytolnacestach.cz/api/floras')
    const responseBrands = await fetch('https://api.frytolnacestach.cz/api/brands')
    const responseChains = await fetch('https://api.frytolnacestach.cz/api/chains')
    const responseWallSockets = await fetch('https://api.frytolnacestach.cz/api/wall-sockets')
    const responseTravelDictionaries = await fetch('https://api.frytolnacestach.cz/api/travel-dictionaries')
    const responseEvents = await fetch('https://api.frytolnacestach.cz/api/events')
    const responseUsers = await fetch('https://api.frytolnacestach.cz/api/users')
    const responsePlacesStates = await fetch('https://api.frytolnacestach.cz/api/places-states')
    const responsePlacesContinents = await fetch('https://api.frytolnacestach.cz/api/places-continents')
    const responsePlacesRegions = await fetch('https://api.frytolnacestach.cz/api/places-regions')
    const responsePlacesCities1 = await fetch('https://api.frytolnacestach.cz/api/places-cities?start=1&end=999')
    const responsePlacesCities2 = await fetch('https://api.frytolnacestach.cz/api/places-cities?start=1000&end=1999')
    const responsePlacesCities3 = await fetch('https://api.frytolnacestach.cz/api/places-cities?start=2000&end=2999')
    const responsePlacesSpots = await fetch('https://api.frytolnacestach.cz/api/places-spots')

    // JSON
    const postData = await responsePosts.json()
    const videoData = await responseVideos.json()
    const foodsData = await responseFoods.json()
    const faunasData = await responseFaunas.json()
    const florasData = await responseFloras.json()
    const brandsData = await responseBrands.json()
    const chainsData = await responseChains.json()
    const wallSocketsData = await responseWallSockets.json()
    const travelDictionariesData = await responseTravelDictionaries.json()
    const eventsData = await responseEvents.json()
    const usersData = await responseUsers.json()
    const placesStatesData = await responsePlacesStates.json()
    const placesContinentsData = await responsePlacesContinents.json()
    const placesRegionsData = await responsePlacesRegions.json()
    const placesCities1Data = await responsePlacesCities1.json()
    const placesCities2Data = await responsePlacesCities2.json()
    const placesCities3Data = await responsePlacesCities3.json()
    const placesSpotsData = await responsePlacesSpots.json()

    // Connection
    const placesCitiesData = [
      ...placesCities1Data,
      ...placesCities2Data,
      ...placesCities3Data
    ]

    // MAP
    const postRoutes = postData.map((post) => `/clanky/${post.slug}`)
    const videoRoutes = videoData.map((video) => `/videa/${video.slug}`)
    const foodRoutes = foodsData.map((food) => `/jidlo/${food.slug}`)
    const faunaRoutes = faunasData.map((fauna) => `/fauna/${fauna.slug}`)
    const floraRoutes = florasData.map((flora) => `/flora/${flora.slug}`)
    const brandRoutes = brandsData.map((brand) => `/znacka/${brand.slug}`)
    const chainRoutes = chainsData.map((chain) => `/retezec/${chain.slug}`)
    const wallSocketRoutes = wallSocketsData.map((wallSocket) => `/elektricka-zasuvka/${wallSocket.slug}`)
    const travelDictionaryRoutes = travelDictionariesData.map((travelDictionary) => `/cestovatelsky-slovnik/${travelDictionary.slug}`)
    const eventRoutes = eventsData.map((event) => `/udalost/${event.slug}`)
    const userRoutes = usersData.map((user) => `/cestovatel/${user.slug}`)
    const placesStatesRoutes = placesStatesData.map((placeState) => `/svet/stat/${placeState.slug}`)
    const placesContinentsRoutes = placesContinentsData.map((placeContinent) => `/svet/kontinent/${placeContinent.slug}`)
    const placesRegionsRoutes = placesRegionsData.map((placeRegion) => `/svet/region/${placeRegion.slug}`)
    const placesCitiesRoutes = placesCitiesData.map((placeCity) => `/svet/mesto/${placeCity.slug}`)
    const placesSpotsRoutes = placesSpotsData.map((placeSpot) => `/svet/misto/${placeSpot.slug}`)
    // MAP - Subpages
    const placesStatesSubpagesRoutes = placesStatesData.flatMap((placeState) => {
      return placesStatesSubpages.map((subpage) => `/svet/stat/${placeState.slug}/${subpage}`)
    })
    const userSubpagesRoutes = usersData.flatMap((user) => {
      return usersSubpages.map((subpage) => `/cestovatel/${user.slug}/${subpage}`)
    })
    // MAP - use same datas for other pages
    const worldTimeRoutes = placesStatesData.map((placeState) => `/svetovy-cas/${placeState.slug}`)
    const filterPlacesContinentsStatesRoutes = placesContinentsData.map((placeContinent) => `/svet/stat?filterIDcontinent=${placeContinent.id}`)
    const filterPlacesStatesRegionsRoutes = placesStatesData.map((placeState) => `/svet/region?filterIDstate=${placeState.id}`)
    const filterPlacesStatesCitiesRoutes = placesStatesData.map((placeState) => `/svet/mesto?filterIDstate=${placeState.id}`)
    const filterPlacesStatesSpotsRoutes = placesStatesData.map((placeState) => `/svet/misto?filterIDstate=${placeState.id}`)
    const filterPlacesStatesPostsRoutes = placesContinentsData.map((placeContinent) => `/clanky?filterIDstate=${placeContinent.id}`)
    const filterPlacesStatesVideosRoutes = placesContinentsData.map((placeContinent) => `/videa?filterIDstate=${placeContinent.id}`)

    // Create routesAll
    routesAll = [
      ...postRoutes,
      ...videoRoutes,
      ...foodRoutes,
      ...faunaRoutes,
      ...floraRoutes,
      ...brandRoutes,
      ...chainRoutes,
      ...wallSocketRoutes,
      ...travelDictionaryRoutes,
      ...eventRoutes,
      ...userRoutes,
      ...placesStatesRoutes,
      ...placesContinentsRoutes,
      ...placesRegionsRoutes,
      ...placesCitiesRoutes,
      ...placesSpotsRoutes,
      ...placesStatesSubpagesRoutes,
      ...userSubpagesRoutes,
      ...worldTimeRoutes,
      ...filterPlacesContinentsStatesRoutes,
      ...filterPlacesStatesRegionsRoutes,
      ...filterPlacesStatesCitiesRoutes,
      ...filterPlacesStatesSpotsRoutes,
      ...filterPlacesStatesPostsRoutes,
      ...filterPlacesStatesVideosRoutes
    ]

    // Create other routes
    routesPosts = [
      ...postRoutes
    ]
    routesVideos = [
      ...videoRoutes
    ]
    routesFoods = [
      ...foodRoutes
    ]
    routesFauna = [
      ...faunaRoutes
    ]
    routesFlora = [
      ...floraRoutes
    ]
    routesBrands = [
      ...brandRoutes
    ]
    routesChains = [
      ...chainRoutes
    ]
    routesWallSockets = [
      ...wallSocketRoutes
    ]
    routesTravelDictionary = [
      ...travelDictionaryRoutes
    ]
    routesEvents = [
      ...eventRoutes
    ]
    routesUsers = [
      ...userRoutes,
      ...userSubpagesRoutes
    ]
    routesPlacesStates = [
      ...placesStatesRoutes,
      ...placesStatesSubpagesRoutes
    ]
    routesPlacesContinents = [
      ...placesContinentsRoutes
    ]
    routesPlacesRegions = [
      ...placesRegionsRoutes
    ]
    routesPlacesCities = [
      ...placesCitiesRoutes
    ]
    routesPlacesSpots = [
      ...placesSpotsRoutes
    ]
    routesWorldTimes = [
      ...worldTimeRoutes
    ]
    routesFilters = [
      ...filterPlacesContinentsStatesRoutes,
      ...filterPlacesStatesRegionsRoutes,
      ...filterPlacesStatesCitiesRoutes,
      ...filterPlacesStatesSpotsRoutes,
      ...filterPlacesStatesPostsRoutes,
      ...filterPlacesStatesVideosRoutes
    ]

    return {
      allRoutes: routesAll,
      postRoutes: routesPosts
    }
  } catch (error) {
    return []
  }
}

export default defineNuxtConfig({
  target: 'static',
  ssr: true,

  site: {
    url: 'https://frytolnacestach.cz'
  },
  
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
    '@vite-pwa/nuxt', 
    '@nuxtjs/sitemap',
    'nuxt-jsonld'
  ],

  serverMiddleware: [
    '~/middleware/trailingSlash'
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
      navigateFallback: '/',
      importScripts: [
        'service-worker.js'
      ]
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
    Sitemap: 'https://www.frytolnacestach.cz/sitemap_index.xml',
    TxtSitemap: 'public/robots.txt',
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://www.frytolnacestach.cz',
    baseUrlProduction: process.env.BASE_URL_PRODUCTION || 'https://www.frytolnacestach.cz',
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
        component: resolve(__dirname, 'pages/cestovatel/[slug]/index.vue')
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
        component: resolve(__dirname, 'pages/svet/stat/[slug]/index.vue')
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
    sitemaps: {
      base: {
        includeAppSources: true,
        include: [
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
          '/videa/.*', '/videa\\?.*', 
          '/clanky/.*', '/clanky\\?.*', 
          '/cestovatel/.*', '/cestovatel\\?.*',
          '/cestovatelsky-slovnik/.*', '/cestovatelsky-slovnik\\?.*',
          '/udalost/.*', '/udalost\\?.*',
          '/svetovy-cas/.*', '/svetovy-cas\\?.*',
          '/jidlo/.*', '/jidlo\\?.*',
          '/fauna/.*', '/fauna\\?.*',
          '/flora/.*', '/flora\\?.*',
          '/znacka/.*', '/znacka\\?.*',
          '/retezec/.*', '/retezec\\?.*',
          '/elektricka-zasuvka/.*', '/elektricka-zasuvka\\?.*',
          '/svet/kontinent/.*', '/svet/kontinent\\?.*',
          '/svet/stat/.*', '/svet/stat\\?.*',
          '/svet/region/.*', '/svet/region\\?.*',
          '/svet/mesto/.*', '/svet/mesto\\?.*',
          '/svet/misto/.*', '/svet/misto\\?.*',
        ]
      },
      posts: {
        includeAppSources: true,
        include: ['/clanky/**'],
        exclude: ['/clanky']
      },
      videos: {
        includeAppSources: true,
        include: ['/videa/**'],
        exclude: ['/videa']
      },
      foods: {
        includeAppSources: true,
        include: ['/jidlo/**'],
        exclude: ['/jidlo']
      },
      fauna: {
        includeAppSources: true,
        include: ['/fauna/**'],
        exclude: ['/fauna']
      },
      flora: {
        includeAppSources: true,
        include: ['/flora/**'],
        exclude: ['/flora']
      },
      brands: {
        includeAppSources: true,
        include: ['/znacka/**'],
        exclude: ['/znacka']
      },
      travel_dictionary: {
        includeAppSources: true,
        include: ['/cestovatelsky-slovnik/**'],
        exclude: ['/cestovatelsky-slovnik']
      },
      chains: {
        includeAppSources: true,
        include: ['/retezec/**'],
        exclude: ['/retezec']
      },
      wall_sockets: {
        includeAppSources: true,
        include: ['/elektricka-zasuvka/**'],
        exclude: ['/elektricka-zasuvka']
      },
      events: {
        includeAppSources: true,
        include: ['/udalost/**'],
        exclude: ['/udalost']
      },
      users: {
        includeAppSources: true,
        include: ['/cestovatel/**'],
        exclude: ['/cestovatel']
      },
      world_time: {
        includeAppSources: true,
        include: ['/svetovy-cas/**'],
        exclude: ['/svetovy-cas']
      },
      places_continets: {
        includeAppSources: true,
        include: ['/svet/kontinent/**'],
        exclude: ['/svet/kontinent']
      },
      places_stats: {
        includeAppSources: true,
        include: ['/svet/stat/**'],
        exclude: ['/svet/stat']
      },
      places_regions: {
        includeAppSources: true,
        include: ['/svet/region/**'],
        exclude: ['/svet/region']
      },
      places_cities: {
        includeAppSources: true,
        include: ['/svet/mesto/**'],
        exclude: ['/svet/mesto']
      },
      places_spots: {
        includeAppSources: true,
        include: ['/svet/misto/**'],
        exclude: ['/svet/misto']
      },
      /*TODO: Generování stránek pro filtery by toto melo vyresit.
      filters: {
        includeAppSources: true,
        include: [
          '/svet/region?filterIDstate=*',
          '/svet/mesto?filterIDstate=*',
          '/svet/misto?filterIDstate=*',
          '/clanky?filterIDstate=*',
          '/videa?filterIDstate=*'
        ]
      }*/
    }
  },
  // Generate XML END

  // Generate Hooks
  hooks: {
    async 'nitro:config'(nitroConfig) {
      const { allRoutes } = await getPostRoutes()
      nitroConfig.prerender.routes.push(...allRoutes)
    }
  },
  // Generate Hooks END

  // Generate
  generate: {
    routes: routesAll
  },
  // Generate END

  // Build
  build: {
  },
  // Build END

  devtools: {
    enabled: true
  }
})