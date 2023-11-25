<template>
    <main class="t-main -green -pt-menu" role="main">
        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsItem :links="mNavBreadcrumbsEventArray" :item="event[0]" />
            </div>
        </section>
        <!-- SECTION - BREADCRUMBS END -->

        <!-- SECTION - Buttons -->
        <section class="t-section -px-world mt-1 -p0" v-if="isMobile">
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
                    <div class="t-grid__section -hero-food" v-show="!isMobile || (isMobile && showHero)">
                        <oHeroItemDetail :item="event" :images="image" />
                    </div>
                    <!-- SECTION - hero END -->

                    <!-- SECTION - map -->
                    <div class="t-grid__section -map" v-show="!isMobile || (isMobile && !showHero)">
                        <oMapGoogle :place="event" />
                    </div>
                    <!-- SECTION - map - END -->

                </div>
            </div>
        </section>
        <!-- SECTION - hero + hot info - END -->

        <!-- SECTION -->
        <section class="t-section -px-world -p0">
            <div class="t-section__inner">
                <div class="t-grid -world-content-with-ad">
                    
                    <div class="t-grid__section -content mb-4">
                        <!-- SECTION - information -->
                        <section class="t-section" v-if="event[0].description">
                            <div class="t-section__inner">
                                <oInformationBlock :title="'O události ' + (event[0].name ? event[0].name : '')" :perexWysiwyg="event[0].description" authorName="Michal Fryč" authorLink="https://www.frytolnacestach.cz/cestovatel/frytol-na-cestach" authorTarget="_blank" />
                            </div>
                        </section>
                        <!-- SECTION - information END -->

                        <!-- SECTION - prices -->
                        <section class="t-section my-4 print-section" v-if="event[0].prices">
                            <div class="t-section__inner">
                                <mHeadline title="Cena akce" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                <oPrices :items="event[0].prices" />
                            </div>
                        </section>
                        <!-- SECTION - prices END -->

                        <!-- SECTION - Ubytování - information -->
                        <section class="t-section print-section">
                            <div class="t-section__inner">
                                <oInformationBlock :title="'Ubytování blízko události ' + (event[0].name ? event[0].name : '')" perexWysiwyg="Cena za konkrétní ubytování se může lišit v závislosti na vzdálenosti termínu, délce pobytu a počtu ubytovaných osob. Zde uvedené ceny jsou aktuální na dnešní noc a platí pro dvě osoby. Prostřednictvím služby Booking.com je zajištěno sprostředkování ubytování. Je však třeba poznamenat, že ceny se mohou měnit v závislosti na aktuální poptávce a nabídce. V případě zájmu o rezervaci je tedy vhodné sledovat vývoj cen a včas zajistit své ubytování za nejvýhodnějších podmínek." v-if="event[0].affiliate.find(x => x.name === 'booking').value === true" />
                            </div>
                        </section>
                        <!-- SECTION - Ubytování - information END -->

                        <!-- SECTION - Ubytování -->
                        <section class="t-section -px-world py-2 hidden-print" v-if="event[0] && placeCity[0] && event[0].affiliate.find(x => x.name === 'booking').value === true">
                            <div class="t-section__inner">
                                <div v-for="coordinate in event[0].coordinates">
                                    <oWidgetBooking 
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
                        <section class="t-section -px-world my-2 print-section" v-if="event[0].date_start || event[0].date_end">
                            <div class="t-section__inner">
                                <oDateOfEvent :dateStart="event[0].date_start" :dateEnd="event[0].date_end" />
                            </div>
                        </section>
                        <!-- SECTION - Date of Event - sidebar - END -->

                        <!-- SECTION - links -->
                        <section class="t-section -px-world my-2 print-section" v-if="event[0].links">
                            <div class="t-section__inner">
                                <oLinks :items="event[0].links" />
                            </div>
                        </section>
                        <!-- SECTION - links END -->

                        <!-- SECTION - ad-google - sidebar -->
                        <section class="t-section -px-world mt-4 mb-2">
                            <div class="t-section__inner">
                                <oAdGoogleSidebar />
                            </div>
                        </section>
                        <!-- SECTION - ad-google - sidebar - END -->
                    </div>

                </div>
            </div>
        </section>
        <!-- SECTION END -->
    </main>
