<template>
    <NuxtLayout name="default">
        <main class="t-main -gray -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - Hero -->
                <section class="t-section -p0 mt-2 mb-4">
                    <div class="t-section__inner">
                        <oHero :headline="headlineFilter" perex="Vítej na našem cestovatelském portálu! Prozkoumej naše články plné tipů a rad o cestování, které ti pomohou objevit nejzajímavější místa na světě. Ponoř se do dobrodružství s našimi autentickými příběhy a praktickými doporučeními, abys mohl/a plánovat své vlastní nezapomenutelné dobrodružství. Užij si každý moment na cestách a objevuj krásy světa s námi!" modifierCSS=" -gray -w640" classCSS=" mt-2" />
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

                <!-- SECTION - ArticlesList -->
                <section class="t-section -p0 py-1 px-2 print-section">
                    <div class="t-section__inner">
                        <oArticleList :posts="posts" :images="images" styleThemaLoading=" -gray" styleSizeHeadline="h2" />
                        <oArticleList :posts="null" :images="null" skeletonThema=" -skeleton-gray" skeletonNumber="9" :skeleton=true v-if="isLoading" />
                        <oNoneContent text="Bohužel zde nejsou žádné články" styleThema=" -green" styleGap=" px-1" v-if="posts && posts.length === 0 && !isLoading" />
                        <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                            <span class="a-button-fill -big -gray" @click="loadMoreItems">Načíst další položky</span>
                        </div>
                    </div>
                </section>
                <!-- SECTION - ArticlesList END -->

                <!-- SECTION - Platforms -->
                <section class="t-section -p0 py-1 mt-2 px-2 print-section">
                    <div class="t-section__inner">
                        <mHeadline title="Platformy kde jsem" styleAlign=" -left" styleGap="mb-1" />
                        <oPlatform />
                        <div class="flex flex-center mb-4">
                            <aButtonFillFull target="internal" url="/social" text="Více informací o platformách" styleThema=" -gray" />
                        </div>
                    </div>
                </section>
                <!-- SECTION - Platforms END -->

            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oArticleList from '~/components/organisms/oArticleList.vue'
    import oFormFilterPlace from '~/components/organisms/oFormFilterPlace.vue'
    import oHero from '../../components/organisms/oHero.vue'
    import oNoneContent from '~/components/organisms/oNoneContent.vue'
    import oPlatform from '../../components/organisms/oPlatform.vue'

    export default defineComponent({
        name: 'ClankyIndexPage',

        components: {
            aButtonFillFull,
            mHeadline,
            oArticleList,
            oFormFilterPlace,
            oHero,
            oNoneContent,
            oPlatform
        },

        data() {
            return {
                headline: "Články",
                headlineFilter: 'Články',
                filterPlaceName: '',
                filterTag: '',
                filterPlace: '',
                posts: [],
                images: [],
                isLoading: true,
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
            description = `Čti ${this.headlineFilter !== 'Články' ? (this.headlineFilter.replace("Články", "články")  + ' na cestovatelském portálu Frytol na cestách.') : 'články z různích míst naší krásné planety na cestovatelském portálu Frytol na cestách.'}`

            // keywolds
            keywords = 'Články, novinky, travel hacky, rady, létání, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/clanky`

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
                            "@type": "WebPage",
                            "name": title,
                            "description": description,
                            "url": ogUrl,
                            "datePublished": "2024-01-31",
                            "author": {
                                "@type": "Organization",
                                "name": "Frytol na cestách",
                                "url": "https://www.frytolnacestach.cz/"
                            }
                        }
                    }
                ]
            }
        },

        updated() {
            window.lazySizes && window.lazySizes.update()
        },

        methods: {
            async loadPosts(reset) {
                //start loading
                this.isLoading = true

                // Variable
                let responsePosts

                //load posts
                if (this.filterPlace !== null) {
                    responsePosts = await fetch(`https://api.frytolnacestach.cz/api/posts?showType=list&idState=${this.filterPlace}&page=${this.page}&items=${this.perPage}`)
                } else if (this.filterTag) {
                    responsePosts = await fetch(`https://api.frytolnacestach.cz/api/posts?showType=list&filterTag=${this.filterTag}&page=${this.page}&items=${this.perPage}`)
                } else {
                    responsePosts = await fetch(`https://api.frytolnacestach.cz/api/posts?showType=list&page=${this.page}&items=${this.perPage}`)
                }
                const postsData = await responsePosts.json() || []
                this.posts = this.posts.concat(postsData)

                //load images
                const imagesPostsIDS = postsData.map(posts => posts.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesPostsIDS.length > 0) {
                    const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPostsIDS.join(',')}`)
                    const imagesData = await responseImages.json() || []
                    this.images = this.images.concat(imagesData)
                
                    // add to postsData to posts
                    if (reset) {
                        // Reset Arrays after change filter
                        this.posts = postsData
                    } else {
                        this.posts = this.posts.concat(postsData)
                    }
                } else {
                    // add to postsData to posts
                    if (reset) {
                        // Reset Arrays after change filter
                        this.posts = postsData
                    } else {
                        this.posts = this.posts.concat(postsData)
                    }
                } 

                //no more items?
                if (postsData.length === 0 || postsData.length < this.perPage) {
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
                this.loadPosts()
            },

            updateHeadline() {
                if (this.filterPlaceName) {
                    this.headlineFilter = this.headline + ' o státu ' + this.filterPlaceName
                } else {
                    this.headlineFilter = this.headline
                }

                if (this.filterTag) {
                    this.headlineFilter = this.headline + ' s tagem ' + this.filterTag
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
                    this.loadPosts()
                }
            },

            // filter set update
            filterUpdate(newValue) {
                this.filterPlace = newValue.id
                this.filterPlaceName = newValue.name
                this.posts = [],
                this.images = [],
                this.isLoading = false
                this.noMoreItems = false
                this.page = 1
                this.perPage = 20
                this.loadPosts(true)
                this.updateHeadline()
            }
        },

        mounted() {
            const route = useRoute()
            this.filterTag = route.query.filterTag
            this.loadPosts()
            this.addScrollListener()
        },

        beforeDestroy() {
            this.removeScrollListener()
        }
    })
</script>