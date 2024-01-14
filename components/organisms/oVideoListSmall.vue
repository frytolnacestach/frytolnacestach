<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonoVideoList :styleThema="(styleThema ? styleThema : '')" :skeletonThema="(skeletonThema ? skeletonThema : '')" :skeletonNumber="skeletonNumber" v-if="videos === null && skeleton" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="videosFiltered !== null && !skeleton">
            <div :class="'o-video-list-small' + (styleThema ? styleThema : '') + (styleAlign ? styleAlign : '')">
                <div class="o-video-list-small__outer">
                    <div class="o-video-list-small__items">
                        <div v-for="video in videosFiltered" :key="video.id" class="o-video-list-small__item print-section">
                            <div :class="'o-video-list-small__image loading-image ' + (styleThemaLoading ? styleThemaLoading : '')">
                                <div v-if="images && images.find(image => image.id === video.id_image)" class="o-video-list-small__image-lazyload">
                                    <img class="o-video-list-small__image-file lazyload-file"
                                        data-sizes="(max-width: 349px) 320px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 360px, (max-width: 1019px) 320px, (max-width: 1219px) 384px, (max-width: 1399px) 442px, 620px"
                                        :data-srcset="`
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + 'h-' + images.find(image => image.id === video.id_image).name}-320.webp 320w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + 'h-' + images.find(image => image.id === video.id_image).name}-340.webp 340w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + 'h-' + images.find(image => image.id === video.id_image).name}-360.webp 360w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + 'h-' + images.find(image => image.id === video.id_image).name}-384.webp 384w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + 'h-' + images.find(image => image.id === video.id_image).name}-420.webp 420w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + 'h-' + images.find(image => image.id === video.id_image).name}-536.webp 536w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + 'h-' + images.find(image => image.id === video.id_image).name}-620.webp 620w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + 'h-' + images.find(image => image.id === video.id_image).name}-640-2x.webp 640w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + 'h-' + images.find(image => image.id === video.id_image).name}-680-2x.webp 680w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + 'h-' + images.find(image => image.id === video.id_image).name}-720-2x.webp 720w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + 'h-' + images.find(image => image.id === video.id_image).name}-768-2x.webp 768w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + 'h-' + images.find(image => image.id === video.id_image).name}-840-2x.webp 840w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + 'h-' + images.find(image => image.id === video.id_image).name}-1072-2x.webp 1072w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + 'h-' + images.find(image => image.id === video.id_image).name}-1240-2x.webp 1240w
                                            `"
                                        :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name}.webp`"
                                        :alt="video.title ? video.title : 'Obrázek videa'"
                                        v-lazy>
                                </div>
                                <div v-else class="o-video-list-small__image-lazyload">
                                    <img class="o-video-list-small__image-file lazyload-file"
                                        data-sizes="(max-width: 349px) 320px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 360px, (max-width: 1019px) 320px, (max-width: 1219px) 384px, (max-width: 1399px) 442px, 620px"
                                        :data-srcset="`
                                            https://image.frytolnacestach.cz/storage/_default/h-hero-320.webp 320w,
                                            https://image.frytolnacestach.cz/storage/_default/h-hero-340.webp 340w,
                                            https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 360w,
                                            https://image.frytolnacestach.cz/storage/_default/h-hero-384.webp 384w,
                                            https://image.frytolnacestach.cz/storage/_default/h-hero-420.webp 420w,
                                            https://image.frytolnacestach.cz/storage/_default/h-hero-536.webp 536w,
                                            https://image.frytolnacestach.cz/storage/_default/h-hero-620.webp 620w,
                                            https://image.frytolnacestach.cz/storage/_default/h-hero-640-2x.webp 640w,
                                            https://image.frytolnacestach.cz/storage/_default/h-hero-680-2x.webp 680w,
                                            https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 720w,
                                            https://image.frytolnacestach.cz/storage/_default/h-hero-768-2x.webp 768w,
                                            https://image.frytolnacestach.cz/storage/_default/h-hero-840-2x.webp 840w,
                                            https://image.frytolnacestach.cz/storage/_default/h-hero-1072-2x.webp 1072w,
                                            https://image.frytolnacestach.cz/storage/_default/h-hero-1240-2x.webp 1240w
                                            `"
                                        :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                        :alt="video.title ? video.title : 'Obrázek videa'"
                                        v-lazy>
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
        <!-- client END -->
    </section>
</template>

<script>
    import skeletonoVideoList from '~/components/skeleton/skeletonoVideoList.vue'

    export default {
        name: 'OrganismsoVideoListSmallComponent',

        components: {
            skeletonoVideoList
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
                videosFiltered: []
            }
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