<template>
    <main class="t-main -green -pt-menu" role="main">
        <div class="t-main__content">
            
            <!-- SECTION - BREADCRUMBS -->
            <section class="t-section -px-world mt-2 -p0">
                <div class="t-section__inner">
                    <mNavBreadcrumbsPlace :links="mNavBreadcrumbsPlaceArray" :place="place[0]" :tab="activeTab" :tabName="activeTabName" />
                </div>
            </section>
            <!-- SECTION - BREADCRUMBS END -->

            <!-- SECTION - Buttons -->
            <section class="t-section -px-world mt-1 -p0 hidden-print hidden-desktop">
                <div class="t-section__inner">
                    <oSwitchHero :show-hero.sync="showHero" />
                </div>
            </section>
            <!-- SECTION - Buttons END -->

            <section class="t-section -px-world -p0">
                <div class="t-section__inner">
                    <div class="t-grid -world-hero">

                        <!-- SECTION - hero -->
                        <div :class="'t-grid__section -hero-place' + (!showHero ? ' hidden-mobile' : '')">
                            <oHeroPlace :title="place[0].name" :preTitle="preTitle" :idImageHero="place[0].id_image_hero" :images="imagePlace" v-if="place[0]" />
                        </div>
                        <!-- SECTION - hero END -->

                        <!-- SECTION - map -->
                        <div :class="'t-grid__section -map' + (showHero ? ' hidden-mobile' : '')">
                            <oMapGoogle :place="place" />
                        </div>
                        <!-- SECTION - map - END -->

                        <!-- SECTION - hot info -->
                        <div class="t-grid__section -hot-info-hero">
                            <oHotInfoHero :data="oHotInfoHeroArray" styleCol=" -col3"/>
                        </div>
                        <!-- SECTION - hot info - END -->

                    </div>
                </div>
            </section>

            <!-- SECTION - Alerts -->
            <section class="t-section -px-world-big -p0" v-if="place[0].alerts">
                <div class="t-section__inner">
                    <oAlerts :alerts="place[0].alerts" />
                </div>
            </section>
            <!-- SECTION - Alerts END -->
        
            <!-- SECTION - Nav place -->
            <section class="t-section -px-world-big -p0" v-if="place[0]">
                <div class="t-section__inner">
                    <mNavPlace :tabs="tabs" :activeTab="activeTab" :place="place[0]" />
                </div>
            </section>
            <!-- SECTION - Nav place END -->

            <div class="t-main -tab" v-if="place[0]">
                <section class="t-section -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-full">
                            <div class="t-grid__section -content">

                                <!-- SECTION - videos -->
                                <section class="t-section -p0 -px-world my-2" v-if="place[0] && videos.length !== 0">
                                    <div class="t-section__inner">
                                        <mHeadline title="Videa ze státu" :titleValue="place[0].name" :perex="'Podívejte se na fascinující videa ze státu ' + place[0].name + ', která nám poskytují jedinečný pohled na tuto zemi. Prozkoumejte krásy krajiny, pochopte bohatou historii a zažijte každodenní život prostřednictvím těchto videí. Získejte nezapomenutelný pohled na ' + place[0].name + ' prostřednictvím objektivu, který zachycuje nejzajímavější momenty a místa tohoto úžasného státu.'" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oVideoList :videos="videos" :images="imagesVideos" type="travel" styleThema=" -world-tab" styleThemaLoading=" -green" styleAlign=" -p-left" />
                                        <oVideoList :videos="null" :images="null" styleThema=" -world" skeletonThema=" -skeleton-green" skeletonNumber="3" :skeleton=true v-if="isLoadingVideos" />
                                        <oNoneContent text="Bohužel zde nejsou žádné videa" styleThema=" -green" styleGap=" px-1" v-if="videos && videos.length === 0 && !isLoadingVideos" />
                                        <div class="flex flex-center my-2" v-if="!isLoadingVideos && !noMoreVideosItems">
                                            <span class="a-button-border -big -green" @click="loadMoreVideosItems">Načíst další videa</span>
                                        </div>
                                    </div>
                                </section>
                                <!-- SECTION - videos END -->
                                
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>

