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
                        <!-- SECTION -  -->
                        <section class="t-section -padding-x -p0 print-section">
                            <div class="t-section__inner">
                                <mHeadline title="Videa" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oVideoListUser :videos="videos" :images="images" skeletonThema=" -skeleton-blue" :skeleton="skeleton" v-if="videos && videos !== null" />
                                <client-only v-if="(videos.length === 0 || videos === null) && !skeleton">
                                    <p>
                                        Cestovatel zatím nepřidal žádné video.
                                    </p>
                                </client-only>
                            </div>
                        </section>
                        <!-- SECTION - END -->
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
    import oUserUrls from '~/components/organisms/oUserUrls.vue'
    import oVideoListUser from '~/components/organisms/oVideoListUser.vue'

    export default {
        name: 'CestovateleVideaSlugPage',

        components: {
            mHeadline,
            mUserHeader,
            mNavUser,
            oUserUrls,
            oVideoListUser
        },

        data() {
            return {
                staticUser: this.staticUser,
                user: '',
                videos: [],
                images: [],
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
            title = `Videa od ${this.staticUser[0].nickname} | Frytol na cestách`

            // description
            description = `Profil cestovatele ${this.staticUser[0].nickname} na cestovatelském portálu Frytol na cestách`

            // keywolds
            keywords = `${this.staticUser[0].nickname + ', videa , cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}`
            
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


                            // COMPONENT - oVideoListUser
                            // Videos
                            const videos = await this.$axios.$get(`https://api.frytolnacestach.cz/api/videos-id-user/${user[0].id}`)
                            // Images
                            const imagesVideosIDS = videos.map(video => video.id_image).filter(id => id !== null && id !== '')
                            const images = await this.$axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosIDS.join(',')}`)


                            // TO DATA
                            data = {
                                staticUser: user,
                                user,
                                videos,
                                images
                            }

                            this.skeleton = false

                            // SUCCESS
                            success = true
                        } catch (error) {
                            console.log(`API ERROR - CESTOVATEL VIDEA DETAIL: ${this.$route.params.slug}`)
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