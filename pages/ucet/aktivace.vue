<template>
    <NuxtLayout name="default">
        <main class="t-main -blue -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - Hero -->
                <section class="t-section -p0 pt-2 pb-1">
                    <div class="t-section__inner">
                        <OrganismsHero :headline="headline" modifierCSS=" -blue" classCSS=" mt-2" />
                    </div>
                </section>
                <!-- SECTION - Hero END -->

                <!-- SECTION - FlashMassages -->
                <section class="t-section pt-2 pb-1">
                    <div class="t-section__inner">
                        <OrganismsFlashMessages :dataMessages="flashMessage" />
                    </div>
                </section>
                <!-- SECTION - FlashMassages END -->

            </div>
        </main>
    </NuxtLayout>
</template>

<script setup>
    import { loginCheckLogoutInfo } from '~/utils/loginCheckLogoutInfo.js'

    // DATA
    let headline = "Aktivace účtu"
    // DATA Meta - head
    let headMeta = reactive({
        title: 'AKTIVACE ÚČTU | Cestovatelský portál Frytol na cestách',
        description: 'Aktivace účtu na cetovatelském portálu Frytol na cestách',
        keywords: 'Cestovatelský portál, aktivace účtu, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'AKTIVACE ÚČTU | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Aktivace účtu na cetovatelském portálu Frytol na cestách',
        ogUrl: `https://www.frytolnacestach.cz/ucet/aktivace`,
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
        loginCheckLogoutInfo(router)
    })
</script>