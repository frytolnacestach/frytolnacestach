<template>
    <main class="t-main -pt-menu" role="main">

        <!-- SECTION - Hero flora -->
        <section class="t-section py-4 -bg-world">
            <div class="t-section__inner">
                <oHeroFood title="Flóra" perex="Jaké flóra kde roste? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách." />
            </div>
        </section>
        <!-- SECTION - Hero flora END -->

        <!-- SECTION - Flora list -->
        <section class="t-section -bg-world -p0">
            <div class="t-section__inner">
                <oCoverFood :foods="flora" :images="images" />
            </div>
        </section>
        <!-- SECTION - Flora list END -->

    </main>
</template>

<script>
    import oCoverFood from '~/components/organisms/oCoverFood.vue'
    import oHeroFood from '~/components/organisms/oHeroFood.vue'

    export default {
        name: 'FloraIndexPage',

        components: {
            oCoverFood,
            oHeroFood
        },

        methods:{

        },

        data() {
            return {}
        },

        head: {
            title: 'Flóra | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Jaké flóra kde roste? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { name: 'keywords', content: `Flóra, kde co roste?, Jedovaté rostliny, informace o rostlinách, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Flóra | Frytol na cestách' },
                { hid: 'og:description', content: 'Jaké flóra kde roste? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/flora` },
                { hid: 'og:type', content: 'website' }  
            ]
        },


        async asyncData({ $axios }) {
            const [flora, images] = await Promise.all([
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/floras`),
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/images`)
            ]);
            return { flora, images };
        }
    }
</script>