<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0" v-if="place && place.length > 0">
                    <div class="t-section__inner">
                        <MoleculesNavBreadcrumbsItem :links="mNavBreadcrumbsWorldTimwArray" :item="place[0]" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <!-- SECTION - Buttons -->
                <section class="t-section -px-world mt-1 -p0 hidden-print hidden-desktop">
                    <div class="t-section__inner">
                        <OrganismsSwitchHero :show-hero.sync="showHero" />
                    </div>
                </section>
                <!-- SECTION - Buttons END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-hero">

                            <!-- SECTION - hero -->
                            <div :class="'t-grid__section -hero-place' + (!showHero ? ' hidden-mobile' : '')" v-if="place && place.length > 0">
                                <OrganismsHeroPlace :title="place[0].name" :idImageHero="place[0].id_image_hero" :images="imagePlace" />
                            </div>
                            <!-- SECTION - hero END -->

                            <!-- SECTION - map -->
                            <div :class="'t-grid__section -map' + (showHero ? ' hidden-mobile' : '')" v-if="place && place.length > 0">
                                <OrganismsMapGoogle :place="place" />
                            </div>
                            <!-- SECTION - map - END -->

                        </div>
                    </div>
                </section>

                <!-- SECTION - Alerts -->
                <section class="t-section -px-world-big -p0" v-if="place && place.length > 0 && place[0].alerts">
                    <div class="t-section__inner">
                        <OrganismsAlerts :alerts="place[0].alerts" />
                    </div>
                </section>
                <!-- SECTION - Alerts END -->

                <div class="t-main -tab" v-if="place && place.length > 0">
                    <section class="t-section -px-world -p0">
                        <div class="t-section__inner">
                            <div class="t-grid -world-content-with-ad">
                                <div class="t-grid__section -content">

                                    <!-- SECTION - time -->
                                    <section class="t-section -px-world mt-4" v-if="place && place.length > 0">
                                        <div class="t-section__inner">
                                            <OrganismsTime :mpz="place[0].mpz" />
                                        </div>
                                    </section>
                                    <!-- SECTION - time - END -->

                                    <!-- SECTION - Place teaser -->
                                    <section class="t-section my-2 -p0" v-if="place && place.length > 0">
                                        <div class="t-section__inner">
                                            <OrganismsPlaceTeaser :headline="'Více informací o státě ' + place[0].name" :place="place" :image="imagePlace" type="stat" />
                                        </div>
                                    </section>
                                    <!-- SECTION - Place teaser END -->
                            
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
            </div>
        </main>
    </NuxtLayout>
</template>

<script setup>
    const route = useRoute()
    
    // DATA
    const mNavBreadcrumbsWorldTimwArray = [
        {
            id: 1,
            name: "Světový čas",
            url: "/svetovy-cas",
            status: "link"
        }
    ]   
    // DATA API
    const place = ref([])
    const imagePlace = ref([])
    const placeContinent = []
    const showHero = true
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Detail světového času | Cestovatelský portál Frytol na cestách',
        description: 'Popis detailu světového času',
        keywords: 'stát, čas, informace, časové pásma, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Detail světového času | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Popis detailu světového času',
        ogUrl: `https://www.frytolnacestach.cz/jidlo/slug`,
        ogType: 'website',
    })
    let headLink = ref([
        { rel: 'canonical', href: headMeta.ogUrl }
    ])
    // DATA Meta - JSONld
    let headJsonld = reactive({
        "@context": "https://schema.org",
        "@type": "Place",
        "name": "",
        "description": "",
        "image": "",
        "area": {
            "@type": "QuantitativeValue",
            "value": "",
            "comment": "Rozloha v km²"
        },
        "population": {
            "@type": "QuantitativeValue",
            "value": ""
        }
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
        // Place
        const placeResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-state/${route.params.slug}`)
        const placeData = JSON.parse(placeResponse)
        place.value = placeData || []

        if (place.value && place.value.length > 0) {
            // Image (place)
            const imagePlaceResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${place.value[0].id_image_hero}`)
            const imagePlaceData = JSON.parse(imagePlaceResponse)
            imagePlace.value = imagePlaceData || []

            // PlaceContinent
            if (place.value[0].id_continent && place.value[0].id_continent !== 0) {
                const placeContinentResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-continent-id/${place.value[0].id_continent}`)
                const placeContinentData = JSON.parse(placeContinentResponse)
                placeContinent.value = placeContinentData || []
            }

            // Meta
            headMeta.title = `Jaký je čas ve státě ${(place.value && place.value.length > 0) ? place.value[0].name : 'Stát'} | Cestovatelský portál Frytol na cestách`
            headMeta.description = `${place.value[0].information_chatgpt ? place.value[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place.value[0].information_chatgpt.lastIndexOf(' ', 160)) : place.value[0].name ? place.value[0].name : 'Stát'}`
            if (place.value[0].seo_tags && place.value[0].seo_tags.length > 0) {
                const metaSeoTags = ", " + place.value[0].seo_tags.map(item => item.tag).join(", ")
                headMeta.keywords = (place.value[0].name ? place.value[0].name : '') + metaSeoTags + ', stát, čas, informace, časové pásma, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu' 
            } else {
                headMeta.keywords = (place.value[0].name ? place.value[0].name : '') + ', stát, čas, informace, časové pásma, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu' 
            }
            headMeta.ogImage = `${(imagePlace.value[0] && imagePlace.value.find(image => image.id === place.value[0].id_image_hero)) ? 'https://image.frytolnacestach.cz/storage/' + imagePlace.value.find(image => image.id === place.value[0].id_image_hero).source + imagePlace.value.find(image => image.id === place.value[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
            headMeta.ogTitle = `Jaký je čas ve státě ${(place.value && place.value.length > 0) ? place.value[0].name : 'Stát'} | Cestovatelský portál Frytol na cestách`
            headMeta.ogDescription = `${place.value[0].information_chatgpt ? place.value[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place.value[0].information_chatgpt.lastIndexOf(' ', 160)) : place.value[0].name ? place.value[0].name : 'Stát'}`
            headMeta.ogUrl = `https://www.frytolnacestach.cz/svetovy-cas/${(place.value && place.value.length > 0 && place.value[0].slug) ? place.value[0].slug : "slug_svetovy-cas"}`
            headLink = [{ rel: 'canonical', href: headMeta.ogUrl }]
            // Script
            headScript.name = (place.value[0].name ? place.value[0].name : "")
            headScript.description = (place.value[0].information_author?.length > 0 ? place.value[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '') : (place.value[0].information_chatgpt ? place.value[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '') : ""))
            headScript.image = ((imagePlace.value[0] && imagePlace.value.length > 0 && imagePlace.value[0].id) ? ("https://image.frytolnacestach.cz/storage/world/states/" + imagePlace.value[0].name + ".webp") : "")
            headScript.area.value = (place.value[0].area ? place.value[0].area : "")
            headScript.population.value = (place.value[0].population ? place.value[0].population : "")
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