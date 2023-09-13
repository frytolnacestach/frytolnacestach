<template>
    <main class="t-main -green -pt-menu" role="main">
        
        <!-- SECTION - Hero place type -->
        <section class="t-section py-4">
            <div class="t-section__inner">
                <oHeroPlaceType styleType=" -state" :title="headlineFilter" perex="Najdete zde nejen 190 oficiálních států, ale také mnoho ostrovních a městských států, celkem 249 území, která stojí za návštěvu a objevování." />
            </div>
        </section>
        <!-- SECTION - Hero place type END -->

        <!-- SECTION - Filter -->
        <section class="t-section -p0 hidden-print">
            <div class="t-section__inner">
                <oFormFilterPlace typePlaceFilterName="Vybrat kontinent" typePlaceFilter="continents" @update="filterUpdate" />
            </div>
        </section>
        <!-- SECTION - Filter END -->

        <!-- SECTION - Place list -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oCoverPlace :places="placesStates" :images="images" type="stat" />
                <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                    <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                </div>
                <oCoverPlace :places="null" :images="null" type="stat" :skeleton=true v-if="isLoading" />
            </div>
        </section>
        <!-- SECTION - Place list END -->

    </main>
</template>

<script>
    import oCoverPlace from '~/components/organisms/oCoverPlace.vue'
    import oFormFilterPlace from '~/components/organisms/oFormFilterPlace.vue'
    import oHeroPlaceType from '~/components/organisms/oHeroPlaceType.vue'

    export default {
        name: 'SvetStatIndexPage',

        components: {
            oCoverPlace,
            oFormFilterPlace,
            oHeroPlaceType
        },

        data() {
            return {
                headline: 'Státy',
                headlineFilter: 'Státy',
                filterPlace: null,
                filterPlaceName: '',
                images: [],
                placesStates: [],
                isLoading: false,
                noMoreItems: false,
                page: 1,
                perPage: 20
            }
        },

        head() {
            let title = `${this.headlineFilter} | Cestovatelský portál Frytol na cestách`

            return {
                title,
                meta: [
                    { hid: 'description', name: 'description', content: 'Objevuj všechny státy světa na cestovatelské portálu Frytolem na cestách. Naplánuj si ideální cestu.' },
                    { name: 'keywords', content: `státy, ostrovy, území, plánuj cestu, cestovatelský portál, cestování, svět` },
                    { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                    { hid: 'og:title', content: title },
                    { hid: 'og:description', content: 'Objevuj všechny státy světa na cestovatelské portálu Frytolem na cestách. Naplánuj si ideální cestu.' },
                    { hid: 'og:url', content: `${process.env.baseUrl}/svet/stat` },
                    { hid: 'og:type', content: 'website' }  
                ]
            }
        },
        async mounted() {
            const filterIDstate = this.$route.query.filterIDcontinent
            if (!filterIDstate) {
                await this.loadPlaces()
            }
            this.addScrollListener()
        },

        methods: {
            async loadPlaces(reset) {
                //start loading
                this.isLoading = true

                // Variable
                let placesResponse

                //load places
                if (this.filterPlace !== null) {
                    placesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/places-states?showType=list&idContinent=${this.filterPlace}&page=${this.page}&items=${this.perPage}`)
                } else {
                    placesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/places-states?showType=list&page=${this.page}&items=${this.perPage}`)
                }
                const { data: placesData } = placesResponse

                //load images
                const imagesPlacesStatesIDS = placesData.map(placeState => placeState.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesPlacesStatesIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesIDS.join(',')}`)
                    const { data: imagesData } = imagesResponse
                    this.images = this.images.concat(imagesData)

                    // add to placecesData to placesStates
                    if (reset) {
                        // Reset Arrays after change filter
                        this.placesStates = placesData
                    } else {
                        this.placesStates = this.placesStates.concat(placesData)
                    }
                } else {
                    // add to placecesData to placesStates
                    if (reset) {
                        // Reset Arrays after change filter
                        this.placesStates = placesData
                    } else {
                        this.placesStates = this.placesStates.concat(placesData)
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
                    return;
                }
                // loading more items
                this.page++
                this.loadPlaces()
            },

            updateHeadline() {
                if (this.filterPlaceName) {
                    this.headlineFilter = this.headline + ' kontinentu ' + this.filterPlaceName
                } else {
                    this.headlineFilter = this.headline
                }
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
                this.filterPlaceName = newValue.name
                this.images = []
                this.placesStates = []
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