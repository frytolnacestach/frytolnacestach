<template>
    <div :class="'skeleton-o-video-list' + (styleThema ? styleThema : '')">
        <div class="skeleton-o-video-list__outer">
            <div class="skeleton-o-video-list__items">
                <div v-for="index in 3" :key="index" class="skeleton-o-video-list__item">
                    <div class="skeleton-o-video-list__item-inner">
                        <div :class="`skeleton-o-video-list__image loading-image`+ skeletonThema"></div>
                        <div class="skeleton-o-video-list__text">
                            <h3 :class="`skeleton-o-video-list__title loading-image`+ skeletonThema"></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SkeletonoVideoListComponent',

        props: {
            skeletonThema: {
                type: String,
                required: true
            },
            styleThema: {
                type: String,
                required: false
            },
        }
    }
</script>