<template>
    <main class="t-main -green -pt-menu" role="main">
        <div class="t-main__content">
            <section class="t-section print-section">

                <!-- SECTION - Hero food -->
                <section class="t-section py-4">
                    <div class="t-section__inner">
                        <oHero headline="Jídla" perex="Objevuj různorodá a chutná jídla, která můžeš ochutnat po celém světě. Kdekoliv se ocitneš, můžeš se těšit na unikátní kulinářské zážitky a objevovat místní lahůdky. S naším průvodcem po světě gastronomie na stránkách cestovatelského portálu Frytol na cestách. Budeš mít přehled o tom, kde se co jí." modifierCSS=" -green -w640" classCSS=" mt-2" />
                    </div>
                </section>
                <!-- SECTION - Hero food END -->

                <!-- SECTION - cestovatelsky slovnik list -->
                <section class="t-section -p0">
                    <div class="t-section__inner">
                        <oCoverItem :items="foods" :images="images" type="jidlo" />
                        <oCoverItem :items="null" :images="null" type="jidlo" :skeleton=true v-if="isLoading" />
                        <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                            <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                        </div>
                    </div>
                </section>
                <!-- SECTION - cestovatelsky slovnik list END -->
                
            </section>
        </div>
    </main>
</template>

<script>
    import oCoverItem from '~/components/organisms/oCoverItem.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'JidloIndexPage',

        components: {
            oCoverItem,
            oHero
        },

        data() {
            return {
                foods: [],
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
            title = 'Tradiční jídla ve světě | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Jaké jídla se jedí ve světe. Na které kde narazíte a co si kde dát? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.'

            // keywolds
            keywords = 'Jídla, kde se co jí?, světová tradiční jídla, informace o jídlech, plánuj cestu, cestovatelský portál, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/jidlo`

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

        async mounted() {
            await this.loadItems()
            this.addScrollListener()
        },

        methods:{
            async loadItems() {
                //start loading
                this.isLoading = true

                //load foods
                const [foodsResponse] = await Promise.all([
                    this.$axios.get(`https://api.frytolnacestach.cz/api/foods?showType=list&page=${this.page}&items=${this.perPage}`)
                ])
                const { data: foodsData } = foodsResponse

                //load images
                const imagesFoodsIDS = foodsData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesFoodsIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesFoodsIDS.join(',')}`)
                    const { data: imagesData } = imagesResponse
                    this.images = this.images.concat(imagesData)
                
                    // add to placecesData to foods
                    this.foods = this.foods.concat(foodsData)
                } else {
                    // add to placecesData to foods
                    this.foods = this.foods.concat(foodsData)
                } 

                //no more items?
                if (foodsData.length === 0 || foodsData.length < this.perPage) {
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

        beforeDestroy() {
            this.removeScrollListener()
        }
    }
</script>