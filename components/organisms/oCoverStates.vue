<template>
    <div class="o-cover-states">
        <div class="o-cover-states__outer">
            <div class="o-cover-states__items">
                <div v-for="item in items" :key="item.id" class="o-cover-states__item">
                    <div class="o-cover-states__content">
                        <div class="o-cover-states__image loading-image -green">
                            <div v-if="images && images.find(image => image.id === item.id_image_cover)" class="o-cover-states__image-lazyload">
                                <aImage 
                                    :alt="item.name ? item.name : 'Úvodní obrázek'" 
                                    :author="images.find(image => image.id === item.id_image_cover).author"
                                    :lazy=true
                                    :imageSource="images.find(image => image.id === item.id_image_cover).source"
                                    :imageName="images.find(image => image.id === item.id_image_cover).name"
                                    :sizes=imageSizes
                                    :srcSet=imageSizesMedia
                                    cssClassComponent="o-cover-states"
                                />
                            </div>
                            <div v-else class="o-cover-states__image-lazyload">
                                <aImage 
                                    :alt="item.name ? item.name : 'Úvodní obrázek'" 
                                    :lazy=true
                                    imageSource="/_default/"
                                    imageName="no-image"
                                    :sizes=imageSizes
                                    :srcSet=imageSizesMedia
                                    cssClassComponent="o-cover-states"
                                />
                            </div>
                        </div>
                        <h3 class="o-cover-states__name">
                            {{ item.name }}
                        </h3>
                        <NuxtLink class="o-cover-states__link" :to="`/svet/stat/${item.slug}`" :aria-label="`Čti více o jídle ${item.name}`"></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import aImage from '~/components/atoms/aImage.vue'

    export default defineComponent({
        name: 'OrganismsoCoverStatesComponent',

        components: {
            aImage
        },

        props: {
            items: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
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
                        "elementWidth": 180
                    },
                    {
                        "mediaQueriesWidth": 459,
                        "elementWidth": 210
                    },
                    {
                        "mediaQueriesWidth": 575,
                        "elementWidth": 274
                    },
                    {
                        "mediaQueriesWidth": 767,
                        "elementWidth": 240
                    },
                    {
                        "mediaQueriesWidth": 991,
                        "elementWidth": 234
                    },
                    {
                        "mediaQueriesWidth": 1219,
                        "elementWidth": 166
                    },
                    {
                        "mediaQueriesWidth": 1399,
                        "elementWidth": 202
                    },
                    {
                        "mediaQueriesWidth": null,
                        "elementWidth": 306
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
                        "elementWidth": 180,
                        "imageWidth": 186,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 210,
                        "imageWidth": 210,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 274,
                        "imageWidth": 274,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 240,
                        "imageWidth": 240,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 234,
                        "imageWidth": 240,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 166,
                        "imageWidth": 186,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 202,
                        "imageWidth": 210,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 306,
                        "imageWidth": 306,
                        "orientation": "s-"
                    }
                ]
            }
        },

        head() {
            // Empty Array
            if (!this.items && this.items === null) {
                return { script: [] };
            }
            // Return
            const jsonldItems = {
                type: 'application/ld+json',
                json: {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Státy výskytu",
                    "itemListElement": this.items.map((item, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@id": 'https://frytolnacestach.cz' + `/svet/stat/${item.slug}`,
                                "name": item.name
                            }
                        }
                    })
                }
            }

            return { script: [jsonldItems] }
        }
    })
</script>