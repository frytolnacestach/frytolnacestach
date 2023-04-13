<template>
    <main class="t-main">
        <section>
            <SectionHerobig />
        </section>

        <section class="t-section py-4">
            <div class="t-section__inner">
                <SectionWhoiam />
            </div>
        </section>

        <section class="t-section t-section--gray">
            <div class="t-section__inner">
                <div class="m-headline mt-4 text-align-center">
                    <h2 class="m-headline__title">Platformy kde jsem</h2>
                </div>
                <SectionPlatform />
                <div class="flex flex-center mb-4">
                    <NuxtLink class="a-button-fill a-button-fill--big a-button-fill--blue" to="/social">Více informací</NuxtLink>
                </div>
            </div>
        </section>


        <section class="t-section py-4">
            <div class="t-section__inner">
                <div class="m-headline mb-2 text-align-center">
                    <h2 class="m-headline__title">Nejnovější články</h2>
                </div>
                <div class="o-article-list">
                    <div class="o-article-list-list__outer">
                        <div class="o-article-list__items">
                            <div v-for="post in posts" :key="post.id" class="o-article-list__item">
                                <div class="o-article-list__item-inner">
                                    
                                    <div class="o-article-list__image loading-image">
                                        <div v-if="images && images.find(image => image.id === post.id_image_cover)" class="o-article-list__image-lazyload">
                                            <img
                                                class="o-article-list__image-file lazyload-file"
                                                v-lazy="{
                                                    src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                    srcset: {
                                                        '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                        '439': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                        '575': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                        '767': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                        '991': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                        '992': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                        '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                        '439@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                        '575@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                        '767@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                        '991@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                        '992@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x'
                                                    },
                                                    sizes: '(max-width: 374px) 374px, (max-width: 439px) 439px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, 992px'
                                                }"
                                                :alt="post.title"
                                            />
                                        </div>
                                        <div v-else class="o-article-list__image-lazyload">
                                            <img
                                                class="o-article-list__image-file lazyload-file"
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
                                                :alt="post.title"
                                            />
                                        </div>
                                        <NuxtLink class="o-article-list__image-link" :to="`/clanky/${post.slug}`"></NuxtLink>
                                    </div>

                                    <div class="o-article-list__text">
                                        <h3 class="o-article-list__title">
                                            <NuxtLink class="o-article-list__title-link" :to="`clanky/${post.slug}`">{{ post.title }}</NuxtLink>
                                        </h3>
                                        <p class="o-article-list__perex">
                                            <NuxtLink class="o-article-list__perex-link" :to="`/clanky/${post.slug}`">{{ post.perex }}</NuxtLink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-center mt-2">
                    <NuxtLink class="a-button-fill a-button-fill--big a-button-fill--blue" to="/clanky">Všechny články</NuxtLink>
                </div>
            </div>
        </section>

        <section class="t-section t-section--gray py-4">
            <div class="t-section__inner">
                <div class="m-headline mb-4 text-align-center">
                    <h2 class="m-headline__title">Nejnovější video</h2>
                </div>
              
                <div class="o-video-list">
                    <div class="o-video-list__outer">
                        <div class="o-video-list__items">
                            <div class="o-video-list__item">
                                <div class="o-video-list__item-inner">
                                    
                                    <div class="o-video-list__image loading-image">
                                        <div v-if="image[0]" class="o-video-list__image-lazyload">
                                            <img
                                                class="o-video-list__image-file lazyload-file"
                                                v-lazy="{
                                                    src: 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',
                                                    srcset: {
                                                        '374': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',
                                                        '439': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',
                                                        '575': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',
                                                        '767': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',
                                                        '991': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',
                                                        '992': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',
                                                        '374@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',
                                                        '439@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',
                                                        '575@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',
                                                        '767@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',
                                                        '991@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',
                                                        '992@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x'
                                                    },
                                                    sizes: '(max-width: 374px) 374px, (max-width: 439px) 439px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, 992px'
                                                }"
                                                :alt="video[0].title"
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
                                                :alt="video[0].title"
                                            />
                                        </div>
                                        <NuxtLink class="o-video-list__image-link" :to="`/videa/${video[0].slug}`"></NuxtLink>
                                    </div>

                                    <div class="o-video-list__text">
                                        <h3 class="o-video-list__title">
                                            <NuxtLink class="o-video-list__title-link" :to="`/videa/${video[0].slug}`">{{ video[0].title }}</NuxtLink>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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

  import SectionHerobig from '../components/SectionHerobig.vue'
  import SectionWhoiam from '../components/SectionWhoiam.vue'
  import SectionPlatform from '../components/SectionPlatform.vue'
  import SectionDonate from '../components/SectionDonate.vue'
  import SectionSupport from '../components/SectionSupport.vue'

  export default {
    name: 'IndexPage',
    components: {
        SectionHerobig,
        SectionWhoiam,
        SectionPlatform,
        SectionDonate,
        SectionSupport
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