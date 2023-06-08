<template>
    <main class="t-main -gray -pt-menu" role="main">

        <!-- SECTION - Hero -->
		<section class="t-section -p0 mb-1 mt-2">
            <div class="t-section__inner">
                <oHero :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <section class="t-section -p0 my-1 px-2">
            <div class="t-section__inner">
                <oDonate />
                <oSupport />
            </div>
        </section>

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
    import oDonate from '../components/organisms/oDonate.vue'
    import oHero from '../components/organisms/oHero.vue'
    import oPlatform from '../components/organisms/oPlatform.vue'
    import oSupport from '../components/organisms/oSupport.vue'

    export default {
        name: 'DonatePage',

        components: {
            aButtonFillFull,
            mHeadline,
            oDonate,
            oHero,
            oPlatform,
            oSupport
        },

        data() {
            return {
                headline: "Podpořit"
            }
        },

        head: {
            title: 'Podpořit | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Podpořte cestovatelský portá a video tvorbu od Frytola na cestách.' },
                { name: 'keywords', content: `podpořit, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Podpořit | Frytol na cestách' },
                { hid: 'og:description', content: 'Podpořte cestovatelský portá a video tvorbu od Frytola na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/donate` },
                { hid: 'og:type', content: 'website' }
            ]
        }
    }
</script>