<template>
    <main class="t-main -blue -pt-menu" role="main">

        <!-- SECTION -->
        <section class="t-section -padding-x -padding-y -p0 mb-4">
            <div class="t-section__inner">
                <div class="t-col2">
                    <div class="t-col2__sidebar mb-2 print-section">
                        <!-- SECTION - user headline - account -->
                        <section class="t-section -padding-x -p0">
                            <div class="t-section__inner">
                                <mUserHeader :user="staticUser" @update="menuUserUpdate" v-if="user[0]" />
                                <mUserHeader :user="null" :skeleton=true v-if="!user[0]" />
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

                        <!-- SECTION - ad-google - sidebar -->
                        <!--
                        <section class="t-section -px-world mt-4 mb-2">
                            <div class="t-section__inner">
                                <oAdGoogleSidebar />
                            </div>
                        </section>
                        -->
                        <!-- SECTION - ad-google - sidebar - END -->
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
        <!-- SECTION END -->
    </main>
</template>

<script>
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import mUserHeader from '~/components/molecules/mUserHeader.vue'
    import mNavUser from '~/components/molecules/mNavUser.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oCoverPlaceVisited from '~/components/organisms/oCoverPlaceVisited.vue'
    import oUserUrls from '~/components/organisms/oUserUrls.vue'

    export default {
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
                staticUser: this.staticUser,
                user: '',
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
            title = `Navštívená místa uživatelem ${this.staticUser[0].nickname} | Frytol na cestách`

            // description
            description = `Profil cestovatele ${this.staticUser[0].nickname} na cestovatelském portálu Frytol na cestách`

            // keywolds
            keywords = `${this.staticUser[0].nickname + ', navštívená místa, cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}`
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/cestovatel/${this.staticUser[0].slug}/navstivena-mista`

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

        async asyncData({ $axios, params }) {
            try {
                const staticUser = await $axios.$get(`https://api.frytolnacestach.cz/api/user/${params.slug}`)

                return {
                    staticUser
                };
            } catch (error) {
                console.log(`API ERROR - CESTOVATEL DETAIL(static): ${params.slug}`)
                console.error(error)

                return {
                    staticUser: null
                };
            }
        },

        mounted() {
            this.$nextTick(async () => {
                let success = false
                let data = null

                if (process.client) {
                    while (!success) {
                        try {
                            // PAGE - Cestovatel
                            // User
                            const user = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user/${this.$route.params.slug}`)


                            // COMPONENT - oCoverPlaceVisited
                            // PlacesID
                            const placesID = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-visited-place-id-user?id_user=${user[0].id}&status=1`)
                            const placesContinentsID = placesID.filter(place => place.type === 'continent').map(place => place.id_place) || []
                            const placesStatesID = placesID.filter(place => place.type === 'state').map(place => place.id_place) || []
                            const placesCitiesID = placesID.filter(place => place.type === 'city').map(place => place.id_place) || []
                            const placesRegionsID = placesID.filter(place => place.type === 'region').map(place => place.id_place) || []
                            const placesSpotsID = placesID.filter(place => place.type === 'spot').map(place => place.id_place) || []

                            // TO DATA
                            data = {
                                staticUser: user,
                                user,
                                placesContinentsID,
                                placesStatesID,
                                placesCitiesID,
                                placesRegionsID,
                                placesSpotsID
                            }

                            // END LOADING
                            this.skeleton = false

                            // SUCCESS
                            success = true
                        } catch (error) {
                            console.log(`API ERROR - CESTOVATEL DETAIL: ${this.$route.params.slug}`)
                            console.error(error)

                            await new Promise(resolve => setTimeout(resolve, 1000))
                        }
                    }

                    Object.assign(this, data)
                }
            })
        },

        methods: {
            menuUserUpdate(newValue) {
                this.mNavUserOpen = newValue
            }
        }
    }
</script>