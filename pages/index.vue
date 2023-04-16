<template>
    <main class="t-main">
        
        <!-- SECTION - Hero -->
        <section class="t-section -p0">
            <div class="t-section__inner">
                <SectionHerobig />
            </div>
        </section>
        <!-- SECTION - Hero END -->

        <section class="t-section py-4">
            <div class="t-section__inner">
                <SectionWhoiam />
            </div>
        </section>

        <!-- SECTION - Platforms -->
        <section class="t-section t-section--gray pt-4">
            <div class="t-section__inner">
                <mHeadline title="Platformy kde jsem" styleAlign=" -center" />
                <SectionPlatform />
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
                <SectionDonate :showHeadline="1" />
                <SectionSupport />
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
    import oVideoList from '~/components/organisms/oVideoList.vue'
    import SectionHerobig from '../components/SectionHerobig.vue'
    import SectionWhoiam from '../components/SectionWhoiam.vue'
    import SectionPlatform from '../components/SectionPlatform.vue'
    import SectionDonate from '../components/SectionDonate.vue'
    import SectionSupport from '../components/SectionSupport.vue'

    export default {
        name: 'IndexPage',
        components: {
            mHeadline,
            oArticleList,
            oVideoList,
            SectionHerobig,
            SectionWhoiam,
            SectionPlatform,
            SectionDonate,
            SectionSupport
        },

        data() {
            return {
                image: this.image,
                video: this.video
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