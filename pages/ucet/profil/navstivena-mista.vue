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
                                        <MoleculesAccountHeader :account="account" @update="menuAccountUpdate" />
                                    </div>
                                </section>
                                <!-- SECTION - nav - account END -->

                                <!-- SECTION - nav - account -->
                                <section class="t-section -padding-x -p0">
                                    <div class="t-section__inner">
                                        <MoleculesNavAccount :statusOpen="mNavAccountOpen" />
                                    </div>
                                </section>
                                <!-- SECTION - nav - account END -->

                            </div>
                            <div class="t-grid__section -content">

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Kontinety které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesContinentsID" type="kontinent" typeAccount="login" :status="1" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Státy které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesStatesID" type="stat" typeAccount="login" :status="1" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Města které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesCitiesID" type="mesto" typeAccount="login" :status="1" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Regiony které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesRegionsID" type="region" typeAccount="login" :status="1" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Místa které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesSpotsID" type="misto" typeAccount="login" :status="1" />
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
    import { loginCheckLogout } from '~/utils/loginCheckLogout.js'

    export default defineComponent({
        name: 'UcetNavstivenaMistaPage',

        data() {
            return {
                account: useAccountData().accountData,
                mNavAccountOpen: false,
                placesContinentsID: [],
                placesStatesID: [],
                placesCitiesID: [],
                placesRegionsID: [],
                placesSpotsID: [],
                skeleton: true
            }
        },

        setup() {
            let headMeta = reactive({
                title: 'MÍSTA CO JSEM NAVŠTÍVIL | Cestovatelský portál Frytol na cestách',
                description: 'Místa co jsem navštívil, které jsou na cetovatelském portálu Frytol na cestách.',
                keywords: 'můj profil, navštívená místa, cestovatelský portál, statistiky',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'MÍSTA CO JSEM NAVŠTÍVIL | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Místa co jsem navštívil, které jsou na cetovatelském portálu Frytol na cestách.',
                ogUrl: `https://www.frytolnacestach.cz/ucet/profil/navstivena-mista`,
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
                        // COMPONENT - oCoverPlaceVisited
                        // PlacesID
                        const responsePlacesID = await fetch(`https://api.frytolnacestach.cz/api/user-visited-place-id-user?id_user=${this.account[0].id}&status=1`)
                        this.placesID = await responsePlacesID.json()
                        this.placesContinentsID = this.placesID.filter(place => place.type === 'continent').map(place => place.id_place) || []
                        this.placesStatesID = this.placesID.filter(place => place.type === 'state').map(place => place.id_place) || []
                        this.placesCitiesID = this.placesID.filter(place => place.type === 'city').map(place => place.id_place) || []
                        this.placesRegionsID = this.placesID.filter(place => place.type === 'region').map(place => place.id_place) || []
                        this.placesSpotsID = this.placesID.filter(place => place.type === 'spot').map(place => place.id_place) || []

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
