<template>
    <section class="t-section my-4 py-1 -p0 print-section" v-if="items !== null && items.length > 0">
        <div class="t-section__inner">
            <mHeadline :title="title + ' '" :titleValue="placeStateName" :perex="perex" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
            <div class="o-cover-item-state">
                <div class="o-cover-item-state__outer">
                    <div class="o-cover-item-state__items">
                        <div v-for="item in items" :key="item.id" class="o-cover-item-state__item">
                            <div class="o-cover-item-state__content">
                                <div class="o-cover-item-state__image loading-image -green">
                                    <div v-if="images && images.find(image => image.id === item.id_image_cover)" class="o-cover-item-state__image-lazyload">
                                        <aImage 
                                            :alt="item.name ? item.name : 'Úvodní obrázek'" 
                                            :author="images.find(image => image.id === item.id_image_cover).author"
                                            :lazy=true
                                            :imageSource="images.find(image => image.id === item.id_image_cover).source"
                                            :imageName="images.find(image => image.id === item.id_image_cover).name"
                                            :sizes=imageSizes
                                            :srcSet=imageSizesMedia
                                            cssClassComponent="o-cover-item-state"
                                        />
                                    </div>
                                    <div v-else class="o-cover-item-state__image-lazyload">
                                        <aImage 
                                            :alt="item.name ? item.name : 'Úvodní obrázek'" 
                                            :lazy=true
                                            imageSource="/_default/"
                                            imageName="no-image"
                                            :sizes=imageSizes
                                            :srcSet=imageSizesMedia
                                            cssClassComponent="o-cover-item-state"
                                        />
                                    </div>
                                </div>
                                <h3 class="o-cover-item-state__name">
                                    {{ item.name }}
                                </h3>
                                <NuxtLink class="o-cover-item-state__link" :to="`/${type}/${item.slug}`" :aria-label="`Čti více o ${item.name}`"></NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import aImage from '~/components/atoms/aImage.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'

    export default defineComponent({
        name: 'OrganismsoCoverItemStateComponent',

        components: {
            aImage,
            mHeadline
        },

        props: {
            placeStateID: {
                type: Number,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            perex: {
                type: String,
                required: false
            },
            placeStateName: {
                type: String,
                required: true
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
                    "name": (this.type === 'jidlo' ? 'Jídla' : this.type === 'fauna' ? 'Fauna' : this.type === 'flora' ? 'Flora' : this.type === 'znacka' ? 'Výrobky' : this.type === 'retezec' ? 'Řetězce' : this.type === 'cestovatelsky-slovnik' ? 'Cestovatelský slovník' : this.type === 'udalost' ? 'Události' : ''),
                    "itemListElement": this.items.map((item, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@id": 'https://frytolnacestach.cz' + `/${this.type}/${item.slug}`,
                                "name": item.name
                            }
                        }
                    })
                }
            }

            return { script: [jsonldItems] }
        },

        methods: {
            async fetchData() {
                // API - GET - ITEMS
                if (this.placeStateID && this.placeStateID.length > 0) {
                    if ( this.type === "jidlo" ) {
                        // API - GET - Foods
                        const items = await fetch(`https://api.frytolnacestach.cz/api/foods-id-state/${this.placeStateID}?showType=list`)
                        this.items = await responseItems.json() || []
                    } else if ( this.type === "fauna" ) {
                        // API - GET - Faunas
                        const items = await fetch(`https://api.frytolnacestach.cz/api/faunas-id-state/${this.placeStateID}?showType=list`)
                        this.items = await responseItems.json() || []
                    } else if ( this.type === "flora" ) {
                        // API - GET - Floras
                        const items = await fetch(`https://api.frytolnacestach.cz/api/floras-id-state/${this.placeStateID}?showType=list`)
                        this.items = await responseItems.json() || []
                    } else if ( this.type === "znacka" ) {
                        // API - GET - Brands
                        const items = await fetch(`https://api.frytolnacestach.cz/api/brands-id-state/${this.placeStateID}?showType=list`)
                        this.items = await responseItems.json() || []
                    } else if ( this.type === "elektricka-zasuvka" ) {
                        // API - GET - Wall sockets
                        const items = await fetch(`https://api.frytolnacestach.cz/api/wall-sockets-id-state/${this.placeStateID}?showType=list`)
                        this.items = await responseItems.json() || []
                    } else if ( this.type === "retezec" ) {
                        // API - GET - Chains
                        const items = await fetch(`https://api.frytolnacestach.cz/api/chains-id-state/${this.placeStateID}?showType=list`)
                        this.items = await responseItems.json() || []
                    }
                }
                // API - GET - Images
                if (this.items && this.items.length > 0) {
                    const imagesItemsID = items.map(item => item.id_image_cover).filter(id => id !== null && id !== '')
                    const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesItemsID.join(',')}`)
                    this.images = await responseImages.json() || []
                }
            }
        },

        mounted() {
            this.fetchData()
        }
    })
</script>