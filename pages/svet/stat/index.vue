<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - Hero place type -->
                <section class="t-section py-4">
                    <div class="t-section__inner">
                        <OrganismsHeroPlaceType styleType=" -state" :title="headlineFilter" perex="Zveme tě na neuvěřitelnou cestu k prozkoumání nejen 190 oficiálních států, ale také k objevování poutavých ostrovních a městských území. Celkem 250 unikátních území představuje nekonečné možnosti pro nezapomenutelné zážitky. Připravte se na cestu, která vás zavede do srdce různorodých kultur a malebných koutů, a otevře brány k poznání fascinujících států a území po celém světě." />
                    </div>
                </section>
                <!-- SECTION - Hero place type END -->

                <!-- SECTION - Filter -->
                <section class="t-section -p0 hidden-print">
                    <div class="t-section__inner">
                        <OrganismsFormFilterPlace styleThema=" -green" typePlaceFilterName="Vybrat kontinent" typePlaceFilter="continents" @update="filterUpdate" />
                    </div>
                </section>
                <!-- SECTION - Filter END -->

                <!-- SECTION - Place list -->
                <section class="t-section -p0">
                    <div class="t-section__inner">
                        <OrganismsCoverPlace :places="placesStates" :images="images" type="stat" />
                        <OrganismsCoverPlace :places="null" :images="null" type="stat" :skeleton=true v-if="isLoading" />
                        <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                            <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                        </div>
                    </div>
                </section>
                <!-- SECTION - Place list END -->
                
            </div>
        </main>
    </NuxtLayout>
</template>

<script setup>
    const route = useRoute()

    // DATA
    let headline = "Státy"
    let headlineFilter = 'Státy'
    let filterPlaceName = ''
    let filterPlace = ''
    let isLoading = false
    let noMoreItems = false
    let page = 1
    let perPage = 20   
    // DATA API
    const placesStates = ref([])
    const images = ref([]) 
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Státy | Cestovatelský portál Frytol na cestách',
        description: 'Objevuj všechny státy světa na cestovatelské portálu Frytolem na cestách. Naplánuj si ideální cestu.',
        keywords: 'státy, ostrovy, území, plánuj cestu, cestovatelský portál, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Státy | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Objevuj všechny státy světa na cestovatelské portálu Frytolem na cestách. Naplánuj si ideální cestu.',
        ogUrl: `https://www.frytolnacestach.cz/svet/stat`,
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
        const imagesPlacesStatesIDS = placesStatesData.map(placeState => placeState.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
        if (imagesPlacesStatesIDS.length > 0) {
            const responseImages = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesIDS.join(',')}`)
            const imagesData = JSON.parse(responseImages) || []
            images.value = images.value.concat(imagesData)
        }

        // HEAD
        if (placesStates.value && placesStates.value.length > 0) {
            // Meta
            headMeta.title = `${headlineFilter} | Cestovatelský portál Frytol na cestách`
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

    const updateHeadline = () => {
        if (filterPlaceName) {
            headlineFilter = headline + ' kontinentu ' + filterPlaceName
        } else {
            headlineFilter = headline
        }
    }

    const filterUpdate = (newValue) => {
        filterPlace = newValue.id
        filterPlaceName = newValue.name
        placesStates.value = []
        images.value = []
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