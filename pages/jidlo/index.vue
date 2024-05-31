<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">
                <section class="t-section print-section">

                    <!-- SECTION - Hero food -->
                    <section class="t-section py-4">
                        <div class="t-section__inner">
                            <OrganismsHero headline="Jídla" perex="Objevuj různorodá a chutná jídla, která můžeš ochutnat po celém světě. Kdekoliv se ocitneš, můžeš se těšit na unikátní kulinářské zážitky a objevovat místní lahůdky. S naším průvodcem po světě gastronomie na stránkách cestovatelského portálu Frytol na cestách. Budeš mít přehled o tom, kde se co jí." modifierCSS=" -green -w640" classCSS=" mt-2" />
                        </div>
                    </section>
                    <!-- SECTION - Hero food END -->

                    <!-- SECTION - cestovatelsky slovnik list -->
                    <section class="t-section -p0">
                        <div class="t-section__inner">
                            <OrganismsCoverItem :items="foods" :images="images" type="jidlo" v-if="foods && foods.length > 0" />
                            <OrganismsCoverItem :items="[]" :images="[]" type="jidlo" :skeleton=true v-if="isLoading" />
                            <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                                <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                            </div>
                        </div>
                    </section>
                    <!-- SECTION - cestovatelsky slovnik list END -->
                    
                </section>
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    export default {
        name: 'JidloIndexPage',

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

        setup() {
            let headMeta = reactive({
                title: 'Tradiční jídla ve světě | Cestovatelský portál Frytol na cestách',
                description: 'Jaké jídla se jedí ve světe. Na které kde narazíte a co si kde dát? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.',
                keywords: 'Jídla, kde se co jí?, světová tradiční jídla, informace o jídlech, plánuj cestu, cestovatelský portál, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'Tradiční jídla ve světě | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Jaké jídla se jedí ve světe. Na které kde narazíte a co si kde dát? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.',
                ogUrl: `https://www.frytolnacestach.cz/jidlo`,
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

        methods: {
            async loadItems() {
                //start loading
                this.isLoading = true

                //load foods
                const responseFoods = await fetch(`https://api.frytolnacestach.cz/api/foods?showType=list&page=${this.page}&items=${this.perPage}`)
                const foodsData = await responseFoods.json() || []
                this.foods = this.foods.concat(foodsData)

                //load images
                const imagesFoodsIDS = foodsData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesFoodsIDS.length > 0) {
                    const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesFoodsIDS.join(',')}`)
                    const imagesData = await responseImages.json() || []
                    this.images = this.images.concat(imagesData)
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

        mounted() {
            this.loadItems()
            this.addScrollListener()
        },
        
        beforeDestroy() {
            this.removeScrollListener()
        }
    }
</script>