<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - Hero place type -->
        <section class="t-section py-4">
            <div class="t-section__inner">
                <oHeroPlaceType styleType=" -region" title="Regiony" perex="Informace o regionech" />
            </div>
        </section>
        <!-- SECTION - Hero place type END -->

        <!-- SECTION - Place list -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oCoverPlace :places="placesRegions" :images="images" type="region" />
            </div>
        </section>
        <!-- SECTION - Place list END -->

    </main>
</template>

<script>
    import oCoverPlace from '~/components/organisms/oCoverPlace.vue'
    import oHeroPlaceType from '~/components/organisms/oHeroPlaceType.vue'

    export default {
        name: 'SvetRegionIndexPage',

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
            title: 'Regiony | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Zjisti si základní informace o regionech. a místech které se v nich nachází za pomocí cestovatelského portálu Frytol na cestách.' },
                { name: 'keywords', content: `regiony, informace o regionech, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Regiony | Frytol na cestách' },
                { hid: 'og:description', content: 'Zjisti si základní informace o regionech. a místech které se v nich nachází za pomocí cestovatelského portálu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/svet/region` },
                { hid: 'og:type', content: 'website' }  
            ]
        },


        async asyncData({ $axios }) {
            const [placesRegions, images] = await Promise.all([
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-regions`),
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/images`)
            ]);
            return { placesRegions, images };
        }
    }
</script>