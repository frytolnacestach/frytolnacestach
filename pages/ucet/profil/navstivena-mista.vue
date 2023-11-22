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
                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4 print-section">
                            <div class="t-section__inner">
                                <mHeadline title="Kontinety které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :loadingNecessaryData="loadingComponentOCoverPlaceVisited" :placesID="placesContinentsID" type="kontinent" account="login" :status="1" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4 print-section">
                            <div class="t-section__inner">
                                <mHeadline title="Státy které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :loadingNecessaryData="loadingComponentOCoverPlaceVisited" :placesID="placesStatesID" type="stat" account="login" :status="1" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4 print-section">
                            <div class="t-section__inner">
                                <mHeadline title="Města které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :loadingNecessaryData="loadingComponentOCoverPlaceVisited" :placesID="placesCitiesID" type="mesto" account="login" :status="1" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4 print-section">
                            <div class="t-section__inner">
                                <mHeadline title="Regiony které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :loadingNecessaryData="loadingComponentOCoverPlaceVisited" :placesID="placesRegionsID" type="region" account="login" :status="1" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4 print-section">
                            <div class="t-section__inner">
                                <mHeadline title="Místa které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :loadingNecessaryData="loadingComponentOCoverPlaceVisited" :placesID="placesSpotsID" type="misto" account="login" :status="1" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->
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
    import oCoverPlaceVisited from '~/components/organisms/oCoverPlaceVisited.vue'

    export default {
        name: 'UcetNavstivenaMistaPage',

        components: {
            mAccountHeader,
            mHeadline,
            mNavAccount,
            oCoverPlaceVisited
        },

        data() {
            return {
                account: [],
                mNavAccountOpen: false,
                email: null,
                passwordHash: null,
                account: '',
                placesContinentsID: [],
                placesStatesID: [],
                placesCitiesID: [],
                placesRegionsID: [],
                placesSpotsID: [],
                loadingComponentOCoverPlaceVisited: true
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
            title = 'MÍSTA CO JSEM NAVŠTÍVIL | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Místa co jsem navštívil, které jsou na cetovatelském portálu Frytol na cestách.'

            // keywolds
            keywords = 'můj profil, navštívená místa, cestovatelský portál, statistiky'
            
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
                
                const localStorageEmail = localStorage.getItem("accountEmail")
                const localStoragePasswordHash = localStorage.getItem("accountPasswordHash")

                this.email = localStorageEmail
                this.passwordHash = localStoragePasswordHash

                while (!success) {
                    try {
                        // PAGE - Account list
                        // Account
                        const account = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-authentication?email=${encodeURIComponent(this.email)}&password_hash=${encodeURIComponent(this.passwordHash)}`)


                        // COMPONENT - oCoverPlaceVisited
                        // PlacesID
                        const placesID = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-visited-place-id-user?id_user=${account[0].id}&status=1`)
                        const placesContinentsID = placesID.filter(place => place.type === 'continent').map(place => place.id_place) || []
                        const placesStatesID = placesID.filter(place => place.type === 'state').map(place => place.id_place) || []
                        const placesCitiesID = placesID.filter(place => place.type === 'city').map(place => place.id_place) || []
                        const placesRegionsID = placesID.filter(place => place.type === 'region').map(place => place.id_place) || []
                        const placesSpotsID = placesID.filter(place => place.type === 'spot').map(place => place.id_place) || []

                        // TO DATA
                        data = {
                            account,
                            placesContinentsID,
                            placesStatesID,
                            placesCitiesID,
                            placesRegionsID,
                            placesSpotsID
                        }

                        // END LOADING
                        this.loadingComponentOCoverPlaceVisited = false

                        // SUCCESS
                        success = true
                    } catch (error) {
                        console.log(`API ERROR - NAVSTIVIL JSEM`)
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
