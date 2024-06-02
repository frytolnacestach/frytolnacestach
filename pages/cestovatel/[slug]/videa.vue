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

                                <!-- SECTION - VideoList -->
                                <section class="t-section -padding-x -p0 print-section">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Videa" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsVideoListUser :videos="videos" :images="images" skeletonThema=" -skeleton-blue" :skeleton="skeleton" v-if="videos && videos.length > 0" />
                                        <client-only v-if="videos.length === 0 && !skeleton">
                                            <p>
                                                Cestovatel zatím nepřidal žádné video.
                                            </p>
                                        </client-only>
                                    </div>
                                </section>
                                <!-- SECTION - VideoList - END -->

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
    // DATA API
    const user = ref([])
    const videos = ref([])
    const images = ref([])
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
            // Videos
            const videosResponse = await $fetch(`https://api.frytolnacestach.cz/api/videos-id-user/${account.value[0].id}`)
            const videosDate = JSON.parse(videosResponse) || []
            videos.value = videosDate

            // Images (videos)
            if (videos.value && videos.value.length > 0) {
                const imagesVideosIDS = videosDate.map(item => item.id_image).filter(id => id !== undefined && id !== null && id !== '')
                if (imagesVideosIDS.length > 0) {
                    const imagesResponse = await $fetch(`https://api.frytolnacestach.cz/api/images-array?id=${imagesVideosIDS.join(',')}`)
                    const imagesData = JSON.parse(imagesResponse) || []
                    images.value = images.value.concat(imagesData)
                }
            }

            skeleton = false

            // Meta
            headMeta.title = `Videa od ${user.value[0].nickname} | Frytol na cestách`
            headMeta.description = `Profil cestovatele ${user.value[0].nickname} na cestovatelském portálu Frytol na cestách`
            headMeta.keywords = `${user.value[0].nickname + ', videa, cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}`
            headMeta.ogTitle = `Videa od ${user.value[0].nickname} | Frytol na cestách`
            headMeta.ogDescription = `Profil cestovatele ${user.value[0].nickname} na cestovatelském portálu Frytol na cestách`
            headMeta.ogUrl = `https://frytolnacestach.cz/cestovatel/${user.value[0].slug}/videa`
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