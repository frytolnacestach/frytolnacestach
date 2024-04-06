<template>
    <section class="t-component-skeleton">
        <!-- skeleton -->
        <skeletonoArticleList :styleThema="(skeletonThema ? skeletonThema : '')" :skeletonNumber="skeletonNumber" v-if="posts === null && skeleton" />
        <!-- skeleton END -->

        <!-- client -->
        <client-only v-if="posts !== null && !skeleton">
            <div :class="'o-article-list-small' + (styleThema ? styleThema : '') + (styleAlign ? styleAlign : '')">
                <div class="o-article-list-small__outer">
                    <div class="o-article-list-small__items">
                        <div v-for="post in posts" :key="post.id" class="o-article-list-small__item print-section">
                            <div :class="'o-article-list-small__image loading-image ' + (styleThemaLoading ? styleThemaLoading : '')">
                                <div v-if="images && images.find(image => image.id === post.id_image_cover)" class="o-article-list-small__image-lazyload">
                                    <img class="o-article-list-small__image-file lazyload-file"
                                        data-sizes="(max-width: 349px) 320px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 360px, (max-width: 1019px) 320px, (max-width: 1219px) 384px, (max-width: 1399px) 442px, 620px"
                                        :data-srcset="`
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + 'h-' + images.find(image => image.id === post.id_image_cover).name}-320.webp 320w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + 'h-' + images.find(image => image.id === post.id_image_cover).name}-340.webp 340w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + 'h-' + images.find(image => image.id === post.id_image_cover).name}-360.webp 360w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + 'h-' + images.find(image => image.id === post.id_image_cover).name}-384.webp 384w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + 'h-' + images.find(image => image.id === post.id_image_cover).name}-420.webp 420w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + 'h-' + images.find(image => image.id === post.id_image_cover).name}-536.webp 536w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + 'h-' + images.find(image => image.id === post.id_image_cover).name}-620.webp 620w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + 'h-' + images.find(image => image.id === post.id_image_cover).name}-640-2x.webp 640w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + 'h-' + images.find(image => image.id === post.id_image_cover).name}-680-2x.webp 680w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + 'h-' + images.find(image => image.id === post.id_image_cover).name}-720-2x.webp 720w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + 'h-' + images.find(image => image.id === post.id_image_cover).name}-768-2x.webp 768w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + 'h-' + images.find(image => image.id === post.id_image_cover).name}-840-2x.webp 840w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + 'h-' + images.find(image => image.id === post.id_image_cover).name}-1072-2x.webp 1072w,
                                            https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + 'h-' + images.find(image => image.id === post.id_image_cover).name}-1240-2x.webp 1240w
                                        `"
                                        :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name}.webp`"
                                        :alt="post.title ? post.title : 'Obrázek článku'"
                                        v-lazy>
                                </div>
                                <div v-else class="o-article-list-small__image-lazyload">
                                    <img class="o-article-list-small__image-file lazyload-file"
                                        data-sizes="(max-width: 349px) 320px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 360px, (max-width: 1019px) 320px, (max-width: 1219px) 384px, (max-width: 1399px) 442px, 620px"
                                        :data-srcset="`
                                            https://image.frytolnacestach.cz/storage/_default/h-no-image-320.webp 320w,
                                            https://image.frytolnacestach.cz/storage/_default/h-no-image-340.webp 340w,
                                            https://image.frytolnacestach.cz/storage/_default/h-no-image-360.webp 360w,
                                            https://image.frytolnacestach.cz/storage/_default/h-no-image-384.webp 384w,
                                            https://image.frytolnacestach.cz/storage/_default/h-no-image-420.webp 420w,
                                            https://image.frytolnacestach.cz/storage/_default/h-no-image-536.webp 536w,
                                            https://image.frytolnacestach.cz/storage/_default/h-no-image-620.webp 620w,
                                            https://image.frytolnacestach.cz/storage/_default/h-no-image-640-2x.webp 640w,
                                            https://image.frytolnacestach.cz/storage/_default/h-no-image-680-2x.webp 680w,
                                            https://image.frytolnacestach.cz/storage/_default/h-no-image-720-2x.webp 720w,
                                            https://image.frytolnacestach.cz/storage/_default/h-no-image-768-2x.webp 768w,
                                            https://image.frytolnacestach.cz/storage/_default/h-no-image-840-2x.webp 840w,
                                            https://image.frytolnacestach.cz/storage/_default/h-no-image-1072-2x.webp 1072w,
                                            https://image.frytolnacestach.cz/storage/_default/h-no-image-1240-2x.webp 1240w
                                        `"
                                        :data-src="`https://image.frytolnacestach.cz/storage/_default/no-image.webp`"
                                        :alt="post.title ? post.title : 'Obrázek článku'"
                                        v-lazy>
                                </div>
                                <NuxtLink class="o-article-list-small__image-link" :to="`/clanky/${post.slug}`" :aria-label="`Přečti si článek ${post.title}`" v-if="post.slug"></NuxtLink>
                            </div>

                            <div class="o-article-list-small__text">
                                <h3 class="o-article-list-small__title" v-if="post.title">
                                    <NuxtLink class="o-article-list-small__title-link" :to="`/clanky/${post.slug}`">{{ post.title }}</NuxtLink>
                                </h3>
                                <p class="o-article-list-small__perex" v-if="post.perex">
                                    <NuxtLink class="o-article-list-small__perex-link" :to="`/clanky/${post.slug}`">{{ post.perex }}</NuxtLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
        <!-- client END -->
    </section>
</template>

<script>
    import skeletonoArticleList from '~/components/skeleton/skeletonoArticleList.vue'

    export default {
        name: 'OrganismsoArticleListSmallComponent',

        components: {
            skeletonoArticleList
        },

        props: {
            posts: {
                type: Array,
                required: true
            },
            images: {
                type: Array,
                required: true
            },
            styleThema: {
                type: String,
                required: false
            },
            styleThemaLoading: {
                type: String,
                required: false
            },
            styleAlign: {
                type: String,
                required: false
            },
            skeleton: {
                type: Boolean,
                required: false
            },
            skeletonThema: {
                type: String,
                required: false
            },
            skeletonNumber: {
                type: Number,
                required: false
            }
        },

        head() {
            // Empty Array
            if (!this.posts && this.posts === null) {
                return { script: [] };
            }
            // Return
            const jsonldPosts = {
                type: 'application/ld+json',
                json: {
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Nejnovější příspěvky",
                    "itemListElement": this.posts.map((post, index) => {
                        return {
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@id": 'https://frytolnacestach.cz' + `/clanky/${post.slug}`,
                                "name": post.title,
                                "perex": post.perex
                            }
                        }
                    })
                }
            }

            return { script: [jsonldPosts] }
        }
    }
</script>