<template>
    <main class="t-main -gray -pt-menu" role="main">

        <!-- SECTION - Hero -->
		<section class="t-section -p0 mt-2 mb-4">
            <div class="t-section__inner">
                <oHero :headline="headlineFilter" perex="Vítej na našem cestovatelském portálu! Podívej se na naše videa plná dobrodružství a inspirace k cestování. Objevuj spolu s námi nejzajímavější místa na světě prostřednictvím autentických příběhů a praktických tipů. Připrav se na vlastní nezapomenutelné dobrodružství díky našim videím plným vzrušujících zážitků. Užívej si každý moment na cestách a objevuj krásy světa s námi!" modifierCSS=" -gray -w640"/>
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Filter -->
        <section class="t-section -p0 hidden-print">
            <div class="t-section__inner">
                <oFormFilterPlace styleThema=" -gray" typePlaceFilterName="Vybrat stát" typePlaceFilter="states" @update="filterUpdate" />
            </div>
        </section>
        <!-- SECTION - Filter END -->

        <!-- SECTION - videos -->
        <section class="t-section -p0 py-1 px-2 print-section">
            <div class="t-section__inner">
                <oVideoList :videos="videos" :images="images" styleThemaLoading=" -gray" />
                <oVideoList :videos="null" :images="null" skeletonThema=" -skeleton-gray" skeletonNumber="9" :skeleton=true v-if="isLoading" />
                <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                    <span class="a-button-fill -big -gray" @click="loadMoreItems">Načíst další položky</span>
                </div>
            </div>
        </section>
        <!-- SECTION - videos END -->

        <!-- SECTION - Platforms -->
        <section class="t-section -p0 py-1 mt-2 px-2 print-section">
            <div class="t-section__inner">
                <mHeadline title="Platformy kde jsem" styleAlign=" -left" styleGap="mb-1" />
                <oPlatform />
                <div class="flex flex-center mb-4">
                    <aButtonFillFull target="internal" url="/social" text="Více informací o platformách" styleThema=" -green" />
                </div>
            </div>
        </section>
        <!-- SECTION - Platforms END -->
    </main>
</template>

<script>
    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oHero from '../../components/organisms/oHero.vue'
    import oFormFilterPlace from '~/components/organisms/oFormFilterPlace.vue'
    import oPlatform from '../../components/organisms/oPlatform.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'

    export default {
        name: 'VideaIndexPage',

        components: {
            aButtonFillFull,
            mHeadline,
            oFormFilterPlace,
            oHero,
            oPlatform,
            oVideoList
        },

        data() {
            return {
                headline: "Videa",
                headlineFilter: 'Videa',
                filterPlaceName: '',
                filterPlace: '',
                videos: [],
                images: [],
                isLoading: false,
                noMoreItems: false,
                page: 1,
                perPage: 20
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
            title = `${this.headlineFilter} | Cestovatelský portál Frytol na cestách`

            // description
            description = `Sleduj cestovatelská ${this.headlineFilter !== 'Videa' ? (this.headlineFilter.replace("Videa", "videa") + ' na cestovatelském portálu Frytol na cestách.') : 'videa z různích míst naší krásné planety na cestovatelském portálu Frytol na cestách.'}`

            // keywolds
            keywords = 'cestovatelská videa, youtube, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/videa`

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

        updated() {
            window.lazySizes && window.lazySizes.update()
        },

        async mounted() {
            const filterIDstate = this.$route.query.filterIDstate
            if (!filterIDstate) {
                await this.loadVideos()
            }
            this.addScrollListener()
        },

        methods:{
            async loadVideos(reset) {
                //start loading
                this.isLoading = true

                // Variable
                let videosResponse

                //load videos
                if (this.filterPlace !== null) {
                    videosResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/videos?showType=list&idState=${this.filterPlace}&page=${this.page}&items=${this.perPage}`)
                } else {
                    videosResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/videos?showType=list&page=${this.page}&items=${this.perPage}`)
                }
                const { data: videosData } = videosResponse

                //load images
                const imagesVideosIDS = videosData.map(videos => videos.id_image).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesVideosIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosIDS.join(',')}`)
                    const { data: imagesData } = imagesResponse
                    this.images = this.images.concat(imagesData)
                
                    // add to videosData to videos
                    if (reset) {
                        // Reset Arrays after change filter
                        this.videos = videosData
                    } else {
                        this.videos = this.videos.concat(videosData)
                    }
                } else {
                    // add to videosData to videos
                    if (reset) {
                        // Reset Arrays after change filter
                        this.videos = videosData
                    } else {
                        this.videos = this.videos.concat(videosData)
                    }
                } 

                //no more items?
                if (videosData.length === 0 || videosData.length < this.perPage) {
                    this.noMoreItems = true
                }

                //end loading
                this.isLoading = false
            },

            addScrollListener() {
                window.addEventListener('scroll', this.handleScroll)
            },

            removeScrollListener() {
                window.removeEventListener('scroll', this.handleScroll)
            },

            loadMoreItems() {
                //no further loading can occur while loading
                if (this.isLoading || this.noMoreItems) {
                    return
                }
                // loading more items
                this.page++
                this.loadVideos()
            },

            updateHeadline() {
                if (this.filterPlaceName) {
                    this.headlineFilter = this.headline + ' ze státu ' + this.filterPlaceName
                } else {
                    this.headlineFilter = this.headline
                }
            },

            handleScroll() {
                //no further loading can occur while loading
                if (this.isLoading || this.noMoreItems) {
                    return
                }

                // Document for scroll point
                const windowHeight = window.innerHeight
                const documentHeight = document.documentElement.scrollHeight
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0

                // Footer height
                const tFooterElement = document.querySelector('.t-footer')
                const tFooterHeight = tFooterElement.offsetHeight

                // Point for loading
                if (scrollTop + windowHeight >= documentHeight - tFooterHeight) {
                    // loading more items
                    this.page++
                    this.loadVideos()
                }
            },

            // filter set update
            filterUpdate(newValue) {
                this.filterPlace = newValue.id
                this.filterPlaceName = newValue.name
                this.videos = [],
                this.images = [],
                this.isLoading = false
                this.noMoreItems = false
                this.page = 1
                this.perPage = 20
                this.loadVideos(true)
                this.updateHeadline()
            }
        },

        beforeDestroy() {
            this.removeScrollListener()
        }
    }
</script>