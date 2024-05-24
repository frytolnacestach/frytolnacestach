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
                                        <oInformationBlock :title="'O regionu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_chatgpt" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" styleThema=" -green" />
                                    </div>
                                </section>
                                <!-- SECTION - information by ChatGPT END -->

                                <!-- SECTION - information by Author -->
                                <section class="t-section mt-2 mb-4" v-if="place && place.length > 0 && place[0].information_author?.length > 0">
                                    <div class="t-section__inner">
                                        <oInformationBlock :title="'O regionu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_author[0].text" :authorID="place[0].information_author[0].author_create" styleThema=" -green" />
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

                                <!-- SECTION - Place teaser -->
                                <section class="t-section my-2 -p0 print-section" v-if="place && place.length > 0 && placeState && placeState.length > 0">
                                    <div class="t-section__inner">
                                        <oPlaceTeaser :headline="'Region ' + place[0].name + ' se nachází ve státě ' + placeState[0].name" :place="placeState" :image="imagePlaceState" type="stat" />
                                    </div>
                                </section>
                                <!-- SECTION - Place teaser END -->

                                <!-- SECTION - Ubytování - information -->
                                <section class="t-section pt-1 mt-2">
                                    <div class="t-section__inner">
                                        <oInformationBlock :title="'Ubytování v regionu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="'Cena za konkrétní ubytování v regionu ' + (place[0].name ? place[0].name : '') + ' se může lišit v závislosti na vzdálenosti termínu, délce pobytu a počtu ubytovaných osob. Zde uvedené ceny jsou aktuální na dnešní noc a platí pro dvě osoby. Prostřednictvím služby Booking.com je zajištěno sprostředkování ubytování. Je však třeba poznamenat, že ceny se mohou měnit v závislosti na aktuální poptávce a nabídce. V případě zájmu o rezervaci je tedy vhodné sledovat vývoj cen a včas zajistit své ubytování za nejvýhodnějších podmínek.'" v-if="place[0].affiliate.find(x => x.name === 'booking').value === true" />
                                        <oInformationBlock :title="'Ubytování v regionu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="'Bohužel s cenou ubytování v regionu ' + (place[0].name ? place[0].name : '') + ' vám zatím moc neporadíme.'" v-else />
                                    </div>
                                </section>
                                <!-- SECTION - Ubytování - information END -->

                                <!-- SECTION - Ubytování -->
                                <section class="t-section -px-world py-2 hidden-print" v-if="place && place.length > 0 && place[0].affiliate.find(x => x.name === 'booking').value === true">
                                    <div class="t-section__inner">
                                        <div v-for="coordinate in place[0].coordinates">
                                            <oAffilateBooking 
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
                                <oReviewItem :account="account" :IDplace="place[0].id" type="region" v-if="place && place.length > 0" />
                                <!-- SECTION - Review END -->

                                <!-- SECTION - Place list -->
                                <oPlaceTeaserList :headline="'Jaké další regiony vidět ve státě ' + placeState[0].name" :IDplace="placeState[0].id" :IDplaceShow="place[0].id" type="regions" typePage="state" typeShow="region" styleGap=" mt-2 mb-4 pt-1" v-if="placeState && placeState.length > 0" />
                                <!-- SECTION - Place teaser END -->

                            </div>
                            <div class="t-grid__section -aside-place-status">

                                <!-- SECTION - Visited button - sidebar -->
                                <section class="t-section -px-world my-1">
                                    <div class="t-section__inner">
                                        <oVisitedButton :account="account" :place="place[0].id" placeType="region" v-if="place && place.length > 0" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited button - sidebar - END -->

                            </div>
                            <div class="t-grid__section -aside-content">

                                <!-- SECTION - Events - sidebar -->
                                <oSidebarEvent :place="this.place[0].id" type="region" v-if="place && place.length > 0" />
                                <!-- SECTION - Events - sidebar - END -->

                            </div>
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

                <section class="t-section -p0 hidden-print">
                    <div class="t-section__inner">
                        <div class="t-grid -world-ful">
                            <div class="t-grid__section -content">

                                <!-- SECTION - videos -->
                                <section class="t-section -p0 -bg-green py-4" v-if="place && place.length > 0 && videos && videos.length !== 0">
                                    <div class="t-section__inner">
                                        <mHeadline title="Videa z regionu" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
                                        <oVideoList :videos="videos" :images="imagesVideos" type="travel" styleThema=" -world" styleThemaLoading=" -green" styleAlign=" -p-left" />
                                        <oVideoList :videos="null" :images="null" styleThema=" -world" skeletonThema=" -skeleton-green" skeletonNumber="3" :skeleton=true v-if="isLoadingVideos" />
                                        <div class="flex flex-center my-2" v-if="!isLoadingVideos && !noMoreVideosItems">
                                            <span class="a-button-border -big -green" @click="loadMoreVideosItems">Načíst další videa</span>
                                        </div>
                                    </div>
                                </section>
                                <!-- SECTION - videos END -->

                                <!-- SECTION - articles -->
                                <section class="t-section -p0 -bg-green py-4" v-if="place && place.length > 0 && posts && posts.length !== 0">
                                    <div class="t-section__inner">
                                        <mHeadline title="Články z regionu" :titleValue="place[0].name" styleThema=" -world-dark" styleAlign=" -p-left" styleGap=" mb-2" />
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
    import oAffilateBooking from '~/components/organisms/oAffilateBooking.vue'
    import oArticleList from '~/components/organisms/oArticleList.vue'
    import oHeroPlace from '~/components/organisms/oHeroPlace.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oPlaceTeaser from '~/components/organisms/oPlaceTeaser.vue'
    import oPlaceTeaserList from '~/components/organisms/oPlaceTeaserList.vue'
    import oMapGoogle from '~/components/organisms/oMapGoogle.vue'
    import oReviewItem from '~/components/organisms/oReviewItem.vue'
    import oSidebarEvent from '~/components/organisms/oSidebarEvent.vue'
    import oSwitchHero from '~/components/organisms/oSwitchHero.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'
    import oVisitedButton from '~/components/organisms/oVisitedButton.vue'

    export default defineComponent({
        name: 'SvetMistoSlugPage',

        components: {
            mNavBreadcrumbsPlace,
            mHeadline,
            oAccountBannerBig,
            oAdGoogleSidebar,
            oAdGoogleWysiwyg,
            oAffilateBooking,
            oArticleList,
            oHeroPlace,
            oInformationBlock,
            oPlaceTeaser,
            oPlaceTeaserList,
            oMapGoogle,
            oReviewItem,
            oSidebarEvent,
            oSwitchHero,
            oVideoList,
            oVisitedButton
        },

        data() {
            return {
                account: useAccountData().accountData,
                // Data from API
                place: this.place,
                imagePlace: this.imagePlace,
                placeState: this.placeState,
                imagePlaceState: this.imagePlaceState,
                placeContinent: this.placeContinent,
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
                        name: (this.placeContinent && this.placeContinent.length > 0) ? this.placeContinent[0].name : "Kontinent",
                        url: (this.placeContinent && this.placeContinent.length > 0) ? ("/svet/kontinent/" + this.placeContinent[0].slug) : "/svet/kontinent",
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
                        name: (this.placeState && this.placeState.length > 0) ? this.placeState[0].name : "Stát",
                        url: (this.placeState && this.placeState.length > 0) ? ("/svet/stat/" + this.placeState[0].slug) : "/svet/stat",
                        status: "link"
                    },
                    {
                        id: 6,
                        icon: true,
                        type: "region",
                        name: "Regiony",
                        url: "/svet/region",
                        status: "link"
                    },
                    {
                        id: 7,
                        icon: false,
                        type: "region",
                        name: (this.place && this.place.length > 0) ? this.place[0].name : "Region",
                        url: (this.place && this.place.length > 0) ? ("/svet/region/" + this.place[0].slug) : "/svet/region",
                        status: "span"
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

            let headScript = reactive({
                "@context": "https://schema.org",
                "@type": "Place",
                "name": ((this.place && this.place.length > 0 && this.place[0].name) ? this.place[0].name : ""),
                "description": ((this.place && this.place.length > 0 && this.place[0].information_author?.length > 0) ? this.place[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '') : (this.place[0].information_chatgpt ? this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '') : "")),
                "image": ((this.place && this.place.length > 0 && this.imagePlace && imagePlace.length > 0 && this.imagePlace[0].id) ? ("https://image.frytolnacestach.cz/storage/world/regions/" + this.imagePlace[0].name + ".webp") : "" )
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

            useJsonld(() => headScript)

            return {
                headMeta,
                headLink,
                headScript
            }
        },

        head() {
            // title
            title = `${(this.place && this.place.length > 0 && this.place[0].name) ? this.place[0].name : 'Region'} | Cestovatelský portál Frytol na cestách`

            // description
            description = (this.place && this.place.length > 0 && this.place[0].information_author?.length > 0) ? this.place[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_author[0].text.lastIndexOf(' ', 160)) : this.place[0].information_chatgpt ? this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 160)) : this.place[0].name ? this.place[0].name : 'Region'

            // keywolds
            let metaSeoTags = ""
            if (this.place && this.place.length > 0 && this.place[0].seo_tags && this.place[0].seo_tags.length > 0) {
                metaSeoTags = ", " + this.place[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = ((this.place && this.place.length > 0 && this.place[0].name) ? this.place[0].name : '') + metaSeoTags + ', region, cestování, svět, cestovatelský portál, jaké státy tu jsou, plánování cesty, dovolená'
            
            // ogImage
            ogImage = `${(this.place && this.place.length > 0 && this.place[0].id_image_hero) ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`

            // ogUrl
            ogUrl = `https://www.frytolnacestach.cz/svet/region/${this.place[0].slug}`
        },

        methods: {
            async fetchData() {
                const route = useRoute()

                // PAGE - Region detail
                // Place
                const responsePlace = await fetch(`https://api.frytolnacestach.cz/api/places-region/${route.params.slug}`)
                this.place = await responsePlace.json()
                // Image
                if (this.place && this.place.length > 0) {
                    const responseImagePlace = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.place[0].id_image_hero}`)
                    this.imagePlace = await responseImagePlace.json()
                }
                // PlaceState
                if (this.place && this.place.length > 0) {
                    const responsePlaceState = await fetch(`https://api.frytolnacestach.cz/api/places-state-id/${this.place[0].id_state}`)
                    this.placeState = await responsePlaceState.json()
                    // Images
                    let imagePlaceState = null
                    if (this.placeState && this.placeState.length > 0 && this.placeState[0].id_image_cover !== null ) {
                        const imagePlaceState = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.placeState[0].id_image_cover}`)
                        this.placeState = await responsePlaceState.json()
                    }
                    // PlaceContinent
                    const placeContinent = await fetch(`https://api.frytolnacestach.cz/api/places-continent-id/${this.placeState[0].id_continent}`)
                    this.placeContinent = await responsePlaceContinent.json()
                }
            },

            async loadPosts() {
                //start loading
                this.isLoadingPosts = true

                // Variable
                let postsResponse

                //load posts
                if (this.place && this.place.length > 0) {
                    const responsePosts = await fetch(`https://api.frytolnacestach.cz/api/posts-id-region/${this.place[0].id}?showType=list&page=${this.postsPage}&items=${this.postsPerPage}`)
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
                    const responseVideo = await fetch(`https://api.frytolnacestach.cz/api/videos-id-region/${this.place[0].id}?showType=list&page=${this.videosPage}&items=${this.videosPerPage}`)
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

        //Data for mNavBreadcrumbsPlaceArray 
        //continent
        /*this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
            if (item.id === 3) {
                item.name = this.placeContinent[0].name
                item.url = "/svet/kontinent/" + this.placeContinent[0].slug
            }
            return item
        })*/
        //state
        /*this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
            if (item.id === 5) {
                item.name = this.placeState[0].name
                item.url = "/svet/stat/" + this.placeState[0].slug
            }
            return item
        })*/
        //region
        /*this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
            if (item.id === 7) {
                item.name = this.place[0].name
                item.url = "/svet/region/" + this.place[0].slug
            }
            return item
        })*/
    })
</script>