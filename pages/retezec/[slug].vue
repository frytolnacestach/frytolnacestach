<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <MoleculesNavBreadcrumbsItem :links="mNavBreadcrumbschainArray" :item="chain[0]" v-if="chain && chain.length > 0" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -hero">

                                <!-- SECTION - hero -->
                                <OrganismsHeroItemDetail :item="chain" :images="imageChain" v-if="chain && chain.length > 0"/>
                                <!-- SECTION - hero END -->

                            </div>
                            <div class="t-grid__section -content">

                                <!-- SECTION - information by ChatGPT -->
                                <section class="t-section" v-if="chain && chain.length > 0 && chain[0].description">
                                    <div class="t-section__inner">
                                        <OrganismsInformationBlock :title="(chain[0].name ? chain[0].name : '')" :perexWysiwyg="chain[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - chains places -->
                                <div class="t-section" v-if="chain && chain.length > 0 && placesStates && placesStates.length > 0">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline :title="'Řetezec ' + chain[0].name + ' se nachází v techto státech'" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2 mt-4" />
                                        <OrganismsCoverStates :items="placesStates" :images="imagesStates" />
                                    </div>
                                </div>
                                <!-- SECTION - chains places - END -->

                            </div>
                            <div class="t-grid__section -ad">

                                <!-- SECTION - sidebar information -->
                                <section class="t-section -px-world mt-1 mb-2" v-if="chain && chain.length > 0 && chain[0].information && chain[0].information.length > 0">
                                    <div class="t-section__inner">
                                        <OrganismsSidebarInformation :items="chain[0].information" />
                                    </div>
                                </section>
                                <!-- SECTION - sidebar information - END -->

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
    const mNavBreadcrumbschainArray = [
        {
            id: 1,
            name: "Řetězec",
            url: "/retezec",
            status: "link"
        }
    ]   
    // DATA API
    const chain = ref([])
    const imageChain = ref([])
    const placesStates = ref([])
    const imagesStates = ref([])   
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Detail řetězce | Cestovatelský portál Frytol na cestách',
        description: 'Popis detailu řetezce',
        keywords: 'řetězec, plánuj cestu, cestovatelský portál, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Detail řetězce | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Popis detailu řetezce',
        ogUrl: `https://www.frytolnacestach.cz/jidlo/slug`,
        ogType: 'website',
    })
    let headLink = ref([
        { rel: 'canonical', href: headMeta.ogUrl }
    ])
    // DATA Meta - JSONld
    let headJsonld = reactive({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
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

    // LOAD DATA
    const loadData = async () => {
        // Chain
        const chainResponse = await $fetch(`https://api.frytolnacestach.cz/api/chain/${route.params.slug}`)
        const chainData = JSON.parse(chainResponse)
        chain.value = chainData || []

        if (chain.value && chain.value.length > 0) {
            // Image (chain)
            const imageChainResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${chain.value[0].id_image_hero}`)
            const imageChainData = JSON.parse(imageChainResponse)
            imageChain.value = imageChainData || []

            // States
            let idsStates
            if (chain.value[0].ids_states && Array.isArray(chain.value[0].ids_states) && chain.value[0].ids_states.length !== 0) {
                idsStates = chain.value[0].ids_states.map(state => state.id)
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

            // Image (states)
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
            headMeta.title = `${chain.value[0].name ? chain.value[0].name : 'Řetězec'} | Cestovatelský portál Frytol na cestách`
            headMeta.description = `${chain.value[0].description ? chain.value[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, chain.value[0].description.lastIndexOf(' ', 160)) : chain.value[0].name}`
            if (chain.value[0].seo_tags && chain.value[0].seo_tags.length > 0) {
                const metaSeoTags = ", " + chain.value[0].seo_tags.map(item => item.tag).join(", ")
                headMeta.keywords = (chain.value[0].name ? chain.value[0].name : '') + metaSeoTags + ', Řetězec, plánuj cestu, cestovatelský portál, cestování, svět'
            } else {
                headMeta.keywords = (chain.value[0].name ? chain.value[0].name : '') + ', Řetězec, plánuj cestu, cestovatelský portál, cestování, svět'
            }
            headMeta.ogImage = `${(chain.value[0].id_image_hero && imageChain.value.find(image => image.id === chain.value[0].id_image_hero)) ? 'https://image.frytolnacestach.cz/storage/' + imageChain.value.find(image => image.id === chain.value[0].id_image_hero).source + imageChain.value.find(image => image.id === chain.value[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
            headMeta.ogTitle = `${chain.value[0].name ? chain.value[0].name : 'Řetězec'} | Cestovatelský portál Frytol na cestách`
            headMeta.ogDescription = `${chain.value[0].description ? chain.value[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, chain.value[0].description.lastIndexOf(' ', 160)) : chain.value[0].name}`
            headMeta.ogUrl = `https://www.frytolnacestach.cz/retezec/${chain.value[0].slug}`
            headLink = [{ rel: 'canonical', href: headMeta.ogUrl }]
            // META - head - JSONld
            headJsonld.name = (chain.value[0].name ? chain.value[0].name : "")
            headJsonld.description = (chain.value[0].description ? chain.value[0].description.replace(/<\/?[^>]+(>|$)/g, '') : "")
            headJsonld.image = ((imageChain.value[0] && imageChain.value[0].id) ? ("https://image.frytolnacestach.cz/storage/chains/" + imageChain.value[0].name + ".webp") : "")
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