<template>
    <section class="t-component-skeleton">
        
        <!-- SHOW - skeleton -->
        <SkeletonOrganismsCoverPlaceVisited styleThema=" -skeleton-blue" v-if="skeleton" />
        <!-- skeleton END -->

        <!-- SHOW - client -->
        <client-only v-if="places !== null && places.length !== 0 && !skeleton">
            <div class="o-cover-place-visited">
                <div class="o-cover-place-visited__outer">
                    <div class="o-cover-place-visited__items">
                        <div v-for="place in places" :key="place.id" class="o-cover-place-visited__item">
                            <div class="o-cover-place-visited__content">
                                <div class="o-cover-place-visited__image loading-image -blue">
                                    <div v-if="images && images.find(image => image.id === place.id_image_cover)" class="o-cover-place-visited__image-lazyload">
                                        <AtomsImage 
                                            :alt="place.name ? place.name : 'Úvodní obrázek'" 
                                            :author="images.find(image => image.id === place.id_image_cover).author"
                                            :lazy=true
                                            :imageSource="images.find(image => image.id === place.id_image_cover).source"
                                            :imageName="images.find(image => image.id === place.id_image_cover).name"
                                            :sizes=imageSizes
                                            :srcSet=imageSizesMedia
                                            cssClassComponent="o-cover-title-item"
                                        />
                                    </div>
                                    <div v-else class="o-cover-place-visited__image-lazyload">
                                        <AtomsImage 
                                            :alt="place.name ? place.name : 'Úvodní obrázek'" 
                                            :lazy=true
                                            imageSource="/_default/"
                                            imageName="no-image"
                                            :sizes=imageSizes
                                            :srcSet=imageSizesMedia
                                            cssClassComponent="o-cover-title-item"
                                        />
                                    </div>
                                </div>
                                <h2 class="o-cover-place-visited__name">
                                    {{ place.name }}
                                </h2>
                                <NuxtLink class="o-cover-place-visited__link" :to="`/svet/${type}/${place.slug}`" :aria-label="`Čti více o místě ${place.name}`"></NuxtLink>
                                <MoleculesButtonPlaceAddVisited :account="account" :placeID="place.id" :placeType="place.type_place" v-if="typeAccount === 'login' && status === 2" @remove-place="showRemoveNewPlaceForm" />
                                <MoleculesButtonPlaceRemove :account="account" :placeID="place.id" :placeType="place.type_place" v-if="typeAccount === 'login'" @remove-place="showRemoveNewPlaceForm" />
                            </div>
                        </div>
                        <MoleculesButtonPlaceAdd type="next" v-if="typeAccount === 'login' && places && Array.isArray(places) && places.length !== 0" @add-place-clicked="showAddPlaceForm" />
                    </div>
                </div>
            </div>
        </client-only>
        <client-only v-if="places && Array.isArray(places) && places.length === 0 && !skeleton">
            <p v-if="typeAccount === 'other'">
                Ještě tu žádné místo nemám.
            </p>
            <p v-else>
                Nemáš tu žádné místo. Co takhle projít <nuxt-link to="/svet">svět</nuxt-link> a přidat sem místa?
            </p>
        </client-only>
        <!-- SHOW - client END -->

        <MoleculesButtonPlaceAdd type="first" v-if="typeAccount === 'login' && places && Array.isArray(places) && places.length === 0 && !skeleton" @add-place-clicked="showAddPlaceForm" />
        <OrganismsFormPlaceVisitedAdd :account="account" :status="status" :type="type" :visitedPlace="places" v-if="showPlaceForm && typeAccount === 'login'" @add-place="showAddNewPlaceForm" />
    </section>
</template>

