<template>
    <main class="t-main -bg-world -pt-menu" role="main">

        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsPlace :links="mNavBreadcrumbsPlaceArray" :place="place[0]" />
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
                    <div class="t-grid__section -hero-place" v-show="!isMobile || (isMobile && showHero)">
                        <oHeroPlace :place="place" :images="imagePlace" />
                    </div>
                    <!-- SECTION - hero END -->

                    <!-- SECTION - map -->
                    <div class="t-grid__section -map" v-show="!isMobile || (isMobile && !showHero)">
                        <oMapGoogle :place="place" />
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
                    
                    <div class="t-grid__section -content">
                        <!-- SECTION - information by ChatGPT -->
                        <section class="t-section" v-if="place[0].information_chatgpt">
                            <div class="t-section__inner">
                                <oInformationBlock :title="'O regionu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_chatgpt" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                            </div>
                        </section>
                        <!-- SECTION - information by ChatGPT END -->
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


        <section class="t-section -p0">
            <div class="t-section__inner">
                <div class="t-grid -world-ful">
                    <div class="t-grid__section -content">

                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import mNavBreadcrumbsPlace from '~/components/molecules/mNavBreadcrumbsPlace.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oArticleList from '~/components/organisms/oArticleList.vue'
    import oCoverPlaceDetail from '~/components/organisms/oCoverPlaceDetail.vue'
    import oHeroPlace from '~/components/organisms/oHeroPlace.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oMapGoogle from '~/components/organisms/oMapGoogle.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'

    export default {
        name: 'SvetMistoSlugPage',

        components: {
            mNavBreadcrumbsPlace,
            mHeadline,
            oAdGoogleSidebar,
            oArticleList,
            oCoverPlaceDetail,
            oHeroPlace,
            oInformationBlock,
            oMapGoogle,
            oVideoList
        },

        data() {
            return {
                place: this.place,
                isMobile: false,
                showHero: true,
                mNavBreadcrumbsPlaceArray: [
                    {
                        id: 1,
                        name: "Svět",
                        url: "/svet",
                        status: "link"
                    },
                    {
                        id: 2,
                        name: "Regiony",
                        url: "/svet/region",
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
                title: `${this.place[0].name ? this.place[0].name : 'Region'} | Frytol na cestách`,
                meta: [
                    { hid: 'description', name: 'description', content: `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.place[0].name}` },
                    { name: 'keywords', content: `${this.place[0].name + ', region, cestování, svět, cestovatelský portál, jaké státy tu jsou, plánování cesty, dovolená'}` },
                    { property: 'og:image', content: `${this.place[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`},
                    { hid: 'og:title', content: `${this.place[0].name ? this.place[0].name : 'Region'}  | Frytol na cestách` },
                    { hid: 'og:description', content: `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 150)).replace(/<\/?[^>]+(>|$)/g, '') : this.place[0].name ? this.place[0].name : 'Region'}` },
                    { hid: 'og:url', content: `${process.env.baseUrl}/svet/region/${this.place[0].slug}` },
                    { hid: 'og:type', content: 'website' } 
                ]
            }
        },

        async asyncData({ $axios, params }) {
            let success = false;
            let data = null;

            while (!success) {
                try {
                    // Načtení místa přes API podle slug
                    const place = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-region/${params.slug}`)

                    // Načtení informací o obrázku pro místo
                    const imagePlace = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${place[0].id_image_hero}`)


                    data = { place, imagePlace }
                    
                    success = true
                } catch (error) {
                    console.log(`API ERROR - REGION DETAIL: ${params.slug}`)
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