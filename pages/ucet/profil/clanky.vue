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
                                <mAccountHeader @update="menuAccountUpdate" />
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
                                <oArticleListUser :posts="posts" :images="images" v-if="posts !== [] && posts !== null" />
                                <client-only v-if="posts === [] || posts.length === 0 || posts === null">
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
    import { loginCheckLogout } from '~/utils/loginCheckLogout.js';

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
                mNavAccountOpen: false,
                email: null,
                passwordHash: null,
                account: '',
                posts: [],
                images: []
            }
        },

        mounted() {
            loginCheckLogout(this.$router);
        },

        head: {
            title: 'Články | Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Články na webu Frytol na cestách.' },
                { name: 'keywords', content: `Cestovatelský portál, úvod, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Články | Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Články na webu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}` },
                { hid: 'og:type', content: 'website' }
            ]
        },

        async mounted() {
            loginCheckLogout(this.$router);

            if (process.client) {
                let success = false;
                let data = null;
                
                const localStorageEmail = localStorage.getItem('email')
                const localStoragePasswordHash = localStorage.getItem('password_hash')

                this.email = localStorageEmail;
                this.passwordHash = localStoragePasswordHash;

                while (!success) {
                    try {
                        // PAGE - Account list
                        // Account
                        const account = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user-authentication?email=${encodeURIComponent(this.email)}&password_hash=${encodeURIComponent(this.passwordHash)}`)


                        // COMPONENT - oArticleListUser
                        // Posts
                        const posts = await this.$axios.$get(`https://api.frytolnacestach.cz/api/posts-id-user/${account[0].id}`)
                        // Images
                        const imagesPostsIDS = posts.map(post => post.id_image_cover).filter(id => id !== null && id !== '')
                        const images = await this.$axios.$get(`https://api.frytolnacestach.cz/api/images-array?id=${imagesPostsIDS.join(',')}`)


                        // TO DATA
                        data = {
                            account,
                            posts,
                            images
                        }

                        // SUCCESS
                        success = true
                    } catch (error) {
                        console.log(`API ERROR - MOJE ČLÁNKY`)
                        console.error(error)

                        await new Promise(resolve => setTimeout(resolve, 1000))
                    }
                }

                // Update data properties with fetched data
                Object.assign(this, data);
            }
        },

        methods: {
            menuAccountUpdate(newValue) {
                this.mNavAccountOpen = newValue;
            }
        }
    }
</script>