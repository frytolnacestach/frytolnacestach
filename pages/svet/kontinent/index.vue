<template>
    <main class="t-main">
        <!-- SECTION - Hero place type -->
        <section class="t-section py-4 -bg-brand3">
            <div class="t-section__inner">
                <div class="o-hero-place-type">
                    <div class="o-hero-place-type__outer">
                        <div class="o-hero-place-type__inner">
                            <div class="o-hero-place-type__image">
                                <div class="o-hero-place-type__image-file -continent"></div>
                            </div>
                            <h1 class="o-hero-place-type__headline">KONTINENTY</h1>
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
                            <div v-for="placesContinent in placesContinents" :key="placesContinent.id" class="o-cover-place__item">
                                <div class="o-cover-place__content">
                                    <div class="o-cover-place__image">
                                        <div class="o-cover-place__image-file" v-bind:style="{ 'background-image': 'url(' + (images && images.find(image => image.id === placesContinent.id_image_cover) ? 'https://image.frytolnacestach.cz/storage' + images.find(image => image.id === placesContinent.id_image_cover).source + images.find(image => image.id === placesContinent.id_image_cover).name + '.jpg' : 'https://image.frytolnacestach.cz/storage/_default/hero.png') + ')' }"></div>
                                    </div>
                                    <h3 class="o-cover-place__name">
                                        {{ placesContinent.name }}
                                    </h3>
                                    <NuxtLink class="o-cover-place__link" :to="`/svet/kontinent/${placesContinent.slug}`"></NuxtLink>
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
        name: 'PageKontinenty',

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
            title: 'Kontinenty | Frytol na cestách',
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