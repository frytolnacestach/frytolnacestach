<template>
    <NuxtLayout name="default">
        <main class="t-main -blue -pt-menu" role="main">
            <div class="t-main__content">
                <section class="t-section -padding-x -padding-y -p0 mb-4">
                    <div class="t-section__inner">
                        <div class="t-grid -account">
                            <div class="t-grid__section -nav">

                                <!-- SECTION - account headline - account -->
                                <section class="t-section -padding-x -p0">
                                    <div class="t-section__inner">
                                        <MoleculesAccountHeader :account="account" @update="menuAccountUpdate" />
                                    </div>
                                </section>
                                <!-- SECTION - nav - account END -->

                                <!-- SECTION - nav - account -->
                                <section class="t-section -padding-x -p0">
                                    <div class="t-section__inner">
                                        <MoleculesNavAccount :statusOpen="mNavAccountOpen" />
                                    </div>
                                </section>
                                <!-- SECTION - nav - account END -->

                            </div>
                            <div class="t-grid__section -content">

                                <!-- SECTION - VideoList -->
                                <section class="t-section -padding-x -p0 pb-4">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Videa" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsVideoListUser :videos="videos" :images="images" skeletonThema=" -skeleton-blue" :skeleton="skeleton" />
                                        <client-only v-if="videos && (videos.length === 0 || videos === null) && !skeleton">
                                            <p>
                                                Zatím si nepřidal žádné video.
                                            </p>
                                        </client-only>
                                    </div>
                                </section>
                                <!-- SECTION - VideoList END -->

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    import { loginCheckLogout } from '~/utils/loginCheckLogout.js'

    export default defineComponent({
        name: 'UcetVideaPage',

        data() {
            return {
                account: useAccountData().accountData,
                mNavAccountOpen: false,
                videos: [],
                images: [],
                skeleton: true
            }
        },

        setup() {
            let headMeta = reactive({
                title: 'VIDEA | Cestovatelský portál Frytol na cestách',
                description: 'Videa na cetovatelském portálu Frytol na cestách.',
                keywords: 'můj profil, videa, cestovatelský portál, statistiky',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'VIDEA | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Videa na cetovatelském portálu Frytol na cestách.',
                ogUrl: `https://www.frytolnacestach.cz/ucet/profil/videa`,
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

        mounted() {
            loginCheckLogout(this.$router)
        },

        methods: {
            async fetchData() {
                if (this.account && this.account.length !== 0) {
                    if (process.client) {
                        // COMPONENT - oVideoListUser
                        // Videos
                        const responseVideos = await fetch(`https://api.frytolnacestach.cz/api/videos-id-user/${this.account[0].id}`)
                        this.videos = await responseVideos.json()
                        // Images
                        if (this.videos && this.videos.length > 0) {
                            const imagesVideosIDS = this.videos.map(video => video.id_image).filter(id => id !== null && id !== '')
                            if (imagesVideosIDS && imagesVideosIDS.length > 0) {
                                const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosIDS.join(',')}`)
                                this.images = await responseImages.json()
                            }
                        }

                        this.skeleton = false
                    }
                }
            },

            menuAccountUpdate(newValue) {
                this.mNavAccountOpen = newValue
            }
        },

        watch: {
            account: {
                handler: 'fetchData',
                immediate: true
            }
        }
    })
</script>