<template>
    <main class="t-main -blue -pt-menu" role="main">
        <div class="t-main__content">
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

                            <!-- SECTION - Achievements -->
                            <section class="t-section -padding-x -p0 pb-4">
                                <div class="t-section__inner">
                                    <mHeadline title="Achievementy" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                    <oAchievements :account="account" type="account" />
                                </div>
                            </section>
                            <!-- SECTION - Achievements END -->
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
    import { loginCheckLogout } from '~/utils/loginCheckLogout.js'

    import mAccountHeader from '~/components/molecules/mAccountHeader.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import mNavAccount from '~/components/molecules/mNavAccount.vue'
    import oAchievements from '~/components/organisms/oAchievements.vue'

    export default {
        name: 'UcetAchievementyPage',
        
        components: {
            mAccountHeader,
            mHeadline,
            mNavAccount,
            oAchievements
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
            title = 'ACHIEVEMENTY | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Získané achievementy na cetovatelském portálu Frytol na cestách.'

            // keywolds
            keywords = 'Cestovatelský portál, cestování chytře, plánuj, úvod, cestování, svět'
            
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
                    { hid: 'title', name: 'title', content: title },
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { hid: 'og:type', content: ogType },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:title', content: ogTitle },
                    { hid: 'og:description', content: ogDescription },
                    { property: 'og:image', content: ogImage },
                    { name: 'twitter:title', content: ogTitle },
                    { name: 'twitter:description', content: ogDescription },
                    { name: 'twitter:image', content: ogImage },
                    { name: 'twitter:url', content: ogUrl }
                ],
                link: [
                    { rel: 'canonical', href: ogUrl }
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