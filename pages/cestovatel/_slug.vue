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
                                <mUserHeader :user="staticUser" />
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
                        <section class="t-section -padding-x -p0 pb-4">
                            <div class="t-section__inner">
                                <mHeadline title="Kontinety které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :placesID="placesContinentsID" type="kontinent" v-if="placesContinentsID" account="other" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4">
                            <div class="t-section__inner">
                                <mHeadline title="Státy které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :placesID="placesStatesID" type="stat" v-if="placesStatesID" account="other" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4">
                            <div class="t-section__inner">
                                <mHeadline title="Města které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :placesID="placesCitiesID" type="mesto" v-if="placesCitiesID" account="other" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4">
                            <div class="t-section__inner">
                                <mHeadline title="Regiony které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :placesID="placesRegionsID" type="region" v-if="placesRegionsID" account="other" />
                            </div>
                        </section>
                        <!-- SECTION - Visited place category END -->

                        <!-- SECTION - Visited place category -->
                        <section class="t-section -padding-x -p0 pb-4">
                            <div class="t-section__inner">
                                <mHeadline title="Místa které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oCoverPlaceVisited :placesID="placesSpotsID" type="misto" v-if="placesSpotsID" account="other" />
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
                staticUser: this.staticUser,
                user: '',
                placesContinentsID: '',
                placesStatesID: '',
                placesCitiesID: '',
                placesRegionsID: '',
                placesSpotsID: '',
            }
        },

        head() {
            return {
                title: `${this.staticUser[0].nickname} | Frytol na cestách`,
                meta: [
                    { hid: 'description', content: 'Profil cestovatele' },
                    { name: 'keywords', content: `${this.staticUser[0].nickname + ', cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}` },
                    { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png'},
                    { hid: 'og:title', content: `${this.staticUser[0].nickname} | Frytol na cestách` },
                    { hid: 'og:description', content: 'Profil cestovatele' },
                    { hid: 'og:url', content: `${process.env.baseUrl}/cestovatel/${this.staticUser[0].slug}` },
                    { hid: 'og:type', content: 'website' }  
                ]
            }
        },

        async asyncData({ $axios, params }) {
            try {
                const staticUser = await $axios.$get(`https://api.frytolnacestach.cz/api/user/${params.slug}`);

                return {
                    staticUser
                };
            } catch (error) {
                console.log(`API ERROR - CESTOVATEL DETAIL(static): ${params.slug}`);
                console.error(error);

                return {
                    staticUser: null
                };
            }
        },

        mounted() {
            this.$nextTick(async () => {
                let success = false;
                let data = null;

                if (process.client) {
                while (!success) {
                    try {
                    const user = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user/${this.$route.params.slug}`);
                    
                    const placesID = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-visited-place-id-user?id_user=${user[0].id}&status=1`);

                    const placesContinentsID = placesID.filter(place => place.type === 'continent').map(place => place.id_place) || [];
                    const placesStatesID = placesID.filter(place => place.type === 'state').map(place => place.id_place) || [];
                    const placesCitiesID = placesID.filter(place => place.type === 'city').map(place => place.id_place) || [];
                    const placesRegionsID = placesID.filter(place => place.type === 'region').map(place => place.id_place) || [];
                    const placesSpotsID = placesID.filter(place => place.type === 'spot').map(place => place.id_place) || [];

                    data = { staticUser: user, user, placesContinentsID, placesStatesID, placesCitiesID, placesRegionsID, placesSpotsID };

                    success = true;
                    } catch (error) {
                    console.log(`API ERROR - CESTOVATEL DETAIL: ${this.$route.params.slug}`);
                    console.error(error);

                    await new Promise(resolve => setTimeout(resolve, 1000));
                    }
                }

                Object.assign(this, data);
                }
            });
        },
    }
</script>