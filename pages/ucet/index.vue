<template>
    <main class="t-main -bg-person -pt-menu" role="main">
        
        <!-- SECTION - Hero -->
		<section class="t-section -p0 pt-2 pb-1">
            <div class="t-section__inner">
                <oHero :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Signpost -->
		<section class="t-section -p0 pt-2 pb-1">
            <div class="t-section__inner">
                <oSignpost />
            </div>
        </section>
        <!-- SECTION - Signpost END -->

    </main>
</template>

<script>

    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oHero from '~/components/organisms/oHero.vue'
    import oSignpost from '~/components/organisms/oSignpost.vue'

    export default {
        name: 'UcetIndexPage',
        
        components: {
            aButtonFillFull,
            mHeadline,
            oHero,
            oSignpost
        },

        data() {
            return {
                headline: 'Účet na Frytol na cestách',
            }
        },

        head: {
            title: 'ÚČET | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Účet na webu Frytol na cestách.' },
                { name: 'keywords', content: `Cestovatelský portál, úvod, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Frytol na cestách' },
                { hid: 'og:description', content: 'Účet na webu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}` },
                { hid: 'og:type', content: 'website' }
            ]
        },

        async asyncData({ $axios }) {

        }
    }
</script>