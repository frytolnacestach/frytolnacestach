<template>
    <NuxtLayout name="default">
        <main class="t-main -gray -pt-menu" role="main">
            <div class="t-main__content">
                <!-- SECTION - Hero -->
                <section class="t-section -p0 mt-2 mb-4">
                    <div class="t-section__inner">
                        <OrganismsHero :headline="headlineFilter" perex="Vítej na našem cestovatelském portálu! Podívej se na naše videa plná dobrodružství a inspirace k cestování. Objevuj spolu s námi nejzajímavější místa na světě prostřednictvím autentických příběhů a praktických tipů. Připrav se na vlastní nezapomenutelné dobrodružství díky našim videím plným vzrušujících zážitků. Užívej si každý moment na cestách a objevuj krásy světa s námi!" modifierCSS=" -gray -w640" classCSS=" mt-2" />
                    </div>
                </section>
                <!-- SECTION - Hero END -->

                <!-- SECTION - Filter -->
                <section class="t-section -p0 hidden-print">
                    <div class="t-section__inner">
                        <OrganismsFormFilterPlace styleThema=" -gray" typePlaceFilterName="Vybrat stát" typePlaceFilter="states" @update="filterUpdate" />
                    </div>
                </section>
                <!-- SECTION - Filter END -->

                <!-- SECTION - videos -->
                <section class="t-section -p0 py-1 px-2 print-section">
                    <div class="t-section__inner">
                        <OrganismsVideoList :videos="videos" :images="images" styleThemaLoading=" -gray" styleSizeHeadline="h2" />
                        <OrganismsVideoList :videos="null" :images="null" skeletonThema=" -skeleton-gray" skeletonNumber="9" :skeleton=true v-if="isLoading" />
                        <OrganismsNoneContent text="Bohužel zde nejsou žádné videa" styleThema=" -green" styleGap=" px-1" v-if="videos && videos.length === 0 && !isLoading" />
                        <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                            <span class="a-button-fill -big -gray" @click="loadMoreItems">Načíst další položky</span>
                        </div>
                    </div>
                </section>
                <!-- SECTION - videos END -->

                <!-- SECTION - Platforms -->
                <section class="t-section -p0 py-1 mt-2 px-2 print-section">
                    <div class="t-section__inner">
                        <MoleculesHeadline title="Platformy kde jsem" styleAlign=" -left" styleGap="mb-1" />
                        <OrganismsPlatform />
                        <div class="flex flex-center mb-4">
                            <AtomsButtonFillFull target="internal" url="/social" text="Více informací o platformách" styleThema=" -gray" />
                        </div>
                    </div>
                </section>
                <!-- SECTION - Platforms END -->
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    export default defineComponent({
        name: 'VideaIndexPage',

        data() {
            return {
                headline: "Videa",
                headlineFilter: 'Videa',
                filterPlaceName: '',
                filterPlace: '',
                videos: [],
                images: [],
                isLoading: true,
                noMoreItems: false,
                page: 1,
                perPage: 20
            }
        },

        setup() {
            let headMeta = reactive({
                title: 'Cestovatelská videa | Cestovatelský portál Frytol na cestách',
                description: 'Sleduj cestovatelská videa z různích míst naší krásné planety na cestovatelském portálu Frytol na cestách.',
                keywords: 'cestovatelská videa, youtube, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'Cestovatelská videa | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Sleduj cestovatelská videa z různích míst naší krásné planety na cestovatelském portálu Frytol na cestách.',
                ogUrl: `https://www.frytolnacestach.cz/videa`,
                ogType: 'website',
            })

            let headLink = ref([
                { rel: 'canonical', href: headMeta.ogUrl }
            ])

            let headScript = reactive({
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

        updated() {
            window.lazySizes && window.lazySizes.update()
        },

        methods: {
            async loadVideos(reset) {
                //start loading
                this.isLoading = true

                // Variable
                let repsonseVideos

                //load videos
                if (this.filterPlace !== null) {
                    repsonseVideos = await fetch(`https://api.frytolnacestach.cz/api/videos?showType=list&idState=${this.filterPlace}&page=${this.page}&items=${this.perPage}`)
                } else {
                    repsonseVideos = await fetch(`https://api.frytolnacestach.cz/api/videos?showType=list&page=${this.page}&items=${this.perPage}`)
                }
                const videosData = await repsonseVideos.json() || []
                this.videos = this.videos.concat(videosData)

                //load images
                const imagesVideosIDS = videosData.map(videos => videos.id_image).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesVideosIDS.length > 0) {
                    const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosIDS.join(',')}`)
                    const imagesData = await responseImages.json() || []
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

                // HEAD
                if (this.videos && this.videos.length > 0) {
                    // Meta
                    this.headMeta.title = `${this.headlineFilter} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.description = `Sleduj cestovatelská ${this.headlineFilter !== 'Videa' ? (this.headlineFilter.replace("Videa", "videa") + ' na cestovatelském portálu Frytol na cestách.') : 'videa z různích míst naší krásné planety na cestovatelském portálu Frytol na cestách.'}`
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

        mounted() {
            const route = useRoute()
            const filterIDstate = route.query.filterIDstate
            if (!filterIDstate) {
                this.loadVideos()
            }
            this.addScrollListener()
        },

        beforeDestroy() {
            this.removeScrollListener()
        }
    })
</script>