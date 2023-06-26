<template>
    <main class="t-main -gray" role="main">
        
        <!-- SECTION - Hero -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oHerobig :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <!-- SECTION - Top místa text -->
        <section class="t-section pt-4">
            <div class="t-section__inner">
                <mHeadline title="Nejzajímavější místa" perex="Víte, kam byste se měli vydat na nezapomenutelnou dovolenou? Přinášíme vám seznam nejzajímavějších míst na světě, která musíte vidět. Od malebných vesnic a historických památek až po impozantní přírodní krásy, naše stránky vám pomohou najít nejlepší místa pro vaši další cestování." styleThema=" -world -w640" styleAlign=" -center" styleGap=" mb-2" />
            </div>
        </section>
        <!-- SECTION - Top místa END -->

        <!-- SECTION - Top místa -->
        <section class="t-section -p0 pb-4">
            <div class="t-section__inner">
                <oTopPlace />
            </div>
        </section>
        <!-- SECTION - Top místa END -->
        
         <!-- SECTION - Typ místa -->
         <section class="t-section py-4">
            <div class="t-section__inner">
                <mHeadline title="Nevíš kam vyrazit?" perex="Pokud toužíš pozkoumat svět a nemáš jasnou představu, kam se vydat, můžeš si vybrat některou z kategorií míst a začít prozkoumávat." styleThema=" -world -w640" styleAlign=" -center" styleGap=" mb-2" />
                <oWorldType />
            </div>
        </section>
        <!-- SECTION - Typ místa END -->

        <section class="t-section -p0 px-1">
            <div class="t-section__inner -col">
                <div class="t-section__col px-1 mb-4">
                    <!-- SECTION - Article list -->
                    <mHeadline title="Nejnovější článek" styleAlign=" -left" />
                    <oArticleList :posts="post" :images="imagePost" styleThema=" -latest" />
                    <div class="flex flex-full flex-ai-end flex-center mt-2">
                        <aButtonFillFull url="/clanky" text="Všechny články" styleThema=" -green" target="internal" />
                    </div>
                    <!-- SECTION - Article list END -->
                </div>
                <div class="t-section__col px-1 mb-4">
                    <!-- SECTION - Video -->
                    <mHeadline title="Nejnovější video" styleAlign=" -left" />
                    <oVideoList :videos="video" :images="imageVideo" styleThema=" -latest" />
                    <div class="flex flex-full flex-ai-end flex-center mt-2">
                        <aButtonFillFull url="/videa" text="Všechna videa" styleThema="  -green" target="internal" />
                    </div>
                    <!-- SECTION - Video END-->
                </div>
            </div>
        </section>
    </main>
</template>

<script>

    import aButtonFillFull from '~/components/atoms/aButtonFillFull.vue'
    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oArticleList from '~/components/organisms/oArticleList.vue'
    import oHerobig from '../components/organisms/oHerobig.vue'
    import oPlatform from '../components/organisms/oPlatform.vue'
    import oTopPlace from '@/components/organisms/oTopPlace.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'
    import oWorldType from '@/components/organisms/oWorldType.vue'

    export default {
        name: 'IndexPage',
        
        components: {
            aButtonFillFull,
            mHeadline,
            oArticleList,
            oHerobig,
            oPlatform,
            oTopPlace,
            oVideoList,
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

        head: {
            title: 'Cestovatelský portál Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Cestuj chytře a naplánuj si svojí cestu na cestovatelské portálu Frytol na cestách. Založ si účet a ukaž přátelům kde všude jsi byl/a.' },
                { name: 'keywords', content: `Cestovatelský portál, cestování chytře, plánuj, úvod, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Cestovatelský portál Frytol na cestách' },
                { hid: 'og:description', content: 'Cestuj chytře a naplánuj si svojí cestu na cestovatelské portálu Frytol na cestách. Založ si účet a ukaž přátelům kde všude jsi byl/a.' },
                { hid: 'og:url', content: `${process.env.baseUrl}` },
                { hid: 'og:type', content: 'website' }
            ]
        },

        async asyncData({ $axios }) {
            // COMPONENT - Post
            // Post
            const post = await $axios.$get(`https://api.frytolnacestach.cz/api/post-last`)
            // Image
            const imagePost = await $axios.$get(`https://api.frytolnacestach.cz/api/image-id/${post[0].id_image_cover}`)


            // COMPONENT - Video
            // Video
            const video = await $axios.$get(`https://api.frytolnacestach.cz/api/video-last/`)
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