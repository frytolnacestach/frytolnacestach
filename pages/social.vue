<template>
    <NuxtLayout name="default">
        <main class="t-main -gray -pt-menu" role="main">
            <div class="t-main__content">
                
                <!-- SECTION - Hero -->
                <section class="t-section -p0 mt-2 mb-4">
                    <div class="t-section__inner">
                        <oHero :headline="headline" perex="Kam se vydat v digitálním vesmíru? Zde naleznete mé odkazy na sociální sítě, kde se dělím o své dobrodružství, myšlenky a zážitky. Připojte se ke mně na této cestě virtuálním světem!" modifierCSS=" -gray -w640" classCSS=" mt-2" />
                    </div>
                </section>
                <!-- SECTION - Hero END -->

                <!-- SECTION - Box platform -->
                <section class="t-section -p0 mt-1 mb-2 px-2">
                    <div class="t-section__inner">
                        <oBoxPlatform />
                    </div>
                </section>
                <!-- SECTION - Box platform END -->

            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    import oBoxPlatform from '../components/organisms/oBoxPlatform.vue'
    import oHero from '../components/organisms/oHero.vue'

    export default defineComponent({
        name: 'SocialPage',
        
        components: {
            oHero,
            oBoxPlatform
        },

        data() {
            return {
                headline: "Kde mě najdete"
            }
        },

        setup() {
            let headMeta = reactive({
                title: 'Kde mě najdeš | Cestovatelský portál Frytol na cestách',
                description: 'Sociální sítě a platformy kde najdete Frytola na cestách.',
                keywords: 'sociální sítě, cestovatelská videa, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'Kde mě najdeš | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Sociální sítě a platformy kde najdete Frytola na cestách.',
                ogUrl: `https://www.frytolnacestach.cz/social`,
                ogType: 'website',
            })

            let headLink = ref([
                { rel: 'canonical', href: headMeta.ogUrl }
            ])

            let headScript = reactive({
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

            useJsonld(() => headScript)

            return {
                headMeta,
                headLink,
                headScript
            }
        }
    })
</script>