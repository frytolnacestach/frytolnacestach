<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <MoleculesNavBreadcrumbsItem :links="mNavBreadcrumbsWallSocketsArray" :item="wallSockets[0]" v-if="wallSockets && wallSockets.length > 0" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -hero">

                                <!-- SECTION - hero -->
                                <OrganismsHeroItemDetail :item="wallSockets" :images="imageWallSockets" :showTitle=false v-if="wallSockets && wallSockets.length > 0" />
                                <!-- SECTION - hero END -->

                            </div>
                            <div class="t-grid__section -content">

                                <!-- SECTION - information by ChatGPT -->
                                <section class="t-section pt-1 mt-2 mb-4" v-if="wallSockets && wallSockets.length > 0 && wallSockets[0].description">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline :title="(wallSockets[0].name ? wallSockets[0].name : '')" styleThema=" -world" styleAlign=" -p-left" styleSize="h1"/>
                                        <OrganismsInformationBlock :perexWysiwyg="wallSockets[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - Elektrické zásuvky kompotibilita list -->
                                <section class="t-section -p0 -px-world my-2"  v-if="wallSockets && wallSockets.length > 0 && wallSockets[0].ids_compatibility && wallSockets[0].ids_compatibility.length > 0">
                                    <div class="t-section__inner">
                                        <OrganismsCoverWallSocket title="Kompatibilní elektrické zásuvky" :perex="'Elektrická zásuvka typu ' + wallSockets[0].label + ' je kompatibilní s temito typy zásuvek.'" :ids="wallSockets[0].ids_compatibility" />
                                    </div>
                                </section>
                                <!-- SECTION - Elektrické zásuvky kompotibilita list END -->

                                <!-- SECTION - Affilate Alza -->
                                <section class="t-section pt-1 mt-2 mb-4">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Tady můžete koupit redukci pro elektrickou zásuvku" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <OrganismsAffilateAlza />
                                    </div>
                                </section>
                                <!-- SECTION - Affilate Alza -->

                                <!-- SECTION - wall-sockets places -->
                                <div class="t-section" v-if="wallSockets && wallSockets.length > 0 && placesStates && placesStates.length > 0">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline :title="'Elektrická zásuvka typu ' + wallSockets[0].label + ' se používá v techto státech'" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2 mt-4" />
                                        <OrganismsCoverStates :items="placesStates" :images="imagesStates" />
                                    </div>
                                </div>
                                <!-- SECTION - wall-sockets places - END -->

                            </div>
                            <div class="t-grid__section -ad">

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
        </main>
    </NuxtLayout>
</template>

<script setup>
    const route = useRoute()
    
    // DATA
    const mNavBreadcrumbsWallSocketsArray = [
        {
            id: 1,
            name: "Elektricka zásuvka",
            url: "/elektricka-zasuvka",
            status: "link"
        }
    ]    
    // DATA API
    const wallSockets = ref([])
    const imageWallSockets = ref([])
    const placesStates = ref([])
    const imagesStates = ref([])   
    // DATA Meta - head
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
    // DATA Meta - JSONld
    let headJsonld = reactive({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "",
        "description": "",
        "image": ""
    })

    // META - Head
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
    // META - Head - JSONld
    useJsonld(() => headJsonld)

    // API - PAGE - elektricka-zasuvka/slug
    const loadData = async () => {
        // API - WallSocket
        const wallSocketsResponse = await $fetch(`https://api.frytolnacestach.cz/api/wall-socket/${route.params.slug}`)
        const wallSocketsData = JSON.parse(wallSocketsResponse)
        wallSockets.value = wallSocketsData || []

        if (wallSockets.value && wallSockets.value.length > 0) {
            // API - Image wallSocket
            const imageWallSocketsResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${wallSockets.value[0].id_image_hero}`)
            const imageWallSocketsData = JSON.parse(imageWallSocketsResponse)
            imageWallSockets.value = imageWallSocketsData || []

            // API - States - map
            let idsStates
            if (wallSockets.value[0].ids_states && Array.isArray(wallSockets.value[0].ids_states) && wallSockets.value[0].ids_states.length !== 0) {
                idsStates = wallSockets.value[0].ids_states.map(state => state.id)
            } else {
                idsStates = null
            }
            // API - States
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

            // META - head
            headMeta.title = `${wallSockets.value[0].name ? wallSockets.value[0].name : 'Elektrikcá zásuvka'} | Cestovatelský portál Frytol na cestách`
            headMeta.description = `${wallSockets.value[0].description ? wallSockets.value[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, wallSockets.value[0].description.lastIndexOf(' ', 160)) : wallSockets.value[0].name}`
            if (wallSockets.value[0].seo_tags && wallSockets.value[0].seo_tags.length > 0) {
                const metaSeoTags = ", " + wallSockets.value[0].seo_tags.map(item => item.tag).join(", ")
                headMeta.keywords = (wallSockets.value[0].name ? wallSockets.value[0].name : '') + metaSeoTags + ', Elektrická zásuvka, kompatibilita, redukce, zásuvky, plánuj cestu, cestovatelský portál, cestování, svět'
            } else {
                headMeta.keywords = (wallSockets.value[0].name ? wallSockets.value[0].name : '') + ', Elektrická zásuvka, kompatibilita, redukce, zásuvky, plánuj cestu, cestovatelský portál, cestování, svět'
            }
            headMeta.ogImage = `${(imageWallSockets.value[0] && imageWallSockets.value[0].id && wallSockets.value[0].id_image_hero) ? 'https://image.frytolnacestach.cz/storage/' + imageWallSockets.value.find(image => image.id === wallSockets.value[0].id_image_hero).source + imageWallSockets.value.find(image => image.id === wallSockets.value[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
            headMeta.ogTitle = `${wallSockets.value[0].name ? wallSockets.value[0].name : 'Elektrikcá zásuvka'} | Cestovatelský portál Frytol na cestách`
            headMeta.ogDescription = `${wallSockets.value[0].description ? wallSockets.value[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, wallSockets.value[0].description.lastIndexOf(' ', 160)) : wallSockets.value[0].name}`
            headMeta.ogUrl = `https://www.frytolnacestach.cz/elektricka-zasuvka/${wallSockets.value[0].slug}`
            headLink = [{ rel: 'canonical', href: headMeta.ogUrl }]
            // META - head - JSONld
            headJsonld.name = (wallSockets.value[0].name ? wallSockets.value[0].name : "")
            headJsonld.description = (wallSockets.value[0].description ? wallSockets.value[0].description.replace(/<\/?[^>]+(>|$)/g, '') : "")
            headJsonld.image = ((imageWallSockets.value[0] && imageWallSockets.value[0].id) ? ("https://image.frytolnacestach.cz/storage/brands/" + imageWallSockets.value[0].name + ".webp") : "")
        }               
    }
    await useAsyncData('dataAPI', () => loadData())

    // WATCH
    watchEffect(() => {
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
        useJsonld(() => headJsonld)
    })
</script>