<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - Hero place type -->
        <section class="t-section py-4">
            <div class="t-section__inner">
                <oHeroPlaceType styleType=" -city" :title="headlineFilter" perex="Podle velmi nepřesných zdrojů je na Zemi asi 3 a půl milionu obcí. My jich tu máme přibližně 2500." />
            </div>
        </section>
        <!-- SECTION - Hero place type END -->

        <!-- SECTION - Filter -->
        <section class="t-section -p0 hidden-print">
            <div class="t-section__inner">
                <oFormFilterPlace typePlaceFilterName="Vybrat stát" typePlaceFilter="states" @update="filterUpdate" />
            </div>
        </section>
        <!-- SECTION - Filter END -->

        <!-- SECTION - Place list -->
        <section class="t-section -bg-world -p0">
            <div class="t-section__inner">
                <oCoverPlace :places="placesCities" :placesParent="placesParent" :showPrename="true" :images="images" type="mesto" />
                <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                    <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                </div>
                <oCoverPlace :places="null" :images="null" type="mesto" :skeleton=true v-if="isLoading" />
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
        name: 'SvetMestoIndexPage',

        components: {
            oCoverPlace,
            oFormFilterPlace,
            oHeroPlaceType
        },

        data() {
            return {
                headline: 'Města',
                headlineFilter: 'Města',
                filterPlace: null,
                filterPlaceName: '',
                images: [],
                placesCities: [],
                placesParent: [],
                isLoading: false,
                noMoreItems: false,
                page: 1,
                perPage: 20,
                filterPlace: ''
            }
        },

        head() {
            let title = `${this.headlineFilter} | Cestovatelský portál Frytol na cestách`

            return {
                title,
                meta: [
                    { hid: 'description', name: 'description', content: 'Objevuj největší a nejznámější města světa na cestovatelské portálu Frytolem na cestách. Naplánuj si ideální cestu.' },
                    { name: 'keywords', content: `města, největší města, nejznámější města, informace o městech, plánuj cestu, cestovatelský portál, cestování, svět` },
                    { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                    { hid: 'og:title', content: title },
                    { hid: 'og:description', content: 'Objevuj největší a nejznámější města světa na cestovatelské portálu Frytolem na cestách. Naplánuj si ideální cestu.' },
                    { hid: 'og:url', content: `${process.env.baseUrl}/svet/mesto` },
                    { hid: 'og:type', content: 'website' }  
                ]
            }
        },

        async mounted() {
            const filterIDstate = this.$route.query.filterIDstate
            if (!filterIDstate) {
                await this.loadPlaces()
            }
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
                    placesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/places-cities?showType=list&idState=${this.filterPlace}&page=${this.page}&items=${this.perPage}`)
                } else {
                    placesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/places-cities?showType=list&page=${this.page}&items=${this.perPage}`)
                }
                const { data: placesData } = placesResponse

                //load places parent
                let placesParentIDS = placesData.map(placeCity => placeCity.id_state).filter(id => id !== undefined && id !== null && id !== '')
                placesParentIDS = [...new Set(placesParentIDS)]
                const [placesParentResponse] = await Promise.all([
                    this.$axios.get(`https://api.frytolnacestach.cz/api/places-states-array?showType=list&id=${placesParentIDS.join(',')}`)
                ])
                const { data: placesParentData } = placesParentResponse;

                this.placesParent = this.placesParent.concat(placesParentData);

                //load images
                const imagesPlacesCitiesIDS = placesData.map(placeCity => placeCity.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesPlacesCitiesIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesCitiesIDS.join(',')}`)
                    const { data: imagesData } = imagesResponse
                    this.images = this.images.concat(imagesData)

                    // add to placecesData to placesCities
                    if (reset) {
                        // Reset Arrays after change filter
                        this.placesCities = placesData
                    } else {
                        this.placesCities = this.placesCities.concat(placesData)
                    }
                } else {
                    // add to placecesData to placesCities
                    if (reset) {
                        // Reset Arrays after change filter
                        this.placesCities = placesData
                    } else {
                        this.placesCities = this.placesCities.concat(placesData)
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
                this.placesCities = []
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