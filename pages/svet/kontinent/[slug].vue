<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <MoleculesNavBreadcrumbsPlace :links="mNavBreadcrumbsPlaceArray" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <!-- SECTION - Buttons -->
                <section class="t-section -px-world mt-1 -p0 hidden-print hidden-desktop">
                    <div class="t-section__inner">
                        <OrganismsSwitchHero :show-hero.sync="showHero" />
                    </div>
                </section>
                <!-- SECTION - Buttons END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-hero">

                            <!-- SECTION - hero -->
                            <div :class="'t-grid__section -hero-place' + (!showHero ? ' hidden-mobile' : '')">
                                <OrganismsHeroPlace :title="place[0].name" :idImageHero="place[0].id_image_hero" :images="imagePlace" v-if="place && place.length > 0" />
                            </div>
                            <!-- SECTION - hero END -->

                            <!-- SECTION - map -->
                            <div :class="'t-grid__section -map' + (showHero ? ' hidden-mobile' : '')">
                                <OrganismsMapGoogle :place="place" v-if="place && place.length > 0 && (place[0].coordinates.length > 0 && place[0].zoom.length > 0)" />
                            </div>
                            <!-- SECTION - map - END -->

                            <!-- SECTION - hot info -->
                            <div class="t-grid__section -hot-info-hero">
                                <OrganismsHotInfoHero :data="oHotInfoHeroArray" styleCol=" -col4" v-if="place && place.length > 0" />
                            </div>
                            <!-- SECTION - hot info - END -->

                        </div>
                    </div>
                </section>

                <!-- SECTION -->
                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -place-main-with-aside">
                            <div class="t-grid__section -main">

                                <!-- SECTION - information by ChatGPT -->
                                <section class="t-section mt-2 mb-4" v-if="place && place.length > 0 && place[0].information_chatgpt && !place[0].information_author?.length > 0">
                                    <div class="t-section__inner">
                                        <OrganismsInformationBlock :title="'O kontinentu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_chatgpt" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" styleThema=" -green" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - information by Author -->
                                <section class="t-section mt-2 mb-4" v-if="place && place.length > 0 && place[0].information_author?.length > 0">
                                    <div class="t-section__inner">
                                        <OrganismsInformationBlock :title="'O kontinentu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_author[0].text" :authorID="place[0].information_author[0].author_create" styleThema=" -green" />
                                    </div>
                                </section>
                                <!-- SECTION - information by Author END -->

                                <!-- SECTION - ad-google - wysiwyg -->
                                <section class="t-section  my-2 -p0 print-section">
                                    <div class="t-section__inner">
                                        <OrganismsAdGoogleWysiwyg styleThema=" -green" />
                                    </div>
                                </section>
                                <!-- SECTION - ad-google - wysiwyg - END -->

                                <!-- SECTION - Account banner big - sidebar -->
                                <section class="t-section -px-world my-1" v-if="account && account.length === 0">
                                    <div class="t-section__inner">
                                        <OrganismsAccountBannerBig :account="account" />
                                    </div>
                                </section>
                                <!-- SECTION - Account banner big - sidebar END -->

                                <!-- SECTION - Review -->
                                <OrganismsReviewItem :account="account" :IDplace="place[0].id" type="continent" v-if="place && place.length > 0 && place[0].id" />
                                <!-- SECTION - Review END -->

                            </div>
                            <div class="t-grid__section -aside-place-status">

                                <!-- SECTION - Visited button - sidebar -->
                                <section class="t-section -px-world my-1" v-if="place && place.length > 0 && place[0].id">
                                    <div class="t-section__inner">
                                        <OrganismsVisitedButton :account="account" :place="place[0].id" placeType="continent" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited button - sidebar - END -->

                            </div>
                            <div class="t-grid__section -aside-content"></div>
                            <div class="t-grid__section -aside-ad">

                                <!-- SECTION - ad-google - sidebar -->
                                <section class="t-section -px-world mt-4 mb-2">
                                    <div class="t-section__inner">
                                        <OrganismsAdGoogleSidebar styleThema=" -green" />
                                    </div>
                                </section>
                                <!-- SECTION - ad-google - sidebar - END -->

                            </div>
                        </div>
                    </div>
                </section>

                <section class="t-section -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-ful">
                            <div class="t-grid__section -content">

                                <!-- SECTION - státy -->
                                <section class="t-section -p0 -py4 -px-world-big -h-scroll" v-if="place && place.length > 0 && placesStates && placesStates.length > 0">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Všechny státy na kontinentu" :titleValue="place[0].name" styleAlign=" -left" styleThema=" -world" styleGap=" -px-0 mb-2" />
                                        <OrganismsCoverPlaceDetail :places="placesStates" :images="imagesStates" type="stat" />
                                    </div>
                                </section>
                                <!-- SECTION - státy - END -->

                                <!-- SECTION - videos -->
                                <section class="t-section -p0 -bg-green py-4 hidden-print" v-if="place && place.length > 0 && videos && videos.length !== 0">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Videa z kontinentu" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <OrganismsVideoList :videos="videos" :images="imagesVideos" type="travel" styleThema=" -world" styleThemaLoading=" -green" styleAlign=" -p-left" />
                                        <OrganismsVideoList :videos="null" :images="null" styleThema=" -world" skeletonThema=" -skeleton-green" skeletonNumber="3" :skeleton=true v-if="isLoadingVideos" />
                                        <div class="flex flex-center my-2" v-if="!isLoadingVideos && !noMoreVideosItems">
                                            <span class="a-button-border -big -green" @click="loadMoreVideosItems">Načíst další videa</span>
                                        </div>
                                    </div>
                                </section>
                                <!-- SECTION - videos END -->

                                <!-- SECTION - articles -->
                                <section class="t-section -p0 -bg-green py-4 hidden-print" v-if="place && place.length > 0 && posts && posts.length !== 0">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Články z kontinetu" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <OrganismsArticleList :posts="posts" :images="imagesPosts" styleThema=" -world" styleThemaLoading=" -green" styleAlign=" -p-left" />
                                        <OrganismsArticleList :posts="null" :images="null" skeletonThema=" -skeleton-green" skeletonNumber="3" :skeleton=true v-if="isLoadingPosts" />
                                        <div class="flex flex-center my-2" v-if="!isLoadingPosts && !noMorePostsItems">
                                            <span class="a-button-border -big -green" @click="loadMorePostsItems">Načíst další články</span>
                                        </div>
                                    </div>
                                </section>
                                <!-- SECTION - articles END -->

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </NuxtLayout>
</template>

