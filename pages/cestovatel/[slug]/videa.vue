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

        setup() {
            let headMeta = reactive({
                title: 'TITLE',
                description: 'DESCRIPTION',
                keywords: 'KEYWORDS',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'TITLE',
                ogDescription: 'DESCRIPTION',
                ogUrl: `https://www.frytolnacestach.cz/cestovatel`,
                ogType: 'website',
            })

            let headLink = ref([
                { rel: 'canonical', href: headMeta.ogUrl }
            ])

            let headScript = reactive({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": headMeta.title,
                "description": headMeta.description,
                "url": headMeta.ogUrl,
                "datePublished": "2024-01-31",
                "author": {
                    "@type": "Organization",
                    "name": "Frytol na cestách",
                    "url": "https://www.frytolnacestach.cz/"
                }
            })

            useHead({
                title: headMeta.title,
                meta: [
                    { name: 'description', content: headMeta.description },
                    { name: 'keywords', content: headMeta.keywords },
                    { property: 'og:image', content: headMeta.ogImage },
                    { property: 'og:title', content: headMeta.ogTitle },
                    { property: 'og:description', content: headMeta.ogDescription },
                    { property: 'og:url', content: headMeta.ogUrl },
                    { property: 'og:type', content: headMeta.ogType }
                ],
                link: headLink
            })

            useJsonld(() => headScript)

            return {
                headMeta,
                headLink,
                headScript
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

                if (this.user && this.user.length > 0) {
                    // Meta
                    this.headMeta.title = `Videa od ${this.user[0].nickname} | Frytol na cestách`
                    this.headMeta.description = `Profil cestovatele ${this.user[0].nickname} na cestovatelském portálu Frytol na cestách`
                    this.headMeta.keywords = `${this.user[0].nickname + ', videa , cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}`
                    this.headMeta.ogTitle = `Videa od ${this.user[0].nickname} | Frytol na cestách`
                    this.headMeta.ogDescription = `Profil cestovatele ${this.user[0].nickname} na cestovatelském portálu Frytol na cestách`
                    this.headMeta.ogUrl = `https://frytolnacestach.cz/cestovatel/${this.user[0].slug}/videa`
                    this.headLink = [{ rel: 'canonical', href: this.headMeta.ogUrl }]
                }
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