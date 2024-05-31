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

                <!-- SECTION - Form Login -->
                <section class="t-section -p0 pt-2 pb-1">
                    <div class="t-section__inner">
                        <OrganismsFormLogin />
                    </div>
                </section>
                <!-- SECTION - Form Login END -->

            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    import { loginCheckLogin } from '~/utils/loginCheckLogin.js'

    export default defineComponent({
        name: 'UcetPrihlaseniPage',

        data() {
            return {
                headline: 'Přihlášení'
            }
        },

        setup() {
            let headMeta = reactive({
                title: 'PŘIHLÁŠENÍ | Cestovatelský portál Frytol na cestách',
                description: 'Přihlášení do účtu na cetovatelském portálu Frytol na cestách.',
                keywords: 'Cestovatelský portál, přihlášení, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'PŘIHLÁŠENÍ | Cestovatelský portál Frytol na cestách',
                ogDescription: 'Přihlášení do účtu na cetovatelském portálu Frytol na cestách.',
                ogUrl: `https://www.frytolnacestach.cz/ucet/prihlaseni`,
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