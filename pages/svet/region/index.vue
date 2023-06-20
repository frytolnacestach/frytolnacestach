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

        data() {
            return {
                placesRegions: this.placesRegions,
                images: this.images
            }
        },

        head: {
            title: 'Regiony | Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Zjisti si základní informace o regionech. a místech které se v nich nachází za pomocí cestovatelského portálu Frytol na cestách.' },
                { name: 'keywords', content: `regiony, informace o regionech, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Regiony | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Zjisti si základní informace o regionech. a místech které se v nich nachází za pomocí cestovatelského portálu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/svet/region` },
                { hid: 'og:type', content: 'website' }  
            ]
        },

        //API STATIC
        async asyncData({ $axios }) {
            //Get placesRegions
            const placesRegions = await $axios.$get(`https://api.frytolnacestach.cz/api/places-regions?showType=list`)

            //Images placesRegions
            //IDS Array
            const imagesPlacesRegionsIDS = placesRegions.map(placesRegion => placesRegion.id_image_cover).filter(id => id !== null && id !== '')
            //Get images
            const images = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPlacesRegionsIDS.join(',')}`)

            //return
            return {
                placesRegions,
                images
            }
        }
    }
</script>