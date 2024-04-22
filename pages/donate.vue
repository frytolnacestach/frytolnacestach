<template>
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
</template>

<script>
    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oDonate from '../components/organisms/oDonate.vue'
    import oHero from '../components/organisms/oHero.vue'
    import oPlatform from '../components/organisms/oPlatform.vue'
    import oSupport from '../components/organisms/oSupport.vue'

    export default {
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
            title = 'Podpořit | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Podpořte cestovatelský portá a video tvorbu od Frytola na cestách.'

            // keywolds
            keywords = 'podpořit, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/donate`

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
                            "name": title,
                            "description": description,
                            "url": ogUrl,
                            "datePublished": "2024-01-31",
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
    }
</script>