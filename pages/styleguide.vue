<template>
    <main class="t-main">
        <section class="t-section">
            <SectionHero :headline="headline" />
        </section>

        <section class="t-section">
            <div class="t-section__inner">
                <div class="o-build">
                    <div class="o-build__outer">
                        <div class="o-build__inner">
                            <div class="o-build__text">
                                SEKCE SE PŘIPRAVUJE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import SectionHero from '../components/SectionHero.vue'

    export default {
        name: 'PageStyleguide',
        
        components: {
            SectionHero
        },

        data() {
            return {
                headline: "Styleguide"
            }
        },

        head: {
            title: 'Styleguide | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Styleguide webu Frytol na cestách' },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/_default/og-default.png' }
            ]
        }
    }
</script>