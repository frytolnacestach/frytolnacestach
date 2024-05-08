<template>
    <div class="skeleton-o-article-list-user">
        <div class="skeleton-o-article-list-user-list__outer">
            <div class="skeleton-o-article-list-user__items">
                <div v-for="index in 3" :key="index" class="skeleton-o-article-list-user__item">
                    <div class="skeleton-o-article-list-user__item-inner">
                        <div :class="`skeleton-o-article-list-user__image loading-image`+ styleThema"></div>
                        <div class="skeleton-o-article-list-user__text">
                            <h3 :class="`skeleton-o-article-list-user__title loading-image`+ styleThema"></h3>
                            <p :class="`skeleton-o-article-list-user__perex loading-image`+ styleThema"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'SkeletonoArticleListUserComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    })
</script>