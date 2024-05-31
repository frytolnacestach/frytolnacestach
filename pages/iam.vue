<template>
    <NuxtLayout name="default">
        <main class="t-main -gray -pt-menu" role="main">
            <div class="t-main__content">
                
                <!-- SECTION - Hero -->
                <section class="t-section -p0 pt-2 pb-1">
                    <div class="t-section__inner">
                        <OrganismsHero :headline="headline" modifierCSS=" -gray" classCSS=" mt-2" />
                    </div>
                </section>
                <!-- SECTION - Hero END -->

                <!-- SECTION - Whoiam -->
                <section class="t-section -p0 py-1">
                    <div class="t-section__inner">
                        <OrganismsWhoiam />
                    </div>
                </section>
                <!-- SECTION - Whoiam END -->

                <!-- SECTION - Platforms -->
                <section class="t-section -p0 py-1 mt-2 px-2">
                    <div class="t-section__inner">
                        <MoleculesHeadline title="Platformy kde jsem" styleAlign=" -left" styleGap="mb-1" />
                        <OrganismsPlatform />
                        <div class="flex flex-center mb-4">
                            <AtomsButtonFillFull target="internal" url="/social" text="Více informací o platformách" styleThema=" -gray" />
                        </div>
                    </div>
                </section>
                <!-- SECTION - Platforms END -->

            </div>
        </main>
    </NuxtLayout>
</template>

<script setup>
    // DATA
    let headline = "Kdo jsem"
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Kdo jsem | Cestovatelský portál Frytol na cestách',
        description: 'Kdo je Frytol na cestách? Co dělá a kde ho najdete.',
        keywords: 'Cestovatelská videa, Internetové platformy, kdo jsem, cestování, svět',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Kdo jsem | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Kdo je Frytol na cestách? Co dělá a kde ho najdete.',
        ogUrl: `https://www.frytolnacestach.cz/iam`,
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
</script>