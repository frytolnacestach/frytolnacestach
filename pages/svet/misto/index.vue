<template>
    <main class="t-main -pt-menu" role="main">

        <!-- SECTION - Hero place type -->
        <section class="t-section py-4 -bg-world">
            <div class="t-section__inner">
                <oHeroPlaceType styleType=" -spot" title="Místa" perex="Informace o místech" />
            </div>
        </section>
        <!-- SECTION - Hero place type END -->

        <!-- SECTION - Place list -->
        <section class="t-section -bg-world -p0">
            <div class="t-section__inner">
                <oCoverPlace :places="placesSpots" :images="images" type="misto" />
            </div>
        </section>
        <!-- SECTION - Place list END -->

    </main>
</template>

<script>
    import oCoverPlace from '~/components/organisms/oCoverPlace.vue'
    import oHeroPlaceType from '~/components/organisms/oHeroPlaceType.vue'

    export default {
        name: 'SvetMistoIndexPage',

        components: {
            oCoverPlace,
            oHeroPlaceType
        },

        methods:{

        },

        data() {
            return {}
        },

        head: {
            title: 'Místa | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Zjisti si základní informace o místech za pomocí cestovatelského portálu Frytol na cestách.' },
                { name: 'keywords', content: `místa, informace o místech, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Regiony | Frytol na cestách' },
                { hid: 'og:description', content: 'Zjisti si základní informace o místech za pomocí cestovatelského portálu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/svet/misto` },
                { hid: 'og:type', content: 'website' }  
            ]
        },


        async asyncData({ $axios }) {
            const [placesSpots, images] = await Promise.all([
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-spots`),
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/images`)
            ]);
            return { placesSpots, images };
        }
    }
</script>