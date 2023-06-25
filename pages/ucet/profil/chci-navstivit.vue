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
                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4">
                            <div class="t-section__inner">
                                <mHeadline title="Kontinety které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :loadingNecessaryData="loadingComponentOCoverPlaceVisited" :placesID="placesContinentsID" type="kontinent" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4">
                            <div class="t-section__inner">
                                <mHeadline title="Státy které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :loadingNecessaryData="loadingComponentOCoverPlaceVisited" :placesID="placesStatesID" type="stat" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4">
                            <div class="t-section__inner">
                                <mHeadline title="Města které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :loadingNecessaryData="loadingComponentOCoverPlaceVisited" :placesID="placesCitiesID" type="mesto" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4">
                            <div class="t-section__inner">
                                <mHeadline title="Regiony které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :loadingNecessaryData="loadingComponentOCoverPlaceVisited" :placesID="placesRegionsID" type="region" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4">
                            <div class="t-section__inner">
                                <mHeadline title="Místa které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :loadingNecessaryData="loadingComponentOCoverPlaceVisited" :placesID="placesSpotsID" type="misto" />
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
    import { loginCheckLogout } from '~/utils/loginCheckLogout.js';

    import mAccountHeader from '~/components/molecules/mAccountHeader.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import mNavAccount from '~/components/molecules/mNavAccount.vue'
    import oCoverPlaceVisited from '~/components/organisms/oCoverPlaceVisited.vue'

    export default {
        name: 'UcetZmenaHeslaPage',
        
        components: {
            mAccountHeader,
            mHeadline,
            mNavAccount,
            oCoverPlaceVisited
        },

        data() {
            return {
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

        head: {
            title: 'MÍSTA CO CHCI NAVŠTÍVIT | Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Místa co chci navštívil, které jsou na webu Frytol na cestách.' },
                { name: 'keywords', content: `Cestovatelský portál, úvod, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Místa co chci navštívit | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Místa co chci navštívil, které jsou na webu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}` },
                { hid: 'og:type', content: 'website' }
            ]
        },

        async mounted() {
            loginCheckLogout(this.$router);

            if (process.client) {
                let success = false;
                let data = null;

                const localStorageEmail = localStorage.getItem('email')
                const localStoragePasswordHash = localStorage.getItem('password_hash')

                this.email = localStorageEmail;
                this.passwordHash = localStoragePasswordHash;

                while (!success) {
                    try {
                        // PAGE - Account list
                        // Account
                        const account = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-authentication?email=${encodeURIComponent(this.email)}&password_hash=${encodeURIComponent(this.passwordHash)}`)
                        
                        // COMPONENT - oCoverPlaceVisited
                        // PlacesID
                        const placesID = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-visited-place-id-user?id_user=${account[0].id}&status=2`)
                        const placesContinentsID = placesID.filter(place => place.type === 'continent').map(place => place.id_place) || [];
                        const placesStatesID = placesID.filter(place => place.type === 'state').map(place => place.id_place) || [];
                        const placesCitiesID = placesID.filter(place => place.type === 'city').map(place => place.id_place) || [];
                        const placesRegionsID = placesID.filter(place => place.type === 'region').map(place => place.id_place) || [];
                        const placesSpotsID = placesID.filter(place => place.type === 'spot').map(place => place.id_place) || [];

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
                        console.log(`API ERROR - CHCI NAVSTIVIT`)
                        console.error(error)

                        await new Promise(resolve => setTimeout(resolve, 1000))
                    }
                }

                Object.assign(this, data);
            }
        },

        methods: {
            menuAccountUpdate(newValue) {
                this.mNavAccountOpen = newValue;
            }
        }
    }
</script>