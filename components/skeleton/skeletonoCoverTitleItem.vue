<template>
    <div class="skeleton-o-cover-title-item">
        <div class="skeleton-o-cover-title-item__outer">
            <div class="skeleton-o-cover-title-item__items">
                <div v-for="index in 15" :key="index" class="skeleton-o-cover-title-item__item">
                    <div class="skeleton-o-cover-title-item__content">
                        <div :class="`skeleton-o-cover-title-item__image loading-image`+ styleThema"></div>
                    </div>
                    <div class="skeleton-o-cover-title-item__name">
                        <div :class="`skeleton-o-cover-title-item__name-link loading-image` + styleThema"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default defineComponent({
        name: 'SkeletonoCoverTitleItemComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    })
</script>