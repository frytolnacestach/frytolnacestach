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
            }
        },

        mounted() {
            // GET Data
            this.fetchData()
        },

        head() {
            // Variables
            let title
            let description
            let keywords
            let ogImage
            let ogTitle
            let ogDescription
            let ogUrl
            let ogType

            // title
            title = 'Zásady Cookies | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Zásady Cookies pro cestovatelský portál Frytol na cestách.'

            // keywolds
            keywords = 'cookies, pravidla, eu'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/cookies`

            // ogType
            ogType = 'website'

            // Return
            return {
                title,
                meta: [
                    { hid: 'title', name: 'title', content: title },
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { hid: 'og:type', content: ogType },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:title', content: ogTitle },
                    { hid: 'og:description', content: ogDescription },
                    { property: 'og:image', content: ogImage },
                    { name: 'twitter:title', content: ogTitle },
                    { name: 'twitter:description', content: ogDescription },
                    { name: 'twitter:image', content: ogImage },
                    { name: 'twitter:url', content: ogUrl }
                ],
                link: [
                    { rel: 'canonical', href: ogUrl }
                ],
                script: [
                    {
                        type: 'application/ld+json',
                        json: {
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "Zásady Cookies",
                            "description": description,
                            "url": "https://www.frytolnacestach.cz/cookies",
                            "text": this.base[0].conditions_user,
                            "datePublished": "2024-01-29",
                            "author": {
                                "@type": "Organization",
                                "name": "Frytol na cestách",
                                "url": "https://www.frytolnacestach.cz/"
                            }
                        }
                    }
                ]
            }
        }
    })
</script>