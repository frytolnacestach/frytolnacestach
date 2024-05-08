<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - Hero -->
                <section class="t-section py-4 print-section">
                    <div class="t-section__inner">
                        <oHero :headline="headline" perex="Připravte se na světové dobrodružství přesně podle svého rytmu! Náš cestovatelský portál vám přináší aktuální čas a časový posun v různých zemích, abyste byli vždycky v synchronizaci s časem." modifierCSS=" -green -w640" classCSS=" mt-2"/>
                    </div>
                </section>
                <!-- SECTION - Hero END -->

                <!-- SECTION - Filter -->
                <section class="t-section -p0 hidden-print">
                    <div class="t-section__inner">
                        <oFormFilterPlace styleThema=" -green" typePlaceFilterName="Vybrat kontinent" typePlaceFilter="continents" @update="filterUpdate" />
                    </div>
                </section>
                <!-- SECTION - Filter END -->

                <!-- SECTION - Time Place list -->
                <section class="t-section -p0 print-section">
                    <div class="t-section__inner">
                        <oTimePlace :places="placesStates" :images="images" type="stat" />
                        <oTimePlace :places="null" :images="null" type="stat" :skeleton=true v-if="isLoading" />
                        <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                            <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                        </div>
                    </div>
                </section>
                <!-- SECTION - Time Place list END -->

            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    import oFormFilterPlace from '~/components/organisms/oFormFilterPlace.vue'
    import oHero from '../../components/organisms/oHero.vue'
    import oTimePlace from '~/components/organisms/oTimePlace.vue'

    export default defineComponent({
        name: 'SvetovyCasIndexPage',

        components: {
            oFormFilterPlace,
            oHero,
            oTimePlace
        },

        data() {
            return {
                headline: "Kolik hodin je ve světě",
                filterPlace: null,
                images: [],
                placesStates: [],
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
            title = 'Kolik hodin je ve světě | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Kolik hodin je ve světě.'

            // keywolds
            keywords = 'Kolik hodin je ve světě, čas, státy, časová pásma, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/svetovy-cas`

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
            async loadPlaces(reset) {
                //start loading
                this.isLoading = true

                // Variable
                let responsePlaces

                //load places
                if (this.filterPlace !== null) {
                    responsePlaces = await fetch(`https://api.frytolnacestach.cz/api/places-states?showType=list&idContinent=${this.filterPlace}&page=${this.page}&items=${this.perPage}`)
                } else {
                    responsePlaces = await fetch(`https://api.frytolnacestach.cz/api/places-states?showType=list&page=${this.page}&items=${this.perPage}`)
                }
                const placesData = await responsePlaces.json()
                if (reset) {
                    // Reset Arrays after change filter
                    this.placesStates = placesData
                } else {
                    this.placesStates = this.placesStates.concat(placesData)
                }

                //load images
                const imagesPlacesStatesIDS = placesData.map(placeState => placeState.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesPlacesStatesIDS.length > 0) {
                    const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesIDS.join(',')}`)
                    const imagesData = await responseImages.json()
                    this.images = this.images.concat(imagesData)
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
                    return;
                }
                // loading more items
                this.page++
                this.loadPlaces()
            },

            handleScroll() {
                //no further loading can occur while loading
                if (this.isLoading || this.noMoreItems) {
                    return;
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

            // filter set update
            filterUpdate(newValue) {
                this.filterPlace = newValue.id
                this.images = []
                this.placesStates = []
                this.isLoading = false
                this.noMoreItems = false
                this.page = 1
                this.perPage = 20
                this.loadPlaces(true)
            }
        },

        mounted() {
            const filterIDstate = this.$route.query.filterIDcontinent
            if (!filterIDstate) {
                this.loadPlaces()
            }
            this.addScrollListener()
        },

        beforeDestroy() {
            this.removeScrollListener()
        }
    })
</script>