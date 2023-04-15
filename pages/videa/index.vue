<template>
    <main class="t-main">
        <section class="t-section">
            <SectionHero :headline="headline" />
        </section>

        <!-- SECTION - videos -->
        <section class="t-section pt-4 py-2" v-if="videos[0]">
            <div class="t-section__inner">
                <oVideoList :videos="videos" :images="images" />
            </div>
        </section>
        <!-- SECTION - videos END -->

        <section class="t-section t-section--gray">
            <div class="m-headline mt-4 text-align-center">
                <h2 class="m-headline__title">Další obsah</h2>
            </div>

            <SectionPlatform />
            
            <div class="flex flex-center mb-4">
                <NuxtLink class="a-button-fill a-button-fill--big a-button-fill--blue" to="/social">Více informací</NuxtLink>
            </div>
        </section>
    </main>
</template>

<script>

    import oVideoList from '@/components/oVideoList.vue'
    import SectionHero from '../../components/SectionHero.vue'
    import SectionPlatform from '../../components/SectionPlatform.vue'

    export default {
        name: 'PageClanky',

        components: {
            oVideoList,
            SectionHero,
            SectionPlatform
        },

        methods:{
            getSlugURL(url) {
                url = url.replace("https://youtu.be/", "").replace("https://youtube.com/shorts/", "");
                return url.replace(" ", "");
            }
        },

        data() {
            return {
                headline: "Videa",
                videos: this.videos,
                images: this.images
            }
        },

        head: {
            title: 'Videa | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Videa z webu Frytol na cestách' },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/_default/og-default.png' }
            ]
        },

        updated() {
            window.lazySizes && window.lazySizes.update();
        },

        async asyncData({ $axios }) {
            const videos = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/videos`)

            // Načtení informací o obrázku
            const images = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images`)
            return { videos, images }
        }
    }
</script>