<template>
    <main class="t-main -green -pt-menu" role="main">
        <div class="t-main__content">
            <!-- SECTION - BREADCRUMBS -->
            <section class="t-section -px-world mt-2 -p0">
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

            <!-- SECTION - hero + hot info hero -->
            <section class="t-section -px-world -p0">
                <div class="t-section__inner">
                    <div class="t-grid -world-hero">

                        <!-- SECTION - hero -->
                        <div :class="'t-grid__section -hero-place' + (!showHero ? ' hidden-mobile' : '')">
                            <oHeroPlace :title="place[0].name" :idImageHero="place[0].id_image_hero" :images="imagePlace" v-if="place[0]" />
                        </div>
                        <!-- SECTION - hero END -->

                        <!-- SECTION - map -->
                        <div :class="'t-grid__section -map' + (showHero ? ' hidden-mobile' : '')">
                            <oMapGoogle :place="place" />
                        </div>
                        <!-- SECTION - map - END -->

                    </div>
                </div>
            </section>
            <!-- SECTION - hero + hot info - END -->

            <!-- SECTION - Alerts -->
            <section class="t-section -px-world-big -p0" v-if="place[0].alerts">
                <div class="t-section__inner">
                    <oAlerts :alerts="place[0].alerts" />
                </div>
            </section>
            <!-- SECTION - Alerts END -->
        

            <div class="t-main -tab" v-if="place[0]">
                <!-- SECTION -->
                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -content">

                                <!-- SECTION - time -->
                                <section class="t-section -px-world mt-4">
                                    <div class="t-section__inner">
                                        <oTime :mpz="this.place[0].mpz" />
                                    </div>
                                </section>
                                <!-- SECTION - time - END -->

                                <!-- SECTION - Place teaser -->
                                <section class="t-section my-2 -p0">
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
                <!-- SECTION END -->
            </div>
        </div>
    </main>
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


    export default {
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
            const defaultTitle = `Jaký je čas ve státě ${placeName} | Cestovatelský portál Frytol na cestách`
            title = defaultTitle

            // description
            description = `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 160)) : this.place[0].name ? this.place[0].name : 'Stát'}`

            // keywolds
            let metaSeoTags = ""
            if (this.place[0].seo_tags && this.place[0].seo_tags.length > 0) {
                metaSeoTags = ", " + this.place[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = (this.place[0].name ? this.place[0].name : '') + metaSeoTags + ', stát, čas, informace, časové pásma, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu' 
            
            // ogImage
            ogImage = `${this.place[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/svetovy-cas/${this.place[0].slug}`

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

                    data = {
                        place,
                        imagePlace,
                        placeContinent
                    }


                    success = true
                } catch (error) {
                    console.log(`API ERROR - SVĚTOVÝ ČAS DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }
            return data
        },

        mounted() {
            this.activeTab = this.$route.params.tab || 'default'

            //Data for oHotInfoHero
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
            })
        }
    }
</script>