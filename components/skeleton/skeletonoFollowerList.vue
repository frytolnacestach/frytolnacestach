<template>
    <div class="skeleton-o-follower-list">
        <div class="skeleton-o-follower-list__outer">
            <div class="skeleton-o-follower-list__items">
                <div v-for="index in 5" :key="index" class="skeleton-o-follower-list__item">
                    <div class="skeleton-o-follower-list__content-outer">
                        <div class="skeleton-o-follower-list__content-inner">
                            <div :class="`skeleton-o-follower-list__image loading-image`+ styleThema"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default defineComponent({
        name: 'SkeletonoFollowerListComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    })
</script>