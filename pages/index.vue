<template>
    <NuxtLayout name="default">
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
    </NuxtLayout>
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

    export default defineComponent({
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
                post: [],
                imagePost: [],
                video: [],
                imageVideo: [],
                headline: 'Frytol na cestách'
            }
        },

        setup() {
            let headMeta = reactive({
                title: 'Cestovatelský portál Frytol na cestách',
                description: 'Cestuj chytře a naplánuj si svojí cestu na cestovatelské portálu Frytol na cestách. Založ si účet a ukaž přátelům kde všude jsi byl/a.',
                keywords: 'Cestovatelský portál, cestování chytře, plánuj, úvod, cestování, svět',
                ogImage: 'https://image.frytolnacestach.cz/storage/main/og-default.png',
                ogTitle: 'Cestovatelský portál Frytol na cestách',
                ogDescription: 'Cestuj chytře a naplánuj si svojí cestu na cestovatelské portálu Frytol na cestách. Založ si účet a ukaž přátelům kde všude jsi byl/a.',
                ogUrl: `https://www.frytolnacestach.cz`,
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
            this.fetchData()
        },

        methods: {
            async fetchData() {
                // COMPONENT - Post
                // Post
                const responsePost = await fetch(`https://api.frytolnacestach.cz/api/posts?limit=5&status=nearby`)
                this.post = await responsePost.json()
                // Image
                if(this.post && this.post.length > 0){
                    const responseImagePost = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.post[0].id_image_cover}`)
                    this.imagePost = await responseImagePost.json()
                }

                // COMPONENT - Video
                // Video
                const responseVideo = await fetch(`https://api.frytolnacestach.cz/api/videos?limit=5&status=nearby`)
                this.video = await responseVideo.json()
                // Image
                if(this.video && this.video.length > 0){
                    const responseImageVideo = await fetch(`https://api.frytolnacestach.cz/api/image-id/${this.video[0].id_image}`)
                    this.imageVideo = await responseImageVideo.json()
                }
            }
        }
    })
</script>