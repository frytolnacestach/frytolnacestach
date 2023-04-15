<template>
    <main class="t-main">
        
        <section class="t-section">
            <SectionHero :headline="headline" />
        </section>

        <section class="t-section py-4">
            <div class="t-section__inner">
                <SectionWhoiam />
            </div>
        </section>

        <!-- SECTION - Platforms -->
        <section class="t-section t-section--gray pt-4">
            <div class="t-section__inner">
                <mHeadline title="Platformy kde jsem" styleAlign=" -center" />
                <SectionPlatform />
                <div class="flex flex-center mb-4">
                    <NuxtLink class="a-button-fill a-button-fill--big a-button-fill--blue" to="/social">Více informací</NuxtLink>
                </div>
            </div>
        </section>
        <!-- SECTION - Platforms END -->
    </main>
</template>

<script>
    import mHeadline from '@/components/mHeadline.vue'
    import SectionHero from '../components/SectionHero.vue'
    import SectionWhoiam from '../components/SectionWhoiam.vue'
    import SectionPlatform from '../components/SectionPlatform.vue'

    export default {
        name: 'PageIam',

        components: {
            mHeadline,
            SectionHero,
            SectionWhoiam,
            SectionPlatform
        },

        data() {
            return {
                headline: "Kdo jsem"
            }
        },

        head: {
            title: 'Kdo jsem | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Kdo je Frytol na cestách?' },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/_default/og-default.png' }
            ]
        }
    }
</script>