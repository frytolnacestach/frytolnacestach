<template>
    <div class="skeleton-o-video-list">
        <div class="skeleton-o-video-list__outer">
            <div class="skeleton-o-video-list__items">
                <div v-for="index in 3" :key="index" class="skeleton-o-video-list__item">
                    <div class="skeleton-o-video-list__item-inner">
                        <div :class="`skeleton-o-video-list__image loading-image`+ styleThema"></div>
                        <div class="skeleton-o-video-list__text">
                            <h3 :class="`skeleton-o-video-list__title loading-image`+ styleThema"></h3>
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
            styleThema: {
                type: String,
                required: true
            }
        }
    }
</script>