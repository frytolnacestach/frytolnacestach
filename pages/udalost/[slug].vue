<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">
                
                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <mNavBreadcrumbsItem :links="mNavBreadcrumbsEventArray" :item="event[0]" v-if="event && event.length > 0" />
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
                            <div :class="'t-grid__section -hero-place' + (!showHero ? ' hidden-mobile' : '')" v-if="event && event.length > 0">
                                <oHeroItemDetail :item="event" :images="image" />
                            </div>
                            <!-- SECTION - hero END -->

                            <!-- SECTION - map -->
                            <div :class="'t-grid__section -map' + (showHero ? ' hidden-mobile' : '')" v-if="event && event.length > 0">
                                <oMapGoogle :place="event" />
                            </div>
                            <!-- SECTION - map - END -->

                        </div>
                    </div>
                </section>
                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -content mb-4">

                                <!-- SECTION - information -->
                                <section class="t-section" v-if="event && event.length > 0 && event[0].description">
                                    <div class="t-section__inner">
                                        <oInformationBlock :title="'O události ' + (event[0].name ? event[0].name : '')" :perexWysiwyg="event[0].description" authorName="Michal Fryč (frytolnacestach)" authorLink="https://www.frytolnacestach.cz/cestovatel/frytol-na-cestach" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information END -->

                                <!-- SECTION - prices -->
                                <section class="t-section my-4 print-section" v-if="event && event.length > 0 && event[0].prices && event[0].prices.length > 0">
                                    <div class="t-section__inner">
                                        <mHeadline title="Cena akce" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oPrices :items="event[0].prices" />
                                    </div>
                                </section>
                                <!-- SECTION - prices END -->

                                <!-- SECTION - Ubytování - information -->
                                <section class="t-section print-section" v-if="event && event.length > 0 && event[0].affiliate.find(x => x.name === 'booking').value === true">
                                    <div class="t-section__inner">
                                        <oInformationBlock :title="'Ubytování blízko události ' + (event[0].name ? event[0].name : '')" perexWysiwyg="Cena za konkrétní ubytování se může lišit v závislosti na vzdálenosti termínu, délce pobytu a počtu ubytovaných osob. Zde uvedené ceny jsou aktuální na dnešní noc a platí pro dvě osoby. Prostřednictvím služby Booking.com je zajištěno sprostředkování ubytování. Je však třeba poznamenat, že ceny se mohou měnit v závislosti na aktuální poptávce a nabídce. V případě zájmu o rezervaci je tedy vhodné sledovat vývoj cen a včas zajistit své ubytování za nejvýhodnějších podmínek." />
                                    </div>
                                </section>
                                <!-- SECTION - Ubytování - information END -->

                                <!-- SECTION - Ubytování -->
                                <section class="t-section -px-world py-2 hidden-print" v-if="event && event.length > 0 && placeCity && placeCity.length > 0 && event[0].affiliate.find(x => x.name === 'booking').value === true">
                                    <div class="t-section__inner">
                                        <div v-for="coordinate in event[0].coordinates">
                                            <oAffilateBooking 
                                                :landmarkName="`${ placeCity[0].name ? placeCity[0].name : '' }`"
                                                :address="`${ placeCity[0].name ? placeCity[0].name : '' }`"
                                                :latitude=parseFloat(coordinate.latitude)
                                                :longitude=parseFloat(coordinate.longitude)
                                                :zoom=event[0].zoom[0].booking
                                                :dateStart=event[0].date_start
                                                :dateEnd=event[0].date_end
                                            />
                                        </div>
                                    </div>
                                </section>
                                <!-- SECTION - Ubytování END -->

                            </div>
                            <div class="t-grid__section -ad">
                                
                                <!-- SECTION - Date of Event - sidebar -->
                                <section class="t-section -px-world my-2 print-section" v-if="(event && event.length > 0 && event[0].date_start) || (event && event.length > 0 && event[0].date_end)">
                                    <div class="t-section__inner">
                                        <oDateOfEvent :dateStart="event[0].date_start" :dateEnd="event[0].date_end" />
                                    </div>
                                </section>
                                <!-- SECTION - Date of Event - sidebar - END -->

                                <!-- SECTION - links -->
                                <section class="t-section -px-world my-2 print-section" v-if="event && event.length > 0 && event[0].links && event[0].links.length > 0">
                                    <div class="t-section__inner">
                                        <oLinks :items="event[0].links" />
                                    </div>
                                </section>
                                <!-- SECTION - links END -->

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
                <div class="t-layout-full" v-if="(event && event.length > 0 && event[0].id_continent) || (event && event.length > 0 && event[0].id_state) || (event && event.length > 0 && event[0].id_region) || (event && event.length > 0 && event[0].id_city) || (event && event.length > 0 && event[0].id_spot)">

                    <!-- SECTION - place -->
                    <section class="t-section -p0 pt-2 pb-1 print-section" v-if="event && event.length > 0">
                        <div class="t-section__inner">
                            <mHeadline title="Více informací o místě" styleThema=" -green" styleAlign=" -p-left" styleGap=" mx-2 mb-2" />
                            <div class="flex mx-1">
                                <oPlaceBlock :placeID="event[0].id_continent" type="kontinent" styleThema=" -green" v-if="event[0].id_continent" />
                                <oPlaceBlock :placeID="event[0].id_state" type="stat" styleThema=" -green" v-if="event[0].id_state" />
                                <oPlaceBlock :placeID="event[0].id_region" type="region" styleThema=" -green" v-if="event[0].id_region" />
                                <oPlaceBlock :placeID="event[0].id_city" type="mesto" styleThema=" -green" v-if="event[0].id_city" />
                                <oPlaceBlock :placeID="event[0].id_spot" type="misto" styleThema=" -green" v-if="event[0].id_spot" />
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - place END -->

                </div>
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    import mNavBreadcrumbsItem from '~/components/molecules/mNavBreadcrumbsItem.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oAffilateBooking from '~/components/organisms/oAffilateBooking.vue'
    import oDateOfEvent from '~/components/organisms/oDateOfEvent.vue'
    import oHeroItemDetail from '~/components/organisms/oHeroItemDetail.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oLinks from '~/components/organisms/oLinks.vue'
    import oMapGoogle from '~/components/organisms/oMapGoogle.vue'
    import oPlaceBlock from '~/components/organisms/oPlaceBlock.vue'
    import oPrices from '~/components/organisms/oPrices.vue'
    import oSwitchHero from '~/components/organisms/oSwitchHero.vue'

    export default defineComponent({
        name: 'UdalostSlugPage',

        components: {
            mNavBreadcrumbsItem,
            mHeadline,
            oAdGoogleSidebar,
            oAffilateBooking,
            oDateOfEvent,
            oHeroItemDetail,
            oInformationBlock,
            oLinks,
            oMapGoogle,
            oPlaceBlock,
            oPrices,
            oSwitchHero
        },

        data() {
            return {
                event: this.event,
                image: this.image,
                placeCity: [],
                showHero: true,
                mNavBreadcrumbsEventArray: [
                    {
                        id: 1,
                        name: "Události",
                        url: "/udalost",
                        status: "link"
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
                "@context": "http://schema.org",
                "@type": "Event",
                "name": "",
                "startDate": "",
                "endDate": "",
                "location": {
                    "@type": "Place",
                    "name": ""
                },
                "description": "",
                "image": ""
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

                // PAGE - Event detail
                // Event
                const responseEvent = await fetch(`https://api.frytolnacestach.cz/api/event/${route.params.slug}`)
                this.event = await responseEvent.json() || []
                // Image
                if (this.event && this.event.length > 0 && this.event[0].id_image_hero && this.event[0].id_image_hero !== 0) {
                    const responseImage = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.event[0].id_image_hero}`)
                    this.image = await responseImage.json() || []
                }
                // PlaceCity
                if (this.event && this.event.length > 0 && this.event[0].id_city && this.event[0].id_city !== 0) {
                    const responsePlaceCity = await fetch(`https://api.frytolnacestach.cz/api/places-city-id/${this.event[0].id_city}`)
                    this.placeCity = await responsePlaceCity.json() || []
                }

                // HEAD
                if (this.event && this.event.length > 0) {
                    // Meta
                    this.headMeta.title = `${(this.event[0].name) ? this.event[0].name : 'Region'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.description = `${(this.event[0].description) ? this.event[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.event[0].description.lastIndexOf(' ', 160)) : this.event[0].name}`
                    if (this.event[0].seo_tags && this.event[0].seo_tags.length > 0) {
                        const metaSeoTags = ", " + this.event[0].seo_tags.map(item => item.tag).join(", ")
                        this.headMeta.keywords = ((this.event[0].name) ? this.event[0].name : '') + metaSeoTags + ', událost, cestování, svět, cestovatelský portál, jaké státy tu jsou, plánování cesty, dovolená'
                    } else {
                        this.headMeta.keywords = ((this.event[0].name) ? this.event[0].name : '') + ', událost, cestování, svět, cestovatelský portál, jaké státy tu jsou, plánování cesty, dovolená'
                    }
                    this.headMeta.ogImage = `${(this.event[0].id_image_hero) ? 'https://image.frytolnacestach.cz/storage/' + this.image.find(image => image.id === this.event[0].id_image_hero).source + this.image.find(image => image.id === this.event[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
                    this.headMeta.ogTitle = `${(this.event[0].name) ? this.event[0].name : 'Region'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.ogDescription = `${(this.event[0].description) ? this.event[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.event[0].description.lastIndexOf(' ', 160)) : this.event[0].name}`
                    this.headMeta.ogUrl = `https://www.frytolnacestach.cz/udalost/${(this.event[0].slug) ? this.event[0].slug : 'slug_event'}`
                    this.headLink = [{ rel: 'canonical', href: this.headMeta.ogUrl }]
                    // Script
                    this.headScript.name = (this.event[0].name ? this.event[0].name : "")
                    this.headScript.description = (this.event[0].description ? this.event[0].description : "")
                    this.headScript.image = ((this.image && this.image[0] && this.image[0].id) ? ("https://image.frytolnacestach.cz/storage/events/" + this.image[0].name + ".webp") : "")
                    this.headScript.startDate = (this.event[0].date_start ? this.event[0].date_start : "")
                    this.headScript.endDate = (this.event[0].date_end ? this.event[0].date_end : "")
                    this.headScript.location.name = ((this.placeCity && this.placeCity[0]) ? (this.placeCity[0].name ? this.placeCity[0].name : "") : "")
                }
            }
        },

        mounted() {
            this.fetchData()
        }
    })
</script>