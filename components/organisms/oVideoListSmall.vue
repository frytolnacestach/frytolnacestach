<template>
    <section class="t-component-skeleton">
        
        <!-- SHOW - skeleton -->
        <skeletonoVideoList :styleThema="(styleThema ? styleThema : '')" :skeletonThema="(skeletonThema ? skeletonThema : '')" :skeletonNumber="skeletonNumber" v-if="videos === null && skeleton" />
        <!-- SHOW - skeleton END -->

        <!-- SHOW - client -->
        <client-only v-if="videosFiltered !== null && !skeleton">
            <div :class="'o-video-list-small' + (styleThema ? styleThema : '') + (styleAlign ? styleAlign : '')">
                <div class="o-video-list-small__outer">
                    <div class="o-video-list-small__items">
                        <div v-for="video in videosFiltered" :key="video.id" class="o-video-list-small__item print-section">
                            <div :class="'o-video-list-small__image loading-image ' + (styleThemaLoading ? styleThemaLoading : '')">
                                <div v-if="images && images.find(image => image.id === video.id_image)" class="o-video-list-small__image-lazyload">
                                    <aImage 
                                        :alt="video.title ? video.title : 'Obrázek videa'" 
                                        :author="images.find(image => image.id === video.id_image).author"
                                        :lazy=true
                                        :imageSource="images.find(image => image.id === video.id_image).source"
                                        :imageName="images.find(image => image.id === video.id_image).name"
                                        :sizes=imageSizes
                                        :srcSet=imageSizesMedia
                                        cssClassComponent="o-video-list-small"
                                    />
                                </div>
                                <div v-else class="o-video-list-small__image-lazyload">
                                    <aImage 
                                        :alt="video.title ? video.title : 'Obrázek videa'" 
                                        :lazy=true
                                        imageSource="/_default/"
                                        imageName="no-image"
                                        :sizes=imageSizes
                                        :srcSet=imageSizesMedia
                                        cssClassComponent="o-video-list-small"
                                    />
                                </div>
                                <NuxtLink class="o-video-list-small__image-link" :to="`/videa/${video.slug}`" :aria-label="`Koukni se na video ${video.title}`" v-if="video.slug"></NuxtLink>
                            </div>
                            <div class="o-video-list-small__text">
                                <h3 class="o-video-list-small__title" v-if="video.title">
                                    <NuxtLink class="o-video-list-small__title-link" :to="`/videa/${video.slug}`">{{ video.title }}</NuxtLink>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
        <!-- SHOW - client END -->
        
    </section>
</template>

<script>
    import skeletonoVideoList from '~/components/skeleton/skeletonoVideoList.vue'
    import aImage from '~/components/atoms/aImage.vue'

    export default {
        name: 'OrganismsoVideoListSmallComponent',

        components: {
            skeletonoVideoList,
            aImage
        },

        props: {
            videos: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                required: true
            },
            type: {
                type: String,
                required: false
            },
            styleThema: {
                type: String,
                required: false
            },
            styleThemaLoading: {
                type: String,
                required: false
            },
            styleAlign: {
                type: String,
                required: false
            },
            skeleton: {
                type: Boolean,
                required: false
            },
            skeletonThema: {
                type: String,
                required: false
            },
            skeletonNumber: {
                type: Number,
                required: false
            }
        },

        data() {
            return {
                videosFiltered: [],
                imageSizesMedia: [
                    {
                        "mediaQueriesWidth": 349,
                        "elementWidth": 320
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
                        "elementWidth": 360
                    },
                    {
                        "mediaQueriesWidth": 1019,
                        "elementWidth": 320
                    },
                    {
                        "mediaQueriesWidth": 1219,
                        "elementWidth": 384
                    },
                    {
                        "mediaQueriesWidth": 1399,
                        "elementWidth": 442
                    },
                    {
                        "mediaQueriesWidth": null,
                        "elementWidth": 620
                    }
                ],
                imageSizes: [
                    {
                        "elementWidth": 320,
                        "imageWidth": 320,
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
                        "elementWidth": 384,
                        "imageWidth": 384,
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
                        "elementWidth": 620,
                        "imageWidth": 620,
                        "orientation": "h-"
                    }
                ]
            }
        },

        head() {
            // Empty Array
            if (!this.videos && this.videos === null) {
                return { script: [] };
            }
            // Return
            const jsonldVideos = {
                type: 'application/ld+json',
                json: {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Nejnovější videa",
                    "itemListElement": this.videos.map((video, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@id": 'https://frytolnacestach.cz' + `/videa/${video.slug}`,
                                "name": video.title
                            }
                        }
                    })
                }
            }

            return { script: [jsonldVideos] }
        },

        watch: {
            videos: {
                handler(newVal) {
                    this.filteredVideos()
                },
                immediate: true,
                deep: true
            }
        },

        mounted() {
            this.filteredVideos()
        },

        methods: {
            filteredVideos() {
                if (this.type) {
                    this.videosFiltered = this.videos.filter(video => video.type === this.type)
                } else {
                    this.videosFiltered = this.videos
                }
            }
        }
    }
</script>