<template>
    <div class="o-cover-place">
        <div class="o-cover-place__outer">
            <div class="o-cover-place__items">
                <div v-for="place in places" :key="place.id" class="o-cover-place__item">
                    <div class="o-cover-place__content">
                        <div class="o-cover-place__image loading-image">
                            <div v-if="images && images.find(image => image.id === place.id_image_cover)" class="o-cover-place__image-lazyload">
                                <img
                                    class="o-cover-place__image-file lazyload-file"
                                    v-lazy="{
                                        src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',
                                        srcset: {
                                            '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',
                                            '575': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',
                                            '767': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',
                                            '991': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',
                                            '1400': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',
                                            '1920': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',
                                            '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp 2x',
                                            '575@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp 2x',
                                            '767@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp 2x',
                                            '991@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp 2x',
                                            '1400@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp 2x',
                                            '1920@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp 2x'
                                        },
                                        sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1400px) 1400px, 1920px'
                                    }"
                                    :alt="place.name"
                                />
                            </div>
                            <div v-else class="o-cover-place__image-lazyload">
                                <img
                                    class="o-cover-place__image-file lazyload-file"
                                    v-lazy="{
                                        src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                        srcset: {
                                            '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            '575': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            '767': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            '991': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            '1400': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            '1920': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                            '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                            '575@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                            '767@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                            '991@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                            '1400@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                            '1920@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'
                                        },
                                        sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1400px) 1400px, 1920px'
                                    }"
                                    :alt="place.name"
                                />
                            </div>
                        </div>
                        <h3 class="o-cover-place__name">
                            {{ place.name }}
                        </h3>
                        <NuxtLink class="o-cover-place__link" :to="`/svet/${type}/${place.slug}`"></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            places: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                required: true
            },
            type: {
                type: String,
                required: true
            }
        },
    }
</script>