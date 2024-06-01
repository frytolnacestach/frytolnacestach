<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">
                <section class="t-section print-section">

                    <!-- SECTION - Hero food -->
                    <section class="t-section py-4">
                        <div class="t-section__inner">
                            <OrganismsHero headline="Jídla" perex="Objevuj různorodá a chutná jídla, která můžeš ochutnat po celém světě. Kdekoliv se ocitneš, můžeš se těšit na unikátní kulinářské zážitky a objevovat místní lahůdky. S naším průvodcem po světě gastronomie na stránkách cestovatelského portálu Frytol na cestách. Budeš mít přehled o tom, kde se co jí." modifierCSS=" -green -w640" classCSS=" mt-2" />
                        </div>
                    </section>
                    <!-- SECTION - Hero food END -->

                    <!-- SECTION - cestovatelsky slovnik list -->
                    <section class="t-section -p0">
                        <div class="t-section__inner">
                            <OrganismsCoverItem :items="foods" :images="imageFoods" type="jidlo" v-if="foods && foods.length > 0" />
                            <OrganismsCoverItem :items="[]" :images="[]" type="jidlo" :skeleton=true v-if="isLoading" />
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
    const foods = ref([])
    const imageFoods = ref([]) 
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Tradiční jídla ve světě | Cestovatelský portál Frytol na cestách',
        description: 'Jaké jídla se jedí ve světe. Na které kde narazíte a co si kde dát? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.',
        keywords: 'Jídla, kde se co jí?, světová tradiční jídla, informace o jídlech, plánuj cestu, cestovatelský portál, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Tradiční jídla ve světě | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Jaké jídla se jedí ve světe. Na které kde narazíte a co si kde dát? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.',
        ogUrl: `https://www.frytolnacestach.cz/jidlo`,
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

        // Foods
        const foodsResponse = await $fetch(`https://api.frytolnacestach.cz/api/foods?showType=list&page=${page}&items=${perPage}`)
        const foodsData = JSON.parse(foodsResponse) || []
        foods.value = foods.value.concat(foodsData)

        if (foods.value && foods.value.length > 0) {
            // Image (foods)
            const imagesFoodsIDS = foodsData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
            if (imagesFoodsIDS.length > 0) {
                const imageFoodsResponse = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesFoodsIDS.join(',')}`)
                const imageFoodsData = JSON.parse(imageFoodsResponse) || []
                imageFoods.value = imageFoods.value.concat(imageFoodsData)
            }
        }

        if (foodsData.length === 0 || foodsData.length < perPage) {
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