<script>
    import mNavBreadcrumbsPlace from '~/components/molecules/mNavBreadcrumbsPlace.vue'
    import mNavPlace from '~/components/molecules/mNavPlace.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oAccountBanner from '~/components/organisms/oAccountBanner.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oAffilateBooking from '~/components/organisms/oAffilateBooking.vue'
    import oAlerts from '~/components/organisms/oAlerts.vue'
    import oHeroPlace from '~/components/organisms/oHeroPlace.vue'
    import oHotInfoHero from '~/components/organisms/oHotInfoHero.vue'
    import oNoneContent from '~/components/organisms/oNoneContent.vue'
    import oMapGoogle from '~/components/organisms/oMapGoogle.vue'
    import oSwitchHero from '~/components/organisms/oSwitchHero.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'
    import oVisitedButton from '~/components/organisms/oVisitedButton.vue'


    export default {
        name: 'SvetStatSlugPage',

        components: {
            mNavBreadcrumbsPlace,
            mNavPlace,
            mHeadline,
            oAccountBanner,
            oAdGoogleSidebar,
            oAffilateBooking,
            oAlerts,
            oHeroPlace,
            oHotInfoHero,
            oNoneContent,
            oMapGoogle,
            oSwitchHero,
            oVideoList,
            oVisitedButton
        },

        data() {
            return {
                account: [],
                preTitle: '',
                tabsLoad: this.tabsLoad,
                place: this.place,
                placeContinent: this.placeContinent,
                imagePlace: this.imagePlace,
                activeTab: 'videa',
                activeTabName: 'Videa',
                showHero: true,
                videos: [],
                imagesVideos: [],
                isLoadingVideos: true,
                noMoreVideosItems: false,
                videosPage: 1,
                videosPerPage: 9,
                tabs: [
                    { slug: 'default', label: 'state_name', visible: true },
                    { slug: 'co-videt', label: 'Co vidět', visible: true },
                    { slug: 'ceny', label: 'Ceny', visible: true },
                    { slug: 'lide', label: 'Lidé', visible: true },
                    { slug: 'cesta', label: 'Cesta', visible: true },
                    { slug: 'kontakty', label: 'Kontakty', visible: true },
                    { slug: 'ubytovani', label: 'Ubytování', visible: true },
                    { slug: 'videa', label: 'Videa', visible: true },
                    { slug: 'clanky', label: 'Články', visible: true },
                    { slug: 'sousedni-staty', label: 'Sousední státy', visible: true },
                    { slug: 'elektricke-zasuvky', label: 'Elektrické zásuvky', visible: true },
                    { slug: 'fauna', label: 'Fauna', visible: true },
                    { slug: 'flora', label: 'Flora', visible: true },
                    { slug: 'jidlo', label: 'Jídlo', visible: true },
                    { slug: 'vyrobky', label: 'Výrobky', visible: true },
                    { slug: 'retezce', label: 'Řetězce', visible: true }
                ],
                mNavBreadcrumbsPlaceArray: [
                    {
                        id: 1,
                        icon: true,
                        type: "world",
                        name: "Svět",
                        url: "/svet",
                        status: "link"
                    },
                    {
                        id: 2,
                        icon: true,
                        type: "continent",
                        name: "Kontinenty",
                        url: "/svet/kontinent",
                        status: "link"
                    },
                    {
                        id: 3,
                        icon: false,
                        type: "continent",
                        name: "Kontinent",
                        url: "/svet/kontinent",
                        status: "link"
                    },
                    {
                        id: 4,
                        icon: true,
                        type: "state",
                        name: "Státy",
                        url: "/svet/stat",
                        status: "link"
                    },
                    {
                        id: 5,
                        icon: false,
                        type: "state",
                        name: "Stát",
                        url: "/svet/stat",
                        status: "span"
                    }
                ],
                oHotInfoHeroArray: [
                    {
                        id: 1,
                        title: "Kontinent",
                        name: "_NÁZEV KONTINENTU_",
                        url: `_ODKAZ_`,
                        type: "string",
                    },
                    {
                        id: 2,
                        title: "Rozloha",
                        name: "_ROZLOHA_",
                        type: "number",
                        subfix: " km²"
                    },
                    {
                        id: 3,
                        title: "Populace",
                        name: "_POPULACE_",
                        type: "number"
                    }
                ]
            }
        },

        methods:{
            updatedTabs() {
                const hasTabDefault = true
                const hasTabShow = this.tabsLoad.tabWhatToSee
                const hasTabPrice = this.tabsLoad.tabPrice
                const hasTabPeople = this.tabsLoad.tabPeople
                const hasTabTrip = this.tabsLoad.tabTrip
                const hasTabContacts = this.tabsLoad.tabContact
                const hasTabHotel = this.tabsLoad.tabHotel
                const hasTabVideos = this.tabsLoad.tabVideos > 0
                const hasTabPosts = this.tabsLoad.tabArticles > 0
                const hasTabNeighboring = this.tabsLoad.tabNeighboring > 0
                const hasTabWallSockets = this.tabsLoad.tabWallSockets > 0
                const hasTabChains = this.tabsLoad.tabChains > 0
                const hasTabFauna = this.tabsLoad.tabFauna > 0
                const hasTabFlora = this.tabsLoad.tabFlora > 0
                const hasTabFoods = this.tabsLoad.tabFoods > 0
                const hasTabBrands = this.tabsLoad.tabBrands > 0

                const newTabs = [
                    { slug: 'default', label: 'Výchozí', visible: hasTabDefault },
                    { slug: 'co-videt', label: 'Co vidět', visible: hasTabShow },
                    { slug: 'ceny', label: 'Ceny', visible: hasTabPrice },
                    { slug: 'lide', label: 'Lidé', visible: hasTabPeople },
                    { slug: 'cesta', label: 'Cesta', visible: hasTabTrip },
                    { slug: 'kontakty', label: 'Kontakty', visible: hasTabContacts },
                    { slug: 'ubytovani', label: 'Ubytování', visible: hasTabHotel },
                    { slug: 'videa', label: 'Videa', visible: hasTabVideos },
                    { slug: 'clanky', label: 'Články', visible: hasTabPosts },
                    { slug: 'sousedni-staty', label: 'Sousední státy', visible: hasTabNeighboring },
                    { slug: 'elektricke-zasuvky', label: 'Elektrické zásuvky', visible: hasTabWallSockets },
                    { slug: 'retezce', label: 'Řetězce', visible: hasTabChains },
                    { slug: 'fauna', label: 'Fauna', visible: hasTabFauna },
                    { slug: 'flora', label: 'Flora', visible: hasTabFlora },
                    { slug: 'jidlo', label: 'Jídlo', visible: hasTabFoods },
                    { slug: 'vyrobky', label: 'Výrobky', visible: hasTabBrands }
                ]

                this.tabs = newTabs
            },

            async loadVideos() {
                //start loading
                this.isLoadingVideos = true

                // Variable
                let videosResponse

                //load videos
                videosResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/videos-id-state/${this.place[0].id}?showType=list&page=${this.videosPage}&items=${this.videosPerPage}`)
                const { data: videosData } = videosResponse

                //load images
                const imagesVideosIDS = videosData.map(videos => videos.id_image).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesVideosIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosIDS.join(',')}`)
                    const { data: imagesData } = imagesResponse
                    this.imagesVideos = this.imagesVideos.concat(imagesData)
                
                    // add to videosData to videos
                    this.videos = this.videos.concat(videosData)
                } else {
                    // add to videosData to videos
                    this.videos = this.videos.concat(videosData)
                } 

                //no more items?
                if (videosData.length === 0 || videosData.length < this.videosPerPage) {
                    this.noMoreVideosItems = true
                }

                //end loading
                this.isLoadingVideos = false
            },

            loadMoreVideosItems() {
                //no further loading can occur while loading
                if (this.isLoadingVideos || this.noMoreVideosItems) {
                    return
                }
                // loading more items
                this.videosPage++
                this.loadVideos()
            }
        },

        head() {
            // Variables
            let title
            let description
            let keywords
            let ogImage
            let ogTitle
            let ogDescription
            let ogUrl
            let ogType

            // title
            const placeName = this.place && this.place.length > 0 ? this.place[0].name : 'Stát'
            const defaultTitle = `${placeName} | Cestovatelský portál Frytol na cestách`
            title = defaultTitle

            // tab
            const tab = this.tabs.find(tab => tab.slug === this.activeTab)
            const label = tab.label || ''
            let tabTitle = `${label} ze států ${placeName} | Cestovatelský portál Frytol na cestách`
            title = tabTitle

            // description
            description = this.place[0].information_author?.length > 0 ? this.place[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_author[0].text.lastIndexOf(' ', 160)) : this.place[0].information_chatgpt ? this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 160)) : this.place[0].name ? this.place[0].name : 'Stát'

            // keywolds
            let metaSeoTags = ""
            if (this.place[0].seo_tags && this.place[0].seo_tags.length > 0) {
                metaSeoTags = ", " + this.place[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = (this.place[0].name ? this.place[0].name : '') + metaSeoTags + ', stát, ceny, ubytování, lidé a kultura, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu'

            // ogImage
            ogImage = `${this.place[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/svet/stat/${this.place[0].slug}${this.activeTab !== 'default' ? `/${this.activeTab}` : ''}`

            // ogType
            ogType = 'website'

            // Return
            return {
                title,
                meta: [
                    { hid: 'title', name: 'title', content: title },
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { hid: 'og:type', content: ogType },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:title', content: ogTitle },
                    { hid: 'og:description', content: ogDescription },
                    { property: 'og:image', content: ogImage },
                    { name: 'twitter:title', content: ogTitle },
                    { name: 'twitter:description', content: ogDescription },
                    { name: 'twitter:image', content: ogImage },
                    { name: 'twitter:url', content: ogUrl }
                ],
                link: [
                    { rel: 'canonical', href: ogUrl }
                ],
                script: [
                    {
                        type: 'application/ld+json',
                        json: {
                            "@context": "https://schema.org",
                            "@type": "Place",
                            "name": (this.place[0].name ? this.place[0].name : ""),
                            "description": (this.place[0].information_author?.length > 0 ? this.place[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '') : (this.place[0].information_chatgpt ? this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '') : "")),
                            "image": ((this.imagePlace[0] && this.imagePlace[0].id) ? ("https://image.frytolnacestach.cz/storage/world/states/" + this.imagePlace[0].name + ".webp") : "" ),
                            "area": {
                                "@type": "QuantitativeValue",
                                "value": (this.place[0].area ? this.place[0].area : ""),
                                "comment": "Rozloha v km²"
                            },
                            "population": {
                                "@type": "QuantitativeValue",
                                "value": (this.place[0].population ? this.place[0].population : "")
                            }
                        }
                    }
                ]
            }
        },

        async asyncData({ $axios, params }) {
            let success = false
            let data = null

            while (!success) { 
                try {
                    // PAGE - Place state detail
                    // Place
                    const place = await $axios.$get(`https://api.frytolnacestach.cz/api/places-state/${params.slug}`)
                    // Image
                    const imagePlace = place[0].id_image_hero && place[0].id_image_hero !== 0 ? await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${place[0].id_image_hero}`) : []
                    // PlaceContinent
                    const placeContinent = await $axios.$get(`https://api.frytolnacestach.cz/api/places-continent-id/${place[0].id_continent}`)


                    // COMPONENT - Tabs
                    let tabsLoad
                    if (place[0].id) {
                        tabsLoad = await $axios.$get(`https://api.frytolnacestach.cz/api/config-world-state-tabs/${place[0].id}`)
                    }


                    data = {
                        tabsLoad,
                        place,
                        imagePlace,
                        placeContinent
                    }


                    success = true
                } catch (error) {
                    console.log(`API ERROR - STÁT DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }
            return data
        },

        mounted() {
            this.loadVideos()

            // Pretitle
            this.preTitle = `${this.activeTabName} ze států`

            //Data for mNavBreadcrumbsPlaceArray 
            //continent
            this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                if (item.id === 3) {
                    item.name = this.placeContinent[0].name
                    item.url = "/svet/kontinent/" + this.placeContinent[0].slug
                }
                return item
            })
            //state
            if(this.activeTab === 'undefined' || this.activeTab === 'default') {
                this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                    if (item.id === 5) {
                        item.name = this.place[0].name
                        item.url = "/svet/stat/" + this.place[0].slug
                        item.status = "span"
                    }
                    return item
                })
            } else {
                this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                    if (item.id === 5) {
                        item.name = this.place[0].name
                        item.url = "/svet/stat/" + this.place[0].slug
                        item.status = "link"
                    }
                    return item
                })
            }

            //Data for oHotInfoHero
            this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
                if (item.id === 1) {
                    item.name = this.placeContinent[0].name
                    item.url = `/svet/kontinent/${this.placeContinent[0].slug}`
                }
                return item
            })
            this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
                if (item.id === 2) {
                    item.name = this.place[0].area
                }
                return item
            })
            this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
                if (item.id === 3) {
                    item.name = this.place[0].population
                }
                return item
            })
        },

        watch: {
            '$store.state.account': {
                deep: true,
                immediate: true,
                handler() {
                    this.account = this.$store.state.account
                }
            },

            tabsLoad: {
                immediate: true,
                handler(newVal, oldVal) {
                    this.updatedTabs()
                }
            }
        }
    }
</script>