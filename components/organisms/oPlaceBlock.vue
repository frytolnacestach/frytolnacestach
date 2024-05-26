<template>
    <div :class="'o-place-block' + (styleThema ? styleThema : ' -gray')" v-if="place && place.length > 0">
        <div class="o-place-block__outer">
            <div class="o-place-block__inner">
                <div class="o-place-block__content">
                    <div class="o-place-block__image loading-image -gray">
                        <div v-if="image && image.length > 0" class="o-place-block__image-lazyload">
                            <aImage 
                                :alt="place[0].name ? place[0].name : 'Místo'"  
                                :author="image[0].author"
                                :lazy=true
                                :imageSource="image[0].source"
                                :imageName="image[0].name"
                                :sizes=imageSizes
                                :srcSet=imageSizesMedia
                                cssClassComponent="o-place-block"
                            />
                        </div>
                        <div v-else class="o-place-block__image-lazyload">
                            <aImage 
                                :alt="place[0].name ? place[0].name : 'Místo'"  
                                :lazy=true
                                imageSource="/_default/"
                                imageName="no-image"
                                :sizes=imageSizes
                                :srcSet=imageSizesMedia
                                cssClassComponent="o-place-block"
                            />
                        </div>
                        <div class="o-place-block__filter">
                            <span class="o-place-block__name">{{ place[0].name }}</span>
                        </div>
                        <NuxtLink class="o-place-block__image-link" :to="`/svet/${type}/${place[0].slug}`" :aria-label="`Čti více o místě ${place[0].name}`"></NuxtLink>
                    </div>
                    <div class="o-place-block__text">
                        <div class="o-place-block__wysiwyg" v-if="place[0].information_chatgpt" v-html="place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, 220)"></div>
                        <div class="o-place-block__button">
                            <aButtonFillFull target="internal" :url="`/svet/${type}/${place[0].slug}`" text="Číst více" :styleThema="(styleThema ? styleThema : ' -gray')" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import aImage from '~/components/atoms/aImage.vue'

    export default defineComponent({
        name: 'OrganismsoPlaceBlockComponent',

        components: {
            aButtonFillFull,
            aImage
        },

        props: {
            placeID: {
                type: Number,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            styleThema: {
                type: String,
                required: false
            }
        },

        data() {
            return {
                place: [],
                image: [],
                imageSizesMedia: [
                    {
                        "mediaQueriesWidth": 349,
                        "elementWidth": 310
                    },
                    {
                        "mediaQueriesWidth": 374,
                        "elementWidth": 334
                    },
                    {
                        "mediaQueriesWidth": 399,
                        "elementWidth": 360
                    },
                    {
                        "mediaQueriesWidth": 459,
                        "elementWidth": 420
                    },
                    {
                        "mediaQueriesWidth": 575,
                        "elementWidth": 536
                    },
                    {
                        "mediaQueriesWidth": 767,
                        "elementWidth": 728
                    },
                    {
                        "mediaQueriesWidth": 991,
                        "elementWidth": 304
                    },
                    {
                        "mediaQueriesWidth": 1219,
                        "elementWidth": 380
                    },
                    {
                        "mediaQueriesWidth": 1399,
                        "elementWidth": 440
                    },
                    {
                        "mediaQueriesWidth": null,
                        "elementWidth": 614
                    }
                ],
                imageSizes: [
                    {
                        "elementWidth": 310,
                        "imageWidth": 312,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 334,
                        "imageWidth": 334,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 360,
                        "imageWidth": 360,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 420,
                        "imageWidth": 420,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 536,
                        "imageWidth": 536,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 728,
                        "imageWidth": 728,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 304,
                        "imageWidth": 312,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 380,
                        "imageWidth": 380,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 440,
                        "imageWidth": 440,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 614,
                        "imageWidth": 614,
                        "orientation": "h-"
                    }
                ]
            }
        },

        head() {
            // Empty Array
            if (!this.place && this.place.length === 0) {
                return { script: [] };
            }
            // Return
            const jsonldPlaces = {
                type: 'application/ld+json',
                json: {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": (this.type === 'kontinent' ? 'Kontinent' : this.type === 'stat' ? 'Stát' : this.type === 'mesto' ? 'Město' : this.type === 'region' ? 'Region' : this.type === 'misto' ? 'Místo' : ''),
                    "itemListElement": this.place.map((itemPlace, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@id": 'https://frytolnacestach.cz' + `/svet/${this.type}/${itemPlace.slug}`,
                                "name": itemPlace.name
                            }
                        }
                    })
                }
            }

            return { script: [jsonldPlaces] }
        },

        methods: {
            async fetchData() {
                // API - GET - ITEMS
                if (this.type === "kontinent") {
                    // API - GET - Continents
                    const responsePlace = await fetch(`https://api.frytolnacestach.cz/api/places-continent-id/${this.placeID}`)
                    this.place = await responsePlace.json() || []
                } else if (this.type === "stat") {
                    // API - GET - Stats
                    const responsePlace = await fetch(`https://api.frytolnacestach.cz/api/places-state-id/${this.placeID}`)
                    this.place = await responsePlace.json() || []
                } else if (this.type === "region") {
                    // API - GET - Regions
                    const responsePlace = await fetch(`https://api.frytolnacestach.cz/api/places-region-id/${this.placeID}`)
                    this.place = await responsePlace.json() || []
                } else if (this.type === "mesto") {
                    // API - GET - Continents
                    const responsePlace = await fetch(`https://api.frytolnacestach.cz/api/places-city-id/${this.placeID}`)
                    this.place = await responsePlace.json() || []
                } else if (this.type === "misto") {
                    // API - GET - Spots
                    const responsePlace = await fetch(`https://api.frytolnacestach.cz/api/places-spot-id/${this.placeID}`)
                    this.place = await responsePlace.json() || []
                }
                // API - GET - Image
                if (this.place && this.place.length > 0) {
                    const responseImage = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.place[0].id_image_hero}`)
                    this.image = await responseImage.json() || []
                }
            }
        },

        mounted() {
            this.fetchData()
        }
    })
</script>