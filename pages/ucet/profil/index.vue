<template>
    <main class="t-main -bg-person -pt-menu" role="main">

        <!-- SECTION - FlashMassagesAccount -->
        <oFlashMessagesAccount />
        <!-- SECTION - FlashMassagesAccount END -->

        <!-- SECTION -->
        <section class="t-section -padding-x -padding-y -p0 mb-4">
            <div class="t-section__inner">
                <div class="t-grid -account">
                    
                    <div class="t-grid__section -nav">
                        <!-- SECTION - account headline - account -->
                        <section class="t-section -padding-x -p0">
                            <div class="t-section__inner">
                                <mAccountHeader />
                            </div>
                        </section>
                        <!-- SECTION - nav - account END -->

                        <!-- SECTION - nav - account -->
                        <section class="t-section -padding-x -p0">
                            <div class="t-section__inner">
                                <mNavAccount />
                            </div>
                        </section>
                        <!-- SECTION - nav - account END -->
                    </div>

                    <div class="t-grid__section -content">
                        <!-- SECTION - Form - profile -->
                        <section class="t-section -padding-x -p0">
                            <div class="t-section__inner">
                                <mHeadline title="Základní informace" styleThema=" -account" styleAlign="" styleGap="" />
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

    import mAccountHeader from '~/components/molecules/mAccountHeader.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import mNavAccount from '~/components/molecules/mNavAccount.vue'
    import oFlashMessagesAccount from '~/components/organisms/oFlashMessagesAccount.vue'
    import oFormProfile from '~/components/organisms/oFormProfile.vue'

    export default {
        name: 'UcetProfilPage',
        
        components: {
            mAccountHeader,
            mHeadline,
            mNavAccount,
            oFlashMessagesAccount,
            oFormProfile
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