<template>
    <NuxtLayout name="default">
        <main class="t-main -gray -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - Hero article -->
                <section class="t-section -p0">
                    <div class="t-section__inner">
                        <OrganismsHeroArticle :post="post" :images="imagePostHero" v-if="post && post.length > 0" />
                    </div>
                </section>
                <!-- SECTION - Hero article END -->

                <!-- SECTION - Hot info -->
                <section class="t-section -p0 px-2" v-if="post && post.length > 0 && post[0].locations">
                    <div class="t-section__inner">
                        <OrganismsHotInfo :locations="post[0].locations" />
                    </div>
                </section>
                <!-- SECTION - Hot info END -->

                <div class="t-col2">
                    <div class="t-col2__content my-2">

                        <!-- SECTION - Opener text -->
                        <section class="t-section pt-2" v-if="post && post.length > 0 && post[0].text_opener">
                            <div class="t-section__inner">
                                <OrganismsOpenerText :text="post[0].text_opener" />
                            </div>
                        </section>
                        <!-- SECTION - Opener text END -->

                        <!-- SECTION - Wysiwyg -->
                        <section class="t-section pb-2" v-if="post && post.length > 0 && post[0].text_author">
                            <div class="t-section__inner">
                                <OrganismsWysiwyg :text="post[0].text_author" />
                            </div>
                        </section>
                        <!-- SECTION - Wysiwyg END -->

                        <!-- SECTION - Youtube -->
                        <section class="t-section py-2 hidden-print" v-if="post && post.length > 0 && post[0].url_youtube">
                            <div class="t-section__inner">
                                <OrganismsYoutube :url="post[0].url_youtube" />
                            </div>
                        </section>
                        <!-- SECTION - Youtube END -->

                        <!-- SECTION - Map mapy -->
                        <section class="t-section -hidden-desktop my-2 print-section" v-if="post && post.length > 0 && post[0].url_map">
                            <div class="t-section__inner">
                                <OrganismsMapMapy :idImageMap="post[0].id_image_map" :url="post[0].url_map" :title="post[0].title" :images="imagePostMap" />
                            </div>
                        </section>
                        <!-- SECTION - Map mapy -->

                        <!-- SECTION - Wiki -->
                        <section class="t-section py-2 print-section" v-if="post && post.length > 0 && post[0].text_wiki">
                            <div class="t-section__inner">
                                <OrganismsWiki :wysiwyg="post[0].text_wiki" :source="post[0].url_wiki" />
                            </div>
                        </section>
                        <!-- SECTION - Wiki END -->

                        <!-- SECTION - Transport -->
                        <section class="t-section py-2 print-section" v-if="post && post.length > 0 && post[0].travels">
                            <div class="t-section__inner">
                                <OrganismsTransport title="Jak se sem dostat" :items="post[0].travels" />
                            </div>
                        </section>
                        <!-- SECTION - Transport END -->

                        <!-- SECTION - Trip information -->
                        <section class="t-section py-2 print-section" v-if="post && post.length > 0 && post[0].prices">
                            <div class="t-section__inner">
                                <OrganismsTripInformation title="Ceny" :perex="post[0].perex_price" :items="post[0].prices" styleThema=" -bg-brand1-a" />
                            </div>
                        </section>
                        <!-- SECTION - Trip information END -->

                        <!-- SECTION - Trip information -->
                        <section class="t-section py-2 print-section" v-if="post && post.length > 0 && post[0].triplengths">
                            <div class="t-section__inner">
                                <OrganismsTripInformation title="Délka výletu" :perex="post[0].perex_triplength" :items="post[0].triplengths" styleThema=" -bg-brand2-a" />
                            </div>
                        </section>
                        <!-- SECTION - Trip information END -->

                        <!-- SECTION - Trip information -->
                        <section class="t-section py-2 print-section" v-if="post && post.length > 0 && post[0].times">
                            <div class="t-section__inner">
                                <OrganismsTripInformation title="Časová náročnost" :perex="post[0].perex_time" :items="post[0].times" styleThema=" -bg-brand2-a" />
                            </div>
                        </section>
                        <!-- SECTION - Trip information END -->

                        <!-- SECTION - Review -->
                        <section class="t-section py-2 print-section" v-if="post && post.length > 0 && post[0].review_text">
                            <div class="t-section__inner">
                                <OrganismsReview :reviewText="post[0].review_text" :reviewValue="post[0].review_value" />
                            </div>
                        </section>
                        <!-- SECTION - Review END -->

                        <!-- SECTION - Update information -->
                        <section class="t-section py-2 print-section" v-if="post && post.length > 0 && post[0].date_information">
                            <div class="t-section__inner">
                                <OrganismsUpdateInformation :date="post[0].date_information" />
                            </div>
                        </section>
                        <!-- SECTION - Update information END -->

                    </div>
                    <div class="t-col2__sidebar my-2">

                        <!-- SECTION - author - sidebar -->
                        <section class="t-section -px-world my-2 -p0 print-section" v-if="post && post.length > 0 && post[0].id_user">
                            <div class="t-section__inner">
                                <OrganismsAuthorSidebar :author="post[0].id_user"/>
                            </div>
                        </section>
                        <!-- SECTION - author - sidebar - END -->

                        <!-- SECTION - Sidebar map mapy -->
                        <section class="t-section -hidden-mobile my-2 hidden-print" v-if="post && post.length > 0 && post[0].url_map">
                            <div class="t-section__inner">
                                <OrganismsSidebarMapMapy :idImageMap="post[0].id_image_map" :url="post[0].url_map" :title="post[0].title" :images="imagePostMap" />
                            </div>
                        </section>
                        <!-- SECTION - Sidebar map mapy END -->

                        <!-- SECTION - Sidebar tag -->
                        <section class="t-section -px-world my-2 -p0 print-section" v-if="post && post.length > 0 && post[0].tags">
                            <div class="t-section__inner">
                                <OrganismsSidebarTag :tags="post[0].tags" />
                            </div>
                        </section>
                        <!-- SECTION - Sidebar tag END -->

                        <!-- SECTION - ad-google - sidebar -->
                        <section class="t-section -px-world mt-4 mb-2">
                            <div class="t-section__inner">
                                <OrganismsAdGoogleSidebar styleThema=" -gray" />
                            </div>
                        </section>
                        <!-- SECTION - ad-google - sidebar - END -->

                    </div>
                </div>
                <div class="t-layout-full" v-if="(post && post.length > 0 && post[0].id_continent) || (post && post.length > 0 && post[0].id_state) || (post && post.length > 0 && post[0].id_region) || (post && post.length > 0 && post[0].id_city) || (post && post.length > 0 && post[0].id_spot)">

                    <!-- SECTION - place -->
                    <section class="t-section -p0 pt-2 pb-1 print-section">
                        <div class="t-section__inner">
                            <MoleculesHeadline title="Více informací o místě" styleAlign=" -p-left" styleGap=" mx-2 mb-2" />
                            <div class="flex mx-1">
                                <OrganismsPlaceBlock :placeID="post[0].id_continent" type="kontinent" v-if="post[0].id_continent" />
                                <OrganismsPlaceBlock :placeID="post[0].id_state" type="stat" v-if="post[0].id_state" />
                                <OrganismsPlaceBlock :placeID="post[0].id_region" type="region" v-if="post[0].id_region" />
                                <OrganismsPlaceBlock :placeID="post[0].id_city" type="mesto" v-if="post[0].id_city" />
                                <OrganismsPlaceBlock :placeID="post[0].id_spot" type="misto" v-if="post[0].id_spot" />
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - place END -->

                    <!-- SECTION - videos -->
                    <section class="t-section -p0 -bg-gray pt-4 py-2 px-2 hidden-print" v-if="videos && videos.length > 0">
                        <div class="t-section__inner">
                            <MoleculesHeadline title="Videa z této oblasti" styleThema=" -gray" styleAlign=" -p-left" styleGap=" mb-2" />
                            <OrganismsVideoList :videos="videos" :images="imagesVideos" type="travel" styleThema=" -gray" styleThemaLoading=" -gray" styleAlign=" -p-left" />
                        </div>
                    </section>
                    <!-- SECTION - videos END -->
                    
                </div>
            </div>
        </main>
    </NuxtLayout>
