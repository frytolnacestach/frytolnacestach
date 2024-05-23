<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0" v-if="place && place.length > 0">
                    <div class="t-section__inner">
                        <mNavBreadcrumbsItem :links="mNavBreadcrumbsWorldTimwArray" :item="place[0]" />
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
                            <div :class="'t-grid__section -hero-place' + (!showHero ? ' hidden-mobile' : '')" v-if="place && place.length > 0">
                                <oHeroPlace :title="place[0].name" :idImageHero="place[0].id_image_hero" :images="imagePlace" />
                            </div>
                            <!-- SECTION - hero END -->

                            <!-- SECTION - map -->
                            <div :class="'t-grid__section -map' + (showHero ? ' hidden-mobile' : '')" v-if="place && place.length > 0">
                                <oMapGoogle :place="place" />
                            </div>
                            <!-- SECTION - map - END -->

                        </div>
                    </div>
                </section>

                <!-- SECTION - Alerts -->
                <section class="t-section -px-world-big -p0" v-if="place && place.length > 0 && place[0].alerts">
                    <div class="t-section__inner">
                        <oAlerts :alerts="place[0].alerts" />
                    </div>
                </section>
                <!-- SECTION - Alerts END -->

                <div class="t-main -tab" v-if="place && place.length > 0">
                    <section class="t-section -px-world -p0">
                        <div class="t-section__inner">
                            <div class="t-grid -world-content-with-ad">
                                <div class="t-grid__section -content">

                                    <!-- SECTION - time -->
                                    <section class="t-section -px-world mt-4" v-if="place && place.length > 0">
                                        <div class="t-section__inner">
                                            <oTime :mpz="place[0].mpz" />
                                        </div>
                                    </section>
                                    <!-- SECTION - time - END -->

                                    <!-- SECTION - Place teaser -->
                                    <section class="t-section my-2 -p0" v-if="place && place.length > 0">
                                        <div class="t-section__inner">
                                            <oPlaceTeaser :headline="'Více informací o státě ' + place[0].name" :place="place" :image="imagePlace" type="stat" />
                                        </div>
                                    </section>
                                    <!-- SECTION - Place teaser END -->
                            
                                </div>
                                <div class="t-grid__section -ad">

                                    <!-- SECTION - ad-google - sidebar -->
                                    <section class="t-section -px-world mt-4 mb-2">
                                        <div class="t-section__inner">
                                            <oAdGoogleSidebar styleThema=" -green" />
                                        </div>
                                    </section>
                                    <!-- SECTION - ad-google - sidebar - END -->

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
    import mNavBreadcrumbsItem from '~/components/molecules/mNavBreadcrumbsItem.vue'
    import mNavPlace from '~/components/molecules/mNavPlace.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oAlerts from '~/components/organisms/oAlerts.vue'
    import oHeroPlace from '~/components/organisms/oHeroPlace.vue'
    import oHotInfoHero from '~/components/organisms/oHotInfoHero.vue'
    import oMapGoogle from '~/components/organisms/oMapGoogle.vue'
    import oPlaceTeaser from '~/components/organisms/oPlaceTeaser.vue'
    import oSwitchHero from '~/components/organisms/oSwitchHero.vue'
    import oTime from '~/components/organisms/oTime.vue'


    export default defineComponent({
        name: 'SvetStatSlugPage',

        components: {
            mNavBreadcrumbsItem,
            mNavPlace,
            mHeadline,
            oAdGoogleSidebar,
            oHeroPlace,
            oHotInfoHero,
            oMapGoogle,
            oPlaceTeaser,
            oSwitchHero,
            oTime
        },

        data() {
            return {
                place: this.place,
                placeContinent: this.placeContinent,
                imagePlace: this.imagePlace,
                showHero: true,
                mNavBreadcrumbsWorldTimwArray: [
                    {
                        id: 1,
                        name: "Světový čas",
                        url: "/svetovy-cas",
                        status: "link"
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
                title: 'Detail jídla | Cestovatelský portál Frytol na cestách',
                description: 'Popis detailu jídla',
                keywords: 'Jídlo, Tradiční jídlo, informace o jídle, plánuj cestu, cestovatelský portál, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'Detail jídla | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Popis detailu jídla',
                ogUrl: `https://www.frytolnacestach.cz/jidlo/slug`,
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

            watch(headMeta, (newMeta) => {
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
            }, { deep: true })

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
                const responsePlace = await fetch(`https://api.frytolnacestach.cz/api/places-state/${params.slug}`)
                this.place = await responsePlace.json() || []
                // Image
                if (this.place && this.place.length > 0 && this.place[0].id_image_hero && this.place[0].id_image_hero !== 0) {
                    const responseImagePlace = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.place[0].id_image_hero}`)
                    this.imagePlace = await responseImagePlace.json() || []
                }
                // PlaceContinent
                if (this.place && this.place.length > 0) {
                    const responsePlaceContinent = await fetch(`https://api.frytolnacestach.cz/api/places-continent-id/${this.place[0].id_continent}`)
                    this.placeContinent = await responsePlaceContinent.json() || []
                }

                // HEAD
                if (this.place && this.place.length > 0) {
                    // Meta
                    this.headMeta.title = `Jaký je čas ve státě ${(this.place && this.place.length > 0) ? this.place[0].name : 'Stát'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.description = `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 160)) : this.place[0].name ? this.place[0].name : 'Stát'}`
                    if (this.place[0].seo_tags && this.place[0].seo_tags.length > 0) {
                        const metaSeoTags = ", " + this.place[0].seo_tags.map(item => item.tag).join(", ")
                        this.headMeta.keywords = (this.place[0].name ? this.place[0].name : '') + metaSeoTags + ', stát, čas, informace, časové pásma, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu' 
                    } else {
                        this.headMeta.keywords = (this.place[0].name ? this.place[0].name : '') + ', stát, čas, informace, časové pásma, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu' 
                    }
                    this.headMeta.ogImage = `${this.place[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
                    this.headMeta.ogTitle = `Jaký je čas ve státě ${(this.place && this.place.length > 0) ? this.place[0].name : 'Stát'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.ogDescription = `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 160)) : this.place[0].name ? this.place[0].name : 'Stát'}`
                    this.headMeta.ogUrl = `https://www.frytolnacestach.cz/svetovy-cas/${(this.place && this.place.length > 0 && this.place[0].slug) ? this.place[0].slug : "slug_svetovy-cas"}`
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
            this.fetchData()

            this.activeTab = this.$route.params.tab || 'default'

            //Data for oHotInfoHero
            /*TODO
            this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
                if (item.id === 1) {
                    item.name = this.placeContinent[0].name
                    item.url = `/svet/kontinent/${this.placeContinent[0].slug}`
                }
                return item;
            })
            this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
                if (item.id === 2) {
                    item.name = this.place[0].area
                }
                return item;
            })
            this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
                if (item.id === 3) {
                    item.name = this.place[0].population
                }
                return item
            })*/
        }
    })
</script>