<template>
    <div :class="'o-video-list' + (styleThema ? styleThema : '') + (styleAlign ? styleAlign : '')">
        <div class="o-video-list__outer">
            <div class="o-video-list__items">
                <div v-for="video in filteredVideos" :key="video.id" class="o-video-list__item">
                    <div class="o-video-list__item-inner">
                        <div class="o-video-list__image loading-image">
                            <div v-if="images && images.find(image => image.id === video.id_image)" class="o-video-list__image-lazyload">
                                <img class="o-video-list__image-file lazyload-file"
                                    data-sizes="(max-width: 374px) 340px, (max-width: 439px) 400px, (max-width: 575px) 540px, (max-width: 767px) 400px, (max-width: 991px) 340px, 400px"
                                    :data-srcset="`
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name}-340.webp 340w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name}-400.webp 400w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name}-540.webp 540w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name}-680-2x.webp 680w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name}-800-2x.webp 800w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name}-1080-2x.webp 1080w
                                        `"
                                    :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name}.webp`"
                                    :alt="video.title ? video.title : 'Obrázek videa'"
                                    v-lazy>
                            </div>
                            <div v-else class="o-video-list__image-lazyload">
                                <img class="o-video-list__image-file lazyload-file"
                                    data-sizes="(max-width: 374px) 340px, (max-width: 439px) 400px, (max-width: 575px) 540px, (max-width: 767px) 400px, (max-width: 991px) 340px, 400px"
                                    :data-srcset="`
                                        https://image.frytolnacestach.cz/storage/_default/hero-340.webp 340w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-400.webp 400w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-540.webp 540w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-680-2x.webp 680w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-800-2x.webp 800w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-1080-2x.webp 1080w
                                        `"
                                    :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                    :alt="video.title ? video.title : 'Obrázek videa'"
                                    v-lazy>
                            </div>
                            <NuxtLink class="o-video-list__image-link" :to="`/videa/${video.slug}`" :aria-label="`Koukni se na video ${video.title}`" v-if="video.slug"></NuxtLink>
                        </div>
                        <div class="o-video-list__text">
                            <h3 class="o-video-list__title" v-if="video.title">
                                <NuxtLink class="o-video-list__title-link" :to="`/videa/${video.slug}`">{{ video.title }}</NuxtLink>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoVideoListComponent',

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
            styleAlign: {
                type: String,
                required: false
            }
        },

        computed: {
            filteredVideos() {
                if (this.type) {
                    return this.videos.filter(video => video.type === this.type);
                } else {
                    return this.videos;
                }
            }
        }
    }
</script>