<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - Hero place type -->
                <section class="t-section py-4">
                    <div class="t-section__inner">
                        <OrganismsHeroPlaceType styleType=" -continent" title="Kontinenty" perex="Zveme tě na neuvěřitelnou cestu kolem světa, abys prozkoumal všech 7 kontinentů naší planety. Objevuj fascinující kultury, přírodní divy a tajemná místa včetně odlehlé Antarktidy. Připrav se na dobrodružství, které tě zavede do různých koutů světa a otevře ti dveře k nezapomenutelným zážitkům." />
                    </div>
                </section>
                <!-- SECTION - Hero place type END -->

                <!-- SECTION - Place list -->
                <section class="t-section -p0">
                    <div class="t-section__inner">
                        <OrganismsCoverPlace :places="placesContinents" :images="images" type="kontinent" />
                        <OrganismsCoverPlace :places="null" :images="null" type="kontinent" :skeleton=true v-if="isLoading" />
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
    let isLoading = false
    let noMoreItems = false
    let page = 1
    let perPage = 20   
    // DATA API
    const placesContinents = ref([])
    const images = ref([]) 
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Kontinenty | Cestovatelský portál Frytol na cestách',
        description: 'Zjisti si základní informace o kontinentech. a státech které se na nich nachází za pomocí cestovatelského portálu Frytol na cestách.',
        keywords: 'kontinenty, informace o městech, plánuj cestu, cestovatelský portál, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Kontinenty | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Zjisti si základní informace o kontinentech. a státech které se na nich nachází za pomocí cestovatelského portálu Frytol na cestách.',
        ogUrl: `https://www.frytolnacestach.cz/svet/kontinent`,
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

        // PlacesContinents
        const placesContinentsResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-continents?showType=list&page=${page}&items=${perPage}`)
        const placesContinentsData = JSON.parse(placesContinentsResponse) || []
        placesContinents.value = placesContinents.value.concat(placesContinentsData)

        // Images (placesContinents)
        if (placesContinents.value && placesContinents.value.length > 0) {
            const imagesPlacesContinentsIDS = placesContinentsData.map(places => places.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
            if (imagesPlacesContinentsIDS.length > 0) {
                const imagesResponse = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesContinentsIDS.join(',')}`)
                const imagesData = JSON.parse(imagesResponse) || []
                images.value = images.value.concat(imagesData)
            }
        }

        if (placesContinentsData.length === 0 || placesContinentsData.length < perPage) {
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

    onMounted(() => {
        loadData()
        window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>