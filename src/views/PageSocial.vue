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
                headline: "Error 404"
            }
        }
    }
</script>