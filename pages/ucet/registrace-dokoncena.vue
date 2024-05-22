<template>
    <NuxtLayout name="default">
        <main class="t-main -blue -pt-menu" role="main">
            <div class="t-main__content">

                <!-- SECTION - Hero -->
                <section class="t-section -p0 pt-2 pb-1">
                    <div class="t-section__inner">
                        <oHero :headline="headline" modifierCSS=" -blue" classCSS=" mt-2" />
                    </div>
                </section>
                <!-- SECTION - Hero END -->

                <!-- SECTION - Text -->
                <section class="t-section pt-2 pb-1">
                    <div class="t-section__inner">
                        <p class="flex flex-center">
                            Veše registrace byla úspěšná. Teď se&nbsp;<nuxtLink to="/ucet/prihlaseni">přihlašte</nuxtLink>&nbsp;a následně aktivujte účet.
                        </p>
                    </div>
                </section>
                <!-- SECTION - Text END -->

            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    import { loginCheckLogin } from '~/utils/loginCheckLogin.js'

    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oHero from '~/components/organisms/oHero.vue'

    export default defineComponent({
        name: 'UcetRegistraceDokoncenaPage',
        
        components: {
            aButtonFillFull,
            mHeadline,
            oHero
        },

        data() {
            return {
                headline: 'Vaše registrace byla dokončena'
            }
        },

        setup() {
            let headMeta = reactive({
                title: 'REGISTRACE DOKONČENA | Cestovatelský portál Frytol na cestách',
                description: 'Registrace na cetovatelském portálu Frytol na cestách byla dokončena.',
                keywords: 'Cestovatelský portál, registrace dokončena, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'REGISTRACE DOKONČENA | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Registrace na cetovatelském portálu Frytol na cestách byla dokončena.',
                ogUrl: `https://www.frytolnacestach.cz/ucet/registrace-dokoncena`,
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
        },

        mounted() {
            loginCheckLogin(this.$router)
        }
    })
</script>