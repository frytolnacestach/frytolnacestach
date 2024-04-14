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
                                    <mHeadline title="Články" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                    <oArticleListUser :posts="posts" :images="images" :skeleton="skeleton" v-if="posts && posts !== null" />
                                    <client-only v-if="(posts.length === 0 || posts === null) && !skeleton">
                                        <p>
                                            Cestovatel zatím nepřidal žádný článek.
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
        </div>
    </main>
</template>

<script>
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import mUserHeader from '~/components/molecules/mUserHeader.vue'
    import mNavUser from '~/components/molecules/mNavUser.vue'
    import oUserUrls from '~/components/organisms/oUserUrls.vue'
    import oArticleListUser from '~/components/organisms/oArticleListUser.vue'

    export default {
        name: 'CestovateleVideaSlugPage',

        components: {
            mHeadline,
            mUserHeader,
            mNavUser,
            oUserUrls,
            oArticleListUser
        },

        data() {
            return {
                staticUser: this.staticUser,
                user: '',
                posts: [],
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
            title = `Články od ${this.staticUser[0].nickname} | Frytol na cestách`

            // description
            description = `Profil cestovatele ${this.staticUser[0].nickname} na cestovatelském portálu Frytol na cestách`

            // keywolds
            keywords = `${this.staticUser[0].nickname + ', články, cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}`
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/cestovatel/${this.staticUser[0].slug}/clanky`

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


                            // COMPONENT - oArticleListUser
                            // Posts
                            const posts = await this.$axios.$get(`https://api.frytolnacestach.cz/api/posts-id-user/${user[0].id}`)
                            // Images
                            const imagesPostsIDS = posts.map(post => post.id_image_cover).filter(id => id !== null && id !== '')
                            const images = await this.$axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPostsIDS.join(',')}`)


                            // TO DATA
                            data = {
                                staticUser: user,
                                user,
                                posts,
                                images
                            }

                            this.skeleton = false

                            // SUCCESS
                            success = true
                        } catch (error) {
                            console.log(`API ERROR - CESTOVATEL ČLÁNKY DETAIL: ${this.$route.params.slug}`)
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