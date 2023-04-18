<template>
    <div class="o-hero-place">
        <div class="o-hero-place__container">
            <div class="o-hero-place__image loading-image">
                <div v-if="images && images.find(image => image.id === place[0].id_image_hero)" class="o-hero-place__image-lazyload">
                    <img
                        class="o-hero-place__image-file lazyload-file"
                        v-lazy="{
                            src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp',
                            srcset: {
                                '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp',
                                '575': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp',
                                '767': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp',
                                '991': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp',
                                '1139': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp',
                                '1219': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp',
                                '1399': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp',
                                '1400': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp',
                                '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp 2x',
                                '575@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp 2x',
                                '767@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp 2x',
                                '911@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp 2x',
                                '1139@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp 2x',
                                '1219@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp 2x',
                                '1399@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp 2x',
                                '1400@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place[0].id_image_cover).source + images.find(image => image.id === place[0].id_image_cover).name + '.webp 2x'
                            },
                            sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1400px'
                        }"
                        :alt="place[0].name ? place[0].name : 'Úvodní obrázek'"
                    />
                </div>
                <div v-else class="o-hero-place__image-lazyload">
                    <img
                        class="o-hero-place__image-file lazyload-file"
                        v-lazy="{
                            src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                            srcset: {
                                '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                '575': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                '767': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                '991': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                '1139': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                '1219': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                '1399': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                '1400': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                '575@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                '767@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                '991@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                '1139@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                '1219@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                '1399@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                '1400@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'
                            },
                            sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1400px'
                        }"
                        :alt="place[0].name ? place[0].name : 'Úvodní obrázek'"
                    />
                </div>
                
                <div class="o-hero-place__outer">
                    <div class="o-hero-place__inner">
                        <h1 class="o-hero-place__headline" v-if="place[0].name">{{ place[0].name }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            place: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                required: true
            }
        }
    }
</script>