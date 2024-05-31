<template>
    <div class="skeleton-o-review-item-list">
        <div class="skeleton-o-review-item-list__outer">
            <div class="skeleton-o-review-item-list__inner">
                <div class="skeleton-o-review-item-list__items">
                    <div v-for="index in 3" :key="index" class="skeleton-o-review-item-list__item">
                        <div class="skeleton-o-review-item-list__content">
                            <div :class="`skeleton-o-review-item-list__image loading-image`+ styleThema"></div>
                            <div :class="`skeleton-o-review-item-list__text loading-image`+ styleThema"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'SkeletonoReviewItemListComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    })
</script>