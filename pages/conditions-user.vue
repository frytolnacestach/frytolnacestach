<template>
    <main class="t-main -gray -pt-menu" role="main">

        <!-- SECTION - Hero -->
        <section class="t-section -p0 mb-1 mt-2">
            <div class="t-section__inner">
                <oHero :headline="headline" modifierCSS=" -gray" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Wysiwyg -->
        <section class="t-section -wysiwyg py-4">
            <div class="t-section__inner">
                <oWysiwyg :text="base[0].conditions_user" />
            </div>
        </section>
        <!-- SECTION - Wysiwyg END -->

    </main>
</template>

<script>
    import oHero from '../components/organisms/oHero.vue'
    import oWysiwyg from '~/components/organisms/oWysiwyg.vue'

    export default {
        name: 'ConditionsUserPage',

        components: {
            oHero,
            oWysiwyg
        },

        data() {
            return {
                headline: "Obchodní podmínky a zásady ochrany osobních údajů (pro uživatelský účet)",
                base: this.base
            }
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
            title = 'Obchodní podmínky a zásady ochrany osobních údajů pro uživatelské účty | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Obchodní podmínky a zásady ochrany osobních údajů pro uživatelský účet na cestovatelském portálů Frytol na cestách'

            // keywolds
            keywords = 'podmínky, pravdila, eu, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/conditions-user`

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
                            "name": "Obchodní podmínky a zásady ochrany osobních údajů (uživatelský účet)",
                            "description": description,
                            "url": "https://www.frytolnacestach.cz/conditions-user",
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
        },

        async fetch() {
            this.base = await fetch("https://api.frytolnacestach.cz/api/base").then((res) => res.json())
        }
    }
</script>