</template>

<script setup>
    const route = useRoute()

    // DATA API
    const post = ref([])
    const imagePostHero = ref([])
    const imagePostMap = ref([])
    const imagePostOg = ref([])
    const videos = ref([])
    const imagesVideos = ref([]) 
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Detail čánku | Cestovatelský portál Frytol na cestách',
        description: 'Popis detailu článku',
        keywords: 'Jídlo, Tradiční jídlo, informace o jídle, plánuj cestu, cestovatelský portál, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Detail článku | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Popis detailu članku',
        ogUrl: `https://www.frytolnacestach.cz/jidlo/slug`,
        ogType: 'website',
    })
    let headLink = ref([
        { rel: 'canonical', href: headMeta.ogUrl }
    ])
    // DATA Meta - JSONld
    let headJsonld = reactive({
        "@context": "https://schema.org",
        "@type": "Article",
        "name": "",
        "image": "",
        "url": "",
        "description": "",
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
        const postResponse = await $fetch(`https://api.frytolnacestach.cz/api/post/${route.params.slug}`)
        const postData = JSON.parse(postResponse)
        post.value = postData || []

        if (post.value && post.value.length > 0) {
            // Image (post(hero))
            const imagePostHeroResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${post.value[0].id_image_hero}`)
            const imagePostHeroData = JSON.parse(imagePostHeroResponse)
            imagePostHero.value = imagePostHeroData || []

            // Image (post(map))
            const imagePostMapResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${post.value[0].id_image_map}`)
            const imagePostMapData = JSON.parse(imagePostMapResponse)
            imagePostMap.value = imagePostMapData || []

            // Image (post(og))
            const imagePostOgResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${post.value[0].id_image_og}`)
            const imagePostOgData = JSON.parse(imagePostOgResponse)
            imagePostOg.value = imagePostOgData || []

            // Videos
            const videosResponse = await $fetch(`https://api.frytolnacestach.cz/api/videos-id-city/${post.value[0].id_city}`)
            const videosData = JSON.parse(videosResponse)
            videos.value = videosData || []

            // Images (videos)
            if (this.videos && this.videos.length > 0) {
                const imagesVideosID = this.videos.map(video => video.id_image).filter(id => id !== null && id !== '');
                const responseImagesVideos = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosID.join(',')}`)
                imagesVideos.value = await responseImagesVideos.json() || []
            }

            // Meta
            headMeta.title = `${post.value[0].title ? post.value[0].title : 'Článek'} | Cestovatelský portál Frytol na cestách`
            headMeta.description = `${post.value[0].textOpener ? post.value[0].textOpener.replace(/<\/?[^>]+(>|$)/g, '').slice(0, post.value[0].textOpener.lastIndexOf(' ', 150)) : post.value[0].title ? post.value[0].title : 'Článek'}`
            if (post.value[0].seo_tags && post.value[0].seo_tags.length > 0) {
                const metaSeoTags = ", " + post.value[0].seo_tags.map(item => item.tag).join(", ")
                headMeta.keywords = (post.value[0].title ? post.value[0].title : '') + metaSeoTags + ', článek, cestování, svět, rady, cestovatelský portál'
            } else {
                headMeta.keywords = (post.value[0].title ? post.value[0].title : '') + ', článek, cestování, svět, rady, cestovatelský portál'
            }
            headMeta.ogImage = `${(imagePostOg.value[0] && imagePostOg.value.find(image => image.id === post.value[0].id_image_og)) ? 'https://image.frytolnacestach.cz/storage' + imagePostOg.value.find(image => image.id === post.value[0].id_image_og).source + imagePostOg.value.find(image => image.id === post.value[0].id_image_og).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
            headMeta.ogTitle = `${post.value[0].title ? post.value[0].title : 'Článek'} | Cestovatelský portál Frytol na cestách`
            headMeta.ogDescription = `${post.value[0].textOpener ? post.value[0].textOpener.replace(/<\/?[^>]+(>|$)/g, '').slice(0, post.value[0].textOpener.lastIndexOf(' ', 150)) : post.value[0].title ? post.value[0].title : 'Článek'}`
            headMeta.ogUrl = `https://www.frytolnacestach.cz/clanky/${post.value[0].slug}`
            headLink = [{ rel: 'canonical', href: headMeta.ogUrl }]
            // Script
            headJsonld.name = (post.value[0].title ? post.value[0].title : "")
            headJsonld.description = (post.value[0].text_author ? post.value[0].text_author.replace(/<\/?[^>]+(>|$)/g, '') : "")
            headJsonld.url = 'https://frytolnacestach.cz' + `/clanky/${post.value[0].slug}`
            headJsonld.image = (imagePostHero.value[0] && imagePostHero.value.find(image => image.id === post.value[0].id_image_hero)) ? 'https://image.frytolnacestach.cz/storage' + imagePostHero.value.find(image => image.id === post.value[0].id_image_hero).source + imagePostHero.value.find(image => image.id === post.value[0].id_image_hero).name + '.webp' : ''
        }               
    }
    await useAsyncData('dataAPI', () => loadData())

    // WATCH
    watchEffect(() => {
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
        useJsonld(() => headJsonld)
    })
</script>