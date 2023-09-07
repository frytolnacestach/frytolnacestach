<template>
    <div class="skeleton-o-follower-button">
        <div class="skeleton-o-follower-button__outer">
            <div class="skeleton-o-follower-button__inner">
                <div class="skeleton-o-follower-button__items">
                    <div class="skeleton-o-follower-button__item">
                        <span :class="`skeleton-o-follower-button__button loading-image`+ styleThema"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SkeletonoFollowerButtonComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    }
</script>