<template>
    <div :class="'o-article-list' + (styleThema ? styleThema : '') + (styleAlign ? styleAlign : '')">
        <div class="o-article-list-list__outer">
            <div class="o-article-list__items">
                <div v-for="post in posts" :key="post.id" class="o-article-list__item">
                    <div class="o-article-list__item-inner">
                        <div class="o-article-list__image loading-image -gray">
                            <div v-if="images && images.find(image => image.id === post.id_image_cover)" class="o-article-list__image-lazyload">
                                <img class="o-article-list__image-file lazyload-file"
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
                            <div v-else class="o-article-list__image-lazyload">
                                <img class="o-article-list__image-file lazyload-file"
                                    data-sizes="(max-width: 349px) 320px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 360px, (max-width: 1019px) 320px, (max-width: 1219px) 384px, (max-width: 1399px) 442px, 620px"
                                    :data-srcset="`
                                        https://image.frytolnacestach.cz/storage/_default/h-hero-320.webp 320w,
                                        https://image.frytolnacestach.cz/storage/_default/h-hero-340.webp 340w,
                                        https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 360w,
                                        https://image.frytolnacestach.cz/storage/_default/h-hero-384.webp 384w,
                                        https://image.frytolnacestach.cz/storage/_default/h-hero-420.webp 420w,
                                        https://image.frytolnacestach.cz/storage/_default/h-hero-536.webp 536w,
                                        https://image.frytolnacestach.cz/storage/_default/h-hero-620.webp 620w,
                                        https://image.frytolnacestach.cz/storage/_default/h-hero-640-2x.webp 640w,
                                        https://image.frytolnacestach.cz/storage/_default/h-hero-680-2x.webp 680w,
                                        https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 720w,
                                        https://image.frytolnacestach.cz/storage/_default/h-hero-768-2x.webp 768w,
                                        https://image.frytolnacestach.cz/storage/_default/h-hero-840-2x.webp 840w,
                                        https://image.frytolnacestach.cz/storage/_default/h-hero-1072-2x.webp 1072w,
                                        https://image.frytolnacestach.cz/storage/_default/h-hero-1240-2x.webp 1240w
                                        `"
                                    :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                    :alt="post.title ? post.title : 'Obrázek článku'"
                                    v-lazy>
                            </div>
                            <NuxtLink class="o-article-list__image-link" :to="`/clanky/${post.slug}`" :aria-label="`Přečti si článek ${post.title}`" v-if="post.slug"></NuxtLink>
                        </div>

                        <div class="o-article-list__text">
                            <h3 class="o-article-list__title" v-if="post.title">
                                <NuxtLink class="o-article-list__title-link" :to="`/clanky/${post.slug}`">{{ post.title }}</NuxtLink>
                            </h3>
                            <p class="o-article-list__perex" v-if="post.perex">
                                <NuxtLink class="o-article-list__perex-link" :to="`/clanky/${post.slug}`">{{ post.perex }}</NuxtLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsoArticleListComponent',

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
            styleAlign: {
                type: String,
                required: false
            }
        }
    }
</script>