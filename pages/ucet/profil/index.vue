<template>
    <main class="t-main -bg-person -pt-menu" role="main">
        
        <!-- SECTION - Hero -->
		<section class="t-section -p0 pt-2 pb-1">
            <div class="t-section__inner">
                <oHero :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - FlashMassagesAccount -->
        <section class="t-section pt-2 pb-1">
            <div class="t-section__inner">
                <oFlashMessagesAccount />
            </div>
        </section>
        <!-- SECTION - FlashMassagesAccount END -->

        <!-- SECTION -->
        <section class="t-section -px-world -p0">
            <div class="t-section__inner">
                <div class="t-grid -account">
                    
                    <div class="t-grid__section -nav">
                        <!-- SECTION - nav - account -->
                        <section class="t-section pt-2 pb-1">
                            <div class="t-section__inner">
                                <mNavAccount />
                            </div>
                        </section>
                        <!-- SECTION - nav - account END -->
                    </div>

                    <div class="t-grid__section -content">
                        <!-- SECTION - Form - profile -->
                        <section class="t-section pt-2 pb-1">
                            <div class="t-section__inner">
                                <oFormProfile />
                            </div>
                        </section>
                        <!-- SECTION - Form - profile END -->
                    </div>

                </div>
            </div>
        </section>
        <!-- SECTION END -->

    </main>
</template>

<script>
    import { loginCheckLogout } from '~/utils/loginCheckLogout.js';

    import mNavAccount from '~/components/molecules/mNavAccount.vue'
    import oFlashMessagesAccount from '~/components/organisms/oFlashMessagesAccount.vue'
    import oFormProfile from '~/components/organisms/oFormProfile.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'UcetProfilPage',
        
        components: {
            mNavAccount,
            oFlashMessagesAccount,
            oFormProfile,
            oHero
        },

        data() {
            return {
                headline: 'Profil',
            }
        },

        mounted() {
            loginCheckLogout(this.$router);
        },

        head: {
            title: 'PROFIL | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Profil účtu na webu Frytol na cestách.' },
                { name: 'keywords', content: `Cestovatelský portál, úvod, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Profil účtu' },
                { hid: 'og:description', content: 'Profil účtu na webu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}` },
                { hid: 'og:type', content: 'website' }
            ]
        }
    }
</script>