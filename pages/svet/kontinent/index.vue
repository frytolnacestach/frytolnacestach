<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - Hero place type -->
                <section class="t-section py-4">
                    <div class="t-section__inner">
                        <oHeroPlaceType styleType=" -continent" title="Kontinenty" perex="Zveme tě na neuvěřitelnou cestu kolem světa, abys prozkoumal všech 7 kontinentů naší planety. Objevuj fascinující kultury, přírodní divy a tajemná místa včetně odlehlé Antarktidy. Připrav se na dobrodružství, které tě zavede do různých koutů světa a otevře ti dveře k nezapomenutelným zážitkům." />
                    </div>
                </section>
                <!-- SECTION - Hero place type END -->

                <!-- SECTION - Place list -->
                <section class="t-section -p0">
                    <div class="t-section__inner">
                        <oCoverPlace :places="placesContinents" :images="images" type="kontinent" />
                        <oCoverPlace :places="null" :images="null" type="kontinent" :skeleton=true v-if="isLoading" />
                        <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                            <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                        </div>
                    </div>
                </section>
                <!-- SECTION - Place list END -->
                
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    import oCoverPlace from '~/components/organisms/oCoverPlace.vue'
    import oHeroPlaceType from '~/components/organisms/oHeroPlaceType.vue'

    export default defineComponent({
        name: 'SvetKontinentIndexPage',

        components: {
            oCoverPlace,
            oHeroPlaceType
        },

        data() {
            return {
                images: [],
                placesContinents: [],
                isLoading: false,
                noMoreItems: false,
                page: 1,
                perPage: 20
            }
        },

        setup() {
            let headMeta = reactive({
                title: 'Kontinenty | Cestovatelský portál Frytol na cestách',
                description: 'Zjisti si základní informace o kontinentech. a státech které se na nich nachází za pomocí cestovatelského portálu Frytol na cestách.',
                keywords: 'kontinenty, informace o městech, plánuj cestu, cestovatelský portál, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'Kontinenty | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Zjisti si základní informace o kontinentech. a státech které se na nich nachází za pomocí cestovatelského portálu Frytol na cestách.',
                ogUrl: `https://www.frytolnacestach.cz/svet/kontinent`,
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

        async mounted() {
            await this.loadPlaces()
            this.addScrollListener()
        },

        methods: {
            async loadPlaces() {
                //start loading
                this.isLoading = true

                // Variable
                let responsePlaces

                //load places
                responsePlaces = await fetch(`https://api.frytolnacestach.cz/api/places-continents?showType=list&page=${this.page}&items=${this.perPage}`)
                const placesData = await responsePlaces.json()

                //load images
                const imagesPlacesContinentsIDS = placesData.map(placeContinent => placeContinent.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesPlacesContinentsIDS.length > 0) {
                    const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesContinentsIDS.join(',')}`)
                    const imagesData = await responseImages.json()
                    this.images = this.images.concat(imagesData)
                
                    // add to placecesData to placesContinent
                    this.placesContinents = this.placesContinents.concat(placesData)
                } else {
                    // add to placecesData to placesContinent
                    this.placesContinents = this.placesContinents.concat(placesData)
                } 

                //no more items?
                if (placesData.length === 0 || placesData.length < this.perPage) {
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
                this.loadPlaces()
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
                    this.loadPlaces()
                }
            },
        },

        beforeDestroy() {
            this.removeScrollListener()
        }
    })
</script>