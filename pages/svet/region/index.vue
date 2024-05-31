<template>
    <NuxtLayout name="default">
        <main class="t-main -green -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - Hero place type -->
                <section class="t-section py-4">
                    <div class="t-section__inner">
                        <OrganismsHeroPlaceType styleType=" -region" :title="headlineFilter" perex="Prozkoumejte bohatství regionů, která naše planeta nabízí, a ponořte se do rozmanitosti politických i přírodních oblastí. Od malebných koutů s historickým odkazem po dobrodružství ve fascinujících krajinách. Každý region má svůj unikátní příběh, který vypráví o místní kultuře, tradicích a kráse. Zveme vás k objevování těchto fascinujících destinací a k prožívání nezapomenutelných okamžiků, které vám poskytnou pohled do srdce každého regionu." />
                    </div>
                </section>
                <!-- SECTION - Hero place type END -->

                <!-- SECTION - Filter -->
                <section class="t-section -p0 hidden-print">
                    <div class="t-section__inner">
                        <OrganismsFormFilterPlace styleThema=" -green" typePlaceFilterName="Vybrat stát" typePlaceFilter="states" @update="filterUpdate" />
                    </div>
                </section>
                <!-- SECTION - Filter END -->

                <!-- SECTION - Place list -->
                <section class="t-section -p0">
                    <div class="t-section__inner">
                        <OrganismsCoverPlace :places="placesRegions" :placesParent="placesParent" :showPrename="true" :images="images" type="region" />
                        <OrganismsCoverPlace :places="null" :images="null" type="region" :skeleton=true v-if="isLoading" />
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
    export default defineComponent({
        name: 'SvetRegionIndexPage',

        data() {
            return {
                headline: 'Regiony',
                headlineFilter: 'Regiony',
                filterPlace: '',
                filterPlaceName: '',
                images: [],
                placesRegions: [],
                placesParent: [],
                isLoading: false,
                noMoreItems: false,
                page: 1,
                perPage: 20
            }
        },

        setup() {
            let headMeta = reactive({
                title: '',
                description: 'Zjisti si základní informace o regionech. a místech které se v nich nachází za pomocí cestovatelského portálu Frytol na cestách.',
                keywords: 'regiony, informace o regionech, plánuj cestu, cestovatelský portál, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: '',
                ogDescription: 'Zjisti si základní informace o regionech. a místech které se v nich nachází za pomocí cestovatelského portálu Frytol na cestách.',
                ogUrl: `https://www.frytolnacestach.cz/svet/region`,
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

        head() {
            // title
            title = `${this.headlineFilter} | Cestovatelský portál Frytol na cestách`
        },

        async mounted() {
            // Existing Select filter?
            const filterIDstate = this.$route.query.filterIDstate
            if (!filterIDstate) {
                await this.loadPlaces()
            }
            // Call listener for scrolling
            this.addScrollListener()
        },

        methods: {
            async loadPlaces(reset) {
                //start loading
                this.isLoading = true

                // Variable
                let responsePlaces

                //load places
                if (this.filterPlace !== null) {
                    responsePlaces = await fetch(`https://api.frytolnacestach.cz/api/places-regions?showType=list&idState=${this.filterPlace}&page=${this.page}&items=${this.perPage}`)
                } else {
                    responsePlaces = await fetch(`https://api.frytolnacestach.cz/api/places-regions?showType=list&page=${this.page}&items=${this.perPage}`)
                }
                const placesData = await responsePlaces.json()

                //load places parent
                let placesParentIDS = placesData.map(placeRegion => placeRegion.id_state).filter(id => id !== undefined && id !== null && id !== '')
                placesParentIDS = [...new Set(placesParentIDS)]
                const [placesParentResponse] = await Promise.all([
                    await fetch(`https://api.frytolnacestach.cz/api/places-states-array?showType=list&id=${placesParentIDS.join(',')}`)
                ])
                const placesParentData = await placesParentResponse.json()
                this.placesParent = this.placesParent.concat(placesParentData)

                //load images
                const imagesPlacesRegionsIDS = placesData.map(placeRegion => placeRegion.id_image_cover).filter(id => id !== undefined && id !== null && id !== '');
                if (imagesPlacesRegionsIDS.length > 0) {
                    const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesRegionsIDS.join(',')}`);
                    const imagesData = await responseImages.json()
                    this.images = this.images.concat(imagesData)

                    // add to placecesData to placesRegions
                    if (reset) {
                        // Reset Arrays after change filter
                        this.placesRegions = placesData
                    } else {
                        this.placesRegions = this.placesRegions.concat(placesData)
                    }
                } else {
                    // add to placecesData to placesRegions
                    if (reset) {
                        // Reset Arrays after change filter
                        this.placesRegions = placesData
                    } else {
                        this.placesRegions = this.placesRegions.concat(placesData)
                    }
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

            updateHeadline() {
                if (this.filterPlaceName) {
                    this.headlineFilter = this.headline + ' státu ' + this.filterPlaceName
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
                    this.loadPlaces()
                }
            },

            // filter set update
            filterUpdate(newValue) {
                this.filterPlace = newValue.id
                this.filterPlaceName = newValue.name
                this.images = []
                this.placesRegions = []
                this.placesParent = []
                this.isLoading = false
                this.noMoreItems = false
                this.page = 1
                this.perPage = 20
                this.loadPlaces(true)
                this.updateHeadline()
            }
        },

        beforeDestroy() {
            this.removeScrollListener()
        }
    })
</script>