<template>
    <main class="t-main">
        <section class="t-section">
            <SectionHero :headline="headline" />
        </section>

        <!-- SECTION - videos -->
        <section class="t-section pt-4 py-2" v-if="videos[0]">
            <div class="t-section__inner">
                <div class="o-video-list">
                    <div class="o-video-list__outer">
                        <div class="o-video-list__items">
                            <div v-for="video in videos" :key="video.id" class="o-video-list__item">
                                <div class="o-video-list__item-inner">
                                    
                                    <div class="o-video-list__image loading-image">
                                        <div v-if="images && images.find(image => image.id === video.id_image)" class="o-video-list__image-lazyload">
                                            <img
                                                class="o-video-list__image-file lazyload-file"
                                                v-lazy="{
                                                    src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                    srcset: {
                                                        '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                        '439': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                        '575': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                        '767': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                        '991': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                        '992': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',
                                                        '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                                        '439@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                                        '575@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                                        '767@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                                        '991@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',
                                                        '992@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x'
                                                    },
                                                    sizes: '(max-width: 374px) 374px, (max-width: 439px) 439px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, 992px'
                                                }"
                                                :alt="video.title"
                                            />
                                        </div>
                                        <div v-else class="o-video-list__image-lazyload">
                                            <img
                                                class="o-video-list__image-file lazyload-file"
                                                v-lazy="{
                                                    src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                    srcset: {
                                                        '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                        '439': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                        '575': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                        '767': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                        '991': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                        '992': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                        '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                        '439@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                        '575@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                        '767@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                        '991@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                        '992@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'
                                                    },
                                                    sizes: '(max-width: 374px) 374px, (max-width: 439px) 439px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, 992px'
                                                }"
                                                :alt="video.title"
                                            />
                                        </div>
                                        <NuxtLink class="o-video-list__image-link" :to="`/videa/${video.slug}`"></NuxtLink>
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