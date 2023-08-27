<template>
    <main class="t-main -blue -pt-menu" role="main">

        <!-- SECTION -->
        <section class="t-section -padding-x -padding-y -p0 mb-4">
            <div class="t-section__inner">
                <div class="t-grid -account">
                    
                    <div class="t-grid__section -nav">
                        <!-- SECTION - account headline - account -->
                        <section class="t-section -padding-x -p0">
                            <div class="t-section__inner">
                                <mAccountHeader @update="menuAccountUpdate" />
                            </div>
                        </section>
                        <!-- SECTION - nav - account END -->

                        <!-- SECTION - nav - account -->
                        <section class="t-section -padding-x -p0">
                            <div class="t-section__inner">
                                <mNavAccount :statusOpen="mNavAccountOpen" />
                            </div>
                        </section>
                        <!-- SECTION - nav - account END -->
                    </div>

                    <div class="t-grid__section -content">
                        <!-- SECTION - Follower list -->
                        <section class="t-section -padding-x -p0 pb-4">
                            <div class="t-section__inner">
                                <mHeadline title="Sleduji" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oFollowerList type="account" />
                            </div>
                        </section>
                        <!-- SECTION - Follower list END -->
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
    import oFollowerList from '~/components/organisms/oFollowerList.vue'

    export default {
        name: 'UcetSledujiPage',
        
        components: {
            mAccountHeader,
            mHeadline,
            mNavAccount,
            oFollowerList
        },

        data() {
            return {
                mNavAccountOpen: false
            }
        },

        mounted() {
            loginCheckLogout(this.$router);
        },

        head: {
            title: 'Sleduji | Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Sleduji na webu Frytol na cestách.' },
                { name: 'keywords', content: `Cestovatelský portál, úvod, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Sleduji | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Sleduji na webu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}` },
                { hid: 'og:type', content: 'website' }
            ]
        },

        methods: {
            menuAccountUpdate(newValue) {
                this.mNavAccountOpen = newValue;
            }
        }
    }
</script>