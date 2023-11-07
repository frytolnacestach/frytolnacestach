<template>
    <div class="skeleton-o-video-list-user">
        <div class="skeleton-o-video-list-user__outer">
            <div class="skeleton-o-video-list-user__items">
                <div v-for="index in 3" :key="index" class="skeleton-o-video-list-user__item">
                    <div class="skeleton-o-video-list-user__item-inner">
                        <div :class="`skeleton-o-video-list-user__image loading-image`+ styleThema"></div>
                        <div class="skeleton-o-video-list-user__text">
                            <h3 :class="`skeleton-o-video-list-user__title loading-image`+ styleThema"></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SkeletonoVideoListUserComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    }
</script>