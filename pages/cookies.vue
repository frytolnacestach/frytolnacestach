<template>
    <NuxtLayout name="default">
        <main class="t-main -gray -pt-menu" role="main">
            <div class="t-main__content">
                
                <!-- SECTION - Hero -->
                <section class="t-section -p0 mb-1 mt-2">
                    <div class="t-section__inner">
                        <OrganismsHero :headline="headline" modifierCSS=" -gray" classCSS=" mt-2" />
                    </div>
                </section>
                <!-- SECTION - Hero END -->

                <!-- SECTION - Wysiwyg -->
                <section class="t-section -wysiwyg py-4" v-if="base && base.length > 0">
                    <div class="t-section__inner">
                        <OrganismsWysiwyg :text="base[0].cookies" />
                    </div>
                </section>
                <!-- SECTION - Wysiwyg END -->

            </div>
        </main>
    </NuxtLayout>
</template>

<script setup>
    // DATA
    let headline = "Zásady Cookies"
    // DATA API
    const base = ref([])
    // DATA Meta - head
    let headMeta = reactive({
        title: 'Zásady Cookies | Cestovatelský portál Frytol na cestách',
        description: 'Zásady Cookies pro cestovatelský portál Frytol na cestách.',
        keywords: 'cookies, pravidla, eu',
        ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
        ogTitle: 'Zásady Cookies | Cestovatelský portál Frytol na cestách',
        ogDescription: 'Zásady Cookies pro cestovatelský portál Frytol na cestách.',
        ogUrl: `https://www.frytolnacestach.cz/cookies`,
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
        "text": "Text stránky",
        "datePublished": "2024-01-29",
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
        // Base
        const baseResponse = await $fetch("https://api.frytolnacestach.cz/api/base")
        const baseData = JSON.parse(baseResponse)
        base.value = baseData || []

        if (base.value && base.value.length > 0) {
            // META - head - JSONld
            headJsonld.text = ((base.value[0].conditions_user) ? base.value[0].conditions_user : "")
        }
       
    }
    await useAsyncData('dataAPI', () => loadData())
</script>