<template>
    <div class="o-hero">
        <div class="o-hero__image loading-image">
            <div class="o-hero__image-lazyload">
                <img
                    class="o-hero__image-file lazyload-file"
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
                    :alt="headline"
                />
            </div>

            <div class="o-hero__outer">
                <div class="o-hero__inner">
                    <h1 class="o-hero__headline">{{ headline }}</h1>
                    <p class="o-hero__perex">{{ perex }}</p>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    export default {
        name: 'oHero',
        props: {
            headline: {
                type: String,
                required: true
            },
            perex: {
                type: String,
                required: false
            }
        },
    }
</script>