<template>
    <main class="t-main -gray -pt-menu" role="main">
       
        <!-- SECTION - Hero -->
		<section class="t-section -p0 mb-1 mt-2">
            <div class="t-section__inner">
                <oHero :headline="headline"  modifierCSS=" -gray" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Articles -->
        <section class="t-section -p0 py-1 px-2 print-section">
            <div class="t-section__inner">
                <oArticleList :posts="posts" :images="images" styleThemaLoading=" -gray" />
                <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                    <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                </div>
                <oArticleList :posts="null" :images="null" skeletonThema=" -skeleton-gray" skeletonNumber="9" :skeleton=true v-if="isLoading" />
            </div>
        </section>
        <!-- SECTION - Articles END -->

        <!-- SECTION - Platforms -->
        <section class="t-section -p0 py-1 mt-2 px-2 print-section">
            <div class="t-section__inner">
                <mHeadline title="Platformy kde jsem" styleAlign=" -left" styleGap="mb-1" />
                <oPlatform />
                <div class="flex flex-center mb-4">
                    <aButtonFillFull url="/social" text="Více informací o platformách" styleThema=" -green" target="internal" />
                </div>
            </div>
        </section>
        <!-- SECTION - Platforms END -->
    </main>
</template>

<script>

    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oArticleList from '~/components/organisms/oArticleList.vue'
    import oHero from '../../components/organisms/oHero.vue'
    import oPlatform from '../../components/organisms/oPlatform.vue'

    export default {
        name: 'ClankyIndexPage',

        components: {
            aButtonFillFull,
            mHeadline,
            oArticleList,
            oHero,
            oPlatform
        },

        data() {
            return {
                headline: "Články",
                posts: [],
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
            title = 'Články | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Čti články na cestovatelském portáku Frytol na cestách Ať ti neuniknou žádné novinky o cestování.'

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
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { property: 'og:image', content: ogImage },
                    { hid: 'og:title', content: title },
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
            await this.loadPosts()
            this.addScrollListener()
        },

        methods:{
            async loadPosts() {
                //start loading
                this.isLoading = true

                // Variable
                let postsResponse

                //load posts
                postsResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/posts?showType=list&page=${this.page}&items=${this.perPage}`)
                const { data: postsData } = postsResponse

                //load images
                const imagesPostsIDS = postsData.map(posts => posts.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesPostsIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPostsIDS.join(',')}`)
                    const { data: imagesData } = imagesResponse
                    this.images = this.images.concat(imagesData)
                
                    // add to postsData to posts
                    this.posts = this.posts.concat(postsData)
                } else {
                    // add to postsData to posts
                    this.posts = this.posts.concat(postsData)
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
        },

        beforeDestroy() {
            this.removeScrollListener()
        }
    }
</script>