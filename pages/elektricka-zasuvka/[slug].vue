<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <mNavBreadcrumbsItem :links="mNavBreadcrumbsWallSocketsArray" :item="wallSockets[0]" v-if="wallSockets && wallSockets.length > 0" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -hero">

                                <!-- SECTION - hero -->
                                <oHeroItemDetail :item="wallSockets" :images="imageWallSockets" :showTitle=false v-if="wallSockets && wallSockets.length > 0" />
                                <!-- SECTION - hero END -->

                            </div>
                            <div class="t-grid__section -content">

                                <!-- SECTION - information by ChatGPT -->
                                <section class="t-section pt-1 mt-2 mb-4" v-if="wallSockets && wallSockets.length > 0 && wallSockets[0].description">
                                    <div class="t-section__inner">
                                        <mHeadline :title="(wallSockets[0].name ? wallSockets[0].name : '')" styleThema=" -world" styleAlign=" -p-left" styleSize="h1"/>
                                        <oInformationBlock :perexWysiwyg="wallSockets[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - Elektrické zásuvky kompotibilita list -->
                                <section class="t-section -p0 -px-world my-2"  v-if="wallSockets && wallSockets.length > 0 && wallSockets[0].ids_compatibility && wallSockets[0].ids_compatibility.length > 0">
                                    <div class="t-section__inner">
                                        <oCoverWallSocket title="Kompatibilní elektrické zásuvky" :perex="'Elektrická zásuvka typu ' + wallSockets[0].label + ' je kompatibilní s temito typy zásuvek.'" :ids="wallSockets[0].ids_compatibility" />
                                    </div>
                                </section>
                                <!-- SECTION - Elektrické zásuvky kompotibilita list END -->

                                <!-- SECTION - Affilate Alza -->
                                <section class="t-section pt-1 mt-2 mb-4">
                                    <div class="t-section__inner">
                                        <mHeadline title="Tady můžete koupit redukci pro elektrickou zásuvku" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oAffilateAlza />
                                    </div>
                                </section>
                                <!-- SECTION - Affilate Alza -->

                                <!-- SECTION - wall-sockets places -->
                                <div class="t-section" v-if="wallSockets && wallSockets.length > 0 && placesStates && placesStates.length > 0">
                                    <div class="t-section__inner">
                                        <mHeadline :title="'Elektrická zásuvka typu ' + wallSockets[0].label + ' se používá v techto státech'" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2 mt-4" />
                                        <oCoverStates :items="placesStates" :images="imagesStates" />
                                    </div>
                                </div>
                                <!-- SECTION - wall-sockets places - END -->

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
        </main>
    </NuxtLayout>
</template>

