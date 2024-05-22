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

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <mHeadline title="Kontinety které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <oCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesContinentsID" type="kontinent" typeAccount="other" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <mHeadline title="Státy které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <oCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesStatesID" type="stat" typeAccount="other" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <mHeadline title="Města které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <oCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesCitiesID" type="mesto" typeAccount="other" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <mHeadline title="Regiony které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <oCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesRegionsID" type="region" typeAccount="other" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <mHeadline title="Místa které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <oCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesSpotsID" type="misto" typeAccount="other" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

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
    import oCoverPlaceVisited from '~/components/organisms/oCoverPlaceVisited.vue'
    import oUserUrls from '~/components/organisms/oUserUrls.vue'

    export default defineComponent({
        name: 'CestovatelNavstivenaMistaSlugPage',

        components: {
            mHeadline,
            mUserHeader,
            mNavUser,
            oAdGoogleSidebar,
            oCoverPlaceVisited,
            oUserUrls
        },

        data() {
            return {
                user: [],
                placesContinentsID: [],
                placesStatesID: [],
                placesCitiesID: [],
                placesRegionsID: [],
                placesSpotsID: [],
                mNavUserOpen: false,
                skeleton: true
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
                    this.headMeta.title = `Navštívená místa uživatelem ${this.user[0].nickname} | Frytol na cestách`
                    this.headMeta.description = `Profil cestovatele ${this.user[0].nickname} na cestovatelském portálu Frytol na cestách`
                    this.headMeta.keywords = `${this.user[0].nickname + ', navštívená místa, cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}`
                    this.headMeta.ogTitle = `Navštívená místa uživatelem ${this.user[0].nickname} | Frytol na cestách`
                    this.headMeta.ogDescription = `Profil cestovatele ${this.user[0].nickname} na cestovatelském portálu Frytol na cestách`
                    this.headMeta.ogUrl = `https://frytolnacestach.cz/cestovatel/${this.user[0].slug}/navstivena-mista`
                    this.headLink = [{ rel: 'canonical', href: this.headMeta.ogUrl }]
                }
            },

            async fetchDataPlaces() {
                // COMPONENT - oCoverPlaceVisited
                // PlacesID
                const placesID = await fetch(`https://api.frytolnacestach.cz/api/user-visited-place-id-user?id_user=${this.user[0].id}&status=1`)
                this.placesID = await responsePlacesID.json() || []
                this.placesContinentsID = this.placesID.filter(place => place.type === 'continent').map(place => place.id_place) || []
                this.placesStatesID = this.placesID.filter(place => place.type === 'state').map(place => place.id_place) || []
                this.placesCitiesID = this.placesID.filter(place => place.type === 'city').map(place => place.id_place) || []
                this.placesRegionsID = this.placesID.filter(place => place.type === 'region').map(place => place.id_place) || []
                this.placesSpotsID = this.placesID.filter(place => place.type === 'spot').map(place => place.id_place) || []

                // END LOADING
                this.skeleton = false
            }
        },

        mounted() {
            this.fetchData()
            this.$nextTick(async () => {
                if (process.client) {
                    this.fetchDataPlaces()
                }
            })
        }
    })
</script>