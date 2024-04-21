<template>
    <div class="o-hero-video">
        <div class="o-hero-video__image loading-image">
            <div v-if="image" class="o-hero-video__image-lazyload -gray">
                <aImage 
                    :alt="title ? title : 'Úvodní obrázek'" 
                    :author="image[0].author"
                    :lazy=true
                    :imageSource="image[0].source"
                    :imageName="image[0].name"
                    :sizes=imageSizes
                    :srcSet=imageSizesMedia
                    cssClassComponent="o-hero-video"
                />
            </div>
            <div v-else class="o-hero-video__image-lazyload">
                <aImage 
                    :alt="title ? title : 'Úvodní obrázek'" 
                    :lazy=true
                    imageSource="/_default/"
                    imageName="no-image"
                    :sizes=imageSizes
                    :srcSet=imageSizesMedia
                    cssClassComponent="o-hero-video"
                />
            </div>

            <div class="o-hero-video__outer">
                <div class="o-hero-video__inner">
                    <h1 class="o-hero-video__headline">{{ title }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import aImage from '~/components/atoms/aImage.vue'

    export default {
        name: 'OrganismsoHeroVideoComponent',

        components: {
            aImage
        },

        props: {
            title: {
                type: String,
                required: true
            },
            image: {
                type: Array,
                required: true
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
                        "elementWidth": 340
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
                        "mediaQueriesWidth": 1019,
                        "elementWidth": 980
                    },
                    {
                        "mediaQueriesWidth": 1219,
                        "elementWidth": 1180
                    },
                    {
                        "mediaQueriesWidth": 1399,
                        "elementWidth": 1360
                    },
                    {
                        "mediaQueriesWidth": null,
                        "elementWidth": 1880
                    }
                ],
                imageSizes: [
                    {
                        "elementWidth": 230,
                        "imageWidth": 230,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 340,
                        "imageWidth": 340,
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
                        "elementWidth": 980,
                        "imageWidth": 980,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 1180,
                        "imageWidth": 1180,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 1360,
                        "imageWidth": 1360,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 1880,
                        "imageWidth": 1880,
                        "orientation": "h-"
                    }
                ]
            }
        }
    }
</script>