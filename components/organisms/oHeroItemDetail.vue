<template>
    <div class="o-hero-item-detail">
        <div class="o-hero-item-detail__container">
            <div class="o-hero-item-detail__image loading-image -green">
                <div v-if="images && images.find(image => image.id === item[0].id_image_hero)" class="o-hero-item-detail__image-lazyload">
                    <aImage 
                        :alt="item[0].name ? item[0].name : 'Úvodní obrázek'" 
                        :author="images.find(image => image.id === item[0].id_image_hero).author"
                        :lazy=false
                        :imageSource="images.find(image => image.id === item[0].id_image_hero).source"
                        :imageName="images.find(image => image.id === item[0].id_image_hero).name"
                        :sizes=imageSizes
                        :srcSet=imageSizesMedia
                        cssClassComponent="o-hero-item-detail"
                    />
                </div>
                <div v-else class="o-hero-item-detail__image-lazyload">
                    <aImage 
                        :alt="item[0].name ? item[0].name : 'Úvodní obrázek'" 
                        :lazy=false
                        imageSource="/_default/"
                        imageName="no-image"
                        :sizes=imageSizes
                        :srcSet=imageSizesMedia
                        cssClassComponent="o-hero-item-detail"
                    />
                </div>
                <div class="o-hero-item-detail__outer" v-if="showTitle">
                    <div class="o-hero-item-detail__inner">
                        <h1 class="o-hero-item-detail__headline" v-if="item[0].name">{{ item[0].name }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import aImage from '~/components/atoms/aImage.vue'

    export default defineComponent({
        name: 'OrganismsoHeroItemComponent',

        components: {
            aImage
        },

        props: {
            item: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                required: true
            },
            showTitle: {
                type: Boolean,
                required: false,
                default: true
            }
        },

        data() {
            return {
                imageSizesMedia: [
                    {
                        "mediaQueriesWidth": 349,
                        "elementWidth": 344
                    },
                    {
                        "mediaQueriesWidth": 374,
                        "elementWidth": 354
                    },
                    {
                        "mediaQueriesWidth": 399,
                        "elementWidth": 360
                    },
                    {
                        "mediaQueriesWidth": 459,
                        "elementWidth": 430
                    },
                    {
                        "mediaQueriesWidth": 575,
                        "elementWidth": 556
                    },
                    {
                        "mediaQueriesWidth": 767,
                        "elementWidth": 728
                    },
                    {
                        "mediaQueriesWidth": 991,
                        "elementWidth": 952
                    },
                    {
                        "mediaQueriesWidth": 1219,
                        "elementWidth": 780
                    },
                    {
                        "mediaQueriesWidth": 1399,
                        "elementWidth": 900
                    },
                    {
                        "mediaQueriesWidth": null,
                        "elementWidth": 1248
                    }
                ],
                imageSizes: [
                    {
                        "elementWidth": 344,
                        "imageWidth": 344,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 354,
                        "imageWidth": 360,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 360,
                        "imageWidth": 360,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 430,
                        "imageWidth": 430,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 556,
                        "imageWidth": 556,
                        "orientation": "s-"
                    },
                    {
                        "elementWidth": 728,
                        "imageWidth": 728,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 952,
                        "imageWidth": 952,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 780,
                        "imageWidth": 780,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 900,
                        "imageWidth": 900,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 1248,
                        "imageWidth": 1248,
                        "orientation": "h-"
                    }
                ]
            }
        }
    })
</script>