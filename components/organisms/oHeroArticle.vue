<template>
    <div class="o-hero-article">
        <div class="o-hero-article__image loading-image">
            <div v-if="images && images.find(image => image.id === post[0].id_image_hero)" class="o-hero-place__image-lazyload">
                <img
                    class="o-hero-place__image-file lazyload-file"
                    v-lazy="{
                        src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp',
                        srcset: {
                            '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp',
                            '575': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp',
                            '767': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp',
                            '991': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp',
                            '1139': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp',
                            '1219': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp',
                            '1399': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp',
                            '1400': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp',
                            '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp 2x',
                            '575@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp 2x',
                            '767@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp 2x',
                            '911@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp 2x',
                            '1139@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp 2x',
                            '1219@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp 2x',
                            '1399@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp 2x',
                            '1400@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post[0].id_image_cover).source + images.find(image => image.id === post[0].id_image_cover).name + '.webp 2x'
                        },
                        sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1400px'
                    }"
                    :alt="post[0].title"
                />
            </div>
            <div v-else class="o-hero-article__image-lazyload">
                <img
                    class="o-hero-article__image-file lazyload-file"
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
                    :alt="post[0].title"
                />
            </div>

            <div class="o-hero-article__outer">
                <div class="o-hero-article__inner">
                    <h1 class="o-hero-article__headline" v-if="post[0].title">{{ post[0].title }}</h1>
                    <p class="o-hero-article__perex" v-if="post[0].perex">{{ post[0].perex }}</p>
                    <span class="o-hero-article__date" v-if="post[0].date">{{ formatDate(post[0].date) }} <span v-if="post[0].dateUpdate">(aktualizace {{ formatDate(post[0].dateUpdate) }})</span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            post: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                required: true
            }
        },

        methods:{
            formatDate(date) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' }
                return new Date(date).toLocaleDateString('cs', options)
            }
        },
    }
</script>