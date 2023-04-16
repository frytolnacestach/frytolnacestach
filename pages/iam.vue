<template>
    <main class="t-main -pt-menu">
        
        <!-- SECTION - Hero -->
		<section class="t-section -p0">
            <div class="t-section__inner">
                <oHero :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <section class="t-section py-4">
            <div class="t-section__inner">
                <oWhoiam />
            </div>
        </section>

        <!-- SECTION - Platforms -->
        <section class="t-section t-section--gray pt-4">
            <div class="t-section__inner">
                <mHeadline title="Platformy kde jsem" styleAlign=" -center" />
                <oPlatform />
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
    import oHero from '../components/organisms/oHero.vue'
    import oPlatform from '../components/organisms/oPlatform.vue'
    import oWhoiam from '../components/organisms/oWhoiam.vue'

    export default {
        name: 'PageIam',

        components: {
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
            title: 'Kdo jsem | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Kdo je Frytol na cestách?' },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/_default/og-default.png' }
            ]
        }
    }
</script>