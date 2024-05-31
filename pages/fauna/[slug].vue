<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <MoleculesNavBreadcrumbsItem :links="mNavBreadcrumbsFaunaArray" :item="fauna[0]" v-if="fauna && fauna.length > 0" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -hero">

                                <!-- SECTION - hero -->
                                <OrganismsHeroItemDetail :item="fauna" :images="imageFauna" v-if="fauna && fauna.length > 0" />
                                <!-- SECTION - hero END -->

                            </div>
                            <div class="t-grid__section -content">

                                <!-- SECTION - information by ChatGPT -->
                                <section class="t-section" v-if="fauna && fauna.length > 0 && fauna[0].description">
                                    <div class="t-section__inner">
                                        <OrganismsInformationBlock :title="(fauna[0].name ? fauna[0].name : '')" :perexWysiwyg="fauna[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - fauna places -->
                                <div class="t-section" v-if="fauna && fauna.length > 0 && placesStates && placesStates.length > 0">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline :title="'Zvíře ' + fauna[0].name + ' žije v techto státech'" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2 mt-4" />
                                        <OrganismsCoverStates :items="placesStates" :images="imagesStates" />
                                    </div>
                                </div>
                                <!-- SECTION - fauna places - END -->

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
    const mNavBreadcrumbsFaunaArray = [
        {
            id: 1,
            name: "Fauna",
            url: "/fauna",
            status: "link"
        }
    ]    
    // DATA API
    const fauna = ref([])
    const imageFauna = ref([])
    const placesStates = ref([])
    const imagesStates = ref([])   
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Detail zvířete| Cestovatelský portál Frytol na cestách',
        description: 'Popis detailu zvířete',
        keywords: 'Fauna, Živočichové, informace o živočichách, plánuj cestu, cestovatelský portál, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Detail zvířete | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Popis detailu zvířete',
        ogUrl: `https://www.frytolnacestach.cz/jidlo/slug`,
        ogType: 'website',
    })
    let headLink = ref([
        { rel: 'canonical', href: headMeta.ogUrl }
    ])
    // DATA Meta - JSONld
    let headJsonld = reactive({
        "@context": "https://schema.org",
        "@type": "Animal",
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
        const faunaResponse = await $fetch(`https://api.frytolnacestach.cz/api/fauna/${route.params.slug}`)
        const faunaData = JSON.parse(faunaResponse)
        fauna.value = faunaData || []

        if (fauna.value && fauna.value.length > 0) {
            // Image (wallSocket)
            const imageFaunaResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${fauna.value[0].id_image_hero}`)
            const imageFaunaData = JSON.parse(imageFaunaResponse)
            imageFauna.value = imageFaunaData || []

            // States
            let idsStates
            if (fauna.value[0].ids_states && Array.isArray(fauna.value[0].ids_states) && fauna.value[0].ids_states.length !== 0) {
                idsStates = fauna.value[0].ids_states.map(state => state.id)
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
            headMeta.title = `${fauna.value[0].name ? fauna.value[0].name : 'Fauna'} | Cestovatelský portál Frytol na cestách`
            headMeta.description = `${fauna.value[0].description ? fauna.value[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, fauna.value[0].description.lastIndexOf(' ', 160)) : fauna.value[0].name}`
            if (fauna.value[0].seo_tags && fauna.value[0].seo_tags.length > 0) {
                const metaSeoTags = ", " + fauna.value[0].seo_tags.map(item => item.tag).join(", ")
                headMeta.keywords = (fauna.value[0].name ? fauna.value[0].name : '') + metaSeoTags + ', Fauna, Živočichové, informace o živočichách, plánuj cestu, cestovatelský portál, cestování, svět'
            } else {
                headMeta.keywords = (fauna.value[0].name ? fauna.value[0].name : '') + ', Fauna, Živočichové, informace o živočichách, plánuj cestu, cestovatelský portál, cestování, svět'
            }
            headMeta.ogImage = `${(fauna.value[0].id_image_hero && imageFauna.value.find(image => image.id === fauna.value[0].id_image_hero)) ? 'https://image.frytolnacestach.cz/storage/' + imageFauna.value.find(image => image.id === fauna.value[0].id_image_hero).source + imageFauna.value.find(image => image.id === fauna.value[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
            headMeta.ogTitle = `${fauna.value[0].name ? fauna.value[0].name : 'Fauna'} | Cestovatelský portál Frytol na cestách`
            headMeta.ogDescription = `${fauna.value[0].description ? fauna.value[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, fauna.value[0].description.lastIndexOf(' ', 160)) : fauna.value[0].name}`
            headMeta.ogUrl = `https://www.frytolnacestach.cz/fauna/${fauna.value[0].slug}`
            headLink = [{ rel: 'canonical', href: headMeta.ogUrl }]
            // META - head - JSONld
            headJsonld.name = (fauna.value[0].name ? fauna.value[0].name : "")
            headJsonld.description = (fauna.value[0].description ? fauna.value[0].description.replace(/<\/?[^>]+(>|$)/g, '') : "")
            headJsonld.image = ((imageFauna.value[0] && imageFauna.value[0].id) ? ("https://image.frytolnacestach.cz/storage/fauna/" + imageFauna.value[0].name + ".webp") : "")
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