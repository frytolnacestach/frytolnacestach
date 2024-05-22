<template>
    <NuxtLayout name="default">
        <main class="t-main -gray -pt-menu" role="main">
            <div class="t-main__content">
                
                <!-- SECTION - Hero -->
                <section class="t-section -p0 mb-1 mt-2">
                    <div class="t-section__inner">
                        <oHero :headline="headline" modifierCSS=" -gray" classCSS=" mt-2" />
                    </div>
                </section>
                <!-- SECTION - Hero END -->

                <!-- SECTION - Donate -->
                <section class="t-section -p0 my-1 px-2">
                    <div class="t-section__inner">
                        <oDonate />
                        <oSupport />
                    </div>
                </section>
                <!-- SECTION - Donate END -->

                <!-- SECTION - Platforms -->
                <section class="t-section -p0 py-1 mt-2 px-2">
                    <div class="t-section__inner">
                        <mHeadline title="Platformy kde jsem" styleAlign=" -left" styleGap="mb-1" />
                        <oPlatform />
                        <div class="flex flex-center mb-4">
                            <aButtonFillFull target="internal" url="/social" text="Více informací o platformách" styleThema=" -gray" />
                        </div>
                    </div>
                </section>
                <!-- SECTION - Platforms END -->
                
            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oDonate from '../components/organisms/oDonate.vue'
    import oHero from '../components/organisms/oHero.vue'
    import oPlatform from '../components/organisms/oPlatform.vue'
    import oSupport from '../components/organisms/oSupport.vue'

    export default defineComponent({
        name: 'DonatePage',

        components: {
            aButtonFillFull,
            mHeadline,
            oDonate,
            oHero,
            oPlatform,
            oSupport
        },

        data() {
            return {
                headline: "Podpořit"
            }
        },

        setup() {
            let headMeta = reactive({
                title: 'Podpořit | Cestovatelský portál Frytol na cestách',
                description: 'Podpořte cestovatelský portá a video tvorbu od Frytola na cestách.',
                keywords: 'podpořit, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'Podpořit | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Podpořte cestovatelský portá a video tvorbu od Frytola na cestách.',
                ogUrl: `https://www.frytolnacestach.cz/donate`,
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