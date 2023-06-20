<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - Hero food -->
        <section class="t-section py-4">
            <div class="t-section__inner">
                <oHero headline="Jídla" perex="Jaké jídla se jedí ve světe. Na které kde narazíte a co si kde dát? To zjistíte na této stránce cestovatelského portálu Frytol na cestách." modifierCSS=" -green -w600" />
            </div>
        </section>
        <!-- SECTION - Hero food END -->

        <!-- SECTION - Food list -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oCoverItem :items="foods" :images="images" type="jidlo" />
            </div>
        </section>
        <!-- SECTION - Food list END -->

    </main>
</template>

<script>
    import oCoverItem from '~/components/organisms/oCoverItem.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'JidloIndexPage',

        components: {
            oCoverItem,
            oHero
        },

        data() {
            return {
                foods: this.foods,
                images: this.images
            }
        },

        head: {
            title: 'Tradiční jídla ve světě | Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Jaké jídla se jedí ve světe. Na které kde narazíte a co si kde dát? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { name: 'keywords', content: `Jídla, kde se co jí?, světová tradiční jídla, informace o jídlech, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Tradiční jídla ve světě | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Jaké jídla se jedí ve světe. Na které kde narazíte a co si kde dát? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/jidlo` },
                { hid: 'og:type', content: 'website' }  
            ]
        },

        //API STATIC
        async asyncData({ $axios }) {
            //Get foods
            const foods = await $axios.$get(`https://api.frytolnacestach.cz/api/foods`)

            //Images foods
            //IDS Array
            const imagesFoodsIDS = foods.map(food => food.id_image_cover).filter(id => id !== null && id !== '')
            //Get images
            const images = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesFoodsIDS.join(',')}`)

            //return
            return {
                foods,
                images
            }
        }
    }
</script>