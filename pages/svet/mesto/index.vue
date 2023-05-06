<template>
    <main class="t-main -pt-menu" role="main">

        <!-- SECTION - Hero place type -->
        <section class="t-section py-4 -bg-world">
            <div class="t-section__inner">
                <oHeroPlaceType styleType=" -city" title="Města" />
            </div>
        </section>
        <!-- SECTION - Hero place type END -->

        <!-- SECTION - Alphabet -->
        <section class="t-section -bg-world">
            <div class="t-section__inner">
                <!-- TODO <mNavAlphabet :alphabet="alphabet" />-->
                
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
         <!-- SECTION - Alphabet END -->

        <!-- SECTION - Place list -->
        <section class="t-section -bg-world -p0">
            <div class="t-section__inner">
                <oCoverPlace :places="placesCities" :images="images" type="mesto" />
            </div>
        </section>
        <!-- SECTION - Place list END -->

    </main>
</template>

<script>
    import mNavAlphabet from '~/components/molecules/mNavAlphabet.vue';
    import oCoverPlace from '~/components/organisms/oCoverPlace.vue'
    import oHeroPlaceType from '~/components/organisms/oHeroPlaceType.vue'

    export default {
        name: 'PageMesta',

        components: {
            mNavAlphabet,
            oCoverPlace,
            oHeroPlaceType
        },

        methods:{
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
                images: [],
                selectedLetter: "A"
            }
        },

        head: {
            title: 'Města | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Oběvuj svět a jeho místá s Frytolem na cestách' },
                { name: 'keywords', content: `města, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Města | Frytol na cestách' },
                { hid: 'og:description', content: 'Oběvuj svět a jeho místá s Frytolem na cestách' },
                { hid: 'og:url', content: `https://frytolnacestach.cz${this.$route.fullPath}` },
                { hid: 'og:type', content: 'website' }  
            ]
        },


        async asyncData({ $axios }) {
            const [placesCities, images] = await Promise.all([
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-cities-initial/A`),
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/images`)
            ]);
            return { placesCities, images };
        }
    }
</script>