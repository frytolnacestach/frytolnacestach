<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0 print-section" v-if="travelDictionary && travelDictionary.length > 0">
                    <div class="t-section__inner">
                        <MoleculesNavBreadcrumbsItem :links="mNavBreadcrumbsTravelDictionaryArray" :item="travelDictionary[0]" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -hero">

                                <!-- SECTION - hero -->
                                <OrganismsHeroItemDetail :item="travelDictionary" :images="imageTravelDictionary" v-if="travelDictionary && travelDictionary.length > 0" />
                                <!-- SECTION - hero END -->

                            </div>
                            <div class="t-grid__section -content">

                                <!-- SECTION - information by ChatGPT -->
                                <section class="t-section print-section" v-if="travelDictionary && travelDictionary.length > 0 && travelDictionary[0].description">
                                    <div class="t-section__inner">
                                        <OrganismsInformationBlock :title="'Co je ' + (travelDictionary[0].name ? travelDictionary[0].name : '') + '?'" :perexWysiwyg="travelDictionary[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                            </div>
                            <div class="t-grid__section -ad">

                                <!-- SECTION - TravelDictionary - sidebar -->
                                <section class="t-section -px-world mb-2">
                                    <div class="t-section__inner">
                                        <OrganismsSidebarListTravelDictionary :IDTravelDictionary="travelDictionary[0].id" v-if="travelDictionary && travelDictionary.length > 0" />
                                    </div>
                                </section>
                                <!-- SECTION - TravelDictionary - sidebar - END -->

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
    const mNavBreadcrumbsTravelDictionaryArray = [
        {
            id: 1,
            name: "Cestovatelský slovník",
            url: "/cestovatelsky-slovnik",
            status: "link"
        }
    ]   
    // DATA API
    const travelDictionary = ref([])
    const imageTravelDictionary = ref([]) 
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Detail cestovatelského slovníku | Cestovatelský portál Frytol na cestách',
        description: 'Popis detailu cestovatelského slovníku',
        keywords: 'cestovatelský slovník, co je to, travel hacky, plánuj cestu, cestovatelský portál, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Detail cestovatelského slovníku | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Popis detailu cestovatelského slovníku',
        ogUrl: `https://www.frytolnacestach.cz/cestovatelsky-slovnik/slug`,
        ogType: 'website',
    })
    let headLink = ref([
        { rel: 'canonical', href: headMeta.ogUrl }
    ])
    // DATA Meta - JSONld
    let headJsonld = reactive({
        "@context": "https://schema.org",
        "@type": "Article",
        "name": "Název",
        "image": "Obrázek",
        "url": "URL",
        "description": "Popis"
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
        // TravelDictionaries
        const travelDictionaryResponse = await $fetch(`https://api.frytolnacestach.cz/api/travel-dictionary/${route.params.slug}`)
        const travelDictionaryData = JSON.parse(travelDictionaryResponse)
        travelDictionary.value = travelDictionaryData || []

        if (travelDictionary.value && travelDictionary.value.length > 0) {
            // Image
            const imageTravelDictionaryResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${travelDictionary.value[0].id_image_hero}`)
            const imageTravelDictionaryData = JSON.parse(imageTravelDictionaryResponse)
            imageTravelDictionary.value = imageTravelDictionaryData || []

            // META - head
            headMeta.title = `${travelDictionary.value[0].name ? travelDictionary.value[0].name : 'Cestovatelský slovník'} | Cestovatelský portál Frytol na cestách`
            headMeta.description = `${travelDictionary.value[0].description ? travelDictionary.value[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, travelDictionary.value[0].description.lastIndexOf(' ', 160)) : travelDictionary.value[0].name}`
            if (travelDictionary.value[0].seo_tags && travelDictionary.value[0].seo_tags.length > 0) {
                const metaSeoTags = ", " + travelDictionary.value[0].seo_tags.map(item => item.tag).join(", ")
                headMeta.keywords = (travelDictionary.value[0].name ? travelDictionary.value[0].name : '') + metaSeoTags + ', Cestovatelský slovník, co je to ' + travelDictionary.value[0].name + ', travel hacky, plánuj cestu, cestovatelský portál, cestování, svět'
            } else {
                headMeta.keywords = (travelDictionary.value[0].name ? travelDictionary.value[0].name : '') + ', Cestovatelský slovník, co je to ' + travelDictionary.value[0].name + ', travel hacky, plánuj cestu, cestovatelský portál, cestování, svět'
            }
            headMeta.ogImage = `${(travelDictionary.value[0].id_image_hero && imageTravelDictionary.value.find(image => image.id === travelDictionary.value[0].id_image_hero)) ? 'https://image.frytolnacestach.cz/storage/' + imageTravelDictionary.value.find(image => image.id === travelDictionary.value[0].id_image_hero).source + imageTravelDictionary.value.find(image => image.id === travelDictionary.value[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
            headMeta.ogTitle = `${travelDictionary.value[0].name ? travelDictionary.value[0].name : 'Cestovatelský slovník'} | Cestovatelský portál Frytol na cestách`
            headMeta.ogDescription = `${travelDictionary.value[0].description ? travelDictionary.value[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, travelDictionary.value[0].description.lastIndexOf(' ', 160)) : travelDictionary.value[0].name}`
            headMeta.ogUrl = `https://www.frytolnacestach.cz/cestovatelsky-slovnik/${travelDictionary.value[0].slug}`
            headLink = [{ rel: 'canonical', href: headMeta.ogUrl }]
            // META - head - JSONld
            headJsonld.name = (travelDictionary.value[0].name ? travelDictionary.value[0].name : "")
            headJsonld.description = (travelDictionary.value[0].description ? travelDictionary.value[0].description.replace(/<\/?[^>]+(>|$)/g, '') : "")
            headJsonld.image = ((imageTravelDictionary.value.find(image => image.id === travelDictionary.value[0].id_image_hero)) ? ("https://image.frytolnacestach.cz/storage/" + imageTravelDictionary.value.find(image => image.id === travelDictionary.value[0].id_image_hero).source + imageTravelDictionary.value.find(image => image.id === travelDictionary.value[0].id_image_hero).name + ".webp") : "")
            headJsonld.url = ('https://frytolnacestach.cz' + `/cestovatelsky-slovnik/${travelDictionary.value[0].slug}`)
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