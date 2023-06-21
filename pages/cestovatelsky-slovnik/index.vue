<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - Hero cestovatelsky slovnik -->
        <section class="t-section py-4">
            <div class="t-section__inner">
                <oHero headline="Cestovatelský slovník" perex="Najdeš zde spoustu výrazů a zkratek které se ti mohou hodit při tvém cestování." modifierCSS=" -green -w600" />
            </div>
        </section>
        <!-- SECTION - Hero cestovatelsky slovnik END -->

        <!-- SECTION - cestovatelsky slovnik list -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oCoverItem :items="travelDictionaries" :images="images" type="cestovatelsky-slovnik" />
            </div>
        </section>
        <!-- SECTION - cestovatelsky slovnik list END -->

    </main>
</template>

<script>
    import oCoverItem from '~/components/organisms/oCoverItem.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'CestovatelskySlovnikIndexPage',

        components: {
            oCoverItem,
            oHero
        },

        data() {
            return {
                travelDictionaries: this.travelDictionaries,
                images: this.images
            }
        },

        head: {
            title: 'Cestovatelský slovník | Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Najdeš zde spoustu výrazů a zkratek které se ti mohou hodit při tvém cestování.' },
                { name: 'keywords', content: `Cestovatelský slovník, travel hack, zkratky, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Cestovatelský slovník | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Najdeš zde spoustu výrazů a zkratek které se ti mohou hodit při tvém cestování.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/cestovatelsky-slovnik` },
                { hid: 'og:type', content: 'website' }  
            ]
        },

        //API STATIC
        async asyncData({ $axios }) {
            // PAGE - TravelDictionaries list
            // TravelDictionaries
            const travelDictionaries = await $axios.$get(`https://api.frytolnacestach.cz/api/travel-dictionaries`)
            // Images
            const imagesTravelDictionariesIDS = travelDictionaries.map(travelDictionary => travelDictionary.id_image_cover).filter(id => id !== null && id !== '')
            const images = await $axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesTravelDictionariesIDS.join(',')}`)

            
            //return
            return {
                travelDictionaries,
                images
            }
        }
    }
</script>