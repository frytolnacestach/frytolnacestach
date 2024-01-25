<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - BREADCRUMBS -->
        <section class="t-section -px-world mt-2 -p0">
            <div class="t-section__inner">
                <mNavBreadcrumbsPlace :links="mNavBreadcrumbsPlaceArray" :place="place[0]" />
            </div>
        </section>
        <!-- SECTION - BREADCRUMBS END -->

        <!-- SECTION - Buttons -->
        <section class="t-section -px-world mt-1 -p0 hidden-print" v-if="isMobile">
            <div class="t-section__inner">
                <oSwitchHero :show-hero.sync="showHero" />
            </div>
        </section>
        <!-- SECTION - Buttons END -->

        <!-- SECTION - hero + hot info hero -->
        <section class="t-section -px-world -p0">
            <div class="t-section__inner">
                <div class="t-grid -world-hero">

                    <!-- SECTION - hero -->
                    <div class="t-grid__section -hero-place" v-show="!isMobile || (isMobile && showHero)">
                        <oHeroPlace :title="place[0].name" :idImageHero="place[0].id_image_hero" :images="imagePlace" v-if="place[0]" />
                    </div>
                    <!-- SECTION - hero END -->

                    <!-- SECTION - map -->
                    <div class="t-grid__section -map" v-show="!isMobile || (isMobile && !showHero)">
                        <oMapGoogle :place="place" />
                    </div>
                    <!-- SECTION - map - END -->

                </div>
            </div>
        </section>
        <!-- SECTION - hero + hot info - END -->

        <!-- SECTION -->
        <section class="t-section -px-world -p0">
            <div class="t-section__inner">
                <div class="t-grid -place-main-with-aside">
                    
                    <div class="t-grid__section -main">
                        <!-- SECTION - information by ChatGPT -->
                        <section class="t-section mt-2 mb-4" v-if="place[0].information_chatgpt && !place[0].information_author?.length > 0">
                            <div class="t-section__inner">
                                <oInformationBlock :title="'O regionu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_chatgpt" authorName="ChatGPT" authorLink="https://chat.openai.com/chat" authorTarget="_blank" styleThema=" -green" />
                            </div>
                        </section>
                        <!-- SECTION - information by ChatGPT END -->

                        <!-- SECTION - information by Author -->
                        <section class="t-section" v-if="place[0].information_author?.length > 0">
                            <div class="t-section__inner">
                                <oInformationBlock :title="'O regionu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="place[0].information_author[0].text" authorName="Michal Fryč (frytolnacestach)" authorLink="https://www.frytolnacestach.cz/cestovatel/frytol-na-cestach" styleThema=" -green" />
                            </div>
                        </section>
                        <!-- SECTION - information by Author END -->

                        <!-- SECTION - Ubytování - information -->
                        <section class="t-section pt-1 mt-2">
                            <div class="t-section__inner">
                                <oInformationBlock :title="'Ubytování v regionu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="'Cena za konkrétní ubytování v regionu ' + (place[0].name ? place[0].name : '') + ' se může lišit v závislosti na vzdálenosti termínu, délce pobytu a počtu ubytovaných osob. Zde uvedené ceny jsou aktuální na dnešní noc a platí pro dvě osoby. Prostřednictvím služby Booking.com je zajištěno sprostředkování ubytování. Je však třeba poznamenat, že ceny se mohou měnit v závislosti na aktuální poptávce a nabídce. V případě zájmu o rezervaci je tedy vhodné sledovat vývoj cen a včas zajistit své ubytování za nejvýhodnějších podmínek.'" v-if="place[0].affiliate.find(x => x.name === 'booking').value === true" />
                                <oInformationBlock :title="'Ubytování v regionu ' + (place[0].name ? place[0].name : '')" :perexWysiwyg="'Bohužel s cenou ubytování v regionu ' + (place[0].name ? place[0].name : '') + ' vám zatím moc neporadíme.'" v-else />
                            </div>
                        </section>
                        <!-- SECTION - Ubytování - information END -->

                        <!-- SECTION - Ubytování -->
                        <section class="t-section -px-world py-2 hidden-print" v-if="place[0].affiliate.find(x => x.name === 'booking').value === true">
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
                        <oReviewItem :account="account" :IDplace="place[0].id" type="region" v-if="place[0].id" />
                        <!-- SECTION - Review END -->

                        <!-- SECTION - Place teaser -->
                        <oPlaceTeaserRegions :headline="'Jaké další regiony vidět ve státě ' + placeState[0].name" :IDplace="placeState[0].id" :IDplaceShow="place[0].id" v-if="placeState[0]" type="state" typeShow="region" styleGap=" mt-2 mb-4 pt-1" />
                        <!-- SECTION - Place teaser END -->
                    </div>


                    <div class="t-grid__section -aside-place-status">
                        <!-- SECTION - Visited button - sidebar -->
                        <section class="t-section -px-world my-1">
                            <div class="t-section__inner">
                                <oVisitedButton :account="account" :place="this.place[0].id" placeType="region" />
                            </div>
                        </section>
                        <!-- SECTION - Visited button - sidebar - END -->
                    </div>
                    <div class="t-grid__section -aside-content">
                        <!-- SECTION - Account banner - sidebar -->
                        <section class="t-section -px-world my-1" v-if="account && account.length === 0">
                            <div class="t-section__inner">
                                <oAccountBanner :account="account" styleThema=" -green" />
                            </div>
                        </section>
                        <!-- SECTION - Account banner - sidebar END -->

                        <!-- SECTION - Events - sidebar -->
                        <oSidebarList :place="this.place[0].id" type="region" />
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
        <!-- SECTION END -->

        <!-- SECTION Videos and Articles -->
        <section class="t-section -p0 hidden-print">
            <div class="t-section__inner">
                <div class="t-grid -world-ful">
                    <div class="t-grid__section -content">

                        <!-- SECTION - videos -->
                        <section class="t-section -p0 -bg-green py-4" v-if="place[0] && videos.length !== 0">
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
                        <section class="t-section -p0 -bg-green py-4" v-if="place[0] && posts.length !== 0">
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
        <!-- SECTION Videos and Articles END -->
    </main>
