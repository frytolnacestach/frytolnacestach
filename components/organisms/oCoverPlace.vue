<template>
    <section class="t-component-skeleton">
        
        <!-- SHOW - skeleton -->
        <skeletonoCoverPlace styleThema=" -skeleton-green" v-if="places === null && skeleton === true" />
        <!-- SHOW - skeleton END -->

        <!-- SHOW - client -->
        <client-only v-if="places !== null && skeleton !== true">
            <div class="o-cover-place">
                <div class="o-cover-place__outer">
                    <div class="o-cover-place__items">
                        <div v-for="place in places" :key="place.id" class="o-cover-place__item">
                            <div class="o-cover-place__content">
                                <div class="o-cover-place__image loading-image -green">
                                    <div v-if="images && images.find(image => image.id === place.id_image_cover)" class="o-cover-place__image-lazyload">
                                        <aImage 
                                            :alt="place.name ? place.name : 'Úvodní obrázek'" 
                                            :author="images.find(image => image.id === place.id_image_cover).author"
                                            :lazy=true
                                            :imageSource="images.find(image => image.id === place.id_image_cover).source"
                                            :imageName="images.find(image => image.id === place.id_image_cover).name"
                                            :sizes=imageSizes
                                            :srcSet=imageSizesMedia
                                            cssClassComponent="o-cover-place"
                                        />
                                    </div>
                                    <div v-else class="o-cover-place__image-lazyload">
                                        <aImage 
                                            :alt="place.name ? place.name : 'Úvodní obrázek'" 
                                            :lazy=true
                                            imageSource="/_default/"
                                            imageName="no-image"
                                            :sizes=imageSizes
                                            :srcSet=imageSizesMedia
                                            cssClassComponent="o-cover-place"
                                        />
                                    </div>
                                </div>
                                <div class="o-cover-place__text">
                                    <span class="o-cover-place__prename -state" v-if="showPrename && type==='region' || showPrename && type==='mesto' || showPrename && type==='misto'">{{ getPrename(place.id_state) }}</span>
                                    <h2 class="o-cover-place__name">
                                        {{ place.name }}
                                    </h2>
                                </div>
                                <NuxtLink class="o-cover-place__link" :to="`/svet/${type}/${place.slug}`" :aria-label="`Čti více o místě ${place.name}`"></NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
        <!-- SHOW - client END -->
        
    </section>
</template>

<script>
    import skeletonoCoverPlace from '~/components/skeleton/skeletonoCoverPlace.vue'
    import aImage from '~/components/atoms/aImage.vue'

    export default {
        name: 'OrganismsoCoverPlaceComponent',

        components: {
            skeletonoCoverPlace,
            aImage
        },

        props: {
            places: {
                type: Array,
                required: true
            },
            placesParent: {
                type: Array,
                required: false
            },
            images: {
                type: Array,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            skeleton: {
                type: Boolean,
                required: false
            },
            showPrename: {
                type: Boolean,
                required: false
            }
        },

        data() {
            return {
                items: null,
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
                    "name": (this.type === 'kontinent' ? 'Kontinenty' : this.type === 'stat' ? 'Státy' : this.type === 'mesto' ? 'Města' : this.type === 'region' ? 'Regiony' : this.type === 'misto' ? 'Místa' : ''),
                    "itemListElement": this.places.map((place, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@id": 'https://frytolnacestach.cz' + `/svet/${this.type}/${place.slug}`,
                                "name": place.name
                            }
                        }
                    })
                }
            }

            return { script: [jsonldPlaces] }
        },

        methods: {
            // ONLY CITIES LIST - Metoda pro prohledání pole placesParent, kde se hledá aktuální potřební stát v podobě idState
            getPrename(idState) {
                const matchingPlaceParent = this.placesParent.find(
                    (parent) => parent.id === idState
                )

                if (matchingPlaceParent) {
                    return matchingPlaceParent.name
                }

                return ''
            }
        }
    }
</script>