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

                                <!-- SECTION - Recenze -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <oReviewItemListUser :user="user" v-if="user && user.length > 0" />
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
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import mUserHeader from '~/components/molecules/mUserHeader.vue'
    import mNavUser from '~/components/molecules/mNavUser.vue'
    import oAdGoogleSidebar from '~/components/organisms/oAdGoogleSidebar.vue'
    import oReviewItemListUser from '~/components/organisms/oReviewItemListUser.vue'
    import oUserUrls from '~/components/organisms/oUserUrls.vue'

    export default defineComponent({
        name: 'CestovatelRecenzeSlugPage',

        components: {
            mHeadline,
            mUserHeader,
            mNavUser,
            oAdGoogleSidebar,
            oReviewItemListUser,
            oUserUrls
        },

        data() {
            return {
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
            title = `Recenze od ${(this.user && this.user.length > 0) ? this.user[0].nickname : 'Uživatel'} | Frytol na cestách`

            // description
            description = `Profil cestovatele ${(this.user && this.user.length > 0) ? this.user[0].nickname : 'Uživatel'} na cestovatelském portálu Frytol na cestách`

            // keywolds
            keywords = `${(this.user && this.user.length > 0) ? this.user[0].nickname : 'Uživatel' + ', recenze, cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}`
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/cestovatel/${(this.user && this.user.length > 0) ? this.user[0].slug : 'slug'}/recenze`

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
        },

        mounted() {
            this.fetchData()
        }
    })
</script>