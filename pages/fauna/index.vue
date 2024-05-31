<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">
                <section class="t-section print-section">

                    <!-- SECTION - Hero fauna -->
                    <section class="t-section py-4">
                        <div class="t-section__inner">
                            <OrganismsHero headline="Fauna" perex="Ponoř se do světa fauny a objev, kdo s námi sdílí tento planetární domov. S cestovatelským portále Frytol na cestách získáš poutavé informace a tipy, na co si dávat pozor. Vydej se s námi na nezapomenutelnou cestu do světa divokého života!" modifierCSS=" -green -w640" classCSS=" mt-2" />
                        </div>
                    </section>
                    <!-- SECTION - Hero fauna END -->

                    <!-- SECTION - Fauna list -->
                    <section class="t-section -p0">
                        <div class="t-section__inner">
                            <OrganismsCoverItem :items="fauna" :images="imagesFauna" type="fauna" v-if="fauna && fauna.length > 0" />
                            <OrganismsCoverItem :items="[]" :images="[]" type="fauna" :skeleton=true v-if="isLoading" />
                            <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                                <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - Fauna list END -->

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
    const fauna = ref([])
    const imagesFauna = ref([]) 
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Fauna co žije ve světě | Cestovatelský portál Frytol na cestách',
        description: 'Jaké fauna kde žije? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.',
        keywords: 'Fauna, co žije?, Zvířata ve světě, informace o zvířatech, plánuj cestu, cestovatelský portál, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Fauna co žije ve světě | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Jaké fauna kde žije? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.',
        ogUrl: `https://www.frytolnacestach.cz/fauna`,
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

        // Fauna
        const faunaResponse = await $fetch(`https://api.frytolnacestach.cz/api/faunas?showType=list&page=${page}&items=${perPage}`)
        const faunaData = JSON.parse(faunaResponse) || []
        fauna.value = fauna.value.concat(faunaData)

        if (fauna.value && fauna.value.length > 0) {
            // Image (fauna)
            const imagesFaunaIDS = faunaData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
            if (imagesFaunaIDS.length > 0) {
                const imagesFaunaResponse = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesFaunaIDS.join(',')}`)
                const imagesFaunaData = JSON.parse(imagesFaunaResponse) || []
                imagesFauna.value = imagesFauna.value.concat(imagesFaunaData)
            }
        }

        if (faunaData.length === 0 || faunaData.length < perPage) {
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