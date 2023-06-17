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
                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4">
                            <div class="t-section__inner">
                                <mHeadline title="Kontinety které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :placesID="placesContinentsID" type="kontinent" v-if="placesContinentsID" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4">
                            <div class="t-section__inner">
                                <mHeadline title="Státy které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :placesID="placesStatesID" type="stat" v-if="placesStatesID" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4">
                            <div class="t-section__inner">
                                <mHeadline title="Města které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :placesID="placesCitiesID" type="mesto" v-if="placesCitiesID" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4">
                            <div class="t-section__inner">
                                <mHeadline title="Regiony které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :placesID="placesRegionsID" type="region" v-if="placesRegionsID" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4">
                            <div class="t-section__inner">
                                <mHeadline title="Místa které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :placesID="placesSpotsID" type="misto" v-if="placesSpotsID" />
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
                email: null,
                passwordHash: null,
                account: '',
                placesContinentsID: '',
                placesStatesID: '',
                placesCitiesID: '',
                placesRegionsID: '',
                placesSpotsID: '',
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
                const localStorageEmail = localStorage.getItem('email')
                const localStoragePasswordHash = localStorage.getItem('password_hash')

                this.email = localStorageEmail;
                this.passwordHash = localStoragePasswordHash;

                let success = false;
                let data = null;

                while (!success) {
                    try {
                        const account = await this.$axios.$get(`https://frytolnacestach-api.vercel.app/api/user-authentication?email=${encodeURIComponent(this.email)}&password_hash=${encodeURIComponent(this.passwordHash)}`)
                        
                        const placesID = await this.$axios.$get(`https://frytolnacestach-api.vercel.app/api/user-visited-place-id-user?id_user=${account[0].id}&status=2`)

                        const placesContinentsID = placesID.filter(place => place.type === 'continent').map(place => place.id_place) || [];
                        const placesStatesID = placesID.filter(place => place.type === 'state').map(place => place.id_place) || [];
                        const placesCitiesID = placesID.filter(place => place.type === 'city').map(place => place.id_place) || [];
                        const placesRegionsID = placesID.filter(place => place.type === 'region').map(place => place.id_place) || [];

                        const placesSpotsID = placesID.filter(place => place.type === 'spot').map(place => place.id_place) || [];

                        data = { account, placesContinentsID, placesStatesID, placesCitiesID, placesRegionsID, placesSpotsID }

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
    }
</script>