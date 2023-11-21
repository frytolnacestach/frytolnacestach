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
                        <!-- SECTION - Recenze -->
                        <section class="t-section -padding-x -p0 pb-4">
                            <div class="t-section__inner">
                                <oReviewItemListAccount :account="account" />
                            </div>
                        </section>
                        <!-- SECTION - Recenze END -->
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
    import oReviewItemListAccount from '~/components/organisms/oReviewItemListAccount.vue'


    export default {
        name: 'UcetRecenzePage',

        components: {
            mAccountHeader,
            mHeadline,
            mNavAccount,
            oReviewItemListAccount
        },

        data() {
            return {
                mNavAccountOpen: false,
                email: null,
                passwordHash: null,
                account: ''
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
            title = 'MÍSTA CO JSEM HODNOTIL | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Místa co jsem hodnotil, které jsou na cetovatelském portálu Frytol na cestách.'

            // keywolds
            keywords = 'můj profil, recenze, cestovatelský portál, statistiky'
            
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
                    { hid: 'og:title', content: title },
                    { hid: 'og:description', content: ogDescription },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:type', content: ogType }
                ]
            }
        },

        async mounted() {
            loginCheckLogout(this.$router)

            if (process.client) {
                let success = false
                let data = null
                
                const localStorageEmail = localStorage.getItem('userEmail')
                const localStoragePasswordHash = localStorage.getItem('userPasswordHash')

                this.email = localStorageEmail
                this.passwordHash = localStoragePasswordHash

                while (!success) {
                    try {
                        // PAGE - Account list
                        // Account
                        const account = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-authentication?email=${encodeURIComponent(this.email)}&password_hash=${encodeURIComponent(this.passwordHash)}`)


                        data = {
                            account
                        }


                        success = true
                    } catch (error) {
                        console.log(`API ERROR - HODNOTIL JSEM`)
                        console.error(error)

                        await new Promise(resolve => setTimeout(resolve, 1000))
                    }
                }

                // Update data properties with fetched data
                Object.assign(this, data)
            }
        },

        methods: {
            menuAccountUpdate(newValue) {
                this.mNavAccountOpen = newValue
            }
        }
    }
</script>
