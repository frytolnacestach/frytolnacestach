
<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <MoleculesNavBreadcrumbsItem :links="mNavBreadcrumbsFoodArray" :item="food[0]" v-if="food && food.length > 0" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-content-with-ad">
                            <div class="t-grid__section -hero">

                                <!-- SECTION - hero -->
                                <OrganismsHeroItemDetail :item="food" :images="imageFood" v-if="food && food.length > 0" />
                                <!-- SECTION - hero END -->

                            </div>
                            <div class="t-grid__section -content">

                                <!-- SECTION - information by ChatGPT -->
                                <section class="t-section" v-if="food && food.length > 0 && food[0].description">
                                    <div class="t-section__inner">
                                        <OrganismsInformationBlock :title="(food[0].name ? food[0].name : '')" :perexWysiwyg="food[0].description" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - Ingredients -->
                                <section class="t-section my-4 py-1" v-if="food && food.length > 0 && food[0].ingredients && food[0].ingredients.length > 0">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Ingredience" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-1" />
                                        <OrganismsIngredients :items="food[0].ingredients" />
                                    </div>
                                </section>
                                <!-- SECTION - Ingredients END -->

                                <!-- SECTION - Recipe -->
                                <section class="t-section my-4 py-1" v-if="food && food.length > 0 && food[0].recipe && food[0].recipe.length > 0">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Recept" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-1" />
                                        <OrganismsRecipe :items="food[0].recipe" />
                                    </div>
                                </section>
                                <!-- SECTION - Recipe END -->

                                <!-- SECTION - foods places -->
                                <div class="t-section" v-if="food && food.length > 0 && placesStates && placesStates.length > 0">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline :title="'Jídlo ' + food[0].name + ' se jí v techto státech'" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2 mt-4" />
                                        <OrganismsCoverStates :items="placesStates" :images="imagesStates" text="Kde se používá" />
                                    </div>
                                </div>
                                <!-- SECTION - foods places - END -->

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
    const mNavBreadcrumbsFoodArray = [
        {
            id: 1,
            name: "Jídla",
            url: "/jidlo",
            status: "link"
        }
    ]    
    // DATA API
    const food = ref([])
    const imageFood = ref([])
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
        "@type": "Recipe",
        "name": headMeta.title,
        "description": headMeta.description,
        "image": "https://image.frytolnacestach.cz/storage/main/og-default.png",
        "recipeIngredient": [],
        "recipeInstructions": []
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
        const foodResponse = await $fetch(`https://api.frytolnacestach.cz/api/food/${route.params.slug}`)
        const foodData = JSON.parse(foodResponse)
        food.value = foodData || []

        if (food.value && food.value.length > 0) {
            // Image (wallSocket)
            const imageFoodResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${food.value[0].id_image_hero}`)
            const imageFoodData = JSON.parse(imageFoodResponse)
            imageFood.value = imageFoodData || []

            // States
            let idsStates
            if (food.value[0].ids_states && Array.isArray(food.value[0].ids_states) && food.value[0].ids_states.length !== 0) {
                idsStates = food.value[0].ids_states.map(state => state.id)
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
            headMeta.title = `${food.value[0].name ? food.value[0].name : 'Jídlo'} | Cestovatelský portál Frytol na cestách`
            headMeta.description = `${food.value[0].description ? food.value[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, food.value[0].description.lastIndexOf(' ', 160)) : food.value[0].name}`
            if (food.value[0].seo_tags && food.value[0].seo_tags.length > 0) {
                const metaSeoTags = ", " + food.value[0].seo_tags.map(item => item.tag).join(", ")
                headMeta.keywords = (food.value[0].name ? food.value[0].name : '') + metaSeoTags + ', Jídla, Tradiční jídlo, informace o jídle, plánuj cestu, cestovatelský portál, cestování, svět'
            } else {
                headMeta.keywords = (food.value[0].name ? food.value[0].name : '') + ', Jídla, Tradiční jídlo, informace o jídle, plánuj cestu, cestovatelský portál, cestování, svět'
            }
            headMeta.ogImage = `${(food.value[0].id_image_hero && imageFood.value.find(image => image.id === food.value[0].id_image_hero)) ? 'https://image.frytolnacestach.cz/storage/' + imageFood.value.find(image => image.id === food.value[0].id_image_hero).source + imageFood.value.find(image => image.id === food.value[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
            headMeta.ogTitle = `${food.value[0].name ? food.value[0].name : 'Jídlo'} | Cestovatelský portál Frytol na cestách`
            headMeta.ogDescription = `${food.value[0].description ? food.value[0].description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, food.value[0].description.lastIndexOf(' ', 160)) : food.value[0].name}`
            headMeta.ogUrl = `https://www.frytolnacestach.cz/jidlo/${food.value[0].slug}`
            headLink = [{ rel: 'canonical', href: headMeta.ogUrl }]
            // META - head - JSONld
            headJsonld.name = (food.value[0].name ? food.value[0].name : "")
            headJsonld.description = (food.value[0].description ? food.value[0].description.replace(/<\/?[^>]+(>|$)/g, '') : "")
            headJsonld.image = ((imageFood.value[0] && imageFood.value[0].id) ? ("https://image.frytolnacestach.cz/storage/foods/" + imageFood.value[0].name + ".webp") : "https://image.frytolnacestach.cz/storage/main/og-default.png")
            headJsonld.recipeIngredient = ((food.value[0].ingredients && food.value[0].ingredients.length > 0) ? food.value[0].ingredients : "")
            headJsonld.recipeInstructions = ((food.value[0].recipe && food.value[0].recipe.length > 0) ? food.value[0].recipe : "")
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