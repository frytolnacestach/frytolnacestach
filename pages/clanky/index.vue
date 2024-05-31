<template>
    <NuxtLayout name="default">
        <main class="t-main -gray -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - Hero -->
                <section class="t-section -p0 mt-2 mb-4">
                    <div class="t-section__inner">
                        <OrganismsHero :headline="headlineFilter" perex="Vítej na našem cestovatelském portálu! Prozkoumej naše články plné tipů a rad o cestování, které ti pomohou objevit nejzajímavější místa na světě. Ponoř se do dobrodružství s našimi autentickými příběhy a praktickými doporučeními, abys mohl/a plánovat své vlastní nezapomenutelné dobrodružství. Užij si každý moment na cestách a objevuj krásy světa s námi!" modifierCSS=" -gray -w640" classCSS=" mt-2" />
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

                <!-- SECTION - ArticlesList -->
                <section class="t-section -p0 py-1 px-2 print-section">
                    <div class="t-section__inner">
                        <OrganismsArticleList :posts="posts" :images="images" styleThemaLoading=" -gray" styleSizeHeadline="h2" />
                        <OrganismsArticleList :posts="null" :images="null" skeletonThema=" -skeleton-gray" skeletonNumber="9" :skeleton=true v-if="isLoading" />
                        <OrganismsNoneContent text="Bohužel zde nejsou žádné články" styleThema=" -green" styleGap=" px-1" v-if="posts && posts.length === 0 && !isLoading" />
                        <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                            <span class="a-button-fill -big -gray" @click="loadMoreItems">Načíst další položky</span>
                        </div>
                    </div>
                </section>
                <!-- SECTION - ArticlesList END -->

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
        name: 'ClankyIndexPage',

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

        setup() {
            let headMeta = reactive({
                title: 'Články | Cestovatelský portál Frytol na cestách',
                description: 'Čti články z různích míst naší krásné planety na cestovatelském portálu Frytol na cestách.',
                keywords: 'Články, novinky, travel hacky, rady, létání, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'Články | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Čti články z různích míst naší krásné planety na cestovatelském portálu Frytol na cestách.',
                ogUrl: `https://www.frytolnacestach.cz/clanky`,
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

                // HEAD
                if (this.posts && this.posts.length > 0) {
                    // Meta
                    this.headMeta.title = `${this.headlineFilter} | Cestovatelský portál Frytol na cestách`
                    this.headMeta.description = `Čti ${this.headlineFilter !== 'Články' ? (this.headlineFilter.replace("Články", "články")  + ' na cestovatelském portálu Frytol na cestách.') : 'články z různích míst naší krásné planety na cestovatelském portálu Frytol na cestách.'}`
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