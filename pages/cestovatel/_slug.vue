<template>
    <main class="t-main -blue -pt-menu" role="main">

        <!-- SECTION -->
        <section class="t-section -padding-x -padding-y -p0 mb-4">
            <div class="t-section__inner">
                <div class="t-col2">
                    <div class="t-col2__sidebar mb-2">
                        <!-- SECTION - user headline - account -->
                        <section class="t-section -padding-x -p0" v-if="user[0]">
                            <div class="t-section__inner">
                                <mUserHeader :user="user" />
                            </div>
                        </section>
                        <!-- SECTION - user headline - account END -->

                        <!-- SECTION - ad-google - sidebar -->
                        <section class="t-section -px-world my-2">
                            <div class="t-section__inner">
                                <oAdGoogleSidebar />
                            </div>
                        </section>
                        <!-- SECTION - ad-google - sidebar - END -->
                    </div>

                    <div class="t-col2__content mb-2">
                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4" v-if="!placesID[0]">
                            <div class="t-section__inner">
                                <mHeadline title="Tento uživatel zatím nemá žádná navštívená místa" styleThema=" -account -blue" styleAlign="" styleGap="" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4" v-if="placesContinents[0]">
                            <div class="t-section__inner">
                                <mHeadline title="Kontinety které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :places="placesContinents" :images="imagesAll" type="kontinent" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4" v-if="placesStates[0]">
                            <div class="t-section__inner">
                                <mHeadline title="Státy které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :places="placesStates" :images="imagesAll" type="stat" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4" v-if="placesCities[0]">
                            <div class="t-section__inner">
                                <mHeadline title="Města které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :places="placesCities" :images="imagesAll" type="mesto" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4" v-if="placesRegions[0]">
                            <div class="t-section__inner">
                                <mHeadline title="Regiony které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :places="placesRegions" :images="imagesAll" type="region" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4" v-if="placesSpots[0]">
                            <div class="t-section__inner">
                                <mHeadline title="Místa které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
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
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import mUserHeader from '~/components/molecules/mUserHeader.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oCoverPlaceVisited from '~/components/organisms/oCoverPlaceVisited.vue'

    export default {
        name: 'CestovatelSlugPage',

        components: {
            mHeadline,
            mUserHeader,
            oAdGoogleSidebar,
            oCoverPlaceVisited
        },

        data() {
            return {
                user: '',
                placesID: '',
                visitedPlaces: '',
                placesContinents: '',
                placesStates: '',
                placesCities: '',
                placesRegions: '',
                placesSpots: '',
                imagesAll: '',
            }
        },

        head() {
            return {
                title: `${this.user[0].nickname} | Frytol na cestách`,
                meta: [
                    { hid: 'description', content: 'Profil cestovatele' },
                    { name: 'keywords', content: `${this.user[0].nickname + ', cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}` },
                    { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png'},
                    { hid: 'og:title', content: `${this.user[0].nickname} | Frytol na cestách` },
                    { hid: 'og:description', content: 'Profil cestovatele' },
                    { hid: 'og:url', content: `${process.env.baseUrl}/cestovatel/${this.user[0].slug}` },
                    { hid: 'og:type', content: 'website' }  
                ]
            }
        },

        async asyncData({ $axios, params }) {
            let success = false;
            let data = null;

            while (!success) {
                try {
                    //user
                    const user = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/user/${params.slug}`)
                    
                    const placesID = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/user-visited-place-id-user?id_user=${user[0].id}&status=1`)

                    const placesContinentsID = placesID.filter(place => place.type === 'continent').map(place => place.id_place) || [];
                    const placesStatesID = placesID.filter(place => place.type === 'state').map(place => place.id_place) || [];
                    const placesCitiesID = placesID.filter(place => place.type === 'city').map(place => place.id_place) || [];
                    const placesRegionsID = placesID.filter(place => place.type === 'region').map(place => place.id_place) || [];
                    const placesSpotsID = placesID.filter(place => place.type === 'spot').map(place => place.id_place) || [];

                    const placesContinents = placesContinentsID.length > 0 ? await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-continents-array?id=${placesContinentsID.join(',')}`) : [];
                    const placesStates = placesStatesID.length > 0 ? await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-states-array?id=${placesStatesID.join(',')}`) : [];
                    const placesCities = placesCitiesID.length > 0 ? await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-cities-array?id=${placesCitiesID.join(',')}`) : [];
                    const placesRegions = placesRegionsID.length > 0 ? await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-regions-array?id=${placesRegionsID.join(',')}`) : [];
                    const placesSpots = placesSpotsID.length > 0 ? await $axios.$get(`https://frytolnacestach-api.vercel.app/api/places-spots-array?id=${placesSpotsID.join(',')}`) : [];

                    const imagesPlacesAllID = [].concat(
                        placesContinents.map(placesContinent => placesContinent.id_image_cover),
                        placesStates.map(placesState => placesState.id_image_cover),
                        placesCities.map(placesCity => placesCity.id_image_cover),
                        placesRegions.map(placesRegion => placesRegion.id_image_cover),
                        placesSpots.map(placesSpot => placesSpot.id_image_cover)
                    ).filter(id => id !== null && id !== '');

                    const imagesAll = imagesPlacesAllID.length > 0 ? await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images-array?id=${imagesPlacesAllID.join(',')}`) : [];


                    data = { user, placesID, placesContinents, placesStates, placesCities, placesRegions, placesSpots, imagesAll }
                    
                    success = true
                } catch (error) {
                    console.log(`API ERROR - CESTOVATEL DETAIL: ${params.slug}`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
                }
            }

            return data
        },
    }
</script>