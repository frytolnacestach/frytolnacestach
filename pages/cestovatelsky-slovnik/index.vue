<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">
                <section class="t-section print-section">

                    <!-- SECTION - Hero cestovatelsky slovnik -->
                    <section class="t-section py-4">
                        <div class="t-section__inner">
                            <oHero headline="Cestovatelský slovník" perex="Procházej cestovatelský slovník a rozšiřuj svůj cestovatelský slovníček o unikátní výrazy spojené s cestováním. Nabízíme ti pohled do jazyka cestování, abys lépe porozuměl(a) specifickým termínům a zkratkám." modifierCSS=" -green -w640" classCSS=" mt-2" />
                        </div>
                    </section>
                    <!-- SECTION - Hero cestovatelsky slovnik END -->

                    <!-- SECTION - cestovatelsky slovnik list -->
                    <section class="t-section -p0">
                        <div class="t-section__inner">
                            <oCoverItem :items="travelDictionaries" :images="images" type="cestovatelsky-slovnik" v-if="travelDictionaries && travelDictionaries.length > 0"/>
                            <oCoverItem :items="[]" :images="[]" type="cestovatelsky-slovnik" :skeleton=true v-if="isLoading" />
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
    import oCoverItem from '~/components/organisms/oCoverItem.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'CestovatelskySlovnikIndexPage',

        components: {
            oCoverItem,
            oHero
        },

        data() {
            return {
                travelDictionaries: [],
                images: [],
                isLoading: false,
                noMoreItems: false,
                page: 1,
                perPage: 20
            }
        },

        setup() {
            let headMeta = reactive({
                title: 'Cestovatelský slovník | Cestovatelský portál Frytol na cestách',
                description: 'Najdeš zde spoustu výrazů a zkratek které se ti mohou hodit při tvém cestování.',
                keywords: 'Cestovatelský slovník, travel hack, zkratky, plánuj cestu, cestovatelský portál, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'Cestovatelský slovník | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Najdeš zde spoustu výrazů a zkratek které se ti mohou hodit při tvém cestování.',
                ogUrl: `https://www.frytolnacestach.cz/cestovatelsky-slovnik`,
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
                this.isLoading = true;

                //load travelDictionaries
                const responseTravelDictionaries = await fetch(`https://api.frytolnacestach.cz/api/travel-dictionaries?showType=list&page=${this.page}&items=${this.perPage}`)
                const travelDictionariesData = await responseTravelDictionaries.json() || []
                this.travelDictionaries = this.travelDictionaries.concat(travelDictionariesData)

                //load images
                const imagesTravelDictionariesIDS  = travelDictionariesData.map(placeSpot => placeSpot.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesTravelDictionariesIDS.length > 0) {
                    const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesTravelDictionariesIDS.join(',')}`)
                    const imagesData = await responseImages.json() || []
                    this.images = this.images.concat(imagesData)
                }

                //no more items?
                if (travelDictionariesData.length === 0 || travelDictionariesData.length < this.perPage) {
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