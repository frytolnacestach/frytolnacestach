<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - Hero fauna -->
        <section class="t-section py-4">
            <div class="t-section__inner">
                <oHero headline="Fauna" perex="Jaké fauna kde žije? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách." modifierCSS=" -green -w600" />
            </div>
        </section>
        <!-- SECTION - Hero fauna END -->

        <!-- SECTION - Fauna list -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oCoverItem :items="fauna" :images="images" type="fauna" />
            </div>
        </section>
        <!-- SECTION - Fauna list END -->

    </main>
</template>

<script>
    import oCoverItem from '~/components/organisms/oCoverItem.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'FaunaIndexPage',

        components: {
            oCoverItem,
            oHero
        },

        methods:{

        },

        data() {
            return {}
        },

        head: {
            title: 'Fauna co žije ve světě | Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Jaké fauna kde žije? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { name: 'keywords', content: `Fauna, co žije?, Zvířata ve světě, informace o zvířatech, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Fauna co žije ve světě | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Jaké fauna kde žije? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/fauna` },
                { hid: 'og:type', content: 'website' }  
            ]
        },


        async asyncData({ $axios }) {
            const [fauna, images] = await Promise.all([
                $axios.$get(`https://api.frytolnacestach.cz/api/faunas`),
                $axios.$get(`https://api.frytolnacestach.cz/api/images`)
            ]);
            return { fauna, images };
        }
    }
</script>