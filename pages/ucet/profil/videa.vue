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

                                <!-- SECTION - VideoList -->
                                <section class="t-section -padding-x -p0 pb-4">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Videa" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsVideoListUser :videos="videos" :images="images" skeletonThema=" -skeleton-blue" :skeleton="skeleton" />
                                        <client-only v-if="videos && (videos.length === 0 || videos === null) && !skeleton">
                                            <p>
                                                Zatím si nepřidal žádné video.
                                            </p>
                                        </client-only>
                                    </div>
                                </section>
                                <!-- SECTION - VideoList END -->

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
    const videos = ref([])
    const images = ref([]) 
    // DATA Meta - head
    let headMeta = reactive({
        title: 'VIDEA | Cestovatelský portál Frytol na cestách',
        description: 'Videa na cetovatelském portálu Frytol na cestách.',
        keywords: 'můj profil, videa, cestovatelský portál, statistiky',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'VIDEA | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Videa na cetovatelském portálu Frytol na cestách.',
        ogUrl: `https://www.frytolnacestach.cz/ucet/profil/videa`,
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