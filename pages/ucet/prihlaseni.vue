<template>
    <main class="t-main -bg-person -pt-menu" role="main">
        
        <!-- SECTION - Hero -->
		<section class="t-section -p0 pt-2 pb-1">
            <div class="t-section__inner">
                <oHero :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Form Login -->
		<section class="t-section -p0 pt-2 pb-1">
            <div class="t-section__inner">
                <oFormLogin />
            </div>
        </section>
        <!-- SECTION - Form Login END -->

    </main>
</template>

<script>
    import { loginCheckLogin } from '~/utils/loginCheckLogin.js';

    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oHero from '~/components/organisms/oHero.vue'
    import oFormLogin from '~/components/organisms/oFormLogin.vue'

    export default {
        name: 'UcetPrihlaseniPage',
        
        components: {
            aButtonFillFull,
            mHeadline,
            oHero,
            oFormLogin
        },

        data() {
            return {
                headline: 'Přihlášení',
            }
        },

        mounted() {
            loginCheckLogin(this.$router);
        },

        head: {
            title: 'PŘIHLÁŠENÍ | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Přihlášení do účtu na webu Frytol na cestách.' },
                { name: 'keywords', content: `Cestovatelský portál, úvod, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Přihlášení' },
                { hid: 'og:description', content: 'Přihlášení do účtu na webu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}` },
                { hid: 'og:type', content: 'website' }
            ]
        }
    }
</script>