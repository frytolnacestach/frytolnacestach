<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonoTopPlace :styleThema="(skeletonThema ? skeletonThema : ' -skeleton-gray')" v-if="places === null || images === null" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="places !== null && images !== null">
            <div class="o-top-place">
                <div class="o-top-place__outer">
                    <div class="o-top-place__items">
                        <div v-for="place in places" :key="place.id" class="o-top-place__item">
                            <div class="o-top-place__content">
                                <div :class="'o-top-place__image loading-image' + (styleThema ? styleThema : ' -gray')">
                                    <div v-if="images && images.find(image => image.id === place.id_image_cover)" class="o-top-place__image-lazyload">
                                        <aImage 
                                            :alt="place.name ? place.name : 'Úvodní obrázek'" 
                                            :author="images.find(image => image.id === place.id_image_cover).author"
                                            :lazy=true
                                            :imageSource="images.find(image => image.id === place.id_image_cover).source"
                                            :imageName="images.find(image => image.id === place.id_image_cover).name"
                                            :sizes=imageSizes
                                            :srcSet=imageSizesMedia
                                            cssClassComponent="o-top-place"
                                        />
                                    </div>
                                    <div v-else class="o-top-place__image-lazyload">
                                        <aImage 
                                        :alt="place.name ? place.name : 'Úvodní obrázek'"  
                                            :lazy=true
                                            imageSource="/_default/"
                                            imageName="no-image"
                                            :sizes=imageSizes
                                            :srcSet=imageSizesMedia
                                            cssClassComponent="o-top-place"
                                        />
                                    </div>
                                </div>
                                <h3 class="o-top-place__name">
                                    <span class="o-top-place__name-type">
                                        {{ place.type_place === 'city' ? 'Město' : place.type_place === 'state' ? 'Stát' : place.type_place === 'continent' ? 'Kontinent' : '' }}
                                    </span>
                                    {{ place.name }}
                                </h3>
                                <NuxtLink class="o-top-place__link" :to="`/svet/${place.type_place === 'continent' ? 'kontinent' : place.type_place === 'state' ? 'stat' : place.type_place === 'city' ? 'mesto' : ''}/${place.slug}`" :aria-label="`Čti více o místě ${place.name}`"></NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
        <!-- client END -->
    </section>
</template>

<script>
    import axios from 'axios'

    import skeletonoTopPlace from '~/components/skeleton/skeletonoTopPlace.vue'
    import aImage from '~/components/atoms/aImage.vue'

    export default {
        name: 'OrganismsoTopPlaceComponent',

        components: {
            skeletonoTopPlace,
            aImage
        },

        props: {
            styleThema: {
                type: String,
                required: false
            },
            skeletonThema: {
                type: String,
                required: false
            }
        },

        data() {
            return {
                topPlaces: [],
                placesContinents: [],
                placesStates: [],
                placesCities: [],
                places: null,
                images: null,
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
                        "elementWidth": 186
                    },
                    {
                        "mediaQueriesWidth": 459,
                        "elementWidth": 216
                    },
                    {
                        "mediaQueriesWidth": 575,
                        "elementWidth": 274
                    },
                    {
                        "mediaQueriesWidth": 767,
                        "elementWidth": 230
                    },
                    {
                        "mediaQueriesWidth": 991,
                        "elementWidth": 224
                    },
                    {
                        "mediaQueriesWidth": 1219,
                        "elementWidth": 220
                    },
                    {
                        "mediaQueriesWidth": 1399,
                        "elementWidth": 256
                    },
                    {
                        "mediaQueriesWidth": null,
                        "elementWidth": 360
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
                        "elementWidth": 186,
                        "imageWidth": 186,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 216,
                        "imageWidth": 224,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 274,
                        "imageWidth": 274,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 230,
                        "imageWidth": 240,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 224,
                        "imageWidth": 224,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 220,
                        "imageWidth": 224,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 256,
                        "imageWidth": 256,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 360,
                        "imageWidth": 360,
                        "orientation": "s-"
                    }
                ]
            }
        },

        head() {
            // Empty Array
            if (!this.places && this.places === null) {
                return { script: [] };
            }
            // Return
            const jsonldPlaces = {
                type: 'application/ld+json',
                json: {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Top místa",
                    "itemListElement": this.places.map((place, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@id": 'https://frytolnacestach.cz' + `/svet/${place.type_place === 'continent' ? 'kontinent' : place.type_place === 'state' ? 'stat' : place.type_place === 'city' ? 'mesto' : ''}/${place.slug}`,
                                "name": place.name
                            }
                        }
                    })
                }
            }

            return { script: [jsonldPlaces] }
        },

        async created() {
            const topPlaces = await axios.get("https://api.frytolnacestach.cz/api/top-places")
            this.topPlaces = topPlaces.data

            const topPlacesIDcontinents = this.topPlaces
                .filter(place => place.type === 'continent' && place.id_place !== null && place.id_place !== '')
                .map(place => place.id_place)

            const topPlacesIDstates = this.topPlaces
                .filter(place => place.type === 'state' && place.id_place !== null && place.id_place !== '')
                .map(place => place.id_place)

            const topPlacesIDcities = this.topPlaces
                .filter(place => place.type === 'city' && place.id_place !== null && place.id_place !== '')
                .map(place => place.id_place)

            const placesContinents = await axios.get(`https://api.frytolnacestach.cz/api/places-continents-array?id=${topPlacesIDcontinents.join(',')}`)
            this.placesContinents = placesContinents.data

            const placesStates = await axios.get(`https://api.frytolnacestach.cz/api/places-states-array?id=${topPlacesIDstates.join(',')}`)
            this.placesStates = placesStates.data

            const placesCities = await axios.get(`https://api.frytolnacestach.cz/api/places-cities-array?id=${topPlacesIDcities.join(',')}`)
            this.placesCities = placesCities.data

            const places = this.placesContinents.concat(
                this.placesStates,
                this.placesCities
            )
            this.places = places

            const imagesPlaceID = places.map(place => place.id_image_cover).filter(id => id !== null && id !== '')

            const images = await axios.get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlaceID.join(',')}`)
            this.images = images.data
        }
    }
</script>