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

        <section class="t-section t-section--gray">
            <div class="m-headline mt-4 text-align-center">
                <h2 class="m-headline__title">Tady mě najdeš</h2>
            </div>
            <SectionPlatform />
            <div class="flex flex-center mb-4">
                <NuxtLink class="a-button-fill a-button-fill--big a-button-fill--blue" to="/social">Více informací</NuxtLink>
            </div>
        </section>
    </main>
</template>

<script>
    import SectionHero from '../components/SectionHero.vue'
    import SectionWhoiam from '../components/SectionWhoiam.vue'
    import SectionPlatform from '../components/SectionPlatform.vue'

    export default {
        name: 'PageIam',

        components: {
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
                { property: 'og:image', content: '/images/og/og-default.png' }
            ]
        }
    }
</script>