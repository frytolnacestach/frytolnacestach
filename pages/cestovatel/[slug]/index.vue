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
                                        <mUserHeader :user="[]" :skeleton=true v-if="user && user.length === 0" />
                                    </div>
                                </section>
                                <!-- SECTION - user headline - account END -->

                                <!-- SECTION - Follower button - sidebar -->
                                <section class="t-section -px-world">
                                    <div class="t-section__inner">
                                        <oFollowerButton :account="account" :user="user[0].id" v-if="user && user.length > 0 && account && account.length > 0 && user[0].email !== account[0].email" />
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
                                <section class="t-section -padding-x -p0 mb-4 print-section" v-if="user && user.length > 0">
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
                                        <oAchievements type="user" :idUser="user[0].id" v-if="user && user.length > 0" />
                                    </div>
                                </section>
                                <!-- SECTION - Achievements END -->

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
    import oAchievements from '~/components/organisms/oAchievements.vue'
    import oFollowerButton from '~/components/organisms/oFollowerButton.vue'
    import oUserUrls from '~/components/organisms/oUserUrls.vue'

    export default defineComponent({
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
                account: useAccountData().accountData,
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
                "@type": "Person",
                "name": "JMÉNO A PŘÍJMENÍ",
                "alternateName": "PREZDÍVKA",
                "url": "ODKAZ"
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
                    this.headMeta.title = `${this.user[0].nickname} | Frytol na cestách`
                    this.headMeta.description = `Profil cestovatele ${this.user[0].nickname} na cestovatelském portálu Frytol na cestách`
                    if (this.user[0].seo_tags && this.user[0].seo_tags.length > 0) {
                        const metaSeoTags = ", " + this.user[0].seo_tags.map(item => item.tag).join(", ")
                        this.headMeta.keywords = `${this.user[0].nickname + metaSeoTags + ', cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}`
                    } else {
                        this.headMeta.keywords = `${this.user[0].nickname + ', cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}`
                    }
                    this.headMeta.ogTitle = `${this.user[0].nickname} | Frytol na cestách`
                    this.headMeta.ogDescription = `Profil cestovatele ${this.user[0].nickname} na cestovatelském portálu Frytol na cestách`
                    this.headMeta.ogUrl = `https://frytolnacestach.cz/cestovatel/${this.user[0].slug}`
                    this.headLink = [{ rel: 'canonical', href: this.headMeta.ogUrl }]
                    // Script
                    this.headScript.name = ((this.user[0].surname ? this.user[0].surname: "") + " " + (this.user[0].lastname ? this.user[0].lastname: ""))
                    this.headScript.alternateName = (this.user[0].nickname ? this.user[0].nickname: "")
                    this.headScript.url = ('https://frytolnacestach.cz' + `/cestovatel/${this.user[0].slug}`)
                }
            }
        },

        mounted() {
            this.fetchData()
        }
    })
</script>