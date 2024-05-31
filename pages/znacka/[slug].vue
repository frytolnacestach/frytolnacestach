<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">
                
                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <MoleculesNavBreadcrumbsItem :links="mNavBreadcrumbsBrandArray" :item="brand[0]" v-if="brand && brand.length > 0" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -hero">
                                
                                <!-- SECTION - hero -->
                                <OrganismsHeroItemDetail :item="brand" :images="imageBrand" v-if="brand && brand.length > 0" />
                                <!-- SECTION - hero END -->

                            </div>
                            <div class="t-grid__section -content">

                                <!-- SECTION - information by ChatGPT -->
                                <section class="t-section" v-if="brand && brand.length > 0 && brand[0].description">
                                    <div class="t-section__inner">
                                        <OrganismsInformationBlock :title="(brand[0].name ? brand[0].name : '')" :perexWysiwyg="brand[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - brand places -->
                                <div class="t-section" v-if="brand && brand.length > 0 && placesStates && placesStates.length > 0">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline :title="'Výrobek ' + brand[0].name + ' se vyrábí v techto státech'" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2 mt-4" />
                                        <OrganismsCoverStates :items="placesStates" :images="imagesStates" />
                                    </div>
                                </div>
                                <!-- SECTION - brand places - END -->

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
    const mNavBreadcrumbsBrandArray = [
        {
            id: 1,
            name: "Značka",
            url: "/znacka",
            status: "link"
        }
    ]    
    // DATA API
    const brand = ref([])
    const imageBrand = ref([])
    const placesStates = ref([])
    const imagesStates = ref([])   
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Detail značky | Cestovatelský portál Frytol na cestách',
        description: 'Popis detailu značky',
        keywords: 'značka, výrobky, trradice, cestovatelský portál, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Detail značky | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Popis detailu značky',
        ogUrl: `https://www.frytolnacestach.cz/jidlo/slug`,
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

    // LOAD DATA
    const loadData = async () => {
        // Brand
        const brandResponse = await $fetch(`https://api.frytolnacestach.cz/api/brand/${route.params.slug}`)
        const brandData = JSON.parse(brandResponse)
        brand.value = brandData || []

        if (brand.value && brand.value.length > 0) {
            // Image (brand)
            const imageBrandResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${brand.value[0].id_image_hero}`)
            const imageBrandData = JSON.parse(imageBrandResponse)
            imageBrand.value = imageBrandData || []

            // States
            let idsStates
            if (brand.value[0].ids_states && Array.isArray(brand.value[0].ids_states) && brand.value[0].ids_states.length !== 0) {
                idsStates = brand.value[0].ids_states.map(state => state.id)
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
            headMeta.title = `${brand.value[0].name ? brand.value[0].name : 'brand'} | Cestovatelský portál Frytol na cestách`
            headMeta.description = `${brand.value[0].description ? brand.value[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, brand.value[0].description.lastIndexOf(' ', 160)) : brand.value[0].name}`
            if (brand.value[0].seo_tags && brand.value[0].seo_tags.length > 0) {
                const metaSeoTags = ", " + brand.value[0].seo_tags.map(item => item.tag).join(", ")
                headMeta.keywords = (brand.value[0].name ? brand.value[0].name : '') + metaSeoTags + ', značka, výrobky, tradice, cestovatelský portál, cestování, svět'
            } else {
                headMeta.keywords = (brand.value[0].name ? brand.value[0].name : '') + ', značka, výrobky, tradice, cestovatelský portál, cestování, svět'
            }
            headMeta.ogImage = `${(imageBrand.value[0] && imageBrand.value.length > 0 && brand.value[0].id_image_hero) ? 'https://image.frytolnacestach.cz/storage/' + imageBrand.value.find(image => image.id === brand.value[0].id_image_hero).source + imageBrand.value.find(image => image.id === brand.value[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
            headMeta.ogTitle = `${brand.value[0].name ? brand.value[0].name : 'brand'} | Cestovatelský portál Frytol na cestách`
            headMeta.ogDescription = `${brand.value[0].description ? brand.value[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, brand.value[0].description.lastIndexOf(' ', 160)) : brand.value[0].name}`
            headMeta.ogUrl = `https://www.frytolnacestach.cz/brand/${brand.value[0].slug}`
            headLink = [{ rel: 'canonical', href: headMeta.ogUrl }]
            // META - head - JSONld
            headJsonld.name = (brand.value[0].name ? brand.value[0].name : "")
            headJsonld.description = (brand.value[0].description ? brand.value[0].description.replace(/<\/?[^>]+(>|$)/g, '') : "")
            headJsonld.image = ((imageBrand.value[0] && imageBrand.value[0].id) ? ("https://image.frytolnacestach.cz/storage/brand/" + imageBrand.value[0].name + ".webp") : "")
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