</template>

<script>
    import mNavBreadcrumbsPlace from '~/components/molecules/mNavBreadcrumbsPlace.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oAccountBanner from '~/components/organisms/oAccountBanner.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oAffilateBooking from '~/components/organisms/oAffilateBooking.vue'
    import oArticleList from '~/components/organisms/oArticleList.vue'
    import oHeroPlace from '~/components/organisms/oHeroPlace.vue'
    import oInformationBlock from '~/components/organisms/oInformationBlock.vue'
    import oPlaceTeaserRegions from '~/components/organisms/oPlaceTeaserRegions.vue'
    import oMapGoogle from '~/components/organisms/oMapGoogle.vue'
    import oReviewItem from '~/components/organisms/oReviewItem.vue'
    import oSidebarList from '~/components/organisms/oSidebarList.vue'
    import oSwitchHero from '~/components/organisms/oSwitchHero.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'
    import oVisitedButton from '~/components/organisms/oVisitedButton.vue'

    export default {
        name: 'SvetMistoSlugPage',

        components: {
            mNavBreadcrumbsPlace,
            mHeadline,
            oAccountBanner,
            oAdGoogleSidebar,
            oAffilateBooking,
            oArticleList,
            oHeroPlace,
            oInformationBlock,
            oPlaceTeaserRegions,
            oMapGoogle,
            oReviewItem,
            oSidebarList,
            oSwitchHero,
            oVideoList,
            oVisitedButton
        },

        data() {
            return {
                account: [],
                place: this.place,
                placeContinent: this.placeContinent,
                placeState: this.placeState,
                isMobile: false,
                showHero: true,
                videos: [],
                imagesVideos: [],
                isLoadingVideos: false,
                noMoreVideosItems: false,
                videosPage: 1,
                videosPerPage: 9,
                posts: [],
                imagesPosts: [],
                isLoadingPosts: false,
                noMorePostsItems: false,
                postsPage: 1,
                postsPerPage: 9,
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
                        type: "region",
                        name: "Regiony",
                        url: "/svet/region",
                        status: "link"
                    },
                    {
                        id: 7,
                        icon: false,
                        type: "region",
                        name: "Region",
                        url: "/svet/region",
                        status: "span"
                    }
                ]
            }
        },

        methods:{
            handleResize() {
                // Aktualizovat hodnotu pro "isMobile" při změně velikosti okna
                this.isMobile = window.innerWidth < 992
            },

            async loadPosts() {
                //start loading
                this.isLoadingPosts = true

                // Variable
                let postsResponse

                //load posts
                postsResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/posts-id-region/${this.place[0].id}?showType=list&page=${this.postsPage}&items=${this.postsPerPage}`)
                const { data: postsData } = postsResponse

                //load images
                const imagesPostsIDS = postsData.map(posts => posts.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesPostsIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPostsIDS.join(',')}`)
                    const { data: imagesData } = imagesResponse
                    this.imagesPosts = this.imagesPosts.concat(imagesData)
                
                    // add to postsData to posts
                    this.posts = this.posts.concat(postsData)
                } else {
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
                videosResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/videos-id-region/${this.place[0].id}?showType=list&page=${this.videosPage}&items=${this.videosPerPage}`)
                const { data: videosData } = videosResponse

                //load images
                const imagesVideosIDS = videosData.map(videos => videos.id_image).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesVideosIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosIDS.join(',')}`)
                    const { data: imagesData } = imagesResponse
                    this.imagesVideos = this.imagesVideos.concat(imagesData)
                
                    // add to videosData to videos
                    this.videos = this.videos.concat(videosData)
                } else {
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
            this.loadVideos()
            this.loadPosts()

            // Zjistit, zda je rozlišení menší než 992px při načítání stránky
            this.isMobile = window.innerWidth < 992

            // Poslouchat událost změny velikosti okna pro aktualizaci přepínače
            window.addEventListener('resize', this.handleResize)

            //Data for mNavBreadcrumbsPlaceArray 
            //continent
            this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                if (item.id === 3) {
                    item.name = this.placeContinent[0].name
                    item.url = "/svet/kontinent/" + this.placeContinent[0].slug
                }
                return item
            })
            //state
            this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                if (item.id === 5) {
                    item.name = this.placeState[0].name
                    item.url = "/svet/stat/" + this.placeState[0].slug
                }
                return item
            })
            //region
            this.mNavBreadcrumbsPlaceArray = this.mNavBreadcrumbsPlaceArray.map(item => {
                if (item.id === 7) {
                    item.name = this.place[0].name
                    item.url = "/svet/region/" + this.place[0].slug
                }
                return item
            })
        },

        beforeUnmount() {
            // Zrušit naslouchání události změny velikosti okna při odstranění komponenty
            window.removeEventListener('resize', this.handleResize)
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
            title = `${this.place[0].name ? this.place[0].name : 'Region'} | Cestovatelský portál Frytol na cestách`

            // description
            description = `${this.place[0].information_chatgpt ? this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, this.place[0].information_chatgpt.lastIndexOf(' ', 160)) : this.place[0].name}` 

            // keywolds
            let metaSeoTags
            if (this.place[0].seo_tags && this.place[0].seo_tags.length > 0) {
                metaSeoTags = this.place[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = (this.place[0].name ? this.place[0].name : '') + metaSeoTags + ', region, cestování, svět, cestovatelský portál, jaké státy tu jsou, plánování cesty, dovolená'
            
            // ogImage
            ogImage = `${this.place[0].id_image_hero ? 'https://image.frytolnacestach.cz/storage/' + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).source + this.imagePlace.find(image => image.id === this.place[0].id_image_hero).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/main/og-default.png'}`

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/svet/region/${this.place[0].slug}`

            // ogType
            ogType = 'website'

            // Return
            return {
                title,
                meta: [
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { property: 'og:image', content: ogImage },
                    { hid: 'og:title', content: ogTitle },
                    { hid: 'og:description', content: ogDescription },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:type', content: ogType }
                ]
            }
        },

        async asyncData({ $axios, params }) {
            let success = false
            let data = null

            while (!success) {
                try {
                    // PAGE - Region detail
                    // Place
                    const place = await $axios.$get(`https://api.frytolnacestach.cz/api/places-region/${params.slug}`)
                    // Image
                    const imagePlace = place[0].id_image_hero && place[0].id_image_hero !== 0 ? await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${place[0].id_image_hero}`) : []
                    // PlaceState
                    const placeState = await $axios.$get(`https://api.frytolnacestach.cz/api/places-state-id/${place[0].id_state}`)
                    // PlaceContinent
                    const placeContinent = await $axios.$get(`https://api.frytolnacestach.cz/api/places-continent-id/${placeState[0].id_continent}`)


                    // COMPONENT - oVideoList
                    // Videos
                    const videos = await $axios.$get(`https://api.frytolnacestach.cz/api/videos-id-region/${place[0].id}`)
                    // Images
                    let imagesVideos
                    if ( videos !== null) {
                        const imagesVideosID = videos.map(video => video.id_image).filter(id => id !== null && id !== '')
                        imagesVideos = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosID.join(',')}`)
                    } else {
                        imagesVideos = null
                    }


                    // COMPONENT - oArticleList
                    // Posts
                    const posts = await $axios.$get(`https://api.frytolnacestach.cz/api/posts-id-region/${place[0].id}`)
                    // Images
                    let imagesPosts
                    if ( videos !== null) {
                        const imagesPostsID = posts.map(post => post.id_image_cover).filter(id => id !== null && id !== '')
                        imagesPosts = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPostsID.join(',')}`)
                    } else {
                        imagesPosts = null
                    }


                    data = {
                        place,
                        imagePlace,
                        placeState,
                        placeContinent
                    }
                    

                    success = true
                } catch (error) {
                    console.log(`API ERROR - REGION DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            return data
        },

        updated() {
            window.lazySizes && window.lazySizes.update()
        },

        watch: {
            '$store.state.account': {
                deep: true,
                immediate: true,
                handler() {
                    this.account = this.$store.state.account
                }
            }
        }
    }
</script>