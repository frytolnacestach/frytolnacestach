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
                                        <MoleculesUserHeader :user="[]" :skeleton=true v-if="user && user.length === 0" />
                                    </div>
                                </section>
                                <!-- SECTION - user headline - account END -->

                                <!-- SECTION - Follower button - sidebar -->
                                <section class="t-section -px-world">
                                    <div class="t-section__inner">
                                        <OrganismsFollowerButton :account="account" :user="user[0].id" v-if="user && user.length > 0 && account && account.length > 0 && user[0].email !== account[0].email" />
                                    </div>
                                </section>
                                <!-- SECTION - Follower button - sidebar - END -->

                                <!-- SECTION - nav - account -->
                                <section class="t-section -padding-x -p0">
                                    <div class="t-section__inner">
                                        <MoleculesNavUser :statusOpen="mNavUserOpen" />
                                    </div>
                                </section>
                                <!-- SECTION - nav - account END -->

                            </div>
                            <div class="t-col2__content mb-2">

                                <!-- SECTION - user urls - account -->
                                <section class="t-section -padding-x -p0 mb-4 print-section" v-if="user && user.length > 0">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Tady mě najdeš" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsUserUrls :urls="user[0].urls" />
                                    </div>
                                </section>
                                <!-- SECTION - user urls - account END -->

                                <!-- SECTION - Achievements -->
                                <section class="t-section -padding-x -p0 pb-4 print-section">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Moje úspěchy" styleThema=" -user -blue" styleAlign="" styleGap="" />
                                        <OrganismsAchievements type="user" :idUser="user[0].id" v-if="user && user.length > 0" />
                                    </div>
                                </section>
                                <!-- SECTION - Achievements END -->

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
            // Meta
            headMeta.title = `Cestovatel ${user.value[0].nickname} | Frytol na cestách`
            headMeta.description = `Profil cestovatele ${user.value[0].nickname} na cestovatelském portálu Frytol na cestách`
            if (user.value[0].seo_tags && user.value[0].seo_tags.length > 0) {
                const metaSeoTags = ", " + user.value[0].seo_tags.map(item => item.tag).join(", ")
                headMeta.keywords = `${user.value[0].nickname + metaSeoTags + ', cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}`
            } else {
                headMeta.keywords = `${user.value[0].nickname + ', cestovatel, uživatel, cestování, svět, rady, cestovatelský portál'}`
            }
            headMeta.ogTitle = `${user.value[0].nickname} | Frytol na cestách`
            headMeta.ogDescription = `Profil cestovatele ${user.value[0].nickname} na cestovatelském portálu Frytol na cestách`
            headMeta.ogUrl = `https://frytolnacestach.cz/cestovatel/${user.value[0].slug}`
            headLink = [{ rel: 'canonical', href: headMeta.ogUrl }]
            // Script
            headJsonld.name = `${(user.value[0].surname ? user.value[0].surname : "")} ${(user.value[0].lastname ? user.value[0].lastname : "")}`
            headJsonld.alternateName = (user.value[0].nickname ? user.value[0].nickname : "")
            headJsonld.url = `https://frytolnacestach.cz/cestovatel/${user.value[0].slug}`
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