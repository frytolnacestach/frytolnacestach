<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - Hero place type -->
                <section class="t-section py-4">
                    <div class="t-section__inner">
                        <OrganismsHeroPlaceType styleType=" -region" :title="headlineFilter" perex="Prozkoumejte bohatství regionů, která naše planeta nabízí, a ponořte se do rozmanitosti politických i přírodních oblastí. Od malebných koutů s historickým odkazem po dobrodružství ve fascinujících krajinách. Každý region má svůj unikátní příběh, který vypráví o místní kultuře, tradicích a kráse. Zveme vás k objevování těchto fascinujících destinací a k prožívání nezapomenutelných okamžiků, které vám poskytnou pohled do srdce každého regionu." />
                    </div>
                </section>
                <!-- SECTION - Hero place type END -->

                <!-- SECTION - Filter -->
                <section class="t-section -p0 hidden-print">
                    <div class="t-section__inner">
                        <OrganismsFormFilterPlace styleThema=" -green" typePlaceFilterName="Vybrat stát" typePlaceFilter="states" @update="filterUpdate" />
                    </div>
                </section>
                <!-- SECTION - Filter END -->

                <!-- SECTION - Place list -->
                <section class="t-section -p0">
                    <div class="t-section__inner">
                        <OrganismsCoverPlace :places="placesRegions" :placesParent="placesParent" :showPrename="true" :images="images" type="region" />
                        <OrganismsCoverPlace :places="null" :images="null" type="region" :skeleton=true v-if="isLoading" />
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
    let headline = "Regiony"
    let headlineFilter = 'Regiony'
    let filterPlaceName = ''
    let filterPlace = ''
    let isLoading = false
    let noMoreItems = false
    let page = 1
    let perPage = 20   
    // DATA API
    const placesRegions = ref([])
    const placesParent = ref([])
    const images = ref([]) 
    // DATA Meta - head
    let headMeta = reactive({
        title: '',
        description: 'Zjisti si základní informace o regionech. a místech které se v nich nachází za pomocí cestovatelského portálu Frytol na cestách.',
        keywords: 'regiony, informace o regionech, plánuj cestu, cestovatelský portál, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: '',
        ogDescription: 'Zjisti si základní informace o regionech. a místech které se v nich nachází za pomocí cestovatelského portálu Frytol na cestách.',
        ogUrl: `https://www.frytolnacestach.cz/svet/region`,
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

        // PlacesRegions
        let placesRegionsResponse
        if (filterPlace !== null) {
            placesRegionsResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-regions?showType=list&idState=${filterPlace}&page=${page}&items=${perPage}`)
        } else {
            placesRegionsResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-regions?showType=list&page=${page}&items=${perPage}`)
        }
        const placesRegionsData = JSON.parse(placesRegionsResponse) || []

        if (reset) {
            placesRegions.value = placesRegionsData
        } else {
            placesRegions.value = placesRegions.value.concat(placesRegionsData)
        }

        // Images (placesRegions)
        const imagesPlacesRegionsIDS = placesRegionsData.map(placeRegion => placeRegion.id_image_cover).filter(id => id !== undefined && id !== null && id !== '');
        if (imagesPlacesRegionsIDS.length > 0) {
            const responseImages = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesRegionsIDS.join(',')}`);
            const imagesData = JSON.parse(responseImages) || []
            images.value = images.value.concat(imagesData)
        }

        //load places parent
        let placesParentIDS = placesRegionsData.map(placeRegion => placeRegion.id_state).filter(id => id !== undefined && id !== null && id !== '')
        placesParentIDS = [...new Set(placesParentIDS)]
        const placesParentResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-states-array?showType=list&id=${placesParentIDS.join(',')}`)
        const placesParentData = JSON.parse(placesParentResponse) || []
        placesParent.value = placesParent.value.concat(placesParentData)

        // HEAD
        if (placesRegions.value && placesRegions.value.length > 0) {
            // Meta
            headMeta.title = `${headlineFilter} | Cestovatelský portál Frytol na cestách`
        }

        if (placesRegionsData.length === 0 || placesRegionsData.length < perPage) {
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
            headlineFilter = headline + ' státu ' + filterPlaceName
        } else {
            headlineFilter = headline
        }
    }

    const filterUpdate = (newValue) => {
        filterPlace = newValue.id
        filterPlaceName = newValue.name
        placesRegions.value = []
        placesParent.value = []
        images.value = []
        isLoading = false
        noMoreItems = false
        page = 1
        perPage = 20
        loadData(true)
        updateHeadline()
    }

    onMounted(() => {
        const filterIDstate = route.query.filterIDstate
        if (!filterIDstate) {
            loadData()
        }

        window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>