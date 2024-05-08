<template>
    <section class="t-section my-4 py-1 -p0 print-section" v-if="items !== null && items.length > 0">
        <div class="t-section__inner">
            <mHeadline :title="title" :perex="perex" styleThema=" -world" styleAlign=" -p-left" styleGap=" mb-2" />
            <div class="o-cover-title-item-state">
                <div class="o-cover-title-item-state__outer">
                    <div class="o-cover-title-item-state__items">
                        <div v-for="item in items" :key="item.id" class="o-cover-title-item-state__item">
                            <div class="o-cover-title-item-state__content">
                                <div class="o-cover-title-item-state__image loading-image -green">
                                    <div v-if="images && images.find(image => image.id === item.id_image_cover)" class="o-cover-title-item-state__image-lazyload">
                                        <aImage 
                                            :alt="item.name ? item.name : 'Úvodní obrázek'" 
                                            :author="images.find(image => image.id === item.id_image_cover).author"
                                            :lazy=true
                                            :imageSource="images.find(image => image.id === item.id_image_cover).source"
                                            :imageName="images.find(image => image.id === item.id_image_cover).name"
                                            :sizes=imageSizes
                                            :srcSet=imageSizesMedia
                                            cssClassComponent="o-cover-title-item-state"
                                        />
                                    </div>
                                    <div v-else class="o-cover-title-item-state__image-lazyload">
                                        <aImage 
                                            :alt="item.name ? item.name : 'Úvodní obrázek'" 
                                            :lazy=true
                                            imageSource="/_default/"
                                            imageName="no-image"
                                            :sizes=imageSizes
                                            :srcSet=imageSizesMedia
                                            cssClassComponent="o-cover-title-item-state"
                                        />
                                    </div>
                                    <NuxtLink class="o-cover-title-item-state__link" :to="`/elektricka-zasuvka/${item.slug}`" :aria-label="`Čti více o elektrické zásuvce typu ${item.label}`"></NuxtLink>
                                </div>
                            </div>
                            <h3 class="o-cover-title-item-state__name">
                                <NuxtLink class="o-cover-title-item-state__name-link" :to="`/elektricka-zasuvka/${item.slug}`" :aria-label="`Čti více o elektrické zásuvce typu ${item.label}`">{{ item.name }}</NuxtLink>
                            </h3>
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
        name: 'OrganismsoCoverWallSocketComponent',

        components: {
            aImage,
            mHeadline
        },

        props: {
            ids: {
                type: Number,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            perex: {
                type: String,
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

        async fetchData() {
            // API - GET - Wall sockets
            const idsID = this.ids.map(id => id.id).filter(id => id !== null && id !== '')
            if (this.ids && this.ids.length > 0) {
                const responseItems = await fetch(`https://api.frytolnacestach.cz/api/wall-sockets-id?id=${idsID.join(',')}&showType=list`)
                this.items = await responseItems.json() || []
            }
            // API - GET - Images
            if (this.items && this.items.length > 0) {
                const imagesItemsID = items.map(item => item.id_image_cover).filter(id => id !== null && id !== '')
                const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesItemsID.join(',')}`)
                this.images = await responseImages.json() || []
            }
        },

        mounted() {
            this.fetchData()
        }
    })
</script>