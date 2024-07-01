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
                                <OrganismsHotInfoHero :data="oHotInfoHeroArray" styleCol=" -col2" v-if="place && place.length > 0" />
                            </div>
                            <!-- SECTION - hot info - END -->

                        </div>
                    </div>
                </section>

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -place-main-with-aside">
                            <div class="t-grid__section -main">

                                <!-- SECTION - information by ChatGPT -->
                                <section class="t-section mt-2 mb-4" v-if="place && place.length > 0 && place[0].information_chatgpt && !place[0].information_author?.length > 0">
                                    <div class="t-section__inner">
                                        <OrganismsInformationBlock :title="'O místě ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_chatgpt" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" styleThema=" -green" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - information by Author -->
                                <section class="t-section mt-2 mb-4" v-if="place && place.length > 0 && place[0].information_author?.length > 0">
                                    <div class="t-section__inner">
                                        <OrganismsInformationBlock :title="'O místě ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_author[0].text" :authorID="place[0].information_author[0].author_create" styleThema=" -green" />
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

                                <!-- SECTION - information duration -->
                                <section class="t-section" v-if="place && place.length > 0 && place[0].information_duration?.length > 0 && place[0].information_duration !== null">
                                    <div class="t-section__inner">
                                        <OrganismsInformationBox :data="place[0].information_duration" />
                                    </div>
                                </section>
                                <!-- SECTION - information duration END -->

                                <!-- SECTION - Place teaser -->
                                <section class="t-section my-2 -p0 print-section" v-if="place && place.length > 0 && placeCity && placeCity.length > 0">
                                    <div class="t-section__inner">
                                        <OrganismsPlaceTeaser :headline="'Místo ' + place[0].name + ' patří k městu ' + placeCity[0].name" :place="placeCity" :image="imageCity" type="mesto" />
                                    </div>
                                </section>
                                <!-- SECTION - Place teaser END -->

                                <!-- SECTION - Ubytování - information -->
                                <section class="t-section pt-1 mt-2" v-if="place && place.length > 0">
                                    <div class="t-section__inner">
                                        <OrganismsInformationBlock :title="'Ubytování v okolí ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="'Cena za konkrétní ubytování v okolí ' + (place[0].name ? place[0].name : '') + ' se může lišit v závislosti na vzdálenosti termínu, délce pobytu a počtu ubytovaných osob. Zde uvedené ceny jsou aktuální na dnešní noc a platí pro dvě osoby. Prostřednictvím služby Booking.com je zajištěno sprostředkování ubytování. Je však třeba poznamenat, že ceny se mohou měnit v závislosti na aktuální poptávce a nabídce. V případě zájmu o rezervaci je tedy vhodné sledovat vývoj cen a včas zajistit své ubytování za nejvýhodnějších podmínek.'" v-if="place && place.length > 0 && place[0].affiliate.length > 0 && place[0].affiliate.find(x => x.name === 'booking')?.value === true" />
                                        <OrganismsInformationBlock :title="'Ubytování v okolí ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="'Bohužel s cenou ubytování v okolí ' + (place[0].name ? place[0].name : '') + ' vám zatím moc neporadíme.'" v-else-if="place && place.length > 0 && place[0].affiliate.length > 0 && place[0].affiliate.find(x => x.name === 'booking')?.value === false" />
                                    </div>
                                </section>
                                <!-- SECTION - Ubytování - information END -->

                                <!-- SECTION - Ubytování -->
                                <section class="t-section -px-world py-2 hidden-print" v-if="place && place.length > 0 && place[0].affiliate.length > 0 && place[0].affiliate.find(x => x.name === 'booking')?.value === true">
                                    <div class="t-section__inner">
                                        <div v-for="coordinate in place[0].coordinates">
                                            <OrganismsAffilateBooking 
                                                :landmarkName="`${ place[0].name ? place[0].name : '' }`"
                                                :address="`${ place[0].name ? place[0].name : '' }`"
                                                :latitude=parseFloat(coordinate.latitude)
                                                :longitude= parseFloat(coordinate.longitude)
                                                :zoom=place[0].zoom[0].booking
                                            />
                                        </div>
                                    </div>
                                </section>
                                <!-- SECTION - Ubytování END -->

                                <!-- SECTION - Review -->
                                <OrganismsReviewItem :account="account" :IDplace="place[0].id" type="spot" v-if="place && place.length > 0 && place[0].id" />
                                <!-- SECTION - Review END -->

                                <!-- SECTION - Place teaser list -->
                                <OrganismsPlaceTeaserList :headline="'Jaké další místa vidět ve státě ' + placeState[0].name" :IDplace="placeState[0].id" :IDplaceShow="place[0].id" type="spots" typePage="state" typeShow="spot" styleGap=" mt-2 mb-4 pt-1" v-if="place && place.length > 0 && placeState && placeState.length > 0" />
                                <!-- SECTION - Place teaser list END -->

                            </div>
                            <div class="t-grid__section -aside-place-status">

                                <!-- SECTION - Visited button - sidebar -->
                                <section class="t-section -px-world my-1">
                                    <div class="t-section__inner">
                                        <OrganismsVisitedButton :account="account" :place="place[0].id" placeType="spot" v-if="place && place.length > 0 && place[0].id" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited button - sidebar - END -->

                            </div>
                            <div class="t-grid__section -aside-content">

                                <!-- SECTION - Events - sidebar -->
                                <OrganismsSidebarEvent :place="place[0].id" type="spot" v-if="place && place.length > 0 && place[0].id" />
                                <!-- SECTION - Events - sidebar - END -->

                            </div>
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

                <section class="t-section -p0 hidden-print">
                    <div class="t-section__inner">
                        <div class="t-grid -world-ful">
                            <div class="t-grid__section -content">

                                <!-- SECTION - videos -->
                                <section class="t-section -p0 -bg-green py-4" v-if="place && place.length > 0 && videos && videos.length !== 0">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Videa z místa" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <OrganismsVideoList :videos="videos" :images="imagesVideos" type="travel" styleThema=" -world" styleThemaLoading=" -green" styleAlign=" -p-left" />
                                        <OrganismsVideoList :videos="null" :images="null" styleThema=" -world" skeletonThema=" -skeleton-green" skeletonNumber="3" :skeleton=true v-if="isLoadingVideos" />
                                        <div class="flex flex-center my-2" v-if="!isLoadingVideos && !noMoreVideosItems">
                                            <span class="a-button-border -big -green" @click="loadMoreVideosItems">Načíst další videa</span>
                                        </div>
                                    </div>
                                </section>
                                <!-- SECTION - videos END -->

                                <!-- SECTION - articles -->
                                <section class="t-section -p0 -bg-green py-4" v-if="place && place.length > 0 && posts && posts.length !== 0">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Články z místa" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
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
    const placeContinent = ref([])
    const placeState = ref([])
    const placeCity = ref([])
    const imageCity = ref([])
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
            url: "/svet/kontinent",
            status: "link"
        },
        {
            id: 4,
            icon: true,
            type: "state",
            name: "Státy",
            url: "/svet/stat",
            status: "link"
        },
        {
            id: 5,
            icon: false,
            type: "state",
            name: "Stát",
            url: "/svet/stat",
            status: "link"
        },
        {
            id: 6,
            icon: true,
            type: "city",
            name: "Města",
            url: "/svet/mesto",
            status: "link"
        },
        {
            id: 7,
            icon: false,
            type: "city",
            name: "Město",
            url: "/svet/mesto",
            status: "link"
        },
        {
            id: 8,
            icon: true,
            type: "spot",
            name: "Místa",
            url: "/svet/misto",
            status: "link"
        },
        {
            id: 9,
            icon: false,
            type: "spot",
            name: "Místo",
            url: "/svet/misto",
            status: "span"
        }
    ]
    let oHotInfoHeroArray = [
        {
            id: 1,
            title: "Stát",
            name: "_NÁZEV STÁTU_",
            url: `_ODKAZ_`,
            type: "string",
        },
        {
            id: 2,
            title: "Nadmořská výška",
            name: "_NADMOŘSKÁ VÝŠKA_",
            type: "number",
            subfix: " m n. m."
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
        "elevation": {
            "@type": "QuantitativeValue",
            "value": "",
            "unitCode": "MTR"
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
        // PAGE - Spot detail
        // Place
        const placeResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-spot/${route.params.slug}`)
        const placeData = JSON.parse(placeResponse) || []
        place.value = placeData
        // Image
        if (place.value && place.value.length > 0 && place.value[0].id_image_hero && place.value[0].id_image_hero !== 0) {
            const imagePlaceResponse = await $fetch(`https://api.frytolnacestach.cz/api/image-id/${place.value[0].id_image_hero}`)
            const imagePlaceData = JSON.parse(imagePlaceResponse) || []
            imagePlace.value = imagePlaceData
        }
        
        if (place.value && place.value.length > 0 && place.value[0].id_state !== null) {
            // placeState
            const placeStateResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-state-id/${place.value[0].id_state}?showType=list`)
            const placeStateData = JSON.parse(placeStateResponse) || []
            placeState.value = placeStateData
        }

        if (place.value && place.value.length > 0 && placeState.value[0].id_continent !== null) {
            // PlaceContinent
            const placeContinentResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-continent-id/${placeState.value[0].id_continent}`)
            const placeContinentData = JSON.parse(placeContinentResponse) || []
            placeContinent.value = placeContinentData
        }


        if (place.value && place.value.length > 0) {
            // PlaceCity
            const placeCityResponse = await $fetch(`https://api.frytolnacestach.cz/api/places-city-id/${place.value[0].id_city}?showType=list`)
            const placeCityData = JSON.parse(placeCityResponse) || []
            placeCity.value = placeCityData

            // Images
            if (placeCity.value && placeCity.value.length > 0 && placeCity.value[0].id_image_cover !== null ) {
                const imageCityResponse = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesplaceCityID.join(',')}`)
                const imageCityData = JSON.parse(imageCityResponse) || []
                imageCity.value = imageCityData
            }
        }

        // HEAD
        if (place.value && place.value.length > 0) {
            // Meta
            headMeta.title = `${(place && place.value.length > 0 && place.value[0].name) ? place.value[0].name : 'Místo'} | Cestovatelský portál Frytol na cestách`
            headMeta.description = (place.value[0].information_author?.length > 0 ? place.value[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place.value[0].information_author[0].text.lastIndexOf(' ', 160)) : (place && place.value.length > 0 && place.value[0].information_chatgpt) ? place.value[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place.value[0].information_chatgpt.lastIndexOf(' ', 160)) : (place && place.value.length > 0 && place.value[0].name) ? place.value[0].name : 'Místo')
            if (place.value[0].seo_tags && place.value[0].seo_tags.length > 0) {
                const metaSeoTags = ", " + place.value[0].seo_tags.map(item => item.tag).join(", ")
                headMeta.keywords = (place.value[0].name ? place.value[0].name : '') + metaSeoTags + ', místo, cestování, svět, cestovatelský portál, jaké státy tu jsou, plánování cesty, dovolená'
            } else {
                headMeta.keywords = (place.value[0].name ? place.value[0].name : '') + ', místo, cestování, svět, cestovatelský portál, jaké státy tu jsou, plánování cesty, dovolená'
            }
            headMeta.ogImage = `${place.value[0].id_image_hero ? ('https://image.frytolnacestach.cz/storage/' + imagePlace.find(image => image.id === place.value[0].id_image_hero).source + imagePlace.find(image => image.id === place.value[0].id_image_hero).name + '.jpg') : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
            headMeta.ogTitle = `${(place && place.value.length > 0 && place.value[0].name) ? place.value[0].name : 'Místo'} | Cestovatelský portál Frytol na cestách`
            headMeta.ogDescription = (place.value[0].information_author?.length > 0 ? place.value[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place.value[0].information_author[0].text.lastIndexOf(' ', 160)) : (place && place.value.length > 0 && place.value[0].information_chatgpt) ? place.value[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place.value[0].information_chatgpt.lastIndexOf(' ', 160)) : (place && place.value.length > 0 && place.value[0].name) ? place.value[0].name : 'Místo')
            headMeta.ogUrl = `https://www.frytolnacestach.cz/svet/misto/${place.value[0].slug}`
            headLink = [{ rel: 'canonical', href: headMeta.ogUrl }]
            // Script
            headJsonld.name = (place.value[0].name ? place.value[0].name : "")
            headJsonld.description = (place.value[0].information_author?.length > 0 ? place.value[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '') : (place.value[0].information_chatgpt ? place.value[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '') : ""))
            headJsonld.image = ((imagePlace && imagePlace.length > 0 && imagePlace[0].id) ? ("https://image.frytolnacestach.cz/storage/world/spots/" + imagePlace[0].name + ".webp") : "" )
            headJsonld.elevation.value = (place.value[0].altitude ? place.value[0].altitude : "")
        }
    }
    await useAsyncData('dataAPI', () => loadData())

    // LOAD DATA - Posts
    const loadPosts = async () => {
        //start loading
        isLoadingPosts = true

        //load posts
        if (place.value && place.value.length > 0) {
            const postsResponse = await $fetch(`https://api.frytolnacestach.cz/api/posts-id-spot/${place.value[0].id}?showType=list&page=${postsPage}&items=${postsPerPage}`)
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
            const videosResponse = await $fetch(`https://api.frytolnacestach.cz/api/videos-id-spot/${place.value[0].id}?showType=list&page=${videosPage}&items=${videosPerPage}`)
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
        if (isLoadingPosts || noMorePostsItems) {
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
            mNavBreadcrumbsPlaceArray[8].name = newValue[0].name
            mNavBreadcrumbsPlaceArray[8].url = "/svet/misto/" + newValue[0].slug
            oHotInfoHeroArray[1].name = newValue[0].altitude
            loadVideos()
            loadPosts()
        }
    })

    watch(placeContinent, (newValue, oldValue) => {
        if (newValue && newValue.length > 0) {
            mNavBreadcrumbsPlaceArray[2].name = newValue[0].name
            mNavBreadcrumbsPlaceArray[2].url = "/svet/kontinent/" + newValue[0].slug
        }
    })

    watch(placeState, (newValue, oldValue) => {
        if (newValue && newValue.length > 0) {
            mNavBreadcrumbsPlaceArray[4].name = newValue[0].name
            mNavBreadcrumbsPlaceArray[4].url = "/svet/stat/" + newValue[0].slug
            oHotInfoHeroArray[0].name = newValue[0].name
            oHotInfoHeroArray[0].url = "/svet/stat/" + newValue[0].slug
        }
    })

    watch(placeCity, (newValue, oldValue) => {
        if (newValue && newValue.length > 0) {
            mNavBreadcrumbsPlaceArray[6].name = newValue[0].name
            mNavBreadcrumbsPlaceArray[6].url = "/svet/mesto/" + newValue[0].slug
        }
    })
</script>