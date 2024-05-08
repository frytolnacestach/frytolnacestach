<template>
    <div class="o-place-teaser">
        <div class="o-place-teaser__outer">
            <div class="o-place-teaser__inner">
                <div class="o-place-teaser__content">
                    <div class="o-place-teaser__image loading-image -green">
                        <div v-if="image && image.length > 0" class="o-place-teaser__image-lazyload">
                            <aImage 
                                :alt="place[0].name ? place[0].name : 'Místo'"  
                                :author="image[0].author"
                                :lazy=true
                                :imageSource="image[0].source"
                                :imageName="image[0].name"
                                :sizes=imageSizes
                                :srcSet=imageSizesMedia
                                cssClassComponent="o-place-teaser"
                            />
                        </div>
                        <div v-else class="o-place-teaser__image-lazyload">
                            <aImage 
                                :alt="place[0].name ? place[0].name : 'Místo'"  
                                :lazy=true
                                imageSource="/_default/"
                                imageName="no-image"
                                :sizes=imageSizes
                                :srcSet=imageSizesMedia
                                cssClassComponent="o-place-teaser"
                            />
                        </div>
                    </div>
                    <div class="o-place-teaser__text">
                        <h3 class="o-place-teaser__name">{{ headline }}</h3>
                        <div class="o-place-teaser__wysiwyg" v-if="place[0].information_chatgpt && !place[0].information_author?.length > 0" v-html="place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place[0].information_chatgpt.lastIndexOf(' ', 200))"></div>       
                        <div class="o-place-teaser__wysiwyg" v-if="place[0].information_author?.length > 0" v-html="place[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g, '').slice(0, place[0].information_author[0].text.lastIndexOf(' ', 200))"></div>    
                        <div class="o-place-teaser__button hidden-print">
                            <aButtonFillFull target="internal" :url="`/svet/${type}/${place[0].slug}`" text="Číst více" styleThema=" -green" styleFont=" -bold" />
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
        name: 'OrganismsoPlaceTeaserComponent',

        components: {
            aButtonFillFull,
            aImage
        },

        props: {
            place: {
                type: Array,
                required: true
            },
            image: {
                type: Array,
                required: false
            },
            type: {
                type: String,
                required: true
            },
            headline: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                imageSizesMedia: [
                    {
                        "mediaQueriesWidth": 349,
                        "elementWidth": 330
                    },
                    {
                        "mediaQueriesWidth": 374,
                        "elementWidth": 354
                    },
                    {
                        "mediaQueriesWidth": 399,
                        "elementWidth": 354
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
                        "elementWidth": 286
                    },
                    {
                        "mediaQueriesWidth": 1219,
                        "elementWidth": 258
                    },
                    {
                        "mediaQueriesWidth": 1399,
                        "elementWidth": 312
                    },
                    {
                        "mediaQueriesWidth": null,
                        "elementWidth": 468
                    }
                ],
                imageSizes: [
                    {
                        "elementWidth": 330,
                        "imageWidth": 334,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 354,
                        "imageWidth": 360,
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
                        "elementWidth": 286,
                        "imageWidth": 286,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 258,
                        "imageWidth": 268,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 312,
                        "imageWidth": 312,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 468,
                        "imageWidth": 468,
                        "orientation": "h-"
                    }
                ]
            }
        }
    })
</script>