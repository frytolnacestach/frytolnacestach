<template>
    <main class="t-main -pt-menu" role="main">

        <!-- SECTION - Hero značky -->
        <section class="t-section py-4">
            <div class="t-section__inner">
                <oHero headline="Značky" perex="Jaké značky a výrobky kde najdete? To zjistíte na této stránce cestovatelského portálu Frytol na cestách." modifierCSS=" -green -w600" />
            </div>
        </section>
        <!-- SECTION - Hero značky END -->

        <!-- SECTION - Značky list -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oCoverItem :items="brands" :images="images" type="znacka" />
            </div>
        </section>
        <!-- SECTION - Značky list END -->

    </main>
</template>

<script>
    import oCoverItem from '~/components/organisms/oCoverItem.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'ZnackaIndexPage',

        components: {
            oCoverItem,
            oHero
        },

        data() {
            return {
                brands: this.brands,
                images: this.images
            }
        },

        head: {
            title: 'Značky | Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Jaké značky a výrobky kde najdete? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { name: 'keywords', content: `Značky, výrobky, tradiční výroba, informace o výrobcích, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Fauna | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Jaké značky a výrobky kde najdete? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/znacka` },
                { hid: 'og:type', content: 'website' }  
            ]
        },

        //API STATIC
        async asyncData({ $axios }) {
            //Get brands
            const brands = await $axios.$get(`https://api.frytolnacestach.cz/api/brands`)

            //Images brands
            //IDS Array
            const imagesBrandsIDS = brands.map(brand => brand.id_image_cover).filter(id => id !== null && id !== '')
            //Get images
            const images = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesBrandsIDS.join(',')}`)

            //return
            return {
                brands,
                images
            }
        }
    }
</script>