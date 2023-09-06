<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - Hero -->
		<section class="t-section -p0 mb-1 mt-2">
            <div class="t-section__inner">
                <oHero :headline="headline" modifierCSS=" -gray"/>
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Filter -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oFormFilterPlace typePlaceFilterName="Vybrat kontinent" typePlaceFilter="continents" @update="filterUpdate" />
            </div>
        </section>
        <!-- SECTION - Filter END -->

        <!-- SECTION - Time Place list -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oTimePlace :places="placesStates" :images="images" type="stat" />
                <div class="flex flex-center my-4" v-if="!isLoading && !noMoreItems">
                    <span class="a-button-fill -big -green" @click="loadMoreItems">Načíst další položky</span>
                </div>
                <oTimePlace :places="null" :images="null" type="stat" :skeleton=true v-if="isLoading" />
            </div>
        </section>
        <!-- SECTION - Time Place list END -->
    </main>
</template>

<script>
    import oFormFilterPlace from '~/components/organisms/oFormFilterPlace.vue'
    import oHero from '../../components/organisms/oHero.vue'
    import oTimePlace from '~/components/organisms/oTimePlace.vue'

    export default {
        name: 'SvetovyCasIndexPage',

        components: {
            oFormFilterPlace,
            oHero,
            oTimePlace
        },

        data() {
            return {
                images: [],
                placesStates: [],
                isLoading: false,
                noMoreItems: false,
                page: 1,
                perPage: 20,
                filterPlace: '',
                headline: "Kolik hodin je ve světě"
            }
        },

        head: {
            title: 'Kolik hodin je ve světě | Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Kolik hodin je ve světě.' },
                { name: 'keywords', content: `Kolik hodin je ve světě, čas, státy, časová pásma, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Kolik hodin je ve světě | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Kolik hodin je ve světě.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/svetovy-cas` },
                { hid: 'og:type', content: 'website' }  
            ]
        },
        
        async mounted() {
            await this.loadPlaces()
            this.addScrollListener()
        },

        methods: {
            async loadPlaces() {
                //start loading
                this.isLoading = true

                //load places
                const [placesResponse] = await Promise.all([
                    this.$axios.get(`https://api.frytolnacestach.cz/api/places-states?showType=list&idContinent=${this.filterPlace}&page=${this.page}&items=${this.perPage}`)
                ]);
                const { data: placesData } = placesResponse

                //load images
                const imagesPlacesStatesIDS = placesData.map(placeState => placeState.id_image_cover).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesPlacesStatesIDS.length > 0) {
                    const imagesResponse = await this.$axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesStatesIDS.join(',')}`)
                    const { data: imagesData } = imagesResponse
                    this.images = this.images.concat(imagesData)

                    // add to placecesData to placesStates
                    this.placesStates = this.placesStates.concat(placesData)
                } else {
                    // add to placecesData to placesStates
                    this.placesStates = this.placesStates.concat(placesData)
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
                this.filterPlace = newValue
                this.images = []
                this.placesStates = []
                this.isLoading = false
                this.noMoreItems = false
                this.page = 1
                this.perPage = 20
                this.loadPlaces()
            }
        },

        beforeDestroy() {
            this.removeScrollListener()
        }
    }
</script>