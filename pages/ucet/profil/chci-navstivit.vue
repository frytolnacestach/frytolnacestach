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
                                        <MoleculesHeadline title="Kontinety které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesContinentsID" type="kontinent" typeAccount="login" :status="2" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Státy které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesStatesID" type="stat" typeAccount="login" :status="2" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Města které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesCitiesID" type="mesto" typeAccount="login" :status="2" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Regiony které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesRegionsID" type="region" typeAccount="login" :status="2" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Místa které chci navštívit" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesSpotsID" type="misto" typeAccount="login" :status="2" />
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

<script setup>
    import { loginCheckLogout } from '~/utils/loginCheckLogout.js'

    // DATA
    let account = useAccountData().accountData
    let mNavAccountOpen = ref(false)
    let skeleton = true
    // DATA API
    const placesID = ref([])
    const placesContinentsID = ref([])
    const placesStatesID = ref([])
    const placesCitiesID = ref([])
    const placesRegionsID = ref([])
    const placesSpotsID = ref([])
    // DATA Meta - head
    let headMeta = reactive({
        title: 'MÍSTA CO CHCI NAVŠTÍVIT | Cestovatelský portál Frytol na cestách',
        description: 'Místa co chci navštívil, které jsou na cetovatelském portálu Frytol na cestách.',
        keywords: 'můj profil, chci navštívit, cestovatelský portál, statistiky',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'MÍSTA CO CHCI NAVŠTÍVIT | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Místa co chci navštívil, které jsou na cetovatelském portálu Frytol na cestách.',
        ogUrl: `https://www.frytolnacestach.cz/ucet/profil/chci-navstivit`,
        ogType: 'website',
    })
    let headLink = ref([
        { rel: 'canonical', href: headMeta.ogUrl }
    ])
    // DATA Meta - JSONld
    let headJsonld = reactive({
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

    // META - Head
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
    // META - Head - JSONld
    useJsonld(() => headJsonld)

    // LOAD DATA
    const loadData = async () => {
        if (account.value && account.value.length !== 0) {
            // PlacesID
            const placesIDResponse = await $fetch(`https://api.frytolnacestach.cz/api/user-visited-place-id-user?id_user=${account.value[0].id}&status=2`)
            placesID.value = JSON.parse(placesIDResponse) || []
            placesContinentsID.value = placesID.value.filter(place => place.type === 'continent').map(place => place.id_place) || []
            placesStatesID.value = placesID.value.filter(place => place.type === 'state').map(place => place.id_place) || []
            placesCitiesID.value = placesID.value.filter(place => place.type === 'city').map(place => place.id_place) || []
            placesRegionsID.value = placesID.value.filter(place => place.type === 'region').map(place => place.id_place) || []
            placesSpotsID.value = placesID.value.filter(place => place.type === 'spot').map(place => place.id_place) || []

            skeleton = false
        }
    }
    await useAsyncData('dataAPI', () => loadData())

    // Mounted hook
    const router = useRouter()
    onMounted(() => {
        loginCheckLogout(router)
    })

    // Metoda pro aktualizaci menu
    function menuAccountUpdate(newValue) {
        mNavAccountOpen.value = newValue
    }

    // WATCH
    watch(account, async (newVal, oldVal) => {
        if (newVal !== oldVal) {
            await loadData()
        }
    }, { deep: true, immediate: true })
</script>