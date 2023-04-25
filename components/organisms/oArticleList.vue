<template>
    <div :class="'o-article-list' + (styleThema ? styleThema : '') + (styleAlign ? styleAlign : '')">
        <div class="o-article-list-list__outer">
            <div class="o-article-list__items">
                <div v-for="post in posts" :key="post.id" class="o-article-list__item">
                    <div class="o-article-list__item-inner">
                        <div class="o-article-list__image loading-image">
                            <div v-if="images && images.find(image => image.id === post.id_image_cover)" class="o-article-list__image-lazyload">
                                <img class="o-article-list__image-file lazyload-file"
                                    data-sizes="(max-width: 374px) 340px, (max-width: 439px) 400px, (max-width: 575px) 540px, (max-width: 767px) 400px, (max-width: 991px) 340px, 400px"
                                    :data-srcset="`
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name}-340.webp 340w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name}-400.webp 400w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name}-767.webp 540w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name}-680-2x.webp 680w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name}-800-2x.webp 800w,
                                        https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name}-1080-2x.webp 1080w
                                        `"
                                    :data-src="`https://image.frytolnacestach.cz/storage/${images.find(image => image.id === post.id_image_cover).source + images.find(image => image.id === post.id_image_cover).name}.webp`"
                                    :alt="post.title ? post.title : 'Obrázek článku'"
                                    v-lazy>
                            </div>
                            <div v-else class="o-article-list__image-lazyload">
                                <img class="o-article-list__image-file lazyload-file"
                                    data-sizes="(max-width: 374px) 340px, (max-width: 439px) 400px, (max-width: 575px) 540px, (max-width: 767px) 400px, (max-width: 991px) 340px, 992px"
                                    :data-srcset="`
                                        https://image.frytolnacestach.cz/storage/_default/hero-340.webp 340w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-400.webp 400w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-767.webp 540w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-680-2x.webp 680w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-800-2x.webp 800w,
                                        https://image.frytolnacestach.cz/storage/_default/hero-1080-2x.webp 1080w
                                        `"
                                    :data-src="`https://image.frytolnacestach.cz/storage/_default/hero.webp`"
                                    :alt="post.title ? post.title : 'Obrázek článku'"
                                    v-lazy>
                            </div>
                            <NuxtLink class="o-article-list__image-link" :to="`/clanky/${post.slug}`" v-if="post.slug"></NuxtLink>
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