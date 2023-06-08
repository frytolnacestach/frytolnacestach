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
                        <section class="t-section -padding-x -p0 pb-4" v-if="placesContinents[0]">
                            <div class="t-section__inner">
                                <mHeadline title="Kontinety které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :places="placesContinents" :images="imagesAll" type="kontinent" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4" v-if="placesStates[0]">
                            <div class="t-section__inner">
                                <mHeadline title="Státy které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :places="placesStates" :images="imagesAll" type="stat" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4" v-if="placesCities[0]">
                            <div class="t-section__inner">
                                <mHeadline title="Města které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :places="placesCities" :images="imagesAll" type="mesto" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4" v-if="placesRegions[0]">
                            <div class="t-section__inner">
                                <mHeadline title="Regiony které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :places="placesRegions" :images="imagesAll" type="region" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4" v-if="placesSpots[0]">
                            <div class="t-section__inner">
                                <mHeadline title="Místa které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :places="placesSpots" :images="imagesAll" type="misto" />
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
                placesID: '',
                visitedPlaces: '',
                placesContinents: '',
                placesStates: '',
                placesCities: '',
                placesRegions: '',
                placesSpots: '',
                imagesAll: ''
            }
        },

        head: {
            title: 'MÍSTA CO CHCI NAVŠTÍVIL | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Místa co chci navštívil, které jsou na webu Frytol na cestách.' },
                { name: 'keywords', content: `Cestovatelský portál, úvod, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Místa co chci navštívil' },
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

                        const placesContinets = placesContinentsID.length > 0 ? await this.$axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continents-array?id=${placesContinentsID.join(',')}`) : [];
                        const placesStates = placesStatesID.length > 0 ? await this.$axios.$get(`https://frytolnacestach-api.vercel.app/api/places-states-array?id=${placesStatesID.join(',')}`) : [];
                        const placesCities = placesCitiesID.length > 0 ? await this.$axios.$get(`https://frytolnacestach-api.vercel.app/api/places-cities-array?id=${placesCitiesID.join(',')}`) : [];
                        const placesRegions = placesRegionsID.length > 0 ? await this.$axios.$get(`https://frytolnacestach-api.vercel.app/api/places-regions-array?id=${placesRegionsID.join(',')}`) : [];
                        const placesSpots = placesSpotsID.length > 0 ? await this.$axios.$get(`https://frytolnacestach-api.vercel.app/api/places-spots-array?id=${placesSpotsID.join(',')}`) : [];

                        const imagesPlacesAllID = [].concat(
                            placesContinets.map(placesContinet => placesContinet.id_image_cover),
                            placesStates.map(placesState => placesState.id_image_cover),
                            placesCities.map(placesCity => placesCity.id_image_cover),
                            placesRegions.map(placesRegion => placesRegion.id_image_cover),
                            placesSpots.map(placesSpot => placesSpot.id_image_cover)
                        ).filter(id => id !== null && id !== '');

                        const imagesAll = imagesPlacesAllID.length > 0 ? await this.$axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesPlacesAllID.join(',')}`) : [];

                        data = { account, placesID, placesContinets, placesStates, placesCities, placesRegions, placesSpots, imagesAll }


                        success = true
                    } catch (error) {
                        console.log(`API ERROR - NAVSTIVIL JSEM`)
                        console.error(error)

                        await new Promise(resolve => setTimeout(resolve, 1000))
                    }
                }

                // Update data properties with fetched data
                Object.assign(this, data);
            }
        },
    }
</script>