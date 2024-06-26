<template>
    <main class="t-main -green -pt-menu" role="main">
        <div class="t-main__content">

            <!-- SECTION - Hero place type -->
            <section class="t-section py-4">
                <div class="t-section__inner">
                    <oHeroPlaceType styleType=" -region" :title="headlineFilter" perex="Prozkoumejte bohatství regionů, která naše planeta nabízí, a ponořte se do rozmanitosti politických i přírodních oblastí. Od malebných koutů s historickým odkazem po dobrodružství ve fascinujících krajinách. Každý region má svůj unikátní příběh, který vypráví o místní kultuře, tradicích a kráse. Zveme vás k objevování těchto fascinujících destinací a k prožívání nezapomenutelných okamžiků, které vám poskytnou pohled do srdce každého regionu." />
                </div>
            </section>
            <!-- SECTION - Hero place type END -->

            <!-- SECTION - Filter -->
            <section class="t-section -p0 hidden-print">
                <div class="t-section__inner">
                    <oFormFilterPlace styleThema=" -green" typePlaceFilterName="Vybrat stát" typePlaceFilter="states" @update="filterUpdate" />
                </div>
            </section>
            <!-- SECTION - Filter END -->

            <!-- SECTION - Place list -->
            <section class="t-section -p0">
                <div class="t-section__inner">
                    <oCoverPlace :places="placesRegions" :placesParent="placesParent" :showPrename="true" :images="images" type="region" />
                    <oCoverPlace :places="null" :images="null" type="region" :skeleton=true v-if="isLoading" />
                    <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                        <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                    </div>
                </div>
            </section>
            <!-- SECTION - Place list END -->
            
        </div>
    </main>
</template>

<script>
    import oCoverPlace from '~/components/organisms/oCoverPlace.vue'
    import oFormFilterPlace from '~/components/organisms/oFormFilterPlace.vue'
    import oHeroPlaceType from '~/components/organisms/oHeroPlaceType.vue'

    export default {
        name: 'SvetRegionIndexPage',

        components: {
            oCoverPlace,
            oFormFilterPlace,
            oHeroPlaceType
        },

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
            description = 'Zjisti si základní informace o regionech. a místech které se v nich nachází za pomocí cestovatelského portálu Frytol na cestách.'

            // keywolds
            keywords = 'regiony, informace o regionech, plánuj cestu, cestovatelský portál, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/svet/region`

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
            // Existing Select filter?
            const filterIDstate = this.$route.query.filterIDstate
            if (!filterIDstate) {
                await this.loadPlaces()
            }
            // Call listener for scrolling
            this.addScrollListener()
        },

        methods:{
            async loadPlaces(reset) {
                //start loading
                this.isLoading = true

                // Variable
                let placesResponse

                //load places
                if (this.filterPlace !== null) {
                    placesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/places-regions?showType=list&idState=${this.filterPlace}&page=${this.page}&items=${this.perPage}`)
                } else {
                    placesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/places-regions?showType=list&page=${this.page}&items=${this.perPage}`)
                }
                const { data: placesData } = placesResponse

                //load places parent
                let placesParentIDS = placesData.map(placeRegion => placeRegion.id_state).filter(id => id !== undefined && id !== null && id !== '')
                placesParentIDS = [...new Set(placesParentIDS)]
                const [placesParentResponse] = await Promise.all([
                    this.$axios.get(`https://api.frytolnacestach.cz/api/places-states-array?showType=list&id=${placesParentIDS.join(',')}`)
                ])
                const { data: placesParentData } = placesParentResponse

                this.placesParent = this.placesParent.concat(placesParentData)

                //load images
                const imagesPlacesRegionsIDS = placesData.map(placeRegion => placeRegion.id_image_cover).filter(id => id !== undefined && id !== null && id !== '');
                if (imagesPlacesRegionsIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesRegionsIDS.join(',')}`);
                    const { data: imagesData } = imagesResponse
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
    }
</script>