<script setup>
    const route = useRoute()

    // DATA
    let account = useAccountData().accountData
    let isLoadingVideos = false
    let noMoreVideosItems = false
    let videosPage = 1
    let videosPerPage = 20
    let isLoadingPosts = false
    let noMorePostsItems = false
    let postsPage = 1
    let postsPerPage = 20
    let showHero = true
    // DATA API
    const place = ref([])
    const imagePlace = ref([])
    const placesStates = ref([])
    const imagesStates = ref([])
    const videos = ref([])
    const imagesVideos = ref([])
    const posts = ref([])
    const imagesPosts = ref([])
    let mNavBreadcrumbsPlaceArray = [
        {
            id: 1,
            icon: true,
            type: "world",
            name: "Svět",
            url: "/svet",
            status: "link"
        },
        {
            id: 2,
            icon: true,
            type: "continent",
            name: "Kontinenty",
            url: "/svet/kontinent",
            status: "link"
        },
        {
            id: 3,
            icon: false,
            type: "continent",
            name: "Kontinent",
            status: "span"
        }
    ]
    let oHotInfoHeroArray = [
        {
            id: 1,
            title: "POČET STÁTŮ",
            name: "_POČET STÁTŮ_",
            url: `_ODKAZ_`,
            type: "number",
        },
        {
            id: 2,
            title: "Rozloha",
            name: "_ROZLOHA_",
            type: "number",
            subfix: "km²"
        },
        {
            id: 3,
            title: "Počet obyvatel",
            name: "_POČET OBYVATEL_",
            type: "number"
        },
        {
            id: 4,
            title: "Hustota obyvatel",
            name: "_HUSTOTA OBYVATEL_",
            type: "number",
            subfix: "/km²"
        }
    ]
    // DATA Meta - head
    let headMeta = reactive({
        title: '',
        description: '',
        keywords: '',
        ogImage: '',
        ogTitle: '',
        ogDescription: '',
        ogUrl: '',
        ogType: 'website',
    })
    let headLink = ref([
        { rel: 'canonical', href: headMeta.ogUrl }
    ])
    // DATA Meta - JSONld
    let headJsonld = reactive({
        "@context": "https://schema.org",
        "@type": "Place",
        "name": "",
        "description": "",
        "image": "",
        "area": {
            "@type": "QuantitativeValue",
            "value": "",
            "comment": "Rozloha v km²"
        },
        "population": {
            "@type": "QuantitativeValue",
            "value": ""
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
        // PAGE - Continent detail
        // Place
        const placeResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-continent/${route.params.slug}`)
        const placeData = JSON.parse(placeResponse) || []
        place.value = placeData
        // Image
        if (place.value && place.value.length > 0 && place.value[0].id_image_hero && place.value[0].id_image_hero !== 0) {
            const imagePlaceResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${place.value[0].id_image_hero}`)
            const imagePlaceData = JSON.parse(imagePlaceResponse) || []
            imagePlace.value = imagePlaceData
        }
        
        if (place.value && place.value.length > 0) {
            // placesStates
            const placesStatesResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-states-continent/${place.value[0].id}?showType=list`)
            const placesStatesData = JSON.parse(placesStatesResponse) || []
            placesStates.value = placesStates.value.concat(placesStatesData)

            // Images
            if (placesStatesData && placesStatesData.length > 0) {
                const imagesPlacesStatesID = placesStatesData.map(placesState => placesState.id_image_cover).filter(id => id !== null && id !== '')
                if (imagesPlacesStatesID) {
                    const imagesStatesResponse = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesID.join(',')}`)
                    const imagesStatesData = JSON.parse(imagesStatesResponse) || []
                    imagesStates.value = imagesStates.value.concat(imagesStatesData)
                }
            }
        }

        // HEAD
        if (place.value && place.value.length > 0) {
            // Meta
            headMeta.title = `${place.value[0].name ? place.value[0].name : 'Kontinent'} | Cestovatelský portál Frytol na cestách`
            headMeta.description = (place.value[0].information_author?.length > 0 ? place.value[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place.value[0].information_author[0].text.lastIndexOf(' ', 160)) : place.value[0].information_chatgpt ? place.value[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place.value[0].information_chatgpt.lastIndexOf(' ', 160)) : place.value[0].name ? place.value[0].name : 'Kontinent')
            if (place.value[0].seo_tags && place.value[0].seo_tags.length > 0) {
                const metaSeoTags = ", " + place.value[0].seo_tags.map(item => item.tag).join(", ")
                headMeta.keywords = ((place.value[0].name) ? place.value[0].name : '') + metaSeoTags + ', kontinent, cestování, svět, cestovatelský portál, jaké státy tu jsou, plánování cesty, dovolená'
            } else {
                headMeta.keywords = ((place.value[0].name) ? place.value[0].name : '') + ', kontinent, cestování, svět, cestovatelský portál, jaké státy tu jsou, plánování cesty, dovolená'
            }
            headMeta.ogImage = `${place.value[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + imagePlace.find(image => image.id === place.value[0].id_image_hero).source + imagePlace.find(image => image.id === place.value[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
            headMeta.ogTitle = `${place.value[0].name ? place.value[0].name : 'Kontinent'} | Cestovatelský portál Frytol na cestách`
            headMeta.ogDescription = (place.value[0].information_author?.length > 0 ? place.value[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place.value[0].information_author[0].text.lastIndexOf(' ', 160)) : place.value[0].information_chatgpt ? place.value[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place.value[0].information_chatgpt.lastIndexOf(' ', 160)) : place.value[0].name ? place.value[0].name : 'Kontinent')
            headMeta.ogUrl = `https://www.frytolnacestach.cz/svet/kontinent/${place.value[0].slug}`
            headLink = [{ rel: 'canonical', href: headMeta.ogUrl }]
            // Script
            headJsonld.name = (place.value[0].name ? place.value[0].name : "")
            headJsonld.description = (place.value[0].information_author?.length > 0 ? place.value[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '') : (place.value[0].information_chatgpt ? place.value[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '') : ""))
            headJsonld.image = ((imagePlace.length > 0 && imagePlace[0].id) ? ("https://image.frytolnacestach.cz/storage/world/continents/" + imagePlace[0].name + ".webp") : "" )
            headJsonld.area.value = (place.value[0].area ? place.value[0].area : "")
            headJsonld.population.value = (place.value[0].population ? place.value[0].population : "")
        }
    }
    await useAsyncData('dataAPI', () => loadData())

    // LOAD DATA - Posts
    const loadPosts = async () => {
        //start loading
        isLoadingPosts = true

        //load posts
        if (place.value && place.value.length > 0) {
            const postsResponse = await $fetch(`https://api.frytolnacestach.cz/api/posts-id-continent/${place.value[0].id}?showType=list&page=${postsPage}&items=${postsPerPage}`)
            const postsData = JSON.parse(postsResponse) || []
            posts.value = posts.value.concat(postsData)

            //end loading
            isLoadingPosts = false

            //load images
            if (postsData && postsData.length > 0) {
                const imagesPostsIDS = postsData.map(posts => posts.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesPostsIDS.length > 0) {
                    const imagesPostsResponse = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPostsIDS.join(',')}`)
                    const imagesPostsData = JSON.parse(imagesPostsResponse) || []
                    imagesPosts.value = imagesPosts.value.concat(imagesPostsData)
                }
            }

            //no more items?
            if (postsData.length === 0 || postsData.length < postsPerPage) {
                noMorePostsItems = true
            }
        }
    }
    await useAsyncData('dataAPI', () => loadPosts())

    // LOAD DATA - Videos
    const loadVideos = async () => {
        //start loading
        isLoadingVideos = true

        //load videos
        if (place.value && place.value.length > 0) {
            const videosResponse = await $fetch(`https://api.frytolnacestach.cz/api/videos-id-continent/${place.value[0].id}?showType=list&page=${videosPage}&items=${videosPerPage}`)
            const videosData = JSON.parse(videosResponse) || []
            videos.value = videos.value.concat(videosData)

            //end loading
            isLoadingVideos = false

            //load images
            if (videosData && videosData.length > 0) {
                const imagesVideosIDS = videosData.map(videos => videos.id_image).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesVideosIDS.length > 0) {
                    const imagesVideosResponse = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosIDS.join(',')}`)
                    const imagesVideosData = JSON.parse(imagesVideosResponse) || []
                    imagesVideos.value = imagesVideos.value.concat(imagesVideosData)
                }
            }

            //no more items?
            if (videosData.length === 0 || videosData.length < videosPerPage) {
                noMoreVideosItems = true
            }
        }
    }
    await useAsyncData('dataAPI', () => loadVideos())

    // OTHER
    const loadMoreVideosItems = () => {
        if (isLoadingVideos || noMoreVideosItems) {
            return
        }
        videosPage++
        loadVideos()
    }

    const loadMorePostsItems = () => {
        if (isLoadingVideos || noMoreVideosItems) {
            return
        }
        postsPage++
        loadPosts()
    }

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

    watch(place, (newValue, oldValue) => {
        if (newValue && newValue.length > 0) {
            mNavBreadcrumbsPlaceArray[2].name = newValue[0].name
            oHotInfoHeroArray[0].name = newValue[0].number_states
            oHotInfoHeroArray[0].url = `/svet/stat?filterIDcontinent=${newValue[0].id}`
            oHotInfoHeroArray[1].name = newValue[0].area
            oHotInfoHeroArray[2].name = newValue[0].population
            oHotInfoHeroArray[3].name = newValue[0].population_density
            loadVideos()
            loadPosts()
        }
    })
</script>