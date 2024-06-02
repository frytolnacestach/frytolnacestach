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

                                <!-- SECTION - Follower list -->
                                <section class="t-section -padding-x -p0 pb-4">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Sleduji" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsFollowerList :account="account" type="account" />
                                    </div>
                                </section>
                                <!-- SECTION - Follower list END -->

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

    // DATA Meta - head
    let headMeta = reactive({
        title: 'SLEDUJI | Cestovatelský portál Frytol na cestách',
        description: 'Sleduji na cetovatelském portálu Frytol na cestách.',
        keywords: 'můj profil, sleduji, cestovatelský portál, statistiky',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'SLEDUJI | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Sleduji na cetovatelském portálu Frytol na cestách.',
        ogUrl: `https://www.frytolnacestach.cz/ucet/profil/sleduji`,
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

    // Mounted hook
    const router = useRouter()
    onMounted(() => {
        loginCheckLogout(router)
    })

    // Metoda pro aktualizaci menu
    function menuAccountUpdate(newValue) {
        mNavAccountOpen.value = newValue
    }
</script>