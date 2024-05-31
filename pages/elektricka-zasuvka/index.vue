<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">
                <section class="t-section print-section">
                    
                    <!-- SECTION - Hero elektrické zásuvky -->
                    <section class="t-section py-4">
                        <div class="t-section__inner">
                            <OrganismsHero headline="Elektrické zásuvky" perex="Plánujete cestu mimo střední Evropu a nevíte, jakou redukci pro svá elektronická zařízení si pořídit? Typy zásuvek a používané normy se dozvíte na cestovatelském portálu Frytol na cestách." modifierCSS=" -green -w640" classCSS=" mt-2" />
                        </div>
                    </section>
                    <!-- SECTION - Hero elektrické zásuvky END -->

                    <!-- SECTION - elektrické zásuvky list -->
                    <section class="t-section -p0">
                        <div class="t-section__inner">
                            <OrganismsCoverTitleItem :items="wallSockets" :images="imageWallSockets" type="elektricka-zasuvka" v-if="wallSockets && wallSockets.length > 0" />
                            <OrganismsCoverTitleItem :items="null" :images="null" type="wall-sockets" :skeleton=true v-if="isLoading" />
                            <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                                <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - elektrické zásuvky list END -->

                </section>
            </div>
        </main>
    </NuxtLayout>
</template>

<script setup>
    // DATA
    let isLoading = false
    let noMoreItems = false
    let page = 1
    let perPage = 10   
    // DATA API
    const wallSockets = ref([])
    const imageWallSockets = ref([]) 
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Elektrické zásuvky | Cestovatelský portál Frytol na cestách',
        description: 'Jaké elektrické zásuvky se kde používají? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.',
        keywords: 'Elektrické zásuvky, výrobky, tradiční výroba, informace o výrobcích, plánuj cestu, cestovatelský portál, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Elektrické zásuvky | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Jaké elektrické zásuvky se kde používají? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.',
        ogUrl: `https://www.frytolnacestach.cz/elektricka-zasuvka`,
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

    // API - PAGE - elektricka-zasuvka/index
    const loadData = async () => {
        isLoading = true

        // API - WallSockets
        const wallSocketsResponse = await $fetch(`https://api.frytolnacestach.cz/api/wall-sockets?showType=list&page=${page}&items=${perPage}`)
        const wallSocketsData = JSON.parse(wallSocketsResponse) || []
        wallSockets.value = wallSockets.value.concat(wallSocketsData)

        if (wallSockets.value && wallSockets.value.length > 0) {
            // API - Image wallSockets
            const imagesWallSocketsIDS = wallSocketsData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
            if (imagesWallSocketsIDS.length > 0) {
                const imageWallSocketsResponse = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesWallSocketsIDS.join(',')}`)
                const imageWallSocketsData = JSON.parse(imageWallSocketsResponse) || []
                imageWallSockets.value = imageWallSockets.value.concat(imageWallSocketsData)
            }
        }

        // Check if there are no more items
        if (wallSocketsData.length === 0 || wallSocketsData.length < perPage) {
            noMoreItems = true
        }

        isLoading = false
    }
    await useAsyncData('dataAPI', () => loadData())

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

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>