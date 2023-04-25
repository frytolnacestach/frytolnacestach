<template>
    <main class="t-main -pt-menu" role="main">

        <!-- SECTION - Hero -->
		<section class="t-section -p0">
            <div class="t-section__inner">
                <oHero :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <section class="t-section pb-4">
            <div class="t-section__inner">
                <oDonate />
                <oSupport />
            </div>
        </section>

        <!-- SECTION - Platforms -->
        <section class="t-section t-section--gray pt-4">
            <div class="t-section__inner">
                <mHeadline title="Platformy kde jsem" styleAlign=" -center" />
                <oPlatform />
                <div class="flex flex-center mb-4">
                    <aButtonFill url="/social" text="Více informací" styleThema=" -blue" styleSize=" -big" target="internal" />
                </div>
            </div>
        </section>
        <!-- SECTION - Platforms END -->
    </main>
</template>

<script>

    import aButtonFill from '~/components/atoms/aButtonFill.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oDonate from '../components/organisms/oDonate.vue'
    import oHero from '../components/organisms/oHero.vue'
    import oPlatform from '../components/organisms/oPlatform.vue'
    import oSupport from '../components/organisms/oSupport.vue'

    export default {
        name: 'PageDonate',

        components: {
            aButtonFill,
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
                { hid: 'description', name: 'description', content: 'Podpořit web Frytol na cestách' },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' }
            ]
        }
    }
</script>