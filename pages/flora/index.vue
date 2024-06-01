<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">
                <section class="t-section print-section">

                    <!-- SECTION - Hero flora -->
                    <section class="t-section py-4">
                        <div class="t-section__inner">
                            <OrganismsHero headline="Flóra" perex="Otevři okno do barevného světa flory a objev, jaké rostliny ozdobují naši planetu. S cestovatelským portále Frytol na cestách získáš zajímavé informace a tipy, jak si vychutnat krásy rostlinného života. Připoj se k nám na nezapomenutelnou cestu do světa rozmanité flóry!" modifierCSS=" -green -w640" classCSS=" mt-2" />
                        </div>
                    </section>
                    <!-- SECTION - Hero flora END -->

                    <!-- SECTION - Flora list -->
                    <section class="t-section -p0">
                        <div class="t-section__inner">
                            <OrganismsCoverItem :items="floras" :images="imageFloras" type="flora" v-if="floras && floras.length > 0" />
                            <OrganismsCoverItem :items="[]" :images="[]" type="flora" :skeleton=true v-if="isLoading" />
                            <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                                <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - Flora list END -->

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
    const floras = ref([])
    const imageFloras = ref([]) 
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Flóra co roste ve světě | Frytol na cestách',
        description: 'Jaké flóra kde roste? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.',
        keywords: 'Flóra, kde co roste?, Jedovaté rostliny, informace o rostlinách, plánuj cestu, cestovatelský portál, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Flóra co roste ve světě | Frytol na cestách',
        ogDescription: 'Jaké flóra kde roste? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.',
        ogUrl: `https://www.frytolnacestach.cz/flora`,
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

        // Floras
        const florasResponse = await $fetch(`https://api.frytolnacestach.cz/api/floras?showType=list&page=${page}&items=${perPage}`)
        const florasData = JSON.parse(florasResponse) || []
        floras.value = floras.value.concat(florasData)

        if (floras.value && floras.value.length > 0) {
            // Image (floras)
            const imageFlorasIDS = florasData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
            if (imageFlorasIDS.length > 0) {
                const imageFlorasResponse = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imageFlorasIDS.join(',')}`)
                const imageFlorasData = JSON.parse(imageFlorasResponse) || []
                imageFloras.value = imageFloras.value.concat(imageFlorasData)
            }
        }

        if (florasData.length === 0 || florasData.length < perPage) {
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