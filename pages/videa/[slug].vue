<template>
    <NuxtLayout name="default">
        <main class="t-main -gray -pt-menu" role="main">
            <div class="t-main__content">
                
                <!-- SECTION - Hero video -->
                <section class="t-section -p0">
                    <div class="t-section__inner">
                        <OrganismsHeroVideo :image="imageVideo" :title="video[0].title" v-if="video && video.length > 0 && video[0].title" />
                    </div>
                </section>
                <!-- SECTION - Hero video END -->

                <div class="t-col2">
                    <div class="t-col2__content mb-2">

                        <!-- SECTION - perex -->
                        <section class="t-section py-2" v-if="video && video.length > 0 && video[0].perex">
                            <div class="t-section__inner">
                                <div class="o-information-block">
                                    <div class="o-information-block__outer">
                                        <div class="o-information-block__inner">
                                            <div class="o-information-block__perex">
                                                <div class="o-information-block_wysiwyg" v-html="video[0].perex"></div>
                                                <div class="o-information-block__author">
                                                    <MoleculesAuthor :author="video[0].id_user" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- SECTION - perex END -->

                        <!-- SECTION - youtube -->
                        <section class="t-section py-2 hidden-print" v-if="video && video.length > 0 && video[0].url">
                            <div class="t-section__inner">
                                <OrganismsYoutube :url="video[0].url" />
                            </div>
                        </section>
                        <!-- SECTION - youtube END -->

                    </div>
                    <div class="t-col2__sidebar my-2">

                        <!-- SECTION - author - sidebar -->
                        <section class="t-section -px-world mb-2 -p0" v-if="video && video.length > 0 && video[0].id_user">
                            <div class="t-section__inner">
                                <OrganismsAuthorSidebar :author="video[0].id_user"/>
                            </div>
                        </section>
                        <!-- SECTION - author - sidebar - END -->

                        <!-- SECTION - ad-google - sidebar -->
                        <section class="t-section -px-world mt-4 mb-2">
                            <div class="t-section__inner">
                                <OrganismsAdGoogleSidebar styleThema=" -gray" />
                            </div>
                        </section>
                        <!-- SECTION - ad-google - sidebar - END -->
                        
                    </div>
                </div>
                <div class="t-layout-full" v-if="(video && video.length > 0 && video[0].id_continent) || (video && video.length > 0 && video[0].id_state) || (video && video.length > 0 && video[0].id_region) || (video && video.length > 0 && video[0].id_city) || (video && video.length > 0 && video[0].id_spot)">

                    <!-- SECTION - place -->
                    <section class="t-section -p0 pt-2 pb-1 print-section">
                        <div class="t-section__inner">
                            <MoleculesHeadline title="Více informací o místě" styleAlign=" -p-left" styleGap=" mx-2 mb-2" />
                            <div class="flex mx-1">
                                <OrganismsPlaceBlock :placeID="video[0].id_continent" type="kontinent" v-if="video[0].id_continent" />
                                <OrganismsPlaceBlock :placeID="video[0].id_state" type="stat" v-if="video[0].id_state" />
                                <OrganismsPlaceBlock :placeID="video[0].id_region" type="region" v-if="video[0].id_region" />
                                <OrganismsPlaceBlock :placeID="video[0].id_city" type="mesto" v-if="video[0].id_city" />
                                <OrganismsPlaceBlock :placeID="video[0].id_spot" type="misto" v-if="video[0].id_spot" />
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - place END -->

                </div>
            </div>
        </main>
    </NuxtLayout>
</template>

<script setup>
    const route = useRoute()

    // DATA API
    const video = ref([])
    const imageVideo = ref([]) 
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Detail videa | Cestovatelský portál Frytol na cestách',
        description: 'Popis detailu videa',
        keywords: 'cestovatelské video, cestování, svět, cestovatelský portál',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Detail videa | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Popis detailu videa',
        ogUrl: `https://www.frytolnacestach.cz/jidlo/slug`,
        ogType: 'website',
    })
    let headLink = ref([
        { rel: 'canonical', href: headMeta.ogUrl }
    ])
    // DATA Meta - JSONld
    let headJsonld = reactive({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "",
        "thumbnailUrl": "",
        "embedUrl": "",
        "url": "",
        "description": "",
        "uploadDate": ""
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
        // Video
        const videoResponse = await $fetch(`https://api.frytolnacestach.cz/api/video/${route.params.slug}`)
        const videoData = JSON.parse(videoResponse)
        video.value = videoData || []

        if (video.value && video.value.length > 0) {
            // Image (video)
            const imageVideoResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${video.value[0].id_image}`)
            const imageVideoData = JSON.parse(imageVideoResponse)
            imageVideo.value = imageVideoData || []

            // Meta
            headMeta.title = `${video.value[0].title ? video.value[0].title : 'Video'} | Cestovatelský portál Frytol na cestách`
            headMeta.description = `${video.value[0].perex ? video.value[0].perex.replace(/<\/?[^>]+(>|$)/g, '').slice(0, video.value[0].perex.lastIndexOf(' ', 150)) : video.value[0].title ? video.value[0].title : 'Video'}`
            if (video.value[0].seo_tags && video.value[0].seo_tags.length > 0) {
                const metaSeoTags = ", " + video.value[0].seo_tags.map(item => item.tag).join(", ")
                headMeta.keywords = (video.value[0].title ? video.value[0].title : '') + metaSeoTags + ', cestovatelské video, cestování, svět, cestovatelský portál'
            } else {
                headMeta.keywords = (video.value[0].title ? video.value[0].title : '') + ', cestovatelské video, cestování, svět, cestovatelský portál'
            }
            headMeta.ogImage = `${(imageVideo.value && imageVideo.value.length > 0 && imageVideo.value[0].id && video.value[0].id_image) ? 'https://image.frytolnacestach.cz/storage' + imageVideo.value.find(image => image.id === video.value[0].id_image).source + imageVideo.value.find(image => image.id === video.value[0].id_image).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
            headMeta.ogTitle = `${video.value[0].title ? video.value[0].title : 'Video'} | Cestovatelský portál Frytol na cestách`
            headMeta.ogDescription = `${video.value[0].perex ? video.value[0].perex.replace(/<\/?[^>]+(>|$)/g, '').slice(0, video.value[0].perex.lastIndexOf(' ', 150)) : video.value[0].title ? video.value[0].title : 'Video'}`
            headMeta.ogUrl = `https://www.frytolnacestach.cz/videa/${video.value[0].slug}`
            headLink = [{ rel: 'canonical', href: headMeta.ogUrl }]
            // Script
            headJsonld.name = (video.value[0].title ? video.value[0].title : '')
            headJsonld.description = (video.value[0].perex ? video.value[0].perex.replace(/<\/?[^>]+(>|$)/g, '') : "")
            headJsonld.thumbnailUrl = (imageVideo.value && imageVideo.value.length > 0 && imageVideo.value[0].id && video.value[0].id_image) ? 'https://image.frytolnacestach.cz/storage' + imageVideo.value.find(image => image.id === video.value[0].id_image).source + imageVideo.value.find(image => image.id === video.value[0].id_image).name + '.webp' : ''
            headJsonld.embedUrl = (video.value[0].url ? video.value[0].url : '')
            headJsonld.url = 'https://frytolnacestach.cz' + `/videa/${video.value[0].slug}`
            headJsonld.uploadDate = (video.value[0].created_at ? video.value[0].created_at : '')
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