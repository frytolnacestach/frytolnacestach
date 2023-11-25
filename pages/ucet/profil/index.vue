<template>
    <main class="t-main -blue -pt-menu" role="main">

        <!-- SECTION - FlashMassagesAccount -->
        <oFlashMessagesAccount :account="account" />
        <!-- SECTION - FlashMassagesAccount END -->

        <!-- SECTION -->
        <section class="t-section -padding-x -padding-y -p0 mb-4">
            <div class="t-section__inner">
                <div class="t-grid -account">
                    
                    <div class="t-grid__section -nav">
                        <!-- SECTION - account headline - account -->
                        <section class="t-section -padding-x -p0">
                            <div class="t-section__inner">
                                <mAccountHeader :account="account" @update="menuAccountUpdate" />
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
                        <!-- SECTION - Number places -->
                        <section class="t-section -padding-x -p0 mb-2">
                            <div class="t-section__inner">
                                <mHeadline title="Počet navštívených míst" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oNumberPlaces :account="account" />
                            </div>
                        </section>
                        <!-- SECTION - Number places END -->

                        <!-- SECTION - Form - profile -->
                        <section class="t-section -padding-x -p0">
                            <div class="t-section__inner">
                                <mHeadline title="Základní informace" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oFormProfile :account="account" />
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
    import { loginCheckLogout } from '~/utils/loginCheckLogout.js'

    import mAccountHeader from '~/components/molecules/mAccountHeader.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import mNavAccount from '~/components/molecules/mNavAccount.vue'
    import oFlashMessagesAccount from '~/components/organisms/oFlashMessagesAccount.vue'
    import oFormProfile from '~/components/organisms/oFormProfile.vue'
    import oNumberPlaces from '~/components/organisms/oNumberPlaces.vue'

    export default {
        name: 'UcetProfilPage',
        
        components: {
            mAccountHeader,
            mHeadline,
            mNavAccount,
            oFlashMessagesAccount,
            oFormProfile,
            oNumberPlaces
        },

        data() {
            return {
                account: [],
                mNavAccountOpen: false
            }
        },

        head() {
            // Variables
            let title
            let description
            let keywords
            let ogImage
            let ogTitle
            let ogDescription
            let ogUrl
            let ogType

            // title
            title = 'MŮJ PROFIL | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Profil účtu na cetovatelském portálu Frytol na cestách.'

            // keywolds
            keywords = 'můj profil, cestovatelský portál, statistiky'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}`

            // ogType
            ogType = 'website'

            // Return
            return {
                title,
                meta: [
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { property: 'og:image', content: ogImage },
                    { hid: 'og:title', content: ogTitle },
                    { hid: 'og:description', content: ogDescription },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:type', content: ogType }
                ]
            }
        },

        mounted() {
            loginCheckLogout(this.$router)
        },

        methods: {
            menuAccountUpdate(newValue) {
                this.mNavAccountOpen = newValue
            }
        },

        watch: {
            '$store.state.account': {
                deep: true,
                immediate: true,
                handler() {
                    this.account = this.$store.state.account
                }
            }
        }
    }
</script>