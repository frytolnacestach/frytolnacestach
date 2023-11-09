<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonoCoverPlaceVisited styleThema=" -skeleton-blue" v-if="skeleton" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="places !== null && places.length !== 0 && !skeleton">
            <div class="o-cover-place-visited">
                <div class="o-cover-place-visited__outer">
                    <div class="o-cover-place-visited__items">
                        <div v-for="place in places" :key="place.id" class="o-cover-place-visited__item">
                            <div class="o-cover-place-visited__content">
                                <div class="o-cover-place-visited__image loading-image -blue">
                                    <div v-if="images && images.find(image => image.id === place.id_image_cover)" class="o-cover-place-visited__image-lazyload">
                                        <img class="o-cover-place-visited__image-file lazyload-file"
                                            data-sizes="(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 176px, (max-width: 459px) 206px, (max-width: 575px) 264px, (max-width: 767px) 236px, (max-width: 991px) 232px, (max-width: 1219px) 164px, (max-width: 1399px) 200px, 304px"
                                            :data-srcset="`
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-166.webp 160w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-186.webp 172w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-186.webp 176w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-210.webp 206w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-274.webp 264w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-240.webp 236w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-240.webp 232w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-166.webp 164w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-210.webp 200w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-306.webp 304w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-332-2x.webp 320w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-372-2x.webp 344w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-372-2x.webp 352w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-420-2x.webp 412w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-548-2x.webp 528w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-480-2x.webp 472w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-480-2x.webp 464w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-332-2x.webp 328w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-420-2x.webp 400w,
                                                https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + 's-' + images.find(image => image.id === place.id_image_cover).name}-612-2x.webp 608w
                                                `"
                                            :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name}.webp`"
                                            :alt="place.name"
                                            v-lazy>
                                    </div>
                                    <div v-else class="o-cover-place-visited__image-lazyload">
                                        <img class="o-cover-place-visited__image-file lazyload-file"
                                            data-sizes="(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 176px, (max-width: 459px) 206px, (max-width: 575px) 264px, (max-width: 767px) 236px, (max-width: 991px) 232px, (max-width: 1219px) 164px, (max-width: 1399px) 200px, 304px"
                                            :data-srcset="`
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-166.webp 160w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 176w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-210.webp 206w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 264w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 236w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 232w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-166.webp 164w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-210.webp 200w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-306.webp 304w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-332-2x.webp 320w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 352w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-420-2x.webp 412w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 528w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 472w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 464w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-332-2x.webp 328w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-420-2x.webp 400w,
                                                https://image.frytolnacestach.cz/storage/_default/s-hero-612-2x.webp 608w
                                                `"
                                            :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                            :alt="place.name"
                                            v-lazy>
                                    </div>
                                </div>
                                <h2 class="o-cover-place-visited__name">
                                    {{ place.name }}
                                </h2>
                                <NuxtLink class="o-cover-place-visited__link" :to="`/svet/${type}/${place.slug}`" :aria-label="`Čti více o místě ${place.name}`"></NuxtLink>
                                <mButtonPlaceAddVisited :placeID="place.id" :placeType="place.type_place" v-if="account === 'login' && status === 2" @remove-place="showRemoveNewPlaceForm" />
                                <mButtonPlaceRemove :placeID="place.id" :placeType="place.type_place" v-if="account === 'login'" @remove-place="showRemoveNewPlaceForm" />
                            </div>
                        </div>
                        <mButtonPlaceAdd type="next" v-if="account === 'login' && places && Array.isArray(places) && places.length !== 0" @add-place-clicked="showAddPlaceForm" />
                    </div>
                </div>
            </div>
        </client-only>
        <client-only v-if="places && Array.isArray(places) && places.length === 0 && !skeleton">
            <p v-if="account === 'other'">
                Ještě tu žádné místo nemám.
            </p>
            <p v-else>
                Nemáš tu žádné místo. Co takhle projít <nuxt-link to="/svet">svět</nuxt-link> a přidat sem místa?
            </p>
        </client-only>
        <!-- client END -->
        <mButtonPlaceAdd type="first" v-if="account === 'login' && places && Array.isArray(places) && places.length === 0 && !skeleton" @add-place-clicked="showAddPlaceForm" />
        <oFormPlaceVisitedAdd :status="status" :type="type" :visitedPlace="places" v-if="showPlaceForm && account === 'login'" @add-place="showAddNewPlaceForm" />
    </section>
</template>

<script>
    import skeletonoCoverPlaceVisited from '~/components/skeleton/skeletonoCoverPlaceVisited.vue'
    import mButtonPlaceAdd from '~/components/molecules/mButtonPlaceAdd.vue'
    import mButtonPlaceAddVisited from '~/components/molecules/mButtonPlaceAddVisited.vue'
    import mButtonPlaceRemove from '~/components/molecules/mButtonPlaceRemove.vue'
    import oFormPlaceVisitedAdd from '~/components/organisms/oFormPlaceVisitedAdd.vue'

    export default {
        name: 'OrganismsoCoverPlaceVisitedComponent',

        components: {
            skeletonoCoverPlaceVisited,
            mButtonPlaceAdd,
            mButtonPlaceAddVisited,
            mButtonPlaceRemove,
            oFormPlaceVisitedAdd
        },

        props: {
            loadingNecessaryData: {
                type: Boolean,
                required: true
            },
            placesID: {
                type: Array,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            account: {
                type: String,
                required: true
            },
            status: {
                type: Number,
                required: true
            }
        },

        data() {
            return {
                places: [],
                newPlace: null,
                images: [],
                showPlaceForm: false,
                newPlaceID: null,
                removePlaceID: null,
                skeleton: true
            }
        },

        watch: {
            placesID: {
                immediate: true,
                handler(newVal, oldVal) {
                    if (newVal.length > 0 && (newVal !== oldVal || !this.places) && this.loadingNecessaryData === false ) {
                        this.loadData()
                    }
                }
            },

            loadingNecessaryData(newVal, oldVal) {
                if (!newVal && this.placesID.length === 0) {
                    this.places = []
                }
            }
        },

        methods: {
            async loadData() {
                try {
                    let places = []

                    if (this.type === "kontinent") {
                        places = this.placesID.length > 0 ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-continents-array?showType=list&id=${this.placesID.join(',')}`) : []
                    } else if (this.type === "stat") {
                        places = this.placesID.length > 0 ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-states-array?showType=list&id=${this.placesID.join(',')}`) : []
                    } else if (this.type === "mesto") {
                        places = this.placesID.length > 0 ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-cities-array?showType=list&id=${this.placesID.join(',')}`) : []
                    } else if (this.type === "region") {
                        places = this.placesID.length > 0 ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-regions-array?showType=list&id=${this.placesID.join(',')}`) : []
                    } else if (this.type === "misto") {
                        places = this.placesID.length > 0 ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-spots-array?showType=list&id=${this.placesID.join(',')}`) : []
                    }

                    const imagesPlacesID = places.map(place => place.id_image_cover).filter(id => id !== null && id !== '')
                    const images = imagesPlacesID.length > 0 ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesID.join(',')}`) : []

                    this.places = places
                    this.images = images
                    this.skeleton = false
                } catch (error) {
                    console.log(`API ERROR - VYPIS NAVŠTÍVIL JSEM/CHCI NAVŠTÍVIT`)
                    console.error(error)
                }
            },

            async loadNewPlace() {
                try {
                    let newPlace = []

                    if (this.type === "kontinent") {
                        newPlace = this.newPlaceID !== null ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-continents-array?showType=list&id=${this.newPlaceID}`) : []
                    } else if (this.type === "stat") {
                        newPlace = this.newPlaceID !== null ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-states-array?showType=list&id=${this.newPlaceID}`) : []
                    } else if (this.type === "mesto") {
                        newPlace = this.newPlaceID !== null ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-cities-array?showType=list&id=${this.newPlaceID}`) : []
                    } else if (this.type === "region") {
                        newPlace = this.newPlaceID !== null ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-regions-array?showType=list&id=${this.newPlaceID}`) : []
                    } else if (this.type === "misto") {
                        newPlace = this.newPlaceID !== null ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-spots-array?showType=list&id=${this.newPlaceID}`) : []
                    }

                    const imagesPlacesID = newPlace.map(place => place.id_image_cover).filter(id => id !== null && id !== '')
                    const newImage = imagesPlacesID.length > 0 ? await this.$axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesID.join(',')}`) : []

                    this.places = [...this.places, ...newPlace]
                    this.images = [...this.images, ...newImage]
                } catch (error) {
                    console.log(`API ERROR - VYPIS NOVÉHO NAVŠTÍVENÉHO MÍSTA`)
                    console.error(error)
                }
            },

            async removePlace() {
                // Inxec položky k vymazání
                const indexToRemove = this.places.findIndex(place => place.id === this.removePlaceID)

                // Vymazaní položky z pole
                if (indexToRemove !== -1) {
                    this.places.splice(indexToRemove, 1)
                }
            },

            // Add Place
            showAddPlaceForm() {
                this.showPlaceForm = true
            },

            showAddNewPlaceForm(id) {
                this.newPlaceID = id

                this.loadNewPlace()
            },

            // Remove place
            showRemoveNewPlaceForm(id) {
                this.removePlaceID = id

                this.removePlace()
            }
        }
    }
</script>