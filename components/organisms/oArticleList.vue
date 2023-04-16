<template>
    <div :class="'o-article-list' + (styleThema ? styleThema : '') + (styleAlign ? styleAlign : '')">
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
                                    :alt="post.title ? post.title : 'Obrázek článku'"
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
                                    :alt="post.title ? post.title : 'Obrázek článku'"
                                />
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