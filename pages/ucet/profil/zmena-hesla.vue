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

                                <!-- SECTION - Form - profile -->
                                <section class="t-section -padding-x -p0">
                                    <div class="t-section__inner">
                                        <MoleculesHeadline title="Změna hesla" styleThema=" -account -blue" styleAlign="" styleGap="" />
                                        <OrganismsFormPasswordChange :account="account" />
                                    </div>
                                </section>
                                <!-- SECTION - Form - profile END -->

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
        title: 'ZMĚNA HESLA | Cestovatelský portál Frytol na cestách',
        description: 'Změna hesla k účtu na cetovatelském portálu Frytol na cestách.',
        keywords: 'můj profil, změna hesla, cestovatelský portál, statistiky',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'ZMĚNA HESLA | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Změna hesla k účtu na cetovatelském portálu Frytol na cestách.',
        ogUrl: `https://www.frytolnacestach.cz/ucet/profil/zmena-hesla`,
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