<template>
    <div class="o-hero-article">
        <div class="o-hero-article__image loading-image -gray">
            <div v-if="images && images.find(image => image.id === post[0].id_image_hero)" class="o-hero-article__image-lazyload">
                <aImage 
                    :alt="post[0].title ? post[0].title : 'Úvodní obrázek'" 
                    :author="images.find(image => image.id === post[0].id_image_cover).author"
                    :lazy=true
                    :imageSource="images.find(image => image.id === post[0].id_image_cover).source"
                    :imageName="images.find(image => image.id === post[0].id_image_cover).name"
                    :sizes=imageSizes
                    :srcSet=imageSizesMedia
                    cssClassComponent="o-hero-article"
                />
            </div>
            <div v-else class="o-hero-article__image-lazyload">
                <aImage 
                    :alt="post[0].title ? post[0].title : 'Úvodní obrázek'" 
                    :lazy=true
                    imageSource="/_default/"
                    imageName="no-image"
                    :sizes=imageSizes
                    :srcSet=imageSizesMedia
                    cssClassComponent="o-hero-article"
                />
            </div>
            <div class="o-hero-article__outer">
                <div class="o-hero-article__inner">
                    <h1 class="o-hero-article__headline" v-if="post[0].title">{{ post[0].title }}</h1>
                    <p class="o-hero-article__perex" v-if="post[0].perex">{{ post[0].perex }}</p>
                    <span class="o-hero-article__date" v-if="post[0].date">{{ formatDate(post[0].date) }} <span v-if="post[0].dateUpdate">(aktualizace {{ formatDate(post[0].dateUpdate) }})</span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import aImage from '~/components/atoms/aImage.vue'

    export default {
        name: 'OrganismsoHeroArticleComponent',

        components: {
            aImage
        },

        props: {
            post: {
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
        },

        methods:{
            formatDate(date) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' }
                return new Date(date).toLocaleDateString('cs', options)
            }
        }
    }
</script>