<template>
    <main class="t-main -pt-menu">
        <section class="t-section">
            <SectionHero :headline="headline" />
        </section>

        <section class="t-section pb-4">
            <div class="t-section__inner">
                <SectionDonate />
                <SectionSupport />
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
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import SectionHero from '../components/SectionHero.vue'
    import SectionDonate from '../components/SectionDonate.vue'
    import SectionSupport from '../components/SectionSupport.vue'
    import SectionPlatform from '../components/SectionPlatform.vue'

    export default {
        name: 'PageDonate',

        components: {
            mHeadline,
            SectionHero,
            SectionDonate,
            SectionSupport,
            SectionPlatform
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
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/_default/og-default.png' }
            ]
        }
    }
</script>