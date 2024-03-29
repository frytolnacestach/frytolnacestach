<template>
    <main class="t-main -gray -pt-menu" role="main">
        
        <!-- SECTION - Hero -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oHero :headline="headline" modifierCSS=" -gray" classCSS=" mt-2" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Build -->
		<section class="t-section">
            <div class="t-section__inner">
                <oBuild />
            </div>
		</section>
		<!-- SECTION - Build END -->

    </main>
</template>

<script>
    import oBuild from '../components/organisms/oBuild.vue'
    import oHero from '../components/organisms/oHero.vue'

    export default {
        name: 'StyleguidePage',
        
        components: {
            oBuild,
            oHero
        },

        data() {
            return {
                headline: "Styleguide"
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
            title = 'Styleguide | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Styleguide pro cestovatelský portál Frytol na cestách.'

            // keywolds
            keywords = 'styleguide, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/styleguide`

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
                ]
            }
        }
    }
</script>