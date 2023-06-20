<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - Hero flora -->
        <section class="t-section py-4">
            <div class="t-section__inner">
                <oHero headline="Flóra" perex="Jaké flóra kde roste? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách." modifierCSS=" -green -w600" />
            </div>
        </section>
        <!-- SECTION - Hero flora END -->

        <!-- SECTION - Flora list -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oCoverItem :items="floras" :images="images" type="flora" />
            </div>
        </section>
        <!-- SECTION - Flora list END -->

    </main>
</template>

<script>
    import oCoverItem from '~/components/organisms/oCoverItem.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'FloraIndexPage',

        components: {
            oCoverItem,
            oHero
        },

        data() {
            return {
                floras: this.floras,
                images: this.images
            }
        },

        head: {
            title: 'Flóra co roste ve světě | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Jaké flóra kde roste? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { name: 'keywords', content: `Flóra, kde co roste?, Jedovaté rostliny, informace o rostlinách, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Flóra co roste ve světě | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Jaké flóra kde roste? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/flora` },
                { hid: 'og:type', content: 'website' }  
            ]
        },

        //API STATIC
        async asyncData({ $axios }) {
            //Get floras
            const floras = await $axios.$get(`https://api.frytolnacestach.cz/api/floras`)

            //Images floras
            //IDS Array
            const imagesFlorasIDS = floras.map(flora => flora.id_image_cover).filter(id => id !== null && id !== '')
            //Get images
            const images = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesFlorasIDS.join(',')}`)

            //return
            return {
                floras,
                images
            }
        }
    }
</script>