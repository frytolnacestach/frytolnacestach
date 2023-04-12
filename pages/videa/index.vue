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
                                        <lazyload v-if="images && images.find(image => image.id === video.id_image)" class="o-video-list__image-lazyload">
                                            <picture class="o-video-list__image-picture">
                                                <source
                                                    class="o-video-list__image-file"
                                                    media="(max-width: 374px)"
                                                    type="image/webp"
                                                    :srcset="'https://image.frytolnacestach.cz/storage' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 1x, https://image.frytolnacestach.cz/storage' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x'"
                                                    :sizes="'(max-width: 374px) 100vw'"
                                                />
                                                <source
                                                    class="o-video-list__image-file"
                                                    media="(max-width: 439px)"
                                                    type="image/webp"
                                                    :srcset="'https://image.frytolnacestach.cz/storage' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 1x, https://image.frytolnacestach.cz/storage' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x'"
                                                    :sizes="'(max-width: 439px) 100vw'"
                                                />
                                                <source
                                                    class="o-video-list__image-file"
                                                    media="(max-width: 575px)"
                                                    type="image/webp"
                                                    :srcset="'https://image.frytolnacestach.cz/storage' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 1x, https://image.frytolnacestach.cz/storage' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x'"
                                                    :sizes="'(max-width: 575px) 100vw'"
                                                />
                                                <source
                                                    class="o-video-list__image-file"
                                                    media="(max-width: 767px)"
                                                    type="image/webp"
                                                    :srcset="'https://image.frytolnacestach.cz/storage' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 1x, https://image.frytolnacestach.cz/storage' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x'"
                                                    :sizes="'(max-width: 767px) 100vw'"
                                                />
                                                <source
                                                    class="o-video-list__image-file"
                                                    media="(max-width: 991px)"
                                                    type="image/webp"
                                                    :srcset="'https://image.frytolnacestach.cz/storage' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 1x, https://image.frytolnacestach.cz/storage' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x'"
                                                    :sizes="'(max-width: 991px) 100vw'"
                                                />
                                                <source
                                                    class="o-video-list__image-file"
                                                    media="(min-width: 992px)"
                                                    type="image/webp"
                                                    :srcset="'https://image.frytolnacestach.cz/storage' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 1x, https://image.frytolnacestach.cz/storage' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x'"
                                                    :sizes="'(min-width: 992px) 100vw'"
                                                />
                                                <img
                                                    class="o-video-list__image-file"
                                                    :src="'https://image.frytolnacestach.cz/storage' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.jpg'"
                                                    :alt="video.name"
                                                />
                                            </picture>
                                        </lazyload>
                                        <lazyload v-else class="o-video-list__image-lazyload">
                                            <picture class="o-video-list__image-picture">
                                                <source
                                                    class="o-video-list__image-file"
                                                    media="(max-width: 374px)"
                                                    type="image/webp"
                                                    :srcset="`https://image.frytolnacestach.cz/storage/_default/hero.webp 1x, https://image.frytolnacestach.cz/storage/_default/hero.webp 2x`"
                                                    :sizes="'(max-width: 374px) 100vw'"
                                                />
                                                <source
                                                    class="o-video-list__image-file"
                                                    media="(max-width: 439px)"
                                                    type="image/webp"
                                                    :srcset="`https://image.frytolnacestach.cz/storage/_default/hero.webp 1x, https://image.frytolnacestach.cz/storage/_default/hero.webp 2x`"
                                                    :sizes="'(max-width: 439px) 100vw'"
                                                />
                                                <source
                                                    class="o-video-list__image-file"
                                                    media="(max-width: 575px)"
                                                    type="image/webp"
                                                    :srcset="`https://image.frytolnacestach.cz/storage/_default/hero.webp 1x, https://image.frytolnacestach.cz/storage/_default/hero.webp 2x`"
                                                    :sizes="'(max-width: 575px) 100vw'"
                                                />
                                                <source
                                                    class="o-video-list__image-file"
                                                    media="(max-width: 767px)"
                                                    type="image/webp"
                                                    :srcset="`https://image.frytolnacestach.cz/storage/_default/hero.webp 1x, https://image.frytolnacestach.cz/storage/_default/hero.webp 2x`"
                                                    :sizes="'(max-width: 767px) 100vw'"
                                                />
                                                <source
                                                    class="o-video-list__image-file"
                                                    media="(max-width: 991px)"
                                                    type="image/webp"
                                                    :srcset="`https://image.frytolnacestach.cz/storage/_default/hero.webp 1x, https://image.frytolnacestach.cz/storage/_default/hero.webp 2x`"
                                                    :sizes="'(max-width: 991px) 100vw'"
                                                />
                                                <source
                                                    class="o-video-list__image-file"
                                                    media="(min-width: 992px)"
                                                    type="image/webp"
                                                    :srcset="`https://image.frytolnacestach.cz/storage/_default/hero.webp 1x, https://image.frytolnacestach.cz/storage/_default/hero.webp 2x`"
                                                    :sizes="'(min-width: 992px) 100vw'"
                                                />
                                                <img
                                                    class="o-video-list__image-file"
                                                    :src="`https://image.frytolnacestach.cz/storage/_default/hero.jpg`"
                                                    :alt="video.title"
                                                />
                                            </picture>
                                        </lazyload>

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
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/og/og-default.png' }
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