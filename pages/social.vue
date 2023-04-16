<template>
    <main class="t-main -pt-menu">

        <!-- SECTION - Hero -->
		<section class="t-section -p0">
            <div class="t-section__inner">
                <oHero :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <section>
            <SectionBoxplatform />
        </section>
    </main>
</template>

<script>
    import oHero from '../components/organisms/oHero.vue'
    import SectionBoxplatform from '../components/SectionBoxplatform.vue'

    export default {
        name: 'PageSocial',
        
        components: {
            oHero,
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