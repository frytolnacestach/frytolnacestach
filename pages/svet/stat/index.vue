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

                                        <lazyload v-if="images && images.find(image => image.id === placesState.id_image_cover)" class="o-cover-place__image-lazyload">
                                            <picture class="o-cover-place__image-picture">
                                                <source
                                                    class="o-cover-place__image-file"
                                                    media="(max-width: 640px)"
                                                    type="image/webp"
                                                    :srcset="'https://image.frytolnacestach.cz/storage' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.webp 1x, https://image.frytolnacestach.cz/storage' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.webp 2x'"
                                                    :sizes="'(max-width: 640px) 100vw'"
                                                />
                                                <source
                                                    class="o-cover-place__image-file"
                                                    media="(max-width: 1024px)"
                                                    type="image/webp"
                                                    :srcset="'https://image.frytolnacestach.cz/storage' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.webp 1x, https://image.frytolnacestach.cz/storage' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.webp 2x'"
                                                    :sizes="'(max-width: 1024px) 100vw'"
                                                />
                                                <source
                                                    class="o-cover-place__image-file"
                                                    type="image/webp"
                                                    :srcset="'https://image.frytolnacestach.cz/storage' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.webp 1x, https://image.frytolnacestach.cz/storage' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.webp 2x'"
                                                    :sizes="'(max-width: 1200px) 100vw, 800px'"
                                                />
                                                <img
                                                    class="o-cover-place__image-file"
                                                    :src="'https://image.frytolnacestach.cz/storage' + images.find(image => image.id === placesState.id_image_cover).source + images.find(image => image.id === placesState.id_image_cover).name + '.jpg'"
                                                    :alt="placesState.name"
                                                />
                                            </picture>
                                        </lazyload>
                                        <lazyload v-else class="o-cover-place__image-lazyload">
                                            <picture class="o-cover-place__image-picture">
                                                <source
                                                    class="o-cover-place__image-file"
                                                    media="(max-width: 640px)"
                                                    type="image/webp"
                                                    :srcset="`https://image.frytolnacestach.cz/storage/_default/hero.webp 1x, https://image.frytolnacestach.cz/storage/_default/hero.webp 2x`"
                                                    :sizes="'(max-width: 640px) 100vw'"
                                                />
                                                <source
                                                    class="o-cover-place__image-file"
                                                    media="(max-width: 1024px)"
                                                    type="image/webp"
                                                    :srcset="`https://image.frytolnacestach.cz/storage/_default/hero.webp 1x, https://image.frytolnacestach.cz/storage/_default/hero.webp 2x`"
                                                    :sizes="'(max-width: 1024px) 100vw'"
                                                />
                                                <source
                                                    class="o-cover-place__image-file"
                                                    type="image/webp"
                                                    :srcset="`https://image.frytolnacestach.cz/storage/_default/hero.webp 1x, https://image.frytolnacestach.cz/storage/_default/hero.webp 2x`"
                                                    :sizes="'(max-width: 1200px) 100vw, 800px'"
                                                />
                                                <img
                                                    class="o-cover-place__image-file"
                                                    :src="`https://image.frytolnacestach.cz/storage/_default/hero.jpg`"
                                                    :alt="placesState.name"
                                                />
                                            </picture>
                                        </lazyload>
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
        name: 'PageStáty',

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