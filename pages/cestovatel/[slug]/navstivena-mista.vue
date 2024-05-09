<template>
    <NuxtLayout name="default">
        <main class="t-main -blue -pt-menu" role="main">
            <div class="t-main__content">
                <section class="t-section -padding-x -padding-y -p0 mb-4">
                    <div class="t-section__inner">
                        <div class="t-col2">
                            <div class="t-col2__sidebar mb-2 print-section">

                                <!-- SECTION - user headline - account -->
                                <section class="t-section -padding-x -p0">
                                    <div class="t-section__inner">
                                        <mUserHeader :user="user" @update="menuUserUpdate" v-if="user && user.length > 0" />
                                        <mUserHeader :user="[]" :skeleton=true v-if="user && user.length > 0" />
                                    </div>
                                </section>
                                <!-- SECTION - user headline - account END -->

                                <!-- SECTION - nav - account -->
                                <section class="t-section -padding-x -p0">
                                    <div class="t-section__inner">
                                        <mNavUser :statusOpen="mNavUserOpen" />
                                    </div>
                                </section>
                                <!-- SECTION - nav - account END -->

                            </div>
                            <div class="t-col2__content mb-2">

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <mHeadline title="Kontinety které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <oCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesContinentsID" type="kontinent" typeAccount="other" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <mHeadline title="Státy které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <oCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesStatesID" type="stat" typeAccount="other" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <mHeadline title="Města které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <oCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesCitiesID" type="mesto" typeAccount="other" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <mHeadline title="Regiony které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <oCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesRegionsID" type="region" typeAccount="other" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <mHeadline title="Místa které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <oCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesSpotsID" type="misto" typeAccount="other" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import mUserHeader from '~/components/molecules/mUserHeader.vue'
    import mNavUser from '~/components/molecules/mNavUser.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oCoverPlaceVisited from '~/components/organisms/oCoverPlaceVisited.vue'
    import oUserUrls from '~/components/organisms/oUserUrls.vue'

    export default defineComponent({
        name: 'CestovatelNavstivenaMistaSlugPage',

        components: {
            mHeadline,
            mUserHeader,
            mNavUser,
            oAdGoogleSidebar,
            oCoverPlaceVisited,
            oUserUrls
        },

        data() {
            return {
                user: [],
                placesContinentsID: [],
                placesStatesID: [],
                placesCitiesID: [],
                placesRegionsID: [],
                placesSpotsID: [],
                mNavUserOpen: false,
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
            title = `Navštívená místa uživatelem ${(this.user && this.user.length > 0) ? this.user[0].nickname : 'Uživatel'} | Frytol na cestách`

            // description
            description = `Profil cestovatele ${(this.user && this.user.length > 0) ? this.user[0].nickname : 'Uživatel'} na cestovatelském portálu Frytol na cestách`

            // keywolds
            keywords = `${(this.user && this.user.length > 0) ? this.user[0].nickname : 'Uživatel' + ', navštívená místa, cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}`
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/cestovatel/${(this.user && this.user.length > 0) ? this.user[0].slug : 'slug'}/navstivena-mista`

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

        methods: {
            menuUserUpdate(newValue) {
                this.mNavUserOpen = newValue
            },

            async fetchData() {
                const route = useRoute()
                // API
                const responseUser = await fetch(`https://api.frytolnacestach.cz/api/user/${route.params.slug}`)
                this.user = await responseUser.json() || []
            },

            async fetchDataPlaces() {
                // COMPONENT - oCoverPlaceVisited
                // PlacesID
                const placesID = await fetch(`https://api.frytolnacestach.cz/api/user-visited-place-id-user?id_user=${this.user[0].id}&status=1`)
                this.placesID = await responsePlacesID.json() || []
                this.placesContinentsID = this.placesID.filter(place => place.type === 'continent').map(place => place.id_place) || []
                this.placesStatesID = this.placesID.filter(place => place.type === 'state').map(place => place.id_place) || []
                this.placesCitiesID = this.placesID.filter(place => place.type === 'city').map(place => place.id_place) || []
                this.placesRegionsID = this.placesID.filter(place => place.type === 'region').map(place => place.id_place) || []
                this.placesSpotsID = this.placesID.filter(place => place.type === 'spot').map(place => place.id_place) || []

                // END LOADING
                this.skeleton = false
            }
        },

        mounted() {
            this.fetchData()
            this.$nextTick(async () => {
                if (process.client) {
                    this.fetchDataPlaces()
                }
            })
        }
    })
</script>