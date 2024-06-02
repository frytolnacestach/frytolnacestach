<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - Hero -->
                <section class="t-section py-4 print-section">
                    <div class="t-section__inner">
                        <OrganismsHero :headline="headline" perex="Připravte se na světové dobrodružství přesně podle svého rytmu! Náš cestovatelský portál vám přináší aktuální čas a časový posun v různých zemích, abyste byli vždycky v synchronizaci s časem." modifierCSS=" -green -w640" classCSS=" mt-2"/>
                    </div>
                </section>
                <!-- SECTION - Hero END -->

                <!-- SECTION - Filter -->
                <section class="t-section -p0 hidden-print">
                    <div class="t-section__inner">
                        <OrganismsFormFilterPlace styleThema=" -green" typePlaceFilterName="Vybrat kontinent" typePlaceFilter="continents" @update="filterUpdate" />
                    </div>
                </section>
                <!-- SECTION - Filter END -->

                <!-- SECTION - Time Place list -->
                <section class="t-section -p0 print-section">
                    <div class="t-section__inner">
                        <OrganismsTimePlace :places="placesStates" :images="imagesPlacesStates" type="stat" />
                        <OrganismsTimePlace :places="null" :images="null" type="stat" :skeleton=true v-if="isLoading" />
                        <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                            <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                        </div>
                    </div>
                </section>
                <!-- SECTION - Time Place list END -->

            </div>
        </main>
    </NuxtLayout>
</template>

<script setup>
    const route = useRoute()

    // DATA
    let headline = "Kolik hodin je ve světě"
    let filterPlace = null
    let isLoading = false
    let noMoreItems = false
    let page = 1
    let perPage = 20      
    // DATA API
    const placesStates = ref([])
    const imagesPlacesStates = ref([]) 
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Kolik hodin je ve světě | Cestovatelský portál Frytol na cestách',
        description: 'Kolik hodin je ve světě.',
        keywords: 'Kolik hodin je ve světě, čas, státy, časová pásma, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Kolik hodin je ve světě | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Kolik hodin je ve světě.',
        ogUrl: `https://www.frytolnacestach.cz/svetovy-cas`,
        ogType: 'website',
    })
    let headLink = ref([
        { rel: 'canonical', href: headMeta.ogUrl }
    ])
    // DATA Meta - JSONld
    let headJsonld = reactive({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": headMeta.title,
        "description": headMeta.description,
        "url": headMeta.ogUrl,
        "datePublished": "2024-01-31",
        "author": {
            "@type": "Organization",
            "name": "Frytol na cestách",
            "url": "https://www.frytolnacestach.cz/"
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
    const loadData = async (reset) => {
        isLoading = true

        // PlacesStates
        let placesStatesResponse
        if (filterPlace !== null) {
            placesStatesResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-states?showType=list&idContinent=${filterPlace}&page=${page}&items=${perPage}`)
        } else {
            placesStatesResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-states?showType=list&page=${page}&items=${perPage}`)
        }
        const placesStatesData = JSON.parse(placesStatesResponse) || []
        if (reset) {
            placesStates.value = placesStatesData
        } else {
            placesStates.value = placesStates.value.concat(placesStatesData)
        }

        // Images (placesStates)
        if (placesStates.value && placesStates.value.length > 0) {
            const imagesPlacesStatesIDS = placesStatesData.map(places => places.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
            if (imagesPlacesStatesIDS.length > 0) {
                const imagesPlacesStatesResponse = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesIDS.join(',')}`)
                const imagesPlacesStatesData = JSON.parse(imagesPlacesStatesResponse) || []
                imagesPlacesStates.value = imagesPlacesStates.value.concat(imagesPlacesStatesData)
            }
        }

        if (placesStatesData.length === 0 || placesStatesData.length < perPage) {
            noMoreItems = true
        }

        isLoading = false
    }
    await useAsyncData('dataAPI', () => loadData())

    // OTHER
    const loadMoreItems = () => {
        if (isLoading || noMoreItems) {
            return
        }
        page++
        loadData()
    }

    const handleScroll = () => {
        if (isLoading || noMoreItems) {
            return
        }

        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        const tFooterElement = document.querySelector('.t-footer')
        const tFooterHeight = tFooterElement ? tFooterElement.offsetHeight : 0

        if (scrollTop + windowHeight >= documentHeight - tFooterHeight) {
            page++
            loadData()
        }
    }

    const filterUpdate = (newValue) => {
        filterPlace = newValue.id
        placesStates.value = []
        imagesPlacesStates.value = []
        isLoading = false
        noMoreItems = false
        page = 1
        perPage = 20
        loadData(true)
        updateHeadline()
    }

    onMounted(() => {
        const filterIDstate = route.query.filterIDcontinent
        if (!filterIDstate) {
            loadData()
        }

        window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>