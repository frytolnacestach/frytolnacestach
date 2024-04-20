<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonoUserList styleThema=" -skeleton-blue" v-if="items === null && skeleton === true" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="items !== null && items.length !== 0 && skeleton !== true">
            <div class="o-user-list">
                <div class="o-user-list__outer">
                    <div class="o-user-list__items">
                        <div v-for="item in items" :key="item.id" class="o-user-list__item">
                            <div class="o-user-list__content-outer">
                                <div class="o-user-list__content-inner">
                                    <div class="o-user-list__image">
                                        <div v-if="images && images.find(image => image.id === item.id_image_cover)" class="o-user-list__image-lazyload loading-image -blue">
                                            <aImage 
                                                :alt="item.nickname ? item.nickname : 'Úživatel'" 
                                                :author="images.find(image => image.id === item.id_image_cover).author"
                                                :lazy=true
                                                :imageSource="images.find(image => image.id === item.id_image_cover).source"
                                                :imageName="images.find(image => image.id === item.id_image_cover).name"
                                                :sizes=imageSizes
                                                :srcSet=imageSizesMedia
                                                cssClassComponent="o-user-list"
                                            />
                                            <NuxtLink class="o-user-list__image-link" :to="`/cestovatel/${item.slug}`" :aria-label="`Čti více o cestovateli ${item.nickname}`"></NuxtLink>
                                        </div>
                                        <div v-else class="o-user-list__image-lazyload loading-image -blue">
                                            <aImage 
                                                :alt="item.nickname ? item.nickname : 'Úživatel'" 
                                                :lazy=true
                                                imageSource="/_default/"
                                                imageName="no-image"
                                                :sizes=imageSizes
                                                :srcSet=imageSizesMedia
                                                cssClassComponent="o-user-list"
                                            />
                                            <NuxtLink class="o-user-list__image-link" :to="`/cestovatel/${item.slug}`" :aria-label="`Čti více o cestovateli ${item.nickname}`"></NuxtLink>
                                        </div>
                                    </div>
                                    <div class="o-user-list__text">
                                        <span class="o-user-list__nickname">
                                            <NuxtLink class="o-user-list__nickname-link" :to="`/cestovatel/${item.slug}`" :aria-label="`Čti více o cestovateli ${item.nickname}`">{{ item.nickname }}</NuxtLink>
                                        </span>
                                    </div>
                                </div>
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
    import skeletonoUserList from '~/components/skeleton/skeletonoUserList.vue'
    import aImage from '~/components/atoms/aImage.vue'

    export default {
        name: 'OrganismsoUserListComponent',

        components: {
            skeletonoUserList,
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
                    "name": "Cestovatelé",
                    "author": this.items.map((user) => {
                        return {
                            "@type": "Person",
                            "name": user.nickname,
                            "url": 'https://frytolnacestach.cz' + `/cestovatel/${user.slug}`
                        }
                    })
                }
            }

            return { script: [jsonldItems] }
        }
    }
</script>