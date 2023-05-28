<template>
    <main class="t-main -pt-menu" role="main">

        <!-- SECTION - Hero food -->
        <section class="t-section py-4 -bg-world">
            <div class="t-section__inner">
                <oHeroFood title="Jídla" perex="Jaké jídla se jedí ve světe. Na které kde narazíte a co si kde dát? To zjistíte na této stránce cestovatelského portálu Frytol na cestách." />
            </div>
        </section>
        <!-- SECTION - Hero food END -->

        <!-- SECTION - Food list -->
        <section class="t-section -bg-world -p0">
            <div class="t-section__inner">
                <oCoverFood :foods="foods" :images="images" />
            </div>
        </section>
        <!-- SECTION - Food list END -->

    </main>
</template>

<script>
    import oCoverFood from '~/components/organisms/oCoverFood.vue'
    import oHeroFood from '~/components/organisms/oHeroFood.vue'

    export default {
        name: 'JidloIndexPage',

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
            title: 'Jídla | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Jaké jídla se jedí ve světe. Na které kde narazíte a co si kde dát? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { name: 'keywords', content: `Jídla, kde se co jí?, světová tradiční jídla, informace o jídlech, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Jídla | Frytol na cestách' },
                { hid: 'og:description', content: 'Jaké jídla se jedí ve světe. Na které kde narazíte a co si kde dát? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/jidlo` },
                { hid: 'og:type', content: 'website' }  
            ]
        },


        async asyncData({ $axios }) {
            const [foods, images] = await Promise.all([
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/foods`),
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/images`)
            ]);
            return { foods, images };
        }
    }
</script>