<template>
    <main class="t-main -gray" role="main">
        
        <!-- SECTION - Hero -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oHerobig :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <section class="t-section -p0 px-1">
            <div class="t-section__inner -col">
                <div class="t-section__col px-1 mb-4">
                    <!-- SECTION - Article list -->
                    <mHeadline title="Nejnovější článek" styleAlign=" -left" />
                    <oArticleList :posts="posts" :images="images" styleThema=" -latest" />
                    <div class="flex flex-full flex-ai-end flex-center mt-2">
                        <aButtonFillFull url="/clanky" text="Všechny články" styleThema=" -green" target="internal" />
                    </div>
                    <!-- SECTION - Article list END -->
                </div>
                <div class="t-section__col px-1 mb-4">
                    <!-- SECTION - Video -->
                    <mHeadline title="Nejnovější video" styleAlign=" -left" />
                    <oVideoList :videos="video" :images="image" styleThema=" -latest" />
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
    import oVideoList from '~/components/organisms/oVideoList.vue'

    export default {
        name: 'IndexPage',
        
        components: {
            aButtonFillFull,
            mHeadline,
            oArticleList,
            oHerobig,
            oPlatform,
            oVideoList
        },

        data() {
            return {
                image: this.image,
                video: this.video,
                headline: 'Frytol na cestách',
            }
        },

        head: {
            title: 'Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Úvodní stránka webu Frytol na cestách.' },
                { name: 'keywords', content: `Cestovatelský portál, úvod, cestování, svět` },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/main/og-default.png' },
                { hid: 'og:title', content: 'Frytol na cestách' },
                { hid: 'og:description', content: 'Úvodní stránka webu Frytol na cestách.' },
                { hid: 'og:url', content: `${process.env.baseUrl}` },
                { hid: 'og:type', content: 'website' }
            ]
        },

        async asyncData({ $axios }) {
            //post
            const posts = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/post-last`)

            //video
            const video = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/video-last/`)

            // Načtení informací o obrázku
            const image = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/image-id/${video[0].id_image}`)

            // Načtení informací o obrázku
            const images = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images/`)

            return { posts, video, image, images }
        }
    }
</script>