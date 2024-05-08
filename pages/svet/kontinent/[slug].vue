<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - BREADCRUMBS -->
                <section class="t-section -px-world mt-2 -p0">
                    <div class="t-section__inner">
                        <mNavBreadcrumbsPlace :links="mNavBreadcrumbsPlaceArray" />
                    </div>
                </section>
                <!-- SECTION - BREADCRUMBS END -->

                <!-- SECTION - Buttons -->
                <section class="t-section -px-world mt-1 -p0 hidden-print hidden-desktop">
                    <div class="t-section__inner">
                        <oSwitchHero :show-hero.sync="showHero" />
                    </div>
                </section>
                <!-- SECTION - Buttons END -->

                <section class="t-section -px-world -p0">
                    <div class="t-section__inner">
                        <div class="t-grid -world-hero">

                            <!-- SECTION - hero -->
                            <div :class="'t-grid__section -hero-place' + (!showHero ? ' hidden-mobile' : '')">
                                <oHeroPlace :title="place[0].name" :idImageHero="place[0].id_image_hero" :images="imagePlace" v-if="place && place.length > 0" />
                            </div>
                            <!-- SECTION - hero END -->

                            <!-- SECTION - map -->
                            <div :class="'t-grid__section -map' + (showHero ? ' hidden-mobile' : '')">
                                <oMapGoogle :place="place" v-if="place && place.length > 0 && (place[0].coordinates.length > 0 && place[0].zoom.length > 0)" />
                            </div>
                            <!-- SECTION - map - END -->

                            <!-- SECTION - hot info -->
                            <div class="t-grid__section -hot-info-hero">
                                <oHotInfoHero :data="oHotInfoHeroArray" styleCol=" -col4" v-if="place && place.length > 0" />
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
                                        <oInformationBlock :title="'O kontinentu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_chatgpt" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" styleThema=" -green" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - information by Author -->
                                <section class="t-section mt-2 mb-4" v-if="place && place.length > 0 && place[0].information_author?.length > 0">
                                    <div class="t-section__inner">
                                        <oInformationBlock :title="'O kontinentu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_author[0].text" :authorID="place[0].information_author[0].author_create" styleThema=" -green" />
                                    </div>
                                </section>
                                <!-- SECTION - information by Author END -->

                                <!-- SECTION - ad-google - wysiwyg -->
                                <section class="t-section  my-2 -p0 print-section">
                                    <div class="t-section__inner">
                                        <oAdGoogleWysiwyg styleThema=" -green" />
                                    </div>
                                </section>
                                <!-- SECTION - ad-google - wysiwyg - END -->

                                <!-- SECTION - Account banner big - sidebar -->
                                <section class="t-section -px-world my-1" v-if="account && account.length === 0">
                                    <div class="t-section__inner">
                                        <oAccountBannerBig :account="account" />
                                    </div>
                                </section>
                                <!-- SECTION - Account banner big - sidebar END -->

                                <!-- SECTION - Review -->
                                <oReviewItem :account="account" :IDplace="place[0].id" type="continent" v-if="place && place.length > 0 && place[0].id" />
                                <!-- SECTION - Review END -->

                            </div>
                            <div class="t-grid__section -aside-place-status">

                                <!-- SECTION - Visited button - sidebar -->
                                <section class="t-section -px-world my-1" v-if="place && place.length > 0 && place[0].id">
                                    <div class="t-section__inner">
                                        <oVisitedButton :account="account" :place="place[0].id" placeType="continent" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited button - sidebar - END -->

                            </div>
                            <div class="t-grid__section -aside-content"></div>
                            <div class="t-grid__section -aside-ad">

                                <!-- SECTION - ad-google - sidebar -->
                                <section class="t-section -px-world mt-4 mb-2">
                                    <div class="t-section__inner">
                                        <oAdGoogleSidebar styleThema=" -green" />
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
                                        <mHeadline title="Všechny státy na kontinentu" :titleValue="place[0].name" styleAlign=" -left" styleThema=" -world" styleGap=" -px-0 mb-2" />
                                        <oCoverPlaceDetail :places="placesStates" :images="imagesStates" type="stat" />
                                    </div>
                                </section>
                                <!-- SECTION - státy - END -->

                                <!-- SECTION - videos -->
                                <section class="t-section -p0 -bg-green py-4 hidden-print" v-if="place && place.length > 0 && videos && videos.length !== 0">
                                    <div class="t-section__inner">
                                        <mHeadline title="Videa z kontinentu" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oVideoList :videos="videos" :images="imagesVideos" type="travel" styleThema=" -world" styleThemaLoading=" -green" styleAlign=" -p-left" />
                                        <oVideoList :videos="null" :images="null" styleThema=" -world" skeletonThema=" -skeleton-green" skeletonNumber="3" :skeleton=true v-if="isLoadingVideos" />
                                        <div class="flex flex-center my-2" v-if="!isLoadingVideos && !noMoreVideosItems">
                                            <span class="a-button-border -big -green" @click="loadMoreVideosItems">Načíst další videa</span>
                                        </div>
                                    </div>
                                </section>
                                <!-- SECTION - videos END -->

                                <!-- SECTION - articles -->
                                <section class="t-section -p0 -bg-green py-4 hidden-print" v-if="place && place.length > 0 && posts && posts.length !== 0">
                                    <div class="t-section__inner">
                                        <mHeadline title="Články z kontinetu" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oArticleList :posts="posts" :images="imagesPosts" styleThema=" -world" styleThemaLoading=" -green" styleAlign=" -p-left" />
                                        <oArticleList :posts="null" :images="null" skeletonThema=" -skeleton-green" skeletonNumber="3" :skeleton=true v-if="isLoadingPosts" />
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
    import mNavBreadcrumbsPlace from '~/components/molecules/mNavBreadcrumbsPlace.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oAccountBannerBig from '~/components/organisms/oAccountBannerBig.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oAdGoogleWysiwyg from '~/components/organisms/oAdGoogleWysiwyg.vue'
    import oArticleList from '~/components/organisms/oArticleList.vue'
    import oCoverPlaceDetail from '~/components/organisms/oCoverPlaceDetail.vue'
    import oHeroPlace from '~/components/organisms/oHeroPlace.vue'
    import oHotInfoHero from '~/components/organisms/oHotInfoHero.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oMapGoogle from '~/components/organisms/oMapGoogle.vue'
    import oReviewItem from '~/components/organisms/oReviewItem.vue'
    import oSwitchHero from '~/components/organisms/oSwitchHero.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'
    import oVisitedButton from '~/components/organisms/oVisitedButton.vue'

    export default defineComponent({
        name: 'SvetKontinentSlugPage',

        components: {
            mNavBreadcrumbsPlace,
            mHeadline,
            oAccountBannerBig,
            oAdGoogleSidebar,
            oAdGoogleWysiwyg,
            oArticleList,
            oCoverPlaceDetail,
            oHeroPlace,
            oHotInfoHero,
            oInformationBlock,
            oMapGoogle,
            oReviewItem,
            oSwitchHero,
            oVideoList,
            oVisitedButton
        },

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
                let imageState = null
                if (this.place && this.place.length > 0 && this.place[0].id_state !== null && this.placeState[0] && this.placeState[0].id_image_cover !== null ) {
                    const responseImageState = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.placeState[0].id_image_cover}`)
                    this.imageState = await responseImageState.json()
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

                // Variable
                let videosResponse

                //load videos
                if (this.place && this.place.length > 0) {
                    const responseVideo = await fetch(`https://api.frytolnacestach.cz/api/videos-id-continent/${this.place[0].id}?showType=list&page=${this.videosPage}&items=${this.videosPerPage}`)
                    this.videosData = await responseVideo.json()
                }

                //load images
                if (this.videosData[0]) {
                    const imagesVideosIDS = videosData.map(videos => videos.id_image).filter(id => id !== undefined && id !== null && id !== '')
                    if (imagesVideosIDS.length > 0) {
                        const imagesResponse = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosIDS.join(',')}`)
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

        head() {
            // Variables
            let title
            let description
            let keywords
            let ogImage
            let ogTitle
            let ogDescription
            let ogUrl
            let ogType

            // title
            title = `${(this.place && this.place.length > 0 && this.place[0].name) ? this.place[0].name : 'Kontinent'} | Cestovatelský portál Frytol na cestách`

            // description
            description = (this.place && this.place.length > 0 && this.place[0].information_author?.length > 0) ? this.place[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_author[0].text.lastIndexOf(' ', 160)) : this.place[0].information_chatgpt ? this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 160)) : this.place[0].name ? this.place[0].name : 'Kontinent'

            // keywolds
            let metaSeoTags = ""
            if (this.place && this.place.length > 0 && this.place[0].seo_tags && this.place[0].seo_tags.length > 0) {
                metaSeoTags = ", " + this.place[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = ((this.place && this.place.length > 0 && this.place[0].name) ? this.place[0].name : '') + metaSeoTags + ', kontinent, cestování, svět, cestovatelský portál, jaké státy tu jsou, plánování cesty, dovolená'
            
            // ogImage
            ogImage = `${(this.place && this.place.length > 0 && this.place[0].id_image_hero) ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = (this.place && this.place.length > 0) ? `${process.env.baseUrl}/svet/kontinent/${this.place[0].slug}` : `${process.env.baseUrl}`

            // ogType
            ogType = 'website'

            // Return
            return {
                title,
                meta: [
                    { hid: 'title', name: 'title', content: title },
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { hid: 'og:type', content: ogType },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:title', content: ogTitle },
                    { hid: 'og:description', content: ogDescription },
                    { property: 'og:image', content: ogImage },
                    { name: 'twitter:title', content: ogTitle },
                    { name: 'twitter:description', content: ogDescription },
                    { name: 'twitter:image', content: ogImage },
                    { name: 'twitter:url', content: ogUrl }
                ],
                link: [
                    { rel: 'canonical', href: ogUrl }
                ],
                script: [
                    {
                        type: 'application/ld+json',
                        json: {
                            "@context": "https://schema.org",
                            "@type": "Place",
                            "name": ((this.place && this.place.length > 0 && this.place[0].name) ? this.place[0].name : ""),
                            "description": ((this.place && this.place.length > 0 && this.place[0].information_author?.length > 0) ? this.place[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '') : (this.place[0].information_chatgpt ? this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '') : "")),
                            "image": ((this.place && this.place.length > 0 && this.imagePlace && imagePlace.length > 0 && this.imagePlace[0].id) ? ("https://image.frytolnacestach.cz/storage/world/continents/" + this.imagePlace[0].name + ".webp") : "" ),
                            "area": {
                                "@type": "QuantitativeValue",
                                "value": ((this.place && this.place.length > 0 && this.place[0].area) ? this.place[0].area : ""),
                                "comment": "Rozloha v km²"
                            },
                            "population": {
                                "@type": "QuantitativeValue",
                                "value": ((this.place && this.place.length > 0 && this.place[0].population) ? this.place[0].population : "")
                            }
                        }
                    }
                ]
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