<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonoVideoListUser styleThema=" -skeleton-blue" v-if="filteredVideos && filteredVideos.length === 0" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="filteredVideos !== null">
            <div class="o-video-list-user">
                <div class="o-video-list-user__outer">
                    <div class="o-video-list-user__items">
                        <div v-for="video in filteredVideos" :key="video.id" class="o-video-list-user__item print-section">
                            <div class="o-video-list-user__item-inner">
                                <div class="o-video-list-user__image loading-image -gray">
                                    <div v-if="images && images.find(image => image.id === video.id_image)" class="o-video-list-user__image-lazyload">
                                        <img class="o-video-list-user__image-file lazyload-file"
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
                                    <div v-else class="o-video-list-user__image-lazyload">
                                        <img class="o-video-list-user__image-file lazyload-file"
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
        <!-- client END -->
    </section>
</template>

<script>
    import skeletonoVideoListUser from '~/components/skeleton/skeletonoVideoListUser.vue'

    export default {
        name: 'OrganismsoVideoListComponent',

        components: {
            skeletonoVideoListUser
        },

        props: {
            videos: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                required: true
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