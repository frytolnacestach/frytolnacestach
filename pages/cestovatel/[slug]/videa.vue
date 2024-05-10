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

                                <!-- SECTION - VideoList -->
                                <section class="t-section -padding-x -p0 print-section">
                                    <div class="t-section__inner">
                                        <mHeadline title="Videa" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <oVideoListUser :videos="videos" :images="images" skeletonThema=" -skeleton-blue" :skeleton="skeleton" v-if="videos && videos.length > 0" />
                                        <client-only v-if="videos.length === 0 && !skeleton">
                                            <p>
                                                Cestovatel zatím nepřidal žádné video.
                                            </p>
                                        </client-only>
                                    </div>
                                </section>
                                <!-- SECTION - VideoList - END -->

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
    import oUserUrls from '~/components/organisms/oUserUrls.vue'
    import oVideoListUser from '~/components/organisms/oVideoListUser.vue'

    export default defineComponent({
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
                user: [],
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
            title = `Videa od ${(this.user && this.user.length > 0) ? this.user[0].nickname : 'Uživatel'} | Frytol na cestách`

            // description
            description = `Profil cestovatele ${(this.user && this.user.length > 0) ? this.user[0].nickname : 'Uživatel'} na cestovatelském portálu Frytol na cestách`

            // keywolds
            keywords = `${(this.user && this.user.length > 0) ? this.user[0].nickname : 'Uživatel' + ', videa , cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}`
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/cestovatel/${(this.user && this.user.length > 0) ? this.user[0].slug : 'slug'}/videa`

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

            async fetchDataVideos() {
                if (this.user && this.user.length > 0) {
                    // COMPONENT - oVideoListUser
                    // Videos
                    const responseVideos = await fetch(`https://api.frytolnacestach.cz/api/videos-id-user/${this.user[0].id}`)
                    this.videos = await responseVideos.json() || []
                    // Images
                    if (this.videos && this.videos.length > 0) {
                        const imagesVideosIDS = this.videos.map(video => video.id_image).filter(id => id !== null && id !== '')
                        if (imagesVideosIDS && imagesVideosIDS.length > 0) {
                            const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosIDS.join(',')}`)
                            this.images = await responseImages.json() || []
                        }
                    }

                    this.skeleton = false
                }
            }
        },

        mounted() {
            this.fetchData()
        },

        watch: {
            user: {
                handler(newValue) {
                    this.fetchDataVideos()
                }
            }
        }
    })
</script>