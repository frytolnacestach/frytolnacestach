<template>
    <main class="t-main -blue -pt-menu" role="main">
        
        <!-- SECTION - Hero -->
		<section class="t-section -p0 pt-2 pb-1">
            <div class="t-section__inner">
                <oHero :headline="headline" modifierCSS=" -blue" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Text -->
		<section class="t-section pt-2 pb-1">
            <div class="t-section__inner">
                <p>
                    Veše registrace byla úspěšná. Teď se <nuxtLink to="/ucet/prihlaseni">přihlašte</nuxtLink> a následně aktivujte účet.
                </p>
            </div>
        </section>
        <!-- SECTION - Text END -->

    </main>
</template>

<script>
    import { loginCheckLogin } from '~/utils/loginCheckLogin.js';

    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'UcetRegistraceDokoncenaPage',
        
        components: {
            aButtonFillFull,
            mHeadline,
            oHero
        },

        data() {
            return {
                headline: 'Vaše registrace byla dokončena',
            }
        },

        mounted() {
            loginCheckLogin(this.$router);
        },

        head: {
            title: 'REGISTRACE DOKONČENA | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Registrace na webu Frytol na cestách.' },
                { name: 'keywords', content: `Cestovatelský portál, úvod, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Vaše registrace byla dokonřena' },
                { hid: 'og:description', content: 'Registrace na webu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}` },
                { hid: 'og:type', content: 'website' }
            ]
        }
    }
</script>