<script>
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import mNavBreadcrumbsItem from '~/components/molecules/mNavBreadcrumbsItem.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oAffilateAlza from '~/components/organisms/oAffilateAlza.vue'
    import oCoverStates from '~/components/organisms/oCoverStates.vue'
    import oCoverWallSocket from '~/components/organisms/oCoverWallSocket.vue'
    import oHeroItemDetail from '~/components/organisms/oHeroItemDetail.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'

    export default defineComponent({
        name: 'ElektrickeZasuvkySlugPage',

        components: {
            mHeadline,
            mNavBreadcrumbsItem,
            oAdGoogleSidebar,
            oAffilateAlza,
            oCoverStates,
            oCoverWallSocket,
            oHeroItemDetail,
            oInformationBlock
        },

        data() {
            return {
                wallSockets: this.wallSockets,
                imageWallSockets: this.imageWallSockets,
                placesStates: this.placesStates,
                imagesStates: this.imagesStates,
                mNavBreadcrumbsWallSocketsArray: [
                    {
                        id: 1,
                        name: "Elektricka zásuvka",
                        url: "/elektricka-zasuvka",
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
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "",
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

                // PAGE - wall-sockets detail
                // wall-sockets
                const responseWallSockets = await fetch(`https://api.frytolnacestach.cz/api/wall-socket/${route.params.slug}`)
                this.wallSockets = await responseWallSockets.json() || []
                // Image
                if (this.wallSockets && this.wallSockets.length > 0) {
                    const responseImageWallSockets = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.wallSockets[0].id_image_hero}`)
                    this.imageWallSockets = await responseImageWallSockets.json() || []
                }

                // COMPONENT - Places states
                if (this.wallSockets && this.wallSockets.length > 0) {
                    // States
                    let idsStates
                    if (this.wallSockets[0].ids_states && Array.isArray(this.wallSockets[0].ids_states) && this.wallSockets[0].ids_states.length !== 0) {
                        idsStates = this.wallSockets[0].ids_states.map(state => state.id)
                    } else {
                        idsStates = null
                    }
                    let responsePlacesStates
                    if (idsStates) {
                        responsePlacesStates = await fetch(`https://api.frytolnacestach.cz/api/places-states-array?id=${idsStates.join(',')}`)
                        this.placesStates = await responsePlacesStates.json() || []
                    } else {
                        this.placesStates = null
                    }
                    // Images
                    let imagesPlacesStatesID
                    if (placesStates) {
                        imagesPlacesStatesID = this.placesStates.map(placeState => placeState.id_image_cover).filter(id => id !== null && id !== '')
                    }
                    let responseImagesStates
                    if ( imagesPlacesStatesID) {
                        responseImagesStates = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesID.join(',')}`)
                        this.imagesStates = await responseImagesStates.json() || []
                    } else {
                        this.imagesStates = null
                    }
                }

                // HEAD
                if (this.wallSockets && this.wallSockets.length > 0) {
                    // Meta
                    this.headMeta.title = `${this.wallSockets[0].name ? this.wallSockets[0].name : 'Elektrikcá zásuvka'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.description = `${this.wallSockets[0].description ? this.wallSockets[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.wallSockets[0].description.lastIndexOf(' ', 160)) : this.wallSockets[0].name}`
                    if (this.wallSockets[0].seo_tags && this.wallSockets[0].seo_tags.length > 0) {
                        const metaSeoTags = ", " + this.wallSockets[0].seo_tags.map(item => item.tag).join(", ")
                        this.headMeta.keywords = (this.wallSockets[0].name ? this.wallSockets[0].name : '') + metaSeoTags + ', Elektrická zásuvka, kompatibilita, redukce, zásuvky, plánuj cestu, cestovatelský portál, cestování, svět'
                    } else {
                        this.headMeta.keywords = (this.wallSockets[0].name ? this.wallSockets[0].name : '') + ', Elektrická zásuvka, kompatibilita, redukce, zásuvky, plánuj cestu, cestovatelský portál, cestování, svět'
                    }
                    this.headMeta.ogImage = `${this.wallSockets[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imageWallSockets.find(image => image.id === this.wallSockets[0].id_image_hero).source + this.imageWallSockets.find(image => image.id === this.wallSockets[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
                    this.headMeta.ogTitle = `${this.wallSockets[0].name ? this.wallSockets[0].name : 'Elektrikcá zásuvka'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.ogDescription = `${this.wallSockets[0].description ? this.wallSockets[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.wallSockets[0].description.lastIndexOf(' ', 160)) : this.wallSockets[0].name}`
                    this.headMeta.ogUrl = `https://www.frytolnacestach.cz/elektricka-zasuvka/${this.wallSockets[0].slug}`
                    this.headLink = [{ rel: 'canonical', href: this.headMeta.ogUrl }]
                    // Script
                    this.headScript.name = (this.wallSockets[0].name ? this.wallSockets[0].name : "")
                    this.headScript.description = (this.wallSockets[0].description ? this.wallSockets[0].description.replace(/<\/?[^>]+(>|$)/g, '') : "")
                    this.headScript.image = ((this.imageWallSockets[0] && this.imageWallSockets[0].id) ? ("https://image.frytolnacestach.cz/storage/brands/" + this.imageWallSockets[0].name + ".webp") : "")
                }
            }
        },

        mounted() {
            this.fetchData()
        }
    })
</script>