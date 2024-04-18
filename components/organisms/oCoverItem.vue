<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonoCoverItem styleThema=" -skeleton-green" v-if="items === null && skeleton === true" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="items !== null && skeleton !== true">
            <div class="o-cover-item">
                <div class="o-cover-item__outer">
                    <div class="o-cover-item__items">
                        <div v-for="item in items" :key="item.id" class="o-cover-item__item">
                            <div class="o-cover-item__content">
                                <div class="o-cover-item__image loading-image -green">
                                    <div v-if="images && images.find(image => image.id === item.id_image_cover)" class="o-cover-item__image-lazyload">
                                        <aImage 
                                            :alt="item.name ? item.name : 'Úvodní obrázek'" 
                                            :author="images.find(image => image.id === item.id_image_cover).author"
                                            :lazy=true
                                            :imageSource="images.find(image => image.id === item.id_image_cover).source"
                                            :imageName="images.find(image => image.id === item.id_image_cover).name"
                                            :sizes=imageSizes
                                            :srcSet=imageSizesMedia
                                            cssClassComponent="o-cover-item"
                                        />
                                    </div>
                                    <div v-else class="o-cover-item__image-lazyload">
                                        <aImage 
                                            :alt="item.name ? item.name : 'Úvodní obrázek'" 
                                            :lazy=true
                                            imageSource="/storage/_default/"
                                            imageName="no-image"
                                            :sizes=imageSizes
                                            :srcSet=imageSizesMedia
                                            cssClassComponent="o-cover-item"
                                        />
                                    </div>
                                </div>
                                <h2 class="o-cover-item__name">
                                    {{ item.name }}
                                </h2>
                                <NuxtLink class="o-cover-item__link" :to="`/${type}/${item.slug}`" :aria-label="`Čti více o ${item.name}`"></NuxtLink>
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
    import skeletonoCoverItem from '~/components/skeleton/skeletonoCoverItem.vue'
    import aImage from '~/components/atoms/aImage.vue'

    export default {
        name: 'OrganismsoCoverItemComponent',

        components: {
            aImage,
            skeletonoCoverItem
        },

        props: {
            items: {
                type: Array,
                required: true
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
            if (!this.items && this.items === null) {
                return { script: [] };
            }
            // Return
            const jsonldItems = {
                type: 'application/ld+json',
                json: {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": (this.type === 'jidlo' ? 'Jídla' : this.type === 'fauna' ? 'Fauna' : this.type === 'flora' ? 'Flora' : this.type === 'znacka' ? 'Výrobky' : this.type === 'retezec' ? 'Řetězce' : this.type === 'cestovatelsky-slovnik' ? 'Cestovatelský slovník' : this.type === 'udalost' ? 'Události' : ''),
                    "itemListElement": this.items.map((item, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@id": 'https://frytolnacestach.cz' + `/svet/${this.type}/${item.slug}`,
                                "name": item.name
                            }
                        }
                    })
                }
            }

            return { script: [jsonldItems] }
        }
    }
</script>