<template>
    <div class="o-cover-place-detail">
        <div class="o-cover-place-detail__outer">
            <div class="o-cover-place-detail__inner">
                <div class="o-cover-place-detail__items">
                    <div v-for="place in filteredPlaces" :key="place.id" class="o-cover-place-detail__item">
                        <div class="o-cover-place-detail__content">
                            <div class="o-cover-place-detail__image loading-image -green">
                                <div v-if="images && images.find(image => image.id === place.id_image_cover)" class="o-cover-place-detail__image-lazyload">
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
                                <div v-else class="o-cover-place-detail__image-lazyload">
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
                            <h3 class="o-cover-place-detail__name" v-if="place.name">
                                {{ place.name }}
                            </h3>
                            <NuxtLink class="o-cover-place-detail__link" :to="`/svet/${type}/${place.slug}`" :aria-label="`Čti více o místě ${place.name}`" v-if="place.slug"></NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'OrganismsoCoverPlaceDetailComponent',

        props: {
            places: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                default: null
            },
            type: {
                type: String,
                required: true
            }, 
            importance: {
                type: String,
                required: false
            }
        },

        data() {
            return {
                imageSizesMedia: [
                    {
                        "mediaQueriesWidth": 349,
                        "elementWidth": 230
                    },
                    {
                        "mediaQueriesWidth": 374,
                        "elementWidth": 248
                    },
                    {
                        "mediaQueriesWidth": 399,
                        "elementWidth": 146
                    },
                    {
                        "mediaQueriesWidth": 459,
                        "elementWidth": 170
                    },
                    {
                        "mediaQueriesWidth": 575,
                        "elementWidth": 216
                    },
                    {
                        "mediaQueriesWidth": 767,
                        "elementWidth": 310
                    },
                    {
                        "mediaQueriesWidth": 992,
                        "elementWidth": 206
                    },
                    {
                        "mediaQueriesWidth": 1219,
                        "elementWidth": 172
                    },
                    {
                        "mediaQueriesWidth": 1399,
                        "elementWidth": 200
                    },
                    {
                        "mediaQueriesWidth": null,
                        "elementWidth": 278
                    }
                ],
                imageSizes: [
                    {
                        "elementWidth": 230,
                        "imageWidth": 354,
                        "orientation": "v-"
                    },
                    {
                        "elementWidth": 248,
                        "imageWidth": 380,
                        "orientation": "v-"
                    },
                    {
                        "elementWidth": 146,
                        "imageWidth": 226,
                        "orientation": "v-"
                    },
                    {
                        "elementWidth": 170,
                        "imageWidth": 264,
                        "orientation": "v-"
                    },
                    {
                        "elementWidth": 216,
                        "imageWidth": 332,
                        "orientation": "v-"
                    },
                    {
                        "elementWidth": 310,
                        "imageWidth": 314,
                        "orientation": "v-"
                    },
                    {
                        "elementWidth": 206,
                        "imageWidth": 314,
                        "orientation": "v-"
                    },
                    {
                        "elementWidth": 172,
                        "imageWidth": 264,
                        "orientation": "v-"
                    },
                    {
                        "elementWidth": 200,
                        "imageWidth": 314,
                        "orientation": "v-"
                    },
                    {
                        "elementWidth": 278,
                        "imageWidth": 424,
                        "orientation": "v-"
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

        computed: {
            filteredPlaces() {
                if (this.importance === "biggest") {
                    return this.places.filter(place => place.importance === 'biggest')
                } else if (this.importance === null) {
                    return this.places.filter(place => place.importance !== 'biggest')
                } else {
                    return this.places
                }
            }
        }
    })
</script>