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
        <section class="t-section -px-world mt-1" v-if="isMobile">
            <div class="t-section__inner">
                <div class="flex flex-end-all">
                    <a v-if="!showHero" @click="showHero = true" class="a-button-pure-icon -cover">Obrázek</a>
                    <a v-else @click="showHero = false" class="a-button-pure-icon -map">Mapa</a>
                </div>
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
                        <section class="t-section my-4" v-if="event[0].prices">
                            <div class="t-section__inner">
                                <mHeadline title="Cena akce" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                <oPrices :items="event[0].prices" />
                            </div>
                        </section>
                        <!-- SECTION - prices END -->

                        <!-- SECTION - Ubytování - information -->
                        <section class="t-section">
                            <div class="t-section__inner">
                                <oInformationBlock :title="'Ubytování blízko události ' + (event[0].name ? event[0].name : '')" perexWysiwyg="Cena za konkrétní ubytování se může lišit v závislosti na vzdálenosti termínu, délce pobytu a počtu ubytovaných osob. Zde uvedené ceny jsou aktuální na dnešní noc a platí pro dvě osoby. Prostřednictvím služby Booking.com je zajištěno sprostředkování ubytování. Je však třeba poznamenat, že ceny se mohou měnit v závislosti na aktuální poptávce a nabídce. V případě zájmu o rezervaci je tedy vhodné sledovat vývoj cen a včas zajistit své ubytování za nejvýhodnějších podmínek." v-if="event[0].affiliate.find(x => x.name === 'booking').value === true" />
                            </div>
                        </section>
                        <!-- SECTION - Ubytování - information END -->

                        <!-- SECTION - Ubytování -->
                        <section class="t-section -px-world py-2" v-if="event[0].affiliate.find(x => x.name === 'booking').value === true">
                            <div class="t-section__inner">
                                <div v-for="coordinate in event[0].coordinates">
                                    <oWidgetBooking 
                                        :landmarkName="`${ placeCity[0].name ? placeCity[0].name : '' }`"
                                        :address="`${ placeCity[0].name ? placeCity[0].name : '' }`"
                                        :latitude=parseFloat(coordinate.latitude)
                                        :longitude=parseFloat(coordinate.longitude)
                                        :zoom=event[0].zoom[0].booking
                                    />
                                </div>
                            </div>
                        </section>
                        <!-- SECTION - Ubytování END -->
                    </div>


                    <div class="t-grid__section -ad">
                        <!-- SECTION - Date of Event - sidebar -->
                        <section class="t-section -px-world my-2" v-if="event[0].date_start || event[0].date_end">
                            <div class="t-section__inner">
                                <oDateOfEvent :dateStart="event[0].date_start" :dateEnd="event[0].date_end" />
                            </div>
                        </section>
                        <!-- SECTION - Date of Event - sidebar - END -->

                        <!-- SECTION - links -->
                        <section class="t-section -px-world my-2" v-if="event[0].links">
                            <div class="t-section__inner">
                                <oLinks :items="event[0].links" />
                            </div>
                        </section>
                        <!-- SECTION - links END -->

                        <!-- SECTION - ad-google - sidebar -->
                        <section class="t-section -px-world my-2">
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
            oWidgetBooking
        },

        data() {
            return {
                event: this.event,
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

        methods:{
            handleResize() {
                // Aktualizovat hodnotu pro "isMobile" při změně velikosti okna
                this.isMobile = window.innerWidth < 992;
            },
        },

        mounted() {
            // Zjistit, zda je rozlišení menší než 992px při načítání stránky
            this.isMobile = window.innerWidth < 992;

            // Poslouchat událost změny velikosti okna pro aktualizaci přepínače
            window.addEventListener('resize', this.handleResize);
        },

        beforeUnmount() {
            // Zrušit naslouchání události změny velikosti okna při odstranění komponenty
            window.removeEventListener('resize', this.handleResize);
        },

        head() {
            return {
                title: `${this.event[0].name ? this.event[0].name : 'Region'} | Cestovatelský portál Frytol na cestách`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.event[0].description ? this.event[0].description.slice(0, this.event[0].description.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.event[0].name}` },
                    { name: 'keywords', content: `${this.event[0].name + ', událost, cestování, svět, cestovatelský portál, jaké státy tu jsou, plánování cesty, dovolená'}` },
                    { property: 'og:image', content: `${this.event[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.image.find(image => image.id === this.event[0].id_image_hero).source + this.image.find(image => image.id === this.event[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`},
                    { hid: 'og:title', content: `${this.event[0].name ? this.event[0].name : 'Událost'} | Cestovatelský portál Frytol na cestách` },
                    { hid: 'og:description', content: `${this.event[0].description ? this.event[0].description.slice(0, this.event[0].description.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.event[0].name ? this.event[0].name : 'Region'}` },
                    { hid: 'og:url', content: `${process.env.baseUrl}/udalost/${this.event[0].slug}` },
                    { hid: 'og:type', content: 'website' } 
                ]
            }
        },

        async asyncData({ $axios, params }) {
            let success = false;
            let data = null;

            while (!success) {
                try {
                    // Načtení události přes API podle slug
                    const event = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/event/${params.slug}`)

                    //informace o městě
                    const placeCity = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-city-id/${event[0].id_city}`)

                    // Načtení informací o obrázku pro místo
                    const image = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${event[0].id_image_hero}`)

                    data = { event, placeCity, image }
                    
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