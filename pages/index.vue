<template>
    <main class="t-main -gray -vh100" role="main">
        <div class="t-main__content">

            <!-- SECTION - Vyhledávač -->
            <section class="t-section pt-8 pb-4 hidden-print">
                <div class="t-section__inner">
                    <oSearch styleThema=" -gray"/>
                </div>
            </section>
            <!-- SECTION - Vyhledávač END -->

            <!-- SECTION - Top místa -->
            <section class="t-section -p0 mt-4 pb-4 print-section">
                <div class="t-section__inner">
                    <mHeadline title="Nejzajímavější místa" perex="Víte, kam byste se měli vydat na nezapomenutelnou dovolenou? Přinášíme vám seznam nejzajímavějších míst na světě, která musíte vidět. Od malebných vesnic a historických památek až po impozantní přírodní krásy, naše stránky vám pomohou najít nejlepší místa pro vaši další cestování." styleThema=" -gray -w640" styleAlign=" -center" styleGap=" mb-2" styleSize="h1" />
                    <oTopPlace styleThema=" -gray" skeletonThema=" -skeleton-gray" />
                </div>
            </section>
            <!-- SECTION - Top místa END -->
            
            <!-- SECTION - Typ místa -->
            <section class="t-section py-4 print-section">
                <div class="t-section__inner">
                    <mHeadline title="Nevíš kam vyrazit?" perex="Pokud toužíš pozkoumat svět a nemáš jasnou představu, kam se vydat, můžeš si vybrat některou z kategorií míst a začít prozkoumávat." styleThema=" -gray -w640" styleAlign=" -center" styleGap=" mb-2" />
                    <oWorldType styleThema=" -gray" skeletonThema=" -skeleton-gray" />
                </div>
            </section>
            <!-- SECTION - Typ místa END -->

            <section class="t-section -p0 px-1">
                <div class="t-section__inner -col">
                    
                    <!-- SECTION - Article list -->
                    <div class="t-section__col px-1 mb-4 print-section">
                        <mHeadline title="Nejnovější články" styleAlign=" -left" />
                        <oArticleListSmall :posts="post" :images="imagePost" styleThemaLoading=" -gray" />
                        <div class="flex flex-full flex-ai-end flex-center mt-2">
                            <aButtonFillFull target="internal" url="/clanky" text="Všechny články" styleThema=" -gray" />
                        </div>
                    </div>
                    <!-- SECTION - Article list END -->

                    <!-- SECTION - Video -->
                    <div class="t-section__col px-1 mb-4 print-section">
                        <mHeadline title="Nejnovější videa" styleAlign=" -left" />
                        <oVideoListSmall :videos="video" :images="imageVideo" styleThemaLoading=" -gray" />
                        <div class="flex flex-full flex-ai-end flex-center mt-2">
                            <aButtonFillFull target="internal" url="/videa" text="Všechna videa" styleThema=" -gray" />
                        </div>
                    </div>
                    <!-- SECTION - Video END-->

                    <!-- SECTION - events -->
                    <div class="t-section__col px-1 mb-4 print-section">
                        <mHeadline title="Nejbližší události" styleAlign=" -left" />
                        <oEventListSmall styleThema=" -gray" />
                        <div class="flex flex-full flex-ai-end flex-center mt-2">
                            <aButtonFillFull target="internal" url="/udalost" text="Všechny události" styleThema=" -gray" />
                        </div>
                    </div>
                    <!-- SECTION - events END -->
                    
                </div>
            </section>
        </div>
    </main>
</template>

<script>
    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oArticleListSmall from '~/components/organisms/oArticleListSmall.vue'
    import oEventListSmall from '~/components/organisms/oEventListSmall.vue'
    import oPlatform from '../components/organisms/oPlatform.vue'
    import oSearch from '@/components/organisms/oSearch.vue'
    import oTopPlace from '@/components/organisms/oTopPlace.vue'
    import oVideoListSmall from '~/components/organisms/oVideoListSmall.vue'
    import oWorldType from '@/components/organisms/oWorldType.vue'

    export default {
        name: 'IndexPage',
        
        components: {
            aButtonFillFull,
            mHeadline,
            oArticleListSmall,
            oEventListSmall,
            oPlatform,
            oSearch,
            oTopPlace,
            oVideoListSmall,
            oWorldType
        },

        data() {
            return {
                post: this.post,
                imagePost: this.imagePost,
                video: this.video,
                imageVideo: this.imageVideo,
                headline: 'Frytol na cestách'
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
            title = 'Cestovatelský portál Frytol na cestách'

            // description
            description = 'Cestuj chytře a naplánuj si svojí cestu na cestovatelské portálu Frytol na cestách. Založ si účet a ukaž přátelům kde všude jsi byl/a.'

            // keywolds
            keywords = 'Cestovatelský portál, cestování chytře, plánuj, úvod, cestování, svět'
            
            // ogImage
            ogImage = 'https://image.frytolnacestach.cz/storage/main/og-default.png'

            // ogTitle
            ogTitle = title

            // ogDescription
            ogDescription = description

            // ogUrl
            ogUrl = `${process.env.baseUrl}`

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
        },

        async asyncData({ $axios }) {
            // COMPONENT - Post
            // Post
            const post = await $axios.$get(`https://api.frytolnacestach.cz/api/posts?limit=5&status=nearby`)
            // Image
            const imagePost = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${post[0].id_image_cover}`)


            // COMPONENT - Video
            // Video
            const video = await $axios.$get(`https://api.frytolnacestach.cz/api/videos?limit=5&status=nearby`)
            // Image
            const imageVideo = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${video[0].id_image}`)


            return {
                post,
                imagePost,
                video,
                imageVideo
            }
        }
    }
</script>