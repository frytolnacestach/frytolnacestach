<template>
    <main class="t-main -gray -pt-menu" role="main">
        <div class="t-main__content">
            
            <!-- SECTION - Hero -->
            <section class="t-section -p0 pt-2 pb-1">
                <div class="t-section__inner">
                    <oHero :headline="headline" modifierCSS=" -gray" classCSS=" mt-2" />
                </div>
            </section>
            <!-- SECTION - Hero END -->

            <!-- SECTION - Whoiam -->
            <section class="t-section -p0 py-1">
                <div class="t-section__inner">
                    <oWhoiam />
                </div>
            </section>
            <!-- SECTION - Whoiam END -->

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
    import oHero from '../components/organisms/oHero.vue'
    import oPlatform from '../components/organisms/oPlatform.vue'
    import oWhoiam from '../components/organisms/oWhoiam.vue'

    export default {
        name: 'IamPage',

        components: {
            aButtonFillFull,
            mHeadline,
            oHero,
            oPlatform,
            oWhoiam
        },

        data() {
            return {
                headline: "Kdo jsem"
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
            title = 'Kdo jsem | Cestovatelský portál Frytol na cestách'

            // description
            description = 'Kdo je Frytol na cestách? Co dělá a kde ho najdete.'

            // keywolds
            keywords = 'Cestovatelská videa, Internetové platformy, kdo jsem, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}/iam`

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