<template>
    <main class="t-main -blue -pt-menu" role="main">
        <div class="t-main__content">
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
                                    <oFollowerButton :account="account" :user="user[0].id" v-if="user[0] && account[0] && user[0].email !== account[0].email" />
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
        </div>
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
                account: [],
                staticUser: this.staticUser,
                user: '',
                placesContinentsID: [],
                placesStatesID: [],
                placesCitiesID: [],
                placesRegionsID: [],
                placesSpotsID: [],
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
            let metaSeoTags = ""
            if (this.staticUser[0].seo_tags && this.staticUser[0].seo_tags.length > 0) {
                metaSeoTags = ", " + this.staticUser[0].seo_tags.map(item => item.tag).join(", ")
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

            // script
            let jsonldUser
            if (this.user && this.user.length > 0) {
                jsonldUser = {
                    type: 'application/ld+json',
                    json: {
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": ((this.user[0].surname ? this.user[0].surname: "") + " " + (this.user[0].lastname ? this.user[0].lastname: "")),
                        "alternateName": (this.user[0].nickname ? this.user[0].nickname: ""),
                        "url": 'https://frytolnacestach.cz' + `/cestovatel/${this.user[0].slug}`
                    }
                }
            } else {
                jsonldUser = []
            }

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
                script: [jsonldUser],
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