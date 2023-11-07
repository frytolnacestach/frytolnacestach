<template>
    <div class="skeleton-o-article-list">
        <div class="skeleton-o-article-list-list__outer">
            <div class="skeleton-o-article-list__items">
                <div v-for="index in 3" :key="index" class="skeleton-o-article-list__item">
                    <div class="skeleton-o-article-list__item-inner">
                        <div :class="`skeleton-o-article-list__image loading-image`+ styleThema"></div>
                        <div class="skeleton-o-article-list__text">
                            <h3 :class="`skeleton-o-article-list__title loading-image`+ styleThema"></h3>
                            <p :class="`skeleton-o-article-list__perex loading-image`+ styleThema"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SkeletonoArticleListComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    }
</script>