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

                                <!-- SECTION - Články list -->
                                <section class="t-section -padding-x -p0 pb-4">
                                    <div class="t-section__inner">
                                        <mHeadline title="Články" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <oArticleListUser :posts="posts" :images="images" :skeleton="skeleton" />
                                        <client-only v-if="posts && (posts.length === 0 || posts === null) && !skeleton">
                                            <p>
                                                Zatím si nepřidal žádný článek
                                            </p>
                                        </client-only>
                                    </div>
                                </section>
                                <!-- SECTION - Články list END -->

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

    import mAccountHeader from '~/components/molecules/mAccountHeader.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import mNavAccount from '~/components/molecules/mNavAccount.vue'
    import oArticleListUser from '~/components/organisms/oArticleListUser.vue'

    export default defineComponent({
        name: 'UcetClankyPage',
        
        components: {
            mAccountHeader,
            mHeadline,
            mNavAccount,
            oArticleListUser
        },

        data() {
            return {
                account: useAccountData().accountData,
                mNavAccountOpen: false,
                posts: this.posts,
                images: this.images,
                skeleton: true
            }
        },

        setup() {
            let headMeta = reactive({
                title: 'ČLÁNKY | Cestovatelský portál Frytol na cestách',
                description: 'Články na cetovatelském portálu Frytol na cestách.',
                keywords: 'můj profil, články, cestovatelský portál, statistiky',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'ČLÁNKY | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Články na cetovatelském portálu Frytol na cestách.',
                ogUrl: `https://www.frytolnacestach.cz/ucet/profil/clanky`,
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
                        // COMPONENT - oArticleListUser
                        // Posts
                        const responsePosts = await fetch(`https://api.frytolnacestach.cz/api/posts-id-user/${this.account[0].id}`)
                        this.posts = await responsePosts.json()
                        // Images
                        if (this.posts && this.posts.length > 0) {
                            const imagesPostsIDS = this.posts.map(post => post.id_image_cover).filter(id => id !== null && id !== '')
                            if (imagesPostsIDS && imagesPostsIDS.length > 0) {
                                const responseImages = await fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPostsIDS.join(',')}`)
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