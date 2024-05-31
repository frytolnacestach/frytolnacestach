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
                                        <MoleculesUserHeader :user="user" @update="menuUserUpdate" v-if="user && user.length > 0" />
                                        <MoleculesUserHeader :user="[]" :skeleton=true v-if="user && user.length > 0" />
                                    </div>
                                </section>
                                <!-- SECTION - user headline - account END -->

                                <!-- SECTION - nav - account -->
                                <section class="t-section -padding-x -p0">
                                    <div class="t-section__inner">
                                        <MoleculesNavUser :statusOpen="mNavUserOpen" />
                                    </div>
                                </section>
                                <!-- SECTION - nav - account END -->

                            </div>
                            <div class="t-col2__content mb-2">

                                <!-- SECTION - Recenze -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <OrganismsReviewItemListUser :user="user" v-if="user && user.length > 0" />
                                    </div>
                                </section>
                                <!-- SECTION - Recenze END -->

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    export default defineComponent({
        name: 'CestovatelRecenzeSlugPage',

        data() {
            return {
                user: [],
                mNavUserOpen: false
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
                    this.headMeta.title = `Recenze od ${this.user[0].nickname} | Frytol na cestách`
                    this.headMeta.description = `Profil cestovatele ${this.user[0].nickname} na cestovatelském portálu Frytol na cestách`
                    this.headMeta.keywords = `${this.user[0].nickname + ', recenze, cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}`
                    this.headMeta.ogTitle = `Recenze od ${this.user[0].nickname} | Frytol na cestách`
                    this.headMeta.ogDescription = `Profil cestovatele ${this.user[0].nickname} na cestovatelském portálu Frytol na cestách`
                    this.headMeta.ogUrl = `https://frytolnacestach.cz/cestovatel/${this.user[0].slug}/recenze`
                    this.headLink = [{ rel: 'canonical', href: this.headMeta.ogUrl }]
                }
            },
        },

        mounted() {
            this.fetchData()
        }
    })
</script>