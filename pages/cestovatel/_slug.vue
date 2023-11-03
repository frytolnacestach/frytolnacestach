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

                        <!-- SECTION - Follower button - sidebar -->
                        <section class="t-section -px-world">
                            <div class="t-section__inner">
                                <oFollowerButton :user="user[0].id" v-if="user[0] && user[0].email !== email" />
                            </div>
                        </section>
                        <!-- SECTION - Follower button - sidebar - END -->

                        <!-- SECTION - nav - account -->
                        <section class="t-section -padding-x -p0">
                            <div class="t-section__inner">
                                <mNavUser :statusOpen="mNavUserOpen" />
                            </div>
                        </section>
                        <!-- SECTION - nav - account END -->

                        <!-- SECTION - ad-google - sidebar -->
                        <!--
                        <section class="t-section -px-world my-2">
                            <div class="t-section__inner">
                                <oAdGoogleSidebar />
                            </div>
                        </section>
                        -->
                        <!-- SECTION - ad-google - sidebar - END -->
                    </div>

                    <div class="t-col2__content mb-2">
                        <!-- SECTION - user urls - account -->
                        <section class="t-section -padding-x -p0 mb-4 print-section" v-if="user[0]">
                            <div class="t-section__inner">
                                <mHeadline title="Tady mě najdeš" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oUserUrls :urls="user[0].urls" />
                            </div>
                        </section>
                        <!-- SECTION - user urls - account END -->

                        <!-- SECTION - Achievements -->
                        <section class="t-section -padding-x -p0 pb-4 print-section">
                            <div class="t-section__inner">
                                <mHeadline title="Moje úspěchy" styleThema=" -user -blue" styleAlign="" styleGap="" />
                                <oAchievements type="user" :idUser="user[0].id" v-if="user[0]" />
                            </div>
                        </section>
                        <!-- SECTION - Achievements END -->
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
    import oAchievements from '~/components/organisms/oAchievements.vue'
    import oFollowerButton from '~/components/organisms/oFollowerButton.vue'
    import oUserUrls from '~/components/organisms/oUserUrls.vue'

    export default {
        name: 'CestovatelSlugPage',

        components: {
            mHeadline,
            mUserHeader,
            mNavUser,
            oAdGoogleSidebar,
            oAchievements,
            oFollowerButton,
            oUserUrls
        },

        data() {
            return {
                staticUser: this.staticUser,
                user: '',
                email: '',
                placesContinentsID: [],
                placesStatesID: [],
                placesCitiesID: [],
                placesRegionsID: [],
                placesSpotsID: [],
                loadingComponentOCoverPlaceVisited: true,
                mNavUserOpen: false
            }
        },

        data() {
            return {
                staticUser: this.staticUser,
                user: '',
                videos: [],
                images: [],
                mNavUserOpen: false
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
            title = `${this.staticUser[0].nickname} | Frytol na cestách`

            // description
            description = `Profil cestovatele ${this.staticUser[0].nickname} na cestovatelském portálu Frytol na cestách`

            // keywolds
            let metaSeoTags
            if (this.staticUser[0].seo_tags && this.staticUser[0].seo_tags.length > 0) {
                metaSeoTags = this.staticUser[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = `${this.staticUser[0].nickname + metaSeoTags + ', cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}`
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/cestovatel/${this.staticUser[0].slug}/videa`

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

        async asyncData({ $axios, params }) {
            try {
                const staticUser = await $axios.$get(`https://api.frytolnacestach.cz/api/user/${params.slug}`)

                return {
                    staticUser
                }
            } catch (error) {
                console.log(`API ERROR - CESTOVATEL DETAIL(static): ${params.slug}`)
                console.error(error)

                return {
                    staticUser: null
                }
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
                        this.loadingComponentOCoverPlaceVisited = false

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

            // local storage
            if (process.client) {
                const localStorageEmail = localStorage.getItem('email')

                this.email = localStorageEmail
            }
        },

        methods: {
            menuUserUpdate(newValue) {
                this.mNavUserOpen = newValue
            }
        }
    }
</script>