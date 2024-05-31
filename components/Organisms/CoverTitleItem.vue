<template>
    <section class="t-component-skeleton">
        
        <!-- SHOW - skeleton -->
        <SkeletonOrganismsCoverTitleItem styleThema=" -skeleton-green" v-if="items === null && skeleton === true" />
        <!-- SHOW - skeleton END -->

        <!-- SHOW - client -->
        <client-only v-if="items !== null && skeleton !== true">
            <div class="o-cover-title-item">
                <div class="o-cover-title-item__outer">
                    <div class="o-cover-title-item__items">
                        <div v-for="item in items" :key="item.id" class="o-cover-title-item__item">
                            <div class="o-cover-title-item__content">
                                <div class="o-cover-title-item__image loading-image -green">
                                    <div v-if="images && images.find(image => image.id === item.id_image_cover)" class="o-cover-title-item__image-lazyload">
                                        <AtomsImage 
                                            :alt="item.name ? item.name : 'Úvodní obrázek'" 
                                            :author="images.find(image => image.id === item.id_image_cover).author"
                                            :lazy=true
                                            :imageSource="images.find(image => image.id === item.id_image_cover).source"
                                            :imageName="images.find(image => image.id === item.id_image_cover).name"
                                            :sizes=imageSizes
                                            :srcSet=imageSizesMedia
                                            cssClassComponent="o-cover-title-item"
                                        />
                                    </div>
                                    <div v-else class="o-cover-title-item__image-lazyload">
                                        <AtomsImage 
                                            :alt="item.name ? item.name : 'Úvodní obrázek'" 
                                            :lazy=true
                                            imageSource="/_default/"
                                            imageName="no-image"
                                            :sizes=imageSizes
                                            :srcSet=imageSizesMedia
                                            cssClassComponent="o-cover-title-item"
                                        />
                                    </div>
                                    <NuxtLink class="o-cover-title-item__link" :to="`/${type}/${item.slug}`" :aria-label="`Čti více o ${item.name}`"></NuxtLink>
                                </div>
                            </div>
                            <h2 class="o-cover-title-item__name">
                                <NuxtLink class="o-cover-title-item__name-link" :to="`/${type}/${item.slug}`" :aria-label="`Čti více o ${item.name}`">{{ item.name }}</NuxtLink>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
        <!-- SHOW - client END -->
        
    </section>
</template>


<script>
    export default defineComponent({
        name: 'OrganismsoCoverTitleItemComponent',

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
                    "name": (this.type === 'wall_sockets' ? 'Elektrické zásuvky' : ''),
                    "itemListElement": this.items.map((item, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@id": 'https://frytolnacestach.cz' + `/elektricka-zasuvka/${item.slug}`,
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