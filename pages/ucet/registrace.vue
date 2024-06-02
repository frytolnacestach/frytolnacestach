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

                <!-- SECTION - Form Registration -->
                <section class="t-section -p0 pt-2 pb-1">
                    <div class="t-section__inner">
                        <OrganismsFormRegistration />
                    </div>
                </section>
                <!-- SECTION - Form Registration END -->

            </div>
        </main>
    </NuxtLayout>
</template>

<script setup>
    import { loginCheckLogin } from '~/utils/loginCheckLogin.js'

    // DATA
    let headline = "Registrace"
    // DATA Meta - head
    let headMeta = reactive({
        title: 'REGISTRACE | Cestovatelský portál Frytol na cestách',
        description: 'Registrace na cetovatelském portálu Frytol na cestách.',
        keywords: 'Cestovatelský portál, registrace, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'REGISTRACE | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Registrace na cetovatelském portálu Frytol na cestách.',
        ogUrl: `https://www.frytolnacestach.cz/ucet/registrace`,
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
        loginCheckLogin(router)
    })
</script>