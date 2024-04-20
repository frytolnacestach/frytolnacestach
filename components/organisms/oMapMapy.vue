<template>
    <div class="o-map-mapy">
        <div class="o-map-mapy__outer">
            <div class="o-map-mapy__inner">
                <div class="o-map-mapy__map">                        
                    <div class="o-map-mapy__map-image loading-image -gray">
                        <div v-if="images && images.find(image => image.id === idImageMap)" class="o-map-mapy__image-lazyload">
                            <aImage 
                                :alt="title ? title : 'Úvodní obrázek'" 
                                :author="images.find(image => image.id === idImageMap).author"
                                :lazy=true
                                :imageSource="images.find(image => image.id === idImageMap).source"
                                :imageName="images.find(image => image.id === idImageMap).name"
                                :sizes=imageSizes
                                :srcSet=imageSizesMedia
                                cssClassComponent="o-map-mapy"
                            />
                        </div>
                        <div v-else class="o-map-mapy__image-lazyload">
                            <aImage 
                                :alt="title ? title : 'Úvodní obrázek'" 
                                :lazy=true
                                imageSource="/_default/"
                                imageName="no-image"
                                :sizes=imageSizes
                                :srcSet=imageSizesMedia
                                cssClassComponent="o-map-mapy"
                            />
                        </div>
                        <a class="o-map-mapy__image-link" :href="url" target="_blank" rel="noopener" :aria-label="`Zobrazit mapu`"></a>
                    </div>
                </div>
                <a class="o-map-mapy__link" :href="url" target="_blank" rel="noopener">zobrazit mapu na mapy.cz</a>
            </div>
        </div>
    </div>
</template>

<script>
    import aImage from '~/components/atoms/aImage.vue'

    export default {
        name: 'OrganismsoMapMapyComponent',

        components: {
            aImage
        },

        props: {
            idImageMap: {
                type: Number,
                required: true
            }, 
            url: {
                type: String,
                required: true
            },
            title: {
                type: String,
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
                        "elementWidth": 320
                    },
                    {
                        "mediaQueriesWidth": 374,
                        "elementWidth": 344
                    },
                    {
                        "mediaQueriesWidth": 399,
                        "elementWidth": 370
                    },
                    {
                        "mediaQueriesWidth": 459,
                        "elementWidth": 430
                    },
                    {
                        "mediaQueriesWidth": 575,
                        "elementWidth": 546
                    },
                    {
                        "mediaQueriesWidth": 767,
                        "elementWidth": 738
                    },
                    {
                        "mediaQueriesWidth": null,
                        "elementWidth": 962
                    }
                ],
                imageSizes: [
                    {
                        "elementWidth": 320,
                        "imageWidth": 320,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 344,
                        "imageWidth": 344,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 370,
                        "imageWidth": 370,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 430,
                        "imageWidth": 430,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 546,
                        "imageWidth": 546,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 738,
                        "imageWidth": 738,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 962,
                        "imageWidth": 962,
                        "orientation": "h-"
                    }
                ]
            }
        }
    }
</script>