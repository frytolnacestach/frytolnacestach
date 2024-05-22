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

                                <!-- SECTION - FollowerList -->
                                <section class="t-section -padding-x -p0 print-section" v-if="user && user.length > 0">
                                    <div class="t-section__inner">
                                        <mHeadline title="Sleduji" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <oFollowerList type="user" :idUser="user[0].id" />
                                    </div>
                                </section>
                                <!-- SECTION - FollowerList - END -->
                                
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
    import oFollowerList from '~/components/organisms/oFollowerList.vue'
    import oUserUrls from '~/components/organisms/oUserUrls.vue'

    export default defineComponent({
        name: 'CestovateleSledujiSlugPage',

        components: {
            mHeadline,
            mUserHeader,
            mNavUser,
            oFollowerList,
            oUserUrls
        },

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
                    this.headMeta.title = `Koho ${this.user[0].nickname} sleduje | Frytol na cestách`
                    this.headMeta.description = `Profil cestovatele ${this.user[0].nickname} na cestovatelském portálu Frytol na cestách`
                    this.headMeta.keywords = `${this.user[0].nickname + ', sleduji, cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}`
                    this.headMeta.ogTitle = `Koho ${this.user[0].nickname} sleduje | Frytol na cestách`
                    this.headMeta.ogDescription = `Profil cestovatele ${this.user[0].nickname} na cestovatelském portálu Frytol na cestách`
                    this.headMeta.ogUrl = `https://frytolnacestach.cz/cestovatel/${this.user[0].slug}/sleduji`
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