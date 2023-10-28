<template>
    <div class="skeleton-o-follower-list">
        <div class="skeleton-o-follower-list__outer">
            <div class="skeleton-o-follower-list__items">
                <div v-for="index in 5" class="skeleton-o-follower-list__item">
                    <div class="skeleton-o-follower-list__content">
                        <div :class="`skeleton-o-follower-list__image loading-image`+ styleThema"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrganismsSkeletonoFollowerListComponent',

        props: {
            styleThema: {
                type: String,
                required: true
            }
        }
    }
</script>