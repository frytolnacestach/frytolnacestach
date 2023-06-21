<template>
    <main class="t-main -blue -pt-menu" role="main">
        
        <!-- SECTION - Hero -->
		<section class="t-section -p0 pt-2 pb-1">
            <div class="t-section__inner">
                <oHero :headline="headline" modifierCSS=" -blue" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Signpost -->
		<section class="t-section -p0 pt-2 pb-1">
            <div class="t-section__inner">
                <oSignpost />
            </div>
        </section>
        <!-- SECTION - Signpost END -->

    </main>
</template>

<script>
    import { loginCheckLogin } from '~/utils/loginCheckLogin.js';

    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oHero from '~/components/organisms/oHero.vue'
    import oSignpost from '~/components/organisms/oSignpost.vue'

    export default {
        name: 'UcetIndexPage',
        
        components: {
            aButtonFillFull,
            mHeadline,
            oHero,
            oSignpost
        },

        data() {
            return {
                headline: 'Účet na portálu Frytol na cestách',
            }
        },

        mounted() {
            loginCheckLogin(this.$router);
        },

        head: {
            title: 'ÚČET | Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Účet na webu Frytol na cestách.' },
                { name: 'keywords', content: `Cestovatelský portál, úvod, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Účet | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Účet na webu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}` },
                { hid: 'og:type', content: 'website' }
            ]
        }
    }
</script>