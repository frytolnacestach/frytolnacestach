<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">
                <section class="t-section print-section">

                    <!-- SECTION - Hero cestovatelsky slovnik -->
                    <section class="t-section py-4">
                        <div class="t-section__inner">
                            <OrganismsHero headline="Cestovatelský slovník" perex="Procházej cestovatelský slovník a rozšiřuj svůj cestovatelský slovníček o unikátní výrazy spojené s cestováním. Nabízíme ti pohled do jazyka cestování, abys lépe porozuměl(a) specifickým termínům a zkratkám." modifierCSS=" -green -w640" classCSS=" mt-2" />
                        </div>
                    </section>
                    <!-- SECTION - Hero cestovatelsky slovnik END -->

                    <!-- SECTION - cestovatelsky slovnik list -->
                    <section class="t-section -p0">
                        <div class="t-section__inner">
                            <OrganismsCoverItem :items="travelDictionaries" :images="imagesTravelDictionaries" type="cestovatelsky-slovnik" v-if="travelDictionaries && travelDictionaries.length > 0"/>
                            <OrganismsCoverItem :items="[]" :images="[]" type="cestovatelsky-slovnik" :skeleton=true v-if="isLoading" />
                            <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                                <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - cestovatelsky slovnik list END -->
                    
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
    let perPage = 20   
    // DATA API
    const travelDictionaries = ref([])
    const imagesTravelDictionaries = ref([]) 
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Cestovatelský slovník | Cestovatelský portál Frytol na cestách',
        description: 'Najdeš zde spoustu výrazů a zkratek které se ti mohou hodit při tvém cestování.',
        keywords: 'Cestovatelský slovník, travel hack, zkratky, plánuj cestu, cestovatelský portál, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Cestovatelský slovník | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Najdeš zde spoustu výrazů a zkratek které se ti mohou hodit při tvém cestování.',
        ogUrl: `https://www.frytolnacestach.cz/cestovatelsky-slovnik`,
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
    const loadData = async () => {
        isLoading = true

        // TravelDictionaries
        const travelDictionariesResponse = await $fetch(`https://api.frytolnacestach.cz/api/travel-dictionaries?showType=list&page=${page}&items=${perPage}`)
        const travelDictionariesData = JSON.parse(travelDictionariesResponse) || []
        travelDictionaries.value = travelDictionaries.value.concat(travelDictionariesData)

        if (travelDictionaries.value && travelDictionaries.value.length > 0) {
            // Image (travelDictionaries)
            const imagesTravelDictionariesIDS = travelDictionariesData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
            if (imagesTravelDictionariesIDS.length > 0) {
                const imagesTravelDictionariesResponse = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesTravelDictionariesIDS.join(',')}`)
                const imagesTravelDictionariesData = JSON.parse(imagesTravelDictionariesResponse) || []
                imagesTravelDictionaries.value = imagesTravelDictionaries.value.concat(imagesTravelDictionariesData)
            }
        }

        if (travelDictionariesData.length === 0 || travelDictionariesData.length < perPage) {
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
        window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>