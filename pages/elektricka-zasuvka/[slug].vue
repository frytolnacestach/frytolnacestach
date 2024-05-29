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

        async setup() {
            const route = useRoute()
            // DATA
            const wallSockets = ref([])
            const imageWallSockets = ref([])
            const placesStates = ref([])
            const imagesStates = ref([])

            let headMeta = reactive({
                title: 'Detail elektrická zásuvka | Cestovatelský portál Frytol na cestách',
                description: 'Popis elektrické zásuvky',
                keywords: 'Elektrická zásuvka, kompatibilita, redukce, zásuvky, plánuj cestu, cestovatelský portál, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'Detail elektrické zásuvky | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Popis elektrické zásuvky',
                ogUrl: `https://www.frytolnacestach.cz/elektricka-zasuvka/slug`,
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

            useJsonld(() => headScript)
     
            // API - PAGE - elektricka-zasuvka/slug
            await useAsyncData('dataAPI', async () => {
                // API - WallSocket
                const wallSocketsResponse = await $fetch(`https://api.frytolnacestach.cz/api/wall-socket/${route.params.slug}`)
                const wallSocketsData = JSON.parse(wallSocketsResponse)
                wallSockets.value = wallSocketsData || []

                if (wallSockets.value && wallSockets.value.length > 0) {
                    // API - Image wallSocket
                    const imageWallSocketsResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${wallSockets.value[0].id_image_hero}`)
                    const imageWallSocketsData = JSON.parse(imageWallSocketsResponse)
                    imageWallSockets.value = imageWallSocketsData || []

                    // API - States
                    let idsStates
                    if (wallSockets.value[0].ids_states && Array.isArray(wallSockets.value[0].ids_states) && wallSockets.value[0].ids_states.length !== 0) {
                        idsStates = wallSockets.value[0].ids_states.map(state => state.id)
                    } else {
                        idsStates = null
                    }
                    if (idsStates) {
                        const placesStatesResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-states-array?id=${idsStates.join(',')}`)
                        const placesStatesData = JSON.parse(placesStatesResponse)
                        placesStates.value = placesStatesData || []
                    } else {
                        placesStates.value = null
                    }

                    // API - Image states
                    if (placesStates.value) {
                        let imagesPlacesStatesID
                        imagesPlacesStatesID = placesStates.value.map(placeState => placeState.id_image_cover).filter(id => id !== null && id !== '')

                        if (imagesPlacesStatesID) {
                            const imagesStatesResponse = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesID.join(',')}`)
                            const imagesStatesData = JSON.parse(imagesStatesResponse)
                            imagesStates.value = imagesStatesData || []
                        }
                    }
                }

                // HEAD
                if (wallSockets.value && wallSockets.value.length > 0) {
                    // Meta
                    headMeta.title = `${wallSockets.value[0].name ? wallSockets.value[0].name : 'Elektrikcá zásuvka'} | Cestovatelský portál Frytol na cestách`
                    headMeta.description = `${wallSockets.value[0].description ? wallSockets.value[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, wallSockets.value[0].description.lastIndexOf(' ', 160)) : wallSockets.value[0].name}`
                    if (wallSockets.value[0].seo_tags && wallSockets.value[0].seo_tags.length > 0) {
                        const metaSeoTags = ", " + wallSockets.value[0].seo_tags.map(item => item.tag).join(", ")
                        headMeta.keywords = (wallSockets.value[0].name ? wallSockets.value[0].name : '') + metaSeoTags + ', Elektrická zásuvka, kompatibilita, redukce, zásuvky, plánuj cestu, cestovatelský portál, cestování, svět'
                    } else {
                        headMeta.keywords = (wallSockets.value[0].name ? wallSockets.value[0].name : '') + ', Elektrická zásuvka, kompatibilita, redukce, zásuvky, plánuj cestu, cestovatelský portál, cestování, svět'
                    }
                    headMeta.ogImage = `${wallSockets.value[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + imageWallSockets.value.find(image => image.id === wallSockets.value[0].id_image_hero).source + imageWallSockets.value.find(image => image.id === wallSockets.value[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
                    headMeta.ogTitle = `${wallSockets.value[0].name ? wallSockets.value[0].name : 'Elektrikcá zásuvka'} | Cestovatelský portál Frytol na cestách`
                    headMeta.ogDescription = `${wallSockets.value[0].description ? wallSockets.value[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, wallSockets.value[0].description.lastIndexOf(' ', 160)) : wallSockets.value[0].name}`
                    headMeta.ogUrl = `https://www.frytolnacestach.cz/elektricka-zasuvka/${wallSockets.value[0].slug}`
                    headLink = [{ rel: 'canonical', href: headMeta.ogUrl }]
                    // Script
                    headScript.name = (wallSockets.value[0].name ? wallSockets.value[0].name : "")
                    headScript.description = (wallSockets.value[0].description ? wallSockets.value[0].description.replace(/<\/?[^>]+(>|$)/g, '') : "")
                    headScript.image = ((imageWallSockets.value[0] && imageWallSockets.value[0].id) ? ("https://image.frytolnacestach.cz/storage/brands/" + imageWallSockets.value[0].name + ".webp") : "")
                }
            })

            // WATCH
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

            // RETURN
            return {
                wallSockets,
                imageWallSockets,
                placesStates,
                imagesStates,
                headMeta,
                headLink,
                headScript
            }
        }
    })
</script>