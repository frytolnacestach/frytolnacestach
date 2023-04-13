<template>
    <main class="t-main">
        <section class="t-section">
            <SectionHero :headline="headline" />
        </section>

        <section>
            <SectionBoxplatform />
        </section>
    </main>
</template>

<script>
    import SectionHero from '../components/SectionHero.vue'
    import SectionBoxplatform from '../components/SectionBoxplatform.vue'

    export default {
        name: 'PageSocial',
        
        components: {
            SectionHero,
            SectionBoxplatform
        },

        data() {
            return {
                headline: "Kde mě najdete"
            }
        },

        head: {
            title: 'Kde mě najdeš | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Sociální síťě kde jsem jako Frytol na cestách' },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/_default/og-default.png' }
            ]
        }
    }
</script>