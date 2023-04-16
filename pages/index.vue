<template>
    <main class="t-main">
        
        <!-- SECTION - Hero -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <oHerobig :headline="headline" />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <section class="t-section py-4">
            <div class="t-section__inner">
                <oWhoiam />
            </div>
        </section>

        <!-- SECTION - Platforms -->
        <section class="t-section t-section--gray pt-4">
            <div class="t-section__inner">
                <mHeadline title="Platformy kde jsem" styleAlign=" -center" />
                <oPlatform />
                <div class="flex flex-center mb-4">
                    <NuxtLink class="a-button-fill a-button-fill--big a-button-fill--blue" to="/social">Více informací</NuxtLink>
                </div>
            </div>
        </section>
        <!-- SECTION - Platforms END -->

        <section class="t-section py-4">
            <div class="t-section__inner">
                <mHeadline title="Nejnovější články" styleAlign=" -center" styleGap=" mb-2" />
                <oArticleList :posts="posts" :images="images" />
                <div class="flex flex-center mt-2">
                    <NuxtLink class="a-button-fill a-button-fill--big a-button-fill--blue" to="/clanky">Všechny články</NuxtLink>
                </div>
            </div>
        </section>

        <section class="t-section t-section--gray py-4">
            <div class="t-section__inner">
                <mHeadline title="Nejnovější video" styleAlign=" -center" styleGap=" mb-2" />
                <oVideoList :videos="video" :images="image" />
                <div class="flex flex-center mt-2">
                    <a class="a-button-fill a-button-fill--big a-button-fill--blue" href="https://www.youtube.com/channel/UCQnsNK3Xd5Tj3zcVWQDMi8A/videos" target="_blank">Všechna videa (YouTube)</a>
                </div>
            </div>
        </section>

        <section class="t-section py-4">
            <div class="t-section__inner">
                <oDonate :showHeadline=true />
                <oSupport />
                <div class="flex flex-center">
                    <NuxtLink class="a-button-fill a-button-fill--big a-button-fill--blue" to="/donate">Podpora</NuxtLink>
                </div>
            </div>
        </section>
    </main>
</template>

<script>

    import mHeadline from '~/components/molecules/mHeadline.vue'
    import oArticleList from '~/components/organisms/oArticleList.vue'
    import oDonate from '../components/organisms/oDonate.vue'
    import oHerobig from '../components/organisms/oHerobig.vue'
    import oPlatform from '../components/organisms/oPlatform.vue'
    import oSupport from '../components/organisms/oSupport.vue'
    import oVideoList from '~/components/organisms/oVideoList.vue'
    import oWhoiam from '../components/organisms/oWhoiam.vue'

    export default {
        name: 'IndexPage',
        components: {
            mHeadline,
            oArticleList,
            oDonate,
            oHerobig,
            oPlatform,
            oSupport,
            oVideoList,
            oWhoiam
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
                { hid: 'description', name: 'description', content: 'Úvodní stránka webu Frytol na cestách' },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/_default/og-default.png' }
            ]
        },

        async asyncData({ $axios }) {
            //posts
            const posts = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/posts`)

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