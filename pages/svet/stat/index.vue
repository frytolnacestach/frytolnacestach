<template>
    <main class="t-main">
        <!-- SECTION - Hero place type -->
        <section class="t-section py-4 -bg-brand3">
            <div class="t-section__inner">
                <div class="o-hero-place-type">
                    <div class="o-hero-place-type__outer">
                        <div class="o-hero-place-type__inner">
                            <div class="o-hero-place-type__image">
                                <div class="o-hero-place-type__image-file -state"></div>
                            </div>
                            <h1 class="o-hero-place-type__headline">STÁTY</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- SECTION - Hero place type END -->

        <section class="t-section">
            <div class="t-section__inner">
                <div class="o-cover-place">
                    <div class="o-cover-place__outer">
                        <div class="o-cover-place__items">
                            <div v-for="placesState in placesStates" :key="placesState.id" class="o-cover-place__item">
                                <div class="o-cover-place__content">
                                    <div class="o-cover-place__image loading-image">
                                        <div v-if="images && images.find(image => image.id === placesState.id_image_cover)" class="o-cover-place__image-lazyload">
                                            <img
                                                class="o-cover-place__image-file"
                                                v-lazy="{
                                                    src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.webp',
                                                    srcset: {
                                                        '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.webp',
                                                        '575': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.webp',
                                                        '767': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.webp',
                                                        '991': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + 'o.webp',
                                                        '1400': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.webp',
                                                        '1920': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.webp',
                                                        '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.webp 2x',
                                                        '575@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.webp 2x',
                                                        '767@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.webp 2x',
                                                        '991@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.webp 2x',
                                                        '1400@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.webp 2x',
                                                        '1920@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.webp 2x'
                                                    },
                                                    sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1400px) 1400px, 1920px'
                                                }"
                                                :alt="placesState.name"
                                            />
                                        </div>
                                        <div v-else class="o-cover-place__image-lazyload">
                                            <img
                                                class="o-cover-place__image-file"
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
                                                :alt="placesState.name"
                                            />
                                        </div>
                                    </div>
                                    <h3 class="o-cover-place__name">
                                        {{ placesState.name }}
                                    </h3>
                                    <NuxtLink class="o-cover-place__link" :to="`/svet/stat/${placesState.slug}`"></NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>

<script>
    import SectionHero from '../../../components/SectionHero.vue'
    import SectionPlatform from '../../../components/SectionPlatform.vue'

    export default {
        name: 'PageStaty',

        components: {
            SectionHero,
            SectionPlatform
        },

        methods:{
            getSlugURL(url) {
                url = url.replace("https://youtu.be/", "").replace("https://youtube.com/shorts/", "");
                return url.replace(" ", "");
            }
        },

        data() {
            return {}
        },

        head: {
            title: 'Státy | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Oběvuj svět a jeho místá s Frytolem na cestách' },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/og/og-default.png' }
            ]
        },


        async asyncData({ $axios }) {
            const [placesContinents, placesStates, placesCities, images] = await Promise.all([
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continents`),
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-states`),
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-cities`),
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/images`)
            ]);
            return { placesContinents, placesStates, placesCities, images };
        }
    }
</script>