</template>

<script>
    import mNavBreadcrumbsItem from '~/components/molecules/mNavBreadcrumbsItem.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oDateOfEvent from '~/components/organisms/oDateOfEvent.vue'
    import oHeroItemDetail from '~/components/organisms/oHeroItemDetail.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oLinks from '~/components/organisms/oLinks.vue'
    import oMapGoogle from '~/components/organisms/oMapGoogle.vue'
    import oPrices from '~/components/organisms/oPrices.vue'
    import oSwitchHero from '~/components/organisms/oSwitchHero.vue'
    import oWidgetBooking from '~/components/organisms/oWidgetBooking.vue'

    export default {
        name: 'SvetMistoSlugPage',

        components: {
            mNavBreadcrumbsItem,
            mHeadline,
            oAdGoogleSidebar,
            oDateOfEvent,
            oHeroItemDetail,
            oInformationBlock,
            oLinks,
            oMapGoogle,
            oPrices,
            oSwitchHero,
            oWidgetBooking
        },

        data() {
            return {
                event: this.event,
                image: this.image,
                placeCity: this.placeCity,
                isMobile: false,
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
            title = `${this.event[0].name ? this.event[0].name : 'Region'} | Cestovatelský portál Frytol na cestách`

            // description
            description = `${this.event[0].description ? this.event[0].description.slice(0, this.event[0].description.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.event[0].name}`

            // keywolds
            let metaSeoTags
            if (this.event[0].seo_tags && this.event[0].seo_tags.length > 0) {
                this.event[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = (this.event[0].name ? this.event[0].name : '') + metaSeoTags + ', událost, cestování, svět, cestovatelský portál, jaké státy tu jsou, plánování cesty, dovolená'
            
            // ogImage
            ogImage = `${this.event[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.image.find(image => image.id === this.event[0].id_image_hero).source + this.image.find(image => image.id === this.event[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/udalost/${this.event[0].slug}`

            // ogType
            ogType = 'website'

            // Return
            return {
                title,
                meta: [
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { property: 'og:image', content: ogImage },
                    { hid: 'og:title', content: ogTitle },
                    { hid: 'og:description', content: ogDescription },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:type', content: ogType }
                ]
            }
        },

        methods:{
            handleResize() {
                // Aktualizovat hodnotu pro "isMobile" při změně velikosti okna
                this.isMobile = window.innerWidth < 992
            }
        },

        mounted() {
            // Zjistit, zda je rozlišení menší než 992px při načítání stránky
            this.isMobile = window.innerWidth < 992

            // Poslouchat událost změny velikosti okna pro aktualizaci přepínače
            window.addEventListener('resize', this.handleResize)
        },

        beforeUnmount() {
            // Zrušit naslouchání události změny velikosti okna při odstranění komponenty
            window.removeEventListener('resize', this.handleResize)
        },

        async asyncData({ $axios, params }) {
            let success = false
            let data = null

            while (!success) {
                try {
                    // PAGE - Event detail
                    // Event
                    const event = await $axios.$get(`https://api.frytolnacestach.cz/api/event/${params.slug}`)
                    // Image
                    const image = event[0].id_image_hero && event[0].id_image_hero !== 0 ? await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${event[0].id_image_hero}`) : []

                    // PlaceCity
                    const placeCity = event[0].id_city && event[0].id_city !== 0 ? await $axios.$get(`https://api.frytolnacestach.cz/api/places-city-id/${event[0].id_city}`) : []


                    data = {
                        event,
                        image,
                        placeCity
                    }
                    
                    success = true
                } catch (error) {
                    console.log(`API ERROR - UDÁLOST DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            return data
        },

        updated() {
            window.lazySizes && window.lazySizes.update()
        }
    }
</script>