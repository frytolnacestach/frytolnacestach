<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <MoleculesNavBreadcrumbsItem :links="mNavBreadcrumbsFloraArray" :item="flora[0]" v-if="flora && flora.length > 0" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -hero">

                                <!-- SECTION - hero -->
                                <OrganismsHeroItemDetail :item="flora" :images="imageFlora" v-if="flora && flora.length > 0" />
                                <!-- SECTION - hero END -->

                            </div>
                            <div class="t-grid__section -content">

                                <!-- SECTION - information by ChatGPT -->
                                <section class="t-section" v-if="flora && flora.length > 0 && flora[0].description">
                                    <div class="t-section__inner">
                                        <OrganismsInformationBlock :title="(flora[0].name ? flora[0].name : '')" :perexWysiwyg="flora[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - flora places -->
                                <div class="t-section" v-if="flora && flora.length > 0 && placesStates && placesStates.length > 0">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline :title="'Rostlina ' + flora[0].name + ' roste v techto státech'" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2 mt-4" />
                                        <OrganismsCoverStates :items="placesStates" :images="imagesStates" />
                                    </div>
                                </div>
                                <!-- SECTION - flora places - END -->

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
    const mNavBreadcrumbsFloraArray = [
        {
            id: 1,
            name: "Flóra",
            url: "/flora",
            status: "link"
        }
    ]   
    // DATA API
    const flora = ref([])
    const imageFlora = ref([])
    const placesStates = ref([])
    const imagesStates = ref([])   
    // DATA Meta - head
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
    // DATA Meta - JSONld
    let headJsonld = reactive({
        "@context": "https://schema.org",
        "@type": "Plant",
        "name": "Název",
        "description": "Popis",
        "image": "Obrázek"
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
        // WallSocket
        const floraResponse = await $fetch(`https://api.frytolnacestach.cz/api/flora/${route.params.slug}`)
        const floraData = JSON.parse(floraResponse)
        flora.value = floraData || []

        if (flora.value && flora.value.length > 0) {
            // Image (wallSocket)
            const imageFloraResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${flora.value[0].id_image_hero}`)
            const imageFloraData = JSON.parse(imageFloraResponse)
            imageFlora.value = imageFloraData || []

            // States
            let idsStates
            if (flora.value[0].ids_states && Array.isArray(flora.value[0].ids_states) && flora.value[0].ids_states.length !== 0) {
                idsStates = flora.value[0].ids_states.map(state => state.id)
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
            headMeta.title = `${flora.value[0].name ? flora.value[0].name : 'Flóra'} | Cestovatelský portál Frytol na cestách`
            headMeta.description = `${flora.value[0].description ? flora.value[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, flora.value[0].description.lastIndexOf(' ', 160)) : flora.value[0].name}`
            if (flora.value[0].seo_tags && flora.value[0].seo_tags.length > 0) {
                const metaSeoTags = ", " + flora.value[0].seo_tags.map(item => item.tag).join(", ")
                headMeta.keywords = (flora.value[0].name ? flora.value[0].name : '') + metaSeoTags + ', Flóra, Rostoucí flóra, informace o rostlinách, plánuj cestu, cestovatelský portál, cestování, svět'
            } else {
                headMeta.keywords = (flora.value[0].name ? flora.value[0].name : '') + ', Flóra, Rostoucí flóra, informace o rostlinách, plánuj cestu, cestovatelský portál, cestování, svět'
            }
            headMeta.ogImage = `${(flora.value[0].id_image_hero && imageFlora.value.find(image => image.id === flora.value[0].id_image_hero)) ? 'https://image.frytolnacestach.cz/storage/' + imageFlora.value.find(image => image.id === flora.value[0].id_image_hero).source + imageFlora.value.find(image => image.id === flora.value[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
            headMeta.ogTitle = `${flora.value[0].name ? flora.value[0].name : 'Flóra'} | Cestovatelský portál Frytol na cestách`
            headMeta.ogDescription = `${flora.value[0].description ? flora.value[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, flora.value[0].description.lastIndexOf(' ', 160)) : flora.value[0].name}`
            headMeta.ogUrl = `https://www.frytolnacestach.cz/flora/${flora.value[0].slug}`
            headLink = [{ rel: 'canonical', href: headMeta.ogUrl }]
            // META - head - JSONld
            headJsonld.name = (flora.value[0].name ? flora.value[0].name : "")
            headJsonld.description = (flora.value[0].description ? flora.value[0].description.replace(/<\/?[^>]+(>|$)/g, '') : "")
            headJsonld.image = ((imageFlora.value[0] && imageFlora.value[0].id) ? ("https://image.frytolnacestach.cz/storage/flora/" + imageFlora.value[0].name + ".webp") : "")
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