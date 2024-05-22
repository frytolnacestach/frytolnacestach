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

                <!-- SECTION - Wysiwyg -->
                <section class="t-section -wysiwyg py-4" v-if="base && base.length > 0">
                    <div class="t-section__inner">
                        <oWysiwyg :text="base[0].cookies" />
                    </div>
                </section>
                <!-- SECTION - Wysiwyg END -->

            </div>
        </main>
    </NuxtLayout>
</template>

<script>
    import oHero from '../components/organisms/oHero.vue'
    import oWysiwyg from '~/components/organisms/oWysiwyg.vue'

    export default defineComponent({
        name: 'ConditionsPage',

        components: {
            oHero,
            oWysiwyg
        },

        data() {
            return {
                headline: "Zásady Cookies",
                base: this.base
            }
        },

        methods: {
            async fetchData() {
                // API - GET - Platforms
                const responseBase = await fetch("https://api.frytolnacestach.cz/api/base")
                this.base = await responseBase.json()

                if (this.base && this.base.length > 0) {
                    this.headScript.text = ((this.base[0].conditions_user) ? this.base[0].conditions_user : "")
                }
            }
        },

        mounted() {
            // GET Data
            this.fetchData()
        },

        setup() {
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

            let headScript = reactive({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Zásady Cookies pro cestovatelský portál Frytol na cestách",
                "description": headMeta.description,
                "url": "https://www.frytolnacestach.cz/cookies",
                "text": "Text stránky",
                "datePublished": "2024-01-29",
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