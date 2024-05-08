<template>
    <section class="t-component-skeleton">
        
        <!-- SHOW - skeleton -->
        <skeletonoArticleList :styleThema="(skeletonThema ? skeletonThema : '')" :skeletonNumber="skeletonNumber" v-if="posts === null && skeleton" />
        <!-- SHOW - skeleton END -->

        <!-- SHOW - client -->
        <client-only v-if="posts !== null && !skeleton">
            <div :class="'o-article-list-small' + (styleThema ? styleThema : '') + (styleAlign ? styleAlign : '')">
                <div class="o-article-list-small__outer">
                    <div class="o-article-list-small__items">
                        <div v-for="post in posts" :key="post.id" class="o-article-list-small__item print-section">
                            <div :class="'o-article-list-small__image loading-image ' + (styleThemaLoading ? styleThemaLoading : '')">
                                <div v-if="images && images.find(image => image.id === post.id_image_cover)" class="o-article-list-small__image-lazyload">
                                    <aImage 
                                        :alt="post.title ? post.title : 'Obrázek článku'" 
                                        :author="images.find(image => image.id === post.id_image_cover).author"
                                        :lazy=true
                                        :imageSource="images.find(image => image.id === post.id_image_cover).source"
                                        :imageName="images.find(image => image.id === post.id_image_cover).name"
                                        :sizes=imageSizes
                                        :srcSet=imageSizesMedia
                                        cssClassComponent="o-article-list-small"
                                    />
                                </div>
                                <div v-else class="o-article-list-small__image-lazyload">
                                    <aImage 
                                        :alt="post.title ? post.title : 'Obrázek článku'" 
                                        :lazy=true
                                        imageSource="/_default/"
                                        imageName="no-image"
                                        :sizes=imageSizes
                                        :srcSet=imageSizesMedia
                                        cssClassComponent="o-article-list-small"
                                    />
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
        <!-- SHOW - client END -->
        
    </section>
</template>

<script>
    import skeletonoArticleList from '~/components/skeleton/skeletonoArticleList.vue'
    import aImage from '~/components/atoms/aImage.vue'

    export default defineComponent({
        name: 'OrganismsoArticleListSmallComponent',

        components: {
            skeletonoArticleList,
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
    })
</script>