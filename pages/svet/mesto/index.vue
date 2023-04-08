<template>
    <main class="t-main">
        <!-- SECTION - Hero place type -->
        <section class="t-section py-4 -bg-brand3">
            <div class="t-section__inner">
                <div class="o-hero-place-type">
                    <div class="o-hero-place-type__outer">
                        <div class="o-hero-place-type__inner">
                            <div class="o-hero-place-type__image">
                                <div class="o-hero-place-type__image-file -city"></div>
                            </div>
                            <h1 class="o-hero-place-type__headline">MĚSTA</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- SECTION - Hero place type END -->

        <section class="t-section pb-2 -bg-brand3">
            <div class="t-section__inner">
                <div class="m-nav-alphabet">
                    <div class="m-nav-alphabet__outer">
                        <div class="m-nav-alphabet__inner">
                            <ul class="m-nav-alphabet__items">
                                <li class="m-nav-alphabet__item" v-for="letter in alphabet" :key="letter" :class="{ '-active': isActive(letter) }">
                                    <a class="m-nav-alphabet__link" href="#" @click.prevent="getPlaces(letter)">
                                        <span class="m-nav-alphabet__span">{{ letter }}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="t-section">
            <div class="t-section__inner">
                <div class="o-cover-place">
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
            },

            async getPlaces(letter) {
                try {
                    const [placesCities] = await Promise.all([
                        this.$axios.$get(`https://frytolnacestach-api.vercel.app/api/places-cities-initial/${letter}`)
                    ]);

                    this.placesCities = placesCities;
                    this.selectedLetter = letter;
                } catch (error) {
                    console.error(error)
                }
            },

            isActive(letter) {
                return letter === this.selectedLetter;
            }
        },

        data() {
            return {
                alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'CH', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
                placesCities: [],
                selectedLetter: "A"
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
            const [placesCities] = await Promise.all([
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-cities-initial/A`)
            ]);
            return { placesCities };
        }
    }
</script>