<template>
    <main class="t-main -pt-menu" role="main">

        <!-- SECTION - Hero fauna -->
        <section class="t-section py-4 -bg-world">
            <div class="t-section__inner">
                <oHeroFood title="Fauna" perex="Jaké fauna kde žije? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách." />
            </div>
        </section>
        <!-- SECTION - Hero fauna END -->

        <!-- SECTION - Fauna list -->
        <section class="t-section -bg-world -p0">
            <div class="t-section__inner">
                <oCoverFood :foods="fauna" :images="images" />
            </div>
        </section>
        <!-- SECTION - Fauna list END -->

    </main>
</template>

<script>
    import oCoverFood from '~/components/organisms/oCoverFood.vue'
    import oHeroFood from '~/components/organisms/oHeroFood.vue'

    export default {
        name: 'FaunaIndexPage',

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
            title: 'Fauna | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Jaké fauna kde žije? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { name: 'keywords', content: `Fauna, co žije?, Zvířata ve světě, informace o zvířatech, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Fauna | Frytol na cestách' },
                { hid: 'og:description', content: 'Jaké fauna kde žije? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/fauna` },
                { hid: 'og:type', content: 'website' }  
            ]
        },


        async asyncData({ $axios }) {
            const [fauna, images] = await Promise.all([
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/faunas`),
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/images`)
            ]);
            return { fauna, images };
        }
    }
</script>