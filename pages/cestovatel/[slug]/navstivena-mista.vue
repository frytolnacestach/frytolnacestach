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
                                        <MoleculesUserHeader :user="user" @update="menuUserUpdate" v-if="user && user.length > 0" />
                                        <MoleculesUserHeader :user="[]" :skeleton=true v-if="user && user.length > 0" />
                                    </div>
                                </section>
                                <!-- SECTION - user headline - account END -->

                                <!-- SECTION - nav - account -->
                                <section class="t-section -padding-x -p0">
                                    <div class="t-section__inner">
                                        <MoleculesNavUser :statusOpen="mNavUserOpen" />
                                    </div>
                                </section>
                                <!-- SECTION - nav - account END -->

                            </div>
                            <div class="t-col2__content mb-2">

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Kontinety které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesContinentsID" type="kontinent" typeAccount="other" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Státy které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesStatesID" type="stat" typeAccount="other" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Města které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesCitiesID" type="mesto" typeAccount="other" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Regiony které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesRegionsID" type="region" typeAccount="other" />
                                    </div>
                                </section>
                                <!-- SECTION - Visited place category END -->

                                <!-- SECTION - Visited place category -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Místa které jsem navštívil" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsCoverPlaceVisited :skeletonProbs="skeleton" :account="account" :placesID="placesSpotsID" type="misto" typeAccount="other" />
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
    const route = useRoute()

    // DATA
    let account = useAccountData().accountData
    let mNavUserOpen = ref(false)
    let skeleton = true
    // DATA API
    const user = ref([])
    const placesID = ref([])
    const placesContinentsID = ref([])
    const placesStatesID = ref([])
    const placesCitiesID = ref([])
    const placesRegionsID = ref([])
    const placesSpotsID = ref([])
    // DATA Meta - head
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
    // DATA Meta - JSONld
    let headJsonld = reactive({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "JMÉNO A PŘÍJMENÍ",
        "alternateName": "PREZDÍVKA",
        "url": "ODKAZ"
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
        // Users
        const userResponse = await $fetch(`https://api.frytolnacestach.cz/api/user/${route.params.slug}`)
        const userData = JSON.parse(userResponse) || []
        user.value = userData

        if (user.value && user.value.length > 0) {
            // PlacesID
            const placesIDResponse = await $fetch(`https://api.frytolnacestach.cz/api/user-visited-place-id-user?id_user=${user.value[0].id}&status=1`)
            placesID.value = JSON.parse(placesIDResponse) || []
            placesContinentsID.value = placesID.value.filter(place => place.type === 'continent').map(place => place.id_place) || []
            placesStatesID.value = placesID.value.filter(place => place.type === 'state').map(place => place.id_place) || []
            placesCitiesID.value = placesID.value.filter(place => place.type === 'city').map(place => place.id_place) || []
            placesRegionsID.value = placesID.value.filter(place => place.type === 'region').map(place => place.id_place) || []
            placesSpotsID.value = placesID.value.filter(place => place.type === 'spot').map(place => place.id_place) || []

            skeleton = false

            // Meta
            headMeta.title = `Navštívená místa uživatelem ${user.value[0].nickname} | Frytol na cestách`
            headMeta.description = `Profil cestovatele ${user.value[0].nickname} na cestovatelském portálu Frytol na cestách`
            headMeta.keywords = `${user.value[0].nickname + ', navštívená místa, cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}`
            headMeta.ogTitle = `Navštívená místa uživatelem ${user.value[0].nickname} | Frytol na cestách`
            headMeta.ogDescription = `Profil cestovatele ${user.value[0].nickname} na cestovatelském portálu Frytol na cestách`
            headMeta.ogUrl = `https://frytolnacestach.cz/cestovatel/${user.value[0].slug}/navstivena-mista`
            headLink = [{ rel: 'canonical', href: headMeta.ogUrl }]
        }
    }
    await useAsyncData('dataAPI', () => loadData())

    // Metoda pro aktualizaci menu
    function menuUserUpdate(newValue) {
        mNavUserOpen.value = newValue
    }

    // WATCH
    watchEffect(() => {
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
        useJsonld(() => headJsonld)
    })
</script>