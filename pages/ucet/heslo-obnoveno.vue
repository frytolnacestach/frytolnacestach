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
                
                <!-- SECTION - Button -->
                <section class="t-section -p0 pt-2 pb-1">
                    <div class="t-section__inner flex flex-center">
                        <AtomsButtonFillFull target="internal" url="/ucet/profil" text="Zpět do profilu" styleThema=" -blue" styleSize=" -w400" styleFont=" -bold" />
                    </div>
                </section>
                <!-- SECTION - Button END -->

            </div>
        </main>
    </NuxtLayout>
</template>

<script setup>
    import { loginCheckLogout } from '~/utils/loginCheckLogout.js'

    // DATA
    let headline = "Heslo bylo obnoveno"
    // DATA Meta - head
    let headMeta = reactive({
        title: 'HESLO OBNOVENO | Cestovatelský portál Frytol na cestách',
        description: 'Heslo k účtu na cetovatelském portálu Frytol na cestách obnoveno.',
        keywords: 'Cestovatelský portál, heslo obnoveno, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'HESLO OBNOVENO | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Heslo k účtu na cetovatelském portálu Frytol na cestách obnoveno.',
        ogUrl: `https://www.frytolnacestach.cz/ucet/heslo-obnoveno`,
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
</script>