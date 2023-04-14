<template>
    <div :class="'o-video-list' + (styleThema ? styleThema : '') + (styleAlign ? styleAlign : '')">
        <div class="o-video-list__outer">
            <div class="o-video-list__items">
                <div v-for="video in filteredVideos" :key="video.id" class="o-video-list__item">
                    <div class="o-video-list__item-inner">
                        <div class="o-video-list__image loading-image">
                            <div v-if="images && images.find(image => image.id === video.id_image)" class="o-video-list__image-lazyload">
                                <img
                                    class="o-video-list__image-file lazyload-file"
                                    v-lazy="{
                                        src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                        srcset: {
                                            '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                            '439': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                            '575': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                            '767': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                            '991': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                            '992': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                            '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                            '439@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                            '575@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                            '767@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                            '991@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                            '992@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x'
                                        },
                                        sizes: '(max-width: 374px) 374px, (max-width: 439px) 439px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, 992px'
                                    }"
                                    :alt="video.title ? video.title : 'Obrázek videa'"
                                />
                            </div>
                            <div v-else class="o-video-list__image-lazyload">
                                <img
                                    class="o-video-list__image-file lazyload-file"
                                    v-lazy="{
                                        src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                        srcset: {
                                            '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            '439': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            '575': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            '767': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            '991': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            '992': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                            '439@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                            '575@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                            '767@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                            '991@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                            '992@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'
                                        },
                                        sizes: '(max-width: 374px) 374px, (max-width: 439px) 439px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, 992px'
                                    }"
                                    :alt="video.title ? video.title : 'Obrázek videa'"
                                />
                            </div>
                            <NuxtLink class="o-video-list__image-link" :to="`/videa/${video.slug}`" v-if="video.slug"></NuxtLink>
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