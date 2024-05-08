<template>
    <section class="t-component-skeleton">
        
        <!-- SHOW - skeleton -->
        <skeletonoArticleListUser styleThema=" -skeleton-blue" v-if="posts && posts.length === 0 && skeleton" />
        <!-- SHOW - skeleton END -->

        <!-- SHOW - client -->
        <client-only v-if="posts !== null && !skeleton">
            <div :class="'o-article-list-user' + (styleThema ? styleThema : '') + (styleAlign ? styleAlign : '')">
                <div class="o-article-list-user-list__outer">
                    <div class="o-article-list-user__items">
                        <div v-for="post in posts" :key="post.id" class="o-article-list-user__item print-section">
                            <div class="o-article-list-user__item-inner">
                                <div class="o-article-list-user__image loading-image -blue">
                                    <div v-if="images && images.find(image => image.id === post.id_image_cover)" class="o-article-list-user__image-lazyload">
                                        <aImage 
                                            :alt="post.title ? post.title : 'Obrázek článku'" 
                                            :author="images.find(image => image.id === post.id_image_cover).author"
                                            :lazy=true
                                            :imageSource="images.find(image => image.id === post.id_image_cover).source"
                                            :imageName="images.find(image => image.id === post.id_image_cover).name"
                                            :sizes=imageSizes
                                            :srcSet=imageSizesMedia
                                            cssClassComponent="o-article-list-user"
                                        />
                                    </div>
                                    <div v-else class="o-article-list-user__image-lazyload">
                                        <aImage 
                                            :alt="post.title ? post.title : 'Obrázek článku'" 
                                            :lazy=true
                                            imageSource="/_default/"
                                            imageName="no-image"
                                            :sizes=imageSizes
                                            :srcSet=imageSizesMedia
                                            cssClassComponent="o-article-list-user"
                                        />
                                    </div>
                                    <NuxtLink class="o-article-list-user__image-link" :to="`/clanky/${post.slug}`" :aria-label="`Přečti si článek ${post.title}`" v-if="post.slug"></NuxtLink>
                                </div>
                                <div class="o-article-list-user__text">
                                    <h3 class="o-article-list-user__title" v-if="post.title">
                                        <NuxtLink class="o-article-list-user__title-link" :to="`/clanky/${post.slug}`">{{ post.title }}</NuxtLink>
                                    </h3>
                                    <p class="o-article-list-user__perex" v-if="post.perex">
                                        <NuxtLink class="o-article-list-user__perex-link" :to="`/clanky/${post.slug}`">{{ post.perex }}</NuxtLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
        <!-- SHOW - client END -->

    </section>
</template>

<script>
    import skeletonoArticleListUser from '~/components/skeleton/skeletonoArticleListUser.vue'
    import aImage from '~/components/atoms/aImage.vue'

    export default defineComponent({
        name: 'OrganismsoArticleListComponent',

        components: {
            skeletonoArticleListUser,
            aImage
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
            styleAlign: {
                type: String,
                required: false
            },
            skeleton: {
                type: Boolean,
                required: true
            }
        },

        data() {
            return {
                imageSizesMedia: [
                    {
                        "mediaQueriesWidth": 349,
                        "elementWidth": 320
                    },
                    {
                        "mediaQueriesWidth": 374,
                        "elementWidth": 340
                    },
                    {
                        "mediaQueriesWidth": 399,
                        "elementWidth": 360
                    },
                    {
                        "mediaQueriesWidth": 459,
                        "elementWidth": 420
                    },
                    {
                        "mediaQueriesWidth": 575,
                        "elementWidth": 536
                    },
                    {
                        "mediaQueriesWidth": 767,
                        "elementWidth": 360
                    },
                    {
                        "mediaQueriesWidth": 1019,
                        "elementWidth": 320
                    },
                    {
                        "mediaQueriesWidth": 1219,
                        "elementWidth": 384
                    },
                    {
                        "mediaQueriesWidth": 1399,
                        "elementWidth": 442
                    },
                    {
                        "mediaQueriesWidth": null,
                        "elementWidth": 620
                    }
                ],
                imageSizes: [
                    {
                        "elementWidth": 320,
                        "imageWidth": 320,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 340,
                        "imageWidth": 340,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 360,
                        "imageWidth": 360,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 384,
                        "imageWidth": 384,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 420,
                        "imageWidth": 420,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 536,
                        "imageWidth": 536,
                        "orientation": "h-"
                    },
                    {
                        "elementWidth": 620,
                        "imageWidth": 620,
                        "orientation": "h-"
                    }
                ]
            }
        }
    })
</script>