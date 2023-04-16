<template>
    <main class="t-main -pt-menu">
        
        <!-- SECTION - Hero -->
		<section class="t-section -p0">
            <div class="t-section__inner">
                <oHero :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Build -->
		<section class="t-section">
			<oBuild />
		</section>
		<!-- SECTION - Build END -->

    </main>
</template>

<script>
    import oBuild from '../components/organisms/oBuild.vue'
    import oHero from '../components/organisms/oHero.vue'

    export default {
        name: 'PageStyleguide',
        
        components: {
            oBuild,
            oHero
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