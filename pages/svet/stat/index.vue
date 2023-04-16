<template>
    <main class="t-main -pt-menu">
        
        <!-- SECTION - Hero place type -->
        <section class="t-section py-4 -bg-brand3">
            <div class="t-section__inner">
                <oHeroPlaceType styleType=" -state" title="Státy" />
            </div>
        </section>
        <!-- SECTION - Hero place type END -->

        <!-- SECTION - Place list -->
        <section class="t-section">
            <div class="t-section__inner">
                <oCoverPlace :places="placesStates" :images="images" type="stat" />
            </div>
        </section>
        <!-- SECTION - Place list END -->

    </main>
</template>

<script>
    import oCoverPlace from '~/components/organisms/oCoverPlace.vue'
    import oHeroPlaceType from '~/components/organisms/oHeroPlaceType.vue'

    export default {
        name: 'PageStaty',

        components: {
            oCoverPlace,
            oHeroPlaceType
        },

        methods:{
            getSlugURL(url) {
                url = url.replace("https://youtu.be/", "").replace("https://youtube.com/shorts/", "");
                return url.replace(" ", "");
            }
        },

        data() {
            return {
                images: this.images,
                placesStates: this.placesStates
            }
        },

        head: {
            title: 'Státy | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Oběvuj svět a jeho místá s Frytolem na cestách' },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/_default/og-default.png' }
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