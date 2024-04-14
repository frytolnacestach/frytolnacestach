<template>
    <main class="t-main -blue -pt-menu" role="main">
        <div class="t-main__content">
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
                                    <oCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesContinentsID" type="kontinent" typeAccount="login" :status="1" />
                                </div>
                            </section>
                            <!-- SECTION - Visited place category END -->

                            <!-- SECTION - Visited place category -->
                            <section class="t-section -padding-x -p0 pb-4 print-section">
                                <div class="t-section__inner">
                                    <mHeadline title="Státy které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                    <oCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesStatesID" type="stat" typeAccount="login" :status="1" />
                                </div>
                            </section>
                            <!-- SECTION - Visited place category END -->

                            <!-- SECTION - Visited place category -->
                            <section class="t-section -padding-x -p0 pb-4 print-section">
                                <div class="t-section__inner">
                                    <mHeadline title="Města které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                    <oCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesCitiesID" type="mesto" typeAccount="login" :status="1" />
                                </div>
                            </section>
                            <!-- SECTION - Visited place category END -->

                            <!-- SECTION - Visited place category -->
                            <section class="t-section -padding-x -p0 pb-4 print-section">
                                <div class="t-section__inner">
                                    <mHeadline title="Regiony které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                    <oCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesRegionsID" type="region" typeAccount="login" :status="1" />
                                </div>
                            </section>
                            <!-- SECTION - Visited place category END -->

                            <!-- SECTION - Visited place category -->
                            <section class="t-section -padding-x -p0 pb-4 print-section">
                                <div class="t-section__inner">
                                    <mHeadline title="Místa které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                    <oCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesSpotsID" type="misto" typeAccount="login" :status="1" />
                                </div>
                            </section>
                            <!-- SECTION - Visited place category END -->
                        </div>

                    </div>
                </div>
            </section>
            <!-- SECTION END -->
        </div>
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
                placesContinentsID: [],
                placesStatesID: [],
                placesCitiesID: [],
                placesRegionsID: [],
                placesSpotsID: [],
                skeleton: true
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
            async fetchData() {
                try {
                    if (this.account && this.account.length !== 0) {
                        if (process.client) {
                            // COMPONENT - oCoverPlaceVisited
                            // PlacesID
                            this.placesID = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-visited-place-id-user?id_user=${this.account[0].id}&status=1`)
                            this.placesContinentsID = this.placesID.filter(place => place.type === 'continent').map(place => place.id_place) || []
                            this.placesStatesID = this.placesID.filter(place => place.type === 'state').map(place => place.id_place) || []
                            this.placesCitiesID = this.placesID.filter(place => place.type === 'city').map(place => place.id_place) || []
                            this.placesRegionsID = this.placesID.filter(place => place.type === 'region').map(place => place.id_place) || []
                            this.placesSpotsID = this.placesID.filter(place => place.type === 'spot').map(place => place.id_place) || []

                            this.skeleton = false
                        }
                    }
                } catch (error) {
                    console.log(`API ERROR - MOJE ČLÁNKY`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            },


            menuAccountUpdate(newValue) {
                this.mNavAccountOpen = newValue
            }
        },

        watch: {
            account: {
                handler: 'fetchData',
                immediate: true
            },
            
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
