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
                <oWysiwyg :text="base[0].conditions" />
            </div>
        </section>
        <!-- SECTION - Wysiwyg END -->

    </main>
</template>

<script>
    import oHero from '../components/organisms/oHero.vue'
    import oWysiwyg from '~/components/organisms/oWysiwyg.vue'

    export default {
        name: 'ConditionsPage',

        components: {
            oHero,
            oWysiwyg
        },

        data() {
            return {
                headline: "Obchodní podmínky a zásady ochrany osobních údajů",
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
            title = 'Obchodní podmínky a zásady ochrany osobních údajů | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Obchodní podmínky a zásady ochrany osobních údajů pro web Frytol na cestách.'

            // keywolds
            keywords = 'podmínky, pravdila, eu, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/conditions`

            // ogType
            ogType = 'website'

            // Return
            return {
                title,
                meta: [
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { property: 'og:image', content: ogImage },
                    { hid: 'og:title', content: ogTitle },
                    { hid: 'og:description', content: ogDescription },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:type', content: ogType }
                ]
            }
        },

        async fetch() {
            this.base = await fetch("https://api.frytolnacestach.cz/api/base").then((res) => res.json())
        }
    }
</script>