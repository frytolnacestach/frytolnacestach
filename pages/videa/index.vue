<template>
    <main class="t-main">
        <section class="t-section">
            <SectionHero :headline="headline" />
        </section>


        <!-- SECTION - videos -->
        <section class="t-section pt-4 py-2 px-2" v-if="videos[0]">
            <div class="t-section__inner">
                <div class="o-video-list">
                    <div class="o-video-list__outer">
                        <div class="o-video-list__items">
                            <div v-for="video in videos" :key="video.id" class="o-video-list__item">
                                <div class="o-video-list__item-inner">
                                    <div class="o-video-list__image">
                                        <div class="o-video-list__image-file" v-bind:style="{ 'background-image': 'url(https://img.youtube.com/vi/' + getSlugURL(video.url) + '/0.jpg)'}">
                                            <NuxtLink class="o-video-list__image-link" :to="`/videa/${video.slug}`"></NuxtLink>
                                        </div>
                                    </div>
                                    <div class="o-video-list__text">
                                        <h3 class="o-video-list__title">
                                            <NuxtLink class="o-video-list__title-link" :to="`/videa/${video.slug}`">{{ video.title }}</NuxtLink>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    import SectionHero from '../../components/SectionHero.vue'
    import SectionPlatform from '../../components/SectionPlatform.vue'

    export default {
        name: 'PageClanky',

        components: {
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
                headline: "Videa"
            }
        },

        head: {
            title: 'Videa | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Videa z webu Frytol na cestách' },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/og/og-default.png' }
            ]
        },

        async asyncData({ $axios }) {
            const videos = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/videos`)
            return { videos }
        }
    }
</script>