<script>
    export default defineComponent({
        name: 'OrganismsoCoverPlaceVisitedComponent',

        props: {
            skeletonProbs: {
                type: Boolean,
                required: true
            },
            account: {
                type: Array,
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
            typeAccount: {
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
                skeleton: true,
                imageSizesMedia: [
                    {
                        "mediaQueriesWidth": 349,
                        "elementWidth": 160
                    },
                    {
                        "mediaQueriesWidth": 374,
                        "elementWidth": 172
                    },
                    {
                        "mediaQueriesWidth": 399,
                        "elementWidth": 176
                    },
                    {
                        "mediaQueriesWidth": 459,
                        "elementWidth": 206
                    },
                    {
                        "mediaQueriesWidth": 575,
                        "elementWidth": 264
                    },
                    {
                        "mediaQueriesWidth": 767,
                        "elementWidth": 236
                    },
                    {
                        "mediaQueriesWidth": 991,
                        "elementWidth": 232
                    },
                    {
                        "mediaQueriesWidth": 1219,
                        "elementWidth": 164
                    },
                    {
                        "mediaQueriesWidth": 1399,
                        "elementWidth": 200
                    },
                    {
                        "mediaQueriesWidth": null,
                        "elementWidth": 304
                    }
                ],
                imageSizes: [
                    {
                        "elementWidth": 160,
                        "imageWidth": 166,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 172,
                        "imageWidth": 186,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 176,
                        "imageWidth": 186,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 206,
                        "imageWidth": 210,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 264,
                        "imageWidth": 274,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 236,
                        "imageWidth": 240,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 232,
                        "imageWidth": 240,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 164,
                        "imageWidth": 166,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 200,
                        "imageWidth": 210,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 304,
                        "imageWidth": 306,
                        "orientation": "s-"
                    }
                ]
            }
        },

        watch: {
            placesID: {
                immediate: true,
                handler(newVal, oldVal) {
                    if (newVal.length > 0 && (newVal !== oldVal || !this.places) && this.skeletonProbs === false ) {
                        this.loadData()
                    }
                }
            },

            skeletonProbs(newVal, oldVal) {
                if (!newVal && this.placesID.length === 0) {
                    this.places = []
                    this.skeleton = false
                }
            }
        },

        methods: {
            async loadData() {
                let responsePlaces = []
                let places = []

                // API - GET - ITEMS
                if (this.type === "kontinent") {
                    // API - GET - Continents
                    if ( this.placesID && this.placesID.length > 0 ) {
                        responsePlaces = await fetch(`https://api.frytolnacestach.cz/api/places-continents-array?showType=list&id=${this.placesID.join(',')}`)
                        places = await responsePlaces.json() || []
                    }
                } else if (this.type === "stat") {
                    // API - GET - States
                    if ( this.placesID && this.placesID.length > 0 ) {
                        responsePlaces = await fetch(`https://api.frytolnacestach.cz/api/places-states-array?showType=list&id=${this.placesID.join(',')}`)
                        places = await responsePlaces.json() || []
                    }
                } else if (this.type === "mesto") {
                    // API - GET - Cities
                    if ( this.placesID && this.placesID.length > 0 ) {
                        responsePlaces = await fetch(`https://api.frytolnacestach.cz/api/places-cities-array?showType=list&id=${this.placesID.join(',')}`)
                        places = await responsePlaces.json() || []
                    }
                } else if (this.type === "region") {
                    // API - GET - Regions
                    if ( this.placesID && this.placesID.length > 0 ) {
                        responsePlaces = await fetch(`https://api.frytolnacestach.cz/api/places-regions-array?showType=list&id=${this.placesID.join(',')}`)
                        places = await responsePlaces.json() || []
                    }
                } else if (this.type === "misto") {
                    // API - GET - Spots
                    if ( this.placesID && this.placesID.length > 0 ) {
                        responsePlaces = await fetch(`https://api.frytolnacestach.cz/api/places-spots-array?showType=list&id=${this.placesID.join(',')}`)
                        places = await responsePlaces.json() || []
                    }
                }
                // API - GET - Images
                const imagesPlacesID = places.map(place => place.id_image_cover).filter(id => id !== null && id !== '')
                if (imagesPlacesID && imagesPlacesID.length > 0) {
                    const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesID.join(',')}`)
                    this.images = await responseImages.json() || []
                }

                // DATA
                this.places = places

                // FINAL
                this.skeleton = false
            },

            async loadNewPlace() {
                let responseNewPlace = []
                let newPlace = []
                let newImage = []

                // API - GET - ITEMS
                if (this.type === "kontinent") {
                    // API - GET - Continents
                    if ( this.newPlaceID !== null ) {
                        responseNewPlace = await fetch(`https://api.frytolnacestach.cz/api/places-continents-array?showType=list&id=${this.newPlaceID}`)
                        newPlace = await responseNewPlace.json() || []
                    }
                } else if (this.type === "stat") {
                    // API - GET - States
                    if ( this.newPlaceID !== null ) {
                        responseNewPlace = await fetch(`https://api.frytolnacestach.cz/api/places-states-array?showType=list&id=${this.newPlaceID}`)
                        newPlace = await responseNewPlace.json() || []
                    }
                } else if (this.type === "mesto") {
                    // API - GET - Cities
                    if ( this.newPlaceID !== null ) {
                        responseNewPlace = await fetch(`https://api.frytolnacestach.cz/api/places-cities-array?showType=list&id=${this.newPlaceID}`)
                        newPlace = await responseNewPlace.json() || []
                    }
                } else if (this.type === "region") {
                    // API - GET - Regions
                    if ( this.newPlaceID !== null ) {
                        responseNewPlace = await fetch(`https://api.frytolnacestach.cz/api/places-regions-array?showType=list&id=${this.newPlaceID}`)
                        newPlace = await responseNewPlace.json() || []
                    }
                } else if (this.type === "misto") {
                    // API - GET - Spots
                    if ( this.newPlaceID !== null ) {
                        responseNewPlace = await fetch(`https://api.frytolnacestach.cz/api/places-spots-array?showType=list&id=${this.newPlaceID}`)
                        newPlace = await responseNewPlace.json() || []
                    }
                }
                // API - GET - Images
                const imagesPlacesID = newPlace.map(place => place.id_image_cover).filter(id => id !== null && id !== '')
                if (imagesPlacesID && imagesPlacesID.length > 0) {
                    const responseNewImage = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesID.join(',')}`)
                    newImage = await responseNewImage.json() || []
                }

                // DATA
                this.places = [...this.places, ...newPlace]
                this.images = [...this.images, ...newImage]
            },

            async removePlace() {
                // Inxex položky k vymazání
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
    })
</script>