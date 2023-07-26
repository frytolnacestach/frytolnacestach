<template>
    <main class="t-main -green -pt-menu" role="main">
        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsItem :links="mNavBreadcrumbsWorldTimwArray" :place="place[0]" :tab="activeTab" :tabName="activeTabName" />
            </div>
        </section>
        <!-- SECTION - BREADCRUMBS END -->

        <!-- SECTION - Buttons -->
        <section class="t-section -px-world mt-1 -p0" v-if="isMobile">
            <div class="t-section__inner">
                <div class="flex flex-end-all">
                    <span v-if="!showHero" @click="showHero = true" class="a-button-pure-icon -cover">Obrázek</span>
                    <span v-else @click="showHero = false" class="a-button-pure-icon -map">Mapa</span>
                </div>
            </div>
        </section>
        <!-- SECTION - Buttons END -->

        <!-- SECTION - hero + hot info hero -->
        <section class="t-section -px-world -p0">
            <div class="t-section__inner">
                <div class="t-grid -world-hero">

                    <!-- SECTION - hero -->
                    <div class="t-grid__section -hero-place" v-show="!isMobile || (isMobile && showHero)">
                        <oHeroPlace :place="place" :images="imagePlace" />
                    </div>
                    <!-- SECTION - hero END -->

                    <!-- SECTION - map -->
                    <div class="t-grid__section -map" v-show="!isMobile || (isMobile && !showHero)">
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

                            <!-- SECTION - time - sidebar -->
                            <section class="t-section -px-world">
                                <div class="t-section__inner">
                                    <oTime :mpz="this.place[0].mpz" />
                                </div>
                            </section>
                            <!-- SECTION - time - sidebar - END -->

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
        </div>
    </main>
</template>

<script>
    import mNavBreadcrumbsItem from '~/components/molecules/mNavBreadcrumbsItem.vue'
    import mNavPlace from '~/components/molecules/mNavPlace.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oAlerts from '~/components/organisms/oAlerts.vue'
    import oArticleList from '~/components/organisms/oArticleList.vue'
    import oBlockItem from '~/components/organisms/oBlockItem.vue'
    import oBlockList from '~/components/organisms/oBlockList.vue'
    import oCoverItemState from '~/components/organisms/oCoverItemState.vue'
    import oCoverNeighboring from '~/components/organisms/oCoverNeighboring.vue'
    import oCoverPlaceDetail from '~/components/organisms/oCoverPlaceDetail.vue'
    import oHeroPlace from '~/components/organisms/oHeroPlace.vue'
    import oHotInfoHero from '~/components/organisms/oHotInfoHero.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oMapGoogle from '~/components/organisms/oMapGoogle.vue'
    import oChartPie from '@/components/organisms/oChartPie.vue'
    import oOrganizationList from '~/components/organisms/oOrganizationList.vue'
    import oPlaceTeaserCities from '~/components/organisms/oPlaceTeaserCities.vue'
    import oPlaceTeaserRegions from '~/components/organisms/oPlaceTeaserRegions.vue'
    import oPlaceTeaserSpots from '~/components/organisms/oPlaceTeaserSpots.vue'
    import oPlaceTeaser from '~/components/organisms/oPlaceTeaser.vue'
    import oReviewItem from '~/components/organisms/oReviewItem.vue'
    import oSidebarLinks from '~/components/organisms/oSidebarLinks.vue'
    import oSidebarList from '~/components/organisms/oSidebarList.vue'
    import oTime from '~/components/organisms/oTime.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'
    import oVisitedButton from '~/components/organisms/oVisitedButton.vue'
    import oWidgetBooking from '~/components/organisms/oWidgetBooking.vue'


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
            oTime
        },

        data() {
            return {
                place: this.place,
                placeContinent: this.placeContinent,
                imagePlace: this.imagePlace,
                isMobile: false,
                showHero: true,
                metaTitle: '',
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

        methods:{
            handleResize() {
                // Aktualizovat hodnotu pro "isMobile" při změně velikosti okna
                this.isMobile = window.innerWidth < 992;
            },
        },

        head() {
            const placeName = this.place && this.place.length > 0 ? this.place[0].name : 'Stát';
            const defaultTitle = `Jaký je čas ve státě ${placeName} | Cestovatelský portál Frytol na cestách`;
            let title = defaultTitle;

            return {
            title,
            meta: [
                { hid: 'description', name: 'description', content: `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.place[0].name ? this.place[0].name : 'Stát'}` },
                { name: 'keywords', content: `${this.place[0].name ? this.place[0].name : '' + ', stát, čas, informace, časové pásma, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu'}` },
                { property: 'og:image', content: `${this.place[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`},
                { hid: 'og:title', content: title },
                { hid: 'og:description', content: `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.place[0].name ? this.place[0].name : 'Stát'}` },
                { hid: 'og:url', content: `${process.env.baseUrl}/svetovy-cas/${this.place[0].slug}` },
                { hid: 'og:type', content: 'website' }
            ]
            };
        },

        async asyncData({ $axios, params }) {
            let success = false;
            let data = null;

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
                        placeContinent,
                    }


                    success = true
                } catch (error) {
                    console.log(`API ERROR - SVĚTOVÝ ČAS DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }
            return data;
        },

        mounted() {
            this.activeTab = this.$route.params.tab || 'default';

            // Zjistit, zda je rozlišení menší než 992px při načítání stránky
            this.isMobile = window.innerWidth < 992;

            // Poslouchat událost změny velikosti okna pro aktualizaci přepínače
            window.addEventListener('resize', this.handleResize);

            //Data for oHotInfoHero
            this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
                if (item.id === 1) {
                    item.name = this.placeContinent[0].name;
                    item.url = `/svet/kontinent/${this.placeContinent[0].slug}`
                }
                return item;
            });
            this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
                if (item.id === 2) {
                    item.name = this.place[0].area;
                }
                return item;
            });
            this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
                if (item.id === 3) {
                    item.name = this.place[0].population;
                }
                return item;
            });
        },

        beforeUnmount() {
            // Zrušit naslouchání události změny velikosti okna při odstranění komponenty
            window.removeEventListener('resize', this.handleResize);
        },

        updated() {
            window.lazySizes && window.lazySizes.update();
        }
    }
</script>