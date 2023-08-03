<template>
    <main class="t-main -blue -pt-menu" role="main">

        <!-- SECTION -->
        <section class="t-section -padding-x -padding-y -p0 mb-4">
            <div class="t-section__inner">
                <div class="t-col2">
                    <div class="t-col2__sidebar mb-2">
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
                        <section class="t-section -px-world my-2">
                            <div class="t-section__inner">
                                <oAdGoogleSidebar />
                            </div>
                        </section>
                        -->
                        <!-- SECTION - ad-google - sidebar - END -->
                    </div>

                    <div class="t-col2__content mb-2">
                       v přípravě
                    </div>
                </div>
            </div>
        </section>
        <!-- SECTION END -->
    </main>
</template>

<script>
    import mUserHeader from '~/components/molecules/mUserHeader.vue'
    import mNavUser from '~/components/molecules/mNavUser.vue'
    import oUserUrls from '~/components/organisms/oUserUrls.vue'

    export default {
        name: 'CestovateleTest2IndexPage',

        components: {
            mUserHeader,
            mNavUser,
            oUserUrls
        },

        data() {
            return {
                staticUser: this.staticUser,
                user: '',
                mNavUserOpen: false
            }
        },

        head() {
            return {
                title: `${this.staticUser[0].nickname} | Frytol na cestách`,
                meta: [
                    { hid: 'description', content: 'Profil cestovatele' },
                    { name: 'keywords', content: `${this.staticUser[0].nickname + ', cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}` },
                    { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png'},
                    { hid: 'og:title', content: `${this.staticUser[0].nickname} | Frytol na cestách` },
                    { hid: 'og:description', content: 'Profil cestovatele' },
                    { hid: 'og:url', content: `${process.env.baseUrl}/cestovatel/${this.staticUser[0].slug}` },
                    { hid: 'og:type', content: 'website' }  
                ]
            }
        },

        async asyncData({ $axios, params }) {
            try {
                const staticUser = await $axios.$get(`https://api.frytolnacestach.cz/api/user/${params.slug}`);

                return {
                    staticUser
                };
            } catch (error) {
                console.log(`API ERROR - CESTOVATEL DETAIL(static): ${params.slug}`);
                console.error(error);

                return {
                    staticUser: null
                };
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
                        const user = await this.$axios.$get(`https://api.frytolnacestach.cz/api/user/${this.$route.params.slug}`);

                        // TO DATA
                        data = {
                            staticUser: user,
                            user
                        }

                        // END LOADING
                        this.loadingComponentOCoverPlaceVisited = false

                        // SUCCESS
                        success = true
                    } catch (error) {
                        console.log(`API ERROR - CESTOVATEL DETAIL: ${this.$route.params.slug}`);
                        console.error(error);

                        await new Promise(resolve => setTimeout(resolve, 1000));
                    }
                }

                Object.assign(this, data);
                }
            });
        },

        methods: {
            menuUserUpdate(newValue) {
                this.mNavUserOpen = newValue;
            }
        }

    }
</script>