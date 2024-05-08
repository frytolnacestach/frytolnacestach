<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">
                <section class="t-section print-section">
                    
                    <!-- SECTION - Hero elektrické zásuvky -->
                    <section class="t-section py-4">
                        <div class="t-section__inner">
                            <oHero headline="Elektrické zásuvky" perex="Plánujete cestu mimo střední Evropu a nevíte, jakou redukci pro svá elektronická zařízení si pořídit? Typy zásuvek a používané normy se dozvíte na cestovatelském portálu Frytol na cestách." modifierCSS=" -green -w640" classCSS=" mt-2" />
                        </div>
                    </section>
                    <!-- SECTION - Hero elektrické zásuvky END -->

                    <!-- SECTION - elektrické zásuvky list -->
                    <section class="t-section -p0">
                        <div class="t-section__inner">
                            <oCoverTitleItem :items="wallSockets" :images="images" type="elektricka-zasuvka" v-if="wallSockets && wallSockets.length > 0" />
                            <oCoverTitleItem :items="null" :images="null" type="wall-sockets" :skeleton=true v-if="isLoading" />
                            <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                                <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - elektrické zásuvky list END -->

                </section>
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    import oCoverTitleItem from '~/components/organisms/oCoverTitleItem.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'ElektrickeZasuvkyIndexPage',

        components: {
            oCoverTitleItem,
            oHero
        },

        data() {
            return {
                wallSockets: [],
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
            title = 'Elektrické zásuvky | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Jaké elektrické zásuvky se kde používají? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.'

            // keywolds
            keywords = 'Elektrické zásuvky, výrobky, tradiční výroba, informace o výrobcích, plánuj cestu, cestovatelský portál, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/elektricka-zasuvka`

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

        methods: {
            async loadItems() {
                //start loading
                this.isLoading = true

                //load wall-sockets
                const responseWallSocketsResponse = await fetch(`https://api.frytolnacestach.cz/api/wall-sockets?showType=list&page=${this.page}&items=${this.perPage}`)
                const wallSocketsData = await responseWallSocketsResponse.json() || []
                this.wallSockets = this.wallSockets.concat(wallSocketsData)

                //load images
                const imagesWallSocketsIDS = wallSocketsData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesWallSocketsIDS.length > 0) {
                    const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesWallSocketsIDS.join(',')}`)
                    const imagesData = await responseImages.json() || []
                    this.images = this.images.concat(imagesData)
                }

                //no more items?
                if (wallSocketsData.length === 0 || wallSocketsData.length < this.perPage) {
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
                this.loadItems()
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
                    this.loadItems()
                }
            }
        },

        mounted() {
            this.loadItems()
            this.addScrollListener()
        },

        beforeDestroy() {
            this.removeScrollListener()
        }
    })
</script>