<template>
    <main class="t-main">
        <section class="t-section">
            <SectionHero :headline="headline" />
        </section>

        <section class="t-section my-4">
            <div class="t-section__inner">
                <div class="m-headline mb-2 text-align-center">
                    <h2 class="m-headline__title">Kontinenty</h2>
                </div>
                <div class="o-cover-place">
                    <div class="o-cover-place__outer">
                        <div class="o-cover-place__items">
                            <div v-for="placesContinent in placesContinents" :key="placesContinent.id" class="o-cover-place__item">
                                <div class="o-cover-place__content">
                                    <div class="o-cover-place__image">
                                        <div class="o-cover-place__image-file" v-bind:style="{ 'background-image': 'url(' + (placesContinent.image_cover ? placesContinent.image_cover : 'https://image.frytolnacestach.cz/storage/_default/hero.png') + ')' }"></div>
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

        <section class="t-section my-4">
            <div class="t-section__inner">
                <div class="m-headline mb-2 text-align-center">
                    <h2 class="m-headline__title">Státy</h2>
                </div>
                <div class="o-cover-place o-cover-place--smaller">
                    <div class="o-cover-place__outer">
                        <div class="o-cover-place__items">
                            <div v-for="placesState in placesStates" :key="placesState.id" class="o-cover-place__item">
                                <div class="o-cover-place__content">
                                    <div class="o-cover-place__image">
                                        <div class="o-cover-place__image-file" v-bind:style="{ 'background-image': 'url(' + (placesState.image_cover ? placesState.image_cover : 'https://image.frytolnacestach.cz/storage/_default/hero.png') + ')' }"></div>
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

        <section class="t-section my-4">
            <div class="t-section__inner">
                <div class="m-headline mb-2 text-align-center">
                    <h2 class="m-headline__title">Města</h2>
                </div>
                <div class="o-cover-place o-cover-place--smallest">
                    <div class="o-cover-place__outer">
                        <div class="o-cover-place__items">
                            <div v-for="placesCity in placesCities" :key="placesCity.id" class="o-cover-place__item">
                                <div class="o-cover-place__content">
                                    <div class="o-cover-place__image">
                                        <div class="o-cover-place__image-file" v-bind:style="{ 'background-image': 'url(' + (placesCity.image_cover ? placesCity.image_cover : 'https://image.frytolnacestach.cz/storage/_default/hero.png') + ')' }"></div>
                                    </div>
                                    <h3 class="o-cover-place__name">
                                        {{ placesCity.name }}
                                    </h3>
                                    <NuxtLink class="o-cover-place__link" :to="`/svet/mesto/${placesCity.slug}`"></NuxtLink>
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
    import SectionHero from '../../components/SectionHero.vue'
    import SectionPlatform from '../../components/SectionPlatform.vue'

    export default {
        name: 'PageSvet',

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
            return {
                headline: "Svět"
            }
        },

        head: {
            title: 'Svět | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Oběvuj svět a jeho místá s Frytolem na cestách' },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/og/og-default.png' }
            ]
        },


        async asyncData({ $axios }) {
            const [placesContinents, placesStates, placesCities] = await Promise.all([
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continents`),
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-states`),
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-cities`)
            ]);
            return { placesContinents, placesStates, placesCities };
        }
    }
</script>