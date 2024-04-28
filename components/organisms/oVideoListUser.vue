<template>
    <section class="t-component-skeleton">
        
        <!-- SHOW - skeleton -->
        <skeletonoVideoListUser :styleThema="(skeletonThema ? skeletonThema : '')" :skeletonNumber="skeletonNumber" v-if="filteredVideos && filteredVideos.length === 0 && skeleton" />
        <!-- SHOW - skeleton END -->

        <!-- SHOW - client -->
        <client-only v-if="filteredVideos !== null && videos !== null && !skeleton">
            <div class="o-video-list-user">
                <div class="o-video-list-user__outer">
                    <div class="o-video-list-user__items">
                        <div v-for="video in filteredVideos" :key="video.id" class="o-video-list-user__item print-section">
                            <div class="o-video-list-user__item-inner">
                                <div class="o-video-list-user__image loading-image -blue">
                                    <div v-if="images && images.find(image => image.id === video.id_image)" class="o-video-list-user__image-lazyload">
                                        <aImage 
                                            :alt="video.title ? video.title : 'Obrázek videa'" 
                                            :author="images.find(image => image.id === video.id_image).author"
                                            :lazy=true
                                            :imageSource="images.find(image => image.id === video.id_image).source"
                                            :imageName="images.find(image => image.id === video.id_image).name"
                                            :sizes=imageSizes
                                            :srcSet=imageSizesMedia
                                            cssClassComponent="o-video-list-user"
                                        />
                                    </div>
                                    <div v-else class="o-video-list-user__image-lazyload">
                                        <aImage 
                                            :alt="video.title ? video.title : 'Obrázek videa'" 
                                            :lazy=true
                                            imageSource="/_default/"
                                            imageName="no-image"
                                            :sizes=imageSizes
                                            :srcSet=imageSizesMedia
                                            cssClassComponent="o-video-list-user"
                                        />
                                    </div>
                                    <NuxtLink class="o-video-list-user__image-link" :to="`/videa/${video.slug}`" :aria-label="`Koukni se na video ${video.title}`" v-if="video.slug"></NuxtLink>
                                </div>
                                <div class="o-video-list-user__text">
                                    <h3 class="o-video-list-user__title" v-if="video.title">
                                        <NuxtLink class="o-video-list-user__title-link" :to="`/videa/${video.slug}`">{{ video.title }}</NuxtLink>
                                    </h3>
                                </div>
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
    import skeletonoVideoListUser from '~/components/skeleton/skeletonoVideoListUser.vue'
    import aImage from '~/components/atoms/aImage.vue'

    export default {
        name: 'OrganismsoVideoListComponent',

        components: {
            skeletonoVideoListUser,
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

        computed: {
            filteredVideos() {
                if (this.type) {
                    return this.videos.filter(video => video.type === this.type)
                } else {
                    return this.videos
                }
            }
        }
    }
</script>