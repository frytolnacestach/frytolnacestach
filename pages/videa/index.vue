<template>
    <main class="t-main -gray -pt-menu" role="main">

        <!-- SECTION - Hero -->
		<section class="t-section -p0 mb-1 mt-2">
            <div class="t-section__inner">
                <oHero :headline="headline" modifierCSS=" -gray"/>
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - videos -->
        <section class="t-section -p0 py-1 px-2" v-if="videos[0]">
            <div class="t-section__inner">
                <oVideoList :videos="videos" :images="images" />
            </div>
        </section>
        <!-- SECTION - videos END -->

        <!-- SECTION - Platforms -->
        <section class="t-section -p0 py-1 mt-2 px-2">
            <div class="t-section__inner">
                <mHeadline title="Platformy kde jsem" styleAlign=" -left" styleGap="mb-1" />
                <oPlatform />
                <div class="flex flex-center mb-4">
                    <aButtonFillFull url="/social" text="Více informací o platformách" styleThema=" -green" target="internal" />
                </div>
            </div>
        </section>
        <!-- SECTION - Platforms END -->
    </main>
</template>

<script>

    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oHero from '../../components/organisms/oHero.vue'
    import oPlatform from '../../components/organisms/oPlatform.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'

    export default {
        name: 'VideaIndexPage',

        components: {
            aButtonFillFull,
            mHeadline,
            oHero,
            oPlatform,
            oVideoList
        },

        data() {
            return {
                headline: "Videa",
                videos: this.videos,
                images: this.images
            }
        },

        head: {
            title: 'Videa | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Cestovatelská videa z různích míst naší krásné planety.' },
                { name: 'keywords', content: `cestovatelská videa, youtube, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Videa | Frytol na cestách' },
                { hid: 'og:description', content: 'Cestovatelská videa z různích míst naší krásné planety.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/videa` },
                { hid: 'og:type', content: 'website' }  
            ]
        },

        updated() {
            window.lazySizes && window.lazySizes.update();
        },

        async asyncData({ $axios }) {
            const videos = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/videos`)

            // Načtení informací o obrázku
            const images = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images`)
            return { videos, images }
        }
    }
</script>