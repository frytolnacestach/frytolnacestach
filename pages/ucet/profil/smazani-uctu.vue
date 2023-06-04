<template>
    <main class="t-main -bg-person -pt-menu" role="main">
        
        <!-- SECTION - Hero -->
		<section class="t-section -p0 pt-2 pb-1">
            <div class="t-section__inner">
                <oHero :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

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
                        <!-- SECTION - Text -->
                        <section class="t-section pt-2 pb-1">
                            <div class="t-section__inner">
                                <p>
                                    Pro zrušení účtu nás prosím kontaktujte na admin@frytolnacestach.cz. Za nedlouho vám toto umožní jedno tlačítko.
                                </p>
                            </div>
                        </section>
                        <!-- SECTION - Text END -->
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
    import oHero from '~/components/organisms/oHero.vue'

    export default {
        name: 'UcetSmazaniUctuPage',
        
        components: {
            mNavAccount,
            oHero
        },

        data() {
            return {
                headline: 'Smazání účtu',
            }
        },

        mounted() {
            loginCheckLogout(this.$router);
        },

        head: {
            title: 'Smazání účtu | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Smazání účtu na webu Frytol na cestách.' },
                { name: 'keywords', content: `Cestovatelský portál, úvod, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Smazání účtu' },
                { hid: 'og:description', content: 'Smazání účtu na webu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}` },
                { hid: 'og:type', content: 'website' }
            ]
        }
    }
</script>