<template>
    <main class="t-main -gray -pt-menu" role="main">
        
        <!-- SECTION - Hero -->
        <section class="t-section -p0 pt-2 pb-1">
            <div class="t-section__inner">
                <oHero :headline="headline" modifierCSS=" -gray" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Whoiam -->
        <section class="t-section -p0 py-1">
            <div class="t-section__inner">
                <oWhoiam />
            </div>
        </section>
        <!-- SECTION - Whoiam END -->

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
    import oHero from '../components/organisms/oHero.vue'
    import oPlatform from '../components/organisms/oPlatform.vue'
    import oWhoiam from '../components/organisms/oWhoiam.vue'

    export default {
        name: 'IamPage',

        components: {
            aButtonFillFull,
            mHeadline,
            oHero,
            oPlatform,
            oWhoiam
        },

        data() {
            return {
                headline: "Kdo jsem"
            }
        },

        head: {
            title: 'Kdo jsem | Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Kdo je Frytol na cestách? Co dělá a kde ho najdete.' },
                { name: 'keywords', content: `Cestovatelská videa, Internetové platformy, kdo jsem, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Kdo jsem | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Kdo je Frytol na cestách? Co dělá a kde ho najdete.' },
                { hid: 'og:url', content: `${process.env.baseUrl}/iam` },
                { hid: 'og:type', content: 'website' }
            ]
        }
    }
</script>