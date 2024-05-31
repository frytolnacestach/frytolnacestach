<template>
    <NuxtLayout name="default">
        <main class="t-main -gray -vh100" role="main">
            <div class="t-main__content">

                <!-- SECTION - Vyhledávač -->
                <section class="t-section pt-8 pb-4 hidden-print">
                    <div class="t-section__inner">
                        <OrganismsSearch styleThema=" -gray"/>
                    </div>
                </section>
                <!-- SECTION - Vyhledávač END -->

                <!-- SECTION - Top místa -->
                <section class="t-section -p0 mt-4 pb-4 print-section">
                    <div class="t-section__inner">
                        <MoleculesHeadline title="Nejzajímavější místa" perex="Víte, kam byste se měli vydat na nezapomenutelnou dovolenou? Přinášíme vám seznam nejzajímavějších míst na světě, která musíte vidět. Od malebných vesnic a historických památek až po impozantní přírodní krásy, naše stránky vám pomohou najít nejlepší místa pro vaši další cestování." styleThema=" -gray -w640" styleAlign=" -center" styleGap=" mb-2" styleSize="h1" />
                        <OrganismsTopPlace styleThema=" -gray" skeletonThema=" -skeleton-gray" />
                    </div>
                </section>
                <!-- SECTION - Top místa END -->
                
                <!-- SECTION - Typ místa -->
                <section class="t-section py-4 print-section">
                    <div class="t-section__inner">
                        <MoleculesHeadline title="Nevíš kam vyrazit?" perex="Pokud toužíš pozkoumat svět a nemáš jasnou představu, kam se vydat, můžeš si vybrat některou z kategorií míst a začít prozkoumávat." styleThema=" -gray -w640" styleAlign=" -center" styleGap=" mb-2" />
                        <OrganismsWorldType styleThema=" -gray" skeletonThema=" -skeleton-gray" />
                    </div>
                </section>
                <!-- SECTION - Typ místa END -->

                <section class="t-section -p0 px-1">
                    <div class="t-section__inner -col">
                        
                        <!-- SECTION - Article list -->
                        <div class="t-section__col px-1 mb-4 print-section">
                            <MoleculesHeadline title="Nejnovější články" styleAlign=" -left" />
                            <OrganismsArticleListSmall :posts="post" :images="imagePost" styleThemaLoading=" -gray" />
                            <div class="flex flex-full flex-ai-end flex-center mt-2">
                                <AtomsButtonFillFull target="internal" url="/clanky" text="Všechny články" styleThema=" -gray" />
                            </div>
                        </div>
                        <!-- SECTION - Article list END -->

                        <!-- SECTION - Video -->
                        <div class="t-section__col px-1 mb-4 print-section">
                            <MoleculesHeadline title="Nejnovější videa" styleAlign=" -left" />
                            <OrganismsVideoListSmall :videos="video" :images="imageVideo" styleThemaLoading=" -gray" />
                            <div class="flex flex-full flex-ai-end flex-center mt-2">
                                <AtomsButtonFillFull target="internal" url="/videa" text="Všechna videa" styleThema=" -gray" />
                            </div>
                        </div>
                        <!-- SECTION - Video END-->

                        <!-- SECTION - events -->
                        <div class="t-section__col px-1 mb-4 print-section">
                            <MoleculesHeadline title="Nejbližší události" styleAlign=" -left" />
                            <OrganismsEventListSmall styleThema=" -gray" />
                            <div class="flex flex-full flex-ai-end flex-center mt-2">
                                <AtomsButtonFillFull target="internal" url="/udalost" text="Všechny události" styleThema=" -gray" />
                            </div>
                        </div>
                        <!-- SECTION - events END -->
                        
                    </div>
                </section>
            </div>
        </main>
    </NuxtLayout>
</template>

<script setup>
    // DATA API
    const post = ref([])
    const imagePost = ref([]) 
    const video = ref([])
    const imageVideo = ref([]) 
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Cestovatelský portál Frytol na cestách',
        description: 'Cestuj chytře a naplánuj si svojí cestu na cestovatelské portálu Frytol na cestách. Založ si účet a ukaž přátelům kde všude jsi byl/a.',
        keywords: 'Cestovatelský portál, cestování chytře, plánuj, úvod, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Cestovatelský portál Frytol na cestách',
        ogDescription: 'Cestuj chytře a naplánuj si svojí cestu na cestovatelské portálu Frytol na cestách. Založ si účet a ukaž přátelům kde všude jsi byl/a.',
        ogUrl: `https://www.frytolnacestach.cz`,
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
        // Post
        const postResponse = await $fetch(`https://api.frytolnacestach.cz/api/posts?limit=5&status=nearby`)
        const postData = JSON.parse(postResponse)
        post.value = postData || []
        
        // Image (post)
        if (post.value && post.value.length > 0){
            const imagePostResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${post.value[0].id_image_cover}`)
            const imagePostData = JSON.parse(imagePostResponse)
            imagePost.value = imagePostData || []
        }

        // Video
        const videoResponse = await $fetch(`https://api.frytolnacestach.cz/api/videos?limit=5&status=nearby`)
        const videoData = JSON.parse(videoResponse)
        video.value = videoData || []
        
        // Image (video)
        if (video.value && video.value.length > 0){
            const imageVideoResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${video.value[0].id_image}`)
            const imageVideoData = JSON.parse(imageVideoResponse)
            imageVideo.value = imageVideoData || []
        }
    }
    await useAsyncData('dataAPI', () => loadData())
</script>