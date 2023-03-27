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
                <div class="o-place-list">
                    <div class="o-place-list__outer">
                        <div class="o-place-list__items">
                            <div v-for="placesContinent in placesContinents" :key="placesContinent.id" class="o-place-list__item">
                                <div class="o-place-list__item-inner">
                                    <div class="o-place-list__text">
                                        <h3 class="o-place-list__title">
                                            <NuxtLink class="o-place-list__title-link" :to="`/svet/kontinent/${placesContinent.slug}`">{{ placesContinent.name }}</NuxtLink>
                                        </h3>
                                    </div>
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
                <div class="o-place-list">
                    <div class="o-place-list__outer">
                        <div class="o-place-list__items">
                            <div v-for="placesState in placesStates" :key="placesState.id" class="o-place-list__item">
                                <div class="o-place-list__item-inner">
                                    <div class="o-place-list__text">
                                        <h3 class="o-place-list__title">
                                            <NuxtLink class="o-place-list__title-link" :to="`/svet/stat/${placesState.slug}`">{{ placesState.name }}</NuxtLink>
                                        </h3>
                                    </div>
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
                <div class="o-place-list">
                    <div class="o-place-list__outer">
                        <div class="o-place-list__items">
                            <div v-for="placesCity in placesCities" :key="placesCity.id" class="o-place-list__item">
                                <div class="o-place-list__item-inner">
                                    <div class="o-place-list__text">
                                        <h3 class="o-place-list__title">
                                            <NuxtLink class="o-place-list__title-link" :to="`/svet/mesto/${placesCity.slug}`">{{ placesCity.name }}</NuxtLink>
                                        </h3>
                                    </div>
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