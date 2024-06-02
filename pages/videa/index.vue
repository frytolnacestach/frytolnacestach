<template>
    <NuxtLayout name="default">
        <main class="t-main -gray -pt-menu" role="main">
            <div class="t-main__content">
                <!-- SECTION - Hero -->
                <section class="t-section -p0 mt-2 mb-4">
                    <div class="t-section__inner">
                        <OrganismsHero :headline="headlineFilter" perex="Vítej na našem cestovatelském portálu! Podívej se na naše videa plná dobrodružství a inspirace k cestování. Objevuj spolu s námi nejzajímavější místa na světě prostřednictvím autentických příběhů a praktických tipů. Připrav se na vlastní nezapomenutelné dobrodružství díky našim videím plným vzrušujících zážitků. Užívej si každý moment na cestách a objevuj krásy světa s námi!" modifierCSS=" -gray -w640" classCSS=" mt-2" />
                    </div>
                </section>
                <!-- SECTION - Hero END -->

                <!-- SECTION - Filter -->
                <section class="t-section -p0 hidden-print">
                    <div class="t-section__inner">
                        <OrganismsFormFilterPlace styleThema=" -gray" typePlaceFilterName="Vybrat stát" typePlaceFilter="states" @update="filterUpdate" />
                    </div>
                </section>
                <!-- SECTION - Filter END -->

                <!-- SECTION - videos -->
                <section class="t-section -p0 py-1 px-2 print-section">
                    <div class="t-section__inner">
                        <OrganismsVideoList :videos="videos" :images="imagesVideos" styleThemaLoading=" -gray" styleSizeHeadline="h2" />
                        <OrganismsVideoList :videos="null" :images="null" skeletonThema=" -skeleton-gray" skeletonNumber="9" :skeleton=true v-if="isLoading" />
                        <OrganismsNoneContent text="Bohužel zde nejsou žádné videa" styleThema=" -green" styleGap=" px-1" v-if="videos && videos.length === 0 && !isLoading" />
                        <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                            <span class="a-button-fill -big -gray" @click="loadMoreItems">Načíst další položky</span>
                        </div>
                    </div>
                </section>
                <!-- SECTION - videos END -->

                <!-- SECTION - Platforms -->
                <section class="t-section -p0 py-1 mt-2 px-2 print-section">
                    <div class="t-section__inner">
                        <MoleculesHeadline title="Platformy kde jsem" styleAlign=" -left" styleGap="mb-1" />
                        <OrganismsPlatform />
                        <div class="flex flex-center mb-4">
                            <AtomsButtonFillFull target="internal" url="/social" text="Více informací o platformách" styleThema=" -gray" />
                        </div>
                    </div>
                </section>
                <!-- SECTION - Platforms END -->
            </div>
        </main>
    </NuxtLayout>
</template>

<script setup>
    const route = useRoute()

    // DATA
    let headline = "Videa"
    let headlineFilter = 'Videa'
    let filterPlaceName = ''
    let filterPlace = ''
    let isLoading = false
    let noMoreItems = false
    let page = 1
    let perPage = 20   
    // DATA API
    const videos = ref([])
    const imagesVideos = ref([]) 
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Cestovatelská videa | Cestovatelský portál Frytol na cestách',
        description: 'Sleduj cestovatelská videa z různích míst naší krásné planety na cestovatelském portálu Frytol na cestách.',
        keywords: 'cestovatelská videa, youtube, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Cestovatelská videa | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Sleduj cestovatelská videa z různích míst naší krásné planety na cestovatelském portálu Frytol na cestách.',
        ogUrl: `https://www.frytolnacestach.cz/videa`,
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

        // Videos
        let videosResponse
        if (filterPlace !== null) {
            videosResponse = await $fetch(`https://api.frytolnacestach.cz/api/videos?showType=list&idState=${filterPlace}&page=${page}&items=${perPage}`)
        } else {
            videosResponse = await $fetch(`https://api.frytolnacestach.cz/api/videos?showType=list&page=${page}&items=${perPage}`)
        }
        const videosData = JSON.parse(videosResponse) || []
        videos.value = videos.value.concat(videosData)

        if (reset) {
            videos.value = videosData
        } else {
            videos.value = videos.value.concat(videosData)
        }

        // Images (videos)
        if (videos.value && videos.value.length > 0) {
            const imagesVideosIDS = videosData.map(videos => videos.id_image).filter(id => id !== undefined && id !== null && id !== '')
            if (imagesVideosIDS.length > 0) {
                const imagesResponse = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosIDS.join(',')}`)
                const imagesData = JSON.parse(imagesResponse) || []
                imagesVideos.value = imagesVideos.value.concat(imagesData)
            }
        }

        // HEAD
        if (videos.value && videos.value.length > 0) {
            // Meta
            headMeta.title = `${headlineFilter} | Cestovatelský portál Frytol na cestách`
            headMeta.description = `Sleduj cestovatelská ${headlineFilter !== 'Videa' ? (headlineFilter.replace("Videa", "videa") + ' na cestovatelském portálu Frytol na cestách.') : 'videa z různích míst naší krásné planety na cestovatelském portálu Frytol na cestách.'}`
        }

        if (videosData.length === 0 || videosData.length < perPage) {
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
            headlineFilter = headline + ' ze státu ' + filterPlaceName
        } else {
            headlineFilter = headline
        }
    }

    const filterUpdate = (newValue) => {
        filterPlace = newValue.id
        filterPlaceName = newValue.name
        videos.value = []
        imagesVideos.value = []
        isLoading = false
        noMoreItems = false
        page = 1
        perPage = 20
        loadData(true)
        updateHeadline()
    }

    onMounted(() => {
        const filterIDstate = route.params.slug
        if (!filterIDstate) {
            loadData()
        }

        window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>