<template>
    <main class="t-main -blue -pt-menu" role="main">
        
        <!-- SECTION - Hero -->
		<section class="t-section -p0 pt-2 pb-1">
            <div class="t-section__inner">
                <oHero :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Form Registration -->
		<section class="t-section -p0 pt-2 pb-1">
            <div class="t-section__inner">
                <oFormRegistration />
            </div>
        </section>
        <!-- SECTION - Form Registration END -->

    </main>
</template>

<script>
    import { loginCheckLogin } from '~/utils/loginCheckLogin.js';

    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oHero from '~/components/organisms/oHero.vue'
    import oFormRegistration from '~/components/organisms/oFormRegistration.vue'

    export default {
        name: 'UcetRegistracePage',
        
        components: {
            aButtonFillFull,
            mHeadline,
            oHero,
            oFormRegistration
        },

        data() {
            return {
                headline: 'Registrace',
            }
        },

        mounted() {
            loginCheckLogin(this.$router);
        },

        head: {
            title: 'REGISTRACE | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Registrace na webu Frytol na cestách.' },
                { name: 'keywords', content: `Cestovatelský portál, úvod, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Registrace' },
                { hid: 'og:description', content: 'Registrace na webu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}` },
                { hid: 'og:type', content: 'website' }
            ]
        }
    }
</script>