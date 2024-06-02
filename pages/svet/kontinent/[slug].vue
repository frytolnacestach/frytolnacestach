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

<script>
    export default defineComponent({
        name: 'SvetKontinentSlugPage',

        data() {
            return {
                account: useAccountData().accountData,
                // Data from API
                place:this.place,
                imagePlace: this.imagePlace,
                placesStates: this.placesStates,
                imagesStates: this.imagesStates,
                videos: this.videos,
                imagesVideos: this.imagesVideos,
                posts: this.posts,
                imagesPosts: this.imagesPosts,
                // Loading videos
                videosPage: 1,
                videosPerPage: 9,
                isLoadingVideos: false,
                noMoreVideosItems: false,
                // Loading posts
                postsPage: 1,
                postsPerPage: 9,
                isLoadingPosts: false,
                noMorePostsItems: false,
                // Other
                showHero: true,
                mNavBreadcrumbsPlaceArray: [
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
                        name: (this.place && this.place.length > 0) ? this.place[0].name : "Kontinent",
                        url: (this.place && this.place.length > 0) ? ("/svet/kontinent/" + this.place[0].slug) : "/svet/kontinent",
                        status: "span"
                    }
                ],
                oHotInfoHeroArray: [
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
            }
        },

        setup() {
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

            return {
                headMeta,
                headLink,
                headJsonld
            }
        },

        methods: {
            async fetchData() {
                const route = useRoute()

                // PAGE - Spot detail
                // Place
                const responsePlace = await fetch(`https://api.frytolnacestach.cz/api/places-continent/${route.params.slug}`)
                this.place = await responsePlace.json()
                // Image
                if (this.place && this.place.length > 0) {
                    const responseImagePlace = this.place[0].id_image_hero && this.place[0].id_image_hero !== 0 ? await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.place[0].id_image_hero}`) : []
                    this.imagePlace = await responseImagePlace.json()
                }
                // PlaceState
                if (this.place && this.place.length > 0) {
                    const responsePlaceState = await fetch(`https://api.frytolnacestach.cz/api/places-state-id/${this.place[0].id_state}`)
                    this.placeState = await responsePlaceState.json()
                }
                // Images
                if (this.place && this.place.length > 0 && this.place[0].id_state !== null && this.placeState[0] && this.placeState[0].id_image_cover !== null ) {
                    const responseImageState = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.placeState[0].id_image_cover}`)
                    this.imageState = await responseImageState.json()
                }

                // HEAD
                if (this.place && this.place.length > 0) {
                    // Meta
                    this.headMeta.title = `${this.place[0].name ? this.place[0].name : 'Kontinent'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.description = (this.place[0].information_author?.length > 0 ? this.place[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_author[0].text.lastIndexOf(' ', 160)) : this.place[0].information_chatgpt ? this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 160)) : this.place[0].name ? this.place[0].name : 'Kontinent')
                    if (this.place[0].seo_tags && this.place[0].seo_tags.length > 0) {
                        const metaSeoTags = ", " + this.place[0].seo_tags.map(item => item.tag).join(", ")
                        this.headMeta.keywords = ((this.place[0].name) ? this.place[0].name : '') + metaSeoTags + ', kontinent, cestování, svět, cestovatelský portál, jaké státy tu jsou, plánování cesty, dovolená'
                    } else {
                        this.headMeta.keywords = ((this.place[0].name) ? this.place[0].name : '') + ', kontinent, cestování, svět, cestovatelský portál, jaké státy tu jsou, plánování cesty, dovolená'
                    }
                    this.headMeta.ogImage = `${this.place[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`
                    this.headMeta.ogTitle = `${this.place[0].name ? this.place[0].name : 'Kontinent'} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.ogDescription = (this.place[0].information_author?.length > 0 ? this.place[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_author[0].text.lastIndexOf(' ', 160)) : this.place[0].information_chatgpt ? this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 160)) : this.place[0].name ? this.place[0].name : 'Kontinent')
                    this.headMeta.ogUrl = `https://www.frytolnacestach.cz/svet/kontinent/${this.place[0].slug}`
                    this.headLink = [{ rel: 'canonical', href: this.headMeta.ogUrl }]
                    // Script
                    this.headJsonld.name = (this.place[0].name ? this.place[0].name : "")
                    this.headJsonld.description = (this.place[0].information_author?.length > 0 ? this.place[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '') : (this.place[0].information_chatgpt ? this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '') : ""))
                    this.headJsonld.image = ((imagePlace.length > 0 && this.imagePlace[0].id) ? ("https://image.frytolnacestach.cz/storage/world/continents/" + this.imagePlace[0].name + ".webp") : "" )
                    this.headJsonld.area.value = (this.place[0].area ? this.place[0].area : "")
                    this.headJsonld.population.value = (this.place[0].population ? this.place[0].population : "")
                }
            },

            async loadPosts() {
                //start loading
                this.isLoadingPosts = true

                // Variable
                let postsResponse

                //load posts
                if (this.place && this.place.length > 0) {
                    const responsePosts = await fetch(`https://api.frytolnacestach.cz/api/posts-id-continent/${this.place[0].id}?showType=list&page=${this.postsPage}&items=${this.postsPerPage}`)
                    this.postsData = await responsePosts.json()
                }

                //load images
                if (this.postsData[0]) {
                    const imagesPostsIDS = postsData.map(posts => posts.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                    if (imagesPostsIDS.length > 0) {
                        const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPostsIDS.join(',')}`)
                        const imagesData = await responseImages.json()
                        this.imagesPosts = this.imagesPosts.concat(imagesData)
                    }
                    // add to postsData to posts
                    this.posts = this.posts.concat(postsData)
                }

                //no more items?
                if (postsData.length === 0 || postsData.length < this.postsPerPage) {
                    this.noMorePostsItems = true
                }

                //end loading
                this.isLoadingPosts = false
            },

            async loadVideos() {
                //start loading
                this.isLoadingVideos = true

                //load videos
                if (this.place && this.place.length > 0) {
                    const responseVideo = await fetch(`https://api.frytolnacestach.cz/api/videos-id-continent/${this.place[0].id}?showType=list&page=${this.videosPage}&items=${this.videosPerPage}`)
                    this.videosData = await responseVideo.json()
                }

                //load images
                if (this.videosData[0]) {
                    const imagesVideosIDS = videosData.map(videos => videos.id_image).filter(id => id !== undefined && id !== null && id !== '')
                    if (imagesVideosIDS.length > 0) {
                        const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosIDS.join(',')}`)
                        const imagesData = await responseImages.json()
                        this.imagesVideos = this.imagesVideos.concat(imagesData)
                    }
                    // add to videosData to videos
                    this.videos = this.videos.concat(videosData)
                }

                //no more items?
                if (videosData.length === 0 || videosData.length < this.videosPerPage) {
                    this.noMoreVideosItems = true
                }

                //end loading
                this.isLoadingVideos = false
            },

            loadMoreVideosItems() {
                //no further loading can occur while loading
                if (this.isLoadingVideos || this.noMoreVideosItems) {
                    return
                }
                // loading more items
                this.videosPage++
                this.loadVideos()
            },

            loadMorePostsItems() {
                //no further loading can occur while loading
                if (this.isLoadingPosts || this.noMorePostsItems) {
                    return
                }
                // loading more items
                this.postsPage++
                this.loadPosts()
            }
        },

        mounted() {
            // GET Data
            this.fetchData()

            if (this.place && this.place.length > 0) {
                this.loadVideos()
                this.loadPosts()
            }
        },

        //Data for mNavBreadcrumbsPlaceArray 
        //continent
        /*this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
            if (item.id === 3) {
                item.name = this.place[0].name
                item.url = "/svet/kontinent/" + this.place[0].slug
            }
            return item
        })*/

        //Data for oHotInfoHero
        /*this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
            if (item.id === 1) {
                item.name = this.place[0].number_states
                item.url = `/svet/stat?filterIDcontinent=${this.place[0].id}`
            }
            return item
        })
        this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
            if (item.id === 2) {
                item.name = this.place[0].area
            }
            return item
        })
        this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
            if (item.id === 3) {
                item.name = this.place[0].population
            }
            return item
        })
        this.oHotInfoHeroArray = this.oHotInfoHeroArray.map(item => {
            if (item.id === 4) {
                item.name = this.place[0].population_density
            }
            return item
        })*/
    })
</script>