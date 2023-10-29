<template>
    <main class="t-main -gray -pt-menu" role="main">

        <!-- SECTION - Hero -->
        <section class="t-section -p0 mb-1 mt-2">
            <div class="t-section__inner">
                <oHero :headline="headline" modifierCSS=" -gray" />
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

    </main>
</template>

<script>
    import oBoxPlatform from '../components/organisms/oBoxPlatform.vue'
    import oHero from '../components/organisms/oHero.vue'

    export default {
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
            title = 'Kde mě najdeš | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Sociální sítě a platformy kde najdete Frytola na cestách.'

            // keywolds
            keywords = 'sociální sítě, cestovatelská videa, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/social`

            // ogType
            ogType = 'website'

            // Return
            return {
                title,
                meta: [
                    { hid: 'description', name: 'description', content: description },
                    { name: 'keywords', content: keywords },
                    { property: 'og:image', content: ogImage },
                    { hid: 'og:title', content: title },
                    { hid: 'og:description', content: ogDescription },
                    { hid: 'og:url', content: ogUrl },
                    { hid: 'og:type', content: ogType }
                ]
            }
        }
    }
</script>