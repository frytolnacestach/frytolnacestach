<template>
    <main class="t-main -bg-person -pt-menu" role="main">

        <!-- SECTION - Hero -->
		<section class="t-section -p0 mb-1 mt-2">
            <div class="t-section__inner">
                <oHero :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Box platform -->
        <section class="t-section -p0 mt-1 mb-2 px-2">
            <div class="t-section__inner">
                <oBoxPlatform />
            </div>
        </section>
        <!-- SECTION - Box platform END -->

    </main>
</template>

<script>
    import oBoxPlatform from '../components/organisms/oBoxPlatform.vue'
    import oHero from '../components/organisms/oHero.vue'

    export default {
        name: 'PageSocial',
        
        components: {
            oHero,
            oBoxPlatform
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
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' }
            ]
        }
    }
</script>