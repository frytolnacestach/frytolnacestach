<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - Hero place type -->
        <section class="t-section py-4">
            <div class="t-section__inner">
                <oHeroPlaceType styleType=" -city" title="Města" perex="Podle velmi nepřesných zdrojů je na Zemi asi 3 a půl milionu obcí. My jich tu máme přibližně 2500." />
            </div>
        </section>
        <!-- SECTION - Hero place type END -->

        <!-- SECTION - Alphabet -->
        <section class="t-section">
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
        name: 'SvetMestoIndexPage',

        components: {
            mNavAlphabet,
            oCoverPlace,
            oHeroPlaceType
        },

        methods:{
            async getPlaces(letter) {
                try {
                    //Get placesCities
                    const placesCities = await this.$axios.$get(`https://api.frytolnacestach.cz/api/places-cities-initial/${letter}`)

                    //Images placesCities
                    //IDS Array
                    const imagesPlacesCitiesIDS = placesCities.map(placesCity => placesCity.id_image_cover).filter(id => id !== null && id !== '')
                    //Get images
                    const images = await this.$axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesCitiesIDS.join(',')}`)

                    this.placesCities = placesCities;
                    this.images = images;
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
            title: 'Města | Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Objevuj největší a nejznámější města světa na cestovatelské portálu Frytolem na cestách. Naplánuj si ideální cestu.' },
                { name: 'keywords', content: `města, největší města, nejznámější města, informace o městech, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Města | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Objevuj největší a nejznámější města světa na cestovatelské portálu Frytolem na cestách. Naplánuj si ideální cestu.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/svet/mesto` },
                { hid: 'og:type', content: 'website' }  
            ]
        },

        //API STATIC
        async asyncData({ $axios }) {
            // PAGE - Cities list
            // PlacesCities
            const placesCities = await $axios.$get(`https://api.frytolnacestach.cz/api/places-cities-initial/A`)
            // Images
            const imagesPlacesCitiesIDS = placesCities.map(placesCity => placesCity.id_image_cover).filter(id => id !== null && id !== '')
            const images = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesCitiesIDS.join(',')}`)

            
            //return
            return {
                placesCities,
                images
            }
        }
    }
</script>