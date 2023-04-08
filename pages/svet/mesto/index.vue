<template>
    <main class="t-main">
        <section class="t-section">
            <SectionHero :headline="headline" />
        </section>

        <section class="t-section my-4">
            <div class="t-section__inner">
                <div class="m-nav-alphabet">
                    <div class="m-nav-alphabet__outer">
                        <div class="m-nav-alphabet__inner">
                            <ul class="m-nav-alphabet__items">
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">A</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">B</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">C</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">D</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">E</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">F</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">G</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">H</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">CH</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">I</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">J</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">K</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">L</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">M</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">N</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">O</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">P</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">Q</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">R</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">S</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">T</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">U</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">V</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">W</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">X</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">Y</span>
                                </li>
                                <li class="m-nav-alphabet__item">
                                    <span class="m-nav-alphabet__span">Z</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="t-section my-4">
            <div class="t-section__inner">
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
    import SectionHero from '../../../components/SectionHero.vue'
    import SectionPlatform from '../../../components/SectionPlatform.vue'

    export default {
        name: 'PageMesta',

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
                headline: "Města"
            }
        },

        head: {
            title: 'Města | Frytol na cestách',
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