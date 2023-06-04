<template>
    <main class="t-main -bg-person -pt-menu" role="main">
        
        <!-- SECTION - Hero -->
		<section class="t-section -p0 pt-2 pb-1">
            <div class="t-section__inner">
                <oHero :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Text -->
		<section class="t-section pt-2 pb-1">
            <div class="t-section__inner">
                <p>
                    Pro zaslání uživatelský dat nás prosím kontaktujte na admin@frytolnacestach.cz. Za nedlouho vám tyto data budeme poskytovat automaticky.
                </p>
            </div>
        </section>
        <!-- SECTION - Text END -->

    </main>
</template>

<script>
    import { loginCheckLogout } from '~/utils/loginCheckLogout.js';

    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'UcetMojeDataPage',
        
        components: {
            aButtonFillFull,
            mHeadline,
            oHero
        },

        data() {
            return {
                headline: 'Moje data',
            }
        },

        mounted() {
            loginCheckLogout(this.$router);
        },

        head: {
            title: 'Moje data | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Moje data na webu Frytol na cestách.' },
                { name: 'keywords', content: `Cestovatelský portál, úvod, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Moje data' },
                { hid: 'og:description', content: 'Moje data na webu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}` },
                { hid: 'og:type', content: 'website' }
            ]
        }
    }
</script>