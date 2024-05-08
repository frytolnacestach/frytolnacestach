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
            title = `${(this.user && this.user.length > 0) ? this.user[0].nickname : 'Uživatel'} | Frytol na cestách`

            // description
            description = `Profil cestovatele ${(this.user && this.user.length > 0) ? this.user[0].nickname : 'Uživatel'} na cestovatelském portálu Frytol na cestách`

            // keywolds
            let metaSeoTags = ""
            if (this.user && this.user.length > 0 && this.user[0].seo_tags && this.user[0].seo_tags.length > 0) {
                metaSeoTags = ", " + this.user[0].seo_tags.map(item => item.tag).join(", ")
            }
            keywords = `${(this.user && this.user.length > 0) ? this.user[0].nickname : 'Uživatel' + metaSeoTags + ', cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}`
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/cestovatel/${(this.user && this.user.length > 0) ? this.user[0].slug : 'slug'}`

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
        },

        mounted() {
            this.fetchData()
        }
    })
</script>