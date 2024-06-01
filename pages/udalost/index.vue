<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">
                <section class="t-section print-section">
                    
                    <!-- SECTION - Hero event -->
                    <section class="t-section py-4">
                        <div class="t-section__inner">
                            <OrganismsHero headline="Události" perex="Na našem cestovatelském portálu vám přinášíme nejnovější zprávy o zajímavých událostech z České republiky i ze světa. Buďte v obraze o kulturních festivalech, sportovních událostech, uměleckých vystoupeních a dalších akcích, které oživí vaše cestovatelské dobrodružství." modifierCSS=" -green -w640" classCSS=" mt-2" />
                        </div>
                    </section>
                    <!-- SECTION - Hero event END -->

                    <!-- SECTION - Události list -->
                    <section class="t-section -p0">
                        <div class="t-section__inner">
                            <OrganismsCoverItem :items="events" :images="imageEvents" type="udalost" />
                            <OrganismsCoverItem :items="null" :images="null" type="udalost" :skeleton=true v-if="isLoading" />
                            <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                                <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - Události list END -->
                    
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
    const events = ref([])
    const imageEvents = ref([]) 
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Události | Cestovatelský portál Frytol na cestách',
        description: 'Události které se ve světě konají.',
        keywords: 'udalosti, svetove eventy, plánuj cestu, cestovatelský portál, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Události | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Události které se ve světě konají.',
        ogUrl: `https://www.frytolnacestach.cz/udalost`,
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

        // Event
        const eventsResponse = await $fetch(`https://api.frytolnacestach.cz/api/events?status=nearby&showType=list&page=${page}&items=${perPage}`)
        const eventsData = JSON.parse(eventsResponse) || []
        events.value = events.value.concat(eventsData)

        if (events.value && events.value.length > 0) {
            // Image (events)
            const imagesEventsIDS = eventsData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
            if (imagesEventsIDS.length > 0) {
                const imageEventsResponse = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesEventsIDS.join(',')}`)
                const imageEventsData = JSON.parse(imageEventsResponse) || []
                imageEvents.value = imageEvents.value.concat(imageEventsData)
            }
        }

        if (eventsData.length === 0 || eventsData.length < perPage) {
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