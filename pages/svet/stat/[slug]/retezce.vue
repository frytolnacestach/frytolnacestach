<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <MoleculesNavBreadcrumbsPlace :links="mNavBreadcrumbsPlaceArray" :place="place[0]" :tab="activeTab" :tabName="activeTabName" v-if="place && place.length > 0" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <!-- SECTION - Buttons -->
                <section class="t-section -px-world mt-1 -p0 hidden-print hidden-desktop">
                    <div class="t-section__inner">
                        <OrganismsSwitchHero :show-hero.sync="showHero" />
                    </div>
                </section>
                <!-- SECTION - Buttons END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-hero">

                            <!-- SECTION - hero -->
                            <div :class="'t-grid__section -hero-place' + (!showHero ? ' hidden-mobile' : '')">
                                <OrganismsHeroPlace :title="place[0].name" :preTitle="preTitle" :idImageHero="place[0].id_image_hero" :images="imagePlace" v-if="place && place.length > 0" />
                            </div>
                            <!-- SECTION - hero END -->

                            <!-- SECTION - map -->
                            <div :class="'t-grid__section -map' + (showHero ? ' hidden-mobile' : '')">
                                <OrganismsMapGoogle :place="place" v-if="place && place.length > 0 && (place[0].coordinates.length > 0 && place[0].zoom.length > 0)" />
                            </div>
                            <!-- SECTION - map - END -->

                            <!-- SECTION - hot info -->
                            <div class="t-grid__section -hot-info-hero">
                                <OrganismsHotInfoHero :data="oHotInfoHeroArray" styleCol=" -col3"/>
                            </div>
                            <!-- SECTION - hot info - END -->

                        </div>
                    </div>
                </section>

                <!-- SECTION - Alerts -->
                <section class="t-section -px-world-big -p0" v-if="place && place.length > 0 && place[0].alerts">
                    <div class="t-section__inner">
                        <OrganismsAlerts :alerts="place[0].alerts" />
                    </div>
                </section>
                <!-- SECTION - Alerts END -->
            
                <!-- SECTION - Nav place -->
                <section class="t-section -px-world-big -p0" v-if="place && place.length > 0">
                    <div class="t-section__inner">
                        <MoleculesNavPlace :tabs="tabs" :activeTab="activeTab" :place="place[0]" />
                    </div>
                </section>
                <!-- SECTION - Nav place END -->

                <div class="t-main -tab">
                    <section class="t-section -p0">
                        <div class="t-section__inner">
                            <div class="t-grid -world-ful">
                                <div class="t-grid__section -content">
                                    <section class="t-section -px-world -p0 mb-4">
                                        <div class="t-section__inner">
                                            <div class="t-grid -place-main-with-aside">
                                                <div class="t-grid__section -main">

                                                    <!-- SECTION - Řetezce list -->
                                                    <section class="t-section -p0 -px-world my-2">
                                                        <div class="t-section__inner">
                                                            <OrganismsCoverItemState type="retezec" title="Řetězce ve státě" perex="Představujeme vám přehled nadnárodních i místních řetězců, abyste mohli plánovat své nákupy a stravování s lehkostí a přizpůsobit je svým preferencím." :placeStateName="place[0].name" :placeStateID="place[0].id" v-if="place && place.length > 0" />
                                                        </div>
                                                    </section>
                                                    <!-- SECTION - Řetezce list END -->

                                                </div>
                                                <div class="t-grid__section -aside-place-status">

                                                    <!-- SECTION - Visited button - sidebar -->
                                                    <section class="t-section -px-world my-1">
                                                        <div class="t-section__inner">
                                                            <OrganismsVisitedButton :account="account" :place="place[0].id" placeType="state" v-if="place && place.length > 0" />
                                                        </div>
                                                    </section>
                                                    <!-- SECTION - Visited button - sidebar - END -->

                                                </div>
                                                <div class="t-grid__section -aside-content">

                                                    <!-- SECTION - Account banner - sidebar -->
                                                    <section class="t-section -px-world my-1" v-if="account && account.length === 0">
                                                        <div class="t-section__inner">
                                                            <OrganismsAccountBanner :account="account" styleThema=" -green" />
                                                        </div>
                                                    </section>
                                                    <!-- SECTION - Account banner - sidebar END -->

                                                </div>
                                                <div class="t-grid__section -aside-ad">

                                                    <!-- SECTION - ad-google - sidebar -->
                                                    <section class="t-section -px-world mt-4 mb-2">
                                                        <div class="t-section__inner">
                                                            <OrganismsAdGoogleSidebar styleThema=" -green" />
                                                        </div>
                                                    </section>
                                                    <!-- SECTION - ad-google - sidebar - END -->

                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    // Utils
    import { updatedTabs } from '~/utils/tabsPlacesState.js'

    export default defineComponent({
        name: 'SvetStatSlugPage',

        data() {
            return {
                account: useAccountData().accountData,
                preTitle: '',
                tabsLoad: this.tabsLoad,
                place: this.place,
                placeContinent: this.placeContinent,
                imagePlace: this.imagePlace,
                activeTab: 'retezce',
                activeTabName: 'Řetězce',
                showHero: true,
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

        setup() {
            let headMeta = reactive({
                title: '',
                description: '',
                keywords: '',
                ogImage: '',
                ogTitle: '',
                ogDescription: '',
                ogUrl: '',
                ogType: 'website',
            })

            let headLink = ref([
                { rel: 'canonical', href: headMeta.ogUrl }
            ])

            let headScript = reactive({
                "@context": "https://schema.org",
                "@type": "Place",
                "name": "",
                "description": "",
                "image": "",
                "area": {
                    "@type": "QuantitativeValue",
                    "value": "",
                    "comment": "Rozloha v km²"
                },
                "population": {
                    "@type": "QuantitativeValue",
                    "value": ""
                }
            })

            useHead({
                title: headMeta.title,
                meta: [
                    { name: 'description', content: headMeta.description },
                    { name: 'keywords', content: headMeta.keywords },
                    { property: 'og:image', content: headMeta.ogImage },
                    { property: 'og:title', content: headMeta.ogTitle },
                    { property: 'og:description', content: headMeta.ogDescription },
                    { property: 'og:url', content: headMeta.ogUrl },
                    { property: 'og:type', content: headMeta.ogType }
                ],
                link: headLink
            })

            useJsonld(() => headScript)

            return {
                headMeta,
                headLink,
                headScript
            }
        },

        methods: {
            async fetchData() {
                const route = useRoute()

                // PAGE - Place state detail
                // Place
                const responsePlace = await fetch(`https://api.frytolnacestach.cz/api/places-state/${route.params.slug}`)
                this.place = await responsePlace.json()
                // Image
                if (this.place && this.place.length > 0 && this.place[0].id_image_hero && this.place[0].id_image_hero !== 0) {
                    const responseImagePlace = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.place[0].id_image_hero}`)
                    this.imagePlace = await responseImagePlace.json()
                }
                // PlaceContinent
                const responsePlaceContinent = await fetch(`https://api.frytolnacestach.cz/api/places-continent-id/${this.place[0].id_continent}`)
                this.placeContinent = await responsePlaceContinent.json()

                // COMPONENT - Tabs
                if (this.place && this.place.length > 0 && this.place[0].id) {
                    const responseTabsLoad = await fetch(`https://api.frytolnacestach.cz/api/config-world-state-tabs/${this.place[0].id}`)
                    this.tabsLoad = await responseTabsLoad.json()
                }

                // HEAD
                if (this.place && this.place.length > 0) {
                    const tab = this.tabs.find(tab => tab.slug === this.activeTab)
                    const tabLabel = tab.label || ''
                    // Meta
                    this.headMeta.title = `${tabLabel} ve státě ${this.place[0].name} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.description = ((this.place[0].information_author?.length > 0) ? this.place[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_author[0].text.lastIndexOf(' ', 160)) : this.place[0].information_chatgpt ? this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 160)) : this.place[0].name ? this.place[0].name : 'Stát')
                    if (this.place[0].seo_tags && this.place[0].seo_tags.length > 0) {
                        const metaSeoTags = ", " + this.place[0].seo_tags.map(item => item.tag).join(", ")
                        this.headMeta.keywords = (this.place[0].name ? this.place[0].name : '') + metaSeoTags + ', stát, ceny, ubytování, lidé a kultura, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu'
                    } else {
                        this.headMeta.keywords = (this.place[0].name ? this.place[0].name : '') + ', stát, ceny, ubytování, lidé a kultura, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu'
                    }
                    this.headMeta.ogImage = `${(this.place[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png')}`
                    this.headMeta.ogTitle = `${tabLabel} ve státě ${this.place[0].name} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.ogDescription = ((this.place[0].information_author?.length > 0) ? this.place[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_author[0].text.lastIndexOf(' ', 160)) : this.place[0].information_chatgpt ? this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 160)) : this.place[0].name ? this.place[0].name : 'Stát')
                    this.headMeta.ogUrl = `https://www.frytolnacestach.cz/svet/stat/${this.place[0].slug}${this.activeTab !== 'default' ? `/${this.activeTab}` : ''}`
                    this.headLink = [{ rel: 'canonical', href: this.headMeta.ogUrl }]
                    // Script
                    this.headScript.name = (this.place[0].name ? this.place[0].name : "")
                    this.headScript.description = (this.place[0].information_author?.length > 0 ? this.place[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '') : (this.place[0].information_chatgpt ? this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '') : ""))
                    this.headScript.image = ((this.imagePlace && this.imagePlace.length > 0  && this.imagePlace[0].id) ? ("https://image.frytolnacestach.cz/storage/world/states/" + this.imagePlace[0].name + ".webp") : "")
                    this.headScript.area.value = (this.place[0].area ? this.place[0].area : "")
                    this.headScript.population.value = (this.place[0].population ? this.place[0].population : "")
                }
            }
        },

        mounted() {
            // GET Data
            this.fetchData()

            // Pretitle
            this.preTitle = `${this.activeTabName} ve státě`
        },

        watch: {
            tabsLoad: {
                immediate: true,
                handler(newVal, oldVal) {
                    this.tabs = updatedTabs(newVal)
                }
            },

            placeContinent: {
                handler(newValue) {
                    if (newValue && newValue.length > 0) {
                        this.mNavBreadcrumbsPlaceArray[2].name = newValue[0].name
                        this.mNavBreadcrumbsPlaceArray[2].url = ("/svet/kontinent/" + newValue[0].slug)
                        this.oHotInfoHeroArray[0].name = newValue[0].name
                        this.oHotInfoHeroArray[0].url = ("/svet/kontinent/" + newValue[0].slug)
                    } else {
                        this.mNavBreadcrumbsPlaceArray[2].name = "Kontinent"
                        this.mNavBreadcrumbsPlaceArray[2].url = "/svet/kontinent"
                        this.oHotInfoHeroArray[0].name = "_Kontinent_"
                        this.oHotInfoHeroArray[0].url = "/svet/kontinent"
                    }
                },
                deep: true
            },

            place: {
                handler(newValue) {
                    if (newValue && newValue.length > 0) {
                        this.mNavBreadcrumbsPlaceArray[4].name = newValue[0].name
                        this.mNavBreadcrumbsPlaceArray[4].url = ("/svet/stat/" + newValue[0].slug)
                        this.oHotInfoHeroArray[1].name = newValue[0].area
                        this.oHotInfoHeroArray[2].name = newValue[0].population
                    } else {
                        this.mNavBreadcrumbsPlaceArray[4].name = "Stát"
                        this.mNavBreadcrumbsPlaceArray[4].url = "/svet/stat"
                        this.oHotInfoHeroArray[1].name = "_Rozloha_"
                        this.oHotInfoHeroArray[1].name = "_Populace_"
                    }
                },
                deep: true
            }
        }
    })
</script>