<template>
    <main class="t-main">
        <section class="t-section">
            <SectionHero :headline="headline" />
        </section>

        <section class="t-section my-4">
            <div class="t-section__inner">
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
                                                        '1139': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                        '1219': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                        '1399': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                        '1400': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp',
                                                        '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                        '439@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                        '575@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                        '767@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                        '991@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                        '1139@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                        '1219@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                        '1399@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x',
                                                        '1400@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name + '.webp 2x'
                                                    },
                                                    sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1400px'
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
                                                        '575': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                        '767': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                        '991': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                        '1139': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                        '1219': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                        '1399': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                        '1400': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',
                                                        '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                        '575@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                        '767@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                        '991@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                        '1139@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                        '1219@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                        '1399@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',
                                                        '1400@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'
                                                    },
                                                    sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1400px'
                                                }"
                                                :alt="post.title"
                                            />
                                        </div>
                                        <NuxtLink class="o-article-list__image-link" :to="`/clanky/${post.slug}`"></NuxtLink>
                                    </div>

                                    <div class="o-article-list__text">
                                        <h3 class="o-article-list__title">
                                            <NuxtLink class="o-article-list__title-link" :to="`/clanky/${post.slug}`">{{ post.title }}</NuxtLink>
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
            </div>
        </section>

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

        data() {
            return {
                headline: "Články"
            }
        },

        head: {
            title: 'Články | Frytol na cestách',
            meta: [
                { hid: 'description', name: 'description', content: 'Članky z webu Frytol na cestách' },
                { property: 'og:image', content: 'https://image.frytolnacestach.cz/storage/og/og-default.png' }
            ]
        },

        async asyncData({ $axios }) {
            //posts
            const posts = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/posts`)

            // Načtení informací o obrázku
            const images = await $axios.$get(`https://frytolnacestach-api.vercel.app/api/images`)
            return { posts, images }
        }
    }
</script>