<template>
    <main class="t-main -blue -pt-menu" role="main">

        <!-- SECTION -->
        <section class="t-section -padding-x -padding-y -p0 mb-4">
            <div class="t-section__inner">
                <div class="t-grid -account">
                    
                    <div class="t-grid__section -nav">
                        <!-- SECTION - account headline - account -->
                        <section class="t-section -padding-x -p0">
                            <div class="t-section__inner">
                                <mAccountHeader :account="account" @update="menuAccountUpdate" />
                            </div>
                        </section>
                        <!-- SECTION - nav - account END -->

                        <!-- SECTION - nav - account -->
                        <section class="t-section -padding-x -p0">
                            <div class="t-section__inner">
                                <mNavAccount :statusOpen="mNavAccountOpen" />
                            </div>
                        </section>
                        <!-- SECTION - nav - account END -->
                    </div>

                    <div class="t-grid__section -content">
                        <!-- SECTION - Follower list -->
                        <section class="t-section -padding-x -p0 pb-4">
                            <div class="t-section__inner">
                                <mHeadline title="Články" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                <oArticleListUser :posts="posts" :images="images" :skeleton="skeleton" v-if="posts && posts !== null" />
                                <client-only v-if="(posts.length === 0 || posts === null) && !skeleton">
                                    <p>
                                        Zatím si nepřidal žádný článek
                                    </p>
                                </client-only>
                            </div>
                        </section>
                        <!-- SECTION - Follower list END -->
                    </div>

                </div>
            </div>
        </section>
        <!-- SECTION END -->

    </main>
</template>

<script>
    import { loginCheckLogout } from '~/utils/loginCheckLogout.js'

    import mAccountHeader from '~/components/molecules/mAccountHeader.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import mNavAccount from '~/components/molecules/mNavAccount.vue'
    import oArticleListUser from '~/components/organisms/oArticleListUser.vue'

    export default {
        name: 'UcetClankyPage',
        
        components: {
            mAccountHeader,
            mHeadline,
            mNavAccount,
            oArticleListUser
        },

        data() {
            return {
                account: [],
                mNavAccountOpen: false,
                posts: [],
                images: [],
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
            title = 'ČLÁNKY | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Články na cetovatelském portálu Frytol na cestách.'

            // keywolds
            keywords = 'můj profil, články, cestovatelský portál, statistiky'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}`

            // ogType
            ogType = 'website'

            // Return
            return {
                title,
                meta: [
                    { hid: 'title', name: 'title', content: title },
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { property: 'og:image', content: ogImage },
                    { hid: 'og:title', content: ogTitle },
                    { hid: 'og:description', content: ogDescription },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:type', content: ogType }
                ],
                link: [
                    { rel: 'canonical', href: ogUrl }
                ]
            }
        },

        mounted() {
            loginCheckLogout(this.$router)
        },

        methods: {
            async fetchData() {
                try {
                    if (this.account && this.account.length !== 0) {
                        if (process.client) {
                            // COMPONENT - oArticleListUser
                            // Posts
                            this.posts = await this.$axios.$get(`https://api.frytolnacestach.cz/api/posts-id-user/${this.account[0].id}`)
                            // Images
                            this.imagesPostsIDS = this.posts.map(post => post.id_image_cover).filter(id => id !== null && id !== '')
                            this.images = await this.$axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${this.imagesPostsIDS.join(',')}`)

                            this.skeleton = false
                        }
                    }
                } catch (error) {
                    console.log(`API ERROR - MOJE ČLÁNKY`)
                    console.error(error)

                    await new Promise(resolve => setTimeout(resolve, 1000))
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
            },
            
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