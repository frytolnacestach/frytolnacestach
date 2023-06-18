<template>
    <main class="t-main -green -pt-menu" role="main">

        <!-- SECTION - Hero event -->
        <section class="t-section py-4">
            <div class="t-section__inner">
                <oHero headline="Události" perex="Události které se ve světě konají." modifierCSS=" -green -w600" />
            </div>
        </section>
        <!-- SECTION - Hero event END -->

        <!-- SECTION - Event list -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oCoverItem :items="events" :images="images" type="udalost" />
            </div>
        </section>
        <!-- SECTION - Event list END -->

    </main>
</template>

<script>
    import oCoverItem from '~/components/organisms/oCoverItem.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'udalostIndexPage',

        components: {
            oCoverItem,
            oHero
        },

        head: {
            title: 'Události | Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Události které se ve světě konají.' },
                { name: 'keywords', content: `udalosti, svetove eventy, plánuj cestu, cestovatelský portál, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Události | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Události které se ve světě konají.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/udalost` },
                { hid: 'og:type', content: 'website' }  
            ]
        },

        async asyncData({ $axios }) {
            const [events, images] = await Promise.all([
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/events`),
                $axios.$get(`https://frytolnacestach-api.vercel.app/api/images`)
            ]);
            return { events, images };
        }
    }
</script>