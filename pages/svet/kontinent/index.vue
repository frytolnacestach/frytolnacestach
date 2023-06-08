<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - Hero place type -->
        <section class="t-section py-4">
            <div class="t-section__inner">
                <oHeroPlaceType styleType=" -continent" title="Kontinenty" perex="Na naší planetě najdete 7 kontinentů. Co takhle je prozkoumat všechny, včetně odlehlých míst jako je Antarktida?" />
            </div>
        </section>
        <!-- SECTION - Hero place type END -->

        <!-- SECTION - Place list -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oCoverPlace :places="placesContinents" :images="images" type="kontinent" />
            </div>
        </section>
        <!-- SECTION - Place list END -->

    </main>
</template>

<script>
    import oCoverPlace from '~/components/organisms/oCoverPlace.vue'
    import oHeroPlaceType from '~/components/organisms/oHeroPlaceType.vue'

    export default {
        name: 'SvetKontinentIndexPage',

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
            title: 'Kontinenty | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Zjisti si základní informace o kontinentech. a státech které se na nich nachází za pomocí cestovatelského portálu Frytol na cestách.' },
                { name: 'keywords', content: `kontinenty, informace o městech, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Kontinenty | Frytol na cestách' },
                { hid: 'og:description', content: 'Zjisti si základní informace o kontinentech. a státech které se na nich nachází za pomocí cestovatelského portálu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/svet/kontinent` },
                { hid: 'og:type', content: 'website' }  
            ]
        },


        async asyncData({ $axios }) {
            const [placesContinents, images] = await Promise.all([
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continents`),
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/images`)
            ]);
            return { placesContinents, images };
        }